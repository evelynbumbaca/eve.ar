/* EVE — portfolio data (bilingual) */
window.EVE = {
  owner: {
    es: "Eve es Diseñadora Multimedia & UX/UI radicada en Buenos Aires, Argentina.",
    en: "Eve is a Multimedia & UX/UI Designer based in Buenos Aires, Argentina."
  },
  filters: [
    {key:"all",        es:"Todos",        en:"All Projects"},
    {key:"branding",   es:"Branding",     en:"Branding"},
    {key:"uxui",       es:"UX/UI",        en:"UX/UI"},
    {key:"editorial",  es:"Editorial",    en:"Editorial"},
    {key:"packaging",  es:"Packaging",    en:"Packaging"},
    {key:"art",        es:"Dirección de Arte", en:"Art Direction"}
  ],
  nav: [
    {es:"Inicio", en:"Index", href:"index.html"},
    {es:"Trabajos", en:"Work", href:"index.html"},
    {es:"Estudio", en:"About", href:"#"},
    {es:"Contacto", en:"Contact", href:"#"}
  ],
  projects: [
    {id:"mercado-norte", cat:"branding",  year:"2025",
     title:"Mercado Norte",
     disc:{es:"Identidad de Marca",en:"Brand Identity"}, ratio:"4 / 5"},
    {id:"lumen",         cat:"uxui",      year:"2025",
     title:"Lumen App",
     disc:{es:"Diseño UX/UI",en:"UX/UI Design"}, ratio:"4 / 5"},
    {id:"revista-sur",   cat:"editorial", year:"2024",
     title:"Revista Sur",
     disc:{es:"Editorial",en:"Editorial"}, ratio:"4 / 5"},
    {id:"cafe-tostado",  cat:"packaging", year:"2024",
     title:"Café Tostado",
     disc:{es:"Packaging",en:"Packaging"}, ratio:"4 / 5"},
    {id:"bienal-ba",     cat:"art",       year:"2024",
     title:"Bienal BA",
     disc:{es:"Dirección de Arte",en:"Art Direction"}, ratio:"4 / 5"},
    {id:"estudio-pampa", cat:"uxui",      year:"2023",
     title:"Estudio Pampa",
     disc:{es:"Diseño Web · UX",en:"Web Design · UX"}, ratio:"4 / 5"},
    {id:"fundacion-rio", cat:"branding",  year:"2023",
     title:"Fundación Río",
     disc:{es:"Identidad de Marca",en:"Brand Identity"}, ratio:"4 / 5"},
    {id:"tipo-festival", cat:"art",       year:"2023",
     title:"Tipo Festival",
     disc:{es:"Campaña · Dirección de Arte",en:"Campaign · Art Direction"}, ratio:"4 / 5"}
  ],
  /* shared sample case content (placeholders) */
  caseSample: {
    role:{es:"Identidad · Dirección de Arte · Diseño Web",en:"Identity · Art Direction · Web Design"},
    year:"2025",
    client:{es:"Cliente",en:"Client"},
    services:{es:"Servicios",en:"Services"},
    intro:{
      es:"Una identidad construida sobre el contraste entre lo artesanal y lo sistemático. El proyecto buscaba traducir la energía de un mercado de barrio en un sistema visual flexible, capaz de vivir tanto en señalética impresa como en pantalla.",
      en:"An identity built on the contrast between the handmade and the systematic. The project set out to translate the energy of a neighborhood market into a flexible visual system, able to live across printed signage and screen alike."
    },
    objetivo:{
      label:{es:"Objetivo",en:"Objective"},
      es:"Unificar una marca dispersa en una voz coherente, sin perder el carácter local y espontáneo que la hacía reconocible para su comunidad.",
      en:"Unify a fragmented brand into one coherent voice, without losing the local, spontaneous character that made it recognizable to its community."
    },
    solucion:{
      label:{es:"Solución",en:"Solution"},
      es:"Un sistema modular de tipografía y color, anclado en una grilla flexible que permite componer piezas rápidas manteniendo siempre la misma lógica estructural.",
      en:"A modular system of type and color, anchored in a flexible grid that lets the team compose pieces quickly while always keeping the same structural logic."
    },
    quote:{
      es:"El diseño no decora el mercado: lo ordena, lo amplifica y lo vuelve memorable.",
      en:"Design doesn't decorate the market — it orders it, amplifies it, and makes it memorable."
    },
    sections:[
      {es:"Sistema tipográfico",en:"Type system"},
      {es:"Paleta y materiales",en:"Palette & materials"},
      {es:"Aplicaciones",en:"Applications"}
    ]
  }
};
