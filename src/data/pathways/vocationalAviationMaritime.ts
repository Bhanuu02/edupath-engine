import { CareerRole } from '../../types/pathway';

const STREAM_THEMES = {
  MPC: { primary: '#3b82f6', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-700', glow: 'shadow-blue-500/20' },
  POLYTECHNIC: { primary: '#06b6d4', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-700', glow: 'shadow-cyan-500/20' },
  VOCATIONAL_GUILD: { primary: '#f97316', border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-700', glow: 'shadow-orange-500/20' }
};

export const VOCATIONAL_MARITIME_PATHWAYS: Record<string, CareerRole> = {
  // 1. MERCHANT NAVY DECK NAVIGATION OFFICER
  merchant_navy_officer: {
    id: 'merchant_navy_officer',
    title: 'Merchant Navy Deck Navigation Officer & Ship Captain (IMU CET / DNS)',
    slug: 'merchant-navy-deck-officer',
    domainId: 'aviation_defense_maritime',
    domainName: 'Aviation, Defense & Maritime',
    shortDescription: 'Navigate ultra-large container ships, oil supertankers, and LNG carriers across global ocean routes, commanding crew and cargo safety.',
    holisticInsight: 'Merchant Navy offers tax-free NRI USD dollar earnings, global travel across 50+ countries, and rapid career progression to Ship Captain. Accessible via 10+2 MPC (min 60% PCM, 50% English) -> IMU CET Entrance Exam -> Company Sponsorship (Anglo-Eastern, Maersk, Fleet Management) -> 1-Year Diploma in Nautical Science (DNS) or 3-Year B.Sc Nautical Science.',
    recommendedDegreeBranch: 'Diploma in Nautical Science (DNS) / B.Sc Nautical Science (IMU Accredited) + Company Sponsorship',
    iconName: 'Plane',
    tags: ['Merchant Navy', 'Captain', 'IMU CET', 'Navigation', 'Ships', 'Maersk', 'High Seas', 'Tax-Free USD'],
    marketDemand: 'HIGH',
    streams: {
      MPC: {
        streamType: 'MPC',
        streamName: '10+2 MPC to IMU CET + Company Sponsorship -> Deck Cadet to Captain Track',
        streamShortDesc: '10+2 MPC -> IMU CET + Shipping Company Sponsorship -> 1-Year DNS -> 18 Months Sea-Time -> 2nd Mate License -> Ship Captain',
        badgeLabel: 'High-Seas Global Navigation Track',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Master astronomical navigation, celestial sights, RADAR/ARPA collision avoidance, maritime law, and cargo ballasting in Directorate General of Shipping (DGS) approved academies.',
        branchSelectionStrategy: 'In 10+2 MPC, secure >60% PCM. Secure company sponsorship test from Maersk/Anglo-Eastern BEFORE joining college for guaranteed placement.',
        metrics: { timeToFirstJobYears: 2.5, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 8, practicalToTheoryRatio: 10 },
        pros: ['Tax-free high international USD salary (starting $400 - $800/mo as cadet -> $3,500 - $5,500/mo as 3rd Officer -> $12,000 - $16,000/mo as Captain ~ ₹1.2Cr - ₹1.6Cr/yr tax-free)', '4 to 6 months of paid continuous vacation per year between sailing contracts'],
        cons: ['Demands physical medical fitness (strict 6/6 vision, no color blindness) and endurance on long ocean voyages away from home'],
        entryJobRoles: ['Trainee Deck Cadet', '3rd Navigation Officer', '2nd Navigation Officer / Cargo Officer', 'Chief Officer / First Mate'],
        fiveYearTrajectory: 'Master Mariner / Ship Captain (₹45L - ₹1.4Cr+ LPA Tax-Free).',
        salarySpectrumLpa: { entryMin: 8.0, entryMax: 20.0, experiencedPeak: 140.0 },
        lateralSwitches: [
          {
            id: 'navy_to_port_pilot',
            title: 'Harbor Port Pilot / Marine Superintendent (Shore-Based)',
            fromStage: 'After Earning Master Mariner License',
            toTarget: 'Major Sea Ports / Shipping Line Corporate Headquarters',
            bridgeExamOrMechanism: 'Port Pilotage License Exam',
            description: 'Transition from ocean sailing to high-paying shore-based port operations and corporate vessel fleet management.',
            durationAdjustment: 'Immediate',
            keyBenefit: 'Shore-based family lifestyle with ultra-high maritime executive remuneration.'
          }
        ],
        milestones: [
          {
            id: 'mar_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Science & Medical Fitness Foundation',
            subtitle: 'Strong foundation in physics and clear 6/6 vision with zero color blindness',
            description: 'Pass 10th standard with strong science and mathematics score and verify eyesight fitness.',
            mandatoryEligibility: ['Pass 10th with min 50% in English + Normal color vision'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Mental Arithmetic', 'Swimming Basics'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Undergo a DGS-approved medical examination to verify 6/6 vision and color perception.'
          },
          {
            id: 'mar_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (MPC)',
            title: '10+2 Intermediate in MPC + IMU CET & Sponsorship Tests',
            subtitle: 'Mandatory minimum 60% in PCM and 50% in English for DG Shipping eligibility',
            durationYears: '2 Years',
            description: 'Crack Indian Maritime University Common Entrance Test (IMU CET) and clear sponsorship interviews with leading global shipping lines (Anglo-Eastern, Synergy, Fleet, Maersk).',
            mandatoryEligibility: ['10+2 with PCM aggregate min 60% and English min 50%'],
            examGateways: ['IMU_CET'],
            recommendedInstitutions: ['Junior Colleges / Maritime Coaching'],
            skillsToAcquire: ['Spherical Trigonometry Basics', 'Spoken Maritime English', 'Psychometric Aptitude'],
            estimatedCostRange: '₹30,000 - ₹80,000',
            keyActionTip: 'Secure a shipping company sponsorship letter before paying maritime academy tuition fees.'
          },
          {
            id: 'mar_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Pre-Sea Training Academy',
            title: '1-Year Diploma in Nautical Science (DNS) / 3-Year B.Sc Nautical Science',
            subtitle: 'Chart plotting, bridge watchkeeping, marine meteorology, ship stability, and mandatory STCW safety certifications',
            durationYears: '1 Year (DNS) + 18 Months Sea-Time Onboard Ship',
            description: 'Undergo rigorous quasi-military training at maritime academies, followed by 18 months of structured onboard sea training on ocean vessels.',
            branchOrSpecializationToChoose: 'Choose: DNS (Sponsored) at IMU Campus or DGS-approved training institute.',
            mandatoryEligibility: ['IMU CET Rank + Shipping Company Sponsorship Allotment'],
            examGateways: [],
            recommendedInstitutions: ['Indian Maritime University (IMU Navi Mumbai / Chennai), Anglo-Eastern Maritime Academy (AEMA Karjat), Applied Research International (ARI Delhi), Tolani Maritime Institute Pune'],
            skillsToAcquire: ['Celestial Navigation by Sun & Stars', 'ECDIS Digital Chart Navigation', 'RADAR Plotting & Collision Regulations (COLREGs)', 'Firefighting & Lifeboat Survival (STCW)'],
            estimatedCostRange: '₹3.5L - ₹6.5L (Often partially subsidized with company loan)',
            keyActionTip: 'Complete onboard Training Record Book (TAR Book) diligently during 18 months of sea sailing.'
          },
          {
            id: 'mar_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Master Mariner Command',
            title: 'Ship Captain / Master Mariner (Unlimited Voyage License)',
            subtitle: 'Commanding 300-meter ultra-large container ships, oil supertankers, and international maritime logistics',
            description: 'Clear 2nd Mate, Chief Mate, and Master Mariner Certificate of Competency (COC) exams administered by DG Shipping to take supreme command of vessels.',
            mandatoryEligibility: ['Master Mariner (Foreign Going) COC License'],
            examGateways: [],
            recommendedInstitutions: ['Maersk Line, Mediterranean Shipping Company (MSC), Anglo-Eastern, Teekay Tankers, Stolt Tankers'],
            skillsToAcquire: ['Heavy Weather Ship Handling & Typhoon Navigation', 'International Maritime Law (SOLAS/MARPOL)', 'Crisis Maritime Command'],
            estimatedCostRange: 'Zero (Highest Tax-Free Global Earnings)',
            keyActionTip: 'Sail contracts strategically to complete sea-time for rapid Chief Mate and Captain promotions by age 30.'
          }
        ]
      }
    }
  },

  // 2. AIRCRAFT MAINTENANCE ENGINEER (AME)
  aircraft_maintenance_engineer: {
    id: 'aircraft_maintenance_engineer',
    title: 'Aircraft Maintenance Engineer (AME DGCA / EASA Licensing)',
    slug: 'aircraft-maintenance-engineer-ame',
    domainId: 'aviation_defense_maritime',
    domainName: 'Aviation, Defense & Maritime',
    shortDescription: 'Certify commercial airliners (Airbus A320, Boeing 777) airworthy, inspect jet turbine engines, avionics flight radars, and hydraulic flight controls.',
    holisticInsight: 'No commercial aircraft in the world can take off without a signed Certificate of Release to Service (CRS) from a licensed Aircraft Maintenance Engineer. Accessible via 10+2 MPC (min 50% in PCM) -> DGCA-Approved AME Training Institute -> DGCA Modular Module Exams (Category B1 Mechanical / B2 Avionics) -> Airline Engineering Certification.',
    recommendedDegreeBranch: 'DGCA Approved AME Course (Category B1.1 Aeroplanes Turbine / B2 Avionics) + B.Sc/B.Tech Aeronautical',
    iconName: 'Plane',
    tags: ['AME', 'Aviation', 'DGCA', 'Airbus', 'Boeing', 'Jet Engines', 'Avionics', 'IndiGo', 'Air India'],
    marketDemand: 'HIGH',
    streams: {
      MPC: {
        streamType: 'MPC',
        streamName: '10+2 MPC to DGCA Approved AME Academy -> DGCA Module Exams -> Licensed AME',
        streamShortDesc: '10+2 MPC -> 2-Year DGCA AME Academy -> 2-Year Airline Practical Training -> DGCA License -> Type Rated Certifying Engineer',
        badgeLabel: 'Commercial Airline Jet Engine & Avionics Track',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Master jet turbine thermodynamics, fly-by-wire avionics, aircraft electrical buses, hydraulic systems, and DGCA Civil Aviation Requirements (CAR-66).',
        branchSelectionStrategy: 'In 10+2 MPC, secure >50% in Physics and Maths. Join a DGCA CAR-147 approved training institute in Category B1.1 (Jet Turbines) or B2 (Avionics).',
        metrics: { timeToFirstJobYears: 3.5, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 9, practicalToTheoryRatio: 10 },
        pros: ['Booming Indian aviation market with 1,500+ new Airbus and Boeing aircraft ordered by IndiGo and Air India requiring thousands of certifying engineers', 'High global licensing reciprocity (convertible to Gulf GCAA and European EASA licenses)'],
        cons: ['High-stakes precision responsibility: certifying engineers bear legal airworthiness compliance for passenger safety'],
        entryJobRoles: ['Junior Aircraft Technician', 'AME Trainee (Line Maintenance)', 'Avionics Shop Technician', 'Base Maintenance Overhaul Engineer'],
        fiveYearTrajectory: 'Type-Rated Certifying Aircraft Maintenance Engineer (CRS Signatory) (₹18L - ₹42L+ LPA).',
        salarySpectrumLpa: { entryMin: 5.5, entryMax: 10.0, experiencedPeak: 38.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'ame_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Science & Aviation Curiosity',
            subtitle: 'Strong performance in physics mechanics, electricity, and aircraft passion',
            description: 'Pass 10th standard with strong foundation in science.',
            mandatoryEligibility: ['Pass 10th with min 50% in Science & Maths'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Basic Mechanical Tools', 'Electrical Circuits Awareness'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Visit an air show or aviation museum and observe aircraft jet engine components.'
          },
          {
            id: 'ame_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (MPC)',
            title: '10+2 Intermediate in MPC with Physics & Mathematics',
            subtitle: 'Mandatory minimum 50% in Physics, Chemistry, and Mathematics for DGCA CAR-66 licensing',
            durationYears: '2 Years',
            description: 'Complete Class 12 with strong focus on aerodynamics, electrodynamics, and English communication.',
            mandatoryEligibility: ['10+2 with PCM from recognized board with min 50% aggregate'],
            examGateways: ['AME_CET'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Circuit Analysis', 'Basic Aerodynamics & Pressure Laws'],
            estimatedCostRange: '₹25,000 - ₹70,000',
            keyActionTip: 'Prepare for national AME CET entrance exams for scholarship allotments.'
          },
          {
            id: 'ame_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'DGCA CAR-147 AME Training',
            title: '2-Year DGCA Approved AME Basic Course + DGCA Module Exams',
            subtitle: 'Turbine engines, aircraft structures, instruments, digital avionics, and live hangar practicals',
            durationYears: '2 Years + 2 Years Airline Practical Training',
            description: 'Complete 2,400 hours of theoretical and hangar training, clearing all 11–12 DGCA CAR-66 module examinations.',
            branchOrSpecializationToChoose: 'Choose: Category B1.1 (Turbine Aeroplanes) or Category B2 (Avionics) in DGCA CAR-147 approved institute.',
            mandatoryEligibility: ['10+2 PCM clearance + DGCA medical fitness'],
            examGateways: [],
            recommendedInstitutions: ['School of Aviation Science and Technology (Delhi Flying Club), Indian Aerospace & Engineering Navi Mumbai, IIA Group Gurugram, Hindustan Aviation Academy Bengaluru'],
            skillsToAcquire: ['Gas Turbine Hot-Section Inspection (Borescope)', 'Avionics Fly-By-Wire Diagnostics', 'Aircraft Non-Destructive Testing (NDT)', 'DGCA CAR-M / CAR-145 Regulations'],
            estimatedCostRange: '₹3.5L - ₹7.5L',
            keyActionTip: 'Clear maximum DGCA module papers during your academic training semesters.'
          },
          {
            id: 'ame_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Type-Rated Airline Certifying Engineer',
            title: 'Licensed Aircraft Maintenance Engineer (CRS Signatory)',
            subtitle: 'Directing line and base maintenance for commercial airline fleets (A320neo, B737 MAX, B787 Dreamliner)',
            description: 'Sign legal Certificate of Release to Service (CRS) enabling international flight departures and manage MRO hangar overhauls.',
            mandatoryEligibility: ['DGCA AME License with Aircraft Type Rating endorsement'],
            examGateways: [],
            recommendedInstitutions: ['IndiGo Airlines, Air India / Vistara, Akasa Air, Air Works MRO, GMR Aero Technic Hyderabad, Boeing India, Airbus India'],
            skillsToAcquire: ['Full Aircraft Systems Type Certification', 'Line Transit Fault Troubleshooting (FCOM/AMM)'],
            estimatedCostRange: 'Zero (High Aviation Industry Salary)',
            keyActionTip: 'Obtain Type Rating endorsements on high-density commercial airliners (A320neo / B737 MAX) for peak salary.'
          }
        ]
      }
    }
  }
};
