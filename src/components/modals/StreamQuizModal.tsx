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
  Trophy,
  Shield,
  Cpu,
  Scale,
  TrendingUp,
  Palette,
  Activity,
  AlertTriangle,
  Lightbulb,
  Zap,
  Target
} from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  scenario: string;
  options: {
    label: string;
    description: string;
    streamAffinity: StreamType;
    domainCategory: 'DEFENSE' | 'STEM' | 'CIVILS' | 'COMMERCE' | 'CREATIVE' | 'MEDICAL';
    roleRecommendationId: string;
    roleRecommendationTitle: string;
    strengthsText: string;
    blindspotText: string;
  }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is your primary natural instinct when facing an ambitious challenge?',
    scenario: 'Imagine you are given complete freedom to lead a major national initiative. What role excites you most?',
    options: [
      {
        label: 'Frontline Tactical Action, Physical Bravery & Defense Command',
        description: 'Leading a tactical combat unit, overcoming extreme physical terrain, and defending national security.',
        streamAffinity: 'MPC',
        domainCategory: 'DEFENSE',
        roleRecommendationId: 'soldier_defense_forces',
        roleRecommendationTitle: 'Soldier & Special Forces Commando (Army/NDA)',
        strengthsText: 'High physical stamina, courage under pressure, tactical discipline, and strong camaraderie.',
        blindspotText: 'May find sedentary desk jobs and repetitive paperwork unstimulating.'
      },
      {
        label: 'Designing Advanced Silicon Chips & Computational AI Systems',
        description: 'Architecting nanometer microprocessors, hardware accelerators, and writing mathematical algorithms.',
        streamAffinity: 'MPC',
        domainCategory: 'STEM',
        roleRecommendationId: 'vlsi_semiconductor_engineer',
        roleRecommendationTitle: 'VLSI Design & Semiconductor Chip Engineer (ECE)',
        strengthsText: 'Deep logical reasoning, mathematical precision, and electronic circuit intuition.',
        blindspotText: 'Requires patience during long debugging and simulation cycles.'
      },
      {
        label: 'Transforming Public Administration, Law & District Governance',
        description: 'Formulating government policy, resolving social inequalities, and administering districts as District Collector / Police Chief.',
        streamAffinity: 'HEC',
        domainCategory: 'CIVILS',
        roleRecommendationId: 'civil_services_officer',
        roleRecommendationTitle: 'Civil Services Officer (IAS / IPS / State Groups)',
        strengthsText: 'Strong constitutional ethics, public empathy, critical discourse, and holistic social understanding.',
        blindspotText: 'Requires endurance to handle high administrative scrutiny and political pressures.'
      },
      {
        label: 'Visual Storytelling, Cinema Direction & Professional Photography',
        description: 'Directing camera optics, capturing evocative moments, and framing visual narratives for films and global publications.',
        streamAffinity: 'HEC',
        domainCategory: 'CREATIVE',
        roleRecommendationId: 'professional_photographer',
        roleRecommendationTitle: 'Professional Photographer & Visual Cinematographer',
        strengthsText: 'Exceptional aesthetic vision, emotional framing, lighting mastery, and creative storytelling.',
        blindspotText: 'Client-driven freelance timelines require continuous self-promotion and negotiation skills.'
      },
      {
        label: 'Financial Capital Markets, Strategy & Enterprise Dealmaking',
        description: 'Building investment portfolios, scaling high-growth ventures, and analyzing corporate financial models.',
        streamAffinity: 'MEC_CEC',
        domainCategory: 'COMMERCE',
        roleRecommendationId: 'investment_banker',
        roleRecommendationTitle: 'Investment Banker & Strategic Venture Lead',
        strengthsText: 'High commercial acumen, quantitative risk assessment, and negotiation leverage.',
        blindspotText: 'Fast-paced market cycles demand rapid adaptation and stress resilience.'
      },
      {
        label: 'Healing Biological Systems, Medicine & Nature Conservation',
        description: 'Performing clinical surgeries, saving endangered wildlife species, and developing biotechnological therapies.',
        streamAffinity: 'BiPC',
        domainCategory: 'MEDICAL',
        roleRecommendationId: 'neurosurgeon_specialist',
        roleRecommendationTitle: 'Medical Specialist & Bio-Clinical Researcher',
        strengthsText: 'Deep biological curiosity, human empathy, diagnostic patience, and empirical rigor.',
        blindspotText: 'Long clinical training arcs require sustained multi-year commitment.'
      }
    ]
  },
  {
    id: 2,
    question: 'How do you prefer to balance physical endurance and mental focus?',
    scenario: 'Which daily routine sounds most energizing and fulfilling to you?',
    options: [
      {
        label: 'Rigorous Physical Training + Field Obstacles + Tactical Drills',
        description: 'Early morning 5km runs, obstacle courses, shooting ranges, and outdoor physical conditioning.',
        streamAffinity: 'VOCATIONAL_GUILD',
        domainCategory: 'DEFENSE',
        roleRecommendationId: 'soldier_defense_forces',
        roleRecommendationTitle: 'Soldier & Special Forces Commando (Army/NDA)',
        strengthsText: 'High pain tolerance, physical agility, resilience in harsh weather, and mission focus.',
        blindspotText: 'Ensure parallel technical study to qualify for higher military promotion exams.'
      },
      {
        label: 'Deep Focused Lab Sessions with Oscilloscopes, EDA Tools & Code',
        description: 'Synthesizing Verilog hardware, designing circuit boards, and testing silicon prototypes.',
        streamAffinity: 'MPC',
        domainCategory: 'STEM',
        roleRecommendationId: 'vlsi_semiconductor_engineer',
        roleRecommendationTitle: 'VLSI Design & Semiconductor Chip Engineer (ECE)',
        strengthsText: 'Sustained cognitive focus, systematic testing methodologies, and architectural clarity.',
        blindspotText: 'Remember to incorporate daily physical workouts to offset prolonged screen hours.'
      },
      {
        label: 'Reading Editorial Discourse, Debating Policy & Field Inspections',
        description: 'Analyzing constitutional cases, visiting rural development sites, and meeting citizen delegations.',
        streamAffinity: 'HEC',
        domainCategory: 'CIVILS',
        roleRecommendationId: 'civil_services_officer',
        roleRecommendationTitle: 'Civil Services Officer (IAS / IPS / State Groups)',
        strengthsText: 'Active listening, holistic social synthesis, and articulate verbal/written communication.',
        blindspotText: 'Avoid analysis-paralysis by taking decisive time-bound executive actions.'
      },
      {
        label: 'On-Location Wildlife Expeditions & Dynamic Fashion Lighting Sets',
        description: 'Trekking through rainforests with heavy camera gear or directing dynamic models in high-energy studios.',
        streamAffinity: 'VOCATIONAL_GUILD',
        domainCategory: 'CREATIVE',
        roleRecommendationId: 'professional_photographer',
        roleRecommendationTitle: 'Professional Photographer & Visual Cinematographer',
        strengthsText: 'Spontaneous reflexes, adaptability to changing outdoor light, and physical stamina with equipment.',
        blindspotText: 'Requires disciplined post-production backup and archiving routines.'
      },
      {
        label: 'Hands-on Mechanical Workshop Fabrication & Applied Robotics',
        description: 'Working with machines, CNC mills, electronics assembly, and building physical working prototypes.',
        streamAffinity: 'POLYTECHNIC',
        domainCategory: 'STEM',
        roleRecommendationId: 'vlsi_semiconductor_engineer',
        roleRecommendationTitle: 'Polytechnic Engineering Specialist -> Lateral B.Tech',
        strengthsText: 'Immediate practical dexterity, hardware troubleshooting, and real-world assembly skills.',
        blindspotText: 'Bridge theoretical higher mathematics to scale into senior engineering roles.'
      }
    ]
  },
  {
    id: 3,
    question: 'When under intense pressure with tight deadlines, how do you perform best?',
    scenario: 'A high-stakes crisis unfolds that needs immediate resolution. What is your go-to strength?',
    options: [
      {
        label: 'Immediate, calm decisive command taking charge of the group',
        description: 'Assessing the threat, inspiring team courage, and executing a bold tactical plan without hesitation.',
        streamAffinity: 'MPC',
        domainCategory: 'DEFENSE',
        roleRecommendationId: 'soldier_defense_forces',
        roleRecommendationTitle: 'Armed Forces Combat Leader / Commando',
        strengthsText: 'Decisive command presence, psychological calmness during chaos, and team loyalty.',
        blindspotText: 'Ensure rapid debriefing and listening to specialist inputs when time permits.'
      },
      {
        label: 'Isolating root cause through rigorous logic, metrics and data',
        description: 'Breaking down the failure tree, inspecting logs, and applying mathematical troubleshooting.',
        streamAffinity: 'MPC',
        domainCategory: 'STEM',
        roleRecommendationId: 'vlsi_semiconductor_engineer',
        roleRecommendationTitle: 'VLSI Engineer / Hardware AI Architect',
        strengthsText: 'Objective root-cause deduction, systematic elimination of errors, and precision.',
        blindspotText: 'Avoid over-complicating solutions when rapid practical patches are needed.'
      },
      {
        label: 'Balancing competing interests and enforcing constitutional fairness',
        description: 'Listening to all aggrieved parties, mediating conflict, and upholding legal justice.',
        streamAffinity: 'HEC',
        domainCategory: 'CIVILS',
        roleRecommendationId: 'civil_services_officer',
        roleRecommendationTitle: 'Civil Services Magistrate / IAS Officer',
        strengthsText: 'Impartial conflict mediation, emotional composure, and legal righteousness.',
        blindspotText: 'Be prepared for difficult administrative tradeoffs where not all parties can be pleased.'
      },
      {
        label: 'Thinking outside the box with creative intuition and quick adaptation',
        description: 'Finding an unexpected visual angle, improvising with available resources, and turning errors into art.',
        streamAffinity: 'VOCATIONAL_GUILD',
        domainCategory: 'CREATIVE',
        roleRecommendationId: 'professional_photographer',
        roleRecommendationTitle: 'Creative Visual Director / Photographer',
        strengthsText: 'Creative resourcefulness, lateral thinking, and rapid aesthetic adaptation.',
        blindspotText: 'Set clear contingency equipment plans for high-value commercial assignments.'
      }
    ]
  }
];

export const StreamQuizModal: React.FC = () => {
  const { isStreamQuizOpen, setStreamQuizOpen, setSelectedStream, setActiveRoleById } = usePathwayStore();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<any[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isStreamQuizOpen) return null;

  const handleSelectOption = (opt: any) => {
    const nextAnswers = [...selectedAnswers, opt];
    setSelectedAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
  };

  // Calculate Aggregated Insights
  const calculateResults = () => {
    const streamCounts: Record<string, number> = {};
    const domainCounts: Record<string, number> = {};
    const strengths: string[] = [];
    const blindspots: string[] = [];
    const recommendedRoles: { id: string; title: string; category: string }[] = [];

    selectedAnswers.forEach(ans => {
      streamCounts[ans.streamAffinity] = (streamCounts[ans.streamAffinity] || 0) + 1;
      domainCounts[ans.domainCategory] = (domainCounts[ans.domainCategory] || 0) + 1;
      if (ans.strengthsText && !strengths.includes(ans.strengthsText)) {
        strengths.push(ans.strengthsText);
      }
      if (ans.blindspotText && !blindspots.includes(ans.blindspotText)) {
        blindspots.push(ans.blindspotText);
      }
      if (ans.roleRecommendationId && !recommendedRoles.some(r => r.id === ans.roleRecommendationId)) {
        recommendedRoles.push({
          id: ans.roleRecommendationId,
          title: ans.roleRecommendationTitle,
          category: ans.domainCategory
        });
      }
    });

    let bestStream: StreamType = 'MPC';
    let maxStreamCount = 0;
    Object.entries(streamCounts).forEach(([str, count]) => {
      if (count > maxStreamCount) {
        maxStreamCount = count;
        bestStream = str as StreamType;
      }
    });

    return {
      bestStream,
      strengths: strengths.slice(0, 3),
      blindspots: blindspots.slice(0, 2),
      recommendedRoles: recommendedRoles.slice(0, 3),
      domainCounts
    };
  };

  const results = isCompleted ? calculateResults() : null;
  const q = QUIZ_QUESTIONS[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-150">
      
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-white rounded-3xl border border-orange-200 shadow-2xl overflow-hidden text-slate-800 animate-in zoom-in-95 duration-150">
        
        {/* Header with Warm Orange Glow */}
        <div className="p-4 sm:p-5 border-b border-orange-100 flex items-center justify-between bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md text-white shadow-inner">
              <Sparkles className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-white">
                Student Aptitude & Future Role Discovery
              </h3>
              <p className="text-xs text-orange-100">
                Identify your unique psychological strengths, watch-outs & ideal career roadmaps.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setStreamQuizOpen(false);
              handleReset();
            }}
            className="p-1.5 rounded-xl text-orange-100 hover:text-white bg-white/15 hover:bg-white/25 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
          
          {!isCompleted ? (
            <div className="space-y-4">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-orange-600">Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
                <div className="flex gap-1.5">
                  {QUIZ_QUESTIONS.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-8 h-2 rounded-full transition-all ${
                        idx <= currentStep ? 'bg-orange-500 shadow-sm shadow-orange-500/30' : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Heading */}
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  {q.question}
                </h4>
                <p className="text-xs text-slate-500">
                  {q.scenario}
                </p>
              </div>

              {/* Options Stack */}
              <div className="space-y-2.5 pt-1">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    className="w-full text-left p-3.5 sm:p-4 rounded-2xl bg-orange-50/40 hover:bg-orange-50 border border-orange-100/80 hover:border-orange-400 hover:shadow-md hover:shadow-orange-500/10 transition-all cursor-pointer group flex items-start justify-between gap-3"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-600">
                        {opt.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-orange-300 group-hover:text-orange-500 group-hover:translate-x-1 shrink-0 transition-all mt-0.5" />
                  </button>
                ))}
              </div>

            </div>
          ) : results ? (
            
            /* Comprehensive Results & Profile Screen */
            <div className="space-y-5 animate-in zoom-in-95 duration-200">
              
              {/* Profile Top Banner */}
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 border border-orange-200 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 shrink-0">
                  <Trophy className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-orange-600">
                    Your Personalized Career Aptitude Profile
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                    Recommended Primary Route: {results.bestStream} Stream
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Based on your natural instincts, you thrive when high tactical purpose, intellectual depth, and active execution align!
                  </p>
                </div>
              </div>

              {/* Two Column Grid: Strengths (Pros) vs Blindspots (Cons) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Identified Strengths (Pros) */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Your Core Strengths (Pros)
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {results.strengths.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Potential Blindspots & Watch-outs (Cons) */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Potential Blindspots & Watch-outs
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {results.blindspots.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Recommended Top Future Roles */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <Target className="w-4 h-4 text-orange-500" />
                  Top Recommended Career Pathways for You
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {results.recommendedRoles.map((role) => (
                    <div 
                      key={role.id}
                      className="p-3.5 rounded-2xl bg-white border border-orange-200 hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between space-y-2"
                    >
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">
                          {role.category}
                        </span>
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900 mt-1.5 leading-snug">
                          {role.title}
                        </h5>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedStream(results.bestStream);
                          setActiveRoleById(role.id);
                          setStreamQuizOpen(false);
                          handleReset();
                          // Smooth scroll to roadmap
                          const elem = document.getElementById('roadmap-flow-container');
                          if (elem) {
                            elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        className="w-full py-1.5 px-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-sm shadow-orange-500/20"
                      >
                        <span>Explore Roadmap</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedStream(results.bestStream);
                    setStreamQuizOpen(false);
                    handleReset();
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Apply & View {results.bestStream} Pathway</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          ) : null}

        </div>

      </div>

    </div>
  );
};
