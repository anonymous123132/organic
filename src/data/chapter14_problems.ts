import { Problem } from '../types';

export const chapter14Problems: Problem[] = [
  {
    id: '14.1',
    question: 'How many signals would you expect in the 1H NMR spectrum of 1,2-dichloroethane?',
    solution: '1. 1,2-dichloroethane is Cl-CH2-CH2-Cl.\n2. All four protons are chemically equivalent due to the symmetry of the molecule.\n3. Therefore, you would expect only one signal.',
    isSolvedInText: true
  },
  {
    id: '14.2',
    question: 'Predict the splitting pattern for the protons in bromoethane (CH3CH2Br).',
    solution: '1. The methyl protons (CH3) have two neighboring protons (CH2). According to the n+1 rule, they will be split into a triplet (2+1=3).\n2. The methylene protons (CH2) have three neighboring protons (CH3). They will be split into a quartet (3+1=4).',
    isSolvedInText: false
  },
  {
    id: '14.3',
    question: 'Which compound has a signal further downfield: CH3Cl or CH3I? Why?',
    solution: 'CH3Cl has a signal further downfield. Chlorine is more electronegative than iodine, so it deshields the methyl protons more, shifting the signal to a higher ppm value.',
    isSolvedInText: true
  },
  {
    id: '14.4',
    question: 'How many signals are in the 13C NMR spectrum of toluene (methylbenzene)?',
    solution: '1. Toluene has a methyl group and a benzene ring.\n2. Carbons: methyl carbon (1), ipso carbon (1), ortho carbons (2 equivalent), meta carbons (2 equivalent), para carbon (1).\n3. Total signals: 5.',
    isSolvedInText: false
  },
  {
    id: '14.5',
    question: 'What information does the integration of a signal provide?',
    solution: 'The integration (the area under the peak) provides the relative number of protons that give rise to that specific signal.',
    isSolvedInText: true
  }
];
