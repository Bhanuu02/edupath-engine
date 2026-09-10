import React from 'react';
import { HeroSearch } from '../search/HeroSearch';
import { usePathwayStore } from '../../store/pathwayStore';
import { HelpCircle, Scale } from 'lucide-react';

export const HomeLandingView: React.FC = () => {
  const { setStreamQuizOpen, setPassionCompareOpen } = usePathwayStore();

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between bg-gradient-to-b from-orange-50/40 via-white to-orange-50/30 text-slate-800">
      
      {/* 1. Hero Search Section */}
      <div className="w-full">
        <HeroSearch />

        {/* 2. Compact Primary CTA Cards */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* CTA Card 1: Take a Quiz */}
            <button 
              onClick={() => setStreamQuizOpen(true)}
              className="bg-white rounded-2xl p-5 border border-orange-200/90 hover:border-orange-400 shadow-sm hover:shadow-md hover:shadow-orange-500/10 transition-all duration-200 flex items-center gap-4 text-left cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shrink-0 shadow-sm shadow-orange-500/20 group-hover:scale-105 transition-transform">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors font-display">
                  Take a Quiz
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  Find your best career path.
                </p>
              </div>
            </button>

            {/* CTA Card 2: Compare Paths */}
            <button 
              onClick={() => setPassionCompareOpen(true)}
              className="bg-white rounded-2xl p-5 border border-orange-200/90 hover:border-orange-400 shadow-sm hover:shadow-md hover:shadow-orange-500/10 transition-all duration-200 flex items-center gap-4 text-left cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shrink-0 shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors font-display">
                  Compare Paths
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  See which path suits you best.
                </p>
              </div>
            </button>

          </div>
        </section>
      </div>

      <div />
    </div>
  );
};
