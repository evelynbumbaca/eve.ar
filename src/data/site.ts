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
};

export const social: { label: string; href: string }[] = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'Behance', href: 'https://behance.net/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Gumroad', href: site.gumroad },
];

/* ---------- navegacion ---------- */
export const nav: NavItem[] = [
  { es: 'Inicio', en: 'Index', href: '/' },
  { es: 'Trabajos', en: 'Work', href: '/#trabajos' },
  { es: 'Estudio', en: 'About', href: '/estudio' },
  { es: 'Tienda', en: 'Shop', href: '/tienda' },
  { es: 'Contacto', en: 'Contact', href: '/contacto' },
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

/* ---------- disciplinas (palabra rotante del hero) ---------- */
export const disciplines: Bilingual[] = [
  { es: 'multimedia', en: 'multimedia' },
  { es: 'editorial', en: 'editorial' },
  { es: 'de marca', en: 'of brand' },
  { es: 'de producto', en: 'of product' },
  { es: 'con intención', en: 'with intent' },
];

/* ---------- proyectos (placeholders por ahora) ---------- */
export const projects: Project[] = [
  { id: 'mercado-norte', cat: 'branding', year: '2025', title: 'Mercado Norte', disc: { es: 'Identidad de Marca', en: 'Brand Identity' }, ratio: '4 / 5' },
  { id: 'lumen', cat: 'uxui', year: '2025', title: 'Lumen App', disc: { es: 'Diseño UX/UI', en: 'UX/UI Design' }, ratio: '4 / 5' },
  { id: 'revista-sur', cat: 'editorial', year: '2024', title: 'Revista Sur', disc: { es: 'Editorial', en: 'Editorial' }, ratio: '4 / 5' },
  { id: 'cafe-tostado', cat: 'packaging', year: '2024', title: 'Café Tostado', disc: { es: 'Packaging', en: 'Packaging' }, ratio: '4 / 5' },
  { id: 'bienal-ba', cat: 'art', year: '2024', title: 'Bienal BA', disc: { es: 'Dirección de Arte', en: 'Art Direction' }, ratio: '4 / 5' },
  { id: 'estudio-pampa', cat: 'uxui', year: '2023', title: 'Estudio Pampa', disc: { es: 'Diseño Web · UX', en: 'Web Design · UX' }, ratio: '4 / 5' },
  { id: 'fundacion-rio', cat: 'branding', year: '2023', title: 'Fundación Río', disc: { es: 'Identidad de Marca', en: 'Brand Identity' }, ratio: '4 / 5' },
  { id: 'tipo-festival', cat: 'art', year: '2023', title: 'Tipo Festival', disc: { es: 'Campaña · Dirección de Arte', en: 'Campaign · Art Direction' }, ratio: '4 / 5' },
];
