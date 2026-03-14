import { tocData } from '../data/toc';
import { tocDataHe } from '../data/toc_he';
import { Part, Chapter, Section } from '../types';

export type NavItem = 
  | { type: 'part', data: Part, path: string }
  | { type: 'chapter', data: Chapter, part: Part, path: string }
  | { type: 'section', data: Section, chapter: Chapter, part: Part, path: string };

export const getTocData = (language: string): Part[] => {
  if (language === 'he') {
    // Merge the Hebrew translations with the full English TOC structure
    // so that missing chapters in Hebrew still show up (in English or as placeholders)
    const hebrewToc = [...tocData];
    tocDataHe.forEach((hePart, pIndex) => {
      if (hebrewToc[pIndex]) {
        hebrewToc[pIndex] = { ...hebrewToc[pIndex], part: hePart.part, title: hePart.title };
        hePart.chapters.forEach((heChapter, cIndex) => {
          if (hebrewToc[pIndex].chapters[cIndex]) {
            hebrewToc[pIndex].chapters[cIndex] = { ...hebrewToc[pIndex].chapters[cIndex], title: heChapter.title };
            heChapter.sections.forEach((heSection, sIndex) => {
              if (hebrewToc[pIndex].chapters[cIndex].sections[sIndex]) {
                hebrewToc[pIndex].chapters[cIndex].sections[sIndex] = { ...hebrewToc[pIndex].chapters[cIndex].sections[sIndex], title: heSection.title };
              }
            });
          }
        });
      }
    });
    return hebrewToc;
  }
  return tocData;
};

export const getFlatNavItems = (language: string): NavItem[] => {
  const items: NavItem[] = [];
  const currentTocData = getTocData(language);

  currentTocData.forEach((part, partIndex) => {
    const partPath = `/part/${partIndex + 1}`;
    items.push({ type: 'part', data: part, path: partPath });

    part.chapters.forEach((chapter) => {
      const chapterPath = `/chapter/${chapter.number}`;
      items.push({ type: 'chapter', data: chapter, part, path: chapterPath });

      chapter.sections.forEach((section) => {
        const match = section.title.match(/^([\d.]+)/);
        const sectionNum = match ? match[1] : '';
        const sectionPath = `/chapter/${chapter.number}/${sectionNum}`;
        items.push({ type: 'section', data: section, chapter, part, path: sectionPath });
      });
    });
  });

  return items;
};

export const getNextPrev = (currentPath: string, language: string) => {
  const items = getFlatNavItems(language);
  const currentIndex = items.findIndex(item => item.path === currentPath);
  if (currentIndex === -1) return { prev: null, next: null };

  return {
    prev: currentIndex > 0 ? items[currentIndex - 1] : null,
    next: currentIndex < items.length - 1 ? items[currentIndex + 1] : null,
  };
};
