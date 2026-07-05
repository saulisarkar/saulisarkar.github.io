// Typewriter for subtitle
document.addEventListener('DOMContentLoaded',()=>{
  const el=document.getElementById('site-subtitle');
  if(el){
    const text=el.textContent.trim();
    el.textContent='';
    let i=0;
    const t=setInterval(()=>{
      el.textContent+=text.charAt(i);
      i++;
      if(i>=text.length) clearInterval(t);
    },28);
  }

  // IntersectionObserver reveal
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  },{rootMargin:'0px 0px -8% 0px',threshold:0.1});

  document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));
});
