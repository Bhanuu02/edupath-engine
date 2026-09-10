import { CareerRole } from '../../types/pathway';

const STREAM_THEMES = {
  BiPC: { primary: '#10b981', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-700', glow: 'shadow-emerald-500/20' },
  MPC: { primary: '#3b82f6', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-700', glow: 'shadow-blue-500/20' },
  POLYTECHNIC: { primary: '#06b6d4', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-700', glow: 'shadow-cyan-500/20' },
  VOCATIONAL_GUILD: { primary: '#f97316', border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-700', glow: 'shadow-orange-500/20' }
};

export const MEDICAL_HEALTH_PATHWAYS: Record<string, CareerRole> = {
  // 1. MBBS DOCTOR & SURGEON
  mbbs_doctor: {
    id: 'mbbs_doctor',
    title: 'MBBS Doctor & Specialized Surgeon (Cardio / Neuro / Trauma)',
    slug: 'mbbs-doctor-surgeon',
    domainId: 'life_sciences_medicine',
    domainName: 'Medical, Healthcare & AYUSH',
    shortDescription: 'Diagnose complex diseases, perform life-saving emergency surgeries, conduct clinical trials, and lead hospital clinical departments.',
    holisticInsight: 'Medicine is India’s most revered healthcare discipline. Direct entry requires 10+2 BiPC (PCB) with high percentile in National Eligibility cum Entrance Test (NEET UG) for government medical colleges (AIIMS, JIPMER, State GMCs), followed by 5.5-year MBBS and NEET PG / NEXT for MD/MS surgical specializations.',
    recommendedDegreeBranch: 'MBBS (Bachelor of Medicine & Bachelor of Surgery) -> MD / MS / DNB Specialization',
    iconName: 'Shield',
    tags: ['MBBS', 'Doctor', 'Surgeon', 'NEET UG', 'AIIMS', 'Medicine', 'Cardiology', 'Surgery'],
    marketDemand: 'EXPLOSIVE',
    streams: {
      BiPC: {
        streamType: 'BiPC',
        streamName: '10+2 BiPC (PCB) to NEET UG -> AIIMS / GMC MBBS -> MD/MS Super-Specialty',
        streamShortDesc: '10+2 PCB -> NEET UG -> 5.5-Year MBBS -> INI CET / NEET PG -> MD/MS Senior Consultant Surgeon',
        badgeLabel: 'Premier Clinical Medicine Track',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Deep mastery of human anatomy, physiology, pathology, pharmacology, and clinical surgery to heal and save human lives in premier hospitals.',
        branchSelectionStrategy: 'In 10+2, score 650+ in NEET UG for government medical college (GMC) allotment. In MBBS final year, prepare for NEXT / NEET PG.',
        metrics: { timeToFirstJobYears: 5.5, financialInvestment: 'LOW', competitionLevel: 'EXTREME', flexibilityScore: 8, practicalToTheoryRatio: 10 },
        pros: ['Highest societal respect, permanent healthcare career security, and unmatched human impact', 'Government medical college fees are heavily subsidized (₹10,000 to ₹1.5L total) with monthly internship stipend'],
        cons: ['Intense entrance competition (24+ lakh NEET applicants for ~55,000 government seats)', 'Long training runway (5.5 years MBBS + 3 years MD/MS + 3 years M.Ch/DM for super-specialty)'],
        entryJobRoles: ['Junior Resident Doctor (MBBS)', 'Medical Officer (PHC/CHC/Govt)', 'Emergency Care Physician', 'Clinical Research Associate'],
        fiveYearTrajectory: 'Senior Consultant Surgeon / Medical Superintendent (₹20L - ₹65L LPA).',
        salarySpectrumLpa: { entryMin: 8.5, entryMax: 16.0, experiencedPeak: 75.0 },
        lateralSwitches: [
          {
            id: 'mbbs_to_civil_services',
            title: 'UPSC Civil Services (IAS / Health Ministry Administration)',
            fromStage: 'After MBBS Internship',
            toTarget: 'Indian Administrative Service (IAS) / Health Secretary',
            bridgeExamOrMechanism: 'UPSC Civil Services Examination (CSE) with Medical Science Optional',
            description: 'Transition from individual bedside clinical care to directing state and national public healthcare policy.',
            durationAdjustment: 'Direct Central Appointment',
            keyBenefit: 'Combine clinical medical knowledge with supreme administrative authority.'
          }
        ],
        milestones: [
          {
            id: 'mbbs_bipc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Biology & Science Foundation',
            subtitle: 'Strong foundation in biological sciences, human organ systems, and chemical reactions',
            description: 'Pass 10th standard with strong score in science and biology.',
            mandatoryEligibility: ['Pass 10th with min 65% in Science'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Biological Terminology', 'Human Anatomy Basics', 'Scientific Observation'],
            estimatedCostRange: 'Nominal School Fees',
            keyActionTip: 'Read about cellular biology and maintain disciplined daily study habits.'
          },
          {
            id: 'mbbs_bipc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (BiPC)',
            title: '10+2 Intermediate in BiPC (Physics, Chemistry, Biology) + NEET UG',
            subtitle: 'Human physiology, genetics, organic chemistry, and medical physics',
            durationYears: '2 Years',
            description: 'Complete NCERT Biology, Chemistry, and Physics thoroughly to achieve 650+ marks in NEET UG.',
            mandatoryEligibility: ['10+2 with PCB and min 50% marks (General) / 40% (Reserved)'],
            examGateways: ['NEET_UG'],
            recommendedInstitutions: ['Junior Colleges / Senior Secondary Schools'],
            skillsToAcquire: ['NCERT Line-by-Line Biology Mastery', 'Speed Problem Solving (180 Questions in 200 Mins)'],
            estimatedCostRange: '₹35,000 - ₹1.5L',
            keyActionTip: 'Solve at least 50 full-length NEET UG mock tests and previous 10-year question papers.'
          },
          {
            id: 'mbbs_bipc_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Undergraduate Medical Degree',
            title: 'MBBS (Bachelor of Medicine & Bachelor of Surgery)',
            subtitle: '4.5 Years Academic Study + 1 Year Compulsory Rotatory Medical Internship (CRMI)',
            durationYears: '5.5 Years',
            description: 'Hands-on clinical rotations across Surgery, Medicine, Pediatrics, OBGYN, Orthopedics, and Emergency Triage in hospital wards.',
            branchOrSpecializationToChoose: 'Choose: MBBS at Government Medical College / AIIMS via All India Quota (AIQ) counseling.',
            mandatoryEligibility: ['NEET UG Rank + Medical Board counseling allotment'],
            examGateways: [],
            postDegreeExams: ['NEET_PG', 'INI_CET'],
            recommendedInstitutions: ['AIIMS New Delhi, CMC Vellore, JIPMER, KGMU Lucknow, Madras Medical College, Grant Medical College Mumbai'],
            skillsToAcquire: ['Clinical Patient Diagnosis', 'Surgical Suturing & Basic Procedures', 'Pharmacotherapy', 'Emergency Life Support (BLS/ACLS)'],
            estimatedCostRange: '₹15,000 - ₹1.5L (Govt GMCs) / Stipend ₹25,000 - ₹35,000/mo in internship',
            keyActionTip: 'Actively assist in operation theatres and emergency wards during clinical postings.'
          },
          {
            id: 'mbbs_bipc_4', phase: 'PHASE_POST_GRAD_RECRUITMENT', phaseLabel: 'Post-Graduate Specialization',
            title: 'MD / MS Post-Graduate Residency (3 Years)',
            subtitle: 'Master of Surgery (MS General Surgery / Orthopedics) or Doctor of Medicine (MD General Medicine / Pediatrics)',
            durationYears: '3 Years',
            description: 'Perform independent surgeries and specialized critical care management while earning resident doctor salary.',
            mandatoryEligibility: ['MBBS Pass + NEET PG / INI CET Rank'],
            examGateways: ['NEET_PG', 'INI_CET'],
            recommendedInstitutions: ['Top Apex Institutes (AIIMS, PGI Chandigarh, NIMHANS)'],
            skillsToAcquire: ['Advanced Laparoscopic Surgery', 'Intensive Care Unit (ICU) Management', 'Clinical Research Publishing'],
            estimatedCostRange: 'Paid Residency (Stipend ₹80,000 - ₹1,20,000/month)',
            keyActionTip: 'Publish original clinical case studies in peer-reviewed medical journals (PubMed/Scopus).'
          },
          {
            id: 'mbbs_bipc_5', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Consultant Medical Leadership',
            title: 'Chief Medical Consultant / Super-Specialist Surgeon',
            subtitle: 'Heading super-specialty departments in Cardiology, Neurosurgery, Oncology, or Multi-Hospital Groups',
            description: 'Direct major surgical procedures, specialized medical research, and healthcare hospital networks.',
            mandatoryEligibility: ['MS/MD/M.Ch with State / National Medical Council (NMC) registration'],
            examGateways: [],
            recommendedInstitutions: ['Apollo Hospitals, Fortis Healthcare, Max Healthcare, Tata Memorial Centre, AIIMS'],
            skillsToAcquire: ['Robotic Surgery (Da Vinci Systems)', 'Super-Specialty Clinical Leadership'],
            estimatedCostRange: 'Zero (Highest Professional Remuneration)',
            keyActionTip: 'Establish a private super-specialty surgical clinic alongside hospital consulting.'
          }
        ]
      }
    }
  },

  // 2. BDS DENTIST & MAXILLOFACIAL SURGEON
  bds_dentist: {
    id: 'bds_dentist',
    title: 'Dental Surgeon & Maxillofacial Specialist (BDS -> MDS)',
    slug: 'dental-surgeon-bds',
    domainId: 'life_sciences_medicine',
    domainName: 'Medical, Healthcare & AYUSH',
    shortDescription: 'Restore oral health, perform advanced root canals, dental implants, cosmetic smile design, and reconstructive maxillofacial surgery.',
    holisticInsight: 'Dentistry combines surgical precision with aesthetic artistry and independent clinical entrepreneurship. Accessible via 10+2 BiPC (PCB) -> NEET UG -> 5-Year BDS Degree -> MDS Specialization (Orthodontics / Oral & Maxillofacial Surgery).',
    recommendedDegreeBranch: 'BDS (Bachelor of Dental Surgery) -> MDS (Master of Dental Surgery)',
    iconName: 'Shield',
    tags: ['BDS', 'Dentist', 'MDS', 'NEET UG', 'Oral Surgery', 'Orthodontics', 'Implants', 'Dental Clinic'],
    marketDemand: 'HIGH',
    streams: {
      BiPC: {
        streamType: 'BiPC',
        streamName: '10+2 BiPC to NEET UG -> 5-Year BDS -> MDS Specialist Dental Practice',
        streamShortDesc: '10+2 PCB -> NEET UG -> 5-Year BDS -> MDS / Private Dental Clinic Entrepreneurship',
        badgeLabel: 'Dental Surgery & Aesthetic Dentistry Track',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Master oral anatomy, prosthetic rehabilitation, micro-endodontics, dental implants, and orthognathic facial surgery.',
        branchSelectionStrategy: 'Secure government/top private dental college via NEET UG counseling. In BDS, focus on hand dexterity and clinical patient quotas.',
        metrics: { timeToFirstJobYears: 5, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 9, practicalToTheoryRatio: 10 },
        pros: ['High flexibility for private clinic entrepreneurship with balanced working hours (no overnight emergency duty mandatory)', 'High international licensing demand (NBDE USA, ADC Australia, ORE UK)'],
        cons: ['Setting up a private high-end dental clinic requires initial capital investment in dental chairs and RVG X-ray equipment'],
        entryJobRoles: ['Associate Dental Surgeon', 'Dental Consultant in Multi-Specialty Hospital', 'Endodontic Resident', 'Public Health Dentist'],
        fiveYearTrajectory: 'Established Private Dental Clinic Owner / MDS Consultant (₹15L - ₹45L LPA).',
        salarySpectrumLpa: { entryMin: 5.0, entryMax: 10.0, experiencedPeak: 38.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'bds_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Science Foundation',
            subtitle: 'Foundation in biology, chemistry, and manual craft dexterity',
            description: 'Pass 10th standard with strong score in science and fine manual coordination.',
            mandatoryEligibility: ['Pass 10th with min 55%'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Fine Hand Coordination & Drawing', 'Biological Science Basics'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Develop fine hand coordination through sketching, sculpting, or model building.'
          },
          {
            id: 'bds_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (BiPC)',
            title: '10+2 Intermediate in BiPC + NEET UG Preparation',
            subtitle: 'Master NCERT Biology, Chemistry, and Physics for dental college allotment',
            durationYears: '2 Years',
            description: 'Crack NEET UG to qualify for government and premier dental colleges across India.',
            mandatoryEligibility: ['10+2 PCB pass with min 50%'],
            examGateways: ['NEET_UG'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Biology Concept Retention', 'Chemistry & Physics Problem Solving'],
            estimatedCostRange: '₹30,000 - ₹1L',
            keyActionTip: 'Aim for 550+ marks in NEET UG to secure a government dental seat.'
          },
          {
            id: 'bds_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Dental Surgery Degree',
            title: 'BDS (Bachelor of Dental Surgery)',
            subtitle: '4 Years Academic Training + 1 Year Compulsory Paid Clinical Dental Internship',
            durationYears: '5 Years',
            description: 'Clinical training in conservative dentistry, oral surgery, prosthodontics, periodontics, and pediatric dentistry.',
            branchOrSpecializationToChoose: 'Choose: BDS via State / MCC counseling.',
            mandatoryEligibility: ['NEET UG Rank allotment + 10+2 PCB clearance'],
            examGateways: [],
            postDegreeExams: ['NEET_MDS'],
            recommendedInstitutions: ['Maulana Azad Institute of Dental Sciences (MAIDS Delhi), Manipal College of Dental Sciences, King George Medical University Dental Faculty'],
            skillsToAcquire: ['Tooth Restoration & Root Canal Treatment (RCT)', 'Tooth Extractions & Suturing', 'Crown & Bridge Prosthetics'],
            estimatedCostRange: '₹1L - ₹8L (Subsidized at Govt Institutes)',
            keyActionTip: 'Complete maximum clinical patient root canal and extraction procedures during internship.'
          },
          {
            id: 'bds_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Specialist Practice & Clinic Ownership',
            title: 'Consultant Dental Surgeon / Dental Clinic Director',
            subtitle: 'Leading private cosmetic dentistry, dental implantology, and smile makeover centers',
            description: 'Run private multi-chair dental practice offering laser dentistry, Invisalign aligners, and dental tourism treatments.',
            mandatoryEligibility: ['BDS with State Dental Council Registration (DCI)'],
            examGateways: [],
            recommendedInstitutions: ['Clove Dental, Apollo White Dental, Private Multi-Chair Dental Clinics'],
            skillsToAcquire: ['Dental Implantology', 'Digital Intraoral 3D Scanning', 'Clinic Practice Management'],
            estimatedCostRange: 'Zero (High Independent Earning)',
            keyActionTip: 'Pursue fellowship in Dental Implantology and clear international licensing exams (ORE/NBDE) if targeting global practice.'
          }
        ]
      }
    }
  },

  // 3. CLINICAL PHARMACIST & DRUG DESIGNER
  pharmacist_drug_designer: {
    id: 'pharmacist_drug_designer',
    title: 'Clinical Pharmacist & Pharmaceutical Drug Designer (B.Pharm / Pharm.D)',
    slug: 'pharmacist-drug-designer',
    domainId: 'life_sciences_medicine',
    domainName: 'Medical, Healthcare & AYUSH',
    shortDescription: 'Formulate life-saving vaccines, design targeted oncology medicines, conduct clinical trials, and direct pharmaceutical manufacturing.',
    holisticInsight: 'Pharmacy is India’s pharmaceutical superpower engine. Accessible via 10+2 BiPC or MPC -> State Pharmacy CETs / BITSAT -> 4-Year B.Pharm or 6-Year Doctor of Pharmacy (Pharm.D) -> GPAT -> NIPER M.Pharm / MS (Pharm) leading to top global pharma R&D.',
    recommendedDegreeBranch: 'B.Pharm (Bachelor of Pharmacy) or Pharm.D (Doctor of Pharmacy) -> GPAT -> NIPER M.Pharm',
    iconName: 'Shield',
    tags: ['Pharmacy', 'B.Pharm', 'Pharm.D', 'GPAT', 'NIPER', 'Drug Design', 'Clinical Trials', 'Vaccines'],
    marketDemand: 'HIGH',
    streams: {
      BiPC: {
        streamType: 'BiPC',
        streamName: '10+2 BiPC to B.Pharm / Pharm.D -> GPAT -> NIPER Drug R&D Track',
        streamShortDesc: '10+2 PCB -> B.Pharm / Pharm.D -> GPAT -> NIPER -> Global Pharma R&D Scientist',
        badgeLabel: 'Pharmaceutical R&D & Clinical Trials Track',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Master medicinal chemistry, pharmacology, toxicology, drug delivery nanotechnology, and clinical trial regulations in India’s leading pharma institutes.',
        branchSelectionStrategy: 'In counseling, choose B.Pharm (for industrial manufacturing/R&D) or Pharm.D (for hospital clinical pharmacology). Prepare for GPAT in final year.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'LOW', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 9 },
        pros: ['India is the "Pharmacy of the World" supplying 20%+ of global generic medicines and 60% of vaccines with immense job stability', 'Eligible through BOTH BiPC (Biology) and MPC (Maths) streams'],
        cons: ['Requires master’s degree (M.Pharm / MS at NIPER) for high-paying pharmaceutical drug discovery R&D leadership'],
        entryJobRoles: ['Formulation R&D Scientist', 'Clinical Data Manager', 'Drug Regulatory Affairs Specialist', 'Hospital Clinical Pharmacist'],
        fiveYearTrajectory: 'Principal Drug Discovery Scientist / Regulatory Affairs Director (₹16L - ₹40L LPA).',
        salarySpectrumLpa: { entryMin: 4.8, entryMax: 9.5, experiencedPeak: 32.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'pharm_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Science Foundation',
            subtitle: 'Strong foundation in chemistry and biological sciences',
            description: 'Pass 10th standard with strong score in science.',
            mandatoryEligibility: ['Pass 10th with min 50%'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Basic Chemical Reactions', 'Cell Biology'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Focus on chemical bonding and periodic table elements.'
          },
          {
            id: 'pharm_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (BiPC / MPC)',
            title: '10+2 Intermediate in BiPC or MPC + State CET / BITSAT',
            subtitle: 'Organic chemistry, biology/mathematics, and physics',
            durationYears: '2 Years',
            description: 'Clear state engineering & pharmacy entrance exams (EAMCET, KCET, MHT CET, BITSAT) for pharmacy admissions.',
            mandatoryEligibility: ['10+2 with PCB or PCM with min 50%'],
            examGateways: ['CUET_UG'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Organic Reaction Mechanisms', 'Biomolecules & Chemical Kinetics'],
            estimatedCostRange: '₹25,000 - ₹70,000',
            keyActionTip: 'Master organic chemistry functional groups and stoichiometry.'
          },
          {
            id: 'pharm_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Pharmacy Professional Degree',
            title: 'B.Pharm (Bachelor of Pharmacy) or Pharm.D',
            subtitle: 'Medicinal chemistry, pharmaceutics, pharmacology, pharmacognosy, and pharmaceutical analysis',
            durationYears: '4 Years',
            description: 'Formulate tablets, injectable vaccines, liposomal drug carriers, and test drug efficacy in laboratory animal models.',
            branchOrSpecializationToChoose: 'Choose: B.Pharm at PCI-recognized university with high research accreditation.',
            mandatoryEligibility: ['State CET / CUET rank + 10+2 pass'],
            examGateways: [],
            postDegreeExams: ['GPAT_EXAM'],
            recommendedInstitutions: ['NIPER Mohali/Hyderabad, Jamia Hamdard New Delhi, BITS Pilani, ICT Mumbai, Panjab University'],
            skillsToAcquire: ['HPLC / GC-MS Analytical Chromatography', 'Drug Formulation & Quality Control (GLP/GMP)', 'Clinical Pharmacokinetics'],
            estimatedCostRange: '₹1.5L - ₹6L (Subsidized at Govt/NIPER)',
            keyActionTip: 'Crack GPAT (Graduate Pharmacy Aptitude Test) with high percentile to secure AICTE monthly scholarship of ₹12,400 during M.Pharm.'
          },
          {
            id: 'pharm_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Pharmaceutical R&D Leadership',
            title: 'Senior Scientist / Regulatory Affairs Manager',
            subtitle: 'Developing novel drug formulations, filing US-FDA ANDA dossiers, and leading vaccine scale-up',
            description: 'Direct clinical trial protocols, drug regulatory compliance, and formulation innovations for global pharmaceutical exports.',
            mandatoryEligibility: ['B.Pharm / M.Pharm with State Pharmacy Council Registration'],
            examGateways: [],
            recommendedInstitutions: ['Sun Pharma, Dr. Reddy’s Laboratories, Cipla, Biocon, Serum Institute of India, Pfizer, Novartis'],
            skillsToAcquire: ['US-FDA 21 CFR Regulations', 'Molecular Drug Docking & Computational Chemistry'],
            estimatedCostRange: 'Zero (High Pharma Industry Remuneration)',
            keyActionTip: 'Specialize in Biologics, Biosimilars, and mRNA vaccine technologies for highest international salaries.'
          }
        ]
      }
    }
  },

  // 4. PHYSIOTHERAPIST & SPORTS REHABILITATION SPECIALIST
  physiotherapist: {
    id: 'physiotherapist',
    title: 'Physiotherapist & Sports Rehabilitation Doctor (BPT -> MPT)',
    slug: 'physiotherapist-sports-rehab',
    domainId: 'life_sciences_medicine',
    domainName: 'Medical, Healthcare & AYUSH',
    shortDescription: 'Rehabilitate injured Olympic athletes, stroke patients, post-surgical cases, and spinal cord injuries through neuromuscular therapy.',
    holisticInsight: 'Physiotherapy is an indispensable clinical discipline in modern orthopedics, neurology, and elite sports franchises (IPL, ISL, Olympic teams). Accessible via 10+2 BiPC (PCB) -> State Allied Health CETs / NEET UG -> 4.5-Year BPT Degree -> MPT Sports / Neuro / Ortho Specialization.',
    recommendedDegreeBranch: 'BPT (Bachelor of Physiotherapy) -> MPT (Master of Physiotherapy - Sports / Orthopedics / Neurology)',
    iconName: 'Shield',
    tags: ['Physiotherapy', 'BPT', 'MPT', 'Sports Rehab', 'Athletes', 'Orthopedics', 'BCCI', 'Rehabilitation'],
    marketDemand: 'HIGH',
    streams: {
      BiPC: {
        streamType: 'BiPC',
        streamName: '10+2 BiPC to 4.5-Year BPT -> MPT Sports Physiotherapy Track',
        streamShortDesc: '10+2 PCB -> BPT -> 6-Month Internship -> MPT Sports -> National Sports Team / Spine Clinic',
        badgeLabel: 'Sports & Musculoskeletal Rehab Track',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Master biomechanics, kinesiology, manual therapy, dry needling, electrotherapy, and neuromuscular rehabilitation.',
        branchSelectionStrategy: 'In counseling, choose BPT (Bachelor of Physiotherapy) from a government medical college or recognized university.',
        metrics: { timeToFirstJobYears: 4.5, financialInvestment: 'LOW', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 10 },
        pros: ['Direct opportunity to travel globally with professional sports teams (cricket franchises, Olympic squads)', 'High autonomy to establish independent physical therapy clinics with zero surgical hospital overhead'],
        cons: ['Physically demanding career requiring manual therapy stamina and patient handling'],
        entryJobRoles: ['Clinical Physiotherapist', 'Sports Team Rehab Associate', 'Cardio-Pulmonary Physiotherapist', 'Pediatric Neuro-Rehab Specialist'],
        fiveYearTrajectory: 'Head Sports Physiotherapist (BCCI / National Squads) / Clinic Chain Director (₹14L - ₹35L LPA).',
        salarySpectrumLpa: { entryMin: 4.5, entryMax: 8.5, experiencedPeak: 28.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'pt_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Biology Foundation',
            subtitle: 'Interest in human body movement, bones, muscles, and sports fitness',
            description: 'Pass 10th standard with strong foundation in biological sciences.',
            mandatoryEligibility: ['Pass 10th with min 50%'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Skeletal System Basics', 'Physical Sports Activity'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Participate in school sports and study muscle and joint anatomy.'
          },
          {
            id: 'pt_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (BiPC)',
            title: '10+2 Intermediate in BiPC + State Allied Health CET / NEET',
            subtitle: 'Human muscular system, joint mechanics, physics levers, and physiology',
            durationYears: '2 Years',
            description: 'Complete 10+2 with Physics, Chemistry, and Biology to secure BPT admission.',
            mandatoryEligibility: ['10+2 PCB pass with min 50%'],
            examGateways: ['CUET_UG', 'NEET_UG'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Human Muscular Anatomy', 'Physics Levers & Torques'],
            estimatedCostRange: '₹25,000 - ₹65,000',
            keyActionTip: 'Focus on human anatomy and biomechanics basics in biology.'
          },
          {
            id: 'pt_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Physiotherapy Professional Degree',
            title: 'BPT (Bachelor of Physiotherapy)',
            subtitle: '4 Years Academic Coursework + 6 Months Compulsory Clinical Rotatory Hospital Internship',
            durationYears: '4.5 Years',
            description: 'Clinical postings across ICU chest physiotherapy, orthopedic fracture rehab, stroke recovery, and sports injuries.',
            branchOrSpecializationToChoose: 'Choose: BPT at recognized medical university.',
            mandatoryEligibility: ['State CET rank + 10+2 PCB clearance'],
            examGateways: [],
            recommendedInstitutions: ['Nizam’s Institute of Medical Sciences (NIMS Hyderabad), Manipal College of Health Professions, KEM Hospital Mumbai, CMC Vellore'],
            skillsToAcquire: ['Joint Mobilization Techniques', 'Gait Analysis & Biomechanics', 'Dry Needling & Kinesio Taping', 'Exercise Prescription'],
            estimatedCostRange: '₹1L - ₹5L',
            keyActionTip: 'Volunteer at national athletic meets and marathons to gain on-field acute injury management experience.'
          },
          {
            id: 'pt_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Sports & Clinical Leadership',
            title: 'Head Physiotherapist / Sports Rehabilitation Director',
            subtitle: 'Directing athlete return-to-play protocols for IPL franchises, Olympic academies, and specialized spine hospitals',
            description: 'Lead neuromuscular rehabilitation, post-operative ACL recovery, and performance optimization for elite performers.',
            mandatoryEligibility: ['BPT / MPT with registered membership in Indian Association of Physiotherapists (IAP)'],
            examGateways: [],
            recommendedInstitutions: ['Sports Authority of India (SAI), BCCI, IPL Franchises, Apollo Rehabilitation Centers, Kokilaben Hospital'],
            skillsToAcquire: ['Isokinetic Muscle Testing', 'Advanced Sports Taping & Concussion Protocols'],
            estimatedCostRange: 'Zero (High Practice Remuneration)',
            keyActionTip: 'Earn international certifications in Dry Needling (CDNT) and Certified Strength & Conditioning Specialist (CSCS).'
          }
        ]
      }
    }
  },

  // 5. VETERINARY SURGEON & WILDLIFE DOCTOR
  veterinary_doctor: {
    id: 'veterinary_doctor',
    title: 'Veterinary Surgeon & Wildlife Doctor (B.V.Sc & A.H)',
    slug: 'veterinary-surgeon-b-v-sc',
    domainId: 'life_sciences_medicine',
    domainName: 'Medical, Healthcare & AYUSH',
    shortDescription: 'Heal companion pets, livestock, exotic zoo animals, and endangered wildlife in national parks and veterinary hospitals.',
    holisticInsight: 'Veterinary science is the ultimate discipline for animal lovers, combining animal surgery, epidemiology, wildlife conservation, and animal husbandry. Accessible via 10+2 BiPC (PCB) -> NEET UG / State Veterinary CETs -> 5.5-Year B.V.Sc & A.H Degree (Veterinary Council of India accredited).',
    recommendedDegreeBranch: 'B.V.Sc & A.H (Bachelor of Veterinary Science & Animal Husbandry) -> M.V.Sc Specialization',
    iconName: 'Shield',
    tags: ['Veterinary', 'B.V.Sc', 'Animals', 'Wildlife', 'NEET UG', 'Pets', 'Zoology', 'Conservation'],
    marketDemand: 'HIGH',
    streams: {
      BiPC: {
        streamType: 'BiPC',
        streamName: '10+2 BiPC to NEET UG / State CET -> 5.5-Year B.V.Sc & A.H Track',
        streamShortDesc: '10+2 PCB -> NEET UG -> 5.5-Year B.V.Sc -> Veterinary Surgeon / Wildlife Sanctuary Lead',
        badgeLabel: 'Animal Medicine & Wildlife Surgery Track',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Master veterinary surgery, animal pharmacology, infectious zoonotic diseases, dairy genetics, and wildlife capture anesthesia.',
        branchSelectionStrategy: 'Secure B.V.Sc & A.H seat via State Veterinary counseling or VCI All-India NEET UG quota (15%).',
        metrics: { timeToFirstJobYears: 5.5, financialInvestment: 'LOW', competitionLevel: 'HIGH', flexibilityScore: 9, practicalToTheoryRatio: 10 },
        pros: ['Guaranteed government recruitment as Veterinary Assistant Surgeon (VAS / Class-1 Gazetted Officer) in state animal husbandry departments', 'Booming pet care industry in metropolitan cities with lucrative private clinic revenues'],
        cons: ['Requires patience, physical safety precautions, and deep empathy when treating non-verbal animal patients'],
        entryJobRoles: ['Veterinary Assistant Surgeon (VAS)', 'Small Animal Pet Clinic Doctor', 'Wildlife Sanctuary Veterinarian', 'Dairy Farm Herd Health Lead'],
        fiveYearTrajectory: 'Chief Wildlife Veterinary Officer / Super-Specialty Pet Hospital Director (₹14L - ₹36L LPA).',
        salarySpectrumLpa: { entryMin: 6.0, entryMax: 11.0, experiencedPeak: 30.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'vet_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Science & Zoology Passion',
            subtitle: 'Strong foundation in biology and active empathy for domestic and wild animals',
            description: 'Pass 10th standard with strong score in science and zoology.',
            mandatoryEligibility: ['Pass 10th with min 50%'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Animal Behavior Observation', 'General Science'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Volunteer at local animal shelters or SPCA rescue centers.'
          },
          {
            id: 'vet_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (BiPC)',
            title: '10+2 Intermediate in BiPC + NEET UG / State Vet CET',
            subtitle: 'Zoology, animal physiology, organic chemistry, and physics',
            durationYears: '2 Years',
            description: 'Master PCB to crack NEET UG (15% VCI All India Quota) and State Veterinary Entrance Exams.',
            mandatoryEligibility: ['10+2 PCB pass with min 50% aggregate (English mandatory)'],
            examGateways: ['NEET_UG'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['NCERT Zoology & Botany Mastery', 'Physical Science Problem Solving'],
            estimatedCostRange: '₹30,000 - ₹90,000',
            keyActionTip: 'Aim for 500+ marks in NEET UG to secure a government veterinary college seat.'
          },
          {
            id: 'vet_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Veterinary Professional Degree',
            title: 'B.V.Sc & A.H (Bachelor of Veterinary Science & Animal Husbandry)',
            subtitle: '4.5 Years Academic Study + 1 Year Compulsory Rotatory Internship at Veterinary Clinics & Farms',
            durationYears: '5.5 Years',
            description: 'Clinical rotations across small animal surgery, large animal bovine medicine, equine orthopedics, and wildlife medicine.',
            branchOrSpecializationToChoose: 'Choose: B.V.Sc & A.H at VCI-accredited state veterinary university.',
            mandatoryEligibility: ['NEET UG / State Veterinary CET rank allotment'],
            examGateways: [],
            postDegreeExams: ['ICAR_AIEEA'],
            recommendedInstitutions: ['IVRI Izatnagar, TANUVAS Chennai, GADVASU Ludhiana, PVNR TVU Hyderabad, Bombay Veterinary College'],
            skillsToAcquire: ['Veterinary Soft Tissue & Orthopedic Surgery', 'Animal Anesthesia Protocols', 'Zoonotic Disease Prevention', 'Veterinary Diagnostic Imaging (X-Ray/Ultrasound)'],
            estimatedCostRange: '₹20,000 - ₹1.2L (Govt Subsidized) + Internship Stipend',
            keyActionTip: 'Complete clinical postings in both urban companion animal hospitals and rural large animal cattle centers.'
          },
          {
            id: 'vet_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Veterinary Leadership & Wildlife Practice',
            title: 'Senior Veterinary Surgeon / Wildlife Conservation Lead',
            subtitle: 'Directing wildlife rescue operations, national park health, or multi-doctor specialty pet hospitals',
            description: 'Lead complex animal surgeries, tranquilization protocols for tiger/elephant conservation, and advanced diagnostics.',
            mandatoryEligibility: ['B.V.Sc & A.H with Veterinary Council of India (VCI) registration'],
            examGateways: [],
            recommendedInstitutions: ['State Animal Husbandry Depts, Wildlife Institute of India (WII), National Parks (Kaziranga/Jim Corbett), Max Vets, DCC Animal Hospital'],
            skillsToAcquire: ['Dart Gun Tranquilization & Wildlife Anesthesia', 'Advanced Orthopedic Bone Plating in Animals'],
            estimatedCostRange: 'Zero (Class-1 Gazetted Officer / High Private Practice)',
            keyActionTip: 'Establish a private pet surgical hospital with ultrasound and digital radiography facilities in metropolitan hubs.'
          }
        ]
      }
    }
  }
};
