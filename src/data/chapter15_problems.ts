import { Problem } from '../types';

export const chapter15Problems: Problem[] = [
  {
    id: '15.1',
    question: 'Provide the IUPAC name for CH3CH2COOCH3.',
    solution: '1. The alkyl group attached to the oxygen is a methyl group.\n2. The acid part has three carbons (propanoic acid).\n3. Change "-oic acid" to "-oate".\n4. Name: methyl propanoate.',
    isSolvedInText: true
  },
  {
    id: '15.2',
    question: 'Arrange the following in order of decreasing reactivity toward nucleophilic acyl substitution: ethyl acetate, acetyl chloride, acetamide.',
    solution: '1. Acetyl chloride (acyl chloride) is the most reactive.\n2. Ethyl acetate (ester) is moderately reactive.\n3. Acetamide (amide) is the least reactive.\n4. Order: acetyl chloride > ethyl acetate > acetamide.',
    isSolvedInText: false
  },
  {
    id: '15.3',
    question: 'What are the products of the acid-catalyzed hydrolysis of methyl benzoate?',
    solution: '1. Methyl benzoate is an ester of benzoic acid and methanol.\n2. Acid-catalyzed hydrolysis yields the parent carboxylic acid and alcohol.\n3. Products: benzoic acid and methanol.',
    isSolvedInText: true
  },
  {
    id: '15.4',
    question: 'How can you convert acetic acid into acetyl chloride?',
    solution: 'Acetic acid can be converted into acetyl chloride by reacting it with thionyl chloride (SOCl2).',
    isSolvedInText: false
  },
  {
    id: '15.5',
    question: 'What is the product of the reaction between benzoyl chloride and ammonia?',
    solution: '1. Benzoyl chloride is an acyl chloride.\n2. Reaction with ammonia (a nucleophile) results in nucleophilic acyl substitution.\n3. The Cl is replaced by an NH2 group.\n4. The product is benzamide.',
    isSolvedInText: true
  }
];
