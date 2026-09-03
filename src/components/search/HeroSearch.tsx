import React, { useState, useRef, useEffect } from 'react';
import { Search, Sparkles, Loader2, X, Compass, TrendingUp, CheckCircle, Cpu, GraduationCap, Briefcase, Layers, Shield } from 'lucide-react';
import { usePathwayStore } from '../../store/pathwayStore';
import { useCareerSearch } from '../../hooks/useCareerSearch';
import { FuzzyAutocomplete } from './FuzzyAutocomplete';
import { DomainChips } from './DomainChips';

const POPULAR_TAGS = [
  'Soldier & Special Forces (Army)',
  'VLSI Semiconductor Engineer',
  'Civil Services (IAS / IPS)',
  'Professional Photographer',
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

  const { candidates: matchedCandidates, intent } = searchRoles(searchQuery, selectedDomain);

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

    const t1 = setTimeout(() => setScanStepIndex(1), 350);
    const t2 = setTimeout(() => setScanStepIndex(2), 700);
    const t3 = setTimeout(() => setScanStepIndex(3), 1050);

    await selectOrGenerateRole(candidateOrQuery);

    setTimeout(() => {
      setIsScanning(false);
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-orange-200 text-xs font-semibold text-orange-600 shadow-sm backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Universal Multi-Stream Educational & Exam Matrix</span>
        </div>

        {/* Hero Title & Subtitle */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
          Map Every Passion to Parallel{' '}
          <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent">
            Post-10th & Degree Routes
          </span>
        </h1>
        
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Type any dream career—such as <strong>Soldier / Commando</strong>, <strong>VLSI Engineer (ECE)</strong>, <strong>Civil Services (IAS/IPS)</strong>, <strong>Photographer</strong>, <strong>Pilot</strong>, or <strong>Chef</strong>. Our engine maps parallel MPC, BiPC, MEC, HEC, and Polytechnic pathways with physical tests, 10th/12th/Degree/Post-Grad exams, and lateral bridges.
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
                placeholder="Enter any dream role or passion (e.g. Soldier, VLSI Engineer, Civil Services, Photography...)"
                className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none px-2 py-1.5"
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
                disabled={isCustomRoleLoading || isScanning}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-orange-500/25 transition-all disabled:opacity-50 cursor-pointer"
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
          <span className="text-xs text-slate-500 flex items-center gap-1 font-semibold">
            <TrendingUp className="w-3.5 h-3.5 text-orange-500" /> Popular:
          </span>
          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={async () => {
                setSearchQuery(tag);
                await triggerAnimatedSearch(tag, tag);
              }}
              className="text-xs px-3 py-1 rounded-full bg-white hover:bg-orange-50 text-slate-700 border border-orange-200/80 hover:border-orange-400 shadow-sm transition-all cursor-pointer"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-orange-200 shadow-2xl text-center space-y-6">
            
            {/* Glowing Orbit Ring */}
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-orange-400/30 animate-ping" />
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500 animate-spin" style={{ animationDuration: '8s' }} />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 flex items-center justify-center text-white shadow-xl shadow-orange-500/30">
                <CurrentScanIcon className="w-7 h-7 animate-pulse" />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest font-bold text-orange-600">
                AI Multi-Stream Engine Active
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                Mapping "{targetSearchTitle}"
              </h3>
            </div>

            {/* Step Progress Checklist */}
            <div className="space-y-2.5 text-left bg-orange-50/50 p-4 rounded-2xl border border-orange-100 text-xs">
              {SCAN_STEPS.map((step, idx) => {
                const isPassed = idx < scanStepIndex;
                const isCurrent = idx === scanStepIndex;

                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2.5 transition-colors ${
                      isCurrent
                        ? 'text-orange-700 font-bold'
                        : isPassed
                        ? 'text-emerald-600'
                        : 'text-slate-400'
                    }`}
                  >
                    {isPassed ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    ) : isCurrent ? (
                      <Loader2 className="w-4 h-4 text-orange-500 animate-spin shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                    )}
                    <span>{step.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
              <div
                className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 h-full transition-all duration-300 rounded-full"
                style={{ width: `${((scanStepIndex + 1) / SCAN_STEPS.length) * 100}%` }}
              />
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
