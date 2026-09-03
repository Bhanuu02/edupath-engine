import React, { useState, useRef } from 'react';
import { MilestoneNode } from '../../types/pathway';
import { usePathwayStore } from '../../store/pathwayStore';
import { 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Lightbulb, 
  School, 
  Sparkles, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  GraduationCap,
  Briefcase
} from 'lucide-react';

interface MilestoneCardProps {
  milestone: MilestoneNode;
  stepNumber: number;
  isLast: boolean;
  themeColor: {
    primary: string;
    border: string;
    bg: string;
    text: string;
    glow: string;
  };
}

export const MilestoneCard: React.FC<MilestoneCardProps> = ({
  milestone,
  stepNumber,
  isLast,
  themeColor
}) => {
  const { openExamModalById } = usePathwayStore();
  const [isExpanded, setIsExpanded] = useState(true);

  // 3D Card Tilt on Mouse Move
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
      transition: 'transform 0.4s ease-out'
    });
  };

  return (
    <div className="relative pl-8 sm:pl-12 pb-8 group">
      
      {/* Vertical Timeline Stem with 3D Depth */}
      {!isLast && (
        <div className="absolute left-3.5 sm:left-5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/60 via-slate-700 to-slate-800" />
      )}

      {/* Step Circle Marker */}
      <div 
        className="absolute left-1 sm:left-2.5 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg border-2 z-10"
        style={{ 
          backgroundColor: '#0f172a',
          borderColor: themeColor.primary,
          boxShadow: `0 0 15px ${themeColor.primary}50`
        }}
      >
        {stepNumber}
      </div>

      {/* Main Milestone Card Body with 3D Tilt */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={tiltStyle}
        className={`glass-panel rounded-2xl p-4 sm:p-5 border transition-all ${themeColor.border} hover:border-slate-500 shadow-xl`}
      >
        
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${themeColor.bg} ${themeColor.text} border ${themeColor.border}`}>
                {milestone.phaseLabel}
              </span>

              {milestone.durationYears && (
                <span className="text-[11px] text-slate-400 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {milestone.durationYears}
                </span>
              )}

              {milestone.estimatedCostRange && (
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-800/40">
                  <DollarSign className="w-3 h-3" />
                  {milestone.estimatedCostRange}
                </span>
              )}
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white font-display">
              {milestone.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              {milestone.subtitle}
            </p>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            title={isExpanded ? "Collapse Details" : "Expand Details"}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Explicit Branch & Specialization Guidance Box */}
        {milestone.branchOrSpecializationToChoose && (
          <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-indigo-950/80 via-purple-950/60 to-slate-900 border border-indigo-500/40 flex items-start gap-2.5">
            <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <strong className="text-indigo-300 font-bold uppercase tracking-wide">Target Branch / Major: </strong>
              <span className="text-slate-200 font-semibold">{milestone.branchOrSpecializationToChoose}</span>
            </div>
          </div>
        )}

        {/* Detailed Expandable Section */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-4 text-xs sm:text-sm">
            
            {/* Milestone Description */}
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {milestone.description}
            </p>

            {/* Junction Entrance Exams Badges (10th / 12th / Degree) */}
            {milestone.examGateways && milestone.examGateways.length > 0 && (
              <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300 uppercase tracking-wider">
                  <AlertCircle className="w-3.5 h-3.5 text-indigo-400" />
                  Junction Entrance Exams & Auditions (Click to View)
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {milestone.examGateways.map((examId) => (
                    <button
                      key={examId}
                      onClick={() => openExamModalById(examId)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-400/40 text-xs font-semibold shadow-sm transition-all cursor-pointer group"
                    >
                      <span>{examId.replace(/_/g, ' ')}</span>
                      <ExternalLink className="w-3 h-3 text-indigo-300 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Post-Degree / Civil Services / Job Recruitment Exams */}
            {milestone.postDegreeExams && milestone.postDegreeExams.length > 0 && (
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300 uppercase tracking-wider">
                  <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                  Post-Degree Recruitment & Competitive Exams (UPSC / GATE / State PSC / SSC / CAT)
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {milestone.postDegreeExams.map((examId) => (
                    <button
                      key={examId}
                      onClick={() => openExamModalById(examId)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-400/40 text-xs font-semibold shadow-sm transition-all cursor-pointer group"
                    >
                      <span>{examId.replace(/_/g, ' ')}</span>
                      <ExternalLink className="w-3 h-3 text-purple-300 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Two Column Grid for Eligibility and Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              
              {/* Mandatory Eligibility Checklist */}
              {milestone.mandatoryEligibility && milestone.mandatoryEligibility.length > 0 && (
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Mandatory Minimum Eligibility
                  </div>
                  <ul className="space-y-1 text-xs text-slate-400 pl-1">
                    {milestone.mandatoryEligibility.map((el, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills & Tools to Acquire */}
              {milestone.skillsToAcquire && milestone.skillsToAcquire.length > 0 && (
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Core Competencies & Tools
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {milestone.skillsToAcquire.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Recommended Institutions */}
            {milestone.recommendedInstitutions && milestone.recommendedInstitutions.length > 0 && (
              <div className="flex items-start gap-2 text-xs text-slate-400 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/80">
                <School className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 font-semibold">Recommended Institutes: </span>
                  <span>{milestone.recommendedInstitutions.join(' • ')}</span>
                </div>
              </div>
            )}

            {/* Actionable Tip Box */}
            {milestone.keyActionTip && (
              <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300">Actionable Strategy: </strong>
                  <span>{milestone.keyActionTip}</span>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
};
