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
      
      {/* Vertical Timeline Stem */}
      {!isLast && (
        <div className="absolute left-3.5 sm:left-5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-orange-300 to-slate-200" />
      )}

      {/* Step Circle Marker */}
      <div 
        className="absolute left-1 sm:left-2.5 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md border-2 z-10"
        style={{ 
          backgroundColor: '#ea580c',
          borderColor: '#ffffff',
          boxShadow: `0 0 12px rgba(234, 88, 12, 0.4)`
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
        className="bg-white rounded-3xl p-4 sm:p-5 border border-orange-200/80 hover:border-orange-400 transition-all shadow-md shadow-orange-500/5 hover:shadow-xl hover:shadow-orange-500/10"
      >
        
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                {milestone.phaseLabel}
              </span>

              {milestone.durationYears && (
                <span className="text-[11px] text-slate-600 flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                  <Clock className="w-3 h-3 text-orange-500" />
                  {milestone.durationYears}
                </span>
              )}

              {milestone.estimatedCostRange && (
                <span className="text-[11px] text-emerald-800 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-medium">
                  <DollarSign className="w-3 h-3" />
                  {milestone.estimatedCostRange}
                </span>
              )}
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              {milestone.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {milestone.subtitle}
            </p>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer shrink-0"
            title={isExpanded ? "Collapse Details" : "Expand Details"}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Explicit Branch & Specialization Guidance Box */}
        {milestone.branchOrSpecializationToChoose && (
          <div className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-100/60 border border-orange-200 flex items-start gap-2.5 shadow-sm">
            <GraduationCap className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <div className="text-xs">
              <strong className="text-orange-800 font-bold uppercase tracking-wide">Target Branch / Major: </strong>
              <span className="text-slate-800 font-semibold">{milestone.branchOrSpecializationToChoose}</span>
            </div>
          </div>
        )}

        {/* Detailed Expandable Section */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-4 text-xs sm:text-sm">
            
            {/* Milestone Description */}
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {milestone.description}
            </p>

            {/* Junction Entrance Exams Badges */}
            {milestone.examGateways && milestone.examGateways.length > 0 && (
              <div className="p-3.5 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-orange-800 uppercase tracking-wider">
                  <AlertCircle className="w-3.5 h-3.5 text-orange-600" />
                  Junction Entrance Exams & Auditions (Click to View)
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {milestone.examGateways.map((examId) => (
                    <button
                      key={examId}
                      onClick={() => openExamModalById(examId)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-orange-500 text-orange-700 hover:text-white border border-orange-300 text-xs font-semibold shadow-sm transition-all cursor-pointer group"
                    >
                      <span>{examId.replace(/_/g, ' ')}</span>
                      <ExternalLink className="w-3 h-3 text-orange-500 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Post-Degree / Civil Services / Recruitment Exams */}
            {milestone.postDegreeExams && milestone.postDegreeExams.length > 0 && (
              <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
                  <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                  Post-Degree Recruitment & Competitive Exams (UPSC / GATE / State PSC / SSC / CAT)
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {milestone.postDegreeExams.map((examId) => (
                    <button
                      key={examId}
                      onClick={() => openExamModalById(examId)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-amber-600 text-amber-800 hover:text-white border border-amber-300 text-xs font-semibold shadow-sm transition-all cursor-pointer group"
                    >
                      <span>{examId.replace(/_/g, ' ')}</span>
                      <ExternalLink className="w-3 h-3 text-amber-600 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Two Column Grid for Eligibility and Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              
              {/* Mandatory Eligibility Checklist */}
              {milestone.mandatoryEligibility && milestone.mandatoryEligibility.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Mandatory Minimum Eligibility
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600 pl-1">
                    {milestone.mandatoryEligibility.map((el, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills & Tools to Acquire */}
              {milestone.skillsToAcquire && milestone.skillsToAcquire.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                    Core Competencies & Tools
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {milestone.skillsToAcquire.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-0.5 rounded-lg bg-white text-slate-700 border border-slate-200 shadow-2xs"
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
              <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <School className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-800 font-semibold">Recommended Institutes: </span>
                  <span>{milestone.recommendedInstitutions.join(' • ')}</span>
                </div>
              </div>
            )}

            {/* Actionable Tip Box */}
            {milestone.keyActionTip && (
              <div className="flex items-start gap-2 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-800 font-bold">Actionable Strategy: </strong>
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
