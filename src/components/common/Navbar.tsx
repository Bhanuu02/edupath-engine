import React from 'react';
import { Compass, Sparkles, Bookmark, HelpCircle, FileDown, Layers } from 'lucide-react';
import { usePathwayStore } from '../../store/pathwayStore';

export const Navbar: React.FC = () => {
  const { 
    bookmarkedRoleIds, 
    setStreamQuizOpen, 
    setExportModalOpen, 
    setComparatorOpen,
    setCopilotOpen,
    activeRole
  } = usePathwayStore();

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-orange-200/70 bg-white/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
            <Compass className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                PathFinder AI
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-300">
                Multi-Stream Engine
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Universal Indian Educational & Career Pathway Matrix
            </p>
          </div>
        </div>

        {/* Global Action Tools */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Compare Streams Button */}
          <button
            onClick={() => setComparatorOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-orange-50 border border-orange-200 hover:border-orange-400 shadow-sm transition-all cursor-pointer"
            title="Compare all 6 parallel routes side-by-side"
          >
            <Layers className="w-3.5 h-3.5 text-orange-500" />
            <span className="hidden md:inline">Compare Streams</span>
          </button>

          {/* Stream Fit Quiz */}
          <button
            onClick={() => setStreamQuizOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-amber-50 border border-amber-200 hover:border-amber-400 shadow-sm transition-all cursor-pointer"
            title="Take Student Aptitude & Role Discovery Quiz"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden md:inline">Aptitude Quiz</span>
          </button>

          {/* AI Career Copilot */}
          <button
            onClick={() => setCopilotOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 border border-orange-400/40 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>AI Copilot</span>
          </button>

          {/* Export PDF */}
          <button
            onClick={() => setExportModalOpen(true)}
            className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 shadow-sm transition-all cursor-pointer"
            title="Export Current Roadmap as PDF / Image"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">Export</span>
          </button>

          {/* Bookmarks Counter */}
          <div 
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white border border-slate-200 shadow-sm"
            title={`${bookmarkedRoleIds.length} saved career pathways`}
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-amber-400/30" />
            <span>{bookmarkedRoleIds.length}</span>
          </div>

        </div>

      </div>
    </header>
  );
};
