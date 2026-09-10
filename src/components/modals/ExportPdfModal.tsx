import React from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { usePdfExporter } from '../../hooks/usePdfExporter';
import { X, FileDown, Loader2, CheckCircle, Sparkles } from 'lucide-react';

export const ExportPdfModal: React.FC = () => {
  const { activeRole, selectedStream, isExportModalOpen, setExportModalOpen } = usePathwayStore();
  const { exportElementToPdf, isExporting } = usePdfExporter();

  if (!isExportModalOpen) return null;

  const handleExport = async () => {
    await exportElementToPdf('roadmap-flow-container', activeRole, selectedStream);
    setExportModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-150">
      
      <div className="relative w-full max-w-md flex flex-col bg-white rounded-3xl border border-orange-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-orange-100 flex items-center justify-between bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-white/20 text-white border border-white/30">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Download Career Roadmap
              </h3>
              <p className="text-xs text-orange-100">
                Generate high-resolution printable PDF report
              </p>
            </div>
          </div>

          <button
            onClick={() => setExportModalOpen(false)}
            className="p-1.5 rounded-xl text-orange-100 hover:text-white bg-white/15 hover:bg-white/25 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm text-slate-700">
          
          <div className="p-3.5 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Target Passion:</span>
              <strong className="text-slate-900">{activeRole.title}</strong>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Selected Stream:</span>
              <strong className="text-orange-600 font-bold">{selectedStream} Pathway</strong>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Mapped Stages:</span>
              <strong className="text-emerald-700">{activeRole.streams[selectedStream]?.milestones.length || 5} Milestone Stages</strong>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Includes complete chronological milestones and exams</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Includes eligibility checklist, branch choices, and lateral bridges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Includes 5-year salary spectrums and recommended institutions</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-2 justify-end">
            <button
              onClick={() => setExportModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={handleExport}
              disabled={isExporting}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 transition-all disabled:opacity-50 cursor-pointer"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF Document</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
