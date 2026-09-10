import React, { useState, useEffect } from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { PassionCompareView } from '../comparator/PassionCompareView';
import { PASSION_COMPARISON_MATRIX, PassionCluster } from '../../data/passionMatrix';
import { X, Scale } from 'lucide-react';

export const PassionCompareModal: React.FC = () => {
  const { isPassionCompareOpen, setPassionCompareOpen } = usePathwayStore();
  const [activeCluster, setActiveCluster] = useState<PassionCluster>(PASSION_COMPARISON_MATRIX[0]);

  useEffect(() => {
    if (isPassionCompareOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPassionCompareOpen]);

  if (!isPassionCompareOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/50 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-white rounded-3xl border border-orange-200 shadow-2xl overflow-hidden">
        
        {/* Modal Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-orange-100 flex items-center justify-between bg-orange-50/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-500 text-white shadow-sm">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                Cross-Domain Career Passion Comparator
              </h3>
              <p className="text-xs text-slate-500">
                Compare realistic career routes side-by-side with duration, exams, investment & trade-offs
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => setPassionCompareOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-orange-600 hover:bg-orange-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          <PassionCompareView 
            cluster={activeCluster}
            onSelectPassion={(cluster) => setActiveCluster(cluster)}
          />
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 border-t border-orange-100 bg-orange-50/40 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Click on any career's "View Full Blueprint" to explore its complete 6-stream roadmap.</span>
          <button
            onClick={() => setPassionCompareOpen(false)}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
