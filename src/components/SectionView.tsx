import React from 'react';
import { FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useParams } from 'react-router-dom';
import { getFlatNavItems } from '../utils/navigation';
import { chapter1Content, chapter1ContentHe } from '../data/chapter1';
import { chapter2Content } from '../data/chapter2';
import { chapter3Content } from '../data/chapter3';
import { chapter2ContentHe } from '../data/chapter2_he';
import { chapter3ContentHe } from '../data/chapter3_he';
import { useLanguage } from '../contexts/LanguageContext';

export default function SectionView() {
  const { chapterId, sectionId } = useParams<{ chapterId: string, sectionId: string }>();
  const { language, t } = useLanguage();
  const flatNavItems = getFlatNavItems(language);
  
  const navItem = flatNavItems.find(item => 
    item.type === 'section' && 
    item.chapter.number === chapterId && 
    item.data.title.startsWith(sectionId || '')
  );

  if (!navItem || navItem.type !== 'section') return <div>{t('error.sectionNotFound')}</div>;

  const { data: section, chapter } = navItem;

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

  const chapterContent = getChapterContent(chapter.number, language);
  
  // Extract section number (e.g., "1.1") from section title
  const match = section.title.match(/^([\d.]+)/);
  const sectionNum = match ? match[1] : '';
  
  let sectionContent = '';
  
  if (chapterContent && sectionNum) {
    // Try to find the section in the markdown
    // Look for "## 1.1" or "## 1.1 "
    const regex = new RegExp(`## \\s*${sectionNum}\\b.*?(?=\\n## |$)`, 'is');
    const contentMatch = chapterContent.match(regex);
    
    if (contentMatch) {
      // Remove the header from the markdown content to avoid duplication
      sectionContent = contentMatch[0].replace(/^##\s*[\d.]+\s*.*?\n/, '');
    } else {
      sectionContent = t('content.notAvailable', { name: section.title });
    }
  } else {
    sectionContent = t('content.notAvailable', { name: section.title });
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
          <FileText size={16} />
          {t('nav.section')} {sectionNum}
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
          {section.title}
        </h2>
      </div>

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
            {sectionContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
