import { Problem } from '../types';

export const chapter13Problems: Problem[] = [
  {
    id: '13.1',
    question: 'A compound has a molecular ion peak at m/z = 122 and an M+2 peak at m/z = 124 of approximately equal intensity. What halogen is present?',
    solution: 'An M and M+2 peak of equal intensity indicates the presence of one bromine atom ($^{79}Br$ and $^{81}Br$).',
    isSolvedInText: true
  },
  {
    id: '13.2',
    question: 'Identify the functional group that gives a strong, broad IR absorption band at 3300 cm-1.',
    solution: 'A strong, broad band at 3300 cm-1 is characteristic of an O-H group (alcohol or phenol) involved in hydrogen bonding.',
    isSolvedInText: false
  },
  {
    id: '13.3',
    question: 'Which compound would have a longer λmax in its UV spectrum: 1,3-butadiene or 1,3,5-hexatriene?',
    solution: '1,3,5-hexatriene will have a longer λmax. Increasing the length of the conjugated system decreases the energy gap between the HOMO and LUMO, resulting in absorption at a longer wavelength.',
    isSolvedInText: true
  },
  {
    id: '13.4',
    question: 'Calculate the concentration of a sample with an absorbance of 0.60, a molar absorptivity of 12,000 M-1 cm-1, and a path length of 1.0 cm.',
    solution: '1. A = εcl\n2. 0.60 = (12,000) * c * (1.0)\n3. c = 0.60 / 12,000 = 5.0 x 10^-5 M.',
    isSolvedInText: false
  },
  {
    id: '13.5',
    question: 'How could you use IR spectroscopy to distinguish between an alcohol and an ether?',
    solution: 'An alcohol will show a strong, broad O-H absorption band between 3200 and 3600 cm-1. An ether will not have this O-H band but will show a C-O absorption band around 1050–1150 cm-1.',
    isSolvedInText: true
  }
];
