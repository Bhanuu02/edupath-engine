import React, { useState, useRef, useEffect } from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { useCareerSearch } from '../../hooks/useCareerSearch';
import { FlowTreeGraph } from './FlowTreeGraph';
import { FuzzyAutocomplete } from '../search/FuzzyAutocomplete';
import { 
  ArrowLeft, 
  Search, 
  Compass, 
  Sparkles, 
  Layers, 
  FileDown, 
  HelpCircle, 
  ChevronRight,
  Home,
  X,
  Loader2
} from 'lucide-react';

export const PathwayDetailView: React.FC = () => {
  const { 
    activeRole, 
    navigateToHome, 
    setComparatorOpen, 
    setExportModalOpen, 
    setCopilotOpen,
    setStreamQuizOpen,
    searchQuery,
    setSearchQuery,
    isCustomRoleLoading
  } = usePathwayStore();

  const { searchRoles, selectOrGenerateRole } = useCareerSearch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const { candidates: matchedCandidates, intent } = searchRoles(searchQuery);

  // Close search dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectCandidate = async (candidate: any) => {
    setIsSearchOpen(false);
    setSearchQuery(candidate.title);
    await selectOrGenerateRole(candidate);
  };

  const handleCustomGenerate = async (customQuery: string) => {
    setIsSearchOpen(false);
    await selectOrGenerateRole(customQuery);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearchOpen(false);

    if (intent.extractedRoleKey) {
      const direct = matchedCandidates.find(c => c.id === intent.extractedRoleKey);
      if (direct) {
        await handleSelectCandidate(direct);
        return;
      }
    }

    if (matchedCandidates.length > 0) {
      await handleSelectCandidate(matchedCandidates[0]);
    } else {
      await handleCustomGenerate(intent.cleanedKeyword || searchQuery);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex flex-col">
      
      {/* 1. Pathway Navigation & Quick Search Bar */}
      <div className="sticky top-16 z-30 w-full glass-panel border-b border-slate-800/90 py-3 px-4 sm:px-6 lg:px-8 shadow-xl backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Back Button & Breadcrumbs */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            
            <button
              onClick={navigateToHome}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-indigo-600/20 text-slate-300 hover:text-indigo-300 border border-slate-700/80 hover:border-indigo-500/50 text-xs font-semibold transition-all cursor-pointer shadow-sm group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-indigo-400" />
              <span>Back to Explore</span>
            </button>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
              <button 
                onClick={navigateToHome} 
                className="hover:text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-slate-400">{activeRole.domainName.split(',')[0]}</span>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-indigo-300 font-semibold truncate max-w-[200px]">
                {activeRole.title}
              </span>
            </div>

          </div>

          {/* Quick Search & Actions in Header */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Compact Search Bar */}
            <div ref={searchRef} className="relative w-full sm:w-64">
              <form onSubmit={handleSubmit} className="relative">
                <div className="relative flex items-center rounded-xl bg-slate-900/80 border border-slate-700/80 px-2.5 py-1 focus-within:border-indigo-500 transition-all">
                  <Search className="w-3.5 h-3.5 text-indigo-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsSearchOpen(true);
                    }}
                    onFocus={() => setIsSearchOpen(true)}
                    placeholder="Search another role..."
                    className="w-full bg-transparent text-xs text-white placeholder:text-slate-400 focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="text-slate-400 hover:text-white p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </form>

              {/* Autocomplete */}
              <FuzzyAutocomplete
                candidates={matchedCandidates}
                query={searchQuery}
                intent={intent}
                onSelect={handleSelectCandidate}
                onCustomGenerate={handleCustomGenerate}
                isOpen={isSearchOpen}
              />
            </div>

            {/* Compare Quick Button */}
            <button
              onClick={() => setComparatorOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-700/80 hover:border-indigo-500/40 transition-all cursor-pointer"
              title="Compare all 6 streams side-by-side"
            >
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden lg:inline">Compare</span>
            </button>

            {/* PDF Export */}
            <button
              onClick={() => setExportModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-700/80 hover:border-emerald-500/40 transition-all cursor-pointer"
              title="Export Roadmap as PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden lg:inline">PDF</span>
            </button>

          </div>

        </div>
      </div>

      {/* 2. Scrollable Roadmap Graph Container */}
      <main className="flex-1 w-full py-4 sm:py-6 animate-in fade-in duration-300">
        <FlowTreeGraph />
      </main>

    </div>
  );
};
