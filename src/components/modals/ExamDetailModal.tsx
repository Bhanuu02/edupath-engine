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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-150">
      
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white rounded-3xl border border-orange-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-orange-100 flex items-start justify-between bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/30">
                {activeExam.category}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-rose-500/80 text-white">
                {activeExam.competitionLevel} Competition
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-orange-100">
                Target: {activeExam.targetLevel}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              {activeExam.fullName} ({activeExam.name})
            </h3>
            
            <p className="text-xs text-orange-100 flex items-center gap-1 mt-0.5">
              <Building2 className="w-3.5 h-3.5 text-white" />
              Conducting Body: <strong>{activeExam.conductingBody}</strong>
            </p>
          </div>

          <button
            onClick={closeExamModal}
            className="p-1.5 rounded-xl text-orange-100 hover:text-white bg-white/15 hover:bg-white/25 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm text-slate-700 bg-white">
          
          {/* Key Metrics Quick Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <div className="p-3 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Annual Candidates</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">{activeExam.annualApplicants}</span>
            </div>

            <div className="p-3 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Acceptance Rate</span>
              <span className="text-xs sm:text-sm font-bold text-amber-700">{activeExam.acceptanceRate}</span>
            </div>

            <div className="p-3 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-0.5 col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Exam Timeline</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">{activeExam.keyDatesInfo}</span>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Eligibility Criteria
            </div>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {activeExam.eligibility}
            </p>
          </div>

          {/* Exam Pattern */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-orange-500" />
              Exam Pattern & Structure
            </div>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {activeExam.examPattern}
            </p>
          </div>

          {/* Syllabus Highlights */}
          {activeExam.syllabusHighlights && activeExam.syllabusHighlights.length > 0 && (
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-orange-500" />
                Syllabus & Focus Areas
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeExam.syllabusHighlights.map((topic, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-xl bg-white text-slate-800 border border-slate-200 shadow-2xs font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Official Website Link */}
          {activeExam.officialWebsite && (
            <div className="pt-2 flex justify-end">
              <a
                href={activeExam.officialWebsite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
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
