import { CareerRole } from '../../types/pathway';

const STREAM_THEMES = {
  MPC: { primary: '#3b82f6', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-700', glow: 'shadow-blue-500/20' },
  BiPC: { primary: '#10b981', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-700', glow: 'shadow-emerald-500/20' },
  HEC: { primary: '#a855f7', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-700', glow: 'shadow-purple-500/20' },
  MEC_CEC: { primary: '#f59e0b', border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-700', glow: 'shadow-amber-500/20' }
};

export const ACADEMIC_RESEARCH_PATHWAYS: Record<string, CareerRole> = {
  // 1. PURE SCIENCES RESEARCH SCIENTIST (IISc / IISER / PhD)
  pure_science_researcher: {
    id: 'pure_science_researcher',
    title: 'Pure Sciences Research Scientist (IISc / IISER / Quantum & Nano)',
    slug: 'pure-sciences-research-scientist',
    domainId: 'stem_computing_robotics',
    domainName: 'Pure Sciences & Research',
    shortDescription: 'Discover fundamental laws of physics, synthesize novel superconducting nanomaterials, unlock quantum algorithms, and publish in Nature and Science.',
    holisticInsight: 'Pure science research is the bedrock of technological civilizational breakthroughs. Accessible via 10+2 MPC / BiPC -> IAT (IISER Aptitude Test) / JEE Advanced -> 5-Year BS-MS Dual Degree at IISER / IISc Bangalore -> CSIR-UGC NET JRF -> Fully funded PhD -> Postdoctoral Scientist at CERN / TIFR / Max Planck.',
    recommendedDegreeBranch: 'BS-MS Dual Degree in Physics, Chemistry, or Mathematics (IISc Bangalore / IISERs)',
    iconName: 'Cpu',
    tags: ['Research', 'IISc', 'IISER', 'Physics', 'Chemistry', 'CSIR NET', 'PhD', 'Quantum', 'Nanotech'],
    marketDemand: 'HIGH',
    streams: {
      MPC: {
        streamType: 'MPC',
        streamName: '10+2 MPC to IISc / IISER BS-MS Dual Degree -> CSIR NET -> Global PhD',
        streamShortDesc: '10+2 MPC -> IAT / JEE Adv -> 5-Year BS-MS (IISc / IISER) -> CSIR JRF -> Senior Research Scientist (TIFR/DRDO/CERN)',
        badgeLabel: 'Fundamental Science Discovery Track',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Deep exploration of quantum mechanics, solid-state physics, organic synthesis, and advanced mathematics in India’s premier science institutes.',
        branchSelectionStrategy: 'Crack IISER Aptitude Test (IAT) or JEE Advanced with high rank for IISc Bangalore / IISER Pune/Kolkata BS-MS degree.',
        metrics: { timeToFirstJobYears: 5, financialInvestment: 'FREE_SCHOLARSHIP', competitionLevel: 'EXTREME', flexibilityScore: 10, practicalToTheoryRatio: 9 },
        pros: ['Monthly INSPIRE scholarship of ₹5,000/mo during BS-MS + fully funded PhD fellowship (₹37,000 - ₹42,000/mo + HRA) via CSIR NET JRF', 'Direct access to national supercomputing facilities, synchrotron radiation laboratories, and international research collaborations (CERN, NASA)'],
        cons: ['Requires deep intellectual patience and analytical persistence to formulate novel scientific hypotheses'],
        entryJobRoles: ['Junior Research Fellow (JRF)', 'Scientist ‘C’ (Govt Research Labs: BARC / DRDO / CSIR)', 'Quantum Algorithm Researcher', 'Semiconductor Material Scientist'],
        fiveYearTrajectory: 'Principal Investigator (PI) / Senior Staff Scientist (₹18L - ₹45L+ LPA + Research Grants).',
        salarySpectrumLpa: { entryMin: 6.5, entryMax: 14.0, experiencedPeak: 42.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'sci_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Science & Research Curiosity',
            subtitle: 'Excellence in theoretical physics, chemical equations, and mathematical problem-solving',
            description: 'Pass 10th standard with strong foundation in science.',
            mandatoryEligibility: ['Pass 10th with min 75% in Science & Maths'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Scientific Scientific Method', 'Experimental Observation'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Read scientific biographies (Feynman, Einstein, Ramanujan) and scientific journals.'
          },
          {
            id: 'sci_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (MPC / BiPC)',
            title: '10+2 Intermediate in Science + IAT / JEE Advanced Prep',
            subtitle: 'Master Class 11-12 Physics, Chemistry, and Mathematics for IISER Aptitude Test (IAT)',
            durationYears: '2 Years',
            description: 'Crack IISER Aptitude Test (IAT), NEST (NISER Bhubaneswar), or JEE Advanced to enter premier science institutes.',
            mandatoryEligibility: ['10+2 Science pass with min 60% aggregate'],
            examGateways: ['IAT_IISER', 'JEE_ADVANCED'],
            recommendedInstitutions: ['Junior Colleges / Senior Secondary Schools'],
            skillsToAcquire: ['Theoretical Derivations', 'Advanced Calculus & Physical Chemistry'],
            estimatedCostRange: '₹25,000 - ₹80,000',
            keyActionTip: 'Focus on conceptual understanding and solve previous IAT and NEST question papers.'
          },
          {
            id: 'sci_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Premier Science Dual Degree',
            title: '5-Year BS-MS Dual Degree at IISc Bangalore / IISERs',
            subtitle: 'Quantum mechanics, spectroscopy, statistical mechanics, computational modeling, and master’s thesis',
            durationYears: '5 Years',
            description: 'Conduct original research in advanced laboratories, operate electron microscopes (TEM/SEM), and author research papers.',
            branchOrSpecializationToChoose: 'Choose: BS-MS Major in Physics, Chemistry, or Mathematics at IISER / IISc.',
            mandatoryEligibility: ['IAT / JEE Advanced rank + 10+2 Science clearance'],
            examGateways: [],
            postDegreeExams: ['CSIR_NET'],
            recommendedInstitutions: ['IISc Bangalore, IISER Pune, IISER Kolkata, IISER Mohali, NISER Bhubaneswar, TIFR Mumbai'],
            skillsToAcquire: ['Quantum Mechanical Simulations', 'Spectroscopic Data Analysis (NMR/X-Ray/Raman)', 'Scientific Paper Writing (LaTeX)'],
            estimatedCostRange: 'Fully Supported via INSPIRE / DST Fellowship (₹60,000/year)',
            keyActionTip: 'Crack CSIR-UGC NET JRF in final year of BS-MS to secure guaranteed PhD funding.'
          },
          {
            id: 'sci_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Doctorate & Principal Investigator',
            title: 'Staff Scientist / Principal Research Investigator',
            subtitle: 'Leading national research laboratories, patenting breakthrough materials, and mentoring PhD scholars',
            description: 'Direct breakthrough research in clean energy catalysts, quantum computing hardware, and advanced semiconductor materials.',
            mandatoryEligibility: ['Doctorate (PhD) in Science with peer-reviewed international publications'],
            examGateways: [],
            recommendedInstitutions: ['TIFR Mumbai, BARC, DRDO Laboratories, CSIR Institutes (NCL Pune, NPL Delhi), Intel Labs, IBM Quantum'],
            skillsToAcquire: ['Research Grant Proposal Drafting (SERB/DST)', 'International Patent Filing'],
            estimatedCostRange: 'Zero (Class-1 Central Scientist Cadre / High R&D Salary)',
            keyActionTip: 'Collaborate with private semiconductor and nanotechnology companies for funded R&D patents.'
          }
        ]
      }
    }
  },

  // 2. AGRICULTURAL SCIENTIST & AGRONOMIST
  agricultural_scientist: {
    id: 'agricultural_scientist',
    title: 'Agricultural Scientist & Agronomist (ICAR / IARI / AgTech)',
    slug: 'agricultural-scientist-agronomist',
    domainId: 'agriculture_wildlife_env',
    domainName: 'Agriculture, Environment & Food Systems',
    shortDescription: 'Engineer drought-resistant climate smart crops, precision drone farming, soil microbiome regeneration, and food security policy.',
    holisticInsight: 'Agriculture is the backbone of food security and rural economics. Accessible via 10+2 BiPC / MPC -> ICAR AIEEA Entrance Exam -> 4-Year B.Sc (Hons) Agriculture at state agricultural universities / IARI New Delhi -> Agricultural Research Service (ARS) Scientist / AgTech Corporate Leadership.',
    recommendedDegreeBranch: 'B.Sc (Hons) Agriculture / B.Tech Agricultural Engineering -> ICAR AIEEA PG -> ARS Scientist',
    iconName: 'Shield',
    tags: ['Agriculture', 'ICAR', 'B.Sc Agriculture', 'Agronomy', 'Soil Science', 'AgTech', 'ARS Scientist', 'Food Security'],
    marketDemand: 'HIGH',
    streams: {
      BiPC: {
        streamType: 'BiPC',
        streamName: '10+2 BiPC to ICAR AIEEA -> B.Sc (Hons) Agriculture -> ARS Scientist Track',
        streamShortDesc: '10+2 PCB -> ICAR AIEEA -> B.Sc (Hons) Agriculture -> Agricultural Research Service (ARS Scientist)',
        badgeLabel: 'Agri-Biotech & Climate Resilient Farming Track',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Master crop genetics, soil nutrient cycling, precision drone spraying, seed biotechnology, and agricultural economics in ICAR-accredited agricultural universities.',
        branchSelectionStrategy: 'In 10+2, study biology and chemistry. Clear ICAR AIEEA with top rank for premier agricultural universities (IARI, PAU Ludhiana, TNAU Coimbatore).',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'LOW', competitionLevel: 'HIGH', flexibilityScore: 9, practicalToTheoryRatio: 10 },
        pros: ['Guaranteed direct central government recruitment as Agricultural Research Service (ARS / ICAR Scientist - Class 1 Gazetted)', 'Booming private AgTech sector (DeHaat, Ninjacart, Syngenta, Bayer) offering high corporate salaries in precision agriculture'],
        cons: ['Involves extensive field research across agricultural experimental stations in diverse rural agro-climatic zones'],
        entryJobRoles: ['Agricultural Officer (AO / State Govt)', 'Agronomy Specialist', 'AgTech Crop Health Manager', 'Seed Production Technologist'],
        fiveYearTrajectory: 'Senior Agricultural Scientist / AgTech Vice President (₹15L - ₹38L LPA).',
        salarySpectrumLpa: { entryMin: 5.5, entryMax: 10.5, experiencedPeak: 32.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'agri_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Science & Plant Biology Foundation',
            subtitle: 'Interest in plant biology, soil chemistry, and environmental nature',
            description: 'Pass 10th standard with strong foundation in science.',
            mandatoryEligibility: ['Pass 10th with min 50%'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Plant Photosynthesis & Nutrients', 'Soil Types Awareness'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Observe seasonal crop cycles and soil variations in local regions.'
          },
          {
            id: 'agri_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (BiPC / MPC)',
            title: '10+2 Intermediate in BiPC or MPC + ICAR AIEEA Exam Prep',
            subtitle: 'Plant physiology, genetics, organic chemistry, and ICAR agricultural entrance syllabus',
            durationYears: '2 Years',
            description: 'Crack ICAR AIEEA (CUET UG) and State Agricultural CETs (EAMCET, KCET, MHT CET).',
            mandatoryEligibility: ['10+2 with PCB or PCM with min 50%'],
            examGateways: ['CUET_UG', 'ICAR_AIEEA'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Plant Genetics & Hybridization', 'Agricultural Ecology'],
            estimatedCostRange: '₹20,000 - ₹50,000',
            keyActionTip: 'Prepare for the CUET-ICAR Agriculture domain test paper thoroughly.'
          },
          {
            id: 'agri_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Agricultural Professional Degree',
            title: 'B.Sc (Hons) in Agriculture / B.Tech Agri Engineering',
            subtitle: 'Agronomy, plant breeding, soil science, entomology, agricultural meteorology, and Rural Agricultural Work Experience (RAWE)',
            durationYears: '4 Years',
            description: 'Complete hands-on rural field residency (RAWE) living in farming villages, managing greenhouse crop trials, and operating drone spraying rigs.',
            branchOrSpecializationToChoose: 'Choose: B.Sc (Hons) Agriculture from ICAR-accredited state agricultural university.',
            mandatoryEligibility: ['ICAR AIEEA / State CET rank + 10+2 pass'],
            examGateways: [],
            postDegreeExams: ['ICAR_AIEEA_PG', 'ARS_EXAM'],
            recommendedInstitutions: ['Indian Agricultural Research Institute (IARI New Delhi), Punjab Agricultural University (PAU Ludhiana), Tamil Nadu Agricultural University (TNAU Coimbatore), GB Pant University Pantnagar'],
            skillsToAcquire: ['Soil Testing & Nutrient Profiling', 'Drip Irrigation & Drone Mapping', 'Seed Pathology & Hybridization', 'Agri-Business Supply Chain'],
            estimatedCostRange: '₹25,000 - ₹80,000 (Govt Subsidized) + Rural Field Stipend',
            keyActionTip: 'Crack ICAR JRF exam in final year to secure monthly postgraduate scholarship of ₹12,640/month.'
          },
          {
            id: 'agri_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Scientist & AgTech Leadership',
            title: 'Agricultural Research Service (ARS) Scientist / AgTech Lead',
            subtitle: 'Directing climate-resilient seed breeding, precision satellite agriculture, and national food security policies',
            description: 'Breed high-yielding climate-resilient crop varieties and deploy AI satellite yield prediction models for millions of farmers.',
            mandatoryEligibility: ['B.Sc Agriculture / M.Sc with ICAR ARS clearing or AgTech industry leadership'],
            examGateways: [],
            recommendedInstitutions: ['ICAR Research Institutes, National Bank for Agriculture and Rural Development (NABARD), Bayer CropScience, Syngenta, ITC Agri Business'],
            skillsToAcquire: ['CRISPR Plant Genome Editing', 'Satellite Remote Sensing for Crop Health (NDVI)'],
            estimatedCostRange: 'Zero (Class-1 Central Scientist Service / High AgTech Corporate Salary)',
            keyActionTip: 'Specialize in Controlled Environment Agriculture (CEA) and vertical hydroponic systems.'
          }
        ]
      }
    }
  },

  // 3. INVESTIGATIVE JOURNALIST & BROADCAST MEDIA ANCHOR
  investigative_journalist: {
    id: 'investigative_journalist',
    title: 'Investigative Journalist & Broadcast Media Anchor (IIMC / ACJ)',
    slug: 'investigative-journalist-media-anchor',
    domainId: 'media_journalism_literature',
    domainName: 'Media, Journalism & Literature',
    shortDescription: 'Uncover corporate corruption, report from war zones, anchor prime-time television news broadcasts, and direct investigative documentary podcasts.',
    holisticInsight: 'Journalism is the fourth pillar of democracy. Accessible via 10+2 in Any Stream (HEC/MEC/MPC/BiPC) -> BA in Journalism / Mass Communication -> IIMC Entrance / Asian College of Journalism (ACJ Chennai) -> Investigative Special Correspondent / Prime-Time TV Anchor.',
    recommendedDegreeBranch: 'BA in Journalism & Mass Communication (BJMC) -> IIMC PG Diploma in Journalism',
    iconName: 'Clapperboard',
    tags: ['Journalism', 'Media', 'IIMC', 'News', 'Anchor', 'Investigative', 'Broadcasting', 'Podcasts'],
    marketDemand: 'HIGH',
    streams: {
      HEC: {
        streamType: 'HEC',
        streamName: '10+2 Humanities to IIMC / ACJ Premier Journalism Track',
        streamShortDesc: '10+2 HEC -> BA Journalism / Literature -> IIMC / ACJ -> Chief Political Correspondent / Prime-Time TV Anchor',
        badgeLabel: 'Investigative Journalism & Broadcast Track',
        themeColor: STREAM_THEMES.HEC,
        approachPhilosophy: 'Master investigative source verification, constitutional law, broadcast anchoring, video documentary editing, and digital data journalism.',
        branchSelectionStrategy: 'In 10+2, study history, political science, and English. Clear IIMC or ACJ Chennai entrance tests with high rank.',
        metrics: { timeToFirstJobYears: 3.5, financialInvestment: 'LOW', competitionLevel: 'HIGH', flexibilityScore: 10, practicalToTheoryRatio: 9 },
        pros: ['Direct influence over public democratic discourse, national policy accountability, and international press freedom', 'High lateral adaptability into corporate public relations, crisis communications, and digital media entrepreneurship'],
        cons: ['High-pressure breaking news deadlines and physical safety risks in conflict / investigative reporting'],
        entryJobRoles: ['News Reporter', 'Broadcast News Sub-Editor', 'Digital Multimedia Journalist', 'Investigative Research Associate'],
        fiveYearTrajectory: 'Senior Editor / Prime-Time TV Anchor / Bureau Chief (₹16L - ₹45L+ LPA).',
        salarySpectrumLpa: { entryMin: 4.5, entryMax: 9.0, experiencedPeak: 38.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'jour_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board English & Current Affairs Foundation',
            subtitle: 'Strong performance in English literature, social sciences, and daily news habit',
            description: 'Pass 10th standard with strong writing and public speaking curiosity.',
            mandatoryEligibility: ['Pass 10th standard'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Speed News Writing', 'Current Affairs Curiosity'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Read national daily editorials (The Hindu, Indian Express) and write opinion essays.'
          },
          {
            id: 'jour_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (HEC / Any)',
            title: '10+2 Intermediate in HEC or Any Stream + CUET UG Prep',
            subtitle: 'Political science, modern history, media ethics, and college entrance prep',
            durationYears: '2 Years',
            description: 'Clear Class 12 with high English marks and crack CUET UG for top journalism colleges (Lady Shri Ram, St. Xavier’s).',
            mandatoryEligibility: ['10+2 pass in any stream with min 50%'],
            examGateways: ['CUET_UG'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Article Drafting & Fact-Checking', 'Podcast Recording Basics'],
            estimatedCostRange: '₹20,000 - ₹50,000',
            keyActionTip: 'Start a student blog or YouTube current affairs commentary channel.'
          },
          {
            id: 'jour_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Premier Journalism Degree / Diploma',
            title: 'BA (Journalism) / PG Diploma at IIMC / ACJ Chennai',
            subtitle: 'Investigative reporting, multi-camera TV news anchoring, RTI filing, and digital data storytelling',
            durationYears: '3 Years (Degree) or 1 Year (PG Diploma)',
            description: 'Report from live field beats (crime, politics, economy, environment), file Right to Information (RTI) petitions, and edit broadcast news packages.',
            branchOrSpecializationToChoose: 'Choose: BA Journalism / Mass Comm + PG Diploma at IIMC New Delhi or Asian College of Journalism (ACJ).',
            mandatoryEligibility: ['CUET / IIMC entrance rank + 10+2 pass'],
            examGateways: [],
            recommendedInstitutions: ['Indian Institute of Mass Communication (IIMC New Delhi), Asian College of Journalism (ACJ Chennai), Xavier Institute of Communications (XIC Mumbai), Symbiosis (SIMC Pune)'],
            skillsToAcquire: ['Right to Information (RTI) Investigation', 'Teleprompter TV Anchoring', 'Adobe Premiere / Final Cut Pro Editing', 'Data Journalism & Infographic Visuals'],
            estimatedCostRange: '₹1L - ₹4L',
            keyActionTip: 'Publish at least 10 investigative ground reportage stories in recognized print/digital portals.'
          },
          {
            id: 'jour_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Media Leadership & Prime-Time Anchoring',
            title: 'Chief Political Editor / Prime-Time TV Anchor / Bureau Chief',
            subtitle: 'Anchoring flagship national debates, directing international bureaus, and breaking defining national exclusives',
            description: 'Direct newsroom editorial coverage, investigate systemic irregularities, and anchor prime-time current affairs broadcasts.',
            mandatoryEligibility: ['Demonstrated portfolio of award-winning journalism and editorial leadership'],
            examGateways: [],
            recommendedInstitutions: ['NDTV, India Today Group, The Indian Express, BBC News India, Reuters, The Wire, Bloomberg'],
            skillsToAcquire: ['Crisis Newsroom Editorial Direction', 'Legal Defamation & Media Law Shielding'],
            estimatedCostRange: 'Zero (High Media Salary & Editorial Authority)',
            keyActionTip: 'Aim for prestigious journalism honors (Ramnath Goenka Award) for highest industry recognition.'
          }
        ]
      }
    }
  },

  // 4. CLINICAL PSYCHOLOGIST & NEUROPSYCHOLOGIST
  clinical_psychologist: {
    id: 'clinical_psychologist',
    title: 'Clinical Psychologist & Neuropsychologist (M.Phil / Psy.D / NIMHANS)',
    slug: 'clinical-psychologist-neuropsychologist',
    domainId: 'life_sciences_medicine',
    domainName: 'Psychology, Mental Health & Social Sciences',
    shortDescription: 'Diagnose neuropsychiatric disorders, conduct psychometric testing, provide cognitive behavioral therapy (CBT), and lead mental health rehabilitation.',
    holisticInsight: 'Clinical psychology is India’s fastest growing mental health discipline. Accessible via 10+2 in Any Stream (HEC/BiPC/MEC) -> BA/B.Sc Psychology -> M.A/M.Sc Clinical Psychology -> RCI-Accredited M.Phil / Psy.D in Clinical Psychology (at apex institutes like NIMHANS Bengaluru, CIP Ranchi) -> Licensed Clinical Psychologist (RCI registered).',
    recommendedDegreeBranch: 'BA/B.Sc Psychology -> M.Sc Clinical Psychology -> M.Phil in Clinical Psychology (NIMHANS / CIP)',
    iconName: 'Shield',
    tags: ['Psychology', 'Mental Health', 'NIMHANS', 'Therapy', 'CBT', 'Neuropsychology', 'RCI', 'Psychometric'],
    marketDemand: 'EXPLOSIVE',
    streams: {
      HEC: {
        streamType: 'HEC',
        streamName: '10+2 Humanities / Science to BA Psychology -> NIMHANS M.Phil Track',
        streamShortDesc: '10+2 HEC/BiPC -> BA/B.Sc Psychology -> M.Sc -> RCI M.Phil at NIMHANS -> Licensed Clinical Psychologist',
        badgeLabel: 'Mental Health & Clinical Neuropsychology Track',
        themeColor: STREAM_THEMES.HEC,
        approachPhilosophy: 'Master cognitive neuroscience, psychopathology, psychometric assessments (Rorschach, WAIS, MMPI), and evidence-based psychotherapy in premier psychiatric hospitals.',
        branchSelectionStrategy: 'In 10+2, study psychology or biology. In degree, pursue BA/B.Sc Psychology with 55%+ marks to qualify for national M.Phil entrance exams.',
        metrics: { timeToFirstJobYears: 5, financialInvestment: 'LOW', competitionLevel: 'VERY_HIGH', flexibilityScore: 10, practicalToTheoryRatio: 9 },
        pros: ['Rehabilitation Council of India (RCI) License grants legal authority to diagnose psychological conditions and provide clinical therapy in India', 'High hourly private consulting fees (₹2,000 - ₹5,000/hour) with flexible independent practice'],
        cons: ['Requires completing the rigorous 2-year hospital residency M.Phil at NIMHANS / CIP with high entrance cutoffs'],
        entryJobRoles: ['Clinical Psychologist (RCI Registered)', 'Neuropsychological Assessment Specialist', 'Child & Adolescent Mental Health Therapist', 'Hospital Psychiatric Consultant'],
        fiveYearTrajectory: 'Head of Clinical Psychology / Private Mental Health Clinic Founder (₹16L - ₹42L+ LPA).',
        salarySpectrumLpa: { entryMin: 5.5, entryMax: 10.5, experiencedPeak: 36.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'psy_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Human Behavior Curiosity',
            subtitle: 'Strong foundation in social sciences, biology, and empathetic listening',
            description: 'Pass 10th standard with interest in human mind and behavior.',
            mandatoryEligibility: ['Pass 10th standard'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Active Empathy & Listening', 'Basic Social Science'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Read introductory books on human cognition and developmental psychology.'
          },
          {
            id: 'psy_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (HEC / BiPC)',
            title: '10+2 Intermediate in HEC or BiPC with Psychology Elective',
            subtitle: 'Cognitive processes, personality theories, psychological testing, and CUET UG Prep',
            durationYears: '2 Years',
            description: 'Complete 10+2 with high marks in Psychology / Social Sciences to secure top central university psychology admission.',
            mandatoryEligibility: ['10+2 pass in any stream with min 55%'],
            examGateways: ['CUET_UG'],
            recommendedInstitutions: ['Junior Colleges / Senior Secondary Schools'],
            skillsToAcquire: ['Cognitive & Behavioral Theories', 'Statistical Research Methods in Psychology'],
            estimatedCostRange: '₹20,000 - ₹50,000',
            keyActionTip: 'Crack CUET UG with 98+ percentile for Delhi University (LSR, Gargi, Zakir Husain) or Christ University.'
          },
          {
            id: 'psy_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Undergraduate Psychology Degree',
            title: 'BA / B.Sc in Psychology (Honours)',
            subtitle: 'Neuropsychology, abnormal psychology, developmental psychology, psychometrics, and clinical internships',
            durationYears: '3 Years',
            description: 'Administer standardized IQ tests, behavioral observation scales, and intern at psychiatric wards and NGOs.',
            branchOrSpecializationToChoose: 'Choose: BA / B.Sc (Hons) in Psychology with Clinical elective.',
            mandatoryEligibility: ['CUET UG rank + 10+2 pass'],
            examGateways: [],
            postDegreeExams: ['CUET_PG'],
            recommendedInstitutions: ['Delhi University (LSR / Daulat Ram), Christ University Bengaluru, Fergusson College Pune, Mithibai Mumbai'],
            skillsToAcquire: ['Psychometric Battery Administration (WAIS, TAT, BDI)', 'SPSS / R Statistical Analysis in Behavioral Data'],
            estimatedCostRange: '₹80,000 - ₹3.5L',
            keyActionTip: 'Maintain minimum 55% aggregate marks (mandatory for RCI M.Phil eligibility).'
          },
          {
            id: 'psy_4', phase: 'PHASE_POST_GRAD_RECRUITMENT', phaseLabel: 'RCI-Accredited Clinical M.Phil',
            title: 'M.Phil in Clinical Psychology (NIMHANS / CIP Ranchi - 2 Years)',
            subtitle: 'Hospital psychiatric residency: CBT, DBT, neuropsychological rehabilitation, and emergency suicide prevention',
            durationYears: '2 Years',
            description: 'Conduct supervised psychotherapy on 200+ psychiatric inpatient and outpatient cases under leading clinical psychiatrists.',
            mandatoryEligibility: ['Master’s in Psychology with min 55% + National Entrance Exam clearance'],
            examGateways: [],
            recommendedInstitutions: ['National Institute of Mental Health and Neurosciences (NIMHANS Bengaluru), Central Institute of Psychiatry (CIP Ranchi), LGBRIMH Tezpur, IHBAS Delhi'],
            skillsToAcquire: ['Cognitive Behavioral Therapy (CBT)', 'Neuropsychological Rehabilitation', 'Dialectical Behavior Therapy (DBT)'],
            estimatedCostRange: 'Fully Subsidized (Govt Stipend ₹25,000 - ₹35,000/month during M.Phil)',
            keyActionTip: 'Clear the NIMHANS entrance exam to obtain the premier RCI registration license upon graduation.'
          },
          {
            id: 'psy_5', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Licensed Clinical Practice',
            title: 'RCI Registered Clinical Psychologist & Clinic Director',
            subtitle: 'Directing private psychological clinics, neuropsychiatric hospital wings, and corporate mental wellness programs',
            description: 'Deliver specialized clinical psychotherapy, diagnose complex mental health disorders, and advise judicial child custody cases.',
            mandatoryEligibility: ['M.Phil in Clinical Psychology with RCI Registration (CRR No.)'],
            examGateways: [],
            recommendedInstitutions: ['Max Healthcare, Apollo Hospitals, Fortis Mental Health, Private Clinical Practice, Vandrevala Foundation'],
            skillsToAcquire: ['Trauma-Informed EMDR Therapy', 'Clinical Supervision & Ethics'],
            estimatedCostRange: 'Zero (High Professional Retainers & Therapy Fees)',
            keyActionTip: 'Establish a specialized private mental health and neuropsychological testing center.'
          }
        ]
      }
    }
  }
};
