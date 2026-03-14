import { Problem } from '../types';

export const chapter2Problems: Problem[] = [
  {
    id: '2.1',
    question: 'Identify the acid, base, conjugate acid, and conjugate base in the following reaction:\n\nCH3COOH + NH3 ⇌ CH3COO- + NH4+',
    solution: 'Acid: CH3COOH (donates a proton)\nBase: NH3 (accepts a proton)\nConjugate Base: CH3COO- (formed when the acid loses a proton)\nConjugate Acid: NH4+ (formed when the base gains a proton)',
    isSolvedInText: true
  },
  {
    id: '2.2',
    question: 'Which is the stronger acid: HF (pKa = 3.2) or HCN (pKa = 9.2)?',
    solution: 'HF is the stronger acid because it has a lower pKa value. A lower pKa indicates a larger Ka, meaning the acid dissociates more readily in water.',
    isSolvedInText: false
  },
  {
    id: '2.3',
    question: 'Predict the direction of equilibrium for the following reaction:\n\nPhenol (pKa = 10) + OH- ⇌ Phenoxide + H2O (pKa = 15.7)',
    solution: 'The equilibrium favors the formation of the weaker acid. \nReactant acid: Phenol (pKa = 10)\nProduct acid: H2O (pKa = 15.7)\nSince H2O has a higher pKa, it is the weaker acid. Therefore, the equilibrium lies to the right (towards the products).',
    isSolvedInText: true
  },
  {
    id: '2.4',
    question: 'Explain why trichloroacetic acid (CCl3COOH) is a stronger acid than acetic acid (CH3COOH).',
    solution: 'Trichloroacetic acid is stronger due to the inductive effect. The three highly electronegative chlorine atoms pull electron density away from the carboxylate group, stabilizing the negative charge on the conjugate base (CCl3COO-). This stabilization makes it easier for the acid to donate a proton compared to acetic acid, which lacks these electron-withdrawing groups.',
    isSolvedInText: false
  },
  {
    id: '2.5',
    question: 'At physiological pH (7.4), what is the predominant form of lactic acid (pKa = 3.86)?',
    solution: 'Compare the pH to the pKa:\npH (7.4) > pKa (3.86)\nSince the pH is greater than the pKa, the environment is more basic than the molecule. Therefore, lactic acid will exist primarily in its deprotonated (basic) form, which is the lactate ion (CH3CH(OH)COO-).',
    isSolvedInText: true
  }
];
