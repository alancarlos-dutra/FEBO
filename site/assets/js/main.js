document.addEventListener('DOMContentLoaded',function(){
  // year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // nav toggle
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.site-nav');
  toggle&&toggle.addEventListener('click',()=>{nav.classList.toggle('open')});

  // smooth scroll and close on click
  document.querySelectorAll('.nav-link').forEach(link=>{
    link.addEventListener('click',e=>{
      const href=link.getAttribute('href')||'';

      if(href.startsWith('#')){
        e.preventDefault();
        const id=href;
        const el=document.querySelector(id);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        nav.classList.remove('open');
        return;
      }

      if(href.includes('#')){
        const [page,anchor]=href.split('#');
        if(window.location.pathname.endsWith(page)){
          e.preventDefault();
          const el=document.querySelector('#'+anchor);
          if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
          nav.classList.remove('open');
          return;
        }
      }
    });
  });

  // highlight active section
  const sections=document.querySelectorAll('main .section');
  const navLinks=document.querySelectorAll('.site-nav a');
  function onScroll(){
    const fromTop=window.scrollY+80;
    sections.forEach(section=>{
      if(section.offsetTop<=fromTop && section.offsetTop+section.offsetHeight>fromTop){
        const id='#'+section.id;
        navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===id));
      }
    });
  }
  window.addEventListener('scroll',onScroll);
  onScroll();
});
