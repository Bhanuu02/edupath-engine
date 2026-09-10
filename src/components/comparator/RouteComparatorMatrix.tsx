import React, { useState, useEffect } from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { StreamType } from '../../types/pathway';
import {
  X,
  Layers,
  Clock,
  DollarSign,
  AlertTriangle,
  Scale,
  CheckCircle,
  Zap,
  ArrowRight,
  ArrowLeft,
  CheckSquare,
  Square
} from 'lucide-react';

// ─── Stream Picker Cards ──────────────────────────────────────────────────────

interface StreamCard {
  key: StreamType;
  emoji: string;
  name: string;
  description: string;
  color: string;
  borderColor: string;
  textColor: string;
}

const STREAM_CARDS: StreamCard[] = [
  {
    key: 'HEC',
    emoji: '🎭',
    name: 'Stories & Arts',
    description: 'History, languages, law, drama, writing careers',
    color: 'bg-purple-950/50',
    borderColor: 'border-purple-500/40',
    textColor: 'text-purple-300',
  },
  {
    key: 'MPC',
    emoji: '💻',
    name: 'Tech & Coding',
    description: 'Computers, programming, IT, engineering careers',
    color: 'bg-blue-950/50',
    borderColor: 'border-blue-500/40',
    textColor: 'text-blue-300',
  },
  {
    key: 'BiPC',
    emoji: '🔬',
    name: 'Science & Nature',
    description: 'Biology, environment, medical, pharmacy careers',
    color: 'bg-emerald-950/50',
    borderColor: 'border-emerald-500/40',
    textColor: 'text-emerald-300',
  },
  {
    key: 'MEC_CEC',
    emoji: '💼',
    name: 'Business & Leadership',
    description: 'Business, management, commerce, finance careers',
    color: 'bg-amber-950/50',
    borderColor: 'border-amber-500/40',
    textColor: 'text-amber-300',
  },
  {
    key: 'POLYTECHNIC',
    emoji: '🔧',
    name: 'Creative & Practical',
    description: 'Diploma, technical skills, hands-on work careers',
    color: 'bg-cyan-950/50',
    borderColor: 'border-cyan-500/40',
    textColor: 'text-cyan-300',
  },
  {
    key: 'VOCATIONAL_GUILD',
    emoji: '🚀',
    name: 'Independent Work',
    description: 'Starting your own business, freelance, apprenticeship',
    color: 'bg-rose-950/50',
    borderColor: 'border-rose-500/40',
    textColor: 'text-rose-300',
  },
];

// ─── Difficulty / Cost helpers ────────────────────────────────────────────────

function difficultyFromCompetition(level: string): string {
  if (level === 'EXTREME' || level === 'VERY_HIGH') return 'Hard';
  if (level === 'HIGH' || level === 'MODERATE') return 'Medium';
  return 'Easy';
}

function costLabel(cost: string): string {
  const c = cost.toUpperCase();
  if (c.includes('HIGH') || c.includes('VERY')) return 'High';
  if (c.includes('LOW')) return 'Low';
  return 'Medium';
}

// ─── Component ────────────────────────────────────────────────────────────────

export const RouteComparatorMatrix: React.FC = () => {
  const { activeRole, isComparatorOpen, setComparatorOpen, setSelectedStream } = usePathwayStore();
  const [step, setStep] = useState<'pick' | 'compare'>(isComparatorOpen ? 'pick' : 'pick');
  const [selected, setSelected] = useState<StreamType[]>([]);

  // Scroll lock
  useEffect(() => {
    if (isComparatorOpen) {
      document.body.style.overflow = 'hidden';
      setStep('pick');
      setSelected([]);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isComparatorOpen]);

  if (!isComparatorOpen) return null;

  const handleClose = () => {
    setComparatorOpen(false);
    setTimeout(() => {
      setStep('pick');
      setSelected([]);
    }, 300);
  };

  const toggleStream = (key: StreamType) => {
    setSelected(prev =>
      prev.includes(key) ? prev.filter(s => s !== key) : prev.length < 3 ? [...prev, key] : prev
    );
  };

  // Only show streams that exist in activeRole
  const availableStreams = STREAM_CARDS.filter(sc => activeRole.streams[sc.key]);

  const selectedStreams = availableStreams.filter(sc => selected.includes(sc.key));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col glass-panel rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                {step === 'pick' ? 'Which paths do you want to compare?' : `Comparing ${selected.length} Paths`}
              </h3>
              <p className="text-xs text-slate-400">
                {step === 'pick'
                  ? 'Pick 2 or 3 paths that interest you'
                  : `For: ${activeRole.title}`}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">

          {step === 'pick' ? (
            /* ── Step 1: Pick Paths ── */
            <div className="space-y-4">
              <p className="text-sm text-slate-400">
                Select <strong className="text-white">2 or 3 paths</strong> you are thinking about. We'll compare them side by side.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {availableStreams.map((sc) => {
                  const isSelected = selected.includes(sc.key);
                  const isDisabled = !isSelected && selected.length >= 3;
                  return (
                    <button
                      key={sc.key}
                      onClick={() => !isDisabled && toggleStream(sc.key)}
                      disabled={isDisabled}
                      className={`relative text-left p-4 rounded-2xl border transition-all cursor-pointer group ${
                        isSelected
                          ? `${sc.color} ${sc.borderColor} ring-2 ring-indigo-500/50`
                          : isDisabled
                          ? 'bg-slate-900/30 border-slate-800/50 opacity-40 cursor-not-allowed'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      {/* Checkbox indicator */}
                      <div className="absolute top-3 right-3">
                        {isSelected
                          ? <CheckSquare className="w-4 h-4 text-indigo-400" />
                          : <Square className="w-4 h-4 text-slate-600" />
                        }
                      </div>

                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-2xl">{sc.emoji}</span>
                        <h4 className={`text-sm font-extrabold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                          {sc.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{sc.description}</p>
                    </button>
                  );
                })}
              </div>

              {selected.length < 2 && (
                <p className="text-xs text-center text-slate-500">Select at least 2 paths to compare</p>
              )}
            </div>
          ) : (
            /* ── Step 2: Comparison ── */
            <div className="overflow-x-auto">
              <div
                className="grid gap-3 min-w-0"
                style={{ gridTemplateColumns: `repeat(${selectedStreams.length}, minmax(0, 1fr))` }}
              >
                {selectedStreams.map((sc) => {
                  const stream = activeRole.streams[sc.key]!;
                  return (
                    <div
                      key={sc.key}
                      className={`rounded-2xl p-4 border flex flex-col gap-4 ${sc.color} ${sc.borderColor}`}
                    >
                      {/* Title */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{sc.emoji}</span>
                          <h4 className={`text-sm font-extrabold ${sc.textColor}`}>{sc.name}</h4>
                        </div>
                        <p className="text-[11px] text-slate-300 line-clamp-2">{stream.approachPhilosophy}</p>
                      </div>

                      {/* Metrics */}
                      <div className="space-y-2 text-xs border-t border-slate-800/60 pt-3">

                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-indigo-400" /> Time
                          </span>
                          <strong className="text-white">{stream.metrics.timeToFirstJobYears} yrs</strong>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-amber-400" /> Difficulty
                          </span>
                          <strong className="text-amber-300">
                            {difficultyFromCompetition(stream.metrics.competitionLevel)}
                          </strong>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 flex items-center gap-1">
                            <DollarSign className="w-3 h-3 text-emerald-400" /> Cost
                          </span>
                          <strong className="text-emerald-300">
                            {costLabel(stream.metrics.financialInvestment)}
                          </strong>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 flex items-center gap-1">
                            <Zap className="w-3 h-3 text-cyan-400" /> Practical
                          </span>
                          <strong className="text-cyan-300">
                            {Math.round(stream.metrics.practicalToTheoryRatio * 100)}%
                          </strong>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 flex items-center gap-1">
                            <Scale className="w-3 h-3 text-purple-400" /> Competition
                          </span>
                          <strong className="text-purple-300">
                            {stream.metrics.competitionLevel.replace('_', ' ')}
                          </strong>
                        </div>

                      </div>

                      {/* Salary */}
                      <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] space-y-0.5">
                        <span className="text-slate-400 font-semibold block">Starting Salary</span>
                        <span className="text-sm font-bold text-emerald-400">
                          ₹{stream.salarySpectrumLpa.entryMin}–{stream.salarySpectrumLpa.entryMax} LPA
                        </span>
                      </div>

                      {/* Pros & Cons */}
                      <div className="space-y-2 text-[11px]">
                        <div>
                          <span className="text-emerald-400 font-bold flex items-center gap-1 mb-0.5">
                            <CheckCircle className="w-3 h-3" /> Advantage
                          </span>
                          <p className="text-slate-300 line-clamp-2">{stream.pros[0]}</p>
                        </div>
                        <div>
                          <span className="text-rose-400 font-bold flex items-center gap-1 mb-0.5">
                            <AlertTriangle className="w-3 h-3" /> Trade-off
                          </span>
                          <p className="text-slate-300 line-clamp-2">{stream.cons[0]}</p>
                        </div>
                      </div>

                      {/* Select CTA */}
                      <button
                        onClick={() => {
                          setSelectedStream(sc.key);
                          setComparatorOpen(false);
                        }}
                        className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-slate-700 hover:border-indigo-500 mt-auto"
                      >
                        <span>View Full Roadmap</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between gap-3 shrink-0">
          {step === 'compare' ? (
            <button
              onClick={() => setStep('pick')}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Change Selection
            </button>
          ) : (
            <div className="text-xs text-slate-500">
              {selected.length > 0 ? `${selected.length} path${selected.length > 1 ? 's' : ''} selected` : 'None selected yet'}
            </div>
          )}

          {step === 'pick' && (
            <button
              onClick={() => setStep('compare')}
              disabled={selected.length < 2}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <span>Compare Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
