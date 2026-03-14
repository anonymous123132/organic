import { Problem } from '../types';

export const chapter1Problems: Problem[] = [
  {
    id: "1",
    question: "Oxygen has three isotopes, 16O, 17O, and 18O. The atomic number of oxygen is 8. How many protons and neutrons does each of the isotopes have?",
    solution: "All isotopes of oxygen have 8 protons. 16O has 8 neutrons (16 - 8). 17O has 9 neutrons (17 - 8). 18O has 10 neutrons (18 - 8)."
  },
  {
    id: "2",
    question: "a. How many protons do the following species have? b. How many electrons does each have?\n1. Na+\n2. Ar\n3. Cl-",
    solution: "1. Na+: 11 protons, 10 electrons.\n2. Ar: 18 protons, 18 electrons.\n3. Cl-: 17 protons, 18 electrons."
  },
  {
    id: "3",
    question: "Chlorine has two isotopes, 35Cl and 37Cl; 75.77% of chlorine is 35Cl, and 24.23% is 37Cl. The atomic mass of 35Cl is 34.969 amu, and the atomic mass of 37Cl is 36.966 amu. What is the atomic weight of chlorine?",
    solution: "(0.7577 * 34.969) + (0.2423 * 36.966) = 26.496 + 8.957 = 35.453 amu."
  },
  {
    id: "4",
    question: "How many valence electrons do the following atoms have?\na. boron\nb. nitrogen\nc. oxygen\nd. fluorine",
    solution: "a. boron: 3\nb. nitrogen: 5\nc. oxygen: 6\nd. fluorine: 7"
  },
  {
    id: "5",
    question: "a. Write the ground-state electronic configuration for chlorine (atomic number 17), bromine (atomic number 35), and iodine (atomic number 53).\nb. How many valence electrons do chlorine, bromine, and iodine have?",
    solution: "a. Cl: [Ne] 3s2 3p5. Br: [Ar] 4s2 3d10 4p5. I: [Kr] 5s2 4d10 5p5.\nb. They all have 7 valence electrons."
  },
  {
    id: "6",
    question: "Look at the relative positions of each pair of atoms listed here in the periodic table. How many core electrons does each have? How many valence electrons does each have?\na. carbon and silicon\nb. oxygen and sulfur\nc. nitrogen and phosphorus\nd. magnesium and calcium",
    solution: "a. C: 2 core, 4 valence. Si: 10 core, 4 valence.\nb. O: 2 core, 6 valence. S: 10 core, 6 valence.\nc. N: 2 core, 5 valence. P: 10 core, 5 valence.\nd. Mg: 10 core, 2 valence. Ca: 18 core, 2 valence."
  },
  {
    id: "7",
    question: "a. Find potassium (K) in the periodic table and predict how many valence electrons it has.\nb. What orbital does the unpaired electron occupy?",
    solution: "a. Potassium is in Group 1A, so it has 1 valence electron.\nb. The unpaired electron occupies the 4s orbital."
  },
  {
    id: "8",
    question: "Which bond is more polar?\na. H-CH3 or Cl-CH3\nb. H-OH or H-H\nc. H-Cl or H-F\nd. Cl-Cl or Cl-CH3",
    solution: "a. Cl-CH3 is more polar.\nb. H-OH is more polar.\nc. H-F is more polar.\nd. Cl-CH3 is more polar."
  },
  {
    id: "9",
    question: "Which of the following has\na. the most polar bond?\nb. the least polar bond?\nNaI, LiBr, Cl2, KCl",
    solution: "a. KCl has the most polar bond (largest electronegativity difference).\nb. Cl2 has the least polar bond (zero electronegativity difference)."
  },
  {
    id: "10",
    question: "Use the symbols δ+ and δ- to show the direction of the polarity of the bond between carbon and oxygen:\nH3C-OH",
    solution: "According to Table 1.3, the electronegativity of carbon is 2.5 and the electronegativity of oxygen is 3.5. Because oxygen is more electronegative than carbon, oxygen has a partial negative charge and carbon has a partial positive charge.\nH3C(δ+) - OH(δ-)",
    isSolvedInText: true
  },
  {
    id: "11",
    question: "Use the symbols δ+ and δ- to show the direction of the polarity of the indicated bond in each of the following compounds:\na. HO-H\nb. F-Br\nc. H3C-NH2\nd. H3C-Cl\ne. HO-Br\nf. H3C-Li\ng. I-Cl\nh. H2N-OH",
    solution: "a. HO(δ-) - H(δ+)\nb. F(δ-) - Br(δ+)\nc. H3C(δ+) - NH2(δ-)\nd. H3C(δ+) - Cl(δ-)\ne. HO(δ-) - Br(δ+)\nf. H3C(δ-) - Li(δ+)\ng. I(δ+) - Cl(δ-)\nh. H2N(δ+) - OH(δ-)"
  },
  {
    id: "12",
    question: "Determine the partial negative charge on the fluorine atom in a C-F bond. The bond length is 1.39 Å, and the bond dipole moment is 1.60 D. The charge on an electron is 4.80 × 10^-10 esu.",
    solution: "If fluorine had a full negative charge, the dipole moment would be (4.80 × 10^-10 esu) (1.39 × 10^-8 cm) = 6.67 × 10^-18 esu cm = 6.67 D.\nKnowing that the dipole moment is 1.60 D and that the dipole moment would be 6.67 D if fluorine had a full negative charge, we can calculate that the partial negative charge on the fluorine atom is 0.24 of a full charge:\n1.60 D / 6.67 D = 0.24.",
    isSolvedInText: true
  },
  {
    id: "13",
    question: "Explain why HCl has a smaller dipole moment than HF, even though the H-Cl bond is longer than the H-F bond.",
    solution: "The dipole moment is the product of charge and distance. Although the H-Cl bond is longer, the electronegativity difference between H and F is much greater than between H and Cl. The larger partial charges in HF more than compensate for the shorter bond length, resulting in a larger dipole moment for HF."
  },
  {
    id: "14",
    question: "After examining the potential maps for LiH, HF, and H2, answer the following questions:\na. Which compounds are polar?\nb. Why does LiH have the largest hydrogen?\nc. Which compound has the hydrogen that would be most apt to attract a negatively charged molecule?",
    solution: "a. LiH and HF are polar.\nb. In LiH, hydrogen is more electronegative than lithium, so it bears a partial negative charge, making its electron cloud larger.\nc. HF has the hydrogen that is most apt to attract a negatively charged molecule because it bears a partial positive charge."
  },
  {
    id: "15",
    question: "An atom with a formal charge does not necessarily have more or less electron density than the atoms in the molecule without formal charges. We can see this by examining the potential maps for H2O, H3O+, and HO-.\na. Which atom bears the formal negative charge in the hydroxide ion?\nb. Which atom has the greater electron density in the hydroxide ion?\nc. Which atom bears the formal positive charge in the hydronium ion?\nd. Which atom has the least electron density in the hydronium ion?",
    solution: "a. Oxygen bears the formal negative charge in HO-.\nb. Oxygen has the greater electron density in HO-.\nc. Oxygen bears the formal positive charge in H3O+.\nd. The hydrogen atoms have the least electron density in H3O+."
  },
  {
    id: "17",
    question: "Draw the Lewis structure for each of the following:\na. NO3-\nb. NO2+\nc. -C2H5\nd. +C2H5\ne. CH3NH3+\nf. NaOH\ng. HCO3-\nh. HCO2-",
    solution: "a. The total number of valence electrons is 23 (5 for N and 6 for each of the three Os). Because the species has one negative charge, we must add 1 to the number of valence electrons, for a total of 24. The only way we can arrange one N and three Os and avoid O-O single bonds is to place the three Os around the N. We then use the 24 electrons to form bonds and fill octets with lone-pair electrons. N forms a double bond with one O and single bonds with the other two. N has a +1 formal charge, and the two single-bonded Os have a -1 formal charge.\nb. The total number of valence electrons is 17 (5 for N and 6 for each of the two Os). Because the species has one positive charge, we must subtract 1 from the number of valence electrons, for a total of 16. Two double bonds are necessary to complete N's octet (O=N=O). We find that the N has a formal charge of +1.",
    isSolvedInText: true
  },
  {
    id: "29",
    question: "Do the sp2 carbons and the indicated sp3 carbons have to lie in the same plane?",
    solution: "The two sp2 carbons and the atoms that are bonded to each of the sp2 carbons all lie in the same plane. The other atoms in the molecule will not necessarily lie in the same plane as these six atoms. By putting stars on the six atoms that do lie in the same plane, you will be able to see whether the indicated atoms lie in the same plane.",
    isSolvedInText: true
  },
  {
    id: "31",
    question: "a. Draw the Lewis structure of H2CO.\nb. Describe the orbitals used by the carbon atom in bonding and indicate the approximate bond angles.",
    solution: "a. H2C=O.\nb. Because carbon forms a double bond, we know that it uses sp2 orbitals to bond to the two hydrogens and the oxygen. It uses its 'leftover' p orbital to form the second bond to oxygen. Because carbon is sp2 hybridized, the bond angles are approximately 120°.",
    isSolvedInText: true
  },
  {
    id: "36",
    question: "The bond angles in H3O+ are less than ________ and greater than ________.",
    solution: "The carbon atom in CH4 has no lone pairs; its bond angles are 109.5°. The oxygen atom in H3O+ has one lone pair. A lone pair is more diffuse than a bonding pair, so the O-H bonds squeeze together to minimize electron repulsion. However, they do not squeeze as closely together as they do in water (104.5°), where oxygen has two lone pairs. Therefore, the bond angles in H3O+ are less than 109.5° and greater than 104.5°.",
    isSolvedInText: true
  },
  {
    id: "40",
    question: "In what orbitals are the lone pairs in each of the following molecules?\na. CH3OH\nb. CH3-C(=O)-CH3\nc. CH3C≡N",
    solution: "a. Oxygen forms only single bonds in this compound, so it is sp3 hybridized. It uses two of its four sp3 orbitals to form sigma bonds and the other two for its lone pairs.\nb. Oxygen forms one pi bond in this compound, so it is sp2 hybridized. It uses one of its three sp2 orbitals to form the sigma bond to C and the other two for its lone pairs.\nc. Nitrogen forms two pi bonds in this compound, so it is sp hybridized. It uses one of the sp orbitals to form the sigma bond to C and the other one for its lone pair.",
    isSolvedInText: true
  }
];
