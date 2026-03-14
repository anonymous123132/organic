import { Problem } from '../types';

export const chapter17Problems: Problem[] = [
  {
    id: '17.1',
    question: 'Why are α-hydrogens of carbonyl compounds more acidic than other C-H bonds?',
    solution: '1. Removal of an α-hydrogen forms an enolate ion.\n2. The negative charge in the enolate ion is delocalized onto the electronegative oxygen atom through resonance.\n3. This resonance stabilization makes the conjugate base (enolate) more stable, and thus the parent acid more acidic.',
    isSolvedInText: true
  },
  {
    id: '17.2',
    question: 'Predict the major product of the aldol addition of propanal.',
    solution: '1. Propanal is CH3CH2CHO.\n2. One molecule forms an enolate at the α-carbon (CH3-CH-CHO).\n3. The enolate attacks the carbonyl carbon of another propanal molecule.\n4. Product: 3-hydroxy-2-methylpentanal.',
    isSolvedInText: false
  },
  {
    id: '17.3',
    question: 'What is the product of the Claisen condensation of ethyl acetate?',
    solution: '1. Ethyl acetate is CH3COOCH2CH3.\n2. Two molecules react in the presence of ethoxide ion.\n3. One molecule forms an enolate and attacks the carbonyl of the second molecule, displacing ethoxide.\n4. Product: ethyl acetoacetate (ethyl 3-oxobutanoate).',
    isSolvedInText: true
  },
  {
    id: '17.4',
    question: 'How can you synthesize 2-pentanone using the acetoacetic ester synthesis?',
    solution: '1. Start with ethyl acetoacetate.\n2. Treat with base (NaOEt) and then methyl iodide (CH3I) to add a methyl group to the α-carbon.\n3. Hydrolyze the ester and decarboxylate the resulting β-keto acid by heating.\n4. The product is 2-pentanone.',
    isSolvedInText: false
  },
  {
    id: '17.5',
    question: 'What is the Michael reaction?',
    solution: 'The Michael reaction is the nucleophilic conjugate addition (1,4-addition) of a resonance-stabilized carbanion (enolate) to an α,β-unsaturated carbonyl compound.',
    isSolvedInText: true
  }
];
