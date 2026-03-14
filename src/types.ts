export interface Section {
  title: string;
}

export interface Chapter {
  number: string;
  title: string;
  sections: Section[];
}

export interface Part {
  part: string;
  title: string;
  chapters: Chapter[];
}

export interface Problem {
  id: string;
  question: string;
  solution: string;
  isSolvedInText?: boolean;
}

export type ActiveItem = 
  | { type: 'part'; data: Part } 
  | { type: 'chapter'; data: Chapter; part: Part } 
  | { type: 'section'; data: Section; chapter: Chapter; part: Part }
  | null;
