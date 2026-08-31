import React, { useState, useRef, useEffect } from 'react';
import { Search, Sparkles, Loader2, X, Compass, TrendingUp } from 'lucide-react';
import { usePathwayStore } from '../../store/pathwayStore';
import { useCareerSearch } from '../../hooks/useCareerSearch';
import { FuzzyAutocomplete } from './FuzzyAutocomplete';
import { DomainChips } from './DomainChips';

const POPULAR_TAGS = [
  'Film Director',
  'Commercial Pilot',
  'Corporate Lawyer',
  'Executive Head Chef',
  'AI Research Engineer',
  'Film & Stage Actor',
  'Music Producer & Composer'
];

export const HeroSearch: React.FC = () => {
  const { searchQuery, setSearchQuery, selectedDomain, isCustomRoleLoading } = usePathwayStore();
  const { searchRoles, selectOrGenerateRole } = useCareerSearch();
  
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const matchedCandidates = searchRoles(searchQuery, selectedDomain);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectCandidate = async (candidate: any) => {
    setIsOpen(false);
    setSearchQuery(candidate.title);
    await selectOrGenerateRole(candidate);
  };

  const handleCustomGenerate = async (customQuery: string) => {
    setIsOpen(false);
    await selectOrGenerateRole(customQuery);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsOpen(false);
    if (matchedCandidates.length > 0) {
      await handleSelectCandidate(matchedCandidates[0]);
    } else {
      await handleCustomGenerate(searchQuery);
    }
  };

  return (
    <div className="w-full relative hero-gradient pt-8 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-indigo-300 shadow-xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Universal Indian Multi-Stream Educational Gateway</span>
        </div>

        {/* Hero Title & Subtitle */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
          Map Every Passion to Parallel{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Post-10th Educational Routes
          </span>
        </h1>
        
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Type any dream role—from <strong>Film Director</strong>, <strong>Actor</strong>, and <strong>Pilot</strong> to <strong>Corporate Lawyer</strong>, <strong>Chef</strong>, and <strong>AI Scientist</strong>. Our NLP engine breaks it into parallel MPC, BiPC, MEC, HEC, and Polytechnic pathways with entrance exams and lateral bridges.
        </p>

        {/* Universal Search Input */}
        <div ref={searchContainerRef} className="relative max-w-2xl mx-auto mt-6">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative flex items-center glass-panel rounded-2xl p-2 border border-slate-700/80 focus-within:border-indigo-500/80 focus-within:glow-indigo transition-all">
              
              <div className="pl-3 pr-2 text-indigo-400">
                <Search className="w-5 h-5" />
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                placeholder="Enter any dream role or passion (e.g. Film Director, Pilot, Chef, Lawyer, Actor...)"
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-slate-400 focus:outline-none px-2 py-1.5"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setIsOpen(false);
                  }}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors mr-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <button
                type="submit"
                disabled={isCustomRoleLoading}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-all disabled:opacity-50 cursor-pointer"
              >
                {isCustomRoleLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Mapping...</span>
                  </>
                ) : (
                  <>
                    <Compass className="w-4 h-4" />
                    <span>Explore</span>
                  </>
                )}
              </button>

            </div>
          </form>

          {/* Autocomplete Dropdown */}
          <FuzzyAutocomplete
            candidates={matchedCandidates}
            query={searchQuery}
            onSelect={handleSelectCandidate}
            onCustomGenerate={handleCustomGenerate}
            isOpen={isOpen}
          />
        </div>

        {/* Popular Trending Passion Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-indigo-400" /> Popular:
          </span>
          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={async () => {
                setSearchQuery(tag);
                await selectOrGenerateRole(tag);
              }}
              className="text-xs px-2.5 py-1 rounded-full bg-slate-900/80 hover:bg-indigo-600/20 hover:text-indigo-300 text-slate-300 border border-slate-800 hover:border-indigo-500/30 transition-all cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Domain Filter Carousel */}
        <div className="pt-4 max-w-4xl mx-auto">
          <DomainChips />
        </div>

      </div>
    </div>
  );
};
