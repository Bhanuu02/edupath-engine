import React from 'react';
import { HeroSearch } from '../search/HeroSearch';
import { CURATED_CAREER_PATHWAYS } from '../../data/curatedPathways';
import { UNIVERSAL_DOMAINS } from '../../data/universalDomains';
import { usePathwayStore } from '../../store/pathwayStore';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Scale, 
  Plane, 
  Clapperboard, 
  Cpu, 
  Utensils, 
  Palette, 
  HelpCircle,
  TrendingUp,
  Layers,
  GitFork,
  Award,
  CheckCircle2,
  ChevronRight,
  Shield,
  GraduationCap
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Clapperboard,
  Palette,
  Utensils,
  Plane,
  Scale,
  Cpu,
  Shield
};

export const HomeLandingView: React.FC = () => {
  const { 
    setActiveRoleById, 
    navigateToPathway, 
    setStreamQuizOpen, 
    setCopilotOpen,
    selectedDomain,
    setSelectedDomain
  } = usePathwayStore();

  const curatedList = Object.values(CURATED_CAREER_PATHWAYS);

  // Filter curated pathways by selected domain if active
  const displayedCurated = selectedDomain === 'all' 
    ? curatedList 
    : curatedList.filter(c => c.domainId === selectedDomain);

  return (
    <div className="w-full space-y-12 pb-16 bg-gradient-to-b from-orange-50/40 via-white to-orange-50/30 text-slate-800">
      
      {/* 1. Hero Search Section */}
      <HeroSearch />

      {/* 2. Featured Career Blueprints Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Curated Multi-Stream Career Blueprints</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Explore 6-Stream Educational Roadmaps
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Select any dream profession to view its complete milestone tree, branch choices, competitive entrance exams, and salary trajectories.
            </p>
          </div>
          <span className="text-xs text-slate-500">
            Showing <strong className="text-orange-600">{displayedCurated.length}</strong> master blueprints
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedCurated.map((role) => {
            const streamsAvailable = Object.keys(role.streams);
            const mpcStream = role.streams['MPC'];
            const hecStream = role.streams['HEC'];
            const sampleStream = mpcStream || hecStream || Object.values(role.streams)[0];
            const salary = sampleStream?.salarySpectrumLpa;

            return (
              <div
                key={role.id}
                onClick={() => {
                  setActiveRoleById(role.id);
                  navigateToPathway();
                }}
                className="bg-white group rounded-3xl p-5 border border-orange-200/80 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden shadow-sm"
              >
                {/* Glow Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/15 transition-all" />

                <div className="space-y-3 relative z-10">
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-orange-50 text-orange-800 border border-orange-200">
                      {role.domainName.split(',')[0]}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-600" /> {role.marketDemand} Demand
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors font-display line-clamp-1">
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {role.shortDescription}
                  </p>

                  {/* 6 Streams Supported */}
                  <div className="pt-2">
                    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block mb-1.5">
                      6 Parallel Post-10th Streams:
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {['MPC', 'BiPC', 'MEC_CEC', 'HEC', 'POLYTECHNIC', 'VOCATIONAL_GUILD'].map((stKey) => {
                        const isMapped = streamsAvailable.includes(stKey);
                        const label = stKey.replace('_CEC', '').replace('_GUILD', '');
                        return (
                          <span
                            key={stKey}
                            className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                              isMapped
                                ? 'bg-orange-100 text-orange-800 border border-orange-300'
                                : 'bg-slate-100 text-slate-400 border border-slate-200 line-through opacity-50'
                            }`}
                          >
                            {label}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Salary Spectrum Preview */}
                  {salary && (
                    <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                      <span className="text-slate-500 text-[11px]">Entry Salary Range:</span>
                      <span className="font-bold text-emerald-700">
                        ₹{salary.entryMin}L - ₹{salary.entryMax}L PA
                      </span>
                    </div>
                  )}

                </div>

                {/* Card Footer Button */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-orange-600 group-hover:text-orange-700">
                  <span>Enter Roadmap Blueprint</span>
                  <div className="w-7 h-7 rounded-full bg-orange-50 group-hover:bg-orange-500 group-hover:text-white border border-orange-200 flex items-center justify-center transition-all group-hover:translate-x-1 text-orange-600">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Universal 12 Career Domains Directory */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-orange-200 shadow-sm relative overflow-hidden">
          
          <div className="max-w-3xl mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display flex items-center gap-2">
              <Compass className="w-5 h-5 text-orange-500" />
              <span>Explore All 12 Educational & Career Domains</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Browse popular roles across India's multidisciplinary sectors and map pathways from 10th standard onwards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {UNIVERSAL_DOMAINS.map((domain) => {
              const Icon = ICON_MAP[domain.iconName] || Compass;

              return (
                <div
                  key={domain.id}
                  className="p-4 rounded-2xl bg-orange-50/40 hover:bg-orange-50 border border-orange-100/80 hover:border-orange-300 transition-all space-y-3"
                >
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="p-2 rounded-xl text-white shadow-sm"
                      style={{ backgroundColor: domain.accentColor || '#ea580c' }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                        {domain.name}
                      </h4>
                      <span className="text-[10px] text-slate-500 line-clamp-1">
                        {domain.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Popular roles list */}
                  <div className="space-y-1.5 pt-1">
                    {domain.popularRoles.slice(0, 3).map((r) => (
                      <button
                        key={r.id}
                        onClick={() => {
                          setActiveRoleById(r.id);
                          navigateToPathway();
                        }}
                        className="w-full text-left text-xs text-slate-700 hover:text-orange-600 flex items-center justify-between py-1 px-2 rounded-lg hover:bg-white transition-colors cursor-pointer group"
                      >
                        <span className="line-clamp-1 group-hover:translate-x-0.5 transition-transform">
                          • {r.title}
                        </span>
                        <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-orange-500 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Interactive Tools Showcase Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Personalized Career Aptitude Assessment</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold font-display">
              Unsure which stream suits your psychological strengths?
            </h3>
            <p className="text-xs sm:text-sm text-orange-100 max-w-xl">
              Take our interactive 3-minute quiz to discover your core strengths (pros), blindspots (cons), and top recommended career roadmaps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => setStreamQuizOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-white text-orange-700 font-bold text-xs sm:text-sm hover:bg-orange-50 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-orange-600" />
              <span>Take Aptitude Quiz</span>
            </button>
            <button
              onClick={() => setCopilotOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-orange-700/80 hover:bg-orange-800 text-white font-bold text-xs sm:text-sm border border-orange-400/40 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Ask AI Copilot</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
