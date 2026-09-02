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
  ChevronRight
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Clapperboard,
  Palette,
  Utensils,
  Plane,
  Scale,
  Cpu
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
    <div className="w-full space-y-12 pb-16">
      
      {/* 1. Hero Search Section */}
      <HeroSearch />

      {/* 2. Featured Career Blueprints Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Curated Indian Career Blueprints</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Explore 6-Stream Educational Roadmaps
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Select a dream profession to enter its dedicated roadmap with milestones, exams, and salary trajectories.
            </p>
          </div>
          <span className="text-xs text-slate-400">
            Showing <strong className="text-indigo-400">{displayedCurated.length}</strong> master blueprints
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedCurated.map((role) => {
            const streamsAvailable = Object.keys(role.streams);
            const hecStream = role.streams['HEC'];
            const mpcStream = role.streams['MPC'];
            const sampleStream = hecStream || mpcStream || Object.values(role.streams)[0];
            const salary = sampleStream?.salarySpectrumLpa;

            return (
              <div
                key={role.id}
                onClick={() => {
                  setActiveRoleById(role.id);
                  navigateToPathway();
                }}
                className="glass-panel group rounded-3xl p-5 border border-slate-800 hover:border-indigo-500/50 hover:glow-indigo transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
              >
                {/* Glow Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-all" />

                <div className="space-y-3 relative z-10">
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-900/90 text-indigo-300 border border-slate-700/60">
                      {role.domainName.split(',')[0]}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> {role.marketDemand}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors font-display line-clamp-1">
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {role.shortDescription}
                  </p>

                  {/* 6 Streams Supported */}
                  <div className="pt-2">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block mb-1.5">
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
                                ? 'bg-indigo-950/80 text-indigo-300 border border-indigo-700/50'
                                : 'bg-slate-900 text-slate-400 border border-slate-800 line-through opacity-40'
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
                    <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-800/80">
                      <span className="text-slate-400 text-[11px]">Entry Salary Range:</span>
                      <span className="font-bold text-emerald-400">
                        ₹{salary.entryMin}L - ₹{salary.entryMax}L PA
                      </span>
                    </div>
                  )}

                </div>

                {/* Card Footer Button */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>Enter Roadmap Blueprint</span>
                  <div className="w-7 h-7 rounded-full bg-slate-900 group-hover:bg-indigo-600 group-hover:text-white border border-slate-700/80 flex items-center justify-center transition-all group-hover:translate-x-1">
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
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 relative overflow-hidden">
          
          <div className="max-w-3xl mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display flex items-center gap-2">
              <Compass className="w-5 h-5 text-indigo-400" />
              <span>Explore All 12 Educational & Career Domains</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Browse popular roles across India's multidisciplinary sectors and map pathways from 10th standard onwards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {UNIVERSAL_DOMAINS.map((domain) => {
              const Icon = ICON_MAP[domain.iconName] || Compass;
              const isSelected = selectedDomain === domain.id;

              return (
                <div
                  key={domain.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    isSelected 
                      ? 'bg-indigo-950/40 border-indigo-500/60' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: `${domain.accentColor}25`, border: `1px solid ${domain.accentColor}50` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: domain.accentColor }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">
                        {domain.name}
                      </h4>
                      <span className="text-[10px] text-slate-400 block">
                        {domain.tagline}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 mt-3 pt-2 border-t border-slate-800/80">
                    {domain.popularRoles.slice(0, 3).map((r) => (
                      <button
                        key={r.id}
                        onClick={() => {
                          setActiveRoleById(r.id);
                          navigateToPathway();
                        }}
                        className="w-full text-left px-2 py-1 rounded-lg text-xs text-slate-300 hover:text-indigo-300 hover:bg-slate-800/80 flex items-center justify-between group cursor-pointer transition-colors"
                      >
                        <span className="truncate">{r.title}</span>
                        <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-indigo-400 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Why Multi-Stream Architecture Pillars */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl font-extrabold text-white font-display">
            Why Multi-Stream Pathway Mapping?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            In India, students are often misled that high-profile careers only come from MPC or BiPC. PathFinder AI maps how every passion has legitimate entry points from all streams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white font-display">6 Parallel Routes</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Compare MPC, BiPC, MEC, HEC, 3-Year Polytechnic, and Vocational paths side-by-side with clear timelines and costs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Award className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white font-display">100+ Entrance Exams</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Complete exam blueprints from CLAT, IGRUA CPL, and FTII JET to JEE, NEET, CUET, and State POLYCET/ECET.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <GitFork className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white font-display">Lateral Switch Bridges</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clear roadmaps for switching degrees (e.g. Diploma → ECET → B.Tech 2nd Year; Non-science → NIOS Maths → Pilot).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white font-display">AI Dynamic Synthesis</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Type any emerging passion (e.g. Esports Strategist, Bio-acoustics) to generate an authentic 6-stream pathway dynamically.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Stream Fit Screener & AI Copilot CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/80 via-purple-950/60 to-slate-900 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              Unsure which 10th stream fits your dream role?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Take our 4-question aptitude assessment or ask our conversational AI Career Copilot for personalized guidance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              onClick={() => setStreamQuizOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <span>Take Stream Fit Quiz</span>
            </button>

            <button
              onClick={() => setCopilotOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Ask AI Career Copilot</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
