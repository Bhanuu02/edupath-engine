import React from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { StreamType } from '../../types/pathway';
import { 
  Calculator, 
  Dna, 
  TrendingUp, 
  BookOpen, 
  Wrench, 
  Sparkles,
  Layers
} from 'lucide-react';

interface StreamOption {
  type: StreamType;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  colorClass: string;
  activeBg: string;
  activeBorder: string;
}

const STREAMS: StreamOption[] = [
  {
    type: 'HEC',
    label: 'HEC / Humanities',
    sublabel: 'Civil Services, Law, Creative Arts',
    icon: BookOpen,
    colorClass: 'text-purple-400',
    activeBg: 'bg-purple-500/15',
    activeBorder: 'border-purple-500/50 shadow-purple-500/20'
  },
  {
    type: 'MPC',
    label: 'MPC / Maths & Physics',
    sublabel: 'Engineering, Computing, Defense',
    icon: Calculator,
    colorClass: 'text-blue-400',
    activeBg: 'bg-blue-500/15',
    activeBorder: 'border-blue-500/50 shadow-blue-500/20'
  },
  {
    type: 'BiPC',
    label: 'BiPC / Life Sciences',
    sublabel: 'Medicine, Biotech, Nature, Pharma',
    icon: Dna,
    colorClass: 'text-emerald-400',
    activeBg: 'bg-emerald-500/15',
    activeBorder: 'border-emerald-500/50 shadow-emerald-500/20'
  },
  {
    type: 'MEC_CEC',
    label: 'MEC / CEC Commerce',
    sublabel: 'Finance, FinTech, Strategy, CA',
    icon: TrendingUp,
    colorClass: 'text-amber-400',
    activeBg: 'bg-amber-500/15',
    activeBorder: 'border-amber-500/50 shadow-amber-500/20'
  },
  {
    type: 'POLYTECHNIC',
    label: '3-Yr Polytechnic Diploma',
    sublabel: 'POLYCET -> ECET Lateral B.Tech',
    icon: Wrench,
    colorClass: 'text-cyan-400',
    activeBg: 'bg-cyan-500/15',
    activeBorder: 'border-cyan-500/50 shadow-cyan-500/20'
  },
  {
    type: 'VOCATIONAL_GUILD',
    label: 'Vocational / Direct Guild',
    sublabel: 'Independent Portfolio & Apprenticeship',
    icon: Sparkles,
    colorClass: 'text-rose-400',
    activeBg: 'bg-rose-500/15',
    activeBorder: 'border-rose-500/50 shadow-rose-500/20'
  }
];

export const StreamToggleBar: React.FC = () => {
  const { selectedStream, setSelectedStream, setComparatorOpen } = usePathwayStore();

  return (
    <div className="w-full space-y-3">
      
      {/* Header bar with Stream Selector & Comparator Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Select Post-10th Stream Pathway
          </span>
          <p className="text-[11px] text-slate-400">
            Compare how this specific passion is navigated through different academic foundations.
          </p>
        </div>
        
        <button
          onClick={() => setComparatorOpen(true)}
          className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-indigo-300 bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-500/30 transition-all cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Side-by-Side Comparator</span>
        </button>
      </div>

      {/* Grid of 6 Stream Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
        {STREAMS.map((s) => {
          const Icon = s.icon;
          const isSelected = selectedStream === s.type;

          return (
            <button
              key={s.type}
              onClick={() => setSelectedStream(s.type)}
              className={`text-left p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? `${s.activeBg} ${s.activeBorder} shadow-lg text-white`
                  : 'bg-slate-900/60 hover:bg-slate-850 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-slate-950' : 'bg-slate-800/80'} ${s.colorClass}`}>
                  <Icon className="w-4 h-4" />
                </div>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                )}
              </div>

              <div>
                <div className="text-xs sm:text-sm font-bold truncate">
                  {s.label}
                </div>
                <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                  {s.sublabel}
                </div>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
