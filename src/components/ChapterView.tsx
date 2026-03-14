import React from 'react';
import { BookOpen, Atom, HelpCircle, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useParams, Link } from 'react-router-dom';
import { getFlatNavItems } from '../utils/navigation';
import ProblemList from './ProblemList';
import { chapter1Content, chapter1ContentHe } from '../data/chapter1';
import { chapter1Problems } from '../data/chapter1_problems';
import { chapter1ProblemsHe } from '../data/chapter1_problems_he';
import { chapter2Content } from '../data/chapter2';
import { chapter2Problems } from '../data/chapter2_problems';
import { chapter2ContentHe } from '../data/chapter2_he';
import { chapter2ProblemsHe } from '../data/chapter2_problems_he';
import { chapter3Content } from '../data/chapter3';
import { chapter3Problems } from '../data/chapter3_problems';
import { chapter3ContentHe } from '../data/chapter3_he';
import { chapter3ProblemsHe } from '../data/chapter3_problems_he';
import { useLanguage } from '../contexts/LanguageContext';

export default function ChapterView() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const { language, t } = useLanguage();
  const flatNavItems = getFlatNavItems(language);
  
  const navItem = flatNavItems.find(item => item.type === 'chapter' && item.data.number === chapterId);
  if (!navItem || navItem.type !== 'chapter') return <div>{t('error.chapterNotFound')}</div>;
  
  const { data: chapter } = navItem;

  const getChapterContent = (chapterNumber: string, lang: string) => {
    if (lang === 'he') {
      switch (chapterNumber) {
        case '1': return chapter1ContentHe;
        case '2': return chapter2ContentHe;
        case '3': return chapter3ContentHe;
        default: return null;
      }
    } else {
      switch (chapterNumber) {
        case '1': return chapter1Content;
        case '2': return chapter2Content;
        case '3': return chapter3Content;
        default: return null;
      }
    }
  };

  const getChapterProblems = (chapterNumber: string, lang: string) => {
    if (lang === 'he') {
      switch (chapterNumber) {
        case '1': return chapter1ProblemsHe;
        case '2': return chapter2ProblemsHe;
        case '3': return chapter3ProblemsHe;
        default: return null;
      }
    } else {
      switch (chapterNumber) {
        case '1': return chapter1Problems;
        case '2': return chapter2Problems;
        case '3': return chapter3Problems;
        default: return null;
      }
    }
  };

  const fullContent = getChapterContent(chapter.number, language);
  const problems = getChapterProblems(chapter.number, language);

  // Extract only the intro text (before the first "## ")
  let introContent = fullContent;
  if (fullContent) {
    const match = fullContent.match(/^(.*?)(?=\n## |$)/s);
    if (match) {
      // Remove the "# Title" header if it exists
      introContent = match[1].replace(/^\s*#\s+.*?\n/, '').trim();
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
          <BookOpen size={16} />
          {t('nav.chapter')} {chapter.number}
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
          {chapter.title}
        </h2>
      </div>

      {introContent && (
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden p-8">
          <div className={`prose prose-stone max-w-none prose-headings:text-emerald-900 prose-a:text-emerald-600 ${language === 'he' ? 'text-right' : 'text-left'}`}>
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                a: ({node, ...props}) => {
                  if (props.href?.startsWith('molview:')) {
                    const query = props.href.replace('molview:', '');
                    return (
                      <div className="my-8 rounded-xl overflow-hidden border border-stone-200 shadow-md bg-stone-50 not-prose">
                        <div className="bg-stone-100 px-4 py-3 border-b border-stone-200 flex justify-between items-center">
                          <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">{t('interactive.3d')}</span>
                          <span className="text-sm font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">{query}</span>
                        </div>
                        <iframe 
                          style={{width: '100%', height: '400px'}} 
                          frameBorder="0" 
                          src={`https://molview.org/?q=${query}`}
                          title={`MolView: ${query}`}
                          allowFullScreen
                        />
                      </div>
                    );
                  }
                  return <a {...props} />;
                },
                img: ({node, ...props}) => (
                  <span className="block my-8 rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-50 p-2">
                    <img {...props} className="w-full h-auto rounded-lg object-contain max-h-[500px]" referrerPolicy="no-referrer" />
                    {props.alt && <span className="block text-center text-sm text-stone-500 mt-2 italic">{props.alt}</span>}
                  </span>
                )
              }}
            >
              {introContent}
            </ReactMarkdown>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-6 bg-stone-50 border-b border-stone-200 flex items-center gap-3">
          <Atom className="text-emerald-600" size={20} />
          <h3 className="font-semibold text-stone-800">{t('chapter.sections')}</h3>
        </div>
        <div className="divide-y divide-stone-100">
          {chapter.sections.map((section, index) => {
            // Extract section number and title
            const match = section.title.match(/^([\d.]+)\s+(.*)$/);
            const num = match ? match[1] : '';
            const text = match ? match[2] : section.title;

            return (
              <Link 
                key={index} 
                to={`/chapter/${chapter.number}/${num}`}
                className={`w-full ${language === 'he' ? 'text-right' : 'text-left'} p-4 sm:p-6 hover:bg-stone-50 transition-colors flex items-center justify-between group block`}
              >
                <div className="flex items-start gap-4">
                  {num && (
                    <div className="font-mono text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-12 text-center flex-shrink-0">
                      {num}
                    </div>
                  )}
                  <div className="flex-1 pt-0.5">
                    <p className="text-stone-800 font-medium group-hover:text-emerald-700 transition-colors">
                      {text}
                    </p>
                  </div>
                </div>
                <ChevronRight size={20} className={`text-stone-400 group-hover:text-emerald-600 transition-colors ${language === 'he' ? 'rotate-180' : ''}`} />
              </Link>
            );
          })}
        </div>
      </div>

      {problems && problems.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
          <div className="p-6 bg-stone-50 border-b border-stone-200 flex items-center gap-3">
            <HelpCircle className="text-emerald-600" size={24} />
            <h3 className="font-bold text-xl text-stone-800">{t('chapter.problems')}</h3>
          </div>
          <ProblemList problems={problems} />
        </div>
      )}
    </div>
  );
}
