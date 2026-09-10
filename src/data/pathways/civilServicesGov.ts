import { CareerRole } from '../../types/pathway';

export const CIVIL_SERVICES_PATHWAY: CareerRole = {
  id: 'civil_services_officer',
  title: 'Civil Services Officer (IAS / IPS / State PSC Groups)',
  slug: 'civil-services-officer',
  domainId: 'law_civil_services',
  domainName: 'Public Policy, Law & Civil Governance',
  shortDescription: 'Formulate national policy, administer districts as District Collector / Police Superintendent, and lead state & central executive governance.',
  holisticInsight: 'Any graduate in India is eligible for UPSC Civil Services and State PSCs. HEC provides the strongest direct academic overlap (History, Polity, Economics, Geography), MPC provides high quantitative and logical edge in CSAT and optional subjects (Maths/Physics/Engineering), BiPC leads to medical officers and IFS (Indian Forest Service), MEC supports Economic Services and Taxation, while Polytechnic -> Lateral B.Tech or B.A. allows early technician graduates to compete equally.',
  recommendedDegreeBranch: 'B.A. (History, Political Science, Public Admin), B.Tech, or B.Sc with chosen UPSC Optional Subject',
  iconName: 'Scale',
  tags: ['IAS', 'IPS', 'UPSC', 'Civils', 'APPSC', 'TSPSC', 'Group 1', 'Group 2', 'Public Admin', 'District Collector'],
  marketDemand: 'HIGH',
  streams: {
    HEC: {
      streamType: 'HEC',
      streamName: 'Humanities, History & Political Science Route',
      streamShortDesc: '10+2 HEC -> B.A. (Pol Science / History / Economics) -> UPSC CSE / State Groups 1 & 2',
      badgeLabel: 'Direct Syllabus Alignment Track',
      themeColor: {
        primary: '#a855f7',
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        glow: 'shadow-purple-500/20'
      },
      approachPhilosophy: 'Maximum syllabus synergy: 80% of UPSC General Studies (GS Papers I, II, III, IV) and State PSC Groups overlaps directly with standard college humanities courses in Indian Polity, Modern History, Economics, and Public Administration.',
      branchSelectionStrategy: 'In Degree, choose B.A. (Hons) in Political Science, History, Economics, or Public Administration at top central/state universities. This simultaneously covers graduation and the 500-mark UPSC Optional Subject.',
      metrics: {
        timeToFirstJobYears: 4,
        financialInvestment: 'LOW',
        competitionLevel: 'EXTREME',
        flexibilityScore: 10,
        practicalToTheoryRatio: 7
      },
      pros: [
        'Highest conceptual overlap with UPSC Prelims & Mains General Studies papers',
        'Sufficient study time during graduation to complete NCERTs and standard reference books (Laxmikanth, Spectrum, Ramesh Singh)',
        'Affordable subsidized government university tuition with hostel access'
      ],
      cons: [
        'High discipline required to maintain daily current affairs newspaper reading and answer-writing practice'
      ],
      entryJobRoles: [
        'Assistant Collector / Sub-Collector (IAS)',
        'Assistant Superintendent of Police - ASP (IPS)',
        'Deputy Collector / RDO (State Group 1)',
        'Commercial Tax Officer (State Group 1)'
      ],
      fiveYearTrajectory: 'District Magistrate / Collector / Superintendent of Police - SP (₹12L - ₹25L LPA + Official Bungalow, Security & Vehicles).',
      salarySpectrumLpa: {
        entryMin: 9.0,
        entryMax: 16.0,
        experiencedPeak: 30.0
      },
      lateralSwitches: [
        {
          id: 'lat_civils_groups',
          title: 'Simultaneous State PSC Group 1 & Group 2 Exams',
          fromStage: 'Final Year B.A. / Graduate',
          toTarget: 'State Executive Services (Deputy Collector / DSP / Tehsildar)',
          bridgeExamOrMechanism: 'State Public Service Commission Groups Examination (APPSC/TSPSC/UPPSC)',
          description: 'UPSC preparation automatically covers 85% of State PSC Group 1 & Group 2 syllabus, providing high-probability executive job security.',
          durationAdjustment: 'Parallel Target',
          keyBenefit: 'Guarantees Class-1 Gazetted State Officer appointment even if central UPSC cutoff is missed by narrow margins.'
        },
        {
          id: 'lat_civils_ssc',
          title: 'SSC CGL Central Government Inspector Posts',
          fromStage: 'Graduate Degree',
          toTarget: 'Income Tax Inspector / GST Inspector / MEA Assistant Section Officer',
          bridgeExamOrMechanism: 'Staff Selection Commission (SSC CGL)',
          description: 'Crack SSC CGL to secure a prestigious central government officer post with fixed hours and promotional avenues.',
          durationAdjustment: 'Immediate Recruitment',
          keyBenefit: 'Provides permanent central government employment with rapid career stability.'
        }
      ],
      milestones: [
        {
          id: 'm_civils_hec_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Exam Foundation',
          subtitle: 'Read NCERT social sciences and develop regular newspaper reading habit (The Hindu / Indian Express)',
          description: 'Pass 10th standard with strong grasp of Indian history, geography, and civic governance.',
          mandatoryEligibility: ['Pass 10th Board with min 50%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools'],
          skillsToAcquire: ['Newspaper Editorial Comprehension', 'Basic Map Reading & Geography', 'Debate & Essay Writing'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Read Class 6-10 NCERT Social Science textbooks thoroughly and summarize current events weekly.'
        },
        {
          id: 'm_civils_hec_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (HEC)',
          title: '10+2 Intermediate in HEC (History, Economics, Civics/Pol Science)',
          subtitle: 'Deep dive into Indian Constitution, Freedom Struggle, and Macroeconomics',
          durationYears: '2 Years',
          description: 'Master Class 11-12 NCERTs in Political Theory, Indian Constitution at Work, Themes in Indian History, and Micro/Macroeconomics.',
          mandatoryEligibility: ['Class 12 in any stream with min 50%'],
          examGateways: ['CUET_UG'],
          recommendedInstitutions: ['Top Junior Colleges / Senior Secondary Schools'],
          skillsToAcquire: ['Constitutional Articles & Amendments', 'Economic Growth vs Development Indicators', 'Critical Essay Structuring'],
          estimatedCostRange: '₹20,000 - ₹50,000',
          keyActionTip: 'Target CUET UG with high score to secure admission in top central universities like Delhi University (Hindu, St. Stephens, Miranda House).'
        },
        {
          id: 'm_civils_hec_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Degree (B.A.)',
          title: 'B.A. (Hons) in Political Science / History / Public Administration',
          subtitle: 'Systematic 3-Year UPSC & State PSC Syllabus Completion and Daily Answer Writing',
          durationYears: '3 Years',
          description: 'Complete undergraduate degree while systematically finishing GS-1 (History/Geography), GS-2 (Polity/Governance), GS-3 (Economy/Environment/Security), and GS-4 (Ethics).',
          branchOrSpecializationToChoose: 'MUST Choose: B.A. in Political Science, History, Public Admin, or Economics.',
          mandatoryEligibility: ['Enrolled in recognized Bachelor’s Degree (Any discipline)'],
          examGateways: [],
          postDegreeExams: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS', 'SSC_CGL'],
          recommendedInstitutions: ['Delhi University', 'Jawaharlal Nehru University (JNU)', 'University of Hyderabad', 'Loyola College Chennai'],
          skillsToAcquire: ['150-250 Word Mains Answer Writing Speed', 'Ethics Case Study Analysis', 'Economic Survey & Union Budget Summaries'],
          estimatedCostRange: '₹30,000 - ₹1.2L',
          keyActionTip: 'Solve past 10 years UPSC Prelims and Mains papers and write 2 GS answers daily in under 15 minutes.'
        },
        {
          id: 'm_civils_hec_4',
          phase: 'PHASE_POST_GRAD_RECRUITMENT',
          phaseLabel: 'Post-Graduation / UPSC & State PSC Examination',
          title: 'UPSC Civil Services Examination & State PSC Group 1 Recruitment',
          subtitle: 'Appear for Prelims, Mains, and Personality Test (Interview)',
          durationYears: '1 Year Cycle',
          description: 'Clear Prelims (GS-I cutoff ~85-95 marks, CSAT > 66 marks) -> Write 9 Mains descriptive papers -> Score high in UPSC Interview (Dholpur House, New Delhi).',
          mandatoryEligibility: ['Bachelor’s degree in any discipline. Age: 21 to 32 years.'],
          examGateways: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS', 'SSC_CGL'],
          postDegreeExams: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS', 'SSC_CGL'],
          recommendedInstitutions: ['LBSNAA Mussoorie (for IAS)', 'SVP National Police Academy Hyderabad (for IPS)'],
          skillsToAcquire: ['Interpersonal Poise & Administrative Temperament', 'Balanced Non-Biased Decision Making', 'Crisis Management & Crisis Communications'],
          estimatedCostRange: '₹100 Exam Fee',
          keyActionTip: 'Focus intensely on Optional Subject (500 marks) and Essay (250 marks) — these two papers decide your top-100 rank and state cadre allotment.'
        },
        {
          id: 'm_civils_hec_5',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Public Governance Leadership',
          title: 'District Collector / Superintendent of Police / Joint Secretary to Govt',
          subtitle: 'Leading district administration, maintaining law and order, and steering welfare policies',
          description: 'Transform lives of millions through district development, infrastructure rollouts, public healthcare, and disaster management.',
          mandatoryEligibility: ['Presidential Commission as an All-India Service Officer (IAS/IPS/IFS)'],
          examGateways: [],
          recommendedInstitutions: ['LBSNAA Mussoorie', 'Government of India Ministries'],
          skillsToAcquire: ['Public Policy Formulation', 'Public Expenditure Governance', 'Crisis Disaster Management'],
          estimatedCostRange: 'Zero (Prestigious Government Service)',
          keyActionTip: 'Serve with constitutional integrity, empathy, and transparent public accountability.'
        }
      ]
    },
    MPC: {
      streamType: 'MPC',
      streamName: 'Engineering & Technology to Civil Services Route',
      streamShortDesc: '10+2 MPC -> B.Tech (ECE/CSE/Civil/Mech) -> UPSC CSE (High Success Rate for Engineers)',
      badgeLabel: 'High Analytical & CSAT Edge',
      themeColor: {
        primary: '#3b82f6',
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        glow: 'shadow-blue-500/20'
      },
      approachPhilosophy: 'Engineers consistently form >60% of selected IAS/IPS officers due to exceptional CSAT aptitude, structured diagrammatic answer-writing, and strong technical backup options.',
      branchSelectionStrategy: 'In B.Tech, select core engineering (ECE/CSE/Civil/Mech) or Geography/Sociology as UPSC optional. Prepare GS during 3rd and 4th year.',
      metrics: {
        timeToFirstJobYears: 4.5,
        financialInvestment: 'MODERATE',
        competitionLevel: 'EXTREME',
        flexibilityScore: 10,
        practicalToTheoryRatio: 8
      },
      pros: [
        'Zero difficulty in qualifying UPSC CSAT (Paper II) due to high mathematical aptitude',
        'Strong corporate tech placement backup in case civil services requires multiple attempts',
        'Eligibility for Indian Forest Service (IFS) and Indian Engineering Services (IES)'
      ],
      cons: [
        'Demanding engineering coursework requires dedicated weekend time management for GS'
      ],
      entryJobRoles: ['Assistant Collector (IAS)', 'Assistant Superintendent of Police (IPS)', 'Indian Forest Service Officer (IFS)'],
      fiveYearTrajectory: 'District Magistrate / Deputy Commissioner (₹12L - ₹25L LPA).',
      salarySpectrumLpa: { entryMin: 9.0, entryMax: 16.0, experiencedPeak: 30.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_civils_mpc_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Completion',
          subtitle: 'Strong foundation in mathematics, physical sciences, and national affairs',
          description: 'Pass 10th standard with strong analytical foundation.',
          mandatoryEligibility: ['Pass 10th Board with min 60%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools'],
          skillsToAcquire: ['Logical Reasoning', 'Current Affairs Awareness'],
          estimatedCostRange: 'Nominal',
          keyActionTip: 'Build an early habit of reading editorial columns in leading national dailies.'
        },
        {
          id: 'm_civils_mpc_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (MPC)',
          title: '10+2 Intermediate in MPC (Maths, Physics, Chemistry)',
          subtitle: 'Prepare for JEE / State CET while maintaining general knowledge awareness',
          durationYears: '2 Years',
          description: 'Master 10+2 PCM to secure admission into premier engineering colleges (IITs, NITs, BITS, State Universities).',
          mandatoryEligibility: ['Class 12 with PCM min 75% for JEE'],
          examGateways: ['JEE_MAIN', 'JEE_ADVANCED', 'BITSAT'],
          recommendedInstitutions: ['Top Junior Colleges'],
          skillsToAcquire: ['Advanced Quantitative Problem Solving', 'Scientific Temperament'],
          estimatedCostRange: '₹30,000 - ₹1.5L',
          keyActionTip: 'Keep a diary of key national developments and geopolitical events during 12th.'
        },
        {
          id: 'm_civils_mpc_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Engineering (B.Tech)',
          title: 'B.Tech in Any Engineering Branch + UPSC GS Prep',
          subtitle: 'Complete 4-Year B.Tech while finishing UPSC Prelims & Mains GS Syllabus',
          durationYears: '4 Years',
          description: 'Maintain healthy engineering CGPA while dedicating 3-4 hours daily from 2nd year onward to NCERTs, Indian Polity (Laxmikanth), Modern History, and current affairs.',
          branchOrSpecializationToChoose: 'Choose: B.Tech in ECE, CSE, Civil, Mechanical, or Electrical Engineering.',
          mandatoryEligibility: ['Graduation in Engineering from recognized university'],
          examGateways: [],
          postDegreeExams: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS', 'GATE_EC', 'SSC_CGL'],
          recommendedInstitutions: ['IITs', 'NITs', 'BITS Pilani', 'State Engineering Colleges'],
          skillsToAcquire: ['Structured Diagrammatic Answer Writing', 'Optional Subject Mastery (Anthropology / PSIR / Geography / Sociology)', 'CSAT Full Marks Accuracy'],
          estimatedCostRange: '₹3L - ₹10L',
          keyActionTip: 'Attempt 50+ full-length Prelims mock test series in the 6 months preceding graduation.'
        },
        {
          id: 'm_civils_mpc_4',
          phase: 'PHASE_POST_GRAD_RECRUITMENT',
          phaseLabel: 'UPSC Recruitment',
          title: 'UPSC CSE Examination & All-India Merit Rank',
          subtitle: 'Crack UPSC Prelims, Mains (1750 marks), and Interview (275 marks)',
          durationYears: '1 Year',
          description: 'Appear immediately upon graduation to secure an All-India Rank (AIR) in the top 100 for IAS or IPS.',
          mandatoryEligibility: ['Engineering Degree and minimum age 21 years'],
          examGateways: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS', 'CDS_EXAM'],
          postDegreeExams: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS', 'CDS_EXAM'],
          recommendedInstitutions: ['LBSNAA Mussoorie', 'SVPNPA Hyderabad'],
          skillsToAcquire: ['Administrative Decision Frameworks', 'Interview Poise & Confidence'],
          estimatedCostRange: 'Nominal Exam Fees',
          keyActionTip: 'Use flowcharts and state diagrams in Mains GS papers to score 10-15 bonus marks per paper.'
        },
        {
          id: 'm_civils_mpc_5',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Public Governance',
          title: 'District Magistrate / Police Superintendent / Smart Cities Mission Director',
          subtitle: 'Pioneering technology-driven governance, digital public infrastructure, and administrative reforms',
          description: 'Leverage technical background to modernize public distribution systems, traffic intelligence, and e-governance portals.',
          mandatoryEligibility: ['Commissioned Civil Services Officer'],
          examGateways: [],
          recommendedInstitutions: ['Government of India'],
          skillsToAcquire: ['Tech-Enabled Public Administration', 'Disaster Relief Leadership'],
          estimatedCostRange: 'Zero (High Prestige Public Service)',
          keyActionTip: 'Champion digital transparency and citizen-centric governance.'
        }
      ]
    },
    BiPC: {
      streamType: 'BiPC',
      streamName: 'Life Sciences & Indian Forest Service (IFS) / Public Health Route',
      streamShortDesc: '10+2 BiPC -> MBBS / B.Sc Forestry / Biotech -> UPSC CSE & Indian Forest Service (IFS)',
      badgeLabel: 'Public Health & Forestry Track',
      themeColor: {
        primary: '#10b981',
        border: 'border-emerald-500/30',
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
        glow: 'shadow-emerald-500/20'
      },
      approachPhilosophy: 'Lead public healthcare systems as doctor-administrators, or protect India’s biodiversity as an Indian Forest Service (IFS) officer managing national parks, wildlife sanctuaries, and environmental policy.',
      branchSelectionStrategy: 'In Degree, pursue MBBS, B.Sc Forestry, B.Sc Agriculture, or Zoology. This grants exclusive eligibility for the Indian Forest Service (IFS) exam alongside UPSC CSE.',
      metrics: {
        timeToFirstJobYears: 5,
        financialInvestment: 'LOW',
        competitionLevel: 'EXTREME',
        flexibilityScore: 9,
        practicalToTheoryRatio: 8
      },
      pros: [
        'Exclusive eligibility for Indian Forest Service (IFS) which requires Science/Engineering degree',
        'Doctor-IAS officers have unmatched authority directing National Health Missions and pandemic responses'
      ],
      cons: [
        'MBBS course load is intense, requiring strategic scheduling during internship'
      ],
      entryJobRoles: ['Divisional Forest Officer - DFO (IFS)', 'District Medical Officer / IAS', 'Chief Wildlife Warden'],
      fiveYearTrajectory: 'Conservator of Forests / Principal Secretary Health (₹14L - ₹28L LPA).',
      salarySpectrumLpa: { entryMin: 9.0, entryMax: 16.0, experiencedPeak: 30.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_civils_bipc_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Exam',
          subtitle: 'Strong foundation in biology, environmental conservation, and social sciences',
          description: 'Pass 10th standard with strong interest in environmental ecology.',
          mandatoryEligibility: ['Pass 10th with min 50%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools'],
          skillsToAcquire: ['Ecology Basics', 'General Awareness'],
          estimatedCostRange: 'Nominal',
          keyActionTip: 'Read the Wildlife Protection Act and forest conservation summaries.'
        },
        {
          id: 'm_civils_bipc_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (BiPC)',
          title: '10+2 Intermediate in BiPC (Biology, Physics, Chemistry)',
          subtitle: 'Botany, Zoology, Environmental Chemistry, and entrance exam preparation',
          durationYears: '2 Years',
          description: 'Master PCB to qualify for MBBS or B.Sc Forestry/Agriculture degrees.',
          mandatoryEligibility: ['Class 12 with PCB min 50%'],
          examGateways: ['NEET_UG', 'CUET_UG'],
          recommendedInstitutions: ['Junior Colleges'],
          skillsToAcquire: ['Plant & Animal Taxonomy', 'Ecological Dynamics'],
          estimatedCostRange: '₹30,000 - ₹80,000',
          keyActionTip: 'Target CUET UG for top Forestry / Agriculture universities (ICAR accredited) or NEET UG for MBBS.'
        },
        {
          id: 'm_civils_bipc_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Degree',
          title: 'B.Sc in Forestry / Agriculture / Zoology or MBBS',
          subtitle: 'Degree completion with dedicated UPSC CSE & IFS preparation',
          durationYears: '3 to 5.5 Years',
          description: 'Study forest ecology, silviculture, and wildlife management while preparing GS and Forestry/Botany optional subjects.',
          branchOrSpecializationToChoose: 'Choose: B.Sc in Forestry, Agriculture, Zoology, or MBBS.',
          mandatoryEligibility: ['Bachelor’s degree in Science/Medicine'],
          examGateways: [],
          postDegreeExams: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS'],
          recommendedInstitutions: ['Forest Research Institute (FRI Dehradun)', 'Govt Medical Colleges', 'ICAR State Agricultural Universities'],
          skillsToAcquire: ['Silviculture & Wildlife Law', 'Environmental Impact Assessment (EIA)', 'GS Answer Writing'],
          estimatedCostRange: '₹40,000 - ₹2.5L',
          keyActionTip: 'Select Forestry and Agriculture as optional subjects for the Indian Forest Service (IFS) exam.'
        },
        {
          id: 'm_civils_bipc_4',
          phase: 'PHASE_POST_GRAD_RECRUITMENT',
          phaseLabel: 'UPSC CSE & IFS Examination',
          title: 'Indian Forest Service (IFS) & UPSC Civil Services Recruitment',
          subtitle: 'Written Mains and Walking Endurance Test / Interview',
          durationYears: '1 Year',
          description: 'Clear UPSC CSE Prelims (combined with IFS) -> Write IFS Mains (6 papers) -> Clear Walking Endurance Test (25 km for men, 14 km for women in 4 hours) -> Interview.',
          mandatoryEligibility: ['Bachelor’s degree in Science/Engineering/Agriculture'],
          examGateways: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS'],
          recommendedInstitutions: ['Indira Gandhi National Forest Academy (IGNFA Dehradun)'],
          skillsToAcquire: ['Wildlife Tracking & Anti-Poaching Tactics', 'Forest Rights Act Administration'],
          estimatedCostRange: 'Nominal Exam Fee',
          keyActionTip: 'Maintain physical endurance for the mandatory forest walking assessment.'
        },
        {
          id: 'm_civils_bipc_5',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Forestry & Environmental Governance',
          title: 'Chief Wildlife Warden / Principal Chief Conservator of Forests (PCCF)',
          subtitle: 'Guarding national wildlife reserves, tiger corridors, and environmental policy',
          description: 'Manage thousands of square kilometers of protected tiger reserves and direct eco-tourism and carbon sequestration initiatives.',
          mandatoryEligibility: ['Commissioned Indian Forest Service (IFS) Officer'],
          examGateways: [],
          recommendedInstitutions: ['Ministry of Environment, Forest & Climate Change (MoEFCC)'],
          skillsToAcquire: ['Eco-System Restoration', 'Global Biodiversity Treaty Negotiations'],
          estimatedCostRange: 'Zero (Prestigious All-India Service)',
          keyActionTip: 'Lead community-based wildlife conservation models empowering tribal forest dwellers.'
        }
      ]
    },
    MEC_CEC: {
      streamType: 'MEC_CEC',
      streamName: 'Commerce, Taxation & Economic Services Route',
      streamShortDesc: '10+2 MEC -> B.Com / B.A. Economics -> Indian Revenue Service (IRS) & RBI Grade B',
      badgeLabel: 'Taxation, Finance & Audit Track',
      themeColor: {
        primary: '#f59e0b',
        border: 'border-amber-500/30',
        bg: 'bg-amber-500/10',
        text: 'text-amber-400',
        glow: 'shadow-amber-500/20'
      },
      approachPhilosophy: 'Master macroeconomics, public finance, direct/indirect taxation, and corporate audits to become an Indian Revenue Service (IRS) officer, Indian Audit & Accounts Service (IAAS) officer, or RBI Grade B Director.',
      branchSelectionStrategy: 'In Degree, choose B.A. (Hons) in Economics or B.Com (Hons). Choose Economics or Commerce & Accountancy as UPSC Optional.',
      metrics: {
        timeToFirstJobYears: 4,
        financialInvestment: 'LOW',
        competitionLevel: 'EXTREME',
        flexibilityScore: 10,
        practicalToTheoryRatio: 8
      },
      pros: [
        'Direct mastery of GS-3 (Indian Economy, Fiscal Deficit, Banking System, Taxation Reforms)',
        'Parallel high-prestige options: RBI Grade B Officer (₹20L+ starting) and SEBI Grade A Officer'
      ],
      cons: [
        'Economics optional requires rigorous graphical and mathematical econometric modeling'
      ],
      entryJobRoles: ['Assistant Commissioner of Income Tax (IRS)', 'Assistant Commissioner of Central GST/Customs (IRS)', 'RBI Grade B Officer'],
      fiveYearTrajectory: 'Joint Commissioner of Income Tax / Director of Enforcement (₹12L - ₹26L LPA).',
      salarySpectrumLpa: { entryMin: 9.0, entryMax: 16.0, experiencedPeak: 30.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_civils_mec_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Completion',
          subtitle: 'Strong foundation in arithmetic, commerce, and current economic affairs',
          description: 'Pass 10th standard with strong numerical reasoning.',
          mandatoryEligibility: ['Pass 10th with min 50%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools'],
          skillsToAcquire: ['Financial Literacy', 'Basic Economic Indicators'],
          estimatedCostRange: 'Nominal',
          keyActionTip: 'Read the business page of leading newspapers to understand inflation, interest rates, and GDP.'
        },
        {
          id: 'm_civils_mec_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (MEC)',
          title: '10+2 Intermediate in MEC (Maths, Economics, Commerce)',
          subtitle: 'Microeconomics, Macroeconomics, Public Finance, and CUET UG prep',
          durationYears: '2 Years',
          description: 'Master National Income accounting, fiscal policy, balance of payments, and banking operations.',
          mandatoryEligibility: ['Class 12 in MEC with min 50%'],
          examGateways: ['CUET_UG'],
          recommendedInstitutions: ['Junior Commerce Colleges'],
          skillsToAcquire: ['Fiscal & Monetary Policy Analysis', 'Statistical Analysis'],
          estimatedCostRange: '₹25,000 - ₹65,000',
          keyActionTip: 'Crack CUET UG for top economics programs at SRCC, St. Stephen’s, or Loyola.'
        },
        {
          id: 'm_civils_mec_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Degree',
          title: 'B.A. (Hons) in Economics / B.Com (Hons) + UPSC Prep',
          subtitle: 'Comprehensive study of Indian Economy, Monetary Policy, and GS-3',
          durationYears: '3 Years',
          description: 'Master classical and Keynesian macroeconomics, international trade, and GST architecture while preparing for UPSC and RBI Grade B.',
          branchOrSpecializationToChoose: 'MUST Choose: B.A. Economics (Hons) or B.Com (Hons).',
          mandatoryEligibility: ['Bachelor’s degree from recognized university'],
          examGateways: [],
          postDegreeExams: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS', 'SSC_CGL'],
          recommendedInstitutions: ['Shri Ram College of Commerce (SRCC Delhi)', 'St. Xavier’s College Mumbai', 'Madras School of Economics'],
          skillsToAcquire: ['Union Budget & Economic Survey Analysis', 'Mains Economy Answer Writing', 'Tax Law Compliance Basics'],
          estimatedCostRange: '₹40,000 - ₹1.8L',
          keyActionTip: 'Solve past 10 years RBI Grade B Phase 1 and Phase 2 papers alongside UPSC preparation.'
        },
        {
          id: 'm_civils_mec_4',
          phase: 'PHASE_POST_GRAD_RECRUITMENT',
          phaseLabel: 'UPSC CSE & Central Recruitment',
          title: 'Indian Revenue Service (IRS) & Central Economic Services Appointment',
          subtitle: 'Commission as Assistant Commissioner of Income Tax / GST',
          durationYears: '1 Year',
          description: 'Crack UPSC CSE and join the National Academy of Direct Taxes (NADT Nagpur) for high-impact tax enforcement training.',
          mandatoryEligibility: ['Bachelor’s degree and minimum age 21 years'],
          examGateways: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS', 'SSC_CGL'],
          postDegreeExams: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS', 'SSC_CGL'],
          recommendedInstitutions: ['National Academy of Direct Taxes (NADT Nagpur)', 'NACIN Faridabad (Customs & GST)'],
          skillsToAcquire: ['Forensic Financial Investigation', 'International Tax Treaties & Anti-Money Laundering (PMLA)'],
          estimatedCostRange: 'Nominal Exam Fees',
          keyActionTip: 'Prepare for interview questions on cryptocurrency regulations, digital service taxes, and black money prevention.'
        },
        {
          id: 'm_civils_mec_5',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'National Economic Leadership',
          title: 'Chief Commissioner of Income Tax / Director of Financial Enforcement',
          subtitle: 'Leading national revenue collection, anti-tax evasion operations, and fiscal audits',
          description: 'Oversee thousands of crores in national tax revenue and formulate national fiscal compliance guidelines.',
          mandatoryEligibility: ['Commissioned Indian Revenue Service (IRS) Officer'],
          examGateways: [],
          recommendedInstitutions: ['Central Board of Direct Taxes (CBDT)', 'Department of Revenue, Ministry of Finance'],
          skillsToAcquire: ['Macro Fiscal Policy Governance', 'Cross-Border Tax Arbitration'],
          estimatedCostRange: 'Zero (Senior Central Gazetted Service)',
          keyActionTip: 'Drive AI-based tax analytics and transparent taxpayer facilitation.'
        }
      ]
    },
    POLYTECHNIC: {
      streamType: 'POLYTECHNIC',
      streamName: 'Polytechnic Diploma -> Lateral B.Tech/B.A. -> Civil Services Route',
      streamShortDesc: '10th -> POLYCET -> 3-Yr Diploma -> ECET Lateral B.Tech -> UPSC CSE / State Groups',
      badgeLabel: 'Diploma to District Collector Track',
      themeColor: {
        primary: '#06b6d4',
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
        glow: 'shadow-cyan-500/20'
      },
      approachPhilosophy: 'Prove that an early diploma background is no barrier to the highest administrative office in the country: complete 3-year diploma -> ECET lateral entry into 2nd year B.Tech (or 3-year B.A.) -> Appear for UPSC CSE and State PSC Group 1 with equal eligibility.',
      branchSelectionStrategy: 'In Diploma, choose any engineering branch (Civil/Mechanical/ECE). Lateral entry into 2nd year B.Tech via ECET. In final year, appear for UPSC Civil Services.',
      metrics: {
        timeToFirstJobYears: 5,
        financialInvestment: 'LOW',
        competitionLevel: 'EXTREME',
        flexibilityScore: 9,
        practicalToTheoryRatio: 9
      },
      pros: [
        'Complete equality of eligibility: UPSC does not discriminate between direct 12th students and lateral diploma graduates',
        'State government polytechnic students have high resilience and practical grassroots understanding of public works'
      ],
      cons: [
        'Requires deliberate transition from technical engineering equations to descriptive social science essay writing'
      ],
      entryJobRoles: ['Deputy Collector (State Group 1)', 'Assistant Commissioner (UPSC)', 'Assistant Executive Engineer - AEE (State PSC)'],
      fiveYearTrajectory: 'District Collector / Joint Secretary (₹12L - ₹25L LPA).',
      salarySpectrumLpa: { entryMin: 8.0, entryMax: 15.0, experiencedPeak: 30.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_civils_poly_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board & POLYCET Entrance',
          subtitle: 'Clear 10th standard and secure seat in Government Polytechnic College',
          description: 'Pass 10th board with strong physical science and mathematics foundation.',
          mandatoryEligibility: ['Pass 10th with min 35% in Maths & Science'],
          examGateways: ['POLYCET_DIPLOMA'],
          recommendedInstitutions: ['State Government Polytechnics'],
          skillsToAcquire: ['Basic Mathematics', 'General Social Awareness'],
          estimatedCostRange: '₹3,000 - ₹10,000',
          keyActionTip: 'Opt for Civil, Mechanical, or Electrical engineering diploma.'
        },
        {
          id: 'm_civils_poly_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '3-Year Polytechnic Diploma',
          title: '3-Year Diploma in Engineering + Daily Newspaper Reading',
          subtitle: 'Complete technical diploma while building general studies foundation',
          durationYears: '3 Years',
          description: 'Learn engineering surveying, materials, and infrastructure while reading Daily Editorial columns to prepare for civil services.',
          branchOrSpecializationToChoose: 'MUST Choose: Diploma in Civil, Mechanical, ECE, or EEE.',
          mandatoryEligibility: ['POLYCET Rank and Seat Allotment'],
          examGateways: ['ECET_LATERAL'],
          recommendedInstitutions: ['Government Polytechnic Institutes'],
          skillsToAcquire: ['Infrastructure Principles', 'General Studies Foundation'],
          estimatedCostRange: '₹12,000 - ₹35,000',
          keyActionTip: 'Crack State ECET in final semester to enter 2nd year B.Tech.'
        },
        {
          id: 'm_civils_poly_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Lateral Degree (B.Tech 2nd Year Entry)',
          title: 'B.Tech Degree via ECET Lateral Entry + UPSC GS Preparation',
          subtitle: '3-Year B.Tech completion with systematic UPSC answer writing practice',
          durationYears: '3 Years',
          description: 'Complete accredited B.Tech degree meeting full statutory eligibility for UPSC Civil Services and State Public Service Commissions.',
          branchOrSpecializationToChoose: 'Choose: B.Tech via Lateral Entry (ECE/Civil/Mech/CSE).',
          mandatoryEligibility: ['3-Year Diploma with min 45% and qualified in State ECET'],
          examGateways: [],
          postDegreeExams: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS', 'SSC_CGL'],
          recommendedInstitutions: ['JNTU', 'Andhra University', 'Osmania University', 'Anna University'],
          skillsToAcquire: ['Essay & Ethics Writing', 'Public Administration Basics', 'Current Affairs Synthesis'],
          estimatedCostRange: '₹1.5L - ₹3.5L (Reimbursed via state scholarships)',
          keyActionTip: 'Choose an optional subject like Anthropology, Sociology, Public Administration, or Geography.'
        },
        {
          id: 'm_civils_poly_4',
          phase: 'PHASE_POST_GRAD_RECRUITMENT',
          phaseLabel: 'Civil Services Examination',
          title: 'UPSC Civil Services & State PSC Group-I Examination',
          subtitle: 'Crack Prelims, Mains, and Interview to become a Class-1 Gazetted Officer',
          durationYears: '1 Year',
          description: 'Clear Prelims and write high-scoring Mains answers citing grassroots infrastructure case studies from your technical diploma days.',
          mandatoryEligibility: ['Bachelor’s degree and minimum age 21 years'],
          examGateways: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS'],
          postDegreeExams: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS'],
          recommendedInstitutions: ['LBSNAA Mussoorie', 'State Administrative Training Academies'],
          skillsToAcquire: ['Administrative Leadership', 'Public Grievance Redressal'],
          estimatedCostRange: 'Nominal Exam Fees',
          keyActionTip: 'Highlight your journey from practical polytechnic technician to engineering graduate as a key strength in the UPSC interview.'
        },
        {
          id: 'm_civils_poly_5',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Public Governance Leadership',
          title: 'District Collector / Municipal Commissioner / Executive Director',
          subtitle: 'Directing public infrastructure, district revenue, and social welfare programs',
          description: 'Lead smart city urban planning, public water works, rural electrification, and disaster relief with firsthand engineering knowledge.',
          mandatoryEligibility: ['Presidential Commission as an IAS/IPS Officer or State Gazetted Officer'],
          examGateways: [],
          recommendedInstitutions: ['State & Central Government Departments'],
          skillsToAcquire: ['District Administrative Command', 'Mega Infrastructure Oversight'],
          estimatedCostRange: 'Zero (Senior Public Service)',
          keyActionTip: 'Serve the public with unmatched dedication, transparency, and grassroots empathy.'
        }
      ]
    },
    VOCATIONAL_GUILD: {
      streamType: 'VOCATIONAL_GUILD',
      streamName: 'Open University (IGNOU / Distance B.A.) -> Civil Services Route',
      streamShortDesc: '10+2 Open School (NIOS) -> IGNOU Distance B.A. (Full-Time Civils Prep) -> UPSC CSE Rank',
      badgeLabel: 'Full-Time Self-Paced Civils Track',
      themeColor: {
        primary: '#f43f5e',
        border: 'border-rose-500/30',
        bg: 'bg-rose-500/10',
        text: 'text-rose-400',
        glow: 'shadow-rose-500/20'
      },
      approachPhilosophy: 'Dedicate 100% of your daily hours directly to UPSC Civil Services preparation without college attendance pressure by enrolling in a UGC-recognized distance degree (IGNOU / State Open University B.A.) which has 100% equal legal validity for UPSC and State PSCs.',
      branchSelectionStrategy: 'Enroll in IGNOU B.A. in Public Administration, History, or Political Science. Spend 8-10 hours daily studying standard UPSC textbooks, mock test papers, and answer-writing.',
      metrics: {
        timeToFirstJobYears: 3.5,
        financialInvestment: 'LOW',
        competitionLevel: 'EXTREME',
        flexibilityScore: 10,
        practicalToTheoryRatio: 7
      },
      pros: [
        'Zero mandatory college attendance: 8-10 hours daily dedicated entirely to UPSC Civils preparation',
        'UGC distance degrees from IGNOU are 100% legally recognized and accepted by UPSC and State PSCs',
        'Extremely low cost (< ₹15,000 for the entire 3-year degree)'
      ],
      cons: [
        'Requires ironclad self-discipline, daily time-blocking, and isolated focus'
      ],
      entryJobRoles: ['Assistant Collector (IAS)', 'Sub-Collector (IAS)', 'Deputy Collector (State Group 1)'],
      fiveYearTrajectory: 'District Collector / District Magistrate (₹12L - ₹25L LPA).',
      salarySpectrumLpa: { entryMin: 9.0, entryMax: 16.0, experiencedPeak: 30.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_civils_guild_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board (State / CBSE / NIOS)',
          subtitle: 'Pass 10th standard and establish disciplined daily reading habits',
          description: 'Complete 10th standard board exam.',
          mandatoryEligibility: ['Pass 10th Board with min 50%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools / Open Schooling'],
          skillsToAcquire: ['Disciplined Self-Study', 'Reading Speed'],
          estimatedCostRange: 'Nominal',
          keyActionTip: 'Read the complete NCERT series for History, Geography, and Polity.'
        },
        {
          id: 'm_civils_guild_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate / NIOS',
          title: '10+2 Intermediate in Humanities (or NIOS Senior Secondary)',
          subtitle: 'Master 11th & 12th NCERTs while practicing critical essay writing',
          durationYears: '2 Years',
          description: 'Complete 12th standard with focus on Indian history, political science, and geography.',
          mandatoryEligibility: ['Class 12 pass in any stream'],
          examGateways: [],
          recommendedInstitutions: ['Junior Colleges / NIOS'],
          skillsToAcquire: ['NCERT Concept Summaries', 'Daily Editorial Notes'],
          estimatedCostRange: '₹10,000 - ₹30,000',
          keyActionTip: 'Summarize every NCERT chapter into 2-page bullet point mindmaps.'
        },
        {
          id: 'm_civils_guild_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'UGC Recognized Distance Degree',
          title: 'IGNOU Bachelor of Arts (B.A.) in Public Administration / History',
          subtitle: 'Full-time 3-year home-based UPSC Civil Services marathon preparation',
          durationYears: '3 Years',
          description: 'Enroll in IGNOU distance B.A. (100% recognized for UPSC). Dedicate 8 hours daily to standard books: Laxmikanth (Polity), Spectrum (Modern History), Ramesh Singh (Economy), Shankar IAS (Environment), and Lexicon (Ethics).',
          branchOrSpecializationToChoose: 'Choose: IGNOU B.A. in Public Administration, History, or Political Science.',
          mandatoryEligibility: ['Enrolled in UGC-accredited Distance Degree'],
          examGateways: [],
          postDegreeExams: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS', 'SSC_CGL'],
          recommendedInstitutions: ['Indira Gandhi National Open University (IGNOU)'],
          skillsToAcquire: ['3-Hour Exam Speed & Endurance', 'Mains Essay Synthesis (1000-1200 words)', 'Prelims Elimination Techniques'],
          estimatedCostRange: '₹12,000 - ₹25,000 (Total degree fee)',
          keyActionTip: 'Enroll in national test series (VisionIAS, ForumIAS) and take 60+ full-length mock exams.'
        },
        {
          id: 'm_civils_guild_4',
          phase: 'PHASE_POST_GRAD_RECRUITMENT',
          phaseLabel: 'UPSC CSE Examination',
          title: 'Crack UPSC Civil Services on 1st/2nd Attempt',
          subtitle: 'Top All-India Rank (AIR) in IAS / IPS / IFS',
          durationYears: '1 Year',
          description: 'Write UPSC Mains and attend Personality Test at UPSC Dholpur House, New Delhi.',
          mandatoryEligibility: ['Completed Bachelor’s Degree and minimum age 21 years'],
          examGateways: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS'],
          postDegreeExams: ['UPSC_CSE', 'APPSC_TSPSC_GROUPS'],
          recommendedInstitutions: ['LBSNAA Mussoorie'],
          skillsToAcquire: ['Administrative Integrity', 'Policy Analysis'],
          estimatedCostRange: 'Nominal Exam Fee',
          keyActionTip: 'Present your disciplined self-directed study journey with authenticity and humility during the interview.'
        },
        {
          id: 'm_civils_guild_5',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Public Governance',
          title: 'District Collector & District Magistrate (IAS)',
          subtitle: 'Directing district governance and empowering millions through transparent public administration',
          description: 'Lead national initiatives, maintain law and order, and drive socio-economic growth as a distinguished civil servant.',
          mandatoryEligibility: ['All-India Service Presidential Commission'],
          examGateways: [],
          recommendedInstitutions: ['Government of India'],
          skillsToAcquire: ['Public Administration Leadership'],
          estimatedCostRange: 'Zero (Prestigious Government Service)',
          keyActionTip: 'Execute government welfare schemes with zero corruption and maximum citizen impact.'
        }
      ]
    }
  }
};
