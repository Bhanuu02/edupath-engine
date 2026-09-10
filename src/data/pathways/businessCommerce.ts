import { CareerRole } from '../../types/pathway';

const STREAM_THEMES = {
  MEC_CEC: { primary: '#f59e0b', border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-700', glow: 'shadow-amber-500/20' },
  MPC: { primary: '#3b82f6', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-700', glow: 'shadow-blue-500/20' },
  HEC: { primary: '#a855f7', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-700', glow: 'shadow-purple-500/20' },
  VOCATIONAL_GUILD: { primary: '#f97316', border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-700', glow: 'shadow-orange-500/20' }
};

export const BUSINESS_COMMERCE_PATHWAYS: Record<string, CareerRole> = {
  // 1. CHARTERED ACCOUNTANT (CA)
  chartered_accountant: {
    id: 'chartered_accountant',
    title: 'Chartered Accountant (CA) & Statutory Auditor (ICAI)',
    slug: 'chartered-accountant-ca',
    domainId: 'commerce_finance_strategy',
    domainName: 'Commerce, Finance & Strategy',
    shortDescription: 'Audit Fortune 500 corporations, structure multi-crore corporate tax strategies, direct mergers & acquisitions, and advise CEOs on financial integrity.',
    holisticInsight: 'The Institute of Chartered Accountants of India (ICAI) sets the gold standard for global finance. Accessible after 10th (registering for CA Foundation) or after 10+2 MEC/CEC/MPC/Commerce via 3-tiered ICAI curriculum (Foundation -> Intermediate -> 2-Year Articleship -> CA Final) with 0 reservations and purely merit-based clearing.',
    recommendedDegreeBranch: 'CA (ICAI Chartered Accountancy) + B.Com / BBA from Top University',
    iconName: 'TrendingUp',
    tags: ['CA', 'ICAI', 'Auditing', 'Taxation', 'Finance', 'Big 4', 'M&A', 'Corporate Governance'],
    marketDemand: 'HIGH',
    streams: {
      MEC_CEC: {
        streamType: 'MEC_CEC',
        streamName: '10+2 MEC / CEC to ICAI Foundation -> CA Intermediate -> Articleship -> CA Final',
        streamShortDesc: '10+2 Commerce -> CA Foundation -> CA Inter -> 2-Year Big-4 Articleship -> CA Final',
        badgeLabel: 'Premier Auditing & Financial Leadership Track',
        themeColor: STREAM_THEMES.MEC_CEC,
        approachPhilosophy: 'Master accounting standards (Ind AS / IFRS), statutory auditing, direct/indirect taxation (GST), and corporate law with rigorous hands-on articleship in top audit firms.',
        branchSelectionStrategy: 'In 10+2, choose MEC (Maths, Economics, Commerce) or CEC. Register for ICAI CA Foundation exam right after 10th standard.',
        metrics: { timeToFirstJobYears: 4.5, financialInvestment: 'LOW', competitionLevel: 'EXTREME', flexibilityScore: 10, practicalToTheoryRatio: 10 },
        pros: ['Highest corporate financial authority: only a Chartered Accountant can sign and audit corporate statutory financial statements in India', 'Total course cost is under ₹75,000 across 4 years with paid monthly articleship stipend from Big 4 firms'],
        cons: ['Rigorous passing percentage (typically 8% to 15% across CA Final groups) requiring relentless self-study discipline'],
        entryJobRoles: ['Statutory Audit Senior (Big 4: EY/Deloitte/PwC/KPMG)', 'Direct Tax Consultant', 'Financial Planning & Analysis (FP&A) Manager', 'Mergers & Acquisitions Analyst'],
        fiveYearTrajectory: 'Chief Financial Officer (CFO) / Partner in Global Audit Firm (₹25L - ₹80L+ LPA).',
        salarySpectrumLpa: { entryMin: 10.0, entryMax: 22.0, experiencedPeak: 85.0 },
        lateralSwitches: [
          {
            id: 'ca_to_cfo_mba',
            title: 'IIM 1-Year Executive MBA / Global CFA Acceleration',
            fromStage: 'After 2 Years Qualified CA Experience',
            toTarget: 'Chief Financial Officer (CFO) / Investment Banking Partner',
            bridgeExamOrMechanism: 'GMAT / CFA Level 3 Waiver',
            description: 'Transition from regulatory audit compliance to strategic global equity investment and corporate buyout leadership.',
            durationAdjustment: 'Immediate',
            keyBenefit: 'Combines statutory financial mastery with strategic C-suite corporate leadership.'
          }
        ],
        milestones: [
          {
            id: 'ca_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Pass & ICAI Provisional Registration',
            subtitle: 'Strong foundation in arithmetic, percentage calculations, and commercial reasoning',
            description: 'Pass 10th standard and provisionally register for ICAI CA Foundation course.',
            mandatoryEligibility: ['Pass 10th standard from recognized board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards & ICAI Regional Branches'],
            skillsToAcquire: ['Numerical Accuracy', 'Basic Commercial Concepts'],
            estimatedCostRange: '₹9,000 (ICAI Registration)',
            keyActionTip: 'Register with ICAI right after 10th board exams to receive official study modules.'
          },
          {
            id: 'ca_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (MEC/CEC)',
            title: '10+2 Intermediate in MEC/CEC + CA Foundation Exam',
            subtitle: 'Principles of accounting, business laws, business mathematics, and economics',
            durationYears: '2 Years',
            description: 'Appear for Class 12 board exams and crack ICAI CA Foundation (400 Marks, min 50% aggregate).',
            mandatoryEligibility: ['Class 12 pass + CA Foundation clearance'],
            examGateways: ['CA_FOUNDATION'],
            recommendedInstitutions: ['Junior Commerce Colleges & ICAI Study Centers'],
            skillsToAcquire: ['Double-Entry Bookkeeping', 'Mercantile Law Fundamentals', 'Logical Reasoning'],
            estimatedCostRange: '₹15,000 - ₹40,000',
            keyActionTip: 'Clear CA Foundation in the May/June attempt right after 12th board exams.'
          },
          {
            id: 'ca_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'ICAI Intermediate & Articleship',
            title: 'CA Intermediate (Group 1 & 2) + 2-Year Big 4 Articleship',
            subtitle: 'Corporate accounting, cost management, taxation, audit standards, and mandatory 24-month practical training',
            durationYears: '2.5 Years',
            description: 'Clear CA Inter exams and join top audit firms (Deloitte, EY, PwC, KPMG, BDO) for live client statutory audits.',
            branchOrSpecializationToChoose: 'Choose: B.Com simultaneously through distance / regular college alongside ICAI articleship.',
            mandatoryEligibility: ['CA Foundation pass + CA Inter registration'],
            examGateways: ['CA_INTERMEDIATE'],
            recommendedInstitutions: ['Big 4 Audit Firms (Deloitte, EY, PwC, KPMG) & Leading CA Partnerships'],
            skillsToAcquire: ['Statutory Balance Sheet Auditing', 'Corporate Income Tax & GST Filings', 'SAP / Oracle ERP Auditing', 'Financial Modeling'],
            estimatedCostRange: '₹18,000 (ICAI Fee) / Earn Articleship Stipend ₹15,000 - ₹25,000/month',
            keyActionTip: 'Work on diverse manufacturing, banking, and IT client audit files to master Ind AS accounting standards.'
          },
          {
            id: 'ca_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'CA Final & Membership',
            title: 'Qualified Chartered Accountant (FCA / ACA) & Partner',
            subtitle: 'Passing CA Final exams (Financial Reporting, Strategic Financial Management, Advanced Auditing)',
            description: 'Earn the prestigious "CA" title before your name and obtain Certificate of Practice (COP) or corporate leadership.',
            mandatoryEligibility: ['Completed 2-Year Articleship + Passed CA Final Both Groups'],
            examGateways: ['CA_FINAL'],
            recommendedInstitutions: ['Global Investment Banks, Big 4 Partnerships, MNCs (Apple, Google, Reliance, HDFC)'],
            skillsToAcquire: ['Forensic Audit & Fraud Investigation', 'Strategic Mergers & Valuations (DCF)', 'Boardroom Financial Advisory'],
            estimatedCostRange: 'Zero (High Corporate Compensation)',
            keyActionTip: 'Aim for ICAI All India Rank (AIR Top 50) for direct ₹25L+ starting campus placement offers.'
          }
        ]
      }
    }
  },

  // 2. INVESTMENT BANKER & FINANCIAL ANALYST
  investment_banker: {
    id: 'investment_banker',
    title: 'Investment Banker & Equity Research Analyst (CFA / IIM MBA)',
    slug: 'investment-banker-financial-analyst',
    domainId: 'commerce_finance_strategy',
    domainName: 'Commerce, Finance & Strategy',
    shortDescription: 'Structure multi-billion dollar IPOs, manage private equity hedge funds, build DCF financial valuation models, and execute global corporate takeovers.',
    holisticInsight: 'Investment banking commands the highest compensation in global business. Accessible via 10+2 MPC / MEC -> B.Com (Hons) at SRCC / B.Tech at IIT -> CAT / GMAT -> IIM Ahmedabad/Bangalore MBA Finance or US CFA (Chartered Financial Analyst) charter.',
    recommendedDegreeBranch: 'B.Com (Hons) / B.Tech + IIM MBA in Finance / CFA (Chartered Financial Analyst)',
    iconName: 'TrendingUp',
    tags: ['Investment Banking', 'CFA', 'IIM', 'CAT', 'Wall Street', 'Valuations', 'M&A', 'Private Equity', 'IPO'],
    marketDemand: 'EXPLOSIVE',
    streams: {
      MEC_CEC: {
        streamType: 'MEC_CEC',
        streamName: '10+2 MEC/Commerce to SRCC / Top University -> CAT -> IIM MBA Finance',
        streamShortDesc: '10+2 MEC -> CUET UG (SRCC/St. Xavier’s) -> CAT -> IIM Ahmedabad / Bangalore -> Bulge Bracket I-Bank',
        badgeLabel: 'Wall Street & Bulge Bracket Banking Track',
        themeColor: STREAM_THEMES.MEC_CEC,
        approachPhilosophy: 'Master financial statement analysis, discounted cash flow (DCF) valuation modeling, LBO models, and capital markets through elite business institutions.',
        branchSelectionStrategy: 'Score 99+ percentile in CUET UG for SRCC / St. Stephen’s / Loyola. Clear CFA Level 1 in final year and crack CAT for top IIMs.',
        metrics: { timeToFirstJobYears: 5, financialInvestment: 'HIGH', competitionLevel: 'EXTREME', flexibilityScore: 10, practicalToTheoryRatio: 8 },
        pros: ['Highest entry-level compensation in the private sector (₹30L - ₹65L LPA + performance bonuses at Goldman Sachs / Morgan Stanley / JP Morgan)', 'High international mobility to financial hubs (New York, London, Singapore, Dubai)'],
        cons: ['Demanding 70–80 hour workweeks during high-stakes M&A transaction deal closings'],
        entryJobRoles: ['Investment Banking Analyst (M&A / ECM)', 'Equity Research Associate', 'Private Equity Deal Analyst', 'Quantitative Trader'],
        fiveYearTrajectory: 'Vice President (VP) / Managing Director (MD) Investment Banking (₹60L - ₹2.5Cr+ LPA).',
        salarySpectrumLpa: { entryMin: 18.0, entryMax: 45.0, experiencedPeak: 150.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'ib_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Mathematics & Analytical Excellence',
            subtitle: 'Strong performance in quantitative mathematics and interest in business news',
            description: 'Pass 10th standard with strong score in mathematics and analytical reasoning.',
            mandatoryEligibility: ['Pass 10th with min 70%'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Advanced Mental Arithmetic', 'Business & Stock Market Basics'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Read the Economic Times and understand how company stocks and IPOs work.'
          },
          {
            id: 'ib_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (MEC / MPC)',
            title: '10+2 Intermediate in MEC or MPC + CUET UG Prep',
            subtitle: 'Economics, Mathematics, Accountancy, and CUET Domain Subject Prep',
            durationYears: '2 Years',
            description: 'Crack CUET UG with 99+ percentile for admission into India’s top commerce institutions (SRCC Delhi, St. Xavier’s Kolkata).',
            mandatoryEligibility: ['10+2 with Mathematics mandatory with min 60%'],
            examGateways: ['CUET_UG', 'IPMAT_EXAM'],
            recommendedInstitutions: ['Junior Colleges / Top Senior Secondary Schools'],
            skillsToAcquire: ['Macro & Micro Economics', 'Matrix Algebra & Calculus', 'Financial Literacy'],
            estimatedCostRange: '₹30,000 - ₹90,000',
            keyActionTip: 'Prepare for CUET UG and IPMAT (IIM Indore 5-Year Integrated Management Entrance).'
          },
          {
            id: 'ib_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Premier Undergraduate Degree',
            title: 'B.Com (Hons) / BBA Finance / B.Tech + CFA Level 1',
            subtitle: 'Financial modeling, LBO models, corporate valuations, and CAT MBA entrance prep',
            durationYears: '3 to 4 Years',
            description: 'Build 3-statement financial models, participate in national case competitions, and prepare for Common Admission Test (CAT).',
            branchOrSpecializationToChoose: 'Choose: B.Com (Hons), BBA Finance, or B.Tech from top premier tier-1 college.',
            mandatoryEligibility: ['CUET UG Rank / JEE Rank + 10+2 pass'],
            examGateways: [],
            postDegreeExams: ['CAT_EXAM', 'CFA_PROGRAM'],
            recommendedInstitutions: ['SRCC Delhi, St. Xavier’s College Kolkata, Loyola Chennai, IITs, Shaheed Sukhdev (SSCBS)'],
            skillsToAcquire: ['Advanced Excel & Financial Modeling', 'Bloomberg Terminal Navigation', 'Discounted Cash Flow (DCF) Valuation'],
            estimatedCostRange: '₹1.5L - ₹6L',
            keyActionTip: 'Crack CAT with 99.5+ percentile for IIM Ahmedabad, Bangalore, or Calcutta admission.'
          },
          {
            id: 'ib_4', phase: 'PHASE_POST_GRAD_RECRUITMENT', phaseLabel: 'Top Tier-1 MBA / CFA Charter',
            title: 'MBA in Finance (IIM A/B/C) or Global CFA Charter',
            subtitle: '2-Year Flagship MBA in Finance with Bulge Bracket Investment Banking Campus Placements',
            durationYears: '2 Years',
            description: 'Summer internships and final placements with world-leading investment banks and global private equity funds.',
            mandatoryEligibility: ['CAT 99+ Percentile + IIM Interview Selection'],
            examGateways: ['CAT_EXAM'],
            recommendedInstitutions: ['IIM Ahmedabad, IIM Bangalore, IIM Calcutta, ISB Hyderabad'],
            skillsToAcquire: ['Cross-Border M&A Structuring', 'Leveraged Buyouts (LBO)', 'Syndicated Debt Financing'],
            estimatedCostRange: '₹20L - ₹28L (100% Educational Bank Loan without collateral for IIMs)',
            keyActionTip: 'Secure a summer internship at Goldman Sachs / Morgan Stanley for a Pre-Placement Offer (PPO).'
          },
          {
            id: 'ib_5', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Global Investment Banking Leadership',
            title: 'Managing Director / Partner in Private Equity',
            subtitle: 'Leading multi-billion dollar IPO listings, sovereign wealth fund deals, and venture capital funds',
            description: 'Direct global corporate financing, advise boardrooms on strategic buyouts, and allocate institutional capital.',
            mandatoryEligibility: ['MBA Finance / CFA with proven track record of deal closings'],
            examGateways: [],
            recommendedInstitutions: ['Goldman Sachs, Morgan Stanley, JP Morgan, BlackRock, KKR, Blackstone, Sequoia/Peak XV'],
            skillsToAcquire: ['Deal Negotiation & Sovereign Advisory', 'Portfolio Risk Hedging'],
            estimatedCostRange: 'Zero (Highest Corporate Compensation & Equity Carry)',
            keyActionTip: 'Specialize in High-Growth Technology & Renewable Energy M&A transactions.'
          }
        ]
      }
    }
  },

  // 3. ACTUARY & QUANTITATIVE RISK MODELER
  actuary_risk_modeler: {
    id: 'actuary_risk_modeler',
    title: 'Actuary & Quantitative Risk Modeler (IAI / IFoA)',
    slug: 'actuary-quantitative-risk-modeler',
    domainId: 'commerce_finance_strategy',
    domainName: 'Commerce, Finance & Strategy',
    shortDescription: 'Price complex life insurance risk, model catastrophic climate events, design pension systems, and predict financial default probabilities using advanced probability mathematics.',
    holisticInsight: 'Actuarial science is ranked among the highest-paid mathematical professions in the world. Accessible after 10+2 MPC / MEC with strong mathematics -> ACET (Actuarial Common Entrance Test) -> 13 professional papers of Institute of Actuaries of India (IAI) / IFoA UK.',
    recommendedDegreeBranch: 'B.Sc / B.A in Actuarial Science, Mathematics, or Statistics + IAI Actuarial Papers',
    iconName: 'TrendingUp',
    tags: ['Actuary', 'IAI', 'ACET', 'Statistics', 'Risk Modeling', 'Insurance', 'Mathematics', 'Probability'],
    marketDemand: 'HIGH',
    streams: {
      MPC: {
        streamType: 'MPC',
        streamName: '10+2 MPC / Maths to IAI Actuarial Papers (ACET Route)',
        streamShortDesc: '10+2 Maths -> ACET Exam -> 13 IAI Papers + B.Sc Statistics -> Fellow of Institute of Actuaries (FIAI)',
        badgeLabel: 'Mathematical & Actuarial Modeling Track',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Master stochastic calculus, compound interest theory, survival probability models, and machine learning risk analytics in the Institute of Actuaries of India curriculum.',
        branchSelectionStrategy: 'In 10+2, achieve high score in Mathematics. In college, pursue B.Sc Statistics / Mathematics while clearing 4-6 IAI papers.',
        metrics: { timeToFirstJobYears: 3.5, financialInvestment: 'LOW', competitionLevel: 'VERY_HIGH', flexibilityScore: 10, practicalToTheoryRatio: 8 },
        pros: ['Every cleared actuarial paper guarantees direct corporate salary increments in multinational insurance and analytics firms', 'Extremely low supply of qualified Fellows of Actuaries in India (~500 active Fellows), creating massive compensation leverage'],
        cons: ['Demands supreme dedication to clear 13 intensive mathematical and statistical board examinations'],
        entryJobRoles: ['Actuarial Analyst (Life / General Insurance)', 'Catastrophe Risk Modeler', 'Pricing Analyst', 'Pension Valuation Associate'],
        fiveYearTrajectory: 'Chief Actuary / Appointed Actuary in Insurance Corporation (₹25L - ₹75L+ LPA).',
        salarySpectrumLpa: { entryMin: 8.0, entryMax: 16.0, experiencedPeak: 80.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'act_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Mathematics Excellence',
            subtitle: 'Supreme score in algebra, statistics, and probability problem-solving',
            description: 'Pass 10th standard with strong foundation in mathematics.',
            mandatoryEligibility: ['Pass 10th with min 75% in Mathematics'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Probability Concepts', 'Algebraic Manipulations'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Participate in Regional Mathematical Olympiads (RMO).'
          },
          {
            id: 'act_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (MPC / MEC)',
            title: '10+2 Intermediate with Mathematics + ACET Entrance Prep',
            subtitle: 'Calculus, permutations & combinations, probability distributions, and ACET Exam',
            durationYears: '2 Years',
            description: 'Clear Class 12 with high mathematics marks and crack Actuarial Common Entrance Test (ACET).',
            mandatoryEligibility: ['10+2 with Mathematics as mandatory subject'],
            examGateways: ['ACET_ACTUARY'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Calculus & Differential Equations', 'Probability Distributions (Binomial, Poisson, Normal)'],
            estimatedCostRange: '₹20,000 - ₹50,000',
            keyActionTip: 'Clear ACET exam right in Class 12 to begin taking Core Principle (CP) actuarial papers in 1st year college.'
          },
          {
            id: 'act_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Degree + IAI Actuarial Exams',
            title: 'B.Sc Statistics / Mathematics + Clearing Core Actuarial Papers (CM1, CM2, CS1, CS2)',
            subtitle: 'Actuarial mathematics, financial engineering, loss models, and R/Python programming',
            durationYears: '3 Years',
            description: 'Complete undergraduate degree while clearing 4–6 professional actuarial papers to secure high-paying campus jobs.',
            branchOrSpecializationToChoose: 'Choose: B.Sc Statistics, Mathematics, Data Science, or B.Sc Actuarial Science.',
            mandatoryEligibility: ['ACET clearance + IAI student membership'],
            examGateways: [],
            recommendedInstitutions: ['Indian Statistical Institute (ISI Kolkata/Delhi), St. Xavier’s College Mumbai, Delhi University (Hindu/Hansraj), Christ University'],
            skillsToAcquire: ['R Programming for Actuaries', 'Loss Distribution Fitting', 'Life Contingency Annuity Pricing'],
            estimatedCostRange: '₹1.5L - ₹4L',
            keyActionTip: 'Clear at least 4 IAI papers before graduating to receive ₹8L - ₹12L starting salary offers.'
          },
          {
            id: 'act_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Fellow of Institute of Actuaries',
            title: 'Appointed Actuary / Chief Risk Officer (CRO)',
            subtitle: 'Fellow of the Institute of Actuaries of India (FIAI) / IFoA UK',
            description: 'Legally certify solvency reserves for life, health, and general insurance corporations and advise sovereign disaster funds.',
            mandatoryEligibility: ['Clearing all 13 IAI papers + 3 Years verified actuarial work experience'],
            examGateways: [],
            recommendedInstitutions: ['LIC of India, HDFC Life, ICICI Prudential, Swiss Re, Munich Re, Aon, Milliman'],
            skillsToAcquire: ['Solvency II Capital Modeling', 'Climate Catastrophe Risk Pricing'],
            estimatedCostRange: 'Zero (Top Corporate Executive Earning)',
            keyActionTip: 'Specialize in Health Insurance & Catastrophe Risk modeling for highest industry demand.'
          }
        ]
      }
    }
  }
};
