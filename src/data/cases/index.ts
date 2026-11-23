import type { CaseContent } from './types';
import { lookap } from './lookap';
import { magnolia } from './magnolia';
import { blackLounge } from './black-lounge';
import { planon } from './planon';

/* casos con contenido propio; el resto usa el molde genérico (caseSample) */
export const cases: Record<string, CaseContent> = {
  lookap,
  magnolia,
  'black-lounge': blackLounge,
  planon,
};
