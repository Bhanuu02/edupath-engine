import React, { useState, useEffect } from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { StreamType } from '../../types/pathway';
import {
  X, Layers, Clock, DollarSign, AlertTriangle, Scale,
  CheckCircle, Zap, ArrowRight, ArrowLeft, CheckSquare, Square
} from 'lucide-react';

interface StreamCard { key: StreamType; emoji: string; name: string; description: string; }

const STREAM_CARDS: StreamCard[] = [
  { key: 'HEC',             emoji: '🎭', name: 'Stories & Arts',       description: 'History, languages, law, drama, writing careers' },
  { key: 'MPC',             emoji: '💻', name: 'Tech & Coding',        description: 'Computers, programming, IT, engineering careers' },
  { key: 'BiPC',            emoji: '🔬', name: 'Science & Nature',     description: 'Biology, environment, medical, pharmacy careers' },
  { key: 'MEC_CEC',         emoji: '💼', name: 'Business & Leadership',description: 'Business, management, commerce, finance careers' },
  { key: 'POLYTECHNIC',     emoji: '🔧', name: 'Creative & Practical', description: 'Diploma, technical skills, hands-on work careers' },
  { key: 'VOCATIONAL_GUILD',emoji: '🚀', name: 'Independent Work',     description: 'Starting your own business, freelance, apprenticeship' },
];

function difficultyLabel(l: string) {
  return l === 'EXTREME' || l === 'VERY_HIGH' ? 'Hard' : l === 'HIGH' || l === 'MODERATE' ? 'Medium' : 'Easy';
}
function difficultyColor(l: string) {
  return l === 'EXTREME' || l === 'VERY_HIGH' ? 'text-red-600' : l === 'HIGH' || l === 'MODERATE' ? 'text-amber-600' : 'text-emerald-600';
}
function costLabel(c: string) {
  const u = c.toUpperCase();
  return u.includes('HIGH') || u.includes('PREMIUM') ? 'High' : u.includes('LOW') || u.includes('FREE') ? 'Low' : 'Medium';
}

export const RouteComparatorMatrix: React.FC = () => {
  const { activeRole, isComparatorOpen, setComparatorOpen, setSelectedStream } = usePathwayStore();
  const [step, setStep] = useState<'pick' | 'compare'>('pick');
  const [selected, setSelected] = useState<StreamType[]>([]);

  useEffect(() => {
    if (isComparatorOpen) { document.body.style.overflow = 'hidden'; setStep('pick'); setSelected([]); }
    return () => { document.body.style.overflow = ''; };
  }, [isComparatorOpen]);

  if (!isComparatorOpen) return null;

  const handleClose = () => {
    setComparatorOpen(false);
    setTimeout(() => { setStep('pick'); setSelected([]); }, 300);
  };

  const toggleStream = (key: StreamType) =>
    setSelected(prev => prev.includes(key) ? prev.filter(s => s !== key) : prev.length < 3 ? [...prev, key] : prev);

  const availableStreams = STREAM_CARDS.filter(sc => activeRole.streams[sc.key]);
  const selectedStreams = availableStreams.filter(sc => selected.includes(sc.key));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-3xl border border-orange-200 shadow-2xl overflow-hidden">

        {/* Header — orange tinted */}
        <div className="p-4 sm:p-5 border-b border-orange-100 flex items-center justify-between bg-orange-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-500 text-white"><Layers className="w-5 h-5" /></div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                {step === 'pick' ? 'Which paths do you want to compare?' : `Comparing ${selected.length} Paths`}
              </h3>
              <p className="text-xs text-slate-500">
                {step === 'pick' ? 'Pick 2 or 3 paths that interest you' : `For: ${activeRole.title}`}
              </p>
            </div>
          </div>
          <button onClick={handleClose} className="p-2 rounded-xl text-slate-400 hover:text-orange-600 hover:bg-orange-100 transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {step === 'pick' ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">Select <strong className="text-slate-900">2 or 3 paths</strong> you are thinking about. We'll compare them side by side.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {availableStreams.map(sc => {
                  const isSelected = selected.includes(sc.key);
                  const isDisabled = !isSelected && selected.length >= 3;
                  return (
                    <button key={sc.key} onClick={() => !isDisabled && toggleStream(sc.key)} disabled={isDisabled}
                      className={`relative text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected   ? 'bg-orange-50 border-orange-500 ring-2 ring-orange-200' :
                        isDisabled   ? 'bg-slate-50 border-slate-200 opacity-40 cursor-not-allowed' :
                                       'bg-white border-orange-200 hover:border-orange-400 hover:bg-orange-50 shadow-sm'
                      }`}>
                      <div className="absolute top-3 right-3">
                        {isSelected ? <CheckSquare className="w-4 h-4 text-orange-500" /> : <Square className="w-4 h-4 text-slate-300" />}
                      </div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-2xl">{sc.emoji}</span>
                        <h4 className={`text-sm font-extrabold ${isSelected ? 'text-orange-700' : 'text-slate-800'}`}>{sc.name}</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">{sc.description}</p>
                    </button>
                  );
                })}
              </div>
              {selected.length < 2 && <p className="text-xs text-center text-slate-400">Select at least 2 paths to compare</p>}
            </div>

          ) : (
            <div className="overflow-x-auto">
              <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${selectedStreams.length}, minmax(0, 1fr))` }}>
                {selectedStreams.map(sc => {
                  const stream = activeRole.streams[sc.key]!;
                  return (
                    <div key={sc.key} className="rounded-2xl p-4 border border-orange-200 bg-white flex flex-col gap-4 shadow-sm">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{sc.emoji}</span>
                          <h4 className="text-sm font-extrabold text-orange-600">{sc.name}</h4>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-2">{stream.approachPhilosophy}</p>
                      </div>

                      <div className="space-y-2 text-xs border-t border-orange-100 pt-3">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3 text-orange-400" /> Time</span>
                          <strong className="text-slate-900">{stream.metrics.timeToFirstJobYears} yrs</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-amber-500" /> Difficulty</span>
                          <strong className={difficultyColor(stream.metrics.competitionLevel)}>{difficultyLabel(stream.metrics.competitionLevel)}</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 flex items-center gap-1"><DollarSign className="w-3 h-3 text-orange-400" /> Cost</span>
                          <strong className="text-slate-700">{costLabel(stream.metrics.financialInvestment)}</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 flex items-center gap-1"><Zap className="w-3 h-3 text-orange-400" /> Practical</span>
                          <strong className="text-slate-700">{Math.round(stream.metrics.practicalToTheoryRatio * 100)}%</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 flex items-center gap-1"><Scale className="w-3 h-3 text-orange-400" /> Competition</span>
                          <strong className="text-slate-700">{stream.metrics.competitionLevel.replace('_', ' ')}</strong>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-[11px] space-y-0.5">
                        <span className="text-slate-500 font-semibold block">Starting Salary</span>
                        <span className="text-sm font-bold text-orange-600">₹{stream.salarySpectrumLpa.entryMin}–{stream.salarySpectrumLpa.entryMax} LPA</span>
                      </div>

                      <div className="space-y-2 text-[11px]">
                        <div>
                          <span className="text-emerald-600 font-bold flex items-center gap-1 mb-0.5"><CheckCircle className="w-3 h-3" /> Advantage</span>
                          <p className="text-slate-600 line-clamp-2">{stream.pros[0]}</p>
                        </div>
                        <div>
                          <span className="text-red-500 font-bold flex items-center gap-1 mb-0.5"><AlertTriangle className="w-3 h-3" /> Trade-off</span>
                          <p className="text-slate-600 line-clamp-2">{stream.cons[0]}</p>
                        </div>
                      </div>

                      <button onClick={() => { setSelectedStream(sc.key); setComparatorOpen(false); }}
                        className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-auto">
                        <span>View Full Roadmap</span><ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-orange-100 bg-orange-50/50 flex items-center justify-between gap-3">
          {step === 'compare' ? (
            <button onClick={() => setStep('pick')}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-orange-700 bg-white border border-orange-200 hover:border-orange-400 transition-colors cursor-pointer">
              <ArrowLeft className="w-3.5 h-3.5" /> Change Selection
            </button>
          ) : (
            <div className="text-xs text-slate-500">
              {selected.length > 0 ? `${selected.length} path${selected.length > 1 ? 's' : ''} selected` : 'None selected yet'}
            </div>
          )}
          {step === 'pick' && (
            <button onClick={() => setStep('compare')} disabled={selected.length < 2}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer">
              <span>Compare Now</span><ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
