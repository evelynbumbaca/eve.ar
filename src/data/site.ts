/* ============================================================
   eve.ar — Datos del sitio (estructura, bilingue)
   El contenido editorial vive aca; las piezas de UI en src/i18n/ui.ts
   ============================================================ */

export type Lang = 'es' | 'en';
export type ProjectCat = 'branding' | 'uxui' | 'editorial' | 'packaging' | 'art';

export interface Bilingual { es: string; en: string; }

export interface NavItem extends Record<'es' | 'en', string> {
  href: string;
}

export interface Project {
  id: string;
  cat: ProjectCat;
  year: string;
  title: string;
  disc: Bilingual;
  ratio: string;
}

/* ---------- identidad ---------- */
export const site = {
  name: 'EVE',
  domain: 'eve.ar',
  location: { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' },
  email: 'hola@eve.ar',
  gumroad: 'https://gumroad.com/', // TODO: reemplazar por la tienda real
  whatsapp: 'https://wa.me/5491100000000', // TODO: número real (formato internacional, sin + ni espacios)
};

export const social: { label: string; href: string }[] = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'Behance', href: 'https://behance.net/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Gumroad', href: site.gumroad },
];

/* ---------- navegacion ---------- */
/* one-page: el menú ancla a las secciones del inicio;
   las páginas de detalle (archivo, casos, tienda) siguen debajo */
export const nav: NavItem[] = [
  { es: 'Inicio', en: 'Index', href: '/' },
  { es: 'Trabajos', en: 'Work', href: '/#trabajos' },
  { es: 'Packs', en: 'Packs', href: '/#packs' },
  { es: 'Estudio', en: 'About', href: '/#estudio' },
  { es: 'Tienda', en: 'Shop', href: '/tienda' },
  { es: 'Contacto', en: 'Contact', href: '/#contacto' },
];

/* ---------- filtros de la grilla ---------- */
export const filters: { key: string; label: Bilingual }[] = [
  { key: 'all', label: { es: 'Todos', en: 'All' } },
  { key: 'branding', label: { es: 'Branding', en: 'Branding' } },
  { key: 'uxui', label: { es: 'UX/UI', en: 'UX/UI' } },
  { key: 'editorial', label: { es: 'Editorial', en: 'Editorial' } },
  { key: 'packaging', label: { es: 'Packaging', en: 'Packaging' } },
  { key: 'art', label: { es: 'Dirección de Arte', en: 'Art Direction' } },
];

/* ---------- proyectos (placeholders por ahora) ---------- */
export const projects: Project[] = [
  { id: 'mercado-norte', cat: 'branding', year: '2025', title: 'Mercado Norte', disc: { es: 'Identidad de Marca', en: 'Brand Identity' }, ratio: '4 / 5' },
  { id: 'lumen', cat: 'uxui', year: '2025', title: 'Lumen App', disc: { es: 'Diseño UX/UI', en: 'UX/UI Design' }, ratio: '4 / 5' },
  { id: 'catalogo-delta', cat: 'editorial', year: '2025', title: 'Catálogo Delta', disc: { es: 'Editorial · Catálogo', en: 'Editorial · Catalogue' }, ratio: '4 / 5' },
  { id: 'revista-sur', cat: 'editorial', year: '2024', title: 'Revista Sur', disc: { es: 'Editorial', en: 'Editorial' }, ratio: '4 / 5' },
  { id: 'cafe-tostado', cat: 'packaging', year: '2024', title: 'Café Tostado', disc: { es: 'Packaging', en: 'Packaging' }, ratio: '4 / 5' },
  { id: 'bienal-ba', cat: 'art', year: '2024', title: 'Bienal BA', disc: { es: 'Dirección de Arte', en: 'Art Direction' }, ratio: '4 / 5' },
  { id: 'estudio-pampa', cat: 'uxui', year: '2023', title: 'Estudio Pampa', disc: { es: 'Diseño Web · UX', en: 'Web Design · UX' }, ratio: '4 / 5' },
  { id: 'fundacion-rio', cat: 'branding', year: '2023', title: 'Fundación Río', disc: { es: 'Identidad de Marca', en: 'Brand Identity' }, ratio: '4 / 5' },
  { id: 'tipo-festival', cat: 'art', year: '2023', title: 'Tipo Festival', disc: { es: 'Campaña · Dirección de Arte', en: 'Campaign · Art Direction' }, ratio: '4 / 5' },
];

/* ---------- contenido de caso (placeholder, bilingue) ---------- */
export const caseSample = {
  role: { es: 'Identidad · Dirección de Arte · Diseño Web', en: 'Identity · Art Direction · Web Design' },
  intro: {
    es: 'Una identidad construida sobre el contraste entre lo artesanal y lo sistemático. El proyecto buscaba traducir una energía local en un sistema visual flexible, capaz de vivir tanto en lo impreso como en pantalla.',
    en: 'An identity built on the contrast between the handmade and the systematic. The project set out to translate a local energy into a flexible visual system, able to live across print and screen alike.',
  },
  objetivo: {
    label: { es: 'Objetivo', en: 'Objective' },
    es: 'Unificar una marca dispersa en una voz coherente, sin perder el carácter espontáneo que la hacía reconocible.',
    en: 'Unify a fragmented brand into one coherent voice, without losing the spontaneous character that made it recognizable.',
  },
  solucion: {
    label: { es: 'Solución', en: 'Solution' },
    es: 'Un sistema modular de tipografía y color, anclado en una grilla flexible que permite componer piezas rápidas con la misma lógica estructural.',
    en: 'A modular system of type and color, anchored in a flexible grid that lets pieces be composed quickly with the same structural logic.',
  },
  quote: {
    es: 'El diseño no decora: ordena, amplifica y vuelve memorable.',
    en: "Design doesn't decorate — it orders, amplifies, and makes memorable.",
  },
  sections: [
    { es: 'Sistema tipográfico', en: 'Type system' },
    { es: 'Paleta y materiales', en: 'Palette & materials' },
    { es: 'Aplicaciones', en: 'Applications' },
  ],
};
