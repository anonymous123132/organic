import { Problem } from '../types';

export const chapter10Problems: Problem[] = [
  {
    id: '10.1',
    question: 'What is the product of the reaction of 1-butanol with PBr3?',
    solution: '1. PBr3 converts primary and secondary alcohols into alkyl bromides via an SN2 mechanism.\n2. The reaction involves inversion of configuration (though not applicable here as the carbon is not chiral).\n3. The product is 1-bromobutane.',
    isSolvedInText: true
  },
  {
    id: '10.2',
    question: 'Predict the major product of the dehydration of 2-methyl-2-butanol.',
    solution: '1. Dehydration of a tertiary alcohol follows an E1 mechanism.\n2. According to Zaitsev\'s rule, the more substituted alkene is the major product.\n3. Removing a proton from C3 gives 2-methyl-2-butene (trisubstituted).\n4. Removing a proton from C1 gives 2-methyl-1-butene (disubstituted).\n5. The major product is 2-methyl-2-butene.',
    isSolvedInText: false
  },
  {
    id: '10.3',
    question: 'What is the product of the oxidation of cyclohexanol with PCC?',
    solution: '1. Cyclohexanol is a secondary alcohol.\n2. PCC (pyridinium chlorochromate) oxidizes secondary alcohols to ketones.\n3. The product is cyclohexanone.',
    isSolvedInText: true
  },
  {
    id: '10.4',
    question: 'Predict the product of the reaction of 1,2-epoxypropane with sodium methoxide (CH3ONa) in methanol.',
    solution: '1. This is a ring-opening of an epoxide under basic conditions.\n2. The nucleophile (CH3O-) attacks the less substituted carbon (C3) via an SN2 mechanism.\n3. The product is 1-methoxy-2-propanol.',
    isSolvedInText: false
  },
  {
    id: '10.5',
    question: 'What is the major product of the Hofmann elimination of N,N,N-trimethylethanammonium hydroxide?',
    solution: '1. Hofmann elimination of a quaternary ammonium hydroxide yields the less substituted alkene.\n2. In this case, the only possible alkene is ethene (CH2=CH2).\n3. The products are ethene, water, and trimethylamine.',
    isSolvedInText: true
  }
];
