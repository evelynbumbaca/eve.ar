/* EVE — deterministic scroll reveal (rect-based, no IntersectionObserver) */
window.EVEreveal = function(root){
  root = root || document;
  const els = [...root.querySelectorAll('.reveal, .rise')];
  function check(){
    const vh = window.innerHeight;
    for (const el of els){
      if (el.classList.contains('in')) continue;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) el.classList.add('in');
    }
  }
  check();
  // run again next frame in case layout/fonts shifted positions
  requestAnimationFrame(check);
  let ticking = false;
  window.addEventListener('scroll', ()=>{
    if (!ticking){ ticking = true; requestAnimationFrame(()=>{ check(); ticking = false; }); }
  }, {passive:true});
  window.addEventListener('resize', check, {passive:true});
  // safety net: never leave content hidden
  setTimeout(()=>els.forEach(e=>e.classList.add('in')), 3500);
  return check;
};
