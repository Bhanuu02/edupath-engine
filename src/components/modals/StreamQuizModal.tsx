import React, { useState } from 'react';
import { usePathwayStore } from '../../store/pathwayStore';
import { StreamType } from '../../types/pathway';
import { 
  X, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  Trophy
} from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  scenario: string;
  options: {
    label: string;
    description: string;
    streamAffinity: StreamType;
  }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'How do you naturally prefer solving real-world challenges?',
    scenario: 'When given an open-ended problem, what sparks your curiosity first?',
    options: [
      {
        label: 'Mathematical Logic & Computational Systems',
        description: 'I love formulas, physics, software coding, and structured analytical problem-solving.',
        streamAffinity: 'MPC'
      },
      {
        label: 'Living Systems, Biology & Healthcare',
        description: 'I am fascinated by genetics, human physiology, nature, and clinical healing.',
        streamAffinity: 'BiPC'
      },
      {
        label: 'Markets, Capital, Strategy & Entrepreneurship',
        description: 'I enjoy understanding commerce, business models, stock markets, and financial dynamics.',
        streamAffinity: 'MEC_CEC'
      },
      {
        label: 'Human Stories, Law, Philosophy & Creative Arts',
        description: 'I thrive on storytelling, literature, public policy, civil governance, and dramatic performance.',
        streamAffinity: 'HEC'
      },
      {
        label: 'Direct Hands-On Machines & Applied Workshop Tech',
        description: 'I prefer building with physical circuits, tools, hardware, and immediate practical creation.',
        streamAffinity: 'POLYTECHNIC'
      }
    ]
  },
  {
    id: 2,
    question: 'What is your preferred learning environment and timeline?',
    scenario: 'How would you prefer your post-10th education to be structured?',
    options: [
      {
        label: 'Deep Academic Rigor in Sciences & National Engineering Tests',
        description: 'Willing to take on heavy mathematics and competitive exams (JEE/BITSAT).',
        streamAffinity: 'MPC'
      },
      {
        label: 'Medical/Life Sciences & Laboratory Diagnostics',
        description: 'Excited by lab experiments, microscopic biology, and clinical empathy.',
        streamAffinity: 'BiPC'
      },
      {
        label: 'Business Strategy, Accounting & Corporate Deals',
        description: 'Fast-paced commercial analytics, management cases, and business spreadsheets.',
        streamAffinity: 'MEC_CEC'
      },
      {
        label: 'Reading, Debate, Creative Production & Social Impact',
        description: 'Passionate about essays, cinema, justice, theatre, and policy reforms.',
        streamAffinity: 'HEC'
      },
      {
        label: 'Early 3-Year Technical Diploma with Direct Industry Experience',
        description: 'Fast hands-on path to industry employment with lateral degree options via ECET.',
        streamAffinity: 'POLYTECHNIC'
      }
    ]
  },
  {
    id: 3,
    question: 'If your dream project gets stuck, what is your primary instinct?',
    scenario: 'How do you troubleshoot roadblocks?',
    options: [
      {
        label: 'Debug the algorithm and break down the math',
        description: 'Isolate variables, write scripts, and optimize technical bottlenecks.',
        streamAffinity: 'MPC'
      },
      {
        label: 'Investigate the root biological or scientific cause',
        description: 'Formulate a hypothesis, test variables, and apply nature’s design.',
        streamAffinity: 'BiPC'
      },
      {
        label: 'Re-evaluate the financial budget and resource allocation',
        description: 'Negotiate with stakeholders, restructure costs, and find new revenue models.',
        streamAffinity: 'MEC_CEC'
      },
      {
        label: 'Rethink the human narrative and emotional connection',
        description: 'Inspire people through compelling communication, drama, and ethical perspective.',
        streamAffinity: 'HEC'
      },
      {
        label: 'Take apart the physical equipment and fix the hardware',
        description: 'Inspect wires, solder components, and calibrate machines manually.',
        streamAffinity: 'POLYTECHNIC'
      }
    ]
  }
];

export const StreamQuizModal: React.FC = () => {
  const { isStreamQuizOpen, setStreamQuizOpen, setSelectedStream } = usePathwayStore();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<StreamType[]>([]);
  const [recommendedStream, setRecommendedStream] = useState<StreamType | null>(null);

  if (!isStreamQuizOpen) return null;

  const handleSelectOption = (stream: StreamType) => {
    const nextAnswers = [...selectedAnswers, stream];
    setSelectedAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate highest frequency stream
      const counts: Record<string, number> = {};
      nextAnswers.forEach(s => {
        counts[s] = (counts[s] || 0) + 1;
      });
      let bestStream: StreamType = 'MPC';
      let maxCount = 0;
      Object.entries(counts).forEach(([str, count]) => {
        if (count > maxCount) {
          maxCount = count;
          bestStream = str as StreamType;
        }
      });
      setRecommendedStream(bestStream);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setRecommendedStream(null);
  };

  const handleApplyRecommendation = () => {
    if (recommendedStream) {
      setSelectedStream(recommendedStream);
      setStreamQuizOpen(false);
      handleReset();
    }
  };

  const q = QUIZ_QUESTIONS[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-150">
      
      <div className="relative w-full max-w-xl flex flex-col glass-panel rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Post-10th Stream Affinity Screener
              </h3>
              <p className="text-xs text-slate-400">
                Discover which educational stream matches your natural learning style.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setStreamQuizOpen(false);
              handleReset();
            }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {!recommendedStream ? (
            <div className="space-y-4">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
                <div className="flex gap-1.5">
                  {QUIZ_QUESTIONS.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-6 h-1.5 rounded-full transition-colors ${
                        idx <= currentStep ? 'bg-indigo-500' : 'bg-slate-800'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Heading */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white font-display">
                  {q.question}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {q.scenario}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2 pt-1">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.streamAffinity)}
                    className="w-full text-left p-3 sm:p-3.5 rounded-2xl bg-slate-900/80 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer group"
                  >
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-indigo-300">
                      {opt.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {opt.description}
                    </div>
                  </button>
                ))}
              </div>

            </div>
          ) : (
            
            /* Results Screen */
            <div className="text-center py-4 space-y-4 animate-in zoom-in-95 duration-200">
              
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/30 text-white">
                <Trophy className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest font-bold text-indigo-400">
                  Recommended Stream Match
                </span>
                <h3 className="text-2xl font-extrabold text-white font-display">
                  {recommendedStream} Stream Pathway
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Based on your problem-solving instincts, the <strong>{recommendedStream}</strong> stream gives you the optimal balance of academic curiosity, practical execution, and career leverage!
              </p>

              <div className="flex items-center justify-center gap-3 pt-3">
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>

                <button
                  onClick={handleApplyRecommendation}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Apply & View {recommendedStream} Roadmap</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};
