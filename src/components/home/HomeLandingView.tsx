import React from 'react';
import { HeroSearch } from '../search/HeroSearch';
import { usePathwayStore } from '../../store/pathwayStore';
import { HelpCircle, BarChart2 } from 'lucide-react';

export const HomeLandingView: React.FC = () => {
  const { setStreamQuizOpen, setComparatorOpen } = usePathwayStore();

  return (
    <div className="w-full pb-16">

      {/* 1. Hero Search Section */}
      <HeroSearch />

      {/* 2. Two Action Buttons */}
      <div className="max-w-xl mx-auto px-4 pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">

        <button
          onClick={() => setStreamQuizOpen(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all cursor-pointer group"
        >
          <span className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
            <HelpCircle className="w-5 h-5" />
          </span>
          <span className="text-left leading-tight">
            <span className="block text-base font-extrabold">Take a Quiz</span>
            <span className="block text-xs font-normal text-indigo-200">Find your best career path</span>
          </span>
        </button>

        <button
          onClick={() => setComparatorOpen(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 text-white font-bold text-sm shadow-xl transition-all cursor-pointer group"
        >
          <span className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0 text-indigo-400">
            <BarChart2 className="w-5 h-5" />
          </span>
          <span className="text-left leading-tight">
            <span className="block text-base font-extrabold">Compare Paths</span>
            <span className="block text-xs font-normal text-slate-400">See which path suits you best</span>
          </span>
        </button>

      </div>

    </div>
  );
};
