import { Problem } from '../types';

export const chapter6Problems: Problem[] = [
  {
    id: '6.1',
    question: 'Predict the major product of the reaction of 1-butene with HCl.',
    solution: '1. 1-butene is CH2=CH-CH2-CH3.\n2. According to Markovnikov\'s rule, the H+ adds to C1 (the carbon with more hydrogens), forming a secondary carbocation at C2.\n3. The Cl- then reacts with the carbocation at C2.\n4. The major product is 2-chlorobutane.',
    isSolvedInText: true
  },
  {
    id: '6.2',
    question: 'Arrange the following carbocations in order of increasing stability:\n(CH3)2CH+, CH3CH2+, (CH3)3C+',
    solution: '1. CH3CH2+ is a primary (1°) carbocation (least stable).\n2. (CH3)2CH+ is a secondary (2°) carbocation.\n3. (CH3)3C+ is a tertiary (3°) carbocation (most stable).\n4. Order: CH3CH2+ < (CH3)2CH+ < (CH3)3C+.',
    isSolvedInText: false
  },
  {
    id: '6.3',
    question: 'What is the product of the hydroboration-oxidation of 1-methylcyclohexene?',
    solution: '1. Hydroboration-oxidation adds water with anti-Markovnikov regioselectivity and syn stereochemistry.\n2. The -OH group adds to the less substituted carbon (C2), and the -H adds to the more substituted carbon (C1).\n3. The product is trans-2-methylcyclohexanol (the H and OH add syn, so the methyl and OH end up trans).',
    isSolvedInText: true
  },
  {
    id: '6.4',
    question: 'Predict the product of the reaction of cyclohexene with Br2 in CH2Cl2.',
    solution: '1. The addition of Br2 to an alkene is an anti addition.\n2. The product is trans-1,2-dibromocyclohexane.',
    isSolvedInText: false
  },
  {
    id: '6.5',
    question: 'What carbonyl compounds are formed by the ozonolysis of 2-methyl-2-pentene followed by workup with (CH3)2S?',
    solution: '1. 2-methyl-2-pentene is (CH3)2C=CH-CH2-CH3.\n2. Ozonolysis cleaves the double bond.\n3. The products are acetone ((CH3)2C=O) and propanal (CH3-CH2-CH=O).',
    isSolvedInText: true
  }
];
