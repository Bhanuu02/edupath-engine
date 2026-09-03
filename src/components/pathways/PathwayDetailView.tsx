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

  const matchedCandidates = searchRoles(searchQuery);

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
    if (matchedCandidates.length > 0) {
      await handleSelectCandidate(matchedCandidates[0]);
    } else {
      await handleCustomGenerate(searchQuery);
    }
  };

  return (
    <div className="w-full space-y-6 pb-20 bg-gradient-to-b from-orange-50/40 via-white to-orange-50/30 text-slate-800">
      
      {/* Top Breadcrumb & Rapid Search Bar */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-orange-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-3">
          
          {/* Back to Home & Breadcrumb */}
          <div className="flex items-center gap-2">
            <button
              onClick={navigateToHome}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors border border-orange-200/80 bg-white shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
              <span className="hover:text-orange-600 cursor-pointer" onClick={navigateToHome}>Home</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-orange-600 font-semibold truncate max-w-[180px]">{activeRole.title}</span>
            </div>
          </div>

          {/* Quick In-Pathway Search Box */}
          <div ref={searchRef} className="relative flex-1 max-w-md">
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex items-center bg-orange-50/50 rounded-xl px-3 py-1.5 border border-orange-200 focus-within:border-orange-500 focus-within:bg-white transition-all">
                <Search className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  placeholder="Switch career (e.g. Soldier, VLSI, Civils, Pilot)..."
                  className="w-full bg-transparent text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                    className="p-1 text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </form>

            <FuzzyAutocomplete
              candidates={matchedCandidates}
              query={searchQuery}
              onSelect={handleSelectCandidate}
              onCustomGenerate={handleCustomGenerate}
              isOpen={isSearchOpen}
            />
          </div>

          {/* Quick Action Tools */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setComparatorOpen(true)}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-orange-700 bg-white hover:bg-orange-50 border border-orange-200 shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
              title="Compare all 6 streams side-by-side"
            >
              <Layers className="w-3.5 h-3.5 text-orange-500" />
              <span className="hidden md:inline">Compare</span>
            </button>

            <button
              onClick={() => setExportModalOpen(true)}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-200 shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
              title="Export as PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden md:inline">Export</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Roadmap Tree Flow View */}
      <FlowTreeGraph />

    </div>
  );
};
