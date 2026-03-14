import { Problem } from '../types';

export const chapter16Problems: Problem[] = [
  {
    id: '16.1',
    question: 'What is the product of the reaction between propanal and ethylmagnesium bromide, followed by H3O+?',
    solution: '1. Propanal is an aldehyde (CH3CH2CHO).\n2. Ethylmagnesium bromide is a Grignard reagent (CH3CH2MgBr).\n3. Nucleophilic addition of the ethyl group to the carbonyl carbon forms a secondary alcohol.\n4. Product: 3-pentanol.',
    isSolvedInText: true
  },
  {
    id: '16.2',
    question: 'Predict the product of the reaction of acetone (propanone) with methylamine (CH3NH2).',
    solution: '1. Acetone is a ketone.\n2. Methylamine is a primary amine.\n3. Reaction of a ketone with a primary amine yields an imine.\n4. Product: N-methylpropan-2-imine.',
    isSolvedInText: false
  },
  {
    id: '16.3',
    question: 'How can you convert cyclohexanone into an alkene using the Wittig reaction?',
    solution: 'React cyclohexanone with a Wittig reagent (phosphonium ylide), such as methylenetriphenylphosphorane (Ph3P=CH2), to form methylenecyclohexane.',
    isSolvedInText: true
  },
  {
    id: '16.4',
    question: 'What is the function of an acetal in organic synthesis?',
    solution: 'An acetal serves as a protecting group for aldehydes and ketones. It is stable to basic and nucleophilic reagents, allowing reactions to occur at other sites in the molecule without affecting the carbonyl group.',
    isSolvedInText: false
  },
  {
    id: '16.5',
    question: 'What is the difference between 1,2-addition and 1,4-addition to an α,β-unsaturated ketone?',
    solution: '1. 1,2-addition involves nucleophilic attack on the carbonyl carbon.\n2. 1,4-addition (conjugate addition) involves nucleophilic attack on the β-carbon, followed by protonation at the α-carbon or oxygen.',
    isSolvedInText: true
  }
];
