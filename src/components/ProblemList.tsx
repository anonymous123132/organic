import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Problem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProblemListProps {
  problems: Problem[];
}

export default function ProblemList({ problems }: ProblemListProps) {
  const [expandedProblems, setExpandedProblems] = useState<Record<string, boolean>>({});
  const { language, t } = useLanguage();

  const toggleProblem = (problemId: string) => {
    setExpandedProblems(prev => ({
      ...prev,
      [problemId]: !prev[problemId]
    }));
  };

  return (
    <div className="divide-y divide-stone-100">
      {problems.map((problem) => (
        <div key={problem.id} className="p-6">
          <div className="flex gap-4">
            <div className="font-mono font-bold text-emerald-600 pt-1">
              {problem.id}.
            </div>
            <div className={`flex-1 space-y-4 ${language === 'he' ? 'text-right' : 'text-left'}`}>
              <p className="text-stone-800 font-medium whitespace-pre-wrap">
                {problem.question}
                {problem.isSolvedInText && (
                  <span className={`${language === 'he' ? 'mr-2' : 'ml-2'} inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800`}>
                    {t('problem.solved')}
                  </span>
                )}
              </p>
              
              <button
                onClick={() => toggleProblem(problem.id)}
                className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors"
              >
                {expandedProblems[problem.id] ? t('problem.hideSolution') : t('problem.showSolution')}
                {expandedProblems[problem.id] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} className={language === 'he' ? 'rotate-180' : ''} />
                )}
              </button>
              
              {expandedProblems[problem.id] && (
                <div className="mt-4 p-4 bg-stone-50 rounded-lg border border-stone-200 text-stone-700 whitespace-pre-wrap animate-in fade-in duration-200">
                  <div className="font-semibold text-stone-900 mb-2">{t('problem.solution')}</div>
                  {problem.solution}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
