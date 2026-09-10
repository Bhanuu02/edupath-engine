import React, { useState, useEffect } from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { StreamType } from '../../types/pathway';
import { CURATED_CAREER_PATHWAYS } from '../../data/curatedPathways';
import { X, HelpCircle, ArrowRight, RotateCcw, Trophy, ChevronRight } from 'lucide-react';

interface QuizOption { label: string; streams: StreamType[]; }
interface QuizQuestion { id: number; question: string; options: QuizOption[]; }

const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 1, question: 'Which subject do you enjoy the most in school?', options: [
    { label: 'Mathematics', streams: ['MPC'] },
    { label: 'Science (Physics / Chemistry)', streams: ['MPC', 'POLYTECHNIC'] },
    { label: 'Biology', streams: ['BiPC'] },
    { label: 'History / Social Studies', streams: ['HEC'] },
    { label: 'English / Languages', streams: ['HEC'] },
    { label: 'Arts / Drawing', streams: ['HEC', 'VOCATIONAL_GUILD'] },
  ]},
  { id: 2, question: 'What do you like doing most?', options: [
    { label: 'Building or making things', streams: ['MPC', 'POLYTECHNIC'] },
    { label: 'Talking and helping people', streams: ['BiPC', 'HEC'] },
    { label: 'Planning and organizing things', streams: ['MEC_CEC'] },
  ]},
  { id: 3, question: 'When your phone breaks, what do you do?', options: [
    { label: 'Try to fix it myself and learn how', streams: ['MPC', 'POLYTECHNIC'] },
    { label: 'Get it fixed by someone', streams: ['MEC_CEC', 'HEC'] },
    { label: "Don't really care about fixing it", streams: ['BiPC', 'HEC'] },
  ]},
  { id: 4, question: 'In a group discussion, what is more like you?', options: [
    { label: 'I like proving my point and winning the debate', streams: ['HEC'] },
    { label: 'I listen to everyone and find middle ground', streams: ['BiPC', 'MEC_CEC'] },
    { label: 'I prefer to stay quiet and think', streams: ['MPC', 'BiPC'] },
  ]},
  { id: 5, question: 'If you had to create something, what would you make?', options: [
    { label: 'A story or write something', streams: ['HEC'] },
    { label: 'Solve a complicated math problem', streams: ['MPC'] },
    { label: 'A drawing, painting, or design', streams: ['HEC', 'VOCATIONAL_GUILD'] },
  ]},
  { id: 6, question: 'What style of work environment appeals to you?', options: [
    { label: 'Follow clear rules and procedures', streams: ['HEC', 'BiPC'] },
    { label: 'Mix of rules and freedom', streams: ['MEC_CEC', 'MPC'] },
    { label: 'Make my own way and be creative', streams: ['VOCATIONAL_GUILD', 'HEC'] },
  ]},
  { id: 7, question: 'What do you like reading or watching about?', options: [
    { label: 'Tech news and gadgets', streams: ['MPC', 'POLYTECHNIC'] },
    { label: 'News about crime, politics, and world events', streams: ['HEC'] },
    { label: 'Movies, shows, and entertainment news', streams: ['HEC', 'VOCATIONAL_GUILD'] },
    { label: 'Business and success stories', streams: ['MEC_CEC'] },
    { label: 'Nature and science discoveries', streams: ['BiPC'] },
  ]},
  { id: 8, question: 'Where would you rather work?', options: [
    { label: 'Inside, with a computer and desk', streams: ['MPC', 'MEC_CEC'] },
    { label: 'Both — sometimes inside, sometimes outside', streams: ['BiPC', 'POLYTECHNIC'] },
    { label: 'Outside, traveling and meeting people', streams: ['HEC', 'VOCATIONAL_GUILD'] },
  ]},
  { id: 9, question: 'In a group project, what role do you usually take?', options: [
    { label: "I'm the one who makes the plan and leads", streams: ['MEC_CEC', 'HEC'] },
    { label: 'I help and support the leader', streams: ['BiPC', 'POLYTECHNIC'] },
    { label: 'I do my work and let others decide', streams: ['MPC'] },
  ]},
  { id: 10, question: 'Which career sounds best to you?', options: [
    { label: 'Build or design something new', streams: ['MPC', 'POLYTECHNIC'] },
    { label: 'Help heal or teach people', streams: ['BiPC', 'HEC'] },
    { label: 'Defend someone or fight for justice', streams: ['HEC'] },
    { label: 'Start my own business', streams: ['MEC_CEC', 'VOCATIONAL_GUILD'] },
    { label: 'Create art or entertainment', streams: ['HEC', 'VOCATIONAL_GUILD'] },
  ]},
];

const STREAM_INFO: Record<StreamType, { label: string; emoji: string; careers: string[] }> = {
  MPC:             { label: 'Tech & Science (MPC)',           emoji: '💻', careers: ['AI Engineer', 'Software Developer', 'Commercial Pilot', 'Data Scientist'] },
  BiPC:            { label: 'Medical & Life Science (BiPC)',  emoji: '🔬', careers: ['Doctor (MBBS)', 'Pharmacist', 'Veterinary Doctor', 'Biotechnologist'] },
  MEC_CEC:         { label: 'Business & Commerce (MEC/CEC)', emoji: '💼', careers: ['Chartered Accountant', 'Business Manager', 'Entrepreneur', 'Investment Banker'] },
  HEC:             { label: 'Arts, Law & Humanities (HEC)',   emoji: '🎭', careers: ['Corporate Lawyer', 'Film Director', 'Journalist', 'IAS Officer'] },
  POLYTECHNIC:     { label: 'Hands-On Technical (Polytechnic)',emoji: '🔧', careers: ['Mechanical Engineer', 'Electrician', 'Civil Technician', 'AutoCAD Designer'] },
  VOCATIONAL_GUILD:{ label: 'Creative & Independent Work',   emoji: '🚀', careers: ['Chef', 'Film Actor', 'Musician', 'Freelance Designer'] },
};

function getTop3Streams(answers: StreamType[][]): StreamType[] {
  const counts: Partial<Record<StreamType, number>> = {};
  answers.forEach(streams => streams.forEach(s => { counts[s] = (counts[s] || 0) + 1; }));
  return (Object.entries(counts) as [StreamType, number][])
    .sort((a, b) => b[1] - a[1]).slice(0, 3).map(([s]) => s);
}

export const StreamQuizModal: React.FC = () => {
  const { isStreamQuizOpen, setStreamQuizOpen, setSelectedStream, navigateToPathway, setActiveRoleById } = usePathwayStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<StreamType[][]>([]);
  const [topStreams, setTopStreams] = useState<StreamType[] | null>(null);
  const [animating, setAnimating] = useState(false);

  // Scroll lock
  useEffect(() => {
    if (isStreamQuizOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isStreamQuizOpen]);

  if (!isStreamQuizOpen) return null;

  const handleSelectOption = (streams: StreamType[]) => {
    if (animating) return;
    const nextAnswers = [...selectedAnswers, streams];
    setSelectedAnswers(nextAnswers);
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setAnimating(true);
      setTimeout(() => { setCurrentStep(currentStep + 1); setAnimating(false); }, 200);
    } else {
      setTopStreams(getTop3Streams(nextAnswers));
    }
  };

  const handleReset = () => { setCurrentStep(0); setSelectedAnswers([]); setTopStreams(null); };
  const handleClose = () => { setStreamQuizOpen(false); setTimeout(handleReset, 300); };

  const handleViewPath = (stream: StreamType) => {
    setSelectedStream(stream);
    const matching = Object.values(CURATED_CAREER_PATHWAYS).find(r => stream in r.streams);
    if (matching) setActiveRoleById(matching.id);
    setStreamQuizOpen(false);
    navigateToPathway();
    setTimeout(handleReset, 300);
  };

  const q = QUIZ_QUESTIONS[currentStep];
  const progress = (currentStep / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg flex flex-col bg-white rounded-3xl border border-orange-200 shadow-2xl shadow-orange-100/60 overflow-hidden max-h-[92vh]">

        {/* Header — orange tinted */}
        <div className="p-4 sm:p-5 border-b border-orange-100 flex items-center justify-between bg-orange-50">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-500 text-white">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">Career Path Quiz</h3>
              <p className="text-xs text-slate-500">10 simple questions — find your best path</p>
            </div>
          </div>
          <button onClick={handleClose} className="p-1.5 rounded-xl text-slate-400 hover:text-orange-600 hover:bg-orange-100 transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {!topStreams ? (
            <div className={`space-y-5 transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}>

              {/* Progress bar — orange */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
                  <span>{Math.round(progress)}% done</span>
                </div>
                <div className="w-full h-2 bg-orange-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display leading-snug">{q.question}</h4>

              {/* Option buttons — white bg, orange border on hover */}
              <div className="space-y-2.5">
                {q.options.map((opt, i) => (
                  <button key={i} onClick={() => handleSelectOption(opt.streams)}
                    className="w-full text-left px-4 py-3.5 rounded-2xl bg-white hover:bg-orange-50 border border-orange-200 hover:border-orange-500 transition-all cursor-pointer group flex items-center justify-between shadow-sm">
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-orange-700 leading-tight">{opt.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>

          ) : (
            /* Results */
            <div className="space-y-5 animate-in zoom-in-95 duration-200">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-xl shadow-orange-200 text-white">
                  <Trophy className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-display">Your Top Career Paths</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">Based on your answers, these 3 streams match you the most.</p>
              </div>

              <div className="space-y-3">
                {topStreams.map((stream, idx) => {
                  const info = STREAM_INFO[stream];
                  return (
                    <div key={stream} className="rounded-2xl p-4 border border-orange-200 bg-orange-50 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{info.emoji}</span>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                            {idx === 0 ? '🥇 Best Match' : idx === 1 ? '🥈 2nd Match' : '🥉 3rd Match'}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 leading-tight">{info.label}</h4>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {info.careers.map(c => (
                          <span key={c} className="text-[11px] px-2 py-0.5 rounded-lg bg-white text-slate-600 border border-orange-200">{c}</span>
                        ))}
                      </div>
                      <button onClick={() => handleViewPath(stream)}
                        className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                        <span>View This Path</span><ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>

              <button onClick={handleReset}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-orange-700 bg-white border border-orange-200 hover:border-orange-400 transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                <RotateCcw className="w-3.5 h-3.5" /><span>Retake Quiz</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
