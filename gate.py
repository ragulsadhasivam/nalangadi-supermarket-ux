"""Quality gate for the Nalangadi review site.
Run:  python gate.py            (needs: pip install playwright; Chrome installed)
Checks every screen at 1440x900 and writes contact sheets to review-shots/.
"""
import sys, os, re, json, datetime, pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).parent.resolve()
SHOTS = ROOT / 'review-shots'
SHOTS.mkdir(exist_ok=True)
URL = (ROOT / 'stage.html').as_uri()
INDEX = (ROOT / 'index.html').as_uri()

PER_SCREEN_JS = r"""
() => {
  const out = [];
  const idre = /^[A-Z]{1,4}[\/-][A-Za-z0-9\/-]{2,}$/;
  document.querySelectorAll('section[data-id]').forEach(sec => {
    const id = sec.dataset.id, scr = sec.firstElementChild, r0 = scr.getBoundingClientRect();
    const f = {id, overflow: [], clipped: [], raw: [], wrap: [], small: [], touch: [], emptyNoAction: false, text: scr.innerText};
    const pos = scr.classList.contains('pos');
    scr.querySelectorAll('*').forEach(el => {
      const cs = getComputedStyle(el), r = el.getBoundingClientRect();
      if (!r.width || !r.height || cs.display === 'none' || cs.visibility === 'hidden') return;
      if (el.closest('.scrim')) return;
      if (r.right > r0.right + 1 || r.bottom > r0.bottom + 1 || r.left < r0.left - 1) {
        if (f.overflow.length < 3) f.overflow.push(el.className + ' ' + (el.textContent || '').slice(0, 30));
      }
      if ((cs.overflowX !== 'visible' || cs.overflowY !== 'visible') && el !== scr && !el.classList.contains('tblw') &&
          (el.scrollWidth > el.clientWidth + 2 || el.scrollHeight > el.clientHeight + 2) && el.clientWidth > 0 && !el.matches('svg,.ic')) {
        if (f.clipped.length < 3) f.clipped.push(el.className + ' ' + (el.textContent || '').slice(0, 30));
      }
      const own = [...el.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim());
      if (own.length) {
        const fs = parseFloat(cs.fontSize);
        if (fs < 13 && !el.closest('.label') && f.small.length < 3) f.small.push(fs + 'px ' + own[0].textContent.trim().slice(0, 25));
        const t = own.map(n => n.textContent).join('').trim();
        if (idre.test(t)) {
          const rg = document.createRange(); rg.selectNodeContents(el);
          const tops = new Set([...rg.getClientRects()].map(x => Math.round(x.top)));
          if (tops.size > 1 && f.wrap.length < 3) f.wrap.push(t);
        }
      }
      if (pos && el.matches('.btn,.qb,.vd,.chip,.key,.pk') && r.height < 47.5 && f.touch.length < 3) f.touch.push(el.className + ' ' + Math.round(r.height) + 'px ' + (el.textContent || '').slice(0, 20));
    });
    const tx = scr.innerText + scr.innerHTML;
    if (/&lt;|&gt;|&amp;|undefined|NaN|\[object|Infinity/.test(scr.innerText)) f.raw.push('literal entity/undefined/NaN in text');
    if (/<(?!\/?[a-z])/.test(scr.innerText)) f.raw.push('raw <');
    scr.querySelectorAll('.empty').forEach(e => { if (e.querySelector('h2') && !e.querySelector('.btn') && !e.querySelector('.tip')) f.emptyNoAction = true; });
    out.push(f);
  });
  return out;
}
"""

EXPECT_JS = r"""
() => {
  const D = dayAll(), M = monthAll(), P = buyTotals(poInvLines()), E = buyTotals(entAll()), N = dnTotals();
  const bad = [];
  const eq = (a, b, m) => { if (Math.abs(a - b) > 0.005) bad.push(m + ' ' + a + ' != ' + b); };
  eq(D.net, D.cs.reduce((a, c) => a + c.net, 0), 'day net');
  eq(M.tax, M.rows.reduce((a, r) => a + r.net, 0), 'month tax');
  eq(P.total, P.tx + P.gst, 'po invoice total');
  eq(E.total, E.tx + E.gst, 'entry total');
  D.cs.forEach(c => eq(c.net, Object.values(c.tender).reduce((a, b) => a + b, 0), 'counter ' + c.n + ' tender'));
  D.cs.forEach(c => eq(c.slabs.reduce((a, s) => a + s.net, 0), c.net, 'counter ' + c.n + ' slabs'));
  const must = {
    'F11-2': [inr(D.net), inr(D.cash), inr(D.gst)], 'F11-4': [inr(D.net), inr(D.cash), inr(D.gst)],
    'F12-2': [inr(M.tax), inr(M.cn)], 'F8-9': [inr(E.tx), inr(E.gst)],
    'F7-5': [] };
  const missing = [];
  document.querySelectorAll('section[data-id]').forEach(s => {
    (must[s.dataset.id] || []).forEach(v => { if (!s.innerText.includes(v)) missing.push(s.dataset.id + ' lacks ' + v); });
  });
  // F12-2 net GST card must equal the table total
  const f12 = document.querySelector('[data-id="F12-2"]');
  if (f12 && (f12.innerText.split(inr(M.tax)).length - 1) < 2) missing.push('F12-2 GST card and table total differ');
  return {bad, missing};
}
"""

FLOWS_JS = "() => ({flows: FLOWS.map(f => ({id: f.id, na: f.na || {}})), screens: SCREENS.map(s => ({id: s.id, flow: s.flow, state: s.state}))})"

WD = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
MONS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']


def check_weekdays(text):
    bad = []
    for m in re.finditer(r'\b(Mon|Tues?|Wed(?:nes)?|Thu(?:rs)?|Fri|Sat(?:ur)?|Sun)[a-z]*day?,?\s+(\d{1,2})\s+([A-Z][a-z]{2})[a-z]*\s+(\d{4})', text):
        wd = m.group(1).lower()[:3]
        mon = m.group(3).lower()
        if mon not in MONS:
            continue
        try:
            d = datetime.date(int(m.group(4)), MONS.index(mon) + 1, int(m.group(2)))
        except ValueError:
            bad.append(m.group(0) + ' (not a real date)')
            continue
        if WD[d.weekday()][:3] != wd:
            bad.append(m.group(0) + ' is a ' + WD[d.weekday()])
    return bad


def main():
    sys.stdout.reconfigure(encoding='utf-8')
    fails, warns = [], []
    with sync_playwright() as p:
        b = p.chromium.launch(channel='chrome')
        pg = b.new_page(viewport={'width': 1500, 'height': 940})
        errs = []
        pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.goto(URL)
        pg.wait_for_timeout(600)
        if errs:
            fails += ['CONSOLE ' + e for e in errs]
        res = pg.evaluate(PER_SCREEN_JS)
        print('screens rendered:', len(res))
        for f in res:
            for k in ('overflow', 'clipped', 'raw', 'wrap', 'small', 'touch'):
                if f[k]:
                    fails.append(f"{f['id']} {k.upper()}: {f[k]}")
            if f['emptyNoAction']:
                warns.append(f"{f['id']} empty state has no action or tip")
            for w in check_weekdays(f['text']):
                fails.append(f"{f['id']} WEEKDAY: {w}")
            if 'Saturday' in f['text'] and '25 Oct' in f['text']:
                fails.append(f"{f['id']} says Saturday for 25 Oct")
        ex = pg.evaluate(EXPECT_JS)
        fails += ['MATHS ' + x for x in ex['bad']] + ['NUMBER ' + x for x in ex['missing']]
        meta = pg.evaluate(FLOWS_JS)
        ids = [s['id'] for s in meta['screens']]
        key = lambda i: tuple(int(x) for x in re.findall(r'\d+', i))
        if ids != sorted(ids, key=key):
            fails.append('SORTED SCREENS: SCREENS is not in flow/number order')
        if len(set(ids)) != len(ids):
            fails.append('DUPLICATE screen ids')
        for fl in meta['flows']:
            have = {s['state'] for s in meta['screens'] if s['flow'] == fl['id']}
            for st in ('first', 'filled', 'error', 'success'):
                if st not in have and st not in fl['na']:
                    fails.append(f"COVERAGE {fl['id']} lacks {st} and has no na reason")
        # screenshots: failing screens in full, one contact sheet per flow from the real review site
        fail_ids = {re.match(r'(F\d+-\d+)', x.split(' ', 1)[0] if x[0] == 'F' else '').group(1) for x in fails if re.match(r'F\d+-\d+', x)} if fails else set()
        for sid in sorted(fail_ids):
            try:
                pg.locator(f'section[data-id="{sid}"]').screenshot(path=str(SHOTS / f'fail-{sid}.png'))
            except Exception:
                pass
        ip = b.new_page(viewport={'width': 1800, 'height': 1000})
        ierr = []
        ip.on('pageerror', lambda e: ierr.append(str(e)))
        ip.on('console', lambda m: ierr.append(m.text) if m.type == 'error' else None)
        ip.goto(INDEX)
        ip.wait_for_timeout(400)
        # contact sheets: four screens per image, from the real stage
        order = [s['id'] for s in meta['screens']]
        for n in range(0, len(order), 4):
            grp = order[n:n + 4]
            ip.evaluate("""(ids) => { document.body.innerHTML = '<div id=cs style="display:grid;grid-template-columns:repeat(2,720px);gap:8px;background:#fff;width:1456px"></div>'; const c=document.getElementById('cs'); ids.forEach(id=>{const s=SCREENS.find(x=>x.id===id); const d=document.createElement('div'); d.style.cssText='width:720px;height:450px;position:relative;overflow:hidden;border:1px solid #ccc'; d.innerHTML='<div style="width:1440px;height:900px;transform:scale(.5);transform-origin:0 0">'+s.html+'</div><b style="position:absolute;left:6px;top:6px;background:#000;color:#fff;padding:2px 8px;border-radius:6px;font:13px sans-serif">'+id+'</b>'; c.appendChild(d);}); }""", grp)
            ip.screenshot(path=str(SHOTS / f'contact-{n // 4 + 1:02d}.png'), full_page=True)
        ip.goto(INDEX)
        ip.wait_for_timeout(300)
        if ierr:
            fails += ['INDEX ' + e for e in ierr]
        # hash routing + viewer dialog behaviour
        ip.goto(INDEX + '#/flow/F2?state=error')
        ip.wait_for_timeout(300)
        n_cards = ip.locator('[data-card]').count()
        if n_cards != len([s for s in meta['screens'] if s['flow'] == 'F2' and s['state'] == 'error']):
            fails.append(f'INDEX filter by hash showed {n_cards} cards')
        ip.goto(INDEX + '#/screen/F2-5')
        ip.wait_for_timeout(300)
        if ip.locator('#ov[role=dialog][aria-modal=true].show').count() != 1:
            fails.append('INDEX viewer is not an open modal dialog at #/screen/F2-5')
        if ip.evaluate("() => document.activeElement.id") != 'cx':
            fails.append('INDEX focus not moved into the dialog')
        if 'of' not in ip.locator('#ovh .pos').inner_text():
            fails.append('INDEX position text missing')
        ip.keyboard.press('Control+a')
        ip.keyboard.press('Control+c')
        if ip.evaluate("() => Object.keys(JSON.parse(localStorage.getItem('nalangadi-review-v1')||'{}')).length") != 0:
            fails.append('INDEX Ctrl+A/Ctrl+C changed a verdict')
        ip.keyboard.press('a')
        ip.wait_for_timeout(200)
        if ip.evaluate("() => location.hash") == '#/screen/F2-5':
            fails.append('INDEX approve did not advance')
        ip.keyboard.press('u')
        ip.keyboard.press('Escape')
        ip.wait_for_timeout(300)
        if ip.locator('#ov.show').count() != 0:
            fails.append('INDEX Esc did not close the viewer')
        # narrow screen: no horizontal scroll
        mp = b.new_page(viewport={'width': 360, 'height': 740})
        for hh in ('#/', '#/flow/F1', '#/coverage', '#/review'):
            mp.goto(INDEX + hh)
            mp.wait_for_timeout(250)
            if mp.evaluate("() => document.documentElement.scrollWidth > innerWidth + 1"):
                fails.append('INDEX horizontal scroll at 360px on ' + hh)
        mp.close()
        fails += ['INDEX ' + e for e in ierr]
        try:
            ip.add_script_tag(url='https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.9.1/axe.min.js')
            for hh in ('#/', '#/coverage', '#/review', '#/flow/F1', '#/flow/F30'):
                ip.goto(INDEX + hh)
                ip.wait_for_timeout(300)
                ip.add_script_tag(url='https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.9.1/axe.min.js')
                r = ip.evaluate("async () => (await axe.run(document.body,{runOnly:['wcag2a','wcag2aa'],rules:{'color-contrast':{enabled:true}}})).violations.filter(v=>!['region'].includes(v.id)).map(v=>v.id+' x'+v.nodes.length+' '+v.nodes.slice(0,3).map(n=>n.html.slice(0,60)+' '+(n.any[0]&&n.any[0].message||'').slice(0,80)).join(' | '))")
                if r:
                    fails.append(f'AXE index {hh}: {r}')
            pg.add_script_tag(url='https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.9.1/axe.min.js')
            r = pg.evaluate("""async () => { const o=[]; for (const s of document.querySelectorAll('section[data-id]')) { const v=(await axe.run(s,{runOnly:['color-contrast']})).violations; if (v.length) o.push(s.dataset.id+' x'+v[0].nodes.length+' e.g. '+v[0].nodes[0].html.slice(0,60)); } return o; }""")
            fails += ['CONTRAST ' + x for x in r]
        except Exception as e:
            warns.append('axe not run: ' + str(e)[:80])
        b.close()
    print('\nWARNINGS', len(warns))
    for w in warns:
        print('  ' + w)
    print('\nFAILURES', len(fails))
    for f in fails:
        print('  ' + f)
    json.dump({'fails': fails, 'warns': warns}, open(SHOTS / 'gate.json', 'w'), indent=1)
    sys.exit(1 if fails else 0)


if __name__ == '__main__':
    main()
