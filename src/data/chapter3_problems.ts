import { Problem } from '../types';

export const chapter3Problems: Problem[] = [
  {
    id: '3.1',
    question: 'Provide the IUPAC name for the following compound:\nCH3-CH(Br)-CH2-CH(Cl)-CH3',
    solution: '1. Longest chain: 5 carbons (pentane).\n2. Numbering: Start from the left to give substituents lower numbers (2, 4) rather than (2, 4) from the right. Both give 2,4. Alphabetize substituents to decide: bromo comes before chloro, so give bromo the lower number.\n3. Substituents: 2-bromo and 4-chloro.\n4. Name: 2-bromo-4-chloropentane.',
    isSolvedInText: true
  },
  {
    id: '3.2',
    question: 'Draw the skeletal structure for 3-ethoxy-2-methylhexane.',
    solution: '1. Parent chain: hexane (6 carbons).\n2. Substituents: an ethoxy group (-O-CH2-CH3) at C3 and a methyl group (-CH3) at C2.\n3. Draw a 6-carbon zigzag line. Add a methyl branch at the second carbon and an oxygen atom attached to an ethyl group at the third carbon.',
    isSolvedInText: false
  },
  {
    id: '3.3',
    question: 'Provide the IUPAC name for the following alcohol:\nCH3-CH2-CH(OH)-CH2-CH2-CH3',
    solution: '1. Longest chain containing the -OH group: 6 carbons (hexane).\n2. Numbering: Start from the left to give the -OH group the lowest number (C3).\n3. Suffix: -ol.\n4. Name: 3-hexanol (or hexan-3-ol).',
    isSolvedInText: true
  },
  {
    id: '3.4',
    question: 'Classify the following amine as primary, secondary, or tertiary and provide its IUPAC name:\n(CH3)2CH-NH-CH3',
    solution: '1. Classification: The nitrogen is bonded to two carbon atoms, so it is a secondary (2°) amine.\n2. Parent chain: The longest chain attached to N is an isopropyl group (3 carbons), so the parent is propanamine.\n3. Substituent on N: A methyl group, so it is N-methyl.\n4. Numbering: The nitrogen is attached to C2 of the propane chain.\n5. Name: N-methyl-2-propanamine.',
    isSolvedInText: false
  },
  {
    id: '3.5',
    question: 'Arrange the following compounds in order of increasing boiling point:\nButane, 1-propanol, ethyl methyl ether.',
    solution: '1. Identify intermolecular forces:\n   - Butane (alkane): Only London dispersion forces (weakest).\n   - Ethyl methyl ether (ether): London dispersion + dipole-dipole interactions.\n   - 1-propanol (alcohol): London dispersion + dipole-dipole + hydrogen bonding (strongest).\n2. Order: Butane < ethyl methyl ether < 1-propanol.',
    isSolvedInText: true
  }
];
