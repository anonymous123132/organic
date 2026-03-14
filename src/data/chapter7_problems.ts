import { Problem } from '../types';

export const chapter7Problems: Problem[] = [
  {
    id: '7.1',
    question: 'Provide the IUPAC name for the following alkyne:\nCH3-C≡C-CH(CH3)2',
    solution: '1. Longest chain containing the triple bond: 5 carbons (pentyne).\n2. Numbering: Start from the left to give the triple bond the lower number (C2).\n3. Substituent: A methyl group at C4.\n4. Name: 4-methyl-2-pentyne.',
    isSolvedInText: true
  },
  {
    id: '7.2',
    question: 'What is the major product of the reaction of 1-pentyne with one equivalent of HBr?',
    solution: '1. 1-pentyne is HC≡C-CH2-CH2-CH3.\n2. According to Markovnikov\'s rule, the H+ adds to C1, forming a vinyl carbocation at C2.\n3. The Br- then reacts with the carbocation at C2.\n4. The product is 2-bromo-1-pentene.',
    isSolvedInText: false
  },
  {
    id: '7.3',
    question: 'How can you convert 2-butyne into cis-2-butene?',
    solution: '2-butyne can be converted to cis-2-butene by catalytic hydrogenation using the Lindlar catalyst (H2/Lindlar catalyst).',
    isSolvedInText: true
  },
  {
    id: '7.4',
    question: 'Starting with ethyne, how would you synthesize 1-pentyne?',
    solution: '1. React ethyne (HC≡CH) with NaNH2 to form the sodium acetylide ion (HC≡C-Na+).\n2. React the acetylide ion with 1-bromopropane (CH3CH2CH2Br).\n3. The product is 1-pentyne (HC≡C-CH2CH2CH3).',
    isSolvedInText: false
  },
  {
    id: '7.5',
    question: 'What is the product of the reaction of 1-butyne with H2O, H2SO4, and HgSO4?',
    solution: '1. 1-butyne is HC≡C-CH2-CH3.\n2. The addition of water follows Markovnikov\'s rule, forming an enol with the -OH group at C2.\n3. The enol (CH2=C(OH)-CH2-CH3) tautomerizes to a ketone.\n4. The product is 2-butanone (CH3-C(=O)-CH2-CH3).',
    isSolvedInText: true
  }
];
