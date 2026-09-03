export type StreamType = 
  | 'MPC' 
  | 'BiPC' 
  | 'MEC_CEC' 
  | 'HEC' 
  | 'POLYTECHNIC' 
  | 'VOCATIONAL_GUILD';

export type DomainId = 
  | 'film_theatre_arts'
  | 'design_fashion_arts'
  | 'media_journalism_literature'
  | 'culinary_hospitality'
  | 'sports_fitness_esports'
  | 'aviation_defense_maritime'
  | 'law_civil_services'
  | 'stem_computing_robotics'
  | 'life_sciences_medicine'
  | 'commerce_finance_strategy'
  | 'agriculture_wildlife_env'
  | 'vocational_trades_guilds';

export type MilestonePhase = 
  | 'PHASE_0_10TH' 
  | 'PHASE_1_STREAM' 
  | 'PHASE_2_EXAMS' 
  | 'PHASE_3_DEGREE' 
  | 'PHASE_4_LATERAL' 
  | 'PHASE_5_OUTCOME'
  | 'PHASE_POST_GRAD_RECRUITMENT';

export type ExamLevel = '10TH' | '12TH' | 'LATERAL' | 'GRADUATE' | 'POST_GRAD_JOB';
export type CompetitionLevel = 'LOW' | 'MODERATE' | 'HIGH' | 'VERY_HIGH' | 'EXTREME';
export type InvestmentLevel = 'FREE_SCHOLARSHIP' | 'LOW' | 'MODERATE' | 'HIGH' | 'PREMIUM';

export interface ExamGateway {
  id: string;
  name: string;
  fullName: string;
  conductingBody: string;
  targetLevel: ExamLevel;
  category: string;
  eligibility: string;
  examPattern: string;
  annualApplicants: string;
  acceptanceRate: string;
  competitionLevel: CompetitionLevel;
  syllabusHighlights: string[];
  keyDatesInfo: string;
  officialUrl?: string;
}

export interface MilestoneNode {
  id: string;
  phase: MilestonePhase;
  phaseLabel: string;
  title: string;
  subtitle: string;
  durationYears?: string;
  description: string;
  branchOrSpecializationToChoose?: string; // Explicit branch/major guidance (e.g. B.Tech ECE for VLSI)
  mandatoryEligibility: string[];
  examGateways: string[]; // references ExamGateway IDs at 10th/12th/Degree/Post-Grad
  postDegreeExams?: string[]; // Recruitment or post-grad exams (UPSC, GATE, State PSCs, CAT, etc.)
  recommendedInstitutions: string[];
  skillsToAcquire: string[];
  estimatedCostRange: string;
  keyActionTip: string;
}

export interface LateralSwitchPoint {
  id: string;
  title: string;
  fromStage: string;
  toTarget: string;
  bridgeExamOrMechanism: string;
  description: string;
  durationAdjustment: string;
  keyBenefit: string;
}

export interface StreamPathwayMetrics {
  timeToFirstJobYears: number;
  financialInvestment: InvestmentLevel;
  competitionLevel: CompetitionLevel;
  flexibilityScore: number; // 1 to 10
  practicalToTheoryRatio: number; // 1 to 10 (10 = 100% hands-on)
}

export interface StreamPathway {
  streamType: StreamType;
  streamName: string;
  streamShortDesc: string;
  badgeLabel: string;
  themeColor: {
    primary: string;
    border: string;
    bg: string;
    text: string;
    glow: string;
  };
  approachPhilosophy: string;
  branchSelectionStrategy?: string; // High-level branch/specialization strategy
  milestones: MilestoneNode[];
  lateralSwitches: LateralSwitchPoint[];
  metrics: StreamPathwayMetrics;
  pros: string[];
  cons: string[];
  entryJobRoles: string[];
  fiveYearTrajectory: string;
  salarySpectrumLpa: {
    entryMin: number;
    entryMax: number;
    experiencedPeak: number;
  };
}

export interface CareerRole {
  id: string;
  title: string;
  slug: string;
  domainId: DomainId;
  domainName: string;
  shortDescription: string;
  holisticInsight: string;
  recommendedDegreeBranch?: string; // E.g. "B.Tech in ECE / Microelectronics" for VLSI
  iconName: string;
  tags: string[];
  marketDemand: 'STEADY' | 'HIGH' | 'EXPLOSIVE';
  streams: Record<StreamType, StreamPathway>;
}

export interface CareerDomain {
  id: DomainId;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  accentColor: string;
  popularRoles: { title: string; slug: string; id: string }[];
}

export interface StreamQuizQuestion {
  id: number;
  question: string;
  scenario: string;
  options: {
    label: string;
    description: string;
    streamAffinity: StreamType;
    scoreWeight: number;
  }[];
}
