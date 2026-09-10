import React, { useState } from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { StreamToggleBar } from './StreamToggleBar';
import { MilestoneCard } from './MilestoneCard';
import { LateralSwitchVisualizer } from '../bridge/LateralSwitchVisualizer';
import { 
  Bookmark, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Layers, 
  CheckCircle, 
  Briefcase,
  AlertTriangle,
  Scale,
  GraduationCap,
  Boxes,
  Rotate3d
} from 'lucide-react';

export const FlowTreeGraph: React.FC = () => {
  const { 
    activeRole, 
    selectedStream, 
    bookmarkedRoleIds, 
    toggleBookmark,
    setComparatorOpen,
    setCopilotOpen
  } = usePathwayStore();

  const [is3DMode, setIs3DMode] = useState(false);
  const [spatialRotation, setSpatialRotation] = useState({ x: 10, y: -4 });

  const isBookmarked = bookmarkedRoleIds.includes(activeRole.id);
  const fallbackStream = {
    streamType: 'MPC' as StreamType,
    streamName: 'Standard Stream Pathway',
    streamShortDesc: 'Academic Foundation',
    badgeLabel: 'Foundation Track',
    themeColor: {
      primary: '#ea580c',
      border: 'border-orange-500/30',
      bg: 'bg-orange-500/10',
      text: 'text-orange-700',
      glow: 'shadow-orange-500/20'
    },
    approachPhilosophy: 'Standard university degree pathway leading to professional qualification.',
    milestones: [],
    lateralSwitches: [],
    metrics: {
      timeToFirstJobYears: 4,
      financialInvestment: 'MODERATE' as const,
      competitionLevel: 'HIGH' as const,
      flexibilityScore: 8,
      practicalToTheoryRatio: 7
    },
    pros: ['Solid academic foundation'],
    cons: ['Standard competition'],
    entryJobRoles: ['Graduate Trainee', 'Associate'],
    fiveYearTrajectory: 'Senior Specialist / Team Lead',
    salarySpectrumLpa: { entryMin: 4, entryMax: 8, experiencedPeak: 25 }
  };

  const streamData = (activeRole.streams && (activeRole.streams[selectedStream] || activeRole.streams['MPC'] || Object.values(activeRole.streams)[0])) || fallbackStream;

  return (
    <div id="roadmap-flow-container" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* 1. Main Career Header Card with 3D Depth */}
      <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-orange-200/80 shadow-xl bg-white/95 relative overflow-hidden">
        
        {/* Background Radial Glow */}
        <div 
          className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ backgroundColor: streamData.themeColor.primary }}
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="space-y-2.5">
            
            {/* Domain & Demand Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-100 text-orange-700 border border-orange-200">
                {activeRole.domainName}
              </span>

              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {activeRole.marketDemand} Market Demand
              </span>

              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${streamData.themeColor.bg} ${streamData.themeColor.text} border ${streamData.themeColor.border}`}>
                Active: {streamData.streamName}
              </span>
            </div>

            {/* Career Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-display">
              {activeRole.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {activeRole.shortDescription}
            </p>

            {/* Target Degree & Branch Recommendation Banner */}
            {(activeRole.recommendedDegreeBranch || streamData.branchSelectionStrategy) && (
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-100 border border-orange-200 text-xs text-slate-800 flex items-start gap-3 shadow-sm">
                <GraduationCap className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-bold text-orange-700 uppercase tracking-wide flex items-center gap-1.5">
                    Recommended Higher Degree & Core Branch Specialization
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    {streamData.branchSelectionStrategy || activeRole.recommendedDegreeBranch}
                  </p>
                </div>
              </div>
            )}

            {/* Holistic Multi-Stream Insight Alert */}
            <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-100 text-xs text-slate-700 flex items-start gap-2.5 mt-2">
              <Sparkles className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Universal Multi-Stream Insight: </strong>
                <span>{activeRole.holisticInsight}</span>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex md:flex-col items-center gap-2 shrink-0 self-start md:self-auto">
            
            {/* 3D Spatial Toggle Button */}
            <button
              onClick={() => setIs3DMode(!is3DMode)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer shadow-sm ${
                is3DMode
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-orange-400 shadow-md shadow-orange-500/30'
                  : 'bg-white hover:bg-orange-50 text-orange-600 border-orange-200'
              }`}
              title="Toggle 3D Spatial Matrix view"
            >
              <Boxes className="w-4 h-4" />
              <span>{is3DMode ? '3D Active' : '3D View'}</span>
            </button>

            <button
              onClick={() => toggleBookmark(activeRole.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer shadow-sm ${
                isBookmarked
                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span>{isBookmarked ? 'Saved' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => setCopilotOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 border border-orange-400/30 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Ask AI Copilot</span>
            </button>

          </div>

        </div>

        {/* Stream Metrics Dashboard Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mt-6 pt-5 border-t border-slate-100">
          
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
              Time to 1st Job
            </span>
            <span className="text-sm font-bold text-slate-900 flex items-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
              {streamData.metrics.timeToFirstJobYears} Years
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
              Financial Cost
            </span>
            <span className="text-sm font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
              <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
              {streamData.metrics.financialInvestment.replace(/_/g, ' ')}
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
              Exam Competition
            </span>
            <span className="text-sm font-bold text-amber-700 flex items-center gap-1 mt-0.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              {streamData.metrics.competitionLevel}
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
              Career Flexibility
            </span>
            <span className="text-sm font-bold text-purple-700 flex items-center gap-1 mt-0.5">
              <Scale className="w-3.5 h-3.5 text-purple-600" />
              {streamData.metrics.flexibilityScore} / 10
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
              Practical vs Theory
            </span>
            <span className="text-sm font-bold text-cyan-700 flex items-center gap-1 mt-0.5">
              <Layers className="w-3.5 h-3.5 text-cyan-600" />
              {streamData.metrics.practicalToTheoryRatio * 10}% Hands-On
            </span>
          </div>

        </div>

      </div>

      {/* 2. Stream Switcher Bar */}
      <StreamToggleBar />

      {/* 3. Stream Philosophy & Approach Description Card */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${streamData.themeColor.bg} ${streamData.themeColor.border} glass-panel flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm`}>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold uppercase tracking-wider ${streamData.themeColor.text}`}>
              {streamData.badgeLabel}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {streamData.approachPhilosophy}
          </p>
        </div>

        <button
          onClick={() => setComparatorOpen(true)}
          className="self-start sm:self-auto shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all cursor-pointer"
        >
          Compare with other 5 streams
        </button>
      </div>

      {/* 3D Spatial Controls Bar when 3D Mode is Enabled */}
      {is3DMode && (
        <div className="p-3.5 rounded-2xl bg-orange-50 border border-orange-300 flex flex-wrap items-center justify-between gap-3 text-xs text-orange-900 animate-in fade-in zoom-in-95 shadow-sm">
          <div className="flex items-center gap-2">
            <Rotate3d className="w-4 h-4 text-orange-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span><strong>3D Spatial Perspective View Active:</strong> Experience depth transformations and node elevation.</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSpatialRotation(prev => ({ ...prev, x: prev.x + 4 }))}
              className="px-2.5 py-1 rounded-lg bg-white hover:bg-orange-100 border border-orange-200 text-orange-800 cursor-pointer shadow-sm"
            >
              Tilt +X
            </button>
            <button
              onClick={() => setSpatialRotation(prev => ({ ...prev, x: Math.max(0, prev.x - 4) }))}
              className="px-2.5 py-1 rounded-lg bg-white hover:bg-orange-100 border border-orange-200 text-orange-800 cursor-pointer shadow-sm"
            >
              Tilt -X
            </button>
            <button
              onClick={() => setSpatialRotation({ x: 0, y: 0 })}
              className="px-2.5 py-1 rounded-lg bg-white hover:bg-orange-100 border border-orange-200 text-slate-600 cursor-pointer shadow-sm"
            >
              Reset 3D
            </button>
          </div>
        </div>
      )}

      {/* 4. Chronological Milestone Tree Container */}
      <div 
        className={`space-y-2 pt-2 transition-all duration-500 ${
          is3DMode ? 'origin-top' : ''
        }`}
        style={is3DMode ? {
          transform: `perspective(1200px) rotateX(${spatialRotation.x}deg) rotateY(${spatialRotation.y}deg)`,
          transformStyle: 'preserve-3d'
        } : undefined}
      >
        <div className="flex items-center justify-between border-b border-orange-200/70 pb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-700 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-orange-500" />
            Chronological Milestone Tree & Junction Gateways
          </span>
          <span className="text-xs text-slate-500 font-semibold">
            {streamData.milestones.length} Stages Mapped
          </span>
        </div>

        {/* Milestone Cards Stack */}
        <div className="pt-4">
          {streamData.milestones.map((milestone, idx) => (
            <MilestoneCard
              key={milestone.id}
              milestone={milestone}
              stepNumber={idx + 1}
              isLast={idx === streamData.milestones.length - 1}
              themeColor={streamData.themeColor}
            />
          ))}
        </div>
      </div>

      {/* 5. Lateral Switch & Bridge Gateways Visualizer */}
      {streamData.lateralSwitches && streamData.lateralSwitches.length > 0 && (
        <LateralSwitchVisualizer switches={streamData.lateralSwitches} />
      )}

      {/* 6. Industry Career Outcomes & Pros/Cons Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        
        {/* Pros & Advantages */}
        <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-emerald-200 bg-emerald-50/50 space-y-2 shadow-sm">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            Strengths of {streamData.streamName}
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
            {streamData.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons & Critical Challenges */}
        <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-rose-200 bg-rose-50/50 space-y-2 shadow-sm">
          <div className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Critical Considerations & Tradeoffs
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
            {streamData.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* 7. Salary Spectrum & 5-Year Industry Trajectory */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-orange-200/80 bg-white space-y-3 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Industry Compensation & 5-Year Trajectory
            </span>
          </div>
          <div className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Starting: ₹{streamData.salarySpectrumLpa.entryMin} - ₹{streamData.salarySpectrumLpa.entryMax} LPA • Peak: ₹{streamData.salarySpectrumLpa.experiencedPeak} LPA+
          </div>
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
          <div>
            <strong className="text-slate-900">Entry Job Titles: </strong>
            <span>{streamData.entryJobRoles.join(', ')}</span>
          </div>
          <div>
            <strong className="text-slate-900">5-Year Growth Trajectory: </strong>
            <span>{streamData.fiveYearTrajectory}</span>
          </div>
        </div>
      </div>

    </div>
  );
};
