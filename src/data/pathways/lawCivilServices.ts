import { CareerRole } from '../../types/pathway';

const STREAM_THEMES = {
  MPC: { primary: '#3b82f6', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400', glow: 'shadow-blue-500/20' },
  BiPC: { primary: '#10b981', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  MEC_CEC: { primary: '#f59e0b', border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400', glow: 'shadow-amber-500/20' },
  HEC: { primary: '#a855f7', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400', glow: 'shadow-purple-500/20' },
  POLYTECHNIC: { primary: '#06b6d4', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
  VOCATIONAL_GUILD: { primary: '#f43f5e', border: 'border-rose-500/30', bg: 'bg-rose-500/10', text: 'text-rose-400', glow: 'shadow-rose-500/20' }
};

export const LAW_CIVIL_PATHWAYS: Record<string, CareerRole> = {
  corporate_lawyer: {
    id: 'corporate_lawyer',
    title: 'Corporate M&A Lawyer & General Counsel',
    slug: 'corporate-lawyer',
    domainId: 'law_civil_services',
    domainName: 'Law, Public Policy & Civil Services',
    shortDescription: 'Structure cross-border mergers & acquisitions, negotiate billion-dollar venture investments, navigate antitrust regulations, and lead corporate governance.',
    holisticInsight: 'Law is stream-agnostic in 10+2! You can enter via HEC (constitutional and sociopolitical law), MEC (corporate taxation, securities and M&A focus), MPC (tech/IP patent law), BiPC (pharmaceutical/patent law), or 3-year LL.B after any graduation.',
    iconName: 'Scale',
    tags: ['Law', 'CLAT', 'NLU', 'M&A', 'Corporate Counsel', 'Intellectual Property'],
    marketDemand: 'HIGH',
    streams: {
      HEC: {
        streamType: 'HEC',
        streamName: 'Constitutional & Socio-Legal Route (CLAT NLU Route)',
        streamShortDesc: '10+2 HEC -> CLAT UG -> 5-Year Integrated B.A. LL.B (Hons) at Top NLUs',
        badgeLabel: 'Premier NLU Law School Track',
        themeColor: STREAM_THEMES.HEC,
        approachPhilosophy: 'Deep grounding in political philosophy, jurisprudence, sociology, and critical reasoning, cracking CLAT to join premier National Law Universities (NLSIU Bangalore, NALSAR Hyderabad).',
        metrics: { timeToFirstJobYears: 5, financialInvestment: 'MODERATE', competitionLevel: 'EXTREME', flexibilityScore: 10, practicalToTheoryRatio: 8 },
        pros: ['Direct campus placements from top NLUs into Tier-1 law firms (Shardul Amarchand, Cyril Amarchand, AZB, Trilegal, Khaitan) starting at ₹16L - ₹24L PA', 'Unbeatable moot court advocacy, legal drafting, and critical reasoning pedigree', 'Immediate eligibility for judicial services (Judicial Magistrate) and UPSC CSE'],
        cons: ['CLAT UG has ~65,000 aspirants for ~3,000 total NLU seats (Top 3 NLUs acceptance < 0.6%)'],
        entryJobRoles: ['Corporate Law Associate', 'Legal Analyst', 'Litigation Associate', 'Judicial Law Clerk'],
        fiveYearTrajectory: 'Senior Associate / Partner at Tier-1 Law Firm (₹35L - ₹1.8Cr+).',
        salarySpectrumLpa: { entryMin: 16, entryMax: 24, experiencedPeak: 150 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'law_hec_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & Debate Societies',
            subtitle: 'Master English reading speed, logical reasoning, and current legal debates',
            description: 'Pass 10th board while reading editorial analyses in The Hindu and participating in Model United Nations (MUNs).',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Fast Reading Comprehension (300+ WPM)', 'Logical Deductions', 'Constitutional Awareness'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Read national legal judgements on LiveLaw and Bar & Bench to understand case citations.'
          },
          {
            id: 'law_hec_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 HEC + CLAT Prep',
            title: '10+2 Intermediate HEC with CLAT & AILET Prep',
            subtitle: 'Intensive mock testing in legal reasoning, critical logic, and current affairs',
            durationYears: '2 Years',
            description: 'Prepare for CLAT (Consortium of NLUs) and AILET (NLU Delhi) testing passage-based comprehension.',
            mandatoryEligibility: ['10+2 pass in any stream with min 45% marks'],
            examGateways: ['CLAT_UG', 'AILET_NLU'],
            recommendedInstitutions: ['Junior Colleges & CLAT Prep Hubs'],
            skillsToAcquire: ['Legal Maxims & Torts', 'Contracts & Criminal Law Principles', 'Analytical Syllogisms'],
            estimatedCostRange: '₹40,000 - ₹1.2L',
            keyActionTip: 'Attempt at least 60 full-length timed CLAT mock exams to master 120 questions in 120 minutes.'
          },
          {
            id: 'law_hec_3', phase: 'PHASE_3_DEGREE', phaseLabel: '5-Year NLU Degree',
            title: '5-Year Integrated B.A. LL.B (Hons) at National Law University',
            subtitle: 'Constitutional law, corporate mergers, moot courts, and corporate internships',
            durationYears: '5 Years',
            description: 'Complete 10 semesters of rigorous legal scholarship, competing in international moot courts (Philip C. Jessup, Willem C. Vis) and interning at top law firms.',
            mandatoryEligibility: ['Allotment via CLAT Merit List'],
            examGateways: [],
            recommendedInstitutions: ['NLSIU Bangalore', 'NALSAR Hyderabad', 'WBNUJS Kolkata', 'NLU Jodhpur'],
            skillsToAcquire: ['Due Diligence & Share Purchase Agreements (SPA)', 'Antitrust Competition Filings', 'Moot Court Oral Advocacy'],
            estimatedCostRange: '₹12L - ₹18L for entire 5 years (Scholarships available)',
            keyActionTip: 'Secure 4th and 5th year internships at Tier-1 corporate law firms to convert them into Pre-Placement Offers (PPOs).'
          },
          {
            id: 'law_hec_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Corporate Law Associate & Cross-Border Dealmaker',
            subtitle: 'Advising Fortune 500 mergers, IPO listings, and venture capital financing',
            description: 'Lead contract negotiations, foreign direct investment (FDI) structuring, and regulatory approvals for landmark business transactions.',
            mandatoryEligibility: ['All India Bar Examination (AIBE) Bar Council of India license'],
            examGateways: [],
            recommendedInstitutions: ['Tier-1 Law Firms (CAM, SAM, Trilegal, AZB) & Multinational In-House Legal Teams'],
            skillsToAcquire: ['Cross-Border Tax Structuring', 'Hostile Takeover Defense'],
            estimatedCostRange: 'Zero (High Comp Package)',
            keyActionTip: 'Specialize in Fintech or AI IP Law—the fastest growing high-billing legal verticals.'
          }
        ]
      },
      MEC_CEC: {
        streamType: 'MEC_CEC',
        streamName: 'Commercial Law, Taxation & Securities Route',
        streamShortDesc: '10+2 MEC -> B.B.A. LL.B (Hons) / B.Com LL.B -> Corporate Tax & Securities Law',
        badgeLabel: 'Securities Law & Private Equity Specialist',
        themeColor: STREAM_THEMES.MEC_CEC,
        approachPhilosophy: 'Harness commerce, accounting, and economic market fundamentals to master SEBI regulations, banking insolvency (IBC), capital markets, and corporate tax structuring.',
        metrics: { timeToFirstJobYears: 5, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 10, practicalToTheoryRatio: 8 },
        pros: ['Effortless reading of financial balance sheets and company debt structures makes corporate M&A analysis second nature', 'High demand in private equity funds, investment banks, and SEBI compliance desks'],
        cons: ['Requires clearing competitive CLAT or SLAT law entrance exams'],
        entryJobRoles: ['Banking & Finance Lawyer', 'Capital Markets Associate', 'SEBI Regulatory Counsel', 'Taxation Advocate'],
        fiveYearTrajectory: 'Partner in Banking & Finance / General Counsel at FinTech Unicorn (₹35L - ₹1.6Cr+).',
        salarySpectrumLpa: { entryMin: 15, entryMax: 22, experiencedPeak: 140 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'law_mec_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Commerce & Governance Interest',
            subtitle: 'Pass 10th standard with strong foundation',
            description: 'Pass 10th with keen interest in business and corporate affairs.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Basic Accounting & Commercial Logic'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Follow SEBI regulations and company takeover news.'
          },
          {
            id: 'law_mec_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 MEC',
            title: '10+2 MEC with CLAT / SLAT Prep',
            subtitle: 'Study accountancy, economics, and business laws',
            durationYears: '2 Years',
            description: 'Complete 10+2 MEC while preparing for CLAT and Symbiosis Law Admission Test (SLAT).',
            mandatoryEligibility: ['10+2 Commerce pass with min 50%'],
            examGateways: ['CLAT_UG'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Insolvency & Bankruptcy Basics', 'Corporate Governance Principles'],
            estimatedCostRange: '₹35,000 - ₹1L',
            keyActionTip: 'B.B.A. LL.B at top law schools (GNLU Gandhinagar, Symbiosis Pune) is tailor-made for commerce students.'
          },
          {
            id: 'law_mec_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'B.B.A. LL.B Degree',
            title: '5-Year B.B.A. LL.B (Hons) in Corporate & Securities Law',
            subtitle: 'Company Law, Securities Regulations (SEBI), Insolvency (IBC), and Mergers',
            durationYears: '5 Years',
            description: 'Master debt restructuring, loan syndication, private equity term sheets, and IPO prospectus drafting.',
            mandatoryEligibility: ['Admission via CLAT / SLAT Merit'],
            examGateways: [],
            recommendedInstitutions: ['GNLU Gandhinagar', 'NLU Jodhpur', 'Symbiosis Law School Pune'],
            skillsToAcquire: ['Drafting Term Sheets & Debenture Trust Deeds', 'SEBI ICDR Regulations'],
            estimatedCostRange: '₹10L - ₹16L',
            keyActionTip: 'Publish research on foreign direct investment (FDI) policy and corporate dispute arbitration.'
          },
          {
            id: 'law_mec_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Senior Banking & Private Equity Legal Counsel',
            subtitle: 'Structuring multi-crore syndicated loans, bond issuances, and venture investments',
            description: 'Represent global venture capital firms and investment banks in closing debt and equity rounds.',
            mandatoryEligibility: ['Bar Council of India License (AIBE)'],
            examGateways: [],
            recommendedInstitutions: ['Top Law Firms, Global Investment Banks (Goldman Sachs, Morgan Stanley)'],
            skillsToAcquire: ['Cross-Border Tax Treaties (DTAA)', 'Distressed Asset Acquisition'],
            estimatedCostRange: 'Zero (High Comp Phase)',
            keyActionTip: 'Private equity legal partners command some of the highest billing rates in global legal practice.'
          }
        ]
      },
      MPC: {
        streamType: 'MPC',
        streamName: 'Tech, Patent & Intellectual Property (IP) Law Route',
        streamShortDesc: '10+2 MPC -> B.Tech + 3-Year LL.B (IIT Kharagpur RGSOIPL) / B.Tech LL.B -> Patent Attorney',
        badgeLabel: 'Tech Patent & IP Attorney',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Combine technical engineering science with patent law to become a Registered Patent Attorney—one of the most lucrative and high-barrier legal specialties globally.',
        metrics: { timeToFirstJobYears: 6, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 10, practicalToTheoryRatio: 7 },
        pros: ['Registered Patent Agent/Attorney status requires a science/engineering degree—commerce/arts grads cannot qualify', 'Massive global demand defending AI patents, pharmaceutical compounds, semiconductors, and software algorithms'],
        cons: ['Longer path: B.Tech (4 years) + LL.B (3 years) or 5-year B.Tech LL.B'],
        entryJobRoles: ['Patent Attorney', 'Tech IP Litigator', 'Technology Transfer Specialist', 'Patent Analyst'],
        fiveYearTrajectory: 'Partner in Intellectual Property & Tech Law (₹30L - ₹1.7Cr+).',
        salarySpectrumLpa: { entryMin: 14, entryMax: 22, experiencedPeak: 130 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'law_mpc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Science & Logic',
            subtitle: 'Pass 10th board with strong science scores',
            description: 'Pass 10th board exams.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Analytical Logic', 'Scientific Method'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Learn how patents protect technological inventions.'
          },
          {
            id: 'law_mpc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 MPC',
            title: '10+2 MPC (Maths, Physics, Chemistry)',
            subtitle: 'Secure engineering degree entry or 5-year B.Tech LL.B program',
            durationYears: '2 Years',
            description: 'Complete 10+2 MPC with high engineering entrance ranks.',
            mandatoryEligibility: ['10+2 PCM pass with min 60%'],
            examGateways: ['JEE_MAIN', 'CLAT_UG'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Technical Problem Analysis', 'Engineering Concepts'],
            estimatedCostRange: '₹40,000 - ₹1.2L',
            keyActionTip: 'Check IIT Kharagpur Rajiv Gandhi School of Intellectual Property Law (RGSOIPL).'
          },
          {
            id: 'law_mpc_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Engineering + Law Degree',
            title: 'B.Tech in CS/Electronics + 3-Year LL.B (IIT Kharagpur RGSOIPL)',
            subtitle: 'Specializing in Patent Drafting, Trade Secrets, and Technology Licensing',
            durationYears: '3 Years (Post-B.Tech)',
            description: 'Study intellectual property law at IIT Kharagpur, the premier patent law institute in India.',
            mandatoryEligibility: ['Engineering degree + All India IIT Law Entrance'],
            examGateways: [],
            recommendedInstitutions: ['IIT Kharagpur RGSOIPL', 'National Law University Delhi'],
            skillsToAcquire: ['Patent Claim Drafting', 'Prior Art Patent Invalidation Searches', 'Patent Agent Examination (IPO)'],
            estimatedCostRange: '₹4L - ₹8L',
            keyActionTip: 'Clear the Indian Patent Agent Examination conducted by the Controller General of Patents.'
          },
          {
            id: 'law_mpc_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Registered Patent Attorney & Tech Law Partner',
            subtitle: 'Defending cutting-edge AI, semiconductor, and biotech patents globally',
            description: 'Represent global tech giants (Google, Apple, Qualcomm) in filing and defending international patent portfolios.',
            mandatoryEligibility: ['Bar Council of India License + Registered Patent Agent'],
            examGateways: [],
            recommendedInstitutions: ['Specialized IP Law Firms (Anand and Anand, Remfry & Sagar, K&S Partners)'],
            skillsToAcquire: ['PCT International Filings', 'Standard Essential Patents (SEP) Litigation'],
            estimatedCostRange: 'Zero (High Billing Phase)',
            keyActionTip: 'Patent litigators earn substantial hourly rates in international cross-border patent disputes.'
          }
        ]
      },
      BiPC: {
        streamType: 'BiPC',
        streamName: 'Pharma, Bio-Patent & Medical Jurisprudence Route',
        streamShortDesc: '10+2 BiPC -> B.Pharm / B.Sc Biotech -> 3-Year LL.B / 5-Year Law -> Pharma Patent Attorney',
        badgeLabel: 'Pharma Patent & Bio-Law Specialist',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Master pharmaceutical chemistry, biotechnology, and molecular biology before qualifying as a patent attorney to defend multi-billion dollar drug molecules and vaccine patents.',
        metrics: { timeToFirstJobYears: 5, financialInvestment: 'MODERATE', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 7 },
        pros: ['Pharma patent litigation is one of the highest-paying legal sectors due to high-stakes generic drug entry litigation', 'High international mobility advising pharmaceutical MNCs on FDA/CDSCO regulatory approvals'],
        cons: ['Requires deep understanding of organic chemistry alongside legal precedents'],
        entryJobRoles: ['Pharma Patent Attorney', 'Life Sciences Legal Counsel', 'Bioethics & Clinical Trial Legal Advisor'],
        fiveYearTrajectory: 'Head of IP & Regulatory Affairs at Global Pharmaceutical Giant (₹28L - ₹1.4Cr+).',
        salarySpectrumLpa: { entryMin: 12, entryMax: 20, experiencedPeak: 120 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'law_bipc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Biology & Chemistry',
            subtitle: 'Pass 10th standard with strong science marks',
            description: 'Pass 10th board.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Scientific Literacy'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Learn about generic drug patent challenges (Section 3(d) of Indian Patents Act).'
          },
          {
            id: 'law_bipc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 BiPC',
            title: '10+2 BiPC with CLAT / Law Awareness',
            subtitle: 'Study biology, organic chemistry, and genetics',
            durationYears: '2 Years',
            description: 'Complete 10+2 BiPC while preparing for either 5-year law or pharmacy/biotech undergraduate degrees.',
            mandatoryEligibility: ['10+2 PCB pass with min 50%'],
            examGateways: ['CLAT_UG', 'CUET_UG'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Organic Reaction Mechanisms', 'Molecular Genetics'],
            estimatedCostRange: '₹30,000 - ₹90,000',
            keyActionTip: 'Appear for CLAT UG for direct 5-year NLU admission or pursue B.Pharm first.'
          },
          {
            id: 'law_bipc_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Pharma / Law Degree',
            title: 'B.Pharm / B.Sc Biotech + 3-Year LL.B / 5-Year Integrated B.Sc LL.B',
            subtitle: 'Pharmaceutical chemistry, drug regulatory laws, and patent litigation',
            durationYears: '5 Years',
            description: 'Study drug discovery alongside intellectual property law, clinical trial regulations, and bioethics.',
            mandatoryEligibility: ['Admission via University Law Entrance'],
            examGateways: [],
            recommendedInstitutions: ['NLU Gandhinagar (B.Sc LL.B)', 'IIT Kharagpur RGSOIPL'],
            skillsToAcquire: ['Hatch-Waxman Act & Paragraph IV Litigations', 'Section 3(d) Patentability Challenges'],
            estimatedCostRange: '₹6L - ₹14L',
            keyActionTip: 'Intern with pharmaceutical in-house patent teams (Dr. Reddy’s, Sun Pharma, Cipla).'
          },
          {
            id: 'law_bipc_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Lead Pharmaceutical Patent Litigator',
            subtitle: 'Defending blockbuster drug molecules in High Courts and international tribunals',
            description: 'Litigate complex drug patent infringement suits and advise on compulsory licensing.',
            mandatoryEligibility: ['Bar Council License + Patent Agent'],
            examGateways: [],
            recommendedInstitutions: ['Leading IP Law Firms & Global Pharma Companies'],
            skillsToAcquire: ['Biosimilar Patent Clearance', 'Cross-Border Pharma M&A Due Diligence'],
            estimatedCostRange: 'Zero (High Earning Phase)',
            keyActionTip: 'Pharma patent attorneys play a direct role in bringing affordable life-saving medicines to global populations.'
          }
        ]
      },
      POLYTECHNIC: {
        streamType: 'POLYTECHNIC',
        streamName: 'Technical Diploma to Corporate Law Route',
        streamShortDesc: '3-Year Polytechnic Diploma -> Lateral B.Tech -> 3-Year LL.B -> Tech Legal Counsel',
        badgeLabel: 'Engineering Tech to Legal Counsel',
        themeColor: STREAM_THEMES.POLYTECHNIC,
        approachPhilosophy: 'Hands-on technical diploma engineering foundation followed by degree completion and 3-year LL.B, combining industrial hardware/systems know-how with corporate contract management.',
        metrics: { timeToFirstJobYears: 6, financialInvestment: 'LOW', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 8 },
        pros: ['Deep practical engineering background makes interpreting complex construction and industrial contracts effortless', 'Cost-effective education path with strong corporate law firm outcomes'],
        cons: ['Requires multiple degrees (Diploma -> Engineering/Degree -> LL.B)'],
        entryJobRoles: ['Construction Law Counsel', 'Industrial Contract Specialist', 'Patent Analyst'],
        fiveYearTrajectory: 'Head of Infrastructure Legal Contracts / Partner (₹25L - ₹1.1Cr+).',
        salarySpectrumLpa: { entryMin: 10, entryMax: 18, experiencedPeak: 100 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'law_poly_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & POLYCET Entrance',
            subtitle: 'Secure diploma seat in engineering',
            description: 'Pass 10th board and clear POLYCET.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: ['POLYCET_DIPLOMA'],
            recommendedInstitutions: ['Govt Polytechnic Colleges'],
            skillsToAcquire: ['Technical Logic'],
            estimatedCostRange: '₹500',
            keyActionTip: 'Target Civil, Mechanical, or Electrical engineering diplomas.'
          },
          {
            id: 'law_poly_2', phase: 'PHASE_1_STREAM', phaseLabel: '3-Year Diploma',
            title: '3-Year Diploma in Engineering',
            subtitle: 'Master industrial systems, specifications, and project management',
            durationYears: '3 Years',
            description: 'Learn engineering blueprints and project execution before transitioning to law.',
            mandatoryEligibility: ['POLYCET seat'],
            examGateways: ['ECET_LATERAL'],
            recommendedInstitutions: ['State Board of Technical Education'],
            skillsToAcquire: ['Engineering Drawings', 'Project Specifications'],
            estimatedCostRange: '₹15,000 - ₹35,000',
            keyActionTip: 'Clear ECET for lateral B.Tech or pursue direct degree for LL.B.'
          },
          {
            id: 'law_poly_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Degree & 3-Year LL.B',
            title: 'B.Tech / Graduation + 3-Year LL.B in Infrastructure & Contract Law',
            subtitle: 'FIDIC contracts, construction arbitration, and dispute resolution',
            durationYears: '3 Years (Post-Graduation)',
            description: 'Master commercial contract drafting, tender bidding laws, and international commercial arbitration.',
            mandatoryEligibility: ['Graduation pass + Law Entrance (MHCET Law / DU LL.B / CUET PG)'],
            examGateways: [],
            recommendedInstitutions: ['Faculty of Law (DU)', 'GLC Mumbai', 'ILS Pune'],
            skillsToAcquire: ['FIDIC Contract Conditions', 'Arbitration & Conciliation Act'],
            estimatedCostRange: '₹50,000 - ₹2L',
            keyActionTip: 'Specialize in infrastructure arbitration (Metro, highways, power plant disputes).'
          },
          {
            id: 'law_poly_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Senior Infrastructure & Construction Law Specialist',
            subtitle: 'Advising major infrastructure conglomerates on multi-thousand crore contracts',
            description: 'Represent EPC contractors and government infrastructure boards in high-stakes contract arbitrations.',
            mandatoryEligibility: ['Bar Council of India License'],
            examGateways: [],
            recommendedInstitutions: ['L&T, Adani Infra, Tata Projects In-House Legal & Top Law Firms'],
            skillsToAcquire: ['Dispute Adjudication Board (DAB) Proceedings', 'Cross-Examination of Technical Experts'],
            estimatedCostRange: 'Zero (Earning Phase)',
            keyActionTip: 'Technical engineers who understand construction delays make the most effective arbitration advocates.'
          }
        ]
      },
      VOCATIONAL_GUILD: {
        streamType: 'VOCATIONAL_GUILD',
        streamName: 'Paralegal, Legal Tech & Contract Management Route',
        streamShortDesc: 'Certified Paralegal / Legal Tech Specialist -> Contract Automation -> LL.B',
        badgeLabel: 'Legal Tech & Contract Automator',
        themeColor: STREAM_THEMES.VOCATIONAL_GUILD,
        approachPhilosophy: 'Enter corporate legal departments directly through contract lifecycle management (CLM) certifications, legal AI automation tools, and paralegal guilds while completing law degrees.',
        metrics: { timeToFirstJobYears: 2, financialInvestment: 'LOW', competitionLevel: 'MODERATE', flexibilityScore: 8, practicalToTheoryRatio: 9 },
        pros: ['Start working in corporate legal operations / contract management early', 'High international demand in LegalTech startups automating NDA and contract workflows with AI'],
        cons: ['Must complete formal LL.B to represent clients in court or sign legal opinions'],
        entryJobRoles: ['Legal Operations Specialist', 'Contract Manager', 'Paralegal Specialist', 'Legal Prompt Engineer'],
        fiveYearTrajectory: 'Director of Legal Operations / Corporate Legal Counsel (₹20L - ₹85L+).',
        salarySpectrumLpa: { entryMin: 5, entryMax: 11, experiencedPeak: 80 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'law_voc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with English & Computing',
            subtitle: 'Pass 10th standard',
            description: 'Pass 10th board with good computer proficiency and English comprehension.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Fast Typing (60+ WPM)', 'Document Formatting'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Learn contract lifecycle management software (Ironclad, Icertis).'
          },
          {
            id: 'law_voc_2', phase: 'PHASE_1_STREAM', phaseLabel: 'Vocational Training',
            title: 'Paralegal & Contract Management Certification',
            subtitle: 'NDA review, standard clause drafting, and legal AI workflows',
            durationYears: '2 Years',
            description: 'Work with offshore legal process outsourcing (LPO) firms reviewing commercial vendor agreements.',
            mandatoryEligibility: ['Enrolled in distance/open degree'],
            examGateways: [],
            recommendedInstitutions: ['Certified Paralegal Institutes & Online LegalTech Academies'],
            skillsToAcquire: ['Redlining Contracts in MS Word', 'Risk Clause Flagging', 'AI Legal Prompting'],
            estimatedCostRange: '₹20,000 - ₹50,000',
            keyActionTip: 'Work as remote contract manager for US/UK SaaS startups.'
          },
          {
            id: 'law_voc_3', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Head of Legal Operations & Contract Automation',
            subtitle: 'Deploying AI agents across enterprise global contract repositories',
            description: 'Lead legal operations for multinational technology enterprises.',
            mandatoryEligibility: ['Proven track record in contract automation and legal operations'],
            examGateways: [],
            recommendedInstitutions: ['Multinational Tech Firms & LegalTech Startups'],
            skillsToAcquire: ['Enterprise Legal Procurement', 'CLM Software Architecture'],
            estimatedCostRange: 'Zero (Earning Phase)',
            keyActionTip: 'Legal operations directors bridge the gap between software developers and general counsel.'
          }
        ]
      }
    }
  }
};
