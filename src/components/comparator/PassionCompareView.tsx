import React from 'react';
import { 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Award,
  BookOpen,
  Sparkles,
  Zap
} from 'lucide-react';
import { PassionCluster, PASSION_COMPARISON_MATRIX } from '../../data/passionMatrix';
import { usePathwayStore } from '../../store/pathwayStore';

interface PassionCompareViewProps {
  cluster: PassionCluster;
  onSelectPassion?: (cluster: PassionCluster) => void;
}

export const PassionCompareView: React.FC<PassionCompareViewProps> = ({ 
  cluster,
  onSelectPassion 
}) => {
  const { setActiveRoleById, navigateToPathway, setPassionCompareOpen, setComparatorOpen } = usePathwayStore();

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-300">
      
      {/* 1. Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white shadow-xl shadow-orange-500/20 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/30">
            <Flame className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
            Cross-Domain Passion Comparison Matrix
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display leading-tight">
            Passion: {cluster.passionTitle}
          </h2>

          <p className="text-sm sm:text-base text-orange-50 leading-relaxed font-medium">
            {cluster.tagline}
          </p>

          <p className="text-xs sm:text-sm text-white/90 bg-black/10 p-3 rounded-2xl border border-white/15">
            {cluster.summary}
          </p>
        </div>
      </div>

      {/* 2. Quick Passion Topic Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
          <Zap className="w-3.5 h-3.5 text-orange-500" /> Switch Passion:
        </span>
        {PASSION_COMPARISON_MATRIX.map((item) => {
          const isActive = item.passionId === cluster.passionId;
          return (
            <button
              key={item.passionId}
              onClick={() => onSelectPassion && onSelectPassion(item)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                isActive
                  ? 'bg-orange-600 text-white border-orange-600 shadow-sm shadow-orange-500/30'
                  : 'bg-white hover:bg-orange-50 text-slate-700 border-slate-200'
              }`}
            >
              {item.passionTitle}
            </button>
          );
        })}
      </div>

      {/* 3. Side-by-Side Comparison Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {cluster.options.map((opt, idx) => (
          <div 
            key={opt.roleId + idx}
            className="rounded-3xl bg-white border border-orange-200/80 hover:border-orange-400 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 to-amber-500" />

            <div className="space-y-4">
              
              {/* Domain & Stream Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {opt.domainName}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${opt.streamBadgeColor}`}>
                  {opt.streamBadge}
                </span>
              </div>

              {/* Title & Core Philosophy */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors font-display">
                  {opt.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {opt.corePhilosophy}
                </p>
              </div>

              {/* Key Quantitative Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-orange-50/50 border border-orange-100 text-xs">
                
                <div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase block">
                    Duration
                  </span>
                  <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-orange-500" />
                    {opt.durationYears}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase block">
                    Gateway Exam
                  </span>
                  <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5 truncate" title={opt.primaryExam}>
                    <BookOpen className="w-3 h-3 text-amber-500 shrink-0" />
                    <span className="truncate">{opt.primaryExam.split('(')[0]}</span>
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase block">
                    Cost / Investment
                  </span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
                    <DollarSign className="w-3 h-3 text-emerald-600" />
                    {opt.financialInvestment.split('(')[0]}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase block">
                    Competition
                  </span>
                  <span className="font-bold text-amber-800 flex items-center gap-1 mt-0.5">
                    <Award className="w-3 h-3 text-amber-600" />
                    {opt.competitionLevel.split('(')[0]}
                  </span>
                </div>

              </div>

              {/* Salary Trajectory */}
              <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-900 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    Salary Spectrum
                  </span>
                  <span className="font-bold text-emerald-700">
                    {opt.salaryTrajectory.entryLpa} &rarr; {opt.salaryTrajectory.peakLpa}
                  </span>
                </div>
              </div>

              {/* Real Trade-Off Analysis */}
              <div className="space-y-2 pt-1">
                <div className="text-xs flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug"><strong className="text-emerald-900">Upside:</strong> {opt.tradeOffPros}</span>
                </div>
                <div className="text-xs flex items-start gap-2 text-slate-700">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="leading-snug"><strong className="text-amber-900">Trade-Off:</strong> {opt.tradeOffCons}</span>
                </div>
              </div>

            </div>

            {/* Action CTA Button */}
            <div className="pt-5 mt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setActiveRoleById(opt.roleId);
                  setPassionCompareOpen(false);
                  setComparatorOpen(false);
                  navigateToPathway();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer group-hover:scale-[1.02]"
              >
                <span>View Full Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
