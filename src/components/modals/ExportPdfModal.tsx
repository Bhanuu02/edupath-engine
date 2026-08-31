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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-150">
      
      <div className="relative w-full max-w-md flex flex-col glass-panel rounded-3xl border border-slate-700 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Download Career Roadmap
              </h3>
              <p className="text-xs text-slate-400">
                Generate high-resolution printable PDF report
              </p>
            </div>
          </div>

          <button
            onClick={() => setExportModalOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm text-slate-300">
          
          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Target Passion:</span>
              <strong className="text-white">{activeRole.title}</strong>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Selected Stream:</span>
              <strong className="text-indigo-400">{selectedStream} Pathway</strong>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Mapped Stages:</span>
              <strong className="text-emerald-400">{activeRole.streams[selectedStream]?.milestones.length || 5} Milestone Stages</strong>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full chronological timeline & junction entrance exams</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mandatory minimum eligibility & lateral switch bridges</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Salary spectrums & 5-year growth trajectory</span>
            </div>
          </div>

          <button
            onClick={handleExport}
            disabled={isExporting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isExporting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Generating Vector PDF...</span>
              </>
            ) : (
              <>
                <FileDown className="w-4 h-4" />
                <span>Download PDF Roadmap</span>
              </>
            )}
          </button>

        </div>

      </div>

    </div>
  );
};
