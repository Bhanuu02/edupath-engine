import React from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { StreamType } from '../../types/pathway';
import { 
  X, 
  Layers, 
  Clock, 
  DollarSign, 
  AlertTriangle, 
  Scale, 
  CheckCircle, 
  Zap, 
  ArrowRight 
} from 'lucide-react';

export const RouteComparatorMatrix: React.FC = () => {
  const { activeRole, isComparatorOpen, setComparatorOpen, setSelectedStream } = usePathwayStore();

  if (!isComparatorOpen) return null;

  const streamKeys: StreamType[] = ['HEC', 'MPC', 'BiPC', 'MEC_CEC', 'POLYTECHNIC', 'VOCATIONAL_GUILD'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-7xl max-h-[92vh] flex flex-col glass-panel rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Multi-Stream Comparative Matrix: {activeRole.title}
              </h3>
              <p className="text-xs text-slate-400">
                Compare all 6 parallel post-10th educational routes side-by-side on duration, budget, competition, and ROI.
              </p>
            </div>
          </div>

          <button
            onClick={() => setComparatorOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Horizontal Comparison Grid */}
        <div className="flex-1 overflow-x-auto overflow-y-auto p-4 sm:p-6 scrollbar-thin">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 min-w-[960px] lg:min-w-0">
            
            {streamKeys.map((streamKey) => {
              const stream = activeRole.streams[streamKey];
              if (!stream) return null;

              return (
                <div
                  key={streamKey}
                  className={`rounded-2xl p-4 flex flex-col justify-between border transition-all glass-card ${stream.themeColor.bg} ${stream.themeColor.border} hover:border-slate-500 space-y-4`}
                >
                  
                  {/* Card Title & Stream Badge */}
                  <div className="space-y-2">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${stream.themeColor.bg} ${stream.themeColor.text} border ${stream.themeColor.border}`}>
                      {stream.badgeLabel}
                    </span>

                    <h4 className="text-sm font-bold text-white leading-tight">
                      {stream.streamName}
                    </h4>

                    <p className="text-[11px] text-slate-300 line-clamp-3">
                      {stream.approachPhilosophy}
                    </p>
                  </div>

                  {/* Quantitative Metrics Stack */}
                  <div className="space-y-2 text-xs pt-2 border-t border-slate-800/80">
                    
                    {/* Time to first job */}
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-indigo-400" /> Duration:
                      </span>
                      <strong className="text-white">{stream.metrics.timeToFirstJobYears} Years</strong>
                    </div>

                    {/* Cost Investment */}
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-emerald-400" /> Cost:
                      </span>
                      <strong className="text-emerald-300">{stream.metrics.financialInvestment.replace(/_/g, ' ')}</strong>
                    </div>

                    {/* Competition Level */}
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-amber-400" /> Competition:
                      </span>
                      <strong className="text-amber-300">{stream.metrics.competitionLevel}</strong>
                    </div>

                    {/* Flexibility */}
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Scale className="w-3 h-3 text-purple-400" /> Flexibility:
                      </span>
                      <strong className="text-purple-300">{stream.metrics.flexibilityScore}/10</strong>
                    </div>

                    {/* Practical Ratio */}
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-cyan-400" /> Practical:
                      </span>
                      <strong className="text-cyan-300">{stream.metrics.practicalToTheoryRatio * 10}%</strong>
                    </div>

                  </div>

                  {/* Starting Compensation */}
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] space-y-1">
                    <span className="text-slate-400 font-semibold block">Entry Salary Spectrum</span>
                    <span className="text-xs font-bold text-emerald-400">
                      ₹{stream.salarySpectrumLpa.entryMin} - ₹{stream.salarySpectrumLpa.entryMax} LPA
                    </span>
                  </div>

                  {/* Top Strength & Consideration */}
                  <div className="space-y-2 text-[11px]">
                    <div className="space-y-0.5">
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Key Advantage:
                      </span>
                      <p className="text-slate-300 line-clamp-2">{stream.pros[0]}</p>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-rose-400 font-bold flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Tradeoff:
                      </span>
                      <p className="text-slate-300 line-clamp-2">{stream.cons[0]}</p>
                    </div>
                  </div>

                  {/* Select this Stream CTA */}
                  <button
                    onClick={() => {
                      setSelectedStream(streamKey);
                      setComparatorOpen(false);
                    }}
                    className="w-full py-2 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Full Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                </div>
              );
            })}

          </div>
        </div>

      </div>

    </div>
  );
};
