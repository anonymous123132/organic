import { Problem } from '../types';

export const chapter9Problems: Problem[] = [
  {
    id: '9.1',
    question: 'Which reaction is faster: the SN2 reaction of CH3Br with OH- or the SN2 reaction of CH3CH2Br with OH-?',
    solution: '1. Both are SN2 reactions.\n2. CH3Br is a methyl halide, and CH3CH2Br is a primary (1°) alkyl halide.\n3. Methyl halides are less sterically hindered than primary alkyl halides.\n4. Therefore, the reaction of CH3Br is faster.',
    isSolvedInText: true
  },
  {
    id: '9.2',
    question: 'Predict the major product of the E2 reaction of 2-bromopentane with sodium ethoxide.',
    solution: '1. 2-bromopentane is CH3-CH(Br)-CH2-CH2-CH3.\n2. According to Zaitsev\'s rule, the more substituted alkene is the major product.\n3. Removing a proton from C3 gives 2-pentene (disubstituted).\n4. Removing a proton from C1 gives 1-pentene (monosubstituted).\n5. The major product is 2-pentene.',
    isSolvedInText: false
  },
  {
    id: '9.3',
    question: 'What is the product of the SN1 reaction of (R)-3-bromo-3-methylhexane with water?',
    solution: '1. SN1 reactions involve a carbocation intermediate.\n2. The carbocation is planar, allowing the nucleophile (water) to attack from either side.\n3. This leads to racemization.\n4. The product is a racemic mixture of (R)- and (S)-3-methyl-3-hexanol.',
    isSolvedInText: true
  },
  {
    id: '9.4',
    question: 'Which solvent is better for an SN2 reaction: ethanol or DMSO? Why?',
    solution: 'DMSO is better. DMSO is a polar aprotic solvent, which does not solvate the nucleophile strongly, making it more reactive. Ethanol is a polar protic solvent, which solvates the nucleophile through hydrogen bonding, decreasing its reactivity.',
    isSolvedInText: false
  },
  {
    id: '9.5',
    question: 'Predict the major product of the E2 reaction of 1-chloro-1-methylcyclohexane with t-butoxide.',
    solution: '1. t-butoxide is a bulky base.\n2. Bulky bases prefer to remove the most accessible (least hindered) proton.\n3. The protons on the methyl group are more accessible than the protons on the ring.\n4. The major product is methylenecyclohexane (the Hofmann product).',
    isSolvedInText: true
  }
];
