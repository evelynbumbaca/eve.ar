/* ============================================================
   eve.ar — Microcopy de interfaz (ES/EN)
   Cada clave se intercambia en vivo (ver el toggle en Base.astro).
   ============================================================ */

export const DEFAULT_LANG = 'es' as const;
export type Lang = 'es' | 'en';

export const ui: Record<Lang, Record<string, string>> = {
  es: {
    // hero
    'hero.title.1': 'Diseño',
    'hero.title.2': 'multimedia',
    'hero.title.3': 'que deja huella.',
    'hero.sub': 'Diseñadora Multimedia & UX/UI. Construyo identidades y experiencias con intención, claridad y carácter.',
    'hero.scroll': 'Ver trabajos',
    // home
    'home.intro': 'Eve es Diseñadora Multimedia & UX/UI radicada en Buenos Aires, Argentina. Trabaja en la intersección entre lo editorial, la marca y el producto digital.',
    'home.work.kicker': 'Trabajos seleccionados',
    'home.work.note': 'Una selección. El resto, en conversación.',
    // footer
    'footer.work': 'Trabajos seleccionados — 2023 / 2025',
    'footer.cta': '¿Tenés un proyecto en mente?',
    'footer.cta.link': 'Hablemos',
    'footer.rights': 'Todos los derechos reservados',
    // chrome / menu
    'menu.open': 'Menú',
    'menu.close': 'Cerrar',
    'menu.tagline': 'Diseño multimedia & UX/UI',
  },
  en: {
    // hero
    'hero.title.1': 'Multimedia',
    'hero.title.2': 'design',
    'hero.title.3': 'that leaves a mark.',
    'hero.sub': 'Multimedia & UX/UI Designer. I build identities and experiences with intent, clarity and character.',
    'hero.scroll': 'View work',
    // home
    'home.intro': 'Eve is a Multimedia & UX/UI Designer based in Buenos Aires, Argentina. She works at the intersection of editorial, brand and digital product.',
    'home.work.kicker': 'Selected work',
    'home.work.note': 'A selection. The rest, over a conversation.',
    // footer
    'footer.work': 'Selected work — 2023 / 2025',
    'footer.cta': 'Got a project in mind?',
    'footer.cta.link': "Let's talk",
    'footer.rights': 'All rights reserved',
    // chrome / menu
    'menu.open': 'Menu',
    'menu.close': 'Close',
    'menu.tagline': 'Multimedia & UX/UI design',
  },
};
