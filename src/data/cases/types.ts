import type { Bilingual } from '../site';

export type Block =
  | { t: 'h'; n: string; es: string; en: string }
  | { t: 'p'; es: string; en: string }
  | { t: 'note'; es: string; en: string }
  | { t: 'os'; items: { label: Bilingual; es: string; en: string }[] }
  | { t: 'list'; title: Bilingual; items: Bilingual[] }
  | { t: 'cols'; items: { title: Bilingual; es: string; en: string }[] }
  | { t: 'stats'; items: { n: string; es: string; en: string }[] }
  | { t: 'fig'; src: string; es: string; en: string; w?: 'wide' | 'narrow' }
  | { t: 'video'; src: string; es: string; en: string }
  | { t: 'gallery'; es: string; en: string; items: { src: string; alt: string }[] }
  | { t: 'break'; kind: 'img' | 'video'; src: string; alt: string; w?: 'wide' | 'narrow' }
  | { t: 'compare'; es: string; en: string; rows: Bilingual[]; items: { name: string; vals: Bilingual[] }[] }
  | { t: 'sitemap'; es: string; en: string; root: string; branches: { title: Bilingual; kids: Bilingual[] }[] }
  | { t: 'steps'; es: string; en: string; items: Bilingual[] }
  | { t: 'fidelity'; es: string; en: string; items: { kind: 'sketch' | 'wire' | 'mid' | 'hi'; title: Bilingual; text: Bilingual }[] }
  | { t: 'bars'; es: string; en: string; legend: { key: string; label: Bilingual }[]; items: { q: Bilingual; hot?: boolean; parts: { key: string; pct: number }[] }[] }
  | { t: 'brand'; es: string; en: string; logo: string; swatches: { name: Bilingual; tone: string }[]; type: { name: string; text: Bilingual }[] }
  | { t: 'links'; items: { es: string; en: string; href: string }[] };

export interface CaseContent {
  /* colores propios del proyecto (se aplican como variables --lk-* al caso) */
  theme?: { wine: string; coral: string; cream: string; night: string };
  meta: { context: Bilingual; role: Bilingual; tools: string };
  intro: Bilingual;
  blocks: Block[];
}
