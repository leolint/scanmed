(() => {
 const button=document.querySelector('.menu-toggle');
 const nav=document.getElementById('primary-navigation');
 if(!button||!nav)return;
 const label=button.querySelector('.menu-label');
 const icon=button.querySelector('.menu-icon');
 const setOpen=open=>{
  button.setAttribute('aria-expanded',String(open));
  nav.classList.toggle('is-open',open);
  if(label)label.textContent=open?'Закрити':'Меню';
  if(icon)icon.textContent=open?'×':'☰';
 };
 button.hidden=false;document.documentElement.classList.add('sm-js');
 button.addEventListener('click',()=>setOpen(button.getAttribute('aria-expanded')!=='true'));
 nav.addEventListener('click',e=>{if(e.target.closest('a'))setOpen(false);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&button.getAttribute('aria-expanded')==='true'){setOpen(false);button.focus();}});
 document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!button.contains(e.target))setOpen(false);});
 window.matchMedia('(min-width: 1200px)').addEventListener('change',()=>setOpen(false));
})();
