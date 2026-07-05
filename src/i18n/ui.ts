/* ============================================================
   eve.ar — Microcopy de interfaz (ES/EN)
   Cada clave se intercambia en vivo (ver el toggle en Base.astro).
   Solo viven acá las claves realmente usadas via <T k="...">;
   el resto del copy es inline (data-es/data-en) en cada componente.
   ============================================================ */

export const DEFAULT_LANG = 'es' as const;
export type Lang = 'es' | 'en';

export const ui: Record<Lang, Record<string, string>> = {
  es: {
    'footer.work': 'Trabajos seleccionados — 2023 / 2025',
    'footer.rights': 'Todos los derechos reservados',
  },
  en: {
    'footer.work': 'Selected work — 2023 / 2025',
    'footer.rights': 'All rights reserved',
  },
};
