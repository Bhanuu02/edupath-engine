import React, { useState, useRef, useEffect } from 'react';
import { Search, Sparkles, Loader2, X, Compass, TrendingUp, CheckCircle, Cpu, GraduationCap, Briefcase, Layers } from 'lucide-react';
import { usePathwayStore } from '../../store/pathwayStore';
import { useCareerSearch } from '../../hooks/useCareerSearch';
import { FuzzyAutocomplete } from './FuzzyAutocomplete';
import { DomainChips } from './DomainChips';

const POPULAR_TAGS = [
  'VLSI Semiconductor Engineer',
  'Civil Services (IAS / IPS)',
  'Professional Photographer',
  'Film Director',
  'Commercial Pilot',
  'Corporate Lawyer',
  'AI Research Engineer',
  'Executive Head Chef'
];

const SCAN_STEPS = [
  { icon: Cpu, label: 'Analyzing semantic domain & core skill competencies...' },
  { icon: Layers, label: 'Synthesizing parallel streams (MPC, BiPC, MEC, HEC, Polytechnic, Guild)...' },
  { icon: GraduationCap, label: 'Mapping junction exams (10th, 12th, Degree, Post-Grad & Civils)...' },
  { icon: Briefcase, label: 'Calibrating branch choices, lateral switches & salary spectrums...' }
];

export const HeroSearch: React.FC = () => {
  const { searchQuery, setSearchQuery, selectedDomain, isCustomRoleLoading } = usePathwayStore();
  const { searchRoles, selectOrGenerateRole } = useCareerSearch();
  
  const [isOpen, setIsOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStepIndex, setScanStepIndex] = useState(0);
  const [targetSearchTitle, setTargetSearchTitle] = useState('');
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

  const triggerAnimatedSearch = async (title: string, candidateOrQuery: any) => {
    setTargetSearchTitle(title);
    setIsScanning(true);
    setScanStepIndex(0);

    // Step 1
    const t1 = setTimeout(() => setScanStepIndex(1), 350);
    // Step 2
    const t2 = setTimeout(() => setScanStepIndex(2), 700);
    // Step 3
    const t3 = setTimeout(() => setScanStepIndex(3), 1050);

    // Execute generation in parallel
    await selectOrGenerateRole(candidateOrQuery);

    setTimeout(() => {
      setIsScanning(false);
      // Smooth scroll down to the roadmap
      const elem = document.getElementById('roadmap-flow-container');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  const handleSelectCandidate = async (candidate: any) => {
    setIsOpen(false);
    setSearchQuery(candidate.title);
    await triggerAnimatedSearch(candidate.title, candidate);
  };

  const handleCustomGenerate = async (customQuery: string) => {
    setIsOpen(false);
    await triggerAnimatedSearch(customQuery, customQuery);
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

  const CurrentScanIcon = SCAN_STEPS[scanStepIndex]?.icon || Sparkles;

  return (
    <div className="w-full relative hero-gradient pt-8 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-indigo-300 shadow-xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Universal Multi-Stream Educational & Exam Matrix</span>
        </div>

        {/* Hero Title & Subtitle */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
          Map Every Passion to Parallel{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Post-10th & Degree Routes
          </span>
        </h1>
        
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Type any dream career—such as <strong>VLSI Engineer (ECE)</strong>, <strong>Civil Services (IAS/State Groups)</strong>, <strong>Photographer</strong>, <strong>Pilot</strong>, or <strong>Chef</strong>. Our engine breaks down parallel MPC, BiPC, MEC, HEC, and Polytechnic pathways with branch choices, 10th/12th/Degree/Post-Grad exams, and lateral bridges.
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
                placeholder="Enter any dream role or passion (e.g. VLSI Engineer, Civil Services, Photography, Pilot...)"
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
                disabled={isCustomRoleLoading || isScanning}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-all disabled:opacity-50 cursor-pointer"
              >
                {isCustomRoleLoading || isScanning ? (
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
                await triggerAnimatedSearch(tag, tag);
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

      {/* Animated Multi-Step AI Roadmap Scanner Modal Overlay */}
      {isScanning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-indigo-500/40 shadow-2xl text-center space-y-6">
            
            {/* Glowing Orbit Ring */}
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-ping" />
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-400 animate-spin" style={{ animationDuration: '8s' }} />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-xl shadow-indigo-500/40">
                <CurrentScanIcon className="w-7 h-7 animate-pulse" />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest font-bold text-indigo-400">
                AI Multi-Stream Engine Active
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                Mapping "{targetSearchTitle}"
              </h3>
            </div>

            {/* Step Progress Checklist */}
            <div className="space-y-2.5 text-left bg-slate-900/80 p-4 rounded-2xl border border-slate-800 text-xs">
              {SCAN_STEPS.map((step, idx) => {
                const isPassed = idx < scanStepIndex;
                const isCurrent = idx === scanStepIndex;

                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2.5 transition-colors ${
                      isCurrent
                        ? 'text-indigo-300 font-bold'
                        : isPassed
                        ? 'text-emerald-400'
                        : 'text-slate-500'
                    }`}
                  >
                    {isPassed ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : isCurrent ? (
                      <Loader2 className="w-4 h-4 text-indigo-400 animate-spin shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-700 shrink-0" />
                    )}
                    <span>{step.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${((scanStepIndex + 1) / SCAN_STEPS.length) * 100}%` }}
              />
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
