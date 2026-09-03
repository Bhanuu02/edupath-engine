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
    colorClass: 'text-purple-600',
    activeBg: 'bg-purple-50',
    activeBorder: 'border-purple-400 shadow-purple-500/10'
  },
  {
    type: 'MPC',
    label: 'MPC / Maths & Physics',
    sublabel: 'Engineering, Computing, Defense',
    icon: Calculator,
    colorClass: 'text-blue-600',
    activeBg: 'bg-blue-50',
    activeBorder: 'border-blue-400 shadow-blue-500/10'
  },
  {
    type: 'BiPC',
    label: 'BiPC / Life Sciences',
    sublabel: 'Medicine, Biotech, Nature, Pharma',
    icon: Dna,
    colorClass: 'text-emerald-600',
    activeBg: 'bg-emerald-50',
    activeBorder: 'border-emerald-400 shadow-emerald-500/10'
  },
  {
    type: 'MEC_CEC',
    label: 'MEC / CEC Commerce',
    sublabel: 'Finance, FinTech, Strategy, CA',
    icon: TrendingUp,
    colorClass: 'text-amber-600',
    activeBg: 'bg-amber-50',
    activeBorder: 'border-amber-400 shadow-amber-500/10'
  },
  {
    type: 'POLYTECHNIC',
    label: '3-Yr Polytechnic Diploma',
    sublabel: 'POLYCET -> ECET Lateral B.Tech',
    icon: Wrench,
    colorClass: 'text-cyan-600',
    activeBg: 'bg-cyan-50',
    activeBorder: 'border-cyan-400 shadow-cyan-500/10'
  },
  {
    type: 'VOCATIONAL_GUILD',
    label: 'Vocational / Direct Rally',
    sublabel: 'Agniveer, Portfolio & Apprenticeship',
    icon: Sparkles,
    colorClass: 'text-rose-600',
    activeBg: 'bg-rose-50',
    activeBorder: 'border-rose-400 shadow-rose-500/10'
  }
];

export const StreamToggleBar: React.FC = () => {
  const { selectedStream, setSelectedStream, setComparatorOpen } = usePathwayStore();

  return (
    <div className="w-full space-y-3">
      
      {/* Header bar with Stream Selector & Comparator Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-orange-200/70 pb-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Select Post-10th Stream Pathway
          </span>
          <p className="text-[11px] text-slate-500">
            Compare how this specific passion is navigated through different academic foundations.
          </p>
        </div>
        
        <button
          onClick={() => setComparatorOpen(true)}
          className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-300 transition-all cursor-pointer shadow-sm"
        >
          <Layers className="w-3.5 h-3.5 text-orange-600" />
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
              className={`text-left p-2.5 sm:p-3 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? `${s.activeBg} ${s.activeBorder} shadow-md text-slate-900 ring-2 ring-orange-400/40`
                  : 'bg-white hover:bg-orange-50/40 border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <div className={`p-1.5 rounded-xl ${isSelected ? 'bg-white shadow-sm' : 'bg-slate-100'} ${s.colorClass}`}>
                  <Icon className="w-4 h-4" />
                </div>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                )}
              </div>

              <div>
                <div className="text-xs sm:text-sm font-bold truncate">
                  {s.label}
                </div>
                <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
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
