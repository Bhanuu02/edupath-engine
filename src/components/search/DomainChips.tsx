import React from 'react';
import { UNIVERSAL_DOMAINS } from '../../data/universalDomains';
import { usePathwayStore } from '../../store/pathwayStore';
import { DomainId } from '../../types/pathway';
import { 
  Clapperboard, 
  Palette, 
  BookOpen, 
  Utensils, 
  Trophy, 
  Plane, 
  Scale, 
  Cpu, 
  Activity, 
  TrendingUp, 
  Leaf, 
  Wrench,
  Grid 
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Clapperboard,
  Palette,
  BookOpen,
  Utensils,
  Trophy,
  Plane,
  Scale,
  Cpu,
  Activity,
  TrendingUp,
  Leaf,
  Wrench
};

export const DomainChips: React.FC = () => {
  const { selectedDomain, setSelectedDomain } = usePathwayStore();

  return (
    <div className="w-full overflow-x-auto py-2 scrollbar-none">
      <div className="flex items-center gap-2 min-w-max px-1">
        
        {/* All Domains Tab */}
        <button
          onClick={() => setSelectedDomain('all')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            selectedDomain === 'all'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40'
              : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          <Grid className="w-3.5 h-3.5" />
          <span>All 12 Domains</span>
        </button>

        {/* 12 Specific Domains */}
        {UNIVERSAL_DOMAINS.map((domain) => {
          const Icon = ICON_MAP[domain.iconName] || Grid;
          const isSelected = selectedDomain === domain.id;

          return (
            <button
              key={domain.id}
              onClick={() => setSelectedDomain(domain.id as DomainId)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <Icon 
                className="w-3.5 h-3.5" 
                style={{ color: isSelected ? '#ffffff' : domain.accentColor }} 
              />
              <span>{domain.name.split(',')[0]}</span>
            </button>
          );
        })}

      </div>
    </div>
  );
};
