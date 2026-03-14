import React from 'react';
import { ChevronRight, ChevronDown, Beaker, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getTocData } from '../utils/navigation';
import { useLanguage } from '../contexts/LanguageContext';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  expandedParts: Record<string, boolean>;
  togglePart: (partName: string) => void;
}

export default function Sidebar({
  isOpen,
  setIsOpen,
  expandedParts,
  togglePart
}: SidebarProps) {
  const [expandedChapters, setExpandedChapters] = React.useState<Record<string, boolean>>({});
  const location = useLocation();
  const { language, t } = useLanguage();
  const currentTocData = getTocData(language);

  const toggleChapter = (chapterNumber: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterNumber]: !prev[chapterNumber]
    }));
  };

  return (
    <div 
      className={`${
        isOpen ? 'w-80 translate-x-0' : 'w-0 -translate-x-full'
      } fixed inset-y-0 ${language === 'he' ? 'right-0' : 'left-0'} z-50 bg-white border-r border-stone-200 transition-all duration-300 ease-in-out overflow-hidden flex flex-col lg:relative lg:translate-x-0 lg:w-80`}
    >
      <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-emerald-50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-600 text-white rounded-lg">
            <Beaker size={24} />
          </div>
          <h1 className="font-bold text-lg text-emerald-900 leading-tight">
            {t('app.title')}
          </h1>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="lg:hidden text-stone-500 hover:text-stone-700"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {currentTocData.map((part, partIndex) => {
          const partPath = `/part/${partIndex + 1}`;
          const isPartActive = location.pathname === partPath;

          return (
            <div key={part.part} className="space-y-2">
              <div className="flex items-center group">
                <Link
                  to={partPath}
                  onClick={() => {
                    if (window.innerWidth < 1024) setIsOpen(false);
                  }}
                  className={`flex-1 ${language === 'he' ? 'text-right' : 'text-left'} ${
                    isPartActive
                      ? 'text-emerald-700'
                      : 'text-stone-800 group-hover:text-emerald-700'
                  }`}
                >
                  <div className="text-xs font-bold tracking-wider text-emerald-600 uppercase mb-1">
                    {part.part}
                  </div>
                  <div className={`font-medium transition-colors text-sm ${language === 'he' ? 'pl-2' : 'pr-2'}`}>
                    {part.title}
                  </div>
                </Link>
                <button
                  onClick={() => togglePart(part.part)}
                  className="p-1 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded"
                >
                  {expandedParts[part.part] ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} className={language === 'he' ? 'rotate-180' : ''} />
                  )}
                </button>
              </div>

              {expandedParts[part.part] && (
                <div className={`space-y-1 mt-2 ${language === 'he' ? 'pr-2 border-r-2' : 'pl-2 border-l-2'} border-stone-100`}>
                  {part.chapters.map((chapter) => {
                    const chapterPath = `/chapter/${chapter.number}`;
                    const isChapterActive = location.pathname === chapterPath;

                    return (
                      <div key={chapter.number} className="space-y-1">
                        <div className="flex items-center group">
                          <Link
                            to={chapterPath}
                            onClick={() => {
                              if (window.innerWidth < 1024) setIsOpen(false);
                            }}
                            className={`flex-1 ${language === 'he' ? 'text-right' : 'text-left'} px-3 py-2 rounded-md text-sm transition-colors flex items-start gap-2 ${
                              isChapterActive
                                ? 'bg-emerald-50 text-emerald-700 font-medium'
                                : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                            }`}
                          >
                            <span className="font-mono text-xs mt-0.5 opacity-60 w-5 flex-shrink-0">
                              {chapter.number}
                            </span>
                            <span className="leading-snug">{chapter.title}</span>
                          </Link>
                          <button
                            onClick={() => toggleChapter(chapter.number)}
                            className="p-1 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded"
                          >
                            {expandedChapters[chapter.number] ? (
                              <ChevronDown size={14} />
                            ) : (
                              <ChevronRight size={14} className={language === 'he' ? 'rotate-180' : ''} />
                            )}
                          </button>
                        </div>

                        {expandedChapters[chapter.number] && (
                          <div className={`space-y-1 mt-1 ${language === 'he' ? 'pr-8 border-r-2 mr-3' : 'pl-8 border-l-2 ml-3'} border-stone-100`}>
                            {chapter.sections.map((section, idx) => {
                              const match = section.title.match(/^([\d.]+)\s+(.*)$/);
                              const num = match ? match[1] : '';
                              const text = match ? match[2] : section.title;
                              const sectionPath = `/chapter/${chapter.number}/${num}`;
                              const isSectionActive = location.pathname === sectionPath;

                              return (
                                <Link
                                  key={idx}
                                  to={sectionPath}
                                  onClick={() => {
                                    if (window.innerWidth < 1024) setIsOpen(false);
                                  }}
                                  className={`w-full ${language === 'he' ? 'text-right' : 'text-left'} px-3 py-1.5 rounded-md text-xs transition-colors flex items-start gap-2 ${
                                    isSectionActive
                                      ? 'bg-emerald-50 text-emerald-700 font-medium'
                                      : 'text-stone-500 hover:bg-stone-100 hover:text-stone-900'
                                  }`}
                                >
                                  {num && (
                                    <span className="font-mono opacity-60 flex-shrink-0">
                                      {num}
                                    </span>
                                  )}
                                  <span className="leading-snug">{text}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
