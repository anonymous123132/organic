import { Problem } from '../types';

export const chapter11Problems: Problem[] = [
  {
    id: '11.1',
    question: 'How do you prepare ethylmagnesium bromide?',
    solution: 'Ethylmagnesium bromide (CH3CH2MgBr) is prepared by reacting ethyl bromide (CH3CH2Br) with magnesium turnings in an anhydrous ether solvent (like diethyl ether or THF).',
    isSolvedInText: true
  },
  {
    id: '11.2',
    question: 'What happens when methylmagnesium bromide reacts with water?',
    solution: 'Methylmagnesium bromide is a very strong base. It reacts with water to form methane (CH4) and magnesium hydroxide bromide (Mg(OH)Br).',
    isSolvedInText: false
  },
  {
    id: '11.3',
    question: 'Predict the product of the reaction of phenylmagnesium bromide with ethylene oxide followed by dilute acid.',
    solution: '1. Phenylmagnesium bromide (PhMgBr) acts as a nucleophile and attacks one of the carbons of ethylene oxide.\n2. The ring opens to form Ph-CH2-CH2-OMgBr.\n3. Addition of dilute acid protonates the oxygen.\n4. The product is 2-phenylethanol (Ph-CH2-CH2-OH).',
    isSolvedInText: true
  },
  {
    id: '11.4',
    question: 'What are the starting materials for the Suzuki coupling to form biphenyl?',
    solution: 'The Suzuki coupling to form biphenyl (Ph-Ph) requires phenylboronic acid (Ph-B(OH)2) and a halobenzene (like bromobenzene, Ph-Br), along with a palladium catalyst and a base.',
    isSolvedInText: false
  },
  {
    id: '11.5',
    question: 'What is the role of the palladium catalyst in the Heck reaction?',
    solution: 'The palladium catalyst facilitates the coupling of an aryl or vinyl halide with an alkene. It undergoes oxidative addition to the halide, insertion of the alkene, and reductive elimination to release the product and regenerate the catalyst.',
    isSolvedInText: true
  }
];
