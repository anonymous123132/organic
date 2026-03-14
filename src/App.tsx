import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Menu, Dna, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ChapterView from './components/ChapterView';
import PartView from './components/PartView';
import SectionView from './components/SectionView';
import { getFlatNavItems, getNextPrev, getTocData } from './utils/navigation';
import { Link } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const currentTocData = getTocData(language);
  const [expandedParts, setExpandedParts] = useState<Record<string, boolean>>({
    [currentTocData[0].part]: true
  });
  const location = useLocation();

  const togglePart = (partName: string) => {
    setExpandedParts(prev => ({
      ...prev,
      [partName]: !prev[partName]
    }));
  };

  const flatNavItems = getFlatNavItems(language);
  const currentNavItem = flatNavItems.find(item => item.path === location.pathname);
  const { prev, next } = getNextPrev(location.pathname, language);

  // Helper to get title for prev/next buttons
  const getNavTitle = (item: any) => {
    if (item.type === 'part') return item.data.part;
    if (item.type === 'chapter') return `${t('nav.chapter') || 'Chapter'} ${item.data.number}`;
    if (item.type === 'section') {
      const match = item.data.title.match(/^([\d.]+)/);
      return `${t('nav.section') || 'Section'} ${match ? match[1] : item.data.title}`;
    }
    return '';
  };

  return (
    <div className={`flex h-screen bg-stone-50 text-stone-900 font-sans ${language === 'he' ? 'rtl' : 'ltr'}`}>
      <Sidebar 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        expandedParts={expandedParts}
        togglePart={togglePart}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-stone-50">
        <header className="bg-white border-b border-stone-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-stone-600 hover:bg-stone-100 rounded-md"
            >
              <Menu size={20} />
            </button>
            <div className="font-medium text-stone-800 truncate">
              {currentNavItem?.type === 'chapter' 
                ? `${t('nav.chapter') || 'Chapter'} ${currentNavItem.data.number}` 
                : currentNavItem?.type === 'part' 
                  ? currentNavItem.data.part 
                  : currentNavItem?.type === 'section'
                    ? currentNavItem.data.title
                    : t('app.title')}
            </div>
          </div>
          <div className="hidden lg:block"></div>
          
          <div className="flex items-center gap-2 relative group">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-100 rounded-md transition-colors">
              <Globe size={16} />
              {language === 'en' ? 'EN' : 'עב'}
            </button>
            <div className="absolute top-full right-0 mt-1 w-32 bg-white border border-stone-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <button 
                onClick={() => setLanguage('en')}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-stone-50 ${language === 'en' ? 'text-emerald-600 font-medium' : 'text-stone-700'}`}
              >
                {t('settings.english')}
              </button>
              <button 
                onClick={() => setLanguage('he')}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-stone-50 ${language === 'he' ? 'text-emerald-600 font-medium' : 'text-stone-700'}`}
              >
                {t('settings.hebrew')}
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 lg:p-12">
          <div className="max-w-4xl mx-auto pb-24">
            <Routes>
              <Route path="/" element={<Navigate to="/part/1" replace />} />
              <Route path="/part/:partId" element={<PartView />} />
              <Route path="/chapter/:chapterId" element={<ChapterView />} />
              <Route path="/chapter/:chapterId/:sectionId" element={<SectionView />} />
              <Route path="*" element={
                <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4 py-20">
                  <Dna size={48} className="opacity-20" />
                  <p className="text-lg">{t('app.emptyState')}</p>
                </div>
              } />
            </Routes>

            {/* Pagination / Next & Prev */}
            {(prev || next) && (
              <div className="mt-12 flex items-center justify-between border-t border-stone-200 pt-6">
                {prev ? (
                  <Link 
                    to={prev.path}
                    className="flex flex-col items-start group"
                  >
                    <span className="text-sm font-medium text-stone-500 mb-1 flex items-center gap-1">
                      {language === 'he' ? <ChevronRight size={16} /> : <ChevronLeft size={16} />} {t('nav.previous')}
                    </span>
                    <span className="text-emerald-700 font-semibold group-hover:text-emerald-600 transition-colors">
                      {getNavTitle(prev)}
                    </span>
                  </Link>
                ) : <div />}
                
                {next ? (
                  <Link 
                    to={next.path}
                    className="flex flex-col items-end group text-right"
                  >
                    <span className="text-sm font-medium text-stone-500 mb-1 flex items-center gap-1">
                      {t('nav.next')} {language === 'he' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </span>
                    <span className="text-emerald-700 font-semibold group-hover:text-emerald-600 transition-colors">
                      {getNavTitle(next)}
                    </span>
                  </Link>
                ) : <div />}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
