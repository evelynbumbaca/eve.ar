/* EVE — case study (3 layout variants) */
(function(){
  const E = window.EVE;
  let lang = localStorage.getItem('eve-lang') || 'es';
  let layout = localStorage.getItem('eve-case-layout') || 'editorial';
  const t = o => o[lang];

  const params = new URLSearchParams(location.search);
  const pid = params.get('p');
  const idx = Math.max(0, E.projects.findIndex(p=>p.id===pid));
  const P = E.projects[idx] || E.projects[0];
  const NEXT = E.projects[(idx+1) % E.projects.length];
  const C = E.caseSample;

  const layouts = [
    {key:'editorial', es:'Editorial', en:'Editorial'},
    {key:'split',     es:'Dividido',  en:'Split'},
    {key:'margin',    es:'Margen',    en:'Margin'}
  ];

  /* ---------- content fragments ---------- */
  function heroImg(label){
    return `<div class="c-hero-img reveal"><div class="ph revfill" data-label="${label}"></div></div>`;
  }
  function fig(labelObj, n, extra){
    const l = t(labelObj);
    return `<figure class="c-figure ${extra||''}">
      <div class="frame reveal"><div class="ph revfill" data-label="${l}"></div></div>
      <figcaption><span>${l}</span><span class="mono">FIG ${String(n).padStart(2,'0')}</span></figcaption>
    </figure>`;
  }
  function osBoxes(){
    return `<div class="c-os">
      <div class="os-box objetivo rise"><h4>${t(C.objetivo.label)}</h4><p>${t(C.objetivo)}</p></div>
      <div class="os-box solucion rise"><h4>${t(C.solucion.label)}</h4><p>${t(C.solucion)}</p></div>
    </div>`;
  }
  function metaStrip(){
    return `<dl class="c-meta">
      <div><dt>${t(C.client)}</dt><dd>${P.title}</dd></div>
      <div><dt>${t(C.services)}</dt><dd>${t(P.disc)}</dd></div>
      <div><dt>${lang==='es'?'A\u00f1o':'Year'}</dt><dd>${P.year}</dd></div>
      <div><dt>${lang==='es'?'Rol':'Role'}</dt><dd>${t(C.role)}</dd></div>
    </dl>`;
  }
  function railMeta(){
    return `<dl class="c-meta" style="grid-template-columns:1fr 1fr;border:none;border-top:1px solid var(--line);padding-bottom:0;margin-top:clamp(22px,3vh,34px)">
      <div><dt>${t(C.client)}</dt><dd>${P.title}</dd></div>
      <div><dt>${lang==='es'?'A\u00f1o':'Year'}</dt><dd>${P.year}</dd></div>
      <div style="grid-column:1/-1"><dt>${t(C.services)}</dt><dd>${t(P.disc)}</dd></div>
    </dl>`;
  }
  function quote(){
    return `<blockquote class="c-quote rise">\u201c${t(C.quote)}\u201d</blockquote>`;
  }
  function hero(){
    return `<header class="c-hero wrap">
      <div class="c-kicker rise">
        <span>${t(P.disc)}</span><span class="dot">/</span>
        <span>${P.year}</span><span class="dot">/</span>
        <span>Buenos Aires</span>
      </div>
      <h1 class="c-title rise">${P.title}</h1>
    </header>`;
  }
  function nextBlock(){
    return `<div class="wrap"><div class="c-next">
      <span class="lab">${lang==='es'?'Siguiente proyecto':'Next project'}</span>
      <a href="case.html?p=${NEXT.id}">${NEXT.title} \u2192</a>
    </div></div>`;
  }
  const S = C.sections;

  /* ---------- layout bodies ---------- */
  function editorial(){
    return `<div class="case" data-layout="editorial">
      ${hero()}
      <div class="wrap">${heroImg(P.title+' — hero')}</div>
      <div class="wrap">${metaStrip()}</div>
      <div class="c-body wrap">
        <p class="c-intro rise">${t(C.intro)}</p>
        ${osBoxes()}
        ${fig(S[0],1)}
        ${fig(S[1],2,'tall')}
        ${quote()}
        ${fig(S[2],3)}
      </div>
      ${nextBlock()}
    </div>`;
  }
  function split(){
    return `<div class="case" data-layout="split">
      ${hero()}
      <div class="wrap">
        <div class="split-grid">
          <div class="split-rail">
            <p class="c-intro rise">${t(C.intro)}</p>
            ${osBoxes()}
            ${railMeta()}
          </div>
          <div class="stream">
            ${fig(S[0],1)}
            ${fig(S[1],2)}
            ${fig(S[2],3)}
          </div>
        </div>
        ${quote()}
      </div>
      ${nextBlock()}
    </div>`;
  }
  function margin(){
    return `<div class="case" data-layout="margin">
      ${hero()}
      <div class="wrap">${heroImg(P.title+' — hero')}</div>
      <div class="wrap">
        <div class="margin-grid">
          <div class="c-col-main">
            <p class="c-intro rise">${t(C.intro)}</p>
            ${fig(S[0],1)}
            ${fig(S[1],2,'tall')}
            ${quote()}
            ${fig(S[2],3)}
          </div>
          <aside class="c-aside">
            ${osBoxes()}
            ${railMeta()}
          </aside>
        </div>
      </div>
      ${nextBlock()}
    </div>`;
  }
  const build = {editorial, split, margin};

  function switcher(){
    return `<div class="switcher">
      <span class="lab">Layout</span>
      ${layouts.map(l=>`<button data-l="${l.key}" class="${l.key===layout?'on':''}">${t(l)}</button>`).join('')}
    </div>`;
  }

  /* ---------- render ---------- */
  function render(){
    document.title = `${P.title} — EVE`;
    document.getElementById('app').innerHTML =
      EVEchrome.html(lang) + build[layout]() + switcher();
    wire();
    window.scrollTo(0,0);
    EVEreveal();
  }
  function wire(){
    EVEchrome.wire(()=>{ lang = lang==='es'?'en':'es'; localStorage.setItem('eve-lang',lang); render(); });
    document.querySelector('.switcher').addEventListener('click',e=>{
      const b=e.target.closest('button[data-l]'); if(!b)return;
      layout=b.dataset.l; localStorage.setItem('eve-case-layout',layout); render();
    });
  }

  render();
})();
