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
    navigateToHome
  } = usePathwayStore();

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Tagline */}
        <button 
          onClick={navigateToHome}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent group-hover:text-indigo-300 transition-colors">
                PathFinder AI
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Multi-Stream Engine
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Universal Indian Educational & Career Pathway Matrix
            </p>
          </div>
        </button>

        {/* Global Action Tools */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Compare Streams Button */}
          <button
            onClick={() => setComparatorOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500/40 transition-all cursor-pointer"
            title="Compare all 6 parallel routes side-by-side"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden md:inline">Compare Streams</span>
          </button>

          {/* Stream Fit Quiz */}
          <button
            onClick={() => setStreamQuizOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-purple-500/40 transition-all cursor-pointer"
            title="Take 4-question stream aptitude assessment"
          >
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden md:inline">Stream Fit Quiz</span>
          </button>

          {/* AI Career Copilot */}
          <button
            onClick={() => setCopilotOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/20 border border-indigo-400/30 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
            <span>AI Copilot</span>
          </button>

          {/* Export PDF */}
          <button
            onClick={() => setExportModalOpen(true)}
            className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-all cursor-pointer"
            title="Export Current Roadmap as PDF / Image"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Export</span>
          </button>

          {/* Bookmarks Counter */}
          <div 
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800"
            title={`${bookmarkedRoleIds.length} saved career pathways`}
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
            <span>{bookmarkedRoleIds.length}</span>
          </div>

        </div>

      </div>
    </header>
  );
};
