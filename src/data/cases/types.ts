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
  | { t: 'links'; items: { es: string; en: string; href: string }[] };

export interface CaseContent {
  meta: { context: Bilingual; role: Bilingual; tools: string };
  intro: Bilingual;
  blocks: Block[];
}
