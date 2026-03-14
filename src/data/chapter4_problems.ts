import { Problem } from '../types';

export const chapter4Problems: Problem[] = [
  {
    id: '4.1',
    question: 'Identify the following as cis or trans isomers:\na) (Z)-2-butene\nb) (E)-2-butene',
    solution: 'a) (Z)-2-butene is the cis isomer because the two methyl groups are on the same side of the double bond.\nb) (E)-2-butene is the trans isomer because the two methyl groups are on opposite sides of the double bond.',
    isSolvedInText: true
  },
  {
    id: '4.2',
    question: 'How many asymmetric centers are in the following molecule?\nCH3-CH(Cl)-CH(Br)-CH3',
    solution: 'There are two asymmetric centers: C2 (bonded to H, CH3, Cl, and -CH(Br)CH3) and C3 (bonded to H, CH3, Br, and -CH(Cl)CH3).',
    isSolvedInText: false
  },
  {
    id: '4.3',
    question: 'Assign R or S configuration to the asymmetric center in (S)-2-butanol.',
    solution: '1. Priorities: -OH (1), -CH2CH3 (2), -CH3 (3), -H (4).\n2. If the H is pointing away, and the sequence 1->2->3 is counterclockwise, the configuration is S.',
    isSolvedInText: true
  },
  {
    id: '4.4',
    question: 'A solution of a chiral compound (0.5 g in 10 mL of water) has an observed rotation of +2.0° in a 1.0 dm polarimeter tube. Calculate the specific rotation.',
    solution: '1. Concentration (c) = 0.5 g / 10 mL = 0.05 g/mL.\n2. Path length (l) = 1.0 dm.\n3. Observed rotation (α) = +2.0°.\n4. Specific rotation [α] = α / (l * c) = +2.0 / (1.0 * 0.05) = +40°.',
    isSolvedInText: false
  },
  {
    id: '4.5',
    question: 'Is 1,2-dimethylcyclohexane a meso compound?',
    solution: 'It depends on the stereochemistry. The cis-1,2-dimethylcyclohexane has a plane of symmetry in its flat representation and is a meso compound. The trans-1,2-dimethylcyclohexane does not have a plane of symmetry and exists as a pair of enantiomers.',
    isSolvedInText: true
  }
];
