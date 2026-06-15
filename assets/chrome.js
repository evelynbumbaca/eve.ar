/* EVE — shared top chrome (wordmark, ES/EN, hamburger + Made Thought overlay) */
window.EVEchrome = {
  html(lang){
    const E = window.EVE, t = o => o[lang];
    const navLinks = E.nav.map(n=>`<a href="${n.href}">${t(n)}</a>`).join('');
    const mail = lang==='es' ? 'hola@eve.studio' : 'hello@eve.studio';
    return `
    <header class="topbar">
      <a class="wordmark" href="index.html">EVE</a>
      <div style="display:flex;gap:22px;align-items:center">
        <button class="lang" id="lang">
          <b class="${lang==='es'?'on':''}">ES</b><span>/</span><b class="${lang==='en'?'on':''}">EN</b>
        </button>
        <button class="burger" id="burger" aria-label="menu"><i></i><i></i><i></i></button>
      </div>
    </header>
    <div class="overlay" id="overlay">
      <nav>${navLinks}</nav>
      <div class="meta">
        <span>Buenos Aires — Argentina</span><span>${mail}</span><span>© 2025</span>
      </div>
    </div>`;
  },
  wire(onLang){
    document.getElementById('burger').onclick = ()=>document.body.classList.toggle('menu-open');
    if (onLang) document.getElementById('lang').onclick = onLang;
    document.addEventListener('keydown', e=>{
      if(e.key==='Escape') document.body.classList.remove('menu-open');
    });
  }
};
