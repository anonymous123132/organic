import { Problem } from '../types';

export const chapter8Problems: Problem[] = [
  {
    id: '8.1',
    question: 'Draw the resonance contributors for the acetate ion (CH3COO-).',
    solution: '1. The acetate ion has a negative charge on one oxygen and a double bond to the other oxygen.\n2. Move a lone pair from the negative oxygen to form a double bond, and move the pi electrons of the existing double bond to the other oxygen.\n3. The two contributors are identical in stability.',
    isSolvedInText: true
  },
  {
    id: '8.2',
    question: 'Which of the following compounds are aromatic? (a) Cyclobutadiene, (b) Benzene, (c) Cyclooctatetraene.',
    solution: '1. Cyclobutadiene: 4 pi electrons (4n). Not aromatic (antiaromatic).\n2. Benzene: 6 pi electrons (4n+2 where n=1). Aromatic.\n3. Cyclooctatetraene: 8 pi electrons (4n). Not aromatic (non-planar).',
    isSolvedInText: false
  },
  {
    id: '8.3',
    question: 'Predict the major product of the reaction of benzene with CH3CH2Cl and AlCl3.',
    solution: '1. This is a Friedel-Crafts alkylation.\n2. The electrophile is the ethyl cation (CH3CH2+).\n3. The product is ethylbenzene.',
    isSolvedInText: true
  },
  {
    id: '8.4',
    question: 'Why is pyrrole a much weaker base than pyridine?',
    solution: 'In pyrrole, the lone pair on the nitrogen is part of the aromatic pi system (4n+2). Protonating the nitrogen would destroy the aromaticity. In pyridine, the lone pair is in an sp2 orbital and is not part of the aromatic system, so it is available for protonation.',
    isSolvedInText: false
  },
  {
    id: '8.5',
    question: 'What is the product of the reaction of benzene with HNO3 and H2SO4?',
    solution: '1. This is a nitration reaction.\n2. The electrophile is the nitronium ion (NO2+).\n3. The product is nitrobenzene.',
    isSolvedInText: true
  }
];
