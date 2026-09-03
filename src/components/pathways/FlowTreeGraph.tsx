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
  Rotate3d,
  Compass
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
  const [spatialRotation, setSpatialRotation] = useState({ x: 12, y: -6 });

  const isBookmarked = bookmarkedRoleIds.includes(activeRole.id);
  const streamData = activeRole.streams[selectedStream] || activeRole.streams['MPC'] || Object.values(activeRole.streams)[0];

  return (
    <div id="roadmap-flow-container" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* 1. Main Career Header Card with 3D Depth */}
      <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-slate-700/80 shadow-2xl relative overflow-hidden">
        
        {/* Background Radial Glow */}
        <div 
          className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ backgroundColor: streamData.themeColor.primary }}
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="space-y-2.5">
            
            {/* Domain & Demand Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-indigo-300 border border-slate-800">
                {activeRole.domainName}
              </span>

              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {activeRole.marketDemand} Market Demand
              </span>

              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${streamData.themeColor.bg} ${streamData.themeColor.text} border ${streamData.themeColor.border}`}>
                Active: {streamData.streamName}
              </span>
            </div>

            {/* Career Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display">
              {activeRole.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              {activeRole.shortDescription}
            </p>

            {/* Target Degree & Branch Recommendation Banner */}
            {(activeRole.recommendedDegreeBranch || streamData.branchSelectionStrategy) && (
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/80 via-indigo-950/80 to-purple-950/80 border border-indigo-500/40 text-xs text-slate-200 flex items-start gap-3 shadow-lg">
                <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    Recommended Higher Degree & Core Branch Specialization
                  </div>
                  <p className="text-slate-100 font-medium leading-relaxed">
                    {streamData.branchSelectionStrategy || activeRole.recommendedDegreeBranch}
                  </p>
                </div>
              </div>
            )}

            {/* Holistic Multi-Stream Insight Alert */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5 mt-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200">Universal Multi-Stream Insight: </strong>
                <span>{activeRole.holisticInsight}</span>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex md:flex-col items-center gap-2 shrink-0 self-start md:self-auto">
            
            {/* 3D Spatial Toggle Button */}
            <button
              onClick={() => setIs3DMode(!is3DMode)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                is3DMode
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/30 animate-pulse'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border-cyan-500/30'
              }`}
              title="Toggle 3D Spatial Matrix view"
            >
              <Boxes className="w-4 h-4 text-cyan-300" />
              <span>{is3DMode ? '3D Active' : '3D View'}</span>
            </button>

            <button
              onClick={() => toggleBookmark(activeRole.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span>{isBookmarked ? 'Saved' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => setCopilotOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/30 border border-indigo-400/30 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Ask AI Copilot</span>
            </button>

          </div>

        </div>

        {/* Stream Metrics Dashboard Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mt-6 pt-5 border-t border-slate-800/80">
          
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
              Time to 1st Job
            </span>
            <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              {streamData.metrics.timeToFirstJobYears} Years
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
              Financial Cost
            </span>
            <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              {streamData.metrics.financialInvestment.replace(/_/g, ' ')}
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
              Exam Competition
            </span>
            <span className="text-sm font-bold text-amber-400 flex items-center gap-1 mt-0.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              {streamData.metrics.competitionLevel}
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
              Career Flexibility
            </span>
            <span className="text-sm font-bold text-purple-400 flex items-center gap-1 mt-0.5">
              <Scale className="w-3.5 h-3.5 text-purple-400" />
              {streamData.metrics.flexibilityScore} / 10
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 col-span-2 sm:col-span-1">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
              Practical vs Theory
            </span>
            <span className="text-sm font-bold text-cyan-400 flex items-center gap-1 mt-0.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              {streamData.metrics.practicalToTheoryRatio * 10}% Hands-On
            </span>
          </div>

        </div>

      </div>

      {/* 2. Stream Switcher Bar */}
      <StreamToggleBar />

      {/* 3. Stream Philosophy & Approach Description Card */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${streamData.themeColor.bg} ${streamData.themeColor.border} glass-panel flex flex-col sm:flex-row sm:items-center justify-between gap-3`}>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold uppercase tracking-wider ${streamData.themeColor.text}`}>
              {streamData.badgeLabel}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {streamData.approachPhilosophy}
          </p>
        </div>

        <button
          onClick={() => setComparatorOpen(true)}
          className="self-start sm:self-auto shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all cursor-pointer"
        >
          Compare with other 5 streams
        </button>
      </div>

      {/* 3D Spatial Controls Bar when 3D Mode is Enabled */}
      {is3DMode && (
        <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 flex flex-wrap items-center justify-between gap-3 text-xs text-cyan-200 animate-in fade-in zoom-in-95">
          <div className="flex items-center gap-2">
            <Rotate3d className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span><strong>3D Spatial Perspective View Active:</strong> Experience depth transformations and node elevation.</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSpatialRotation(prev => ({ ...prev, x: prev.x + 4 }))}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 cursor-pointer"
            >
              Tilt +X
            </button>
            <button
              onClick={() => setSpatialRotation(prev => ({ ...prev, x: Math.max(0, prev.x - 4) }))}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 cursor-pointer"
            >
              Tilt -X
            </button>
            <button
              onClick={() => setSpatialRotation({ x: 0, y: 0 })}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-slate-400 cursor-pointer"
            >
              Reset 3D
            </button>
          </div>
        </div>
      )}

      {/* 4. Chronological Milestone Tree Container (with 3D Container Transform) */}
      <div 
        className={`space-y-2 pt-2 transition-all duration-500 ${
          is3DMode ? 'origin-top' : ''
        }`}
        style={is3DMode ? {
          transform: `perspective(1200px) rotateX(${spatialRotation.x}deg) rotateY(${spatialRotation.y}deg)`,
          transformStyle: 'preserve-3d'
        } : undefined}
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-indigo-400" />
            Chronological Milestone Tree & Junction Gateways
          </span>
          <span className="text-xs text-slate-400">
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
        <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-950/10 space-y-2">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            Strengths of {streamData.streamName}
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            {streamData.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons & Critical Challenges */}
        <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-rose-500/30 bg-rose-950/10 space-y-2">
          <div className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            Critical Considerations & Tradeoffs
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            {streamData.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* 7. Salary Spectrum & 5-Year Industry Trajectory */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Industry Compensation & 5-Year Trajectory
            </span>
          </div>
          <div className="text-xs text-emerald-400 font-semibold bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-800/40">
            Starting: ₹{streamData.salarySpectrumLpa.entryMin} - ₹{streamData.salarySpectrumLpa.entryMax} LPA • Peak: ₹{streamData.salarySpectrumLpa.experiencedPeak} LPA+
          </div>
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-300">
          <div>
            <strong className="text-white">Entry Job Titles: </strong>
            <span>{streamData.entryJobRoles.join(', ')}</span>
          </div>
          <div>
            <strong className="text-white">5-Year Growth Trajectory: </strong>
            <span>{streamData.fiveYearTrajectory}</span>
          </div>
        </div>
      </div>

    </div>
  );
};
