import React from 'react';
import { HeroSearch } from '../search/HeroSearch';
import { usePathwayStore } from '../../store/pathwayStore';
import { HelpCircle, BarChart2 } from 'lucide-react';

export const HomeLandingView: React.FC = () => {
  const { setStreamQuizOpen, setComparatorOpen } = usePathwayStore();

  return (
    <div className="w-full pb-16">
      <HeroSearch />
      <div className="max-w-xl mx-auto px-4 pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">

        <button onClick={() => setStreamQuizOpen(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-xl shadow-orange-300/40 transition-all cursor-pointer">
          <span className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <HelpCircle className="w-5 h-5" />
          </span>
          <span className="text-left leading-tight">
            <span className="block text-base font-extrabold">Take a Quiz</span>
            <span className="block text-xs font-normal text-orange-100">Find your best career path</span>
          </span>
        </button>

        <button onClick={() => setComparatorOpen(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white hover:bg-orange-50 border-2 border-orange-300 hover:border-orange-500 text-slate-800 font-bold text-sm shadow-xl transition-all cursor-pointer">
          <span className="w-9 h-9 rounded-xl bg-orange-100 border border-orange-300 flex items-center justify-center shrink-0 text-orange-600">
            <BarChart2 className="w-5 h-5" />
          </span>
          <span className="text-left leading-tight">
            <span className="block text-base font-extrabold text-slate-900">Compare Paths</span>
            <span className="block text-xs font-normal text-slate-500">See which path suits you best</span>
          </span>
        </button>

      </div>
    </div>
  );
};
