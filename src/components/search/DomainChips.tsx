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
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            selectedDomain === 'all'
              ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 border border-orange-400'
              : 'bg-white hover:bg-orange-50 text-slate-700 border border-orange-200/80 shadow-sm'
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
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                isSelected
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 border border-orange-400'
                  : 'bg-white hover:bg-orange-50/80 text-slate-700 border border-slate-200 hover:border-orange-300 shadow-sm'
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
