import React, { useState, useEffect } from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { CURATED_CAREER_PATHWAYS } from '../../data/curatedPathways';
import { CareerRole } from '../../types/pathway';
import {
  X, Layers, ArrowRight, ArrowLeft,
  CheckSquare, Square, Clock, DollarSign,
  AlertTriangle, Zap, CheckCircle
} from 'lucide-react';

interface Props { onClose: () => void; }

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

export const SimilarRolesComparator: React.FC<Props> = ({ onClose }) => {
  const { activeRole, setActiveRoleById, navigateToPathway } = usePathwayStore();
  const [step, setStep] = useState<'pick' | 'compare'>('pick');
  const [selected, setSelected] = useState<string[]>([activeRole.id]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Find all curated roles in the same domain
  const similarRoles: CareerRole[] = Object.values(CURATED_CAREER_PATHWAYS)
    .filter(r => r.domainId === activeRole.domainId);

  const toggleRole = (id: string) => {
    if (id === activeRole.id) return;
    setSelected(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const selectedRoles = selected.map(id => CURATED_CAREER_PATHWAYS[id]).filter(Boolean);

  // Pick the first available stream for comparison
  const getRepStream = (role: CareerRole) => {
    const order = ['HEC', 'MPC', 'BiPC', 'MEC_CEC', 'POLYTECHNIC', 'VOCATIONAL_GUILD'];
    for (const s of order) if (role.streams[s]) return { key: s, stream: role.streams[s] };
    const k = Object.keys(role.streams)[0];
    return k ? { key: k, stream: role.streams[k] } : null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-3xl border border-orange-200 shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-orange-100 flex items-center justify-between bg-orange-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-500 text-white"><Layers className="w-5 h-5" /></div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                {step === 'pick' ? 'Compare Similar Paths' : `Comparing ${selected.length} Roles`}
              </h3>
              <p className="text-xs text-slate-500">
                {step === 'pick'
                  ? `Other roles in: ${activeRole.domainName}`
                  : 'Side-by-side comparison within the same domain'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-orange-600 hover:bg-orange-100 transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {step === 'pick' ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                <strong className="text-slate-900">{activeRole.title}</strong> is pre-selected.
                {similarRoles.length > 1
                  ? ' Add 1–2 more similar roles from the same domain to compare.'
                  : ''}
              </p>

              {similarRoles.length <= 1 ? (
                <div className="text-center py-10 space-y-2">
                  <p className="text-sm text-slate-500">No other curated roles found in the <strong className="text-orange-600">{activeRole.domainName}</strong> domain yet.</p>
                  <p className="text-xs text-slate-400">Try using "Compare Streams" from the navbar to compare the 6 broad pathways instead.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {similarRoles.map(role => {
                    const isActive = role.id === activeRole.id;
                    const isSelected = selected.includes(role.id);
                    const isDisabled = !isActive && !isSelected && selected.length >= 3;
                    return (
                      <button key={role.id}
                        onClick={() => !isDisabled && !isActive && toggleRole(role.id)}
                        disabled={isDisabled || isActive}
                        className={`text-left p-4 rounded-2xl border transition-all ${
                          isActive    ? 'bg-orange-100 border-orange-500 ring-2 ring-orange-300 cursor-default' :
                          isSelected  ? 'bg-orange-50 border-orange-500 ring-2 ring-orange-200 cursor-pointer' :
                          isDisabled  ? 'bg-slate-50 border-slate-200 opacity-40 cursor-not-allowed' :
                                        'bg-white border-orange-200 hover:border-orange-400 hover:bg-orange-50 cursor-pointer shadow-sm'
                        }`}>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            {isActive && <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 block mb-0.5">Currently Viewing</span>}
                            <h4 className="text-sm font-bold text-slate-900 leading-tight">{role.title}</h4>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2">{role.shortDescription}</p>
                          </div>
                          <div className="shrink-0 mt-1">
                            {isActive || isSelected
                              ? <CheckSquare className="w-4 h-4 text-orange-500" />
                              : <Square className="w-4 h-4 text-slate-300" />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {selected.length < 2 && similarRoles.length > 1 && (
                <p className="text-xs text-center text-slate-400">Select at least 1 more role to compare</p>
              )}
            </div>

          ) : (
            <div className="overflow-x-auto">
              <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${selectedRoles.length}, minmax(0, 1fr))` }}>
                {selectedRoles.map(role => {
                  const rep = getRepStream(role);
                  if (!rep) return null;
                  const { stream } = rep;
                  const isCurrent = role.id === activeRole.id;
                  return (
                    <div key={role.id} className={`rounded-2xl p-4 border flex flex-col gap-4 shadow-sm ${
                      isCurrent ? 'border-orange-400 bg-orange-50' : 'border-orange-200 bg-white'
                    }`}>
                      {isCurrent && <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">Currently Viewing</span>}
                      <div>
                        <h4 className="text-sm font-extrabold text-orange-600 leading-tight">{role.title}</h4>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{role.shortDescription}</p>
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

                      {!isCurrent && (
                        <button
                          onClick={() => { setActiveRoleById(role.id); navigateToPathway(); onClose(); }}
                          className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-auto">
                          <span>View This Path</span><ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
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
            <div className="text-xs text-slate-500">{selected.length} role{selected.length !== 1 ? 's' : ''} selected</div>
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
