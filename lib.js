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
const tbl=(cols,rows,o={})=>{const al=c=>c[0]==='>'?'r':c[0]==='^'?'c':'';const nm=c=>/^[>^]/.test(c)?c.slice(1):c;const cl=o.cls||{};const wr=o.wrap||[];
return `<div class="tblw">${o.bulk?`<div class="bulk">${o.bulk}</div>`:''}<table><thead><tr>${o.check?'<th style="width:40px"><span class="cb"></span></th>':''}${cols.map(c=>`<th class="${al(c)}">${nm(c)}</th>`).join('')}</tr></thead><tbody>${rows.map((r,i)=>`<tr class="${cl[i]||''}">${o.check?`<td><span class="cb ${cl[i]==='sel'?'on':''}">${cl[i]==='sel'?ico('check',12,'#fff'):''}</span></td>`:''}${r.map((v,j)=>`<td class="${al(cols[j])} ${wr.includes(j)?'':'nw'}">${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;};
const BI={danger:['alert','#D64545'],warning:['alert','#9A6410'],info:['info','#2F80ED'],success:['check','#1E9E6A']};
const banner=(tone,t,m,act='')=>`<div class="banner ${tone}">${ico(BI[tone][0],20,BI[tone][1])}<div><b>${t}</b><span>${m}</span></div>${act?`<div class="act">${act}</div>`:''}</div>`;
const empty=(icon,t,m,btns='',tips='')=>`<div class="empty"><div class="ring">${ico(icon,44,'#12355B')}</div><h2>${t}</h2><p>${m}</p>${btns?`<div class="row gap12">${btns}</div>`:''}${tips?`<div class="tips">${tips}</div>`:''}</div>`;
const tip=(t,m)=>`<div class="tip"><b>${t}</b><div class="m">${m}</div></div>`;
const steps=(arr,at)=>`<div class="steps">${arr.map((s,i)=>`<div class="step ${i<at?'done':i===at?'on':''}"><i>${i<at?'✓':i+1}</i>${s}</div>${i<arr.length-1?'<div class="sep"></div>':''}`).join('')}</div>`;
const tgl=(l,s,on)=>`<div class="tgl"><div><b class="s6">${l}</b>${s?`<small>${s}</small>`:''}</div><div class="tg ${on?'on':''}"></div></div>`;
const denom=(d,q,t)=>`<div class="denom"><div class="d">${d}</div><div class="q">${q}</div><span class="m3">=</span><div class="t">${t}</div></div>`;
const modal=(t,sub,body,w=640,top=100)=>`<div class="scrim"></div><div class="modal" style="width:${w}px;top:${top}px"><div class="mh"><div><h2>${t}</h2>${sub?`<div class="sub">${sub}</div>`:''}</div><div class="x">${ico('x',20,'#475467')}</div></div>${body}</div>`;
const posTop=(o={})=>{const sc=o.scale||'ok';const scp=sc==='ok'?`<span class="pill">${ico('scale',14,'#7EE0B0')}Scale OK</span>`:sc==='untested'?`<span class="pill">${ico('scale',14,'#FFD58A')}Scale not tested</span>`:`<span class="pill off">${ico('scale',14,'#FFB4B4')}Scale not found</span>`;
return `<div class="pos-top"><div class="brand"><div class="logo">${ico('store',20,'#fff')}</div>Nalangadi POS<div style="width:1px;height:24px;background:#1B4A7C;margin:0 4px"></div><div class="meta"><span style="font-size:14px;font-weight:600">${o.counter||'Counter 3 · T. Nagar'}</span><small>${o.shift||'Shift open 09:02'}</small></div></div><div class="right"><span class="pill ${o.offline?'off':''}">${ico(o.offline?'wifioff':'wifi',14,o.offline?'#FFB4B4':'#7EE0B0')}${o.offline?'Offline · 3 bills queued':'Online'}</span>${scp}<span style="font-weight:600;font-size:15px">${o.time||'14:32'}</span><div class="avatar">M</div><div class="meta"><span style="font-size:14px;font-weight:600">Murugan</span><small>Cashier</small></div></div></div>`;};
const posScreen=(left,right,o={})=>`<div class="scr pos">${posTop(o)}<div class="pos-body"><div class="pos-left">${left}</div>${right?`<div class="pos-right">${right}</div>`:''}</div>${o.modal||''}</div>`;
const NAV=[['bar','Dashboard'],['receipt','Sales & returns'],['truck','Purchase'],['users','Agencies'],['box','Stock'],['qr','Own products & labels'],['tag','Pricing'],['cash','Collections & reports'],['percent','GST & tax'],['shield','Staff & roles'],['gear','Settings']];
const adm=(active,title,sub,actions,body,o={})=>`<div class="scr adm"><div class="side"><div class="logo-row"><div class="logo">${ico('store',18,'#fff')}</div><div><b>Nalangadi</b><small>Supermarket admin</small></div></div>${NAV.map(([i,n])=>`<div class="nav ${n===active?'on':''}">${ico(i,18,n===active?'#fff':'#9FB3CF')}${n}${n==='Purchase'&&o.cnt?`<span class="cnt">${o.cnt}</span>`:''}</div>`).join('')}<div class="spacer"></div><div class="user"><div class="avatar">L</div><div><b style="font-size:13px">Lakshmi R.</b><small>Store manager · T. Nagar</small></div></div></div><div class="main"><div class="top"><div class="s">${ico('search',18,'#98A2B3')}Search item, barcode, bill, agency…</div><div class="r"><div class="sel-store">${ico('store',16,'#12355B')}Nalangadi · T. Nagar${ico('chevD',14,'#475467')}</div><div class="bell">${ico('bell',18,'#475467')}</div></div></div><div class="content"><div class="ph-row"><div><div class="h1">${title}</div>${sub?`<div class="sub">${sub}</div>`:''}</div><div class="row gap12">${actions||''}</div></div>${body}</div></div>${o.modal||''}</div>`;
/* ---------- R1: one source of truth. Every amount on every screen is generated from DATA with these helpers. ---------- */
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const r2=n=>Math.round(n*100+(n<0?-1e-7:1e-7))/100;
const grp=s=>{const l=s.slice(-3),r=s.slice(0,-3);return (r?r.replace(/\B(?=(\d{2})+(?!\d))/g,',')+',':'')+l;};
const inr=(n,d)=>{const a=Math.abs(r2(n));const dd=d===undefined?(Number.isInteger(a)?0:2):d;const [i,f]=a.toFixed(dd).split('.');return (n<0&&a>0?'−':'')+'₹'+grp(i)+(f?'.'+f:'');};
const inr2=n=>inr(n,2);
const lakh=n=>'₹'+(n/100000).toFixed(2)+' L';
const pct=(x,d=1)=>(x*100).toFixed(d)+'%';
const MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],WD=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],WDF=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const dt=s=>{const [a,b,c]=s.split('-').map(Number);return new Date(Date.UTC(a,b-1,c));};
const addDays=(s,n)=>new Date(dt(s).getTime()+n*864e5).toISOString().slice(0,10);
const daysBetween=(a,b)=>Math.round((dt(b)-dt(a))/864e5);
const fd=(s,f='dm')=>{const d=dt(s),D=d.getUTCDate(),M=MON[d.getUTCMonth()],Y=d.getUTCFullYear(),m2=String(d.getUTCMonth()+1).padStart(2,'0');
 return f==='dm'?`${D} ${M}`:f==='dmy'?`${D} ${M} ${Y}`:f==='num'?`${String(D).padStart(2,'0')}-${m2}-${Y}`:f==='wd'?`${WDF[d.getUTCDay()]}, ${D} ${M} ${Y}`:f==='my'?`${M} ${Y}`:f==='ymd6'?`${String(Y).slice(2)}${m2}${String(D).padStart(2,'0')}`:`${D} ${M} ${Y}`;};
const wdOf=s=>WD[dt(s).getUTCDay()];
/* GST on a GST-inclusive amount: CGST and SGST halves are rounded separately; the rounding difference is returned, never hidden */
const taxable=(incl,rate)=>r2(incl/(1+rate/100));
const gstOf=(incl,rate)=>{const exact=incl-incl/(1+rate/100),h=r2(exact/2);return {cgst:h,sgst:h,gst:r2(h*2),taxable:r2(incl-h*2),roundOff:r2(exact-h*2)};};
const margin=(sellIncl,rate,costEx)=>{const t=sellIncl/(1+rate/100);return (t-costEx)/t;};
const mTone=m=>m*100<DATA.rules.marginFloor?'danger':m*100<DATA.rules.marginFloor+2?'warning':'success';
const mBadge=(sell,rate,cost)=>{const m=margin(sell,rate,cost);return B(pct(m),mTone(m));};
/* Sales bill: lines are GST-inclusive; the discount is shared across lines pro rata BEFORE GST is worked out. */
const bl=(it,q)=>({it,q,amt:r2(q*it.sell),rate:it.gst});
function billTotals(lines,disc=0){
 const sub=r2(lines.reduce((a,l)=>a+l.amt,0));let left=disc;
 const net=lines.map((l,i)=>{const a=i===lines.length-1?left:r2(disc*l.amt/sub);left=r2(left-a);return r2(l.amt-a);});
 const by={};lines.forEach((l,i)=>{(by[l.rate]=by[l.rate]||{rate:l.rate,net:0}).net=r2(by[l.rate].net+net[i]);});
 const slabs=Object.values(by).sort((a,b)=>a.rate-b.rate).map(s=>({...s,...gstOf(s.net,s.rate)}));
 const total=r2(sub-disc),payable=Math.round(total);
 return {sub,disc,net,slabs,gst:r2(slabs.reduce((a,s)=>a+s.gst,0)),total,roundOff:r2(payable-total),payable};
}
/* Purchase side: cost is always EXCLUDING GST; invoice total = taxable + GST */
const buyLine=(it,qty,cost)=>{cost=cost===undefined?it.cost:cost;const tx=r2(qty*cost),h=r2(tx*it.gst/200);return {it,qty,cost,tx,cgst:h,sgst:h,gst:r2(h*2),total:r2(tx+h*2)};};
const buyTotals=ls=>{const s=k=>r2(ls.reduce((a,l)=>a+l[k],0));return {tx:s('tx'),cgst:s('cgst'),sgst:s('sgst'),gst:s('gst'),total:s('total'),qty:ls.reduce((a,l)=>a+l.qty,0)};};
const suggest=it=>it.stock<=it.reorderAt?Math.ceil((it.max-it.stock)/it.pack)*it.pack:0;
const shelfPct=(mfg,exp,on)=>Math.round(100*daysBetween(on,exp)/daysBetween(mfg,exp));
const sumBy=(a,f)=>r2(a.reduce((x,y)=>x+f(y),0));
const DATA={
 store:{name:'Nalangadi Supermarket',loc:'Nalangadi · T. Nagar',addr:'T. Nagar, Chennai 600017',gstin:'33ABCDE1234F1Z5',fssai:'10024xxxxxxxxx',state:'Tamil Nadu (33)'},
 today:'2026-10-25',
 staff:{lakshmi:{n:'Lakshmi R.',role:'Store manager'},ramesh:{n:'Ramesh K.',role:'Owner'},murugan:{n:'Murugan A.',role:'Cashier'},karthik:{n:'Karthik S.',role:'Cashier'},rahul:{n:'Rahul S.',role:'Buyer'}},
 counters:[{n:1,name:'Counter 1',cashier:'Lakshmi'},{n:2,name:'Counter 2',cashier:'Karthik'},{n:3,name:'Counter 3',cashier:'Murugan'}],
 customers:{meena:{n:'Meena',phone:'98765 43210',points:820}},
 offers:{member:20,pointsPer:100},
 float:5000,
 agencies:{
  ganesh:{n:'Ganesh Agencies',gstin:'33AAGFG1234K1ZP',cats:'Rice, pulses, oil, dairy',creditDays:15,limit:200000,usedPct:62,returnDays:7},
  brit:{n:'Balaji Distributors (Britannia)',gstin:'33AAECB4567L1Z8',cats:'Biscuits, bread',creditDays:15,limit:150000,returnDays:7}},
 /* R3: the one rulebook. Screens render their policy text from here. */
 rules:{returnCashierDays:7,returnManagerDays:30,priceDropPct:5,marginFloor:8,cashTol:100,nearExpiryDays:7,minShelfPct:70,cnDeadline:'30 Nov',compositionLimit:'₹1.5 cr'},
 items:{
  tomato:{n:'Tomato (loose)',hsn:'0702',gst:0,cost:28,sell:40,unit:'kg'},
  rice:{n:'Basmati Rice 5 kg',hsn:'1006',gst:5,mrp:480,cost:392,sell:449,unit:'pc',stock:48,reorderAt:60,max:120,pack:12,monthly:180,batch:'BR-2610',mfg:'2026-08-14',exp:'2027-08-14'},
  dal:{n:'Toor Dal 1 kg',hsn:'0713',gst:0,mrp:152,cost:128,sell:148,unit:'pc',stock:22,reorderAt:40,max:80,pack:10,monthly:310,batch:'TD-2609',mfg:'2026-09-10',exp:'2027-03-10'},
  oil:{n:'Fortune Sunflower Oil 1 L',hsn:'1512',gst:5,mrp:145,cost:118,sell:140,unit:'pc',stock:31,reorderAt:50,max:76,pack:12,monthly:220,batch:'SF-2611',mfg:'2026-10-05',exp:'2027-04-05',invCost:124,ean:'8901058851182'},
  sugar:{n:'Sugar 1 kg',hsn:'1701',gst:5,mrp:52,cost:41.5,sell:50,unit:'pc',stock:65,reorderAt:80,max:110,pack:12,monthly:260,batch:'SG-2608',mfg:'2026-08-20',exp:'2028-08-19'},
  curd:{n:'Amul Curd 400 g',hsn:'0403',gst:5,mrp:30,cost:25.5,sell:30,unit:'pc',stock:20,reorderAt:40,max:80,pack:10,monthly:900,batch:'C-1301',mfg:'2026-10-26',exp:'2026-10-29'},
  milk:{n:'Amul UHT Milk 1 L',hsn:'0401',gst:0,mrp:80,cost:72,sell:78,unit:'pc'},
  parle:{n:'Parle-G 250 g',hsn:'1905',gst:5,mrp:25,cost:20.5,sell:25,unit:'pc'},
  bag:{n:'Carry bag (large)',hsn:'3923',gst:18,cost:5,sell:10,unit:'pc'},
  goodday:{n:'Good Day Butter 200 g',hsn:'1905',gst:5,mrp:45,cost:40,sell:45,unit:'pc',lastCost:39},
  marie:{n:'Marie Gold 250 g',hsn:'1905',gst:5,mrp:50,cost:40,sell:50,unit:'pc',lastCost:40},
  bread:{n:'Britannia Bread 400 g',hsn:'1905',gst:0,mrp:50,cost:32,sell:48,unit:'pc',lastCost:32},
  digest:{n:'NutriChoice Digestive 250 g',hsn:'1905',gst:5,mrp:135,cost:98,sell:129,unit:'pc',lastCost:96,ean:'8901063010123'}},
 own:{
  rice:{n:'Sona Masoori Rice 1 kg',full:'Nalangadi Sona Masoori Rice',wt:'1 kg',kg:1,hsn:'1006',gst:5,mrp:62,sell:58,cost:46.5,shelf:180,batch:'NR-2610-01',qty:120,ean:'2012345000012'},
  dal:{n:'Toor Dal 500 g',full:'Nalangadi Toor Dal',wt:'500 g',kg:0.5,hsn:'0713',gst:0,mrp:85,sell:79,cost:62,shelf:90,batch:'TD-2610-02',qty:80},
  turmeric:{n:'Turmeric Powder 100 g',full:'Nalangadi Turmeric Powder',wt:'100 g',kg:0.1,hsn:'0910',gst:5,mrp:42,sell:40,cost:28,shelf:365,batch:'TP-2610-01',qty:150},
  murukku:{n:'Murukku 250 g',full:'Nalangadi Murukku',wt:'250 g',kg:0.25,hsn:'1905',gst:5,mrp:70,sell:68,cost:44,shelf:14,batch:'MK-2610-03',qty:60}},
 printer:{name:'Zebra ZD220',where:'Counter 5',roll:410,perMin:60,pack:'2026-10-25'},
 packer:'Nalangadi Supermarket, 12 South Usman Road, T. Nagar, Chennai 600017',care:'044 4000 0000 · care@nalangadi.example',
 /* purchase documents: PO-2210 raised 26 Oct, goods received and invoiced 28 Oct */
 po:{no:'PO-2210',date:'2026-10-26',recv:'2026-10-28',challan:'GA/4471',grn:'GRN-1188',inv:'GA/INV/7731',invDate:'2026-10-28',lines:['rice','dal','oil','sugar','curd']},
 ledger:[
  {d:'2026-10-03',doc:'GA/INV/7402 · Purchase',cr:38950},{d:'2026-10-10',doc:'Payment · NEFT',dr:38950},
  {d:'2026-10-14',doc:'GA/INV/7620 · Purchase',cr:61200},{d:'2026-10-20',doc:'Payment · UPI',dr:61200}],
 /* the day: 25 Oct 2026 (Sunday). Slabs are GST-inclusive net sales; gross includes discounts and credit notes. */
 day:{date:'2026-10-25',counters:[
  {n:1,bills:142,gross:135200,tender:{cash:38120,upi:61200,card:26100,other:3040},slabs:{0:46300,5:70160,18:12000},cn:[{no:'CN/T1/0012',amt:180}]},
  {n:2,bills:118,gross:101900,tender:{cash:29640,upi:44860,card:19330,other:2550},slabs:{0:35000,5:51380,18:10000},cn:[]},
  {n:3,bills:128,gross:111430,tender:{cash:33420,upi:52180,card:18940,other:1260},slabs:{0:38200,5:58600,18:9000},cn:[{no:'CN/T3/0030',amt:120},{no:'CN/T3/0031',amt:449}]}]},
 month:{slabs:{0:2950000,5:5500000,18:800000},cn:{0:7000,5:9850,18:1570},cnCount:42,cnSept:{count:11,amt:5640},closedDays:24,
  tender:{cash:2680000,upi:4330000,card:1750000},prev:8700000,
  weights:[55,60,48,70,62,80,95,52,58,61,66,72,90,98,50,57,64,69,75,88,96,54,60,63,100]}
};
/* R3 text, built from DATA.rules so every screen quotes the same policy */
const RULE=(()=>{const r=DATA.rules;return {
 ret:[`Packed goods up to ${r.returnCashierDays} days: cashier`,`${r.returnCashierDays+1}–${r.returnManagerDays} days: manager PIN and a reason`,`Over ${r.returnManagerDays} days, or no bill: owner only`,'Loose and perishable items: not returnable'],
 price:[`Within the rules: publishes at once`,`A drop over ${r.priceDropPct}% or margin below ${r.marginFloor}%: store manager`,'Below cost: owner only','Never above MRP'],
 cash:`Cash variance up to ₹${r.cashTol} is allowed; more needs a reason and manager approval`,
 cn:`A credit note is counted in the month it is issued; the last date is ${r.cnDeadline} after the financial year of the original sale`,
 expiry:`Expired stock cannot be received, entered or billed; stock with ${r.nearExpiryDays} days or less is flagged`};})();
const dayC=n=>{const c=DATA.day.counters.find(x=>x.n===n);const t=c.tender,net=r2(t.cash+t.upi+t.card+t.other),cnAmt=sumBy(c.cn,x=>x.amt);
 const sl=Object.entries(c.slabs).map(([r,v])=>({rate:+r,net:v,...gstOf(v,+r)}));
 return {...c,net,cnAmt,disc:r2(c.gross-cnAmt-net),slabs:sl,gst:sumBy(sl,s=>s.gst),cgst:sumBy(sl,s=>s.cgst),sgst:sumBy(sl,s=>s.sgst),handover:t.cash,drawer:t.cash+DATA.float};};
const dayAll=()=>{const cs=DATA.day.counters.map(c=>dayC(c.n));const s=f=>r2(cs.reduce((a,c)=>a+f(c),0));
 return {cs,bills:s(c=>c.bills),net:s(c=>c.net),cash:s(c=>c.tender.cash),upi:s(c=>c.tender.upi),card:s(c=>c.tender.card),other:s(c=>c.tender.other),gst:s(c=>c.gst),cgst:s(c=>c.cgst),sgst:s(c=>c.sgst),cnCount:s(c=>c.cn.length),cnAmt:s(c=>c.cnAmt),float:DATA.float*cs.length};};
const monthAll=()=>{const m=DATA.month;const rows=[0,5,18].map(r=>{const s=gstOf(m.slabs[r],r),c=gstOf(m.cn[r],r);return {rate:r,sales:m.slabs[r],cn:m.cn[r],taxable:s.taxable,cgst:s.cgst,sgst:s.sgst,cnTax:c.gst,net:r2(s.gst-c.gst)};});
 const gross=sumBy(rows,x=>x.sales),cn=sumBy(rows,x=>x.cn),net=r2(gross-cn),t=m.tender,other=r2(net-t.cash-t.upi-t.card);
 const w=m.weights,k=gross/w.slice(0,24).reduce((a,b)=>a+b,0);let acc=0;const days=w.slice(0,24).map((x,i)=>{const v=i===23?r2(gross-acc):Math.round(x*k/100)*100;acc+=v;return v;});
 return {rows,gross,cn,net,tax:sumBy(rows,x=>x.net),other,tender:{...t,other},days,pending:Math.round(w[24]*k/100)*100,growth:net/m.prev-1};};
/* PO-2210 variants: as ordered, as invoiced (accepted quantities and invoice price) */
const poOrderLines=()=>DATA.po.lines.map(k=>buyLine(DATA.items[k],suggest(DATA.items[k])));
const poInvLines=()=>[buyLine(DATA.items.rice,72),buyLine(DATA.items.dal,52),buyLine(DATA.items.oil,48,DATA.items.oil.invCost),buyLine(DATA.items.sugar,48)];
const dnLines=()=>[buyLine(DATA.items.dal,4),buyLine(DATA.items.oil,6,DATA.items.oil.invCost)];
const dnTotals=()=>buyTotals(dnLines());
const ledgerAll=()=>{let bal=0;const base=DATA.ledger.slice();const inv=buyTotals(poInvLines()).total,dn=dnTotals();
 base.push({d:'2026-10-28',doc:`${DATA.po.inv} · Purchase`,cr:inv},{d:'2026-10-29',doc:'DN-0007 · Purchase return',dr:dn.total});
 return base.map(e=>{bal=r2(bal+(e.cr||0)-(e.dr||0));return {...e,bal};});};
/* stock entry by scan (F8-5…10): Britannia invoice BD/2241 on 29 Oct */
const entLines=()=>[buyLine(DATA.items.goodday,96),buyLine(DATA.items.marie,72),buyLine(DATA.items.bread,24)];
const entAll=()=>[...entLines(),buyLine(DATA.items.digest,48)];
const SCREENS=[];
const S=(flow,id,state,title,note,html)=>{SCREENS.push({flow,id,state,title,note,html});const k=s=>s.id.match(/^F(\d+)-(\d+)/);SCREENS.sort((a,b)=>{const x=k(a),y=k(b);return x[1]-y[1]||x[2]-y[2];});};
const STATE_LABEL={first:'First-time',filled:'Filled',error:'Error',success:'Success'};
const FLOWS=[
{id:'F1',app:'Counter',name:'Sales billing',desc:'Scan or weigh items, apply GST, split payment, print tax invoice.'},
{id:'F2',app:'Counter',name:'Sales return',desc:'Find bill, select items, refund and issue a GST credit note (also across months).'},
{id:'F3',app:'Counter',name:'Day start',desc:'Open the counter with a counted opening float.'},
{id:'F4',app:'Counter',name:'End of day (counter)',desc:'Count cash and tenders, explain variance, close and print Z report.'},
{id:'F5',app:'Back-office',name:'Purchase',desc:'Purchase order, goods receiving with batch/expiry, supplier invoice with GST, posting.'},
{id:'F6',app:'Back-office',name:'Purchase return',desc:'Return goods to an agency and raise a debit note.'},
{id:'F7',app:'Back-office',name:'Purchase agency details',desc:'Agency (supplier) master: GSTIN, bank, terms, sales reps, ledger.'},
{id:'F8',app:'Back-office',name:'Stock upload & scan entry',desc:'Two ways to add stock: bulk Excel upload with validation (F8-1…4), or scan each item’s QR like the sales counter and enter quantity, batch, expiry, price and GST (F8-5…10).'},
{id:'F9',app:'Back-office',name:'Own products & QR labels',desc:'Own-brand packed items: label design, QR print queue.'},
{id:'F10',app:'Back-office',name:'Price fixing',desc:'Cost, MRP, selling price and margin guard with approvals and label reprint.'},
{id:'F11',app:'Back-office',name:'Day collections (store)',desc:'All counters tally and the store day closes.'},
{id:'F12',app:'Back-office',name:'Month collection report',desc:'Monthly collections, tender mix, GST summary and credit notes, with export.'},
{id:'F13',app:'Back-office',name:'GST setup',desc:'First-time tax setup and rate master.'},
{id:'F14',app:'Counter',name:'Login & shift handover',desc:'PIN sign-in, switching cashier mid-shift with a counted drawer, lock-out and manager-only actions.'},
{id:'F15',app:'Counter',name:'Held bills',desc:'Set a bill aside, list held bills and resume them with prices and batches re-checked.'},
{id:'F16',app:'Counter',name:'Void & reprint',desc:'Find a past bill, reprint as DUPLICATE, void with a manager PIN and restore stock.'},
{id:'F17',app:'Counter',name:'Offline & sync',desc:'Keep billing without a network, queue bills and resolve sync conflicts.'},
{id:'F18',app:'Counter',name:'Customer & loyalty',desc:'Attach a customer by phone, redeem points, OTP, and customer credit.'},
{id:'F19',app:'Counter',name:'Cash drop & petty cash',desc:'Move cash to the safe, pay small expenses from the petty cash box with a receipt.'},
{id:'F20',app:'Counter',name:'B2B tax invoice',desc:'Business buyer GSTIN, CGST+SGST or IGST, invoice flagged for GSTR-1 B2B.'},
{id:'F21',app:'Back-office',name:'Item master',desc:'Searchable item list, item detail with batches, prices, GST history and movements.'},
{id:'F22',app:'Back-office',name:'Wastage & write-off',desc:'Log wastage by batch with reason and photo; owner approval and ITC flag.'},
{id:'F23',app:'Back-office',name:'Stock count (audit)',desc:'Plan, blind count by scan, recount large variances and post adjustments.'},
{id:'F24',app:'Back-office',name:'Expiry & reorder alerts',desc:'Near-expiry (FEFO) with markdown, low stock with Add to PO.'},
{id:'F25',app:'Back-office',name:'Agency payments',desc:'Dues by date, debit-note adjustment, bank-change fraud check, payment advice.'},
{id:'F26',app:'Back-office',name:'Stock transfer between stores',desc:'Transfer out with challan, blocked lines, receiving-store shortages.'},
{id:'F27',app:'Back-office',name:'Offers & promotions',desc:'Member price, festival % and date-range offers with price-rule checks.'},
{id:'F28',app:'Back-office',name:'Staff & roles',desc:'Staff list and the role-permission matrix behind every PIN and approval.'},
{id:'F29',app:'Back-office',name:'Settings: counters & devices',desc:'Counters, printers, scale, UPI terminal and device tests.'},
{id:'F30',app:'Back-office',name:'Dashboard',desc:'Owner and manager home: checklist, today at a glance, alerts and weekly trend.',na:{success:'A dashboard is a view; nothing is submitted, so there is no success state.'}},
{id:'F31',app:'Back-office',name:'Reports',desc:'Sales, stock valuation, gross profit and the GST summary for the CA, with export.'},
{id:'F32',app:'Back-office',name:'Audit log',desc:'Who did what, when, with filters.',na:{first:'The log is never empty: sign-ins and setup are logged from the first minute.',success:'The log is read-only, so there is nothing to submit.'}}];
