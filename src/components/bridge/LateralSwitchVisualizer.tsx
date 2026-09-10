import React from 'react';
import { LateralSwitchPoint } from '../../types/pathway';
import { GitFork, ArrowRight, CheckCircle, Zap } from 'lucide-react';

interface LateralSwitchVisualizerProps {
  switches: LateralSwitchPoint[];
}

export const LateralSwitchVisualizer: React.FC<LateralSwitchVisualizerProps> = ({ switches }) => {
  if (!switches || switches.length === 0) return null;

  return (
    <div className="w-full my-6 p-4 sm:p-5 rounded-3xl bg-orange-50/60 border border-orange-200 space-y-3 shadow-sm">
      
      {/* Title */}
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-xl bg-orange-100 text-orange-600">
          <GitFork className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display">
            Lateral Switch Points & Educational Bridge Portals
          </h4>
          <p className="text-xs text-slate-600">
            How students in this stream can switch into parallel degrees, lateral B.Tech entry, or special forces selection.
          </p>
        </div>
      </div>

      {/* Switch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        {switches.map((sw) => (
          <div 
            key={sw.id} 
            className="p-4 rounded-2xl bg-white border border-orange-200/80 hover:border-orange-400 transition-all space-y-2.5 shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-slate-900">
                {sw.title}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                {sw.durationAdjustment}
              </span>
            </div>

            {/* From / To Arrow Flow */}
            <div className="flex items-center gap-2 text-xs text-slate-700 bg-orange-50/50 p-2.5 rounded-xl border border-orange-100">
              <span className="text-slate-600 font-medium">{sw.fromStage}</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span className="text-orange-800 font-bold">{sw.toTarget}</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {sw.description}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold pt-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Key Advantage: {sw.keyBenefit}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
