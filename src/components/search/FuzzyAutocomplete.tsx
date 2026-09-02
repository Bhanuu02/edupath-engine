import React from 'react';
import { SearchCandidate } from '../../hooks/useCareerSearch';
import { Sparkles, ArrowRight, BookOpen, CheckCircle, Target, Zap } from 'lucide-react';
import { ExtractedIntent } from '../../lib/intentExtractor';

interface FuzzyAutocompleteProps {
  candidates: SearchCandidate[];
  query: string;
  intent?: ExtractedIntent;
  onSelect: (candidate: SearchCandidate) => void;
  onCustomGenerate: (query: string) => void;
  isOpen: boolean;
}

export const FuzzyAutocomplete: React.FC<FuzzyAutocompleteProps> = ({
  candidates,
  query,
  intent,
  onSelect,
  onCustomGenerate,
  isOpen
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 z-50 glass-panel rounded-2xl shadow-2xl overflow-hidden border border-slate-700/80 animate-in fade-in slide-in-from-top-2 duration-150">
      
      {/* NLP Intent Extraction Banner */}
      {intent && intent.isConversational && intent.cleanedKeyword && (
        <div className="px-4 py-2 bg-gradient-to-r from-indigo-950/90 to-purple-950/90 border-b border-indigo-500/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-indigo-300">
            <Target className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
            <span>
              Target Goal Identified: <strong className="text-white uppercase tracking-wider underline decoration-indigo-400 font-bold">{intent.cleanedKeyword}</strong>
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Smart Matched
          </span>
        </div>
      )}

      {/* Suggestions List */}
      <div className="max-h-80 overflow-y-auto divide-y divide-slate-800/60 p-2">
        {candidates.length > 0 ? (
          candidates.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              className="w-full text-left p-3 rounded-xl hover:bg-slate-800/80 transition-colors flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-lg bg-slate-800 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300">
                      {item.title}
                    </span>
                    {item.isCurated && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-0.5">
                        <CheckCircle className="w-2.5 h-2.5" /> Curated
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                    {item.shortDescription}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
                      {item.domainName}
                    </span>
                    {item.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] text-slate-400">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
            </button>
          ))
        ) : (
          <div className="p-4 text-center text-xs text-slate-400">
            No exact curated match found. Use AI Synthesis below!
          </div>
        )}
      </div>

      {/* Dynamic AI Generation Banner if custom query */}
      {query.trim().length > 2 && (
        <div className="p-3 bg-gradient-to-r from-indigo-950/80 via-purple-950/80 to-slate-900 border-t border-indigo-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-indigo-200">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Generate custom 6-stream pathway for <strong>"{query}"</strong></span>
          </div>
          <button
            onClick={() => onCustomGenerate(query)}
            className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
          >
            Synthesize with AI
          </button>
        </div>
      )}

    </div>
  );
};
