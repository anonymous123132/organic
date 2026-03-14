import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'en' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const translations = {
  en: {
    'app.title': 'Organic Chemistry',
    'nav.previous': 'Previous',
    'nav.next': 'Next',
    'nav.tableOfContents': 'Table of Contents',
    'nav.chapter': 'Chapter',
    'nav.section': 'Section',
    'settings.language': 'Language',
    'settings.english': 'English',
    'settings.hebrew': 'Hebrew (עברית)',
    'chapter.sections': 'Sections in this chapter',
    'chapter.problems': 'Practice Problems',
    'content.notAvailable': 'Content for {name} is not yet available.',
    'interactive.3d': 'Interactive 3D Structure',
    'problem.solved': 'SOLVED',
    'problem.hideSolution': 'Hide Solution',
    'problem.showSolution': 'Show Solution',
    'problem.solution': 'Solution:',
    'app.emptyState': 'Select a chapter or part from the sidebar to view its contents.',
    'error.partNotFound': 'Part not found',
    'error.chapterNotFound': 'Chapter not found',
    'error.sectionNotFound': 'Section not found',
  },
  he: {
    'app.title': 'כימיה אורגנית',
    'nav.previous': 'הקודם',
    'nav.next': 'הבא',
    'nav.tableOfContents': 'תוכן עניינים',
    'nav.chapter': 'פרק',
    'nav.section': 'סעיף',
    'settings.language': 'שפה',
    'settings.english': 'אנגלית (English)',
    'settings.hebrew': 'עברית',
    'chapter.sections': 'סעיפים בפרק זה',
    'chapter.problems': 'שאלות תרגול',
    'content.notAvailable': 'התוכן עבור {name} עדיין לא זמין.',
    'interactive.3d': 'מבנה תלת-ממדי אינטראקטיבי',
    'problem.solved': 'פתור',
    'problem.hideSolution': 'הסתר פתרון',
    'problem.showSolution': 'הצג פתרון',
    'problem.solution': 'פתרון:',
    'app.emptyState': 'בחר פרק או חלק מהתפריט הצדדי כדי לצפות בתוכן.',
    'error.partNotFound': 'החלק לא נמצא',
    'error.chapterNotFound': 'הפרק לא נמצא',
    'error.sectionNotFound': 'הסעיף לא נמצא',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('appLanguage') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'he')) {
      setLanguageState(savedLang);
      document.documentElement.dir = savedLang === 'he' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLang;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('appLanguage', lang);
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string, params?: Record<string, string>): string => {
    let text = (translations[language] as any)[key] || key;
    if (params) {
      Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param]);
      });
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
