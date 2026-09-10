import React, { useState, useRef, useEffect } from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { useCareerSearch } from '../../hooks/useCareerSearch';
import { FlowTreeGraph } from './FlowTreeGraph';
import { FuzzyAutocomplete } from '../search/FuzzyAutocomplete';
import {
  ArrowLeft, Search, FileDown, Layers,
  ChevronRight, X, Bookmark, BookmarkCheck
} from 'lucide-react';

import { PassionCompareView } from '../comparator/PassionCompareView';
import { PASSION_COMPARISON_MATRIX, PassionCluster } from '../../data/passionMatrix';

export const PathwayDetailView: React.FC = () => {
  const {
    activeRole, navigateToHome, setComparatorOpen, setExportModalOpen,
    searchQuery, setSearchQuery, isCustomRoleLoading,
    bookmarkedRoleIds, toggleBookmark
  } = usePathwayStore();

  const { searchRoles, selectOrGenerateRole } = useCareerSearch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const { candidates: matchedCandidates } = searchRoles(searchQuery);
  const isBookmarked = bookmarkedRoleIds.includes(activeRole.id);

  // Find if active role belongs to a passion cluster
  const relatedPassion = PASSION_COMPARISON_MATRIX.find(cluster => 
    cluster.options.some(opt => opt.roleId === activeRole.id) ||
    cluster.keywords.some(kw => activeRole.tags?.some(t => t.toLowerCase().includes(kw)))
  ) || PASSION_COMPARISON_MATRIX[0];

  const [currentPassionCluster, setCurrentPassionCluster] = useState<PassionCluster>(relatedPassion);

  useEffect(() => {
    if (relatedPassion) {
      setCurrentPassionCluster(relatedPassion);
    }
  }, [activeRole.id]);

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

  const handleCustomGenerate = async (q: string) => {
    setIsSearchOpen(false);
    await selectOrGenerateRole(q);
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
    <div className="w-full space-y-8 pb-20 bg-gradient-to-b from-orange-50/40 via-white to-orange-50/30 text-slate-800">
      
      {/* Sticky breadcrumb / toolbar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-orange-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-3">

          {/* Back + breadcrumb */}
          <div className="flex items-center gap-2">
            <button
              onClick={navigateToHome}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors border border-orange-200 bg-white shadow-sm cursor-pointer"
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

          {/* Quick search */}
          <div ref={searchRef} className="relative flex-1 max-w-md">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center bg-white rounded-xl px-3 py-1.5 border border-orange-200 focus-within:border-orange-500 focus-within:shadow-md focus-within:shadow-orange-100 transition-all">
                <Search className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => { setSearchQuery(e.target.value); setIsSearchOpen(true); }}
                  onFocus={() => setIsSearchOpen(true)}
                  placeholder="Switch career (e.g. Soldier, VLSI, Civils, Pilot)..."
                  className="w-full bg-transparent text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none"
                  style={{ color: '#1f2937' }}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => { setSearchQuery(''); setIsSearchOpen(false); }}
                    className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
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

          {/* Right-side actions */}
          <div className="flex items-center gap-2">

            {/* Bookmark toggle */}
            <button
              onClick={() => toggleBookmark(activeRole.id)}
              className={`p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-orange-100 text-orange-700 border-orange-400 hover:bg-orange-200'
                  : 'bg-white text-slate-600 border-orange-200 hover:bg-orange-50 hover:text-orange-700'
              }`}
              title={isBookmarked ? 'Remove bookmark' : 'Save this career'}
            >
              {isBookmarked
                ? <BookmarkCheck className="w-3.5 h-3.5 fill-orange-500" />
                : <Bookmark className="w-3.5 h-3.5" />
              }
              <span className="hidden md:inline">{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>

            {/* Compare 6 streams */}
            <button
              onClick={() => setComparatorOpen(true)}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-orange-700 bg-white hover:bg-orange-50 border border-orange-200 shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
              title="Compare all 6 stream blueprints side-by-side"
            >
              <Layers className="w-3.5 h-3.5 text-orange-500" />
              <span className="hidden md:inline">Compare</span>
            </button>

            {/* Export PDF */}
            <button
              onClick={() => setExportModalOpen(true)}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-orange-700 bg-white hover:bg-orange-50 border border-orange-200 shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
              title="Export as PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-orange-500" />
              <span className="hidden md:inline">Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Roadmap Tree Flow View */}
      <FlowTreeGraph />

      {/* Cross-Domain Passion Comparison Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <PassionCompareView 
          cluster={currentPassionCluster} 
          onSelectPassion={(cluster) => setCurrentPassionCluster(cluster)}
        />
      </div>

    </div>
  );
};
