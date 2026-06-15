/* EVE — home (Verena grid + Made Thought menu) */
(function(){
  const E = window.EVE;
  let lang = localStorage.getItem('eve-lang') || 'es';
  let filter = 'all';

  const t = o => o[lang];

  /* ---------- home body ---------- */
  function render(){
    const chips = E.filters.map(f=>
      `<button class="chip ${f.key===filter?'is-on':''}" data-f="${f.key}">${t(f)}</button>`
    ).join('');

    const cards = E.projects
      .filter(p=>filter==='all'||p.cat===filter)
      .map((p,i)=>`
      <a class="card" href="case.html?p=${p.id}">
        <div class="card-frame reveal" style="aspect-ratio:${p.ratio}">
          <div class="card-img ph revfill" data-label="${p.title} — cover"></div>
        </div>
        <div class="card-meta rise">
          <h3>${p.title}</h3>
          <p>${t(p.disc)}<span>${p.year}</span></p>
        </div>
      </a>`).join('');

    document.getElementById('app').innerHTML = `
      ${EVEchrome.html(lang)}
      <main class="home">
        <section class="intro">
          <div class="hero-anim ph" data-label="animación — 1920×1080 horizontal"></div>
          <div class="filters" id="filters">${chips}</div>
        </section>
        <section class="grid" id="grid">${cards}</section>
        <footer class="home-foot">
          <span class="mono cap">Selected Work — 2023 / 2025</span>
          <span class="mono cap">Buenos Aires</span>
        </footer>
      </main>`;

    wire();
    EVEreveal();
  }

  /* ---------- interactions ---------- */
  function wire(){
    EVEchrome.wire(()=>{
      lang = lang==='es'?'en':'es';
      localStorage.setItem('eve-lang',lang);
      render();
    });
    document.getElementById('filters').addEventListener('click',e=>{
      const b=e.target.closest('.chip'); if(!b)return;
      filter=b.dataset.f; render();
    });
  }

  render();
})();
