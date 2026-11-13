const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const NAME='xCarlos';$('#name').innerHTML=[...NAME].map((c,i)=>`<span style="--i:${i}" aria-hidden="true">${c}</span>`).join('');
const PL=[['Paper','#8ef0ff'],['Purpur','#b27bff'],['LuckPerms','#f5b83d'],['EssentialsX','#ff5d4d'],['WorldGuard','#4ade80'],['Citizens','#4aa3ff'],['Vault','#ff6fae'],['Spark','#ffa94d']];
$('#mq').innerHTML=[...PL,...PL].map(([n,c])=>`<span style="--c:${c}">${n}</span>`).join('');
const BM=['Plugins','Paper','Permisos','Optimización'];
$('#bigm').innerHTML=[...BM,...BM].map(n=>`<span>${n}</span>`).join('');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add('in');io.unobserve(t);if(t.classList.contains('eb'))scr(t);setTimeout(()=>{t.classList.remove('rv');t.style.transitionDelay=''},1600)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});
window.counters=()=>document.querySelectorAll('[data-n]').forEach(el=>{const t=+el.dataset.n,s=performance.now();(function f(n){const k=Math.min((n-s-400)/1600,1);if(k<0)return requestAnimationFrame(f);el.textContent=Math.round(t*(1-Math.pow(1-k,4)));if(k<1)requestAnimationFrame(f)})(s)});
let ci=0,lsy=0;const nav=$('nav'),hb=$('#ahora>div'),links=[...document.querySelectorAll('nav ul a')],secs=links.map(a=>$(a.getAttribute('href')));
addEventListener('scroll',()=>{const h=document.documentElement;$('#bar').style.transform=`scaleX(${scrollY/(h.scrollHeight-innerHeight||1)})`;let a=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.45)a=i});links.forEach((l,i)=>l.classList.toggle('on',i===a));if(a!==ci){ci=a;movePill(a)}const y=scrollY;if(y>300&&y>lsy+4)nav.classList.add('hide');else if(y<lsy-4||y<300)nav.classList.remove('hide');lsy=y;hb.style.transform=`translateY(${y*.15}px)`;hb.style.opacity=Math.max(0,1-y/650)},{passive:true});
function movePill(i){const li=links[i].parentElement,pl=$('.pill'),ul=$('#nl');pl.style.width=li.offsetWidth+'px';pl.style.transform=`translateX(${li.offsetLeft}px)`;if(innerWidth<=980)ul.scrollTo({left:li.offsetLeft-ul.clientWidth/2+li.offsetWidth/2,behavior:'smooth'})}
(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>movePill(ci));addEventListener('resize',()=>movePill(ci));
document.querySelectorAll('h2').forEach(h=>{let i=0;(function w(n){[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(t=>{if(!t)return;if(/^\s+$/.test(t)){f.append(' ');return}const o=document.createElement('span'),q=document.createElement('span');o.className='w';q.textContent=t;q.style.transitionDelay=(i++*70)+'ms';o.append(q);f.append(o)});c.replaceWith(f)}else w(c)})})(h)});
const bm=$('#bigm');if(!RM)(function b(){const half=bm.scrollWidth/2||1;bm.style.transform=`translateX(${-((scrollY*.6+performance.now()/55)%half)}px)`;requestAnimationFrame(b)})();
function typeLead(){const el=$('#lead'),t=el.dataset.t;if(RM){el.textContent=t;return}el.textContent='';let i=0;(function k(){el.textContent=t.slice(0,++i);if(i<t.length)setTimeout(k,35)})()}
addEventListener('pointerdown',e=>{if(RM)return;for(let i=0;i<12;i++){const d=document.createElement('i'),a=Math.random()*6.28,r=40+Math.random()*70,z=4+Math.random()*6;d.style.cssText=`position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:${z}px;height:${z}px;background:${Math.random()>.5?'#b27bff':'#ff6fae'};z-index:95;pointer-events:none;border-radius:1px`;document.body.append(d);d.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:`translate(${Math.cos(a)*r}px,${Math.sin(a)*r+30}px) rotate(${Math.random()*360}deg)`,opacity:0}],{duration:700+Math.random()*300,easing:'cubic-bezier(.2,.8,.3,1)'}).onfinish=()=>d.remove()}});

/* Discord en tiempo real (Lanyard) */
const DID='1484659327716294657',DC={online:['#23a55a','En línea'],idle:['#f0b232','Ausente'],dnd:['#f23f43','No molestar'],offline:['#80848e','Desconectado']};let spT=null;
function ds(d){const st=DC[d.discord_status]||DC.offline,u=d.discord_user||{},card=$('#dc');
 document.documentElement.style.setProperty('--sc',st[0]);card.dataset.s=d.discord_status;$('#dct').textContent=st[1];$('#dcn').textContent=u.global_name||u.username||'carlitosxit';
 const im=$('#dci');if(u.avatar){im.onload=()=>im.hidden=false;im.onerror=()=>im.hidden=true;im.src=`https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.${u.avatar.startsWith('a_')?'gif':'png'}?size=128`}
 const acts=d.activities||[],cs=acts.find(a=>a.type===4);$('#dcc').textContent=cs?((cs.emoji&&cs.emoji.name?cs.emoji.name+' ':'')+(cs.state||'')):'';
 const box=$('#dact'),art=$('#dart'),pb=$('#dpb');clearInterval(spT);pb.hidden=true;art.style.backgroundImage='';
 const K={0:'Jugando',1:'En directo',2:'Escuchando',3:'Viendo',5:'Compitiendo'};
 if(d.listening_to_spotify&&d.spotify){const sp=d.spotify;box.hidden=false;$('#dak').textContent='Escuchando en Spotify';$('#dat').textContent=sp.song;$('#das').textContent=sp.artist;art.style.backgroundImage=`url(${sp.album_art_url})`;
  const t=sp.timestamps;if(t){pb.hidden=false;const f=()=>{$('#dpi').style.width=Math.min(100,Math.max(0,(Date.now()-t.start)/(t.end-t.start)*100))+'%'};f();spT=setInterval(f,1000)}}
 else{const a=acts.find(x=>x.type!==4);if(a){box.hidden=false;$('#dak').textContent=K[a.type]||'Ahora';$('#dat').textContent=a.name;let sub=a.details||a.state||'';if(a.timestamps&&a.timestamps.start){sub+=(sub?' · ':'')+'hace '+Math.max(1,Math.round((Date.now()-a.timestamps.start)/60000))+' min'}$('#das').textContent=sub;
   if(a.assets&&a.assets.large_image&&a.application_id&&!a.assets.large_image.startsWith('mp:'))art.style.backgroundImage=`url(https://cdn.discordapp.com/app-assets/${a.application_id}/${a.assets.large_image}.png)`}else box.hidden=true}}
async function poll(){try{const r=await fetch('https://api.lanyard.rest/v1/users/'+DID),j=await r.json();if(j.success)ds(j.data)}catch(e){}}
function ws(){try{const w=new WebSocket('wss://api.lanyard.rest/socket');let hb;w.onmessage=e=>{const m=JSON.parse(e.data);if(m.op===1){w.send(JSON.stringify({op:2,d:{subscribe_to_id:DID}}));hb=setInterval(()=>w.send(JSON.stringify({op:3})),m.d.heartbeat_interval)}else if(m.op===0)ds(m.d)};w.onclose=()=>{clearInterval(hb);poll();setTimeout(ws,15000)};w.onerror=()=>w.close()}catch(e){}}
poll();ws()
const g=$('#glow');let gx=innerWidth/2,gy=300,tx=gx,ty=gy;addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY});
(function gl(){gx+=(tx-gx)*.08;gy+=(ty-gy)*.08;g.style.transform=`translate(${gx}px,${gy}px)`;requestAnimationFrame(gl)})();
if(!RM&&matchMedia('(hover:hover)').matches){
 document.querySelectorAll('[data-mag]').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
 document.querySelectorAll('[data-tilt]').forEach(c=>{c.addEventListener('pointermove',e=>{if(c.classList.contains('rv'))return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateX(${-y*7}deg) rotateY(${x*9}deg) translateY(-4px)`});c.addEventListener('pointerleave',()=>c.style.transform='')})}
const cv=$('#bg'),cx=cv.getContext('2d');let W,H,P=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=Array.from({length:Math.min(40,W/30|0)},()=>({x:Math.random()*W,y:Math.random()*H,s:3+Math.random()*6,v:.15+Math.random()*.4,a:.07+Math.random()*.16,c:Math.random()>.5?'178,123,255':'255,111,174'}))}
rs();addEventListener('resize',rs);
(function pt(){cx.clearRect(0,0,W,H);P.forEach(p=>{p.y-=p.v;p.x+=Math.sin(p.y/60)*.2;if(p.y<-10){p.y=H+10;p.x=Math.random()*W}cx.fillStyle=`rgba(${p.c},${p.a})`;cx.fillRect(p.x,p.y,p.s,p.s)});if(!RM)requestAnimationFrame(pt)})();
(function(){const el=$('#live'),L=['<b>[INFO]</b> Iniciando <u>xCarlos.jar</u>','<b>[INFO]</b> Cargando 100+ plugins','<b>[INFO]</b> LuckPerms: permisos listos','<b>[INFO]</b> Mundo preparado','<b>[INFO]</b> <u>Listo (1.8s)</u> · TPS 20.0'];let n=0;
if(RM){el.innerHTML=L.join('\n');return}
(function tick(){el.innerHTML=L.slice(0,n).join('\n')+'\n<span class="cur">▍</span>';if(n<L.length){n++;setTimeout(tick,650)}else{n=0;setTimeout(tick,3200)}})()})();
document.querySelectorAll('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}));
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('show'),2200)}
async function cp(){try{await navigator.clipboard.writeText('carlitosxit');toast('Discord copiado')}catch(e){toast('Mi Discord: carlitosxit')}}
$('#copy').onclick=cp;$('#copy2').onclick=cp;
document.querySelectorAll('.q button').forEach(b=>b.onclick=()=>{const o=b.parentElement.classList.toggle('open');b.setAttribute('aria-expanded',o)});
function scr(el){if(RM)return;const f=el.textContent,C='!<>-_[]{}=+*^?#01';let i=0;(function s(){el.textContent=[...f].map((c,j)=>j<i||c===' '?c:C[Math.random()*C.length|0]).join('');if(i<f.length){i+=.6;requestAnimationFrame(s)}else el.textContent=f})()}
if(matchMedia('(hover:hover)').matches&&!RM){const d=$('#cd'),r=$('#cr');let rx=0,ry=0,mx=0,my=0;addEventListener('pointermove',e=>{document.body.classList.add('mv');mx=e.clientX;my=e.clientY;d.style.transform=`translate(${mx}px,${my}px)`;r.classList.toggle('h',!!(e.target.closest&&e.target.closest('a,button')))});(function l(){rx+=(mx-rx)*.15;ry+=(my-ry)*.15;r.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(l)})()}
(function(){const I=$('#intro');if(RM){I.remove();document.body.classList.remove('boot');counters();typeLead();return}
const pc=$('#pc'),ib=$('#ib'),lg=$('#log'),box=document.querySelector('.pc'),T=3000,t0=performance.now();
const L=[[0,'[INFO] Iniciando xCarlos.jar'],[25,'[INFO] Cargando más de 100 plugins'],[55,'[INFO] Preparando el mundo'],[85,'[INFO] Casi listo...']];let li=0,lastg=-1;
(function f(n){const k=Math.min((n-t0)/T,1),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2,v=Math.round(e*100);pc.textContent=v;ib.style.transform=`scaleX(${v/100})`;
while(li<L.length&&v>=L[li][0]){lg.textContent+=(li?'\n':'')+L[li][1];li++}
if(v%25===0&&v>0&&v!==lastg){lastg=v;box.classList.remove('gl');void box.offsetWidth;box.classList.add('gl')}
if(k<1)return requestAnimationFrame(f);
lg.textContent+='\n[INFO] Listo. ¡Bienvenido!';
setTimeout(()=>{I.classList.add('out');document.body.classList.remove('boot');counters();setTimeout(typeLead,900)},450);setTimeout(()=>I.remove(),2000)})(t0)})();
