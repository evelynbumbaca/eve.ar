import type { Bilingual } from '../site';

export interface TreeNode { es: string; en: string; kids?: TreeNode[] }

export type Block =
  | { t: 'h'; n: string; es: string; en: string; nav?: Bilingual }
  | { t: 'glance'; items: { n: string; es: string; en: string }[] }
  | { t: 'personas'; labels: { why: Bilingual; motivation: Bilingual; frustration: Bilingual }; items: { name: string; photo: string; role: Bilingual; meta: Bilingual; why: Bilingual; motivation: Bilingual; frustration: Bilingual; tone: 'coral' | 'wine' }[] }
  | { t: 'features'; title: Bilingual; items: Bilingual[]; mvpTitle: Bilingual; mvp: Bilingual[] }
  | { t: 'metrics'; es: string; en: string; hotTag: Bilingual; note: Bilingual; heads: { task: Bilingual; done: Bilingual; time: Bilingual; steps: Bilingual }; rows: { task: Bilingual; done: number; time: string; steps: string; hot?: boolean; why?: Bilingual }[] }
  | { t: 'p'; es: string; en: string }
  | { t: 'note'; es: string; en: string }
  | { t: 'os'; items: { label: Bilingual; es: string; en: string }[] }
  | { t: 'list'; title: Bilingual; items: Bilingual[] }
  | { t: 'cols'; items: { title: Bilingual; es: string; en: string }[] }
  | { t: 'stats'; items: { n: string; a: Bilingual; b: Bilingual; es: string; en: string }[] }
  | { t: 'finding'; found: { title: Bilingual; n: string; es: string; en: string }; changed: { title: Bilingual; items: { from: Bilingual; to: Bilingual }[] } }
  | { t: 'fig'; src: string; es: string; en: string; w?: 'wide' | 'narrow' }
  | { t: 'video'; src: string; es: string; en: string }
  | { t: 'gallery'; es: string; en: string; items: { src: string; alt: string }[] }
  | { t: 'split'; src: string; alt: string; es: string; en: string }
  | { t: 'break'; kind: 'img' | 'video'; src: string; alt: string; w?: 'wide' | 'narrow' }
  | { t: 'compare'; es: string; en: string; rows: Bilingual[]; items: { name: string; vals: Bilingual[] }[] }
  | { t: 'sitemap'; es: string; en: string; root: string; rootLogo: string; branches: { title: Bilingual; kids: TreeNode[] }[] }
  | { t: 'steps'; es: string; en: string; items: Bilingual[] }
  | { t: 'fidelity'; es: string; en: string; logo: string; items: { kind: 'sketch' | 'wire' | 'mid' | 'hi'; title: Bilingual; text: Bilingual }[] }
  | { t: 'bars'; es: string; en: string; legend: { key: string; label: Bilingual }[]; items: { q: Bilingual; hot?: boolean; why?: Bilingual; parts: { key: string; pct: number }[] }[] }
  | { t: 'brand'; es: string; en: string; logo: string; icon: string; swatches: { name: Bilingual; tone: string; hex: string }[]; labels: { logo: Bilingual; icon: Bilingual; palette: Bilingual; type: Bilingual }; font: { name: string; specs: { es: string; en: string; size: number; weight: number }[] } }
  | { t: 'proto'; title: Bilingual; open: Bilingual; fallback: Bilingual; url: string }
  | { t: 'links'; items: { es: string; en: string; href: string }[] };

export interface CaseContent {
  /* colores propios del proyecto (se aplican como variables --lk-* al caso) */
  /* video de fondo del hero (reemplaza la foto estática) */
  heroVideo?: { src: string; poster: string };
  /* imagen de portada propia del caso (la home sigue usando Project.hero) */
  heroImage?: string;
  theme?: { wine: string; coral: string; cream: string; night: string };
  meta: { context: Bilingual; role: Bilingual; tools: string };
  intro: Bilingual;
  blocks: Block[];
}
