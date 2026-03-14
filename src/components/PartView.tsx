import React from 'react';
import { Layers } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useParams } from 'react-router-dom';
import { getTocData } from '../utils/navigation';
import { part1Content } from '../data/part1';
import { part1ContentHe } from '../data/part1_he';
import { useLanguage } from '../contexts/LanguageContext';

export default function PartView() {
  const { partId } = useParams<{ partId: string }>();
  const { language, t } = useLanguage();
  const tocData = getTocData(language);
  const partIndex = parseInt(partId || '1') - 1;
  const part = tocData[partIndex];

  if (!part) return <div>{t('error.partNotFound')}</div>;

  const getPartContent = (partName: string, lang: string) => {
    if (partName === 'PART ONE' || partName === 'חלק ראשון') {
      return lang === 'he' ? part1ContentHe : part1Content;
    }
    return null;
  };

  const content = getPartContent(part.part, language);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
          <Layers size={16} />
          {part.part}
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
          {part.title}
        </h2>
      </div>

      {content ? (
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
              {content}
            </ReactMarkdown>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden p-8 text-center text-stone-500">
          <p>{t('content.notAvailable', { name: part.part })}</p>
        </div>
      )}
    </div>
  );
}
