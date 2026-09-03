import { CareerRole } from '../../types/pathway';

export const SOLDIER_DEFENSE_PATHWAY: CareerRole = {
  id: 'soldier_defense_forces',
  title: 'Soldier, Armed Forces Officer & Special Forces Commando',
  slug: 'soldier-defense-forces',
  domainId: 'aviation_defense_maritime',
  domainName: 'Defense, Armed Forces & Tactical Security',
  shortDescription: 'Defend the nation on land, air, and sea as a front-line soldier, commissioned combat leader (NDA/CDS), or elite Special Forces Commando (Para SF / MARCOS / Garud).',
  holisticInsight: 'Defense careers can be achieved at multiple junctions: 10th Pass via Army Agniveer Physical Rally Tests (1.6km run, pull-ups, 9ft ditch jump), 10+2 MPC/Non-Science via UPSC NDA & 10+2 Technical Entry Scheme (TES), Post-Graduation via UPSC CDS, AFCAT, and CAPF (BSF/CRPF/CISF), or through Physical Education & Sports degrees (LNIPE/NIS). Elite Special Forces probation (Para SF / MARCOS) is volunteered from within serving personnel.',
  recommendedDegreeBranch: 'NDA Military Science Degree (JNU Accredited), B.Tech in Core Engineering (for TES/CDS Tech), or B.P.Ed (Physical Education)',
  iconName: 'Shield',
  tags: ['Soldier', 'Army', 'NDA', 'Agniveer', 'Para SF', 'Commando', 'SSB', 'Physical Fitness', 'CDS', 'Navy', 'Air Force'],
  marketDemand: 'HIGH',
  streams: {
    MPC: {
      streamType: 'MPC',
      streamName: 'Commissioned Combat Officer & Technical Arms Route (NDA / TES / CDS)',
      streamShortDesc: '10+2 MPC -> UPSC NDA / 10+2 Army TES -> IMA / NDA -> Commissioned Lieutenant',
      badgeLabel: 'Premier Officer Combat Track',
      themeColor: {
        primary: '#ea580c',
        border: 'border-orange-500/30',
        bg: 'bg-orange-500/10',
        text: 'text-orange-600',
        glow: 'shadow-orange-500/20'
      },
      approachPhilosophy: 'Direct pathway to commissioned officer rank (Lieutenant / Flying Officer / Sub-Lieutenant) commanding battalions, tanks (Armoured Corps), artillery regiments, or fighter squadrons combining sharp intellectual strategy with peak physical stamina.',
      branchSelectionStrategy: 'In 10+2 MPC, achieve >60% in PCM and appear for UPSC NDA Exam or 10+2 Army Technical Entry Scheme (TES) based on JEE score. At NDA Khadakwasla, earn an accredited B.Tech/B.Sc degree while undergoing rigorous military tactics and physical conditioning.',
      metrics: {
        timeToFirstJobYears: 4,
        financialInvestment: 'FREE_SCHOLARSHIP',
        competitionLevel: 'EXTREME',
        flexibilityScore: 9,
        practicalToTheoryRatio: 10
      },
      pros: [
        '100% Fully Funded military academy training with monthly student stipend (₹56,100/mo in final year)',
        'Highest social prestige, permanent central gazetted officer status, pension, medical, and family housing',
        'Direct gateway to volunteer for legendary Special Forces selection (Para SF 90-day probation)'
      ],
      cons: [
        'UPSC NDA + 5-Day SSB Interview + Medicals has a combined acceptance rate of under 0.08%',
        'Requires rigorous daily physical fitness (running 5km, swimming, pushups, rope climbing)'
      ],
      entryJobRoles: [
        'Lieutenant (Indian Army - Infantry / Armoured / Artillery)',
        'Flying Officer (Indian Air Force - Fighter Pilot / Transport)',
        'Sub-Lieutenant (Indian Navy - Executive Branch)',
        'Para SF Probationer'
      ],
      fiveYearTrajectory: 'Major / Squadron Leader / Battalion Second-in-Command (₹14L - ₹26L LPA + All Military Perks).',
      salarySpectrumLpa: {
        entryMin: 10.0,
        entryMax: 18.0,
        experiencedPeak: 35.0
      },
      lateralSwitches: [
        {
          id: 'lat_soldier_parasf',
          title: 'Para Special Forces (Para SF) & Airborne Probation',
          fromStage: 'After Commissioning from IMA / OTA',
          toTarget: 'Special Forces Airborne Operative (9/10/21 Para SF)',
          bridgeExamOrMechanism: '90-Day Hell Week Physical & Tactical Probation',
          description: 'Voluntary selection test for commissioned officers involving extreme physical endurance, tactical combat shooting, high-altitude parachuting, and counter-terror survival.',
          durationAdjustment: 'Immediate Selection',
          keyBenefit: 'Earn the coveted Balidan Badge and Maroon Beret with elite operational commanding authority.'
        },
        {
          id: 'lat_soldier_capf',
          title: 'Central Armed Police Forces Assistant Commandant (CAPF AC)',
          fromStage: 'Graduate Degree',
          toTarget: 'Assistant Commandant in BSF, CRPF, CISF, ITBP, SSB',
          bridgeExamOrMechanism: 'UPSC CAPF (AC) Examination',
          description: 'Crack UPSC CAPF AC exam with physical efficiency test (100m sprint, 800m run, long jump, shot put) to command border security and tactical anti-naxal battalions.',
          durationAdjustment: 'Direct Central Appointment',
          keyBenefit: 'Direct Class-1 Central Gazetted Police Officer command.'
        }
      ],
      milestones: [
        {
          id: 'm_soldier_mpc_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board & Physical Fitness Habituation',
          subtitle: 'Build endurance running (2.4 km), 15 pull-ups, swimming, and mental agility',
          description: 'Pass 10th standard with strong foundation in mathematics and daily outdoor sports discipline.',
          mandatoryEligibility: ['Pass 10th Board with min 60% in Science & Maths', 'Physical fitness routine'],
          examGateways: ['POLYCET_DIPLOMA'],
          recommendedInstitutions: ['Sainik Schools / Rashtriya Military Schools (RMS) / Secondary Schools'],
          skillsToAcquire: ['1.6 km Endurance Running in < 6 mins', 'Push-ups & Core Strength', 'Basic Map Orientation'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Run 3 to 4 km three times a week and practice unassisted chin-ups and swimming.'
        },
        {
          id: 'm_soldier_mpc_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (MPC)',
          title: '10+2 Intermediate in MPC + UPSC NDA Exam Preparation',
          subtitle: 'Mathematics (300 marks), General Ability (600 marks), and 5-Day SSB Interview Prep',
          durationYears: '2 Years',
          description: 'Master Class 11-12 Mathematics (Calculus, Trigonometry, Vectors) and General Knowledge while preparing for UPSC NDA I & II written exams and SSB Psychological tests.',
          mandatoryEligibility: ['10+2 with Physics and Mathematics (Army Wing allows any stream, Air Force/Navy requires Physics & Maths)'],
          examGateways: ['NDA_EXAM', 'JEE_MAIN'],
          recommendedInstitutions: ['Sainik Schools / Junior Colleges'],
          skillsToAcquire: ['Officer Like Qualities (OLQ)', 'Picture Perception & Discussion Test (PPDT)', 'Group Planning Exercises (GPE)'],
          estimatedCostRange: '₹25,000 - ₹80,000',
          keyActionTip: 'Clear UPSC NDA written exam in Class 12 and practice extempore lecturette topics daily.'
        },
        {
          id: 'm_soldier_mpc_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Military Academy Degree & Cadet Training',
          title: 'National Defence Academy (NDA) / Indian Military Academy (IMA)',
          subtitle: '3 Years at NDA Khadakwasla + 1 Year at IMA Dehradun (B.Tech / B.Sc Degree)',
          durationYears: '4 Years',
          description: 'Undergo world-class military training: tactical field craft, weapon handling, obstacle courses, military history, leadership, and high-altitude mountain warfare.',
          branchOrSpecializationToChoose: 'MUST Choose: Military Engineering, Tactical Sciences, or Applied Science degree at NDA.',
          mandatoryEligibility: ['UPSC NDA Rank + Recommended by Services Selection Board (SSB) + Medical Clearance'],
          examGateways: [],
          postDegreeExams: ['CDS_EXAM'],
          recommendedInstitutions: ['National Defence Academy (NDA Khadakwasla Pune)', 'Indian Military Academy (IMA Dehradun)'],
          skillsToAcquire: ['Small Arms Combat Marksmanship', 'Night Navigation & Jungle Survival', 'Battalion Tactical Command'],
          estimatedCostRange: '100% Free / Government Sponsored + Monthly Stipend',
          keyActionTip: 'Maintain peak fitness to earn the NDA Academy Blazer and top merit in physical obstacle tests.'
        },
        {
          id: 'm_soldier_mpc_4',
          phase: 'PHASE_POST_GRAD_RECRUITMENT',
          phaseLabel: 'Commissioning & Combat Leadership',
          title: 'Passing Out Parade (POP) & Presidential Commission as Lieutenant',
          subtitle: 'Leading troops on borders (Siachen Glacier, Line of Control, High Altitude Warfare)',
          durationYears: 'Immediate Commissioning',
          description: 'Step on the sacred Antim Pag (Final Step) at IMA Dehradun to receive stars on shoulders and take command of a 30-soldier combat platoon.',
          mandatoryEligibility: ['Graduation from IMA / NDA with complete physical test qualifications'],
          examGateways: ['CDS_EXAM'],
          postDegreeExams: ['CDS_EXAM'],
          recommendedInstitutions: ['Indian Army Regiments (Gorkha, Sikh, Rajputana Rifles, Parachute Regiment)'],
          skillsToAcquire: ['Close Quarter Battle (CQB)', 'Counter-Insurgency & Anti-Terror Operations', 'High Altitude Warfare'],
          estimatedCostRange: 'Zero (Full Central Salary & Allowances)',
          keyActionTip: 'Volunteer for the 90-day Para Special Forces probation at the Special Forces Training School (SFTS Nahan).'
        },
        {
          id: 'm_soldier_mpc_5',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Special Forces & Strategic Command',
          title: 'Special Forces Commando Team Leader / Colonel (Commanding Officer)',
          subtitle: 'Commanding elite counter-terror surgical strikes, airborne raids, and battalion maneuvers',
          description: 'Lead covert strategic operations, high-altitude special ops, and direct national defense preparedness.',
          mandatoryEligibility: ['Special Forces Qualified / Senior Staff College Graduate'],
          examGateways: [],
          recommendedInstitutions: ['Special Forces Battalions (Para SF)', 'Army War College Mhow'],
          skillsToAcquire: ['Airborne Freefall (Combat HALO/HAHO)', 'Strategic Defense Planning', 'Combat Diving & Amphibious Assault'],
          estimatedCostRange: 'Zero (Highest Public Honor)',
          keyActionTip: 'Serve with unwavering honor, placing safety, honor, and welfare of the country first.'
        }
      ]
    },
    VOCATIONAL_GUILD: {
      streamType: 'VOCATIONAL_GUILD',
      streamName: 'Direct Agniveer Soldier Rally & Tactical Combat Route',
      streamShortDesc: '10th/12th Pass -> Army Agniveer Physical Rally (1.6 km Run, Pull-ups, 9-ft Ditch) -> Active Combat Soldier',
      badgeLabel: 'Direct Soldier Combat Entry',
      themeColor: {
        primary: '#f97316',
        border: 'border-orange-500/30',
        bg: 'bg-orange-500/10',
        text: 'text-orange-600',
        glow: 'shadow-orange-500/20'
      },
      approachPhilosophy: 'Direct grassroots entry right after 10th or 12th standard via state military recruitment rallies based purely on physical grit, 1.6km running endurance, pull-ups, and common entrance exams to serve as a front-line combat soldier.',
      branchSelectionStrategy: 'In 10th or 12th, register for Indian Army Agniveer General Duty (GD), Technical, Clerk, or Tradesman recruitment rallies in your district. Excel in the physical fitness test (PFT) and medical fitness.',
      metrics: {
        timeToFirstJobYears: 1,
        financialInvestment: 'FREE_SCHOLARSHIP',
        competitionLevel: 'EXTREME',
        flexibilityScore: 8,
        practicalToTheoryRatio: 10
      },
      pros: [
        'Immediate employment right after 10th/12th with starting salary ₹30,000 to ₹40,000/month + Seva Nidhi corpus',
        'Top 25% selected directly for permanent 15+ years regular military service with full lifelong pension',
        'Direct qualification for Army Special Forces probation (Para SF Commando) from infantry units'
      ],
      cons: [
        'Demands supreme physical fitness: 1.6 km run in under 5 minutes 30 seconds to score Group-1 60 marks'
      ],
      entryJobRoles: [
        'Agniveer General Duty (GD) Soldier',
        'Agniveer Technical Arms Soldier',
        'Agniveer Clerk / Store Keeper Technical',
        'Para Commando Airborne Volunteer'
      ],
      fiveYearTrajectory: 'Havildar / Naib Subedar (Junior Commissioned Officer - JCO) / Permanent SF Operative (₹8L - ₹16L LPA).',
      salarySpectrumLpa: {
        entryMin: 4.8,
        entryMax: 8.5,
        experiencedPeak: 22.0
      },
      lateralSwitches: [
        {
          id: 'lat_agniveer_acc',
          title: 'Army Cadet College (ACC) Commission to Officer Rank',
          fromStage: 'After 2 Years Serving as Soldier / Agniveer',
          toTarget: 'Officer Cadet at ACC Wing IMA Dehradun',
          bridgeExamOrMechanism: 'Army Cadet College (ACC) Written Exam + SSB Interview',
          description: 'Serving soldiers can appear for internal ACC exams to get commissioned directly as Lieutenant officers in the Indian Army.',
          durationAdjustment: 'Direct Officer Conversion',
          keyBenefit: 'Transforms a front-line soldier into a commissioned combat officer with full career growth to General.'
        }
      ],
      milestones: [
        {
          id: 'm_soldier_voc_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Completion & Ground Physical Training',
          subtitle: 'Pass 10th standard with min 45% aggregate and 33% in each subject',
          description: 'Pass 10th standard while training daily on local running tracks for 1600m sprints and pull-ups.',
          mandatoryEligibility: ['Passed 10th / Matriculation with min 45% aggregate and 33% in each subject'],
          examGateways: [],
          recommendedInstitutions: ['Local District Ground Training / Secondary Schools'],
          skillsToAcquire: ['1600m Run in 5:30 mins (Group 1 PFT)', '10 Clean Chin-ups (40 Marks)', '9-Foot Ditch Jump & Zig-Zag Balance'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Practice interval sprint training: 400m x 4 sets with 1-minute recovery to build VO2 max speed.'
        },
        {
          id: 'm_soldier_voc_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: 'Physical Fitness Test (PFT) & Medical Rally',
          title: 'Army Recruitment Rally & Physical Standard Test (PST)',
          subtitle: 'Score 100/100 marks in Physical Fitness Test (PFT) and pass Medical Examination',
          durationYears: '6 Months',
          description: 'Attend district Agniveer rally: clear 1.6km run, beam pull-ups, 9ft ditch jump, zig-zag balance, and comprehensive military medical checks (vision 6/6, flat foot, knock knees, hearing).',
          mandatoryEligibility: ['Age: 17.5 to 21 years', 'Height min 166-170 cm depending on state region'],
          examGateways: [],
          recommendedInstitutions: ['Army Recruiting Office (ARO / ZRO) Rally Grounds'],
          skillsToAcquire: ['Extreme Endurance Stamina', 'Mental Toughness in High Adrenaline Groups'],
          estimatedCostRange: 'Zero Exam Fee',
          keyActionTip: 'Protect joints, maintain proper running form, and ensure zero ear wax and dental issues before medicals.'
        },
        {
          id: 'm_soldier_voc_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Recruit Training Camp',
          title: 'Military Regimental Centre Basic & Advanced Combat Training',
          subtitle: '31 Weeks intensive soldier training at Regimental Training Centers',
          durationYears: '31 Weeks',
          description: 'Train at elite centers (Parachute Regimental Centre, Maratha Light Infantry Centre, Punjab Regimental Centre): rifle marksmanship, trench warfare, tactical combat casualty care, and night patrols.',
          branchOrSpecializationToChoose: 'Choose: Infantry, Armoured Corps, Combat Engineers, or Signal Corps.',
          mandatoryEligibility: ['Selected in Agniveer CEE Written Exam and PFT'],
          examGateways: [],
          recommendedInstitutions: ['Parachute Regimental Centre (Bengaluru)', 'Infantry Training Centers'],
          skillsToAcquire: ['INSAS / AK-203 / SIG Sauer Rifle Mastery', 'Tactical Hand-to-Hand Unarmed Combat', 'Battlefield First Aid'],
          estimatedCostRange: 'Paid Training Phase (Stipend ₹30,000/mo)',
          keyActionTip: 'Score marksman category in weapon firing to be shortlisted for sniper training.'
        },
        {
          id: 'm_soldier_voc_4',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Active Combat Deployment',
          title: 'Front-Line Combat Soldier / Elite Commando',
          subtitle: 'Deployed on active borders, Line of Control, high-altitude posts, and UN Peacekeeping',
          description: 'Serve with gallantry, execute tactical combat operations, and maintain ironclad defense of Indian sovereignty.',
          mandatoryEligibility: ['Completed Regimental Training with passing out oaths'],
          examGateways: [],
          recommendedInstitutions: ['Frontline Indian Army Units'],
          skillsToAcquire: ['Battlefield Survival', 'Counter-Terror Sweep Operations'],
          estimatedCostRange: 'Zero (Full Salary & Military Benefits)',
          keyActionTip: 'Aim for top 25% merit for permanent 15-year regular army service and apply for ACC officer commission.'
        }
      ]
    },
    POLYTECHNIC: {
      streamType: 'POLYTECHNIC',
      streamName: '3-Year Polytechnic Diploma to Army Technical Corps & JCO Route',
      streamShortDesc: '10th -> POLYCET -> 3-Yr Diploma (Mech/ECE/Civil) -> Junior Commissioned Officer (JCO) & Tech Soldier',
      badgeLabel: 'Technical Military Specialist Track',
      themeColor: {
        primary: '#06b6d4',
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-700',
        glow: 'shadow-cyan-500/20'
      },
      approachPhilosophy: 'Direct technical engineering entry into Indian Army Corps of Electronics and Mechanical Engineers (EME), Military Engineer Services (MES), and Signals managing radar networks, tanks, missiles, and drone surveillance systems.',
      branchSelectionStrategy: 'In 3-Year Polytechnic Diploma, choose Mechanical, ECE, EEE, or Civil Engineering. Apply for Army Technical Soldier and Junior Commissioned Officer (JCO) direct recruitment.',
      metrics: {
        timeToFirstJobYears: 3.5,
        financialInvestment: 'LOW',
        competitionLevel: 'MODERATE',
        flexibilityScore: 9,
        practicalToTheoryRatio: 10
      },
      pros: [
        'Direct bonus points (up to 50 marks) in Agniveer Technical entrance for 3-Year Diploma holders',
        'Direct technical responsibility over advanced radars, drone communication arrays, and heavy combat tanks',
        'Eligibility for ECET lateral B.Tech degree or direct JCO recruitment'
      ],
      cons: [
        'Must clear the standard 1600m physical running test alongside technical trade tests'
      ],
      entryJobRoles: [
        'Agniveer Technical (Aviation & Ammunition Examiner)',
        'Junior Engineer (Military Engineer Services - MES)',
        'Radar & Drone Systems Technician (Signals / EME)'
      ],
      fiveYearTrajectory: 'Subedar / Technical Officer / Senior Weapons Specialist (₹10L - ₹18L LPA).',
      salarySpectrumLpa: { entryMin: 5.5, entryMax: 10.0, experiencedPeak: 25.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_soldier_poly_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Exam & State POLYCET',
          subtitle: 'Secure admission in 3-Year Diploma in Mechanical / ECE / Electrical',
          description: 'Pass 10th board with strong science and mathematics marks.',
          mandatoryEligibility: ['Pass 10th with min 35% in Maths & Science'],
          examGateways: ['POLYCET_DIPLOMA'],
          recommendedInstitutions: ['State Government Polytechnics'],
          skillsToAcquire: ['Basic Electrical & Mechanical Concepts', 'Physical Fitness Running'],
          estimatedCostRange: '₹3,000 - ₹10,000',
          keyActionTip: 'Opt for Diploma in Mechanical, ECE, or Automobile engineering.'
        },
        {
          id: 'm_soldier_poly_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '3-Year Polytechnic Diploma',
          title: '3-Year Diploma in Engineering + Daily Physical Conditioning',
          subtitle: 'Master engine mechanics, digital electronics, circuits, and physical fitness',
          durationYears: '3 Years',
          description: 'Complete accredited 3-year diploma in engineering while maintaining 1.6km running endurance for technical recruitment rallies.',
          branchOrSpecializationToChoose: 'MUST Choose: Mechanical, ECE, Electrical, or Automobile Engineering.',
          mandatoryEligibility: ['Completed 3-Yr Diploma with min 50% aggregate'],
          examGateways: ['ECET_LATERAL'],
          recommendedInstitutions: ['Government Polytechnic Institutes'],
          skillsToAcquire: ['IC Engine Overhaul & Hydraulics', 'Digital RF Communications & Radar', 'Physical Fitness 1600m Running'],
          estimatedCostRange: '₹15,000 - ₹35,000',
          keyActionTip: 'Avail the official 50-mark technical bonus scheme awarded to polytechnic diploma holders in Army technical rallies.'
        },
        {
          id: 'm_soldier_poly_3',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Technical Military Deployment',
          title: 'Army Aviation / Armoured Corps Technical Lead',
          subtitle: 'Maintaining missile batteries, combat helicopters, radar electronics, and drones',
          description: 'Ensure 100% operational readiness of front-line military hardware, tanks, artillery computers, and electronic warfare systems.',
          mandatoryEligibility: ['Technical Diploma and verified military trade tests'],
          examGateways: [],
          recommendedInstitutions: ['Corps of EME / Signals Regimental Centers'],
          skillsToAcquire: ['Advanced Avionics & Armoured Diagnostics', 'Battlefield Electronic Defense'],
          estimatedCostRange: 'Zero (Full Salary & Technical Allowances)',
          keyActionTip: 'Apply for permanent commission through technical officer entry routes.'
        }
      ]
    },
    BiPC: {
      streamType: 'BiPC',
      streamName: 'Army Medical Corps (AMC) & Nursing / Paramedic Soldier Route',
      streamShortDesc: '10+2 BiPC -> Army Nursing Assistant Rally / AFMC MBBS / MNS -> Military Medical Officer',
      badgeLabel: 'Combat Medic & AFMC Officer Track',
      themeColor: {
        primary: '#10b981',
        border: 'border-emerald-500/30',
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-700',
        glow: 'shadow-emerald-500/20'
      },
      approachPhilosophy: 'Heal soldiers in front-line combat hospitals and high-altitude field ambulances as a military doctor (AFMC Pune MBBS), Military Nursing Service (MNS) officer, or Army Nursing Assistant.',
      branchSelectionStrategy: 'In 10+2 BiPC, prepare for NEET UG to enter Armed Forces Medical College (AFMC Pune), or apply for Agniveer Nursing Assistant recruitment rally.',
      metrics: {
        timeToFirstJobYears: 4.5,
        financialInvestment: 'FREE_SCHOLARSHIP',
        competitionLevel: 'EXTREME',
        flexibilityScore: 9,
        practicalToTheoryRatio: 9
      },
      pros: [
        '100% Free MBBS education at premier AFMC Pune with commissioned rank of Captain on graduation',
        'Direct life-saving role in high-altitude triage, battlefield casualty evacuation, and surgical units'
      ],
      cons: [
        'Requires top NEET UG scores (~640+ marks) and rigorous military physical screening'
      ],
      entryJobRoles: ['Captain (Army Medical Corps - AMC)', 'Military Nursing Officer (MNS)', 'Combat Medic Soldier'],
      fiveYearTrajectory: 'Major / Surgeon Specialist in Military Hospitals (₹15L - ₹30L LPA).',
      salarySpectrumLpa: { entryMin: 8.5, entryMax: 18.0, experiencedPeak: 35.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_soldier_bipc_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Exam Foundation',
          subtitle: 'Strong foundation in biology, human anatomy, and physical sports',
          description: 'Pass 10th standard with strong science aptitude.',
          mandatoryEligibility: ['Pass 10th with min 55%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools'],
          skillsToAcquire: ['Basic First Aid & CPR', 'Physical Running Endurance'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Volunteer in school first-aid teams and maintain running fitness.'
        },
        {
          id: 'm_soldier_bipc_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (BiPC)',
          title: '10+2 Intermediate in BiPC + NEET UG & AFMC Preparation',
          subtitle: 'Biology, Physics, Chemistry, and AFMC ToELR (Test of English & Reasoning)',
          durationYears: '2 Years',
          description: 'Master PCB to crack NEET UG for AFMC Pune, or prepare for Army Soldier Technical Nursing Assistant rally.',
          mandatoryEligibility: ['10+2 with PCB and English with min 60%'],
          examGateways: ['NEET_UG', 'CUET_UG'],
          recommendedInstitutions: ['Junior Colleges'],
          skillsToAcquire: ['Human Physiology', 'Pharmacology Basics', 'PFT Physical Fitness'],
          estimatedCostRange: '₹30,000 - ₹80,000',
          keyActionTip: 'Score high in NEET UG to secure AFMC Pune interview and medical board call.'
        },
        {
          id: 'm_soldier_bipc_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'AFMC Medical Training',
          title: 'MBBS at Armed Forces Medical College (AFMC Pune)',
          subtitle: '4.5 Years MBBS + 1 Year Internship with Military Medical Commission',
          durationYears: '5.5 Years',
          description: 'World-class medical education at AFMC Pune with military parade training, extreme weather medicine, and trauma surgery.',
          branchOrSpecializationToChoose: 'Choose: MBBS with military medicine specialization.',
          mandatoryEligibility: ['NEET UG Rank + AFMC Interview & Medical Fitness'],
          examGateways: [],
          recommendedInstitutions: ['Armed Forces Medical College (AFMC Pune)'],
          skillsToAcquire: ['Combat Trauma Surgery', 'High Altitude Pulmonary Edema Management', 'Air Ambulance Evacuation'],
          estimatedCostRange: '100% Free / Govt Sponsored with monthly stipend',
          keyActionTip: 'Master battlefield triage and emergency surgical airway protocols.'
        },
        {
          id: 'm_soldier_bipc_4',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Military Medical Commission',
          title: 'Captain / Major (Army Medical Corps)',
          subtitle: 'Directing forward field hospitals and specialized military healthcare commands',
          description: 'Lead medical detachments in combat zones and military command hospitals serving soldiers and officers.',
          mandatoryEligibility: ['Commissioned Officer in Army Medical Corps'],
          examGateways: [],
          recommendedInstitutions: ['Command Hospitals (Chandimandir, Pune, Lucknow, Kolkata)'],
          skillsToAcquire: ['Combat Casualty Resuscitation', 'Hospital Administrative Command'],
          estimatedCostRange: 'Zero (Prestigious Officer Service)',
          keyActionTip: 'Pursue MD/MS super-specialization fully funded by the Armed Forces.'
        }
      ]
    },
    HEC: {
      streamType: 'HEC',
      streamName: 'Humanities to Army Officer (NDA Army Wing / CDS IMA & OTA)',
      streamShortDesc: '10+2 HEC -> B.A. -> UPSC CDS Exam -> Officers Training Academy (OTA) / IMA',
      badgeLabel: 'Combat Infantry & Intelligence Track',
      themeColor: {
        primary: '#a855f7',
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
        text: 'text-purple-700',
        glow: 'shadow-purple-500/20'
      },
      approachPhilosophy: 'Humanities and Arts students are 100% eligible for the Indian Army Wing through UPSC NDA, and after graduation through UPSC CDS (IMA & OTA Chennai) to serve as combat Infantry leaders, Military Intelligence Corps officers, or Judge Advocate General (JAG) officers.',
      branchSelectionStrategy: 'In 10+2 HEC, master history, geography, and English. In Degree, pursue B.A. or B.A. LL.B (for JAG Corps). Crack UPSC CDS Exam in final year.',
      metrics: {
        timeToFirstJobYears: 4,
        financialInvestment: 'LOW',
        competitionLevel: 'HIGH',
        flexibilityScore: 9,
        practicalToTheoryRatio: 9
      },
      pros: [
        'UPSC CDS written exam (English & GK) is naturally mastered by humanities and arts students',
        'Direct pathway to become an Indian Army Intelligence Corps officer or Judge Advocate General (JAG)',
        'Full equality in officer commanding ranks (Lieutenant to General)'
      ],
      cons: [
        'Must dedicate regular morning/evening hours to physical conditioning (running 5km, pushups, chin-ups)'
      ],
      entryJobRoles: ['Lieutenant (Infantry / Mechanized Infantry)', 'Military Intelligence Officer', 'Judge Advocate General (JAG Officer)'],
      fiveYearTrajectory: 'Captain / Major in Combat Regiments (₹12L - ₹24L LPA).',
      salarySpectrumLpa: { entryMin: 9.5, entryMax: 16.0, experiencedPeak: 30.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_soldier_hec_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board & Physical Sports Foundation',
          subtitle: 'Pass 10th standard while building running and sports stamina',
          description: 'Pass 10th standard with strong general knowledge and physical activity.',
          mandatoryEligibility: ['Pass 10th with min 50%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools'],
          skillsToAcquire: ['Running Endurance', 'Public Speaking & English Fluency'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: "Join NCC (National Cadet Corps) in school to earn 'A' and 'B' certificates for direct SSB entry."
        },
        {
          id: 'm_soldier_hec_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (HEC)',
          title: '10+2 Intermediate in HEC + NCC / Physical Training',
          subtitle: 'Indian history, geography, geopolitics, and NDA Army Wing entrance',
          durationYears: '2 Years',
          description: 'Study 10+2 Humanities while maintaining physical fitness and leadership roles.',
          mandatoryEligibility: ['Class 12 in any stream with min 50%'],
          examGateways: ['NDA_EXAM', 'CUET_UG'],
          recommendedInstitutions: ['Junior Colleges with NCC Wing'],
          skillsToAcquire: ['Geopolitical Awareness', 'Group Leadership & Extempore'],
          estimatedCostRange: '₹20,000 - ₹50,000',
          keyActionTip: "Earn NCC 'C' Certificate with 'A' Grade for direct SSB Interview call without written exam."
        },
        {
          id: 'm_soldier_hec_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Degree',
          title: 'B.A. (Political Science / History / Psychology) + CDS Prep',
          subtitle: 'Complete 3-Year Degree while preparing for UPSC CDS (IMA / OTA Chennai)',
          durationYears: '3 Years',
          description: 'Complete undergraduate degree while mastering CDS English and General Knowledge syllabus and physical fitness tests.',
          branchOrSpecializationToChoose: 'Choose: B.A. in Political Science, History, Psychology, or B.A. LL.B for JAG entry.',
          mandatoryEligibility: ['Graduation in any discipline from recognized university'],
          examGateways: [],
          postDegreeExams: ['CDS_EXAM'],
          recommendedInstitutions: ['Top Central / State Universities'],
          skillsToAcquire: ['SSB Psychological Test Mastery (TAT, WAT, SRT)', 'Obstacle Course Endurance', 'Group Discussions'],
          estimatedCostRange: '₹30,000 - ₹1.2L',
          keyActionTip: 'Crack UPSC CDS exam in final year to join Officers Training Academy (OTA Chennai) or IMA Dehradun.'
        },
        {
          id: 'm_soldier_hec_4',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Officer Commissioning',
          title: 'Lieutenant in Indian Army Combat Regiment',
          subtitle: 'Commanding infantry platoons, reconnaissance troops, and military intelligence',
          description: 'Lead frontline troops with tactical courage, psychological resilience, and strategic clarity.',
          mandatoryEligibility: ['Graduation from OTA Chennai / IMA Dehradun'],
          examGateways: [],
          recommendedInstitutions: ['Officers Training Academy (OTA Chennai)', 'Infantry Regiments'],
          skillsToAcquire: ['Platoon Combat Tactics', 'Military Intelligence Analysis'],
          estimatedCostRange: 'Zero (Commissioned Officer Service)',
          keyActionTip: 'Lead by personal example from the front in all combat and tactical challenges.'
        }
      ]
    },
    MEC_CEC: {
      streamType: 'MEC_CEC',
      streamName: 'Military Logistics, Ordinance & Defense Financial Services',
      streamShortDesc: '10+2 MEC -> B.Com / BBA -> Army Ordnance Corps (AOC) / Army Service Corps (ASC)',
      badgeLabel: 'Military Supply & Logistics Track',
      themeColor: {
        primary: '#f59e0b',
        border: 'border-amber-500/30',
        bg: 'bg-amber-500/10',
        text: 'text-amber-700',
        glow: 'shadow-amber-500/20'
      },
      approachPhilosophy: 'An army marches on its stomach: direct the supply of ammunition, fuel, rations, weapons, and military hardware across borders in the Army Ordnance Corps (AOC) or Army Service Corps (ASC).',
      branchSelectionStrategy: 'In Degree, pursue B.Com or BBA with Supply Chain / Finance. Crack UPSC CDS Exam for IMA / OTA commissioning.',
      metrics: {
        timeToFirstJobYears: 4,
        financialInvestment: 'LOW',
        competitionLevel: 'HIGH',
        flexibilityScore: 9,
        practicalToTheoryRatio: 8
      },
      pros: [
        'Vital role ensuring ammunition, heavy tank transport, and rations reach active frontlines',
        'Direct application of modern logistics, supply chain management, and military budgeting'
      ],
      cons: [
        'Must undergo full combat tactical and physical training at military academies'
      ],
      entryJobRoles: ['Lieutenant (Army Ordnance Corps - AOC)', 'Lieutenant (Army Service Corps - ASC)', 'Defense Accounts Officer'],
      fiveYearTrajectory: 'Captain / Major Logistics Officer (₹12L - ₹24L LPA).',
      salarySpectrumLpa: { entryMin: 9.5, entryMax: 16.0, experiencedPeak: 30.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_soldier_mec_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board & Physical Fitness Habituation',
          subtitle: 'Strong performance in arithmetic and regular running sports',
          description: 'Pass 10th standard with strong numerical reasoning.',
          mandatoryEligibility: ['Pass 10th with min 50%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools'],
          skillsToAcquire: ['Basic Mathematics & Logic', 'Physical Endurance Running'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Build daily discipline running 2 km and practicing push-ups.'
        },
        {
          id: 'm_soldier_mec_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (MEC)',
          title: '10+2 Intermediate in MEC (Maths, Economics, Commerce)',
          subtitle: 'Accounting, economics, commercial logistics, and NDA Army Wing preparation',
          durationYears: '2 Years',
          description: 'Master economics and quantitative reasoning while preparing for NDA / CDS military exams.',
          mandatoryEligibility: ['Class 12 in MEC with min 50%'],
          examGateways: ['NDA_EXAM', 'CUET_UG'],
          recommendedInstitutions: ['Junior Commerce Colleges'],
          skillsToAcquire: ['Inventory Accounting', 'Physical Stamina Training'],
          estimatedCostRange: '₹25,000 - ₹65,000',
          keyActionTip: 'Prepare for UPSC NDA General Ability Test (English and GK) and join NCC.'
        },
        {
          id: 'm_soldier_mec_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Degree',
          title: 'B.Com / BBA in Supply Chain + CDS Examination Prep',
          subtitle: 'Study supply chain operations while mastering UPSC CDS exam papers',
          durationYears: '3 Years',
          description: 'Complete commerce degree and crack UPSC CDS exam for IMA Dehradun / OTA Chennai.',
          branchOrSpecializationToChoose: 'Choose: B.Com in Accounting/Finance or BBA in Logistics/Supply Chain.',
          mandatoryEligibility: ['Bachelor’s degree from recognized university'],
          examGateways: [],
          postDegreeExams: ['CDS_EXAM'],
          recommendedInstitutions: ['Top Commerce Colleges'],
          skillsToAcquire: ['Defense Supply Chain Logistics', 'SSB Psychological Tests Mastery'],
          estimatedCostRange: '₹35,000 - ₹1.5L',
          keyActionTip: 'Clear CDS written exam and practice group obstacle tasks (GTO) with team sports.'
        },
        {
          id: 'm_soldier_mec_4',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Military Supply Leadership',
          title: 'Commissioned Officer in Army Ordnance / Service Corps',
          subtitle: 'Directing ammunition depots, combat vehicle convoys, and frontline rations',
          description: 'Ensure seamless logistical support across high-altitude borders and remote military airfields.',
          mandatoryEligibility: ['Commissioned Officer Rank in Armed Forces'],
          examGateways: [],
          recommendedInstitutions: ['Army Ordnance Corps Centre', 'Army Service Corps Centre'],
          skillsToAcquire: ['War-Reserve Inventory Management', 'Combat Convoy Operations'],
          estimatedCostRange: 'Zero (Commissioned Officer Service)',
          keyActionTip: 'Deploy modern automated inventory systems to enhance rapid troop mobilization.'
        }
      ]
    }
  }
};
