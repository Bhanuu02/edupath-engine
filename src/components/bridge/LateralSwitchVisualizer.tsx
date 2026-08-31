import React from 'react';
import { LateralSwitchPoint } from '../../types/pathway';
import { GitFork, ArrowRight, CheckCircle, Zap } from 'lucide-react';

interface LateralSwitchVisualizerProps {
  switches: LateralSwitchPoint[];
}

export const LateralSwitchVisualizer: React.FC<LateralSwitchVisualizerProps> = ({ switches }) => {
  if (!switches || switches.length === 0) return null;

  return (
    <div className="w-full my-6 p-4 sm:p-5 rounded-2xl glass-panel border border-cyan-500/30 bg-cyan-950/20 space-y-3">
      
      {/* Title */}
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
          <GitFork className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-bold text-white font-display">
            Lateral Switch Points & Educational Bridge Portals
          </h4>
          <p className="text-xs text-cyan-200/80">
            How students in this stream can switch into parallel degrees or fast-track lateral entry routes.
          </p>
        </div>
      </div>

      {/* Switch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        {switches.map((sw) => (
          <div 
            key={sw.id} 
            className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/20 hover:border-cyan-500/40 transition-all space-y-2"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-cyan-300">
                {sw.title}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {sw.durationAdjustment}
              </span>
            </div>

            {/* From / To Arrow Flow */}
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
              <span className="text-slate-400 font-medium">{sw.fromStage}</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="text-cyan-200 font-bold">{sw.toTarget}</span>
            </div>

            <p className="text-xs text-slate-300">
              {sw.description}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold pt-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Key Advantage: {sw.keyBenefit}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
