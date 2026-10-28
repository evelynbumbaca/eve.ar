import type { CaseContent } from './types';
import { lookap } from './lookap';

/* casos con contenido propio; el resto usa el molde genérico (caseSample) */
export const cases: Record<string, CaseContent> = {
  lookap,
};
