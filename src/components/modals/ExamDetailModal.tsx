import React from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { 
  X, 
  BookOpen, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ExternalLink, 
  AlertCircle,
  FileText,
  Building2
} from 'lucide-react';

export const ExamDetailModal: React.FC = () => {
  const { activeExam, isExamModalOpen, closeExamModal } = usePathwayStore();

  if (!isExamModalOpen || !activeExam) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-150">
      
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col glass-panel rounded-3xl border border-slate-700 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-start justify-between bg-slate-900/90">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {activeExam.category}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                {activeExam.competitionLevel} Competition
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                Target: {activeExam.targetLevel}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              {activeExam.fullName} ({activeExam.name})
            </h3>
            
            <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
              <Building2 className="w-3.5 h-3.5 text-indigo-400" />
              Conducting Body: <strong>{activeExam.conductingBody}</strong>
            </p>
          </div>

          <button
            onClick={closeExamModal}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm text-slate-300">
          
          {/* Key Stats Pill Box */}
          <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-indigo-400" /> Annual Applicants
              </span>
              <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">
                {activeExam.annualApplicants}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Acceptance Rate
              </span>
              <span className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 block">
                {activeExam.acceptanceRate}
              </span>
            </div>
          </div>

          {/* Mandatory Eligibility */}
          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5">
            <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              Eligibility Criteria
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pl-1">
              {activeExam.eligibility}
            </p>
          </div>

          {/* Exam Pattern */}
          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5">
            <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-cyan-400" />
              Exam Format & Testing Pattern
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pl-1">
              {activeExam.examPattern}
            </p>
          </div>

          {/* Syllabus Topics */}
          {activeExam.syllabusHighlights && activeExam.syllabusHighlights.length > 0 && (
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-purple-400" />
                Key Syllabus Topics & Weightage
              </div>
              <ul className="space-y-1 text-xs text-slate-300 pl-1">
                {activeExam.syllabusHighlights.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Timeline & Key Dates */}
          <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-start gap-2.5 text-xs text-indigo-200">
            <Calendar className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Annual Timeline & Schedule: </strong>
              <span>{activeExam.keyDatesInfo}</span>
            </div>
          </div>

          {/* Official Website Link */}
          {activeExam.officialUrl && (
            <div className="pt-2 flex justify-end">
              <a
                href={activeExam.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
              >
                <span>Visit Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
