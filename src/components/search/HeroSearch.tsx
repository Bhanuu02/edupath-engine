import React, { useState, useRef, useEffect } from 'react';
import { Search, Sparkles, Loader2, X, Compass, TrendingUp } from 'lucide-react';
import { usePathwayStore } from '../../store/pathwayStore';
import { useCareerSearch } from '../../hooks/useCareerSearch';
import { FuzzyAutocomplete } from './FuzzyAutocomplete';

const POPULAR_TAGS = [
  'Soldier & Special Forces (Army)',
  'VLSI Semiconductor Engineer',
  'Civil Services (IAS / IPS)',
  'Commercial Pilot',
  'Corporate Lawyer',
  'Chartered Accountant',
  'AI Research Engineer',
  'Executive Head Chef'
];

export const HeroSearch: React.FC = () => {
  const { searchQuery, setSearchQuery, selectedDomain, isCustomRoleLoading, navigateToPathway } = usePathwayStore();
  const { searchRoles, selectOrGenerateRole } = useCareerSearch();
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const { candidates: matchedCandidates, intent } = searchRoles(searchQuery, selectedDomain);

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
    navigateToPathway();
  };

  const handleCustomGenerate = async (customQuery: string) => {
    setIsOpen(false);
    await selectOrGenerateRole(customQuery);
    navigateToPathway();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsOpen(false);
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
    <div className="w-full relative hero-gradient pt-8 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        
        {/* Small Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-orange-200 text-xs font-semibold text-orange-600 shadow-sm backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Universal Indian Multi-Stream Educational Gateway</span>
        </div>

        {/* Hero Title & Subtitle */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
          Got a Dream?{' '}
          <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent">
            Let's Map the Way.
          </span>
        </h1>
        
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Tell us what you like, and we'll show you what career path is best for you
        </p>

        {/* Universal Search Input */}
        <div ref={searchContainerRef} className="relative max-w-2xl mx-auto mt-6">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative flex items-center bg-white rounded-2xl p-2 border border-orange-200/90 shadow-lg shadow-orange-500/5 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200 transition-all">
              
              <div className="pl-3 pr-2 text-orange-500">
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
                className="w-full bg-transparent text-sm sm:text-base placeholder:text-slate-400 focus:outline-none px-2 py-1.5"
                style={{ color: '#1f2937' }}
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setIsOpen(false);
                  }}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors mr-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <button
                type="submit"
                disabled={isCustomRoleLoading}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-orange-500/25 transition-all disabled:opacity-50 cursor-pointer"
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
            intent={intent}
            onSelect={handleSelectCandidate}
            onCustomGenerate={handleCustomGenerate}
            isOpen={isOpen}
          />
        </div>

        {/* Popular Trending Passion Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
          <span className="text-xs text-slate-500 flex items-center gap-1 font-semibold">
            <TrendingUp className="w-3.5 h-3.5 text-orange-500" /> Popular:
          </span>
          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={async () => {
                setSearchQuery(tag);
                await selectOrGenerateRole(tag);
                navigateToPathway();
              }}
              className="text-xs px-3 py-1 rounded-full bg-white hover:bg-orange-50 text-slate-700 border border-orange-200/80 hover:border-orange-400 shadow-sm transition-all cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
