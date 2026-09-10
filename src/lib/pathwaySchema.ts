import { z } from 'zod';

export const CompetitionLevelSchema = z.enum(['LOW', 'MODERATE', 'HIGH', 'VERY_HIGH', 'EXTREME']);
export const InvestmentLevelSchema = z.enum(['FREE_SCHOLARSHIP', 'LOW', 'MODERATE', 'HIGH', 'PREMIUM']);
export const StreamTypeSchema = z.enum(['MPC', 'BiPC', 'MEC_CEC', 'HEC', 'POLYTECHNIC', 'VOCATIONAL_GUILD']);
export const ExamLevelSchema = z.enum(['10TH', '12TH', 'LATERAL', 'GRADUATE', 'POST_GRAD_JOB']);

export const ExamGatewaySchema = z.object({
  id: z.string(),
  name: z.string(),
  fullName: z.string(),
  conductingBody: z.string(),
  targetLevel: ExamLevelSchema,
  category: z.string(),
  eligibility: z.string(),
  examPattern: z.string(),
  annualApplicants: z.string(),
  acceptanceRate: z.string(),
  competitionLevel: CompetitionLevelSchema,
  syllabusHighlights: z.array(z.string()),
  keyDatesInfo: z.string(),
  officialUrl: z.string().optional()
});

export const MilestoneNodeSchema = z.object({
  id: z.string(),
  phase: z.enum([
    'PHASE_0_10TH',
    'PHASE_1_STREAM',
    'PHASE_2_EXAMS',
    'PHASE_3_DEGREE',
    'PHASE_4_LATERAL',
    'PHASE_5_OUTCOME',
    'PHASE_POST_GRAD_RECRUITMENT'
  ]),
  phaseLabel: z.string(),
  title: z.string(),
  subtitle: z.string(),
  durationYears: z.string().optional(),
  description: z.string(),
  branchOrSpecializationToChoose: z.string().optional(),
  mandatoryEligibility: z.array(z.string()),
  examGateways: z.array(z.string()),
  postDegreeExams: z.array(z.string()).optional(),
  recommendedInstitutions: z.array(z.string()),
  skillsToAcquire: z.array(z.string()),
  estimatedCostRange: z.string(),
  keyActionTip: z.string()
});

export const LateralSwitchPointSchema = z.object({
  id: z.string(),
  title: z.string(),
  fromStage: z.string(),
  toTarget: z.string(),
  bridgeExamOrMechanism: z.string(),
  description: z.string(),
  durationAdjustment: z.string(),
  keyBenefit: z.string()
});

export const StreamPathwayMetricsSchema = z.object({
  timeToFirstJobYears: z.number(),
  financialInvestment: InvestmentLevelSchema,
  competitionLevel: CompetitionLevelSchema,
  flexibilityScore: z.number().min(1).max(10),
  practicalToTheoryRatio: z.number().min(1).max(10)
});

export const StreamPathwaySchema = z.object({
  streamType: StreamTypeSchema,
  streamName: z.string(),
  streamShortDesc: z.string(),
  badgeLabel: z.string(),
  themeColor: z.object({
    primary: z.string(),
    border: z.string(),
    bg: z.string(),
    text: z.string(),
    glow: z.string()
  }),
  approachPhilosophy: z.string(),
  branchSelectionStrategy: z.string().optional(),
  milestones: z.array(MilestoneNodeSchema),
  lateralSwitches: z.array(LateralSwitchPointSchema),
  metrics: StreamPathwayMetricsSchema,
  pros: z.array(z.string()),
  cons: z.array(z.string()),
  entryJobRoles: z.array(z.string()),
  fiveYearTrajectory: z.string(),
  salarySpectrumLpa: z.object({
    entryMin: z.number(),
    entryMax: z.number(),
    experiencedPeak: z.number()
  })
});

export const CareerRoleSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  domainId: z.string(),
  domainName: z.string(),
  shortDescription: z.string(),
  holisticInsight: z.string(),
  recommendedDegreeBranch: z.string().optional(),
  iconName: z.string(),
  tags: z.array(z.string()),
  marketDemand: z.enum(['STEADY', 'HIGH', 'EXPLOSIVE']),
  streams: z.record(z.string(), StreamPathwaySchema)
});
