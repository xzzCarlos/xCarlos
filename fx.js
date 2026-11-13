/* ===== FX pack: efectos extra ===== */
(()=>{const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,T=matchMedia('(hover:none)').matches,$$=s=>[...document.querySelectorAll(s)],mk=(t,c,p=document.body)=>{const e=document.createElement(t);e.className=c;p.appendChild(e);return e};
if(RM)return;
/* curtain de carga */
const cu=mk('div','fx-curtain');cu.innerHTML='<i></i>';setTimeout(()=>cu.remove(),1700);
/* progreso de scroll + botón volver arriba */
const pg=mk('div','fx-prog'),tp=mk('button','fx-top');tp.setAttribute('aria-label','Volver arriba');tp.innerHTML='<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="22"/></svg><span>↑</span>';tp.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const orbs=$$('.orb');let tk=0;const sc=()=>{const m=document.documentElement.scrollHeight-innerHeight,p=m>0?scrollY/m:0;pg.style.transform=`scaleX(${p})`;tp.style.setProperty('--sp',p);tp.classList.toggle('on',scrollY>600);orbs.forEach((o,i)=>o.style.translate=`0 ${scrollY*(i?-.08:.12)}px`);tk=0};
addEventListener('scroll',()=>tk||(tk=requestAnimationFrame(sc)),{passive:true});sc();
/* cards: tilt 3D + spotlight + borde neón */
$$('.card').forEach(c=>{mk('div','fx-spot',c);mk('div','fx-edge',c);if(T)return;
 c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');if(c.classList.contains('in'))c.style.transform=`perspective(900px) rotateX(${(.5-y)*7}deg) rotateY(${(x-.5)*9}deg) translateY(-3px)`});
 c.addEventListener('pointerleave',()=>c.style.transform='')});
/* ripple en botones */
document.addEventListener('pointerdown',e=>{const b=e.target.closest('.btn');if(!b)return;const r=b.getBoundingClientRect(),s=Math.max(r.width,r.height)*2,d=mk('span','fx-rip',b);d.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px`;setTimeout(()=>d.remove(),700)});
/* explosión de partículas al click + estela del cursor */
const COL=['#b27bff','#ff6fae','#8ef0ff','#f5b83d'];
const dot=(x,y,vx,vy,life,sz=1)=>{const d=mk('i','fx-dot');d.style.setProperty('--c',COL[Math.random()*4|0]);d.style.scale=sz;d.animate([{transform:`translate(${x}px,${y}px)`,opacity:1},{transform:`translate(${x+vx}px,${y+vy}px) scale(0)`,opacity:0}],{duration:life,easing:'cubic-bezier(.2,.8,.3,1)'}).onfinish=()=>d.remove()};
document.addEventListener('click',e=>{for(let i=0;i<18;i++){const a=Math.PI*2*i/18+Math.random()*.4,v=50+Math.random()*70;dot(e.clientX,e.clientY,Math.cos(a)*v,Math.sin(a)*v,700+Math.random()*400,1+Math.random())}});
if(!T){let lt=0;addEventListener('pointermove',e=>{const n=performance.now();if(n-lt<45)return;lt=n;dot(e.clientX,e.clientY,(Math.random()-.5)*26,12+Math.random()*18,650,.8)},{passive:true})}
/* scramble de texto en títulos */
const CH='01#@$%&*+<>';const sm=el=>{const t=el.dataset.t||(el.dataset.t=el.textContent);let f=0;const id=setInterval(()=>{el.textContent=[...t].map((c,i)=>c===' '?c:i<f/2?c:CH[Math.random()*CH.length|0]).join('');if(++f>t.length*2+2){el.textContent=t;clearInterval(id)}},28)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){sm(e.target);io.unobserve(e.target)}}),{threshold:.6});$$('h2 em').forEach(e=>io.observe(e));
$$('.logo').forEach(l=>l.addEventListener('mouseenter',()=>{const i=l.querySelector('i');if(i)i.animate([{rotate:'0deg',scale:1},{rotate:'360deg',scale:1.8},{rotate:'720deg',scale:1}],{duration:700,easing:'ease-in-out'})}));
/* Konami → modo arcoíris */
const K=[38,38,40,40,37,39,37,39,66,65];let ki=0;addEventListener('keydown',e=>{ki=e.keyCode===K[ki]?ki+1:0;if(ki===K.length){document.body.classList.toggle('fx-rb');ki=0}});
})();
