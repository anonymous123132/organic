import { Problem } from '../types';

export const chapter12Problems: Problem[] = [
  {
    id: '12.1',
    question: 'Write the initiation and propagation steps for the radical chlorination of methane.',
    solution: '1. Initiation: Cl-Cl + hν → 2 Cl•\n2. Propagation 1: Cl• + CH4 → HCl + •CH3\n3. Propagation 2: •CH3 + Cl2 → CH3Cl + Cl•',
    isSolvedInText: true
  },
  {
    id: '12.2',
    question: 'Arrange the following radicals in order of increasing stability:\nCH3CH2•, (CH3)2CH•, (CH3)3C•, •CH3',
    solution: '1. •CH3 is the least stable.\n2. CH3CH2• is a primary (1°) radical.\n3. (CH3)2CH• is a secondary (2°) radical.\n4. (CH3)3C• is a tertiary (3°) radical (most stable).\n5. Order: •CH3 < CH3CH2• < (CH3)2CH• < (CH3)3C•.',
    isSolvedInText: false
  },
  {
    id: '12.3',
    question: 'Predict the major product of the radical bromination of 2-methylpropane.',
    solution: '1. 2-methylpropane has nine primary hydrogens and one tertiary hydrogen.\n2. Bromination is highly selective for tertiary hydrogens.\n3. The major product is 2-bromo-2-methylpropane.',
    isSolvedInText: true
  },
  {
    id: '12.4',
    question: 'What is the product of the reaction of 1-butene with HBr in the presence of peroxides?',
    solution: '1. Peroxides cause the radical addition of HBr with anti-Markovnikov regioselectivity.\n2. The Br• adds to the less substituted carbon (C1), forming a secondary radical at C2.\n3. The radical at C2 then abstracts a hydrogen from HBr.\n4. The product is 1-bromobutane.',
    isSolvedInText: false
  },
  {
    id: '12.5',
    question: 'Why does radical substitution at an asymmetric center lead to racemization?',
    solution: 'The intermediate radical is sp2 hybridized and planar (or rapidly inverting). The halogen can react with either side of the planar radical with equal probability, resulting in a 50:50 mixture of enantiomers (a racemic mixture).',
    isSolvedInText: true
  }
];
