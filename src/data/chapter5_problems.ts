import { Problem } from '../types';

export const chapter5Problems: Problem[] = [
  {
    id: '5.1',
    question: 'Calculate the degree of unsaturation for a compound with the molecular formula C6H10.',
    solution: '1. Formula for degree of unsaturation: (2n + 2 - m) / 2.\n2. n = 6, m = 10.\n3. (2*6 + 2 - 10) / 2 = (12 + 2 - 10) / 2 = 4 / 2 = 2.\n4. The compound has 2 degrees of unsaturation (e.g., two double bonds, one triple bond, or two rings).',
    isSolvedInText: true
  },
  {
    id: '5.2',
    question: 'Provide the IUPAC name for the following alkene:\nCH3-CH=C(CH3)-CH2-CH3',
    solution: '1. Longest chain containing the double bond: 5 carbons (pentene).\n2. Numbering: Start from the left to give the double bond the lower number (C2).\n3. Substituent: A methyl group at C3.\n4. Name: 3-methyl-2-pentene.',
    isSolvedInText: false
  },
  {
    id: '5.3',
    question: 'Which is more stable: cis-2-butene or trans-2-butene? Why?',
    solution: 'Trans-2-butene is more stable than cis-2-butene. In the cis isomer, the two methyl groups are on the same side and experience steric strain (repulsion). In the trans isomer, they are on opposite sides, minimizing this strain.',
    isSolvedInText: true
  },
  {
    id: '5.4',
    question: 'A reaction has a ΔH° of -20 kcal/mol and a ΔS° of -0.05 kcal/(mol·K). Is the reaction exergonic at 298 K?',
    solution: '1. ΔG° = ΔH° - TΔS°.\n2. ΔG° = -20 - (298 * -0.05) = -20 + 14.9 = -5.1 kcal/mol.\n3. Since ΔG° < 0, the reaction is exergonic.',
    isSolvedInText: false
  },
  {
    id: '5.5',
    question: 'Draw a reaction coordinate diagram for a one-step exothermic reaction.',
    solution: 'The diagram should show the reactants at a higher energy level than the products. There should be a single peak (transition state) between them. The difference in energy between reactants and the peak is the activation energy (Ea). The difference in energy between reactants and products is ΔH° (negative).',
    isSolvedInText: true
  }
];
