import { GoogleGenAI } from '@google/genai';
import { CareerRole, StreamType } from '../types/pathway';
import { CareerRoleSchema } from './pathwaySchema';
import { CURATED_CAREER_PATHWAYS } from '../data/curatedPathways';

// Helper theme color presets
const STREAM_THEMES = {
  MPC: { primary: '#3b82f6', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400', glow: 'shadow-blue-500/20' },
  BiPC: { primary: '#10b981', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  MEC_CEC: { primary: '#f59e0b', border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400', glow: 'shadow-amber-500/20' },
  HEC: { primary: '#a855f7', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400', glow: 'shadow-purple-500/20' },
  POLYTECHNIC: { primary: '#06b6d4', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
  VOCATIONAL_GUILD: { primary: '#f43f5e', border: 'border-rose-500/30', bg: 'bg-rose-500/10', text: 'text-rose-400', glow: 'shadow-rose-500/20' }
};

/**
 * Generates an intelligent multi-stream pathway for any arbitrary or emerging career passion
 * using Google Gemini API or intelligent synthetic heuristics.
 */
export async function generateDynamicCareerPathway(query: string, apiKey?: string): Promise<CareerRole> {
  const normalizedQuery = query.trim().toLowerCase();

  // 1. Check exact or close match in curated database first
  const existingKey = Object.keys(CURATED_CAREER_PATHWAYS).find(key => {
    const role = CURATED_CAREER_PATHWAYS[key];
    return role.title.toLowerCase().includes(normalizedQuery) ||
           role.slug.toLowerCase().includes(normalizedQuery) ||
           role.tags.some(t => t.toLowerCase().includes(normalizedQuery));
  });

  if (existingKey) {
    return CURATED_CAREER_PATHWAYS[existingKey];
  }

  // 2. If Gemini API Key is available, invoke live Gemini model with structured JSON Schema
  if (apiKey && apiKey.length > 10) {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are the lead academic architect for the Indian National Multi-Stream Career Engine.
Analyze the user's passion/dream role: "${query}".
Generate a complete, rigorous, and authentic multi-stream educational roadmap in strict JSON format.

You MUST map out how this goal can be reached through ALL 6 post-10th streams in India:
1. "MPC": Mathematics, Physics, Chemistry (Engineering/Computing/Acoustics/Tech)
2. "BiPC": Biology, Physics, Chemistry (Healthcare/Biotech/Natural Sciences/Genomics)
3. "MEC_CEC": Mathematics/Civics, Economics, Commerce (Finance/Strategy/Management)
4. "HEC": Humanities, Economics, Civics (Civil Services/Law/Creative Arts/Literature)
5. "POLYTECHNIC": 3-Year Technical Diploma via POLYCET -> lateral switch via ECET or direct junior industry entry
6. "VOCATIONAL_GUILD": Direct portfolio/auditions/apprenticeship/NSQF certifications

For each stream include:
- Realistic entrance exams (e.g. JEE, NEET, CUET, CLAT, FTII JET, NSD, UCEED, POLYCET, ECET, IPMAT, NCHMCT)
- 4 to 5 chronological milestones from 10th standard, intermediate stream, exams, degrees to industry outcome
- Lateral switch points if applicable
- Pros, cons, metrics (time to job, financial investment, competition level, flexibility score 1-10, practical ratio 1-10)
- Starting salary spectrum (INR Lakhs Per Annum)

Output pure JSON matching the CareerRole schema without markdown ticks if possible.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      if (response.text) {
        const rawJson = JSON.parse(response.text);
        const parsed = CareerRoleSchema.safeParse(rawJson);
        if (parsed.success) {
          return parsed.data as CareerRole;
        }
      }
    } catch (e) {
      console.warn('Gemini API call fell back to local synthesis:', e);
    }
  }

  // 3. Robust Dynamic Local Synthesis Fallback
  return createSynthesizedPathway(query);
}

/**
 * Intelligent Local Synthesis Engine: Constructs a valid, highly detailed multi-stream pathway
 * for novel queries when offline or without API key.
 */
function createSynthesizedPathway(query: string): CareerRole {
  const cleanTitle = query
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
  const slug = query.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const roleId = `custom_${slug}`;

  const createStream = (streamType: StreamType, streamName: string, desc: string, badge: string, philosophy: string, metrics: any, entryRoles: string[]) => ({
    streamType,
    streamName,
    streamShortDesc: desc,
    badgeLabel: badge,
    themeColor: STREAM_THEMES[streamType],
    approachPhilosophy: philosophy,
    metrics,
    pros: [
      `Deep foundational mastery tailored for ${cleanTitle} through the ${streamType} curriculum`,
      `Nationally recognized educational credentials with flexible higher education gateways`,
      `Balanced blend of practical domain competencies and theoretical acumen`
    ],
    cons: [
      `Requires dedicated preparation for junction entrance exams`,
      `Competitive selection for premier national universities and institutes`
    ],
    entryJobRoles: entryRoles,
    fiveYearTrajectory: `Lead ${cleanTitle} / Senior Domain Specialist (₹15L - ₹65L+).`,
    salarySpectrumLpa: { entryMin: 4.5, entryMax: 10, experiencedPeak: 75 },
    lateralSwitches: streamType === 'POLYTECHNIC' ? [
      {
        id: `lat_${streamType}`,
        title: 'Lateral Entry via State ECET / University Bridge',
        fromStage: 'After 3-Year Technical Diploma',
        toTarget: '2nd Year Degree / Specialized Guild',
        bridgeExamOrMechanism: 'State ECET / University Lateral Admission',
        description: 'Direct lateral entry into 2nd year of university degree with full diploma recognition.',
        durationAdjustment: 'Save 1 Year',
        keyBenefit: 'Combines hands-on technician proficiency with a full accredited bachelor’s degree.'
      }
    ] : [],
    milestones: [
      {
        id: `m_${streamType}_1`,
        phase: 'PHASE_0_10TH' as const,
        phaseLabel: '10th Standard Gateway',
        title: '10th Board Completion & Core Foundation',
        subtitle: `Build fundamental aptitude in science, arts, or commerce for ${cleanTitle}`,
        description: 'Pass 10th standard board exams with minimum 55% marks, actively exploring foundational concepts.',
        mandatoryEligibility: ['Pass 10th Board (State/CBSE/ICSE) with min 50%'],
        examGateways: streamType === 'POLYTECHNIC' ? ['POLYCET_DIPLOMA'] : [],
        recommendedInstitutions: ['Recognized Secondary Schools'],
        skillsToAcquire: ['Foundational Domain Literacy', 'Logical Reasoning & Problem Solving', 'Digital Research Tools'],
        estimatedCostRange: 'Nominal Board Fees',
        keyActionTip: `Start reading introductory literature and case studies about ${cleanTitle} early.`
      },
      {
        id: `m_${streamType}_2`,
        phase: 'PHASE_1_STREAM' as const,
        phaseLabel: streamType === 'POLYTECHNIC' ? '3-Year Diploma' : `10+2 Intermediate (${streamType})`,
        title: streamType === 'POLYTECHNIC' ? '3-Year Polytechnic Technical Diploma' : `10+2 Intermediate in ${streamType}`,
        subtitle: `Rigorous academic grounding with targeted junction exam preparation for ${cleanTitle}`,
        durationYears: streamType === 'POLYTECHNIC' ? '3 Years' : '2 Years',
        description: `Master core ${streamType} subjects while building a specialized digital portfolio.`,
        mandatoryEligibility: ['Pass 10th Board with eligible stream criteria'],
        examGateways: streamType === 'MPC' ? ['JEE_MAIN', 'UCEED'] : streamType === 'BiPC' ? ['CUET_UG', 'NEET_UG'] : streamType === 'MEC_CEC' ? ['CUET_UG', 'IPMAT_INDORE'] : streamType === 'HEC' ? ['CUET_UG', 'CLAT_UG'] : [],
        recommendedInstitutions: ['Top Junior Colleges / State Polytechnic Institutes'],
        skillsToAcquire: ['Advanced Domain Tools', 'Analytical Modeling', 'Project Documentation'],
        estimatedCostRange: '₹25,000 - ₹90,000',
        keyActionTip: 'Maintain high academic grades while participating in state and national student hackathons/exhibitions.'
      },
      {
        id: `m_${streamType}_3`,
        phase: 'PHASE_3_DEGREE' as const,
        phaseLabel: 'Undergraduate Degree / Specialization',
        title: `Bachelor’s Degree / Advanced Diploma for ${cleanTitle}`,
        subtitle: 'Comprehensive higher education with industry internships and live capstones',
        durationYears: '3 to 4 Years',
        description: 'Complete undergraduate education with specialization electives, laboratory projects, and corporate internships.',
        mandatoryEligibility: ['Admission via Entrance Exam or University Merit'],
        examGateways: [],
        recommendedInstitutions: ['Premier Central Universities, IITs, NLUs, or State Universities'],
        skillsToAcquire: ['Industry Standards & Compliance', 'Team Leadership & Agile Execution', 'Advanced Domain Technologies'],
        estimatedCostRange: '₹1.5L - ₹8L',
        keyActionTip: 'Publish at least 2 capstone projects on GitHub / Behance / LinkedIn to attract recruiter outreach.'
      },
      {
        id: `m_${streamType}_4`,
        phase: 'PHASE_5_OUTCOME' as const,
        phaseLabel: 'Industry Outcomes & Career Launch',
        title: `Professional ${cleanTitle} Career Launch`,
        subtitle: 'Transitioning from entry-level specialist to lead practitioner and industry innovator',
        description: `Join leading organizations, research labs, or studios as a recognized ${cleanTitle}.`,
        mandatoryEligibility: ['Accredited degree / diploma and verified portfolio reel'],
        examGateways: [],
        recommendedInstitutions: ['Leading Industry Enterprises, Studios, Startups & Research Centers'],
        skillsToAcquire: ['Strategic Roadmap Planning', 'Mentorship & Cross-Functional Direction', 'Intellectual Property Creation'],
        estimatedCostRange: 'Zero (Earning & Growth Phase)',
        keyActionTip: `Continuously update your skills with emerging AI tools and global certifications in ${cleanTitle}.`
      }
    ]
  });

  return {
    id: roleId,
    title: cleanTitle,
    slug,
    domainId: 'stem_computing_robotics',
    domainName: 'Emerging & Interdisciplinary Domain',
    shortDescription: `Pioneer modern practices, strategy, and technical execution as a visionary ${cleanTitle}.`,
    holisticInsight: `${cleanTitle} is accessible across multiple educational routes: engineering/tech (MPC), natural sciences (BiPC), commercial strategy (MEC/CEC), public policy/humanities (HEC), hands-on technical diploma (Polytechnic), or direct guild apprenticeship.`,
    iconName: 'Sparkles',
    tags: [cleanTitle, 'Multi-Stream', 'Career Pathway', 'Indian Education', 'Future Skills'],
    marketDemand: 'HIGH',
    streams: {
      MPC: createStream(
        'MPC',
        'Mathematical & Technological Route (MPC)',
        'Computational, quantitative & technological grounding',
        'Technical & Engineering Focus',
        `Approach ${cleanTitle} through deep quantitative analysis, physics, software engineering, and technological infrastructure.`,
        { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 10, practicalToTheoryRatio: 7 },
        [`Associate ${cleanTitle}`, 'Technical Specialist', 'Systems Engineer']
      ),
      BiPC: createStream(
        'BiPC',
        'Life Sciences & Natural Systems Route (BiPC)',
        'Biological, environmental & human-centered systems',
        'Biotech & Life Sciences Focus',
        `Approach ${cleanTitle} through biological systems, human physiology, natural sciences, and environmental factors.`,
        { timeToFirstJobYears: 4.5, financialInvestment: 'MODERATE', competitionLevel: 'MODERATE', flexibilityScore: 8, practicalToTheoryRatio: 8 },
        [`Research ${cleanTitle}`, 'Life Sciences Specialist', 'Bio-Consultant']
      ),
      MEC_CEC: createStream(
        'MEC_CEC',
        'Commerce, Strategy & Economics Route (MEC)',
        'Market dynamics, financial modeling & corporate strategy',
        'Commercial & Strategy Focus',
        `Approach ${cleanTitle} through commercial strategy, financial economics, market analysis, and venture leadership.`,
        { timeToFirstJobYears: 3.5, financialInvestment: 'MODERATE', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 7 },
        [`Strategic ${cleanTitle}`, 'Operations Manager', 'Business Analyst']
      ),
      HEC: createStream(
        'HEC',
        'Humanities, Law & Public Policy Route (HEC)',
        'Societal governance, critical discourse, media & ethics',
        'Humanities & Policy Focus',
        `Approach ${cleanTitle} through human behavior, cultural narrative, public policy, and creative expression.`,
        { timeToFirstJobYears: 4, financialInvestment: 'LOW', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 8 },
        [`Creative ${cleanTitle}`, 'Policy Advisor', 'Communications Lead']
      ),
      POLYTECHNIC: createStream(
        'POLYTECHNIC',
        '3-Year Technical Polytechnic Diploma Route',
        'Direct hands-on engineering mastery via POLYCET -> ECET',
        'Fast Practical Technical Entry',
        `Direct applied workshop mastery right after 10th via POLYCET, with lateral entry option to 2nd year university degrees via ECET.`,
        { timeToFirstJobYears: 3, financialInvestment: 'LOW', competitionLevel: 'LOW', flexibilityScore: 8, practicalToTheoryRatio: 10 },
        [`Junior ${cleanTitle}`, 'Technical Associate', 'Field Operations Specialist']
      ),
      VOCATIONAL_GUILD: createStream(
        'VOCATIONAL_GUILD',
        'Direct Apprenticeship & Guild Route',
        'Self-taught portfolio, NSQF certifications & online mastery',
        'Independent Creator & Guild Entry',
        `Fast-track direct entry through independent online creation, open-source projects, and industry mentorships.`,
        { timeToFirstJobYears: 2, financialInvestment: 'LOW', competitionLevel: 'HIGH', flexibilityScore: 8, practicalToTheoryRatio: 10 },
        [`Independent ${cleanTitle}`, 'Freelance Specialist', 'Digital Guild Contributor']
      )
    }
  };
}
