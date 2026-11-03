/* Shared helpers: every screen is an HTML string built from these. */
const IC={
search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',scan:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',check:'<path d="M20 6 9 17l-5-5"/>',
alert:'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
lock:'<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',wifi:'<path d="M12 20h.01"/><path d="M8.5 16.4a5 5 0 0 1 7 0"/><path d="M2 8.8a15 15 0 0 1 20 0"/><path d="M5 12.9a10 10 0 0 1 14 0"/>',
wifioff:'<path d="M12 20h.01"/><path d="M8.5 16.4a5 5 0 0 1 7 0"/><path d="M2 8.8a15 15 0 0 1 20 0"/><path d="M5 12.9a10 10 0 0 1 14 0"/><path d="m2 2 20 20"/>',
printer:'<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
qr:'<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M16 12h1"/><path d="M12 21v-1"/>',
scale:'<path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0z"/><path d="M19 7l-3 7a3 3 0 0 0 6 0z"/>',
tag:'<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5"/>',
box:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
truck:'<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
percent:'<line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
store:'<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/>',
cash:'<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/>',card:'<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
phone:'<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
trash:'<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>',chevR:'<path d="m9 18 6-6-6-6"/>',chevL:'<path d="m15 18-6-6 6-6"/>',chevD:'<path d="m6 9 6 6 6-6"/>',
filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',swap:'<path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>',
file:'<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8 7 17M17 7l2.8-2.8"/>',
bar:'<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
calendar:'<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
mail:'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
ret:'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
pause:'<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',backspace:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" x2="12" y1="9" y2="15"/><line x1="12" x2="18" y1="9" y2="15"/>',
receipt:'<path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 2 2V2l-2 2-3-2-3 2-3-2-3 2z"/><path d="M8 8h8M8 12h8"/>'};
const ico=(n,s=18,c='currentColor')=>`<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${IC[n]||''}</svg>`;
const B=(t,tone='neutral')=>`<span class="badge ${tone}">${t}</span>`;
const btn=(t,k='primary',x='')=>`<button class="btn ${k} ${x}">${t}</button>`;
const chip=(t,on)=>`<span class="chip ${on?'on':''}">${t}</span>`;
const fld=(label,val,st='',hint='',ph='')=>`<div class="field"><label>${label}</label><div class="inp ${st}">${val?`<span>${val}</span>`:`<span class="ph">${ph}</span>`}</div>${hint?`<div class="hint ${st==='error'?'error':st==='ok'?'ok':''}">${hint}</div>`:''}</div>`;
const card=(t,body,cls='')=>`<div class="card ${cls}">${t?`<h3>${t}</h3>`:''}${body}</div>`;
const kpi=(l,v,d,tone,i='bar')=>`<div class="kpi"><div class="l"><span>${l}</span>${ico(i,18,'#12355B')}</div><b>${v}</b>${B(d,tone)}</div>`;
const tbl=(cols,rows,o={})=>{const al=c=>c[0]==='>'?'r':c[0]==='^'?'c':'';const nm=c=>/^[>^]/.test(c)?c.slice(1):c;const cl=o.cls||{};
return `<div class="tblw">${o.bulk?`<div class="bulk">${o.bulk}</div>`:''}<table><thead><tr>${o.check?'<th style="width:40px"><span class="cb"></span></th>':''}${cols.map(c=>`<th class="${al(c)}">${nm(c)}</th>`).join('')}</tr></thead><tbody>${rows.map((r,i)=>`<tr class="${cl[i]||''}">${o.check?`<td><span class="cb ${cl[i]==='sel'?'on':''}">${cl[i]==='sel'?ico('check',12,'#fff'):''}</span></td>`:''}${r.map((v,j)=>`<td class="${al(cols[j])}">${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;};
const BI={danger:['alert','#D64545'],warning:['alert','#9A6410'],info:['info','#2F80ED'],success:['check','#1E9E6A']};
const banner=(tone,t,m,act='')=>`<div class="banner ${tone}">${ico(BI[tone][0],20,BI[tone][1])}<div><b>${t}</b><span>${m}</span></div>${act?`<div class="act">${act}</div>`:''}</div>`;
const empty=(icon,t,m,btns='',tips='')=>`<div class="empty"><div class="ring">${ico(icon,44,'#12355B')}</div><h2>${t}</h2><p>${m}</p>${btns?`<div class="row gap12">${btns}</div>`:''}${tips?`<div class="tips">${tips}</div>`:''}</div>`;
const tip=(t,m)=>`<div class="tip"><b>${t}</b><div class="m">${m}</div></div>`;
const steps=(arr,at)=>`<div class="steps">${arr.map((s,i)=>`<div class="step ${i<at?'done':i===at?'on':''}"><i>${i<at?'✓':i+1}</i>${s}</div>${i<arr.length-1?'<div class="sep"></div>':''}`).join('')}</div>`;
const tgl=(l,s,on)=>`<div class="tgl"><div><b class="s6">${l}</b>${s?`<small>${s}</small>`:''}</div><div class="tg ${on?'on':''}"></div></div>`;
const denom=(d,q,t)=>`<div class="denom"><div class="d">${d}</div><div class="q">${q}</div><span class="m3">=</span><div class="t">${t}</div></div>`;
const modal=(t,sub,body,w=640,top=100)=>`<div class="scrim"></div><div class="modal" style="width:${w}px;top:${top}px"><div class="mh"><div><h2>${t}</h2>${sub?`<div class="sub">${sub}</div>`:''}</div><div class="x">${ico('x',20,'#475467')}</div></div>${body}</div>`;
const posTop=(o={})=>`<div class="pos-top"><div class="brand"><div class="logo">${ico('store',20,'#fff')}</div>Nalangadi POS<div style="width:1px;height:24px;background:#1B4A7C;margin:0 4px"></div><div class="meta"><span style="font-size:14px;font-weight:600">${o.counter||'Counter 3 · T. Nagar'}</span><small>${o.shift||'Shift open 09:02'}</small></div></div><div class="right"><span class="pill ${o.offline?'off':''}">${ico(o.offline?'wifioff':'wifi',14,o.offline?'#FFB4B4':'#7EE0B0')}${o.offline?'Offline · 3 bills queued':'Online'}</span>${o.scale===false?`<span class="pill off">${ico('scale',14,'#FFB4B4')}Scale not found</span>`:`<span class="pill">${ico('scale',14,'#7EE0B0')}Scale OK</span>`}<span style="font-weight:600">14:32</span><div class="avatar">M</div><div class="meta"><span style="font-size:13px;font-weight:600">Murugan</span><small>Cashier</small></div></div></div>`;
const posScreen=(left,right,o={})=>`<div class="scr pos">${posTop(o)}<div class="pos-body"><div class="pos-left">${left}</div>${right?`<div class="pos-right">${right}</div>`:''}</div>${o.modal||''}</div>`;
const NAV=[['bar','Dashboard'],['receipt','Sales & returns'],['truck','Purchase'],['users','Agencies'],['box','Stock'],['qr','Own products & labels'],['tag','Pricing'],['cash','Collections & reports'],['percent','GST & tax'],['shield','Staff & roles'],['gear','Settings']];
const adm=(active,title,sub,actions,body,o={})=>`<div class="scr adm"><div class="side"><div class="logo-row"><div class="logo">${ico('store',18,'#fff')}</div><div><b>Nalangadi</b><small>Supermarket admin</small></div></div>${NAV.map(([i,n])=>`<div class="nav ${n===active?'on':''}">${ico(i,18,n===active?'#fff':'#9FB3CF')}${n}${n==='Purchase'&&o.cnt?`<span class="cnt">${o.cnt}</span>`:''}</div>`).join('')}<div class="spacer"></div><div class="user"><div class="avatar">L</div><div><b style="font-size:13px">Lakshmi R.</b><small>Store manager · T. Nagar</small></div></div></div><div class="main"><div class="top"><div class="s">${ico('search',18,'#98A2B3')}Search item, barcode, bill, agency…</div><div class="r"><div class="sel-store">${ico('store',16,'#12355B')}Nalangadi · T. Nagar${ico('chevD',14,'#475467')}</div><div class="bell">${ico('bell',18,'#475467')}</div></div></div><div class="content"><div class="ph-row"><div><div class="h1">${title}</div>${sub?`<div class="sub">${sub}</div>`:''}</div><div class="row gap12">${actions||''}</div></div>${body}</div></div>${o.modal||''}</div>`;
const SCREENS=[];
const S=(flow,id,state,title,note,html)=>SCREENS.push({flow,id,state,title,note,html});
const STATE_LABEL={first:'First-time',filled:'Filled',error:'Negative',success:'Success'};
const FLOWS=[
{id:'F1',app:'Counter',name:'Sales billing',desc:'Scan or weigh items, apply GST, split payment, print tax invoice.'},
{id:'F2',app:'Counter',name:'Sales return',desc:'Find bill, select items, refund and issue a GST credit note (also across months).'},
{id:'F3',app:'Counter',name:'Day start',desc:'Open the counter with a counted opening float.'},
{id:'F4',app:'Counter',name:'End of day (counter)',desc:'Count cash and tenders, explain variance, close and print Z report.'},
{id:'F5',app:'Back-office',name:'Purchase',desc:'Purchase order, goods receiving with batch/expiry, supplier invoice with GST, posting.'},
{id:'F6',app:'Back-office',name:'Purchase return',desc:'Return goods to an agency and raise a debit note.'},
{id:'F7',app:'Back-office',name:'Purchase agency details',desc:'Agency (supplier) master: GSTIN, bank, terms, sales reps, ledger.'},
{id:'F8',app:'Back-office',name:'Stock upload & scan entry',desc:'Two ways to add stock: bulk Excel upload with validation (F8-1…4), or scan each item’s QR like the sales counter and enter quantity, batch, expiry, price and GST (F8-5…9).'},
{id:'F9',app:'Back-office',name:'Own products & QR labels',desc:'Own-brand packed items: label design, QR print queue.'},
{id:'F10',app:'Back-office',name:'Price fixing',desc:'Cost, MRP, selling price and margin guard with approvals and label reprint.'},
{id:'F11',app:'Back-office',name:'Day collections (store)',desc:'All counters tally and the store day closes.'},
{id:'F12',app:'Back-office',name:'Month collection report',desc:'Monthly collections, tender mix, GST summary and credit notes, with export.'},
{id:'F13',app:'Back-office',name:'GST setup',desc:'First-time tax setup and rate master.'}];
