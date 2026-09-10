import { CareerRole } from '../../types/pathway';

const STREAM_THEMES = {
  MPC: { primary: '#3b82f6', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-700', glow: 'shadow-blue-500/20' },
  POLYTECHNIC: { primary: '#06b6d4', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-700', glow: 'shadow-cyan-500/20' },
  VOCATIONAL_GUILD: { primary: '#f97316', border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-700', glow: 'shadow-orange-500/20' },
  MEC_CEC: { primary: '#f59e0b', border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-700', glow: 'shadow-amber-500/20' },
  HEC: { primary: '#a855f7', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-700', glow: 'shadow-purple-500/20' },
  BiPC: { primary: '#10b981', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-700', glow: 'shadow-emerald-500/20' }
};

export const ENGINEERING_TECH_PATHWAYS: Record<string, CareerRole> = {
  // 1. MECHANICAL & AUTOMOBILE ENGINEER
  mechanical_auto_engineer: {
    id: 'mechanical_auto_engineer',
    title: 'Mechanical & Automobile Engineer (EV & Powertrains)',
    slug: 'mechanical-automobile-engineer',
    domainId: 'stem_computing_robotics',
    domainName: 'Engineering & Technology',
    shortDescription: 'Design next-gen electric vehicles, aerodynamic body shells, internal combustion engines, robotic drivetrains, and industrial machinery.',
    holisticInsight: 'Automobile engineering is rooted in thermodynamics, fluid mechanics, CAD/CAM design, and battery powertrain electronics. Accessible via 10+2 MPC (JEE/State EAMCET), 3-Year Polytechnic Diploma in Mech/Auto (POLYCET -> ECET lateral B.Tech), or direct motorsport guilds.',
    recommendedDegreeBranch: 'B.Tech in Mechanical Engineering or B.Tech in Automobile Engineering',
    iconName: 'Cpu',
    tags: ['Automobile', 'Mechanical', 'EV', 'Engines', 'CAD', 'Formula Student', 'Motorsport', 'Robotics'],
    marketDemand: 'HIGH',
    streams: {
      MPC: {
        streamType: 'MPC',
        streamName: '10+2 MPC to B.Tech Mechanical / Automobile (JEE / State CET)',
        streamShortDesc: '10+2 PCM -> JEE Main/Adv / State EAMCET -> 4-Year B.Tech Mechanical -> OEM R&D / EV Powertrains',
        badgeLabel: 'Premier Automotive R&D Track',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Deep scientific mastery of heat transfer, vehicle dynamics, CAD solid modeling (CATIA/SolidWorks), and EV battery thermal management leading to premier engineering institutes.',
        branchSelectionStrategy: 'In counseling, choose B.Tech Mechanical Engineering (broader foundation) or Automobile Engineering. Build Formula Student EV racing cars in college.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'VERY_HIGH', flexibilityScore: 9, practicalToTheoryRatio: 8 },
        pros: ['Versatile degree: eligible for automotive (Tata/Mahindra/Tesla), aerospace, robotics, and energy sectors', 'Direct pathway to GATE ME for PSU jobs (ISRO, DRDO, BHEL, IOCL) and top M.Tech programs'],
        cons: ['Heavy calculus, thermodynamics, and finite element mathematical rigor in semesters 3–6'],
        entryJobRoles: ['Automotive Design Engineer', 'EV Battery Thermal Engineer', 'CAE Simulation Analyst', 'Chassis Development Engineer'],
        fiveYearTrajectory: 'Lead Powertrain Architect / Vehicle Program Manager (₹18L - ₹45L LPA).',
        salarySpectrumLpa: { entryMin: 6.0, entryMax: 14.0, experiencedPeak: 40.0 },
        lateralSwitches: [
          {
            id: 'mech_to_robotics',
            title: 'Pivot into Industrial Robotics & Autonomous Vehicles',
            fromStage: 'After 3rd Year B.Tech',
            toTarget: 'Robotics & Autonomous Systems Teams',
            bridgeExamOrMechanism: 'ROS (Robot Operating System) + Python/C++ Kinematics Portfolio',
            description: 'Apply mechanical kinematics to robotic arms, AGVs, and self-driving LiDAR sensor integration.',
            durationAdjustment: 'Immediate',
            keyBenefit: 'Combines mechanical hardware design with high-paying autonomous software salaries.'
          }
        ],
        milestones: [
          {
            id: 'mech_mpc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Foundation in Physics & Maths',
            subtitle: 'Strong foundation in mechanics, algebra, geometry, and basic coding',
            description: 'Pass 10th standard with strong score in science and mathematics.',
            mandatoryEligibility: ['Pass 10th with min 60% in Science & Maths'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Basic Trigonometry & Vectors', 'Computer Fundamentals'],
            estimatedCostRange: 'Nominal School Fees',
            keyActionTip: 'Participate in science exhibitions and build working mechanical linkages or model cars.'
          },
          {
            id: 'mech_mpc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (MPC)',
            title: '10+2 Intermediate in MPC + JEE Entrance Prep',
            subtitle: 'Newtonian mechanics, thermodynamics, electromagnetism, and calculus',
            durationYears: '2 Years',
            description: 'Master Class 11-12 Physics and Mathematics to crack JEE Main, JEE Advanced, BITSAT, and State CETs.',
            mandatoryEligibility: ['10+2 with PCM with min 60% aggregate'],
            examGateways: ['JEE_MAIN', 'JEE_ADVANCED', 'BITSAT'],
            recommendedInstitutions: ['Junior Colleges / Senior Secondary Schools'],
            skillsToAcquire: ['Kinematics & Rotational Dynamics', 'Calculus Problem Solving', 'Basic Python / Arduino'],
            estimatedCostRange: '₹30,000 - ₹1.2L',
            keyActionTip: 'Focus heavily on physics mechanics and vectors for competitive exams.'
          },
          {
            id: 'mech_mpc_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Undergraduate Engineering',
            title: 'B.Tech in Mechanical / Automobile Engineering',
            subtitle: 'CAD modeling, CFD simulation, EV battery systems, and Formula Student teams',
            durationYears: '4 Years',
            description: 'Complete 8 semesters of core engineering: thermodynamics, machine design, aerodynamics, and electric powertrains.',
            branchOrSpecializationToChoose: 'Choose: B.Tech in Mechanical Engineering or Automobile Engineering with EV elective.',
            mandatoryEligibility: ['JEE / State CET rank and 10+2 PCM pass'],
            examGateways: [],
            postDegreeExams: ['GATE_EXAM'],
            recommendedInstitutions: ['IITs (Madras, Bombay, Delhi), NITs, BITS Pilani, COEP Pune, PSG Tech'],
            skillsToAcquire: ['SolidWorks / CATIA CAD', 'ANSYS FEA/CFD Simulation', 'MATLAB / Simulink', 'Battery Management Systems (BMS)'],
            estimatedCostRange: '₹2L - ₹12L (Subsidized at Govt/IITs)',
            keyActionTip: 'Join college SAE BAJA or Formula Bharat team to gain real vehicle fabrication experience.'
          },
          {
            id: 'mech_mpc_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Engineering Launch',
            title: 'Automotive R&D / EV Systems Engineer',
            subtitle: 'Developing production-ready electric vehicles, autonomous drivetrains, and aerospace structures',
            description: 'Design, simulate, and crash-test production vehicles and advanced aerospace components.',
            mandatoryEligibility: ['B.Tech in Mechanical / Automobile Engineering with design portfolio'],
            examGateways: [],
            recommendedInstitutions: ['Automotive OEMs (Tata Motors, Mahindra, Mercedes-Benz R&D, Hyundai, Ather, Tesla)'],
            skillsToAcquire: ['Vehicle Crashworthiness Standards', 'Design for Manufacturing (DFM)', 'ISO 26262 Functional Safety'],
            estimatedCostRange: 'Zero (High Professional Salary)',
            keyActionTip: 'Build a public portfolio of CAD assemblies and CFD aerodynamic simulations on GrabCAD/GitHub.'
          }
        ]
      },
      POLYTECHNIC: {
        streamType: 'POLYTECHNIC',
        streamName: '3-Year Diploma in Automobile / Mechanical to B.Tech Lateral (ECET)',
        streamShortDesc: '10th -> POLYCET -> 3-Yr Diploma -> ECET Lateral Entry directly into 2nd Year B.Tech',
        badgeLabel: 'Hands-On Technical to B.Tech Track',
        themeColor: STREAM_THEMES.POLYTECHNIC,
        approachPhilosophy: 'Direct hands-on machining, CNC programming, engine overhaul, and vehicle diagnostics right after 10th, followed by lateral entry into 2nd year B.Tech.',
        branchSelectionStrategy: 'In POLYCET, choose Diploma in Automobile Engineering or Mechanical Engineering.',
        metrics: { timeToFirstJobYears: 3.5, financialInvestment: 'LOW', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 10 },
        pros: ['Superior hands-on workshop, CNC, and engine tuning skills compared to standard 10+2 students', 'Affordable government diploma fees and guaranteed lateral engineering seat via ECET'],
        cons: ['Requires catching up on higher engineering mathematics in 2nd year B.Tech'],
        entryJobRoles: ['Vehicle Testing Technician', 'Production Plant Engineer', 'Automotive Service Engineer', 'CAD Detailer'],
        fiveYearTrajectory: 'Plant Operations Manager / Senior Testing Engineer (₹12L - ₹28L LPA).',
        salarySpectrumLpa: { entryMin: 4.5, entryMax: 9.0, experiencedPeak: 26.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'mech_poly_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Exam & State POLYCET',
            subtitle: 'Pass 10th standard and clear state polytechnic entrance test',
            description: 'Pass 10th board with min 35% in maths and science to secure government diploma seat.',
            mandatoryEligibility: ['Pass 10th with Maths & Science'],
            examGateways: ['POLYCET_DIPLOMA'],
            recommendedInstitutions: ['State Polytechnic Colleges'],
            skillsToAcquire: ['Basic Mechanical Tools', 'Algebra & Geometry'],
            estimatedCostRange: '₹500 - ₹2,000',
            keyActionTip: 'Prepare for State POLYCET mathematics and physics questions.'
          },
          {
            id: 'mech_poly_2', phase: 'PHASE_1_STREAM', phaseLabel: '3-Year Polytechnic Diploma',
            title: '3-Year Diploma in Automobile / Mechanical Engineering',
            subtitle: 'Engine tearing, gearboxes, hydraulics, CNC turning, and AutoCAD drafting',
            durationYears: '3 Years',
            description: 'Hands-on training in automotive repair shops, foundry, welding, and CAD software.',
            mandatoryEligibility: ['POLYCET seat allotment'],
            examGateways: ['ECET_LATERAL'],
            recommendedInstitutions: ['Government Polytechnic Institutes'],
            skillsToAcquire: ['Engine Overhauling', 'AutoCAD Drafting', 'CNC Programming', 'Hydraulic Circuits'],
            estimatedCostRange: '₹12,000 - ₹35,000 total',
            keyActionTip: 'Score top rank in State ECET to secure 2nd-year B.Tech admission in top state engineering colleges.'
          },
          {
            id: 'mech_poly_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Lateral B.Tech Degree',
            title: 'B.Tech in Mechanical Engineering (Lateral Entry - 2nd Year)',
            subtitle: 'Direct entry into 2nd year B.Tech, completing degree in 3 years',
            durationYears: '3 Years',
            description: 'Complete core mechanical degree alongside campus placements with top automotive OEMs.',
            branchOrSpecializationToChoose: 'Choose: B.Tech in Mechanical Engineering via ECET lateral counseling.',
            mandatoryEligibility: ['Diploma pass with min 50% aggregate + ECET Rank'],
            examGateways: [],
            recommendedInstitutions: ['Top State Engineering Colleges / Autonomous Universities'],
            skillsToAcquire: ['Finite Element Analysis (FEA)', 'EV Motor Controls', 'Industrial Automation'],
            estimatedCostRange: '₹1.5L - ₹4L',
            keyActionTip: 'Leverage your hands-on diploma experience during technical campus placement interviews.'
          },
          {
            id: 'mech_poly_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Senior Automotive Engineer / Operations Lead',
            subtitle: 'Managing automated assembly lines, robotic welding cells, and quality control',
            description: 'Lead manufacturing engineering, supplier quality, and product development.',
            mandatoryEligibility: ['B.Tech in Mechanical Engineering'],
            examGateways: [],
            recommendedInstitutions: ['Maruti Suzuki, Hyundai, Bajaj Auto, TVS, Bosch India'],
            skillsToAcquire: ['Lean Six Sigma', 'Robotic Cell Commissioning', 'Plant Supply Chain'],
            estimatedCostRange: 'Zero (Full Salary)',
            keyActionTip: 'Earn Six Sigma Green Belt certification for fast track management promotions.'
          }
        ]
      }
    }
  },

  // 2. CIVIL & INFRASTRUCTURE ENGINEER
  civil_infrastructure_engineer: {
    id: 'civil_infrastructure_engineer',
    title: 'Civil & Infrastructure Engineer (Smart Cities & Structures)',
    slug: 'civil-infrastructure-engineer',
    domainId: 'stem_computing_robotics',
    domainName: 'Engineering & Technology',
    shortDescription: 'Engineer mega-bridges, high-speed rail corridors, skyscrapers, smart urban water networks, and green building infrastructure.',
    holisticInsight: 'Civil engineering shapes the physical world. Accessible via 10+2 MPC (JEE/State CET), 3-Year Polytechnic Diploma in Civil (POLYCET -> ECET lateral B.Tech), and leads to high-growth infrastructure consulting, real estate, and PSU/IES government leadership.',
    recommendedDegreeBranch: 'B.Tech in Civil Engineering with specialization in Structural / Transportation / Smart Infrastructure',
    iconName: 'Cpu',
    tags: ['Civil', 'Infrastructure', 'Bridges', 'Highways', 'Smart Cities', 'Structural Design', 'GATE CE', 'L&T'],
    marketDemand: 'HIGH',
    streams: {
      MPC: {
        streamType: 'MPC',
        streamName: '10+2 MPC to B.Tech Civil Engineering (JEE / GATE / IES)',
        streamShortDesc: '10+2 MPC -> JEE / State CET -> 4-Year B.Tech Civil -> Mega Infrastructure / PSU / UPSC ESE',
        badgeLabel: 'Structural & Infrastructure Track',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Master structural mechanics, soil mechanics, concrete technology, earthquake engineering, and Building Information Modeling (BIM) leading to national infrastructure leadership.',
        branchSelectionStrategy: 'In counseling, choose B.Tech Civil Engineering. Learn Revit BIM, STAAD.Pro, and GIS mapping.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 9, practicalToTheoryRatio: 8 },
        pros: ['Huge nation-building demand across metro rails, expressways, ports, and renewable energy projects', 'Direct route to UPSC Engineering Services Exam (ESE/IES) and top PSU executive roles (NHAI, DMRC, NTPC)'],
        cons: ['Site engineers often work in rugged outdoor project environments across remote terrains'],
        entryJobRoles: ['Structural Design Engineer', 'Project Site Engineer', 'BIM Infrastructure Modeler', 'Geotechnical Consultant'],
        fiveYearTrajectory: 'Senior Project Manager / Chief Structural Consultant (₹16L - ₹38L LPA).',
        salarySpectrumLpa: { entryMin: 5.5, entryMax: 11.0, experiencedPeak: 35.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'civ_mpc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Foundation in Geometry & Physics',
            subtitle: 'Strong foundation in structural geometry, physics, and geographical maps',
            description: 'Pass 10th standard with strong foundation in mathematics and science.',
            mandatoryEligibility: ['Pass 10th Board with min 60%'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Euclidean Geometry', 'Basic Spatial Drawing'],
            estimatedCostRange: 'Nominal School Fees',
            keyActionTip: 'Learn architectural sketching and basic computer drafting.'
          },
          {
            id: 'civ_mpc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (MPC)',
            title: '10+2 Intermediate in MPC + JEE / State Entrance Prep',
            subtitle: 'Statics, vector mechanics, coordinate geometry, and materials science',
            durationYears: '2 Years',
            description: 'Master physics and maths to clear JEE Main, Advanced, and State Engineering CETs.',
            mandatoryEligibility: ['10+2 with PCM and min 60%'],
            examGateways: ['JEE_MAIN', 'JEE_ADVANCED'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Vectors & Equilibrium Statics', 'Calculus for Structures'],
            estimatedCostRange: '₹30,000 - ₹1L',
            keyActionTip: 'Focus on statics, center of gravity, and fluid pressure in physics.'
          },
          {
            id: 'civ_mpc_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Undergraduate Engineering',
            title: 'B.Tech in Civil Engineering',
            subtitle: 'Structural analysis, geotechnical engineering, concrete technology, and BIM software',
            durationYears: '4 Years',
            description: 'Master structural design, highway geometry, water resources, and Building Information Modeling (BIM).',
            branchOrSpecializationToChoose: 'Choose: B.Tech Civil with elective in Structural or Environmental Engineering.',
            mandatoryEligibility: ['JEE / State CET rank and 10+2 PCM pass'],
            examGateways: [],
            postDegreeExams: ['GATE_EXAM'],
            recommendedInstitutions: ['IIT Roorkee, IIT Madras, NIT Trichy, VNIT Nagpur, CEG Anna University'],
            skillsToAcquire: ['STAAD.Pro / ETABS Structural Modeling', 'Revit BIM', 'Total Station Surveying', 'Soil Testing'],
            estimatedCostRange: '₹2L - ₹10L (Govt Subsidized)',
            keyActionTip: 'Intern on high-rise construction or highway project sites during summer breaks.'
          },
          {
            id: 'civ_mpc_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Infrastructure Leadership',
            title: 'Chartered Structural Engineer / Infrastructure Project Director',
            subtitle: 'Leading multi-hundred crore metro rail, airport terminal, and bridge infrastructure',
            description: 'Direct site execution, structural compliance, seismic design, and smart city infrastructure.',
            mandatoryEligibility: ['B.Tech in Civil Engineering'],
            examGateways: [],
            recommendedInstitutions: ['Larsen & Toubro (L&T), Tata Projects, Shapoorji Pallonji, AECOM, DMRC'],
            skillsToAcquire: ['FIDIC Contracts & Project Management (PMP)', 'Seismic Earthquake Resistant Design'],
            estimatedCostRange: 'Zero (Full Salary)',
            keyActionTip: 'Crack GATE CE with high rank for direct executive engineer appointment in NHAI / NTPC.'
          }
        ]
      }
    }
  },

  // 3. AEROSPACE & ROCKET PROPULSION ENGINEER
  aerospace_engineer: {
    id: 'aerospace_engineer',
    title: 'Aerospace & Rocket Propulsion Engineer (ISRO / Aviation / Defense)',
    slug: 'aerospace-engineer',
    domainId: 'stem_computing_robotics',
    domainName: 'Engineering & Technology',
    shortDescription: 'Engineer satellite launch vehicles, rocket propulsion engines, orbital satellites, fighter aircraft aerodynamics, and unmanned drone swarms.',
    holisticInsight: 'Aerospace engineering operates at the frontier of high-speed aerodynamics, orbital mechanics, rocket propulsion, and hypersonic materials. Premier entry via 10+2 MPC -> JEE Advanced (IIST Trivandrum / IITs) with direct absorption into ISRO and DRDO scientist cadres.',
    recommendedDegreeBranch: 'B.Tech in Aerospace / Aeronautical Engineering or B.Tech in Avionics (IIST Trivandrum / IITs)',
    iconName: 'Plane',
    tags: ['Aerospace', 'ISRO', 'Rockets', 'Satellites', 'Aerodynamics', 'Propulsion', 'Defense', 'DRDO'],
    marketDemand: 'EXPLOSIVE',
    streams: {
      MPC: {
        streamType: 'MPC',
        streamName: '10+2 MPC to IIST / IIT Aerospace (Direct ISRO Scientist Entry)',
        streamShortDesc: '10+2 MPC -> JEE Advanced -> IIST Trivandrum / IIT B.Tech Aerospace -> ISRO Scientist SC',
        badgeLabel: 'Space Mission & Satellite R&D Track',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Direct pathway to national space missions (Gaganyaan, Chandrayaan) and supersonic aircraft design through India’s premier space technology institute IIST Trivandrum and top IIT aerospace departments.',
        branchSelectionStrategy: 'Achieve high JEE Advanced rank to enter IIST Trivandrum (B.Tech Aerospace / Avionics) or IIT Bombay/Madras/Kanpur Aerospace.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'FREE_SCHOLARSHIP', competitionLevel: 'EXTREME', flexibilityScore: 8, practicalToTheoryRatio: 9 },
        pros: ['IIST students with CGPA > 7.5 are absorbed directly as Scientist/Engineer ‘SC’ at ISRO centers (VSSC, URSC, LPSC)', 'Booming private space tech sector in India (Skyroot, Agnikul, Pixxel, Dhruva Space) offering high salaries'],
        cons: ['Requires elite JEE Advanced rank and mastery of complex compressible fluid dynamics equations'],
        entryJobRoles: ['Scientist/Engineer SC (ISRO / DRDO)', 'Rocket Propulsion Engineer', 'Aerodynamics CFD Specialist', 'Satellite Systems Engineer'],
        fiveYearTrajectory: 'Lead Flight Dynamics Scientist / Private Space CTO (₹20L - ₹55L LPA).',
        salarySpectrumLpa: { entryMin: 8.0, entryMax: 18.0, experiencedPeak: 50.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'aero_mpc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Science & Mathematics Mastery',
            subtitle: 'Excellence in gravitation, optics, mechanics, and space science passion',
            description: 'Pass 10th standard with >85% in Science and Mathematics.',
            mandatoryEligibility: ['Pass 10th with min 70% in Science & Maths'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Gravitation & Orbital Basics', 'Physics Problem Solving'],
            estimatedCostRange: 'Nominal School Fees',
            keyActionTip: 'Read about rocket propulsion stages, cryogenic engines, and launch trajectories.'
          },
          {
            id: 'aero_mpc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (MPC)',
            title: '10+2 Intermediate in MPC + JEE Advanced Preparation',
            subtitle: 'Thermodynamics, fluid mechanics, rotational motion, and calculus',
            durationYears: '2 Years',
            description: 'Crack JEE Advanced with top all-India rank for IIST Trivandrum and IIT Aerospace seats.',
            mandatoryEligibility: ['10+2 PCM pass with min 75% aggregate (JEE eligibility)'],
            examGateways: ['JEE_MAIN', 'JEE_ADVANCED'],
            recommendedInstitutions: ['Junior Colleges / Senior Secondary Schools'],
            skillsToAcquire: ['Compressible Flow Physics', 'Calculus & Coordinate Geometry', 'MATLAB Coding'],
            estimatedCostRange: '₹40,000 - ₹1.5L',
            keyActionTip: 'Aim for high percentile in JEE Advanced to secure IIST Trivandrum admission.'
          },
          {
            id: 'aero_mpc_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Premier Aerospace Degree',
            title: 'B.Tech in Aerospace Engineering / Avionics',
            subtitle: 'Orbital mechanics, supersonic wind tunnels, cryogenic engines, and satellite payloads',
            durationYears: '4 Years',
            description: 'Study under senior ISRO scientists: rocket nozzle design, hypersonic flow, composite materials, and telemetry.',
            branchOrSpecializationToChoose: 'MUST Choose: B.Tech in Aerospace Engineering or Avionics.',
            mandatoryEligibility: ['JEE Advanced Rank + IIST / IIT Counseling allotment'],
            examGateways: [],
            postDegreeExams: ['GATE_EXAM'],
            recommendedInstitutions: ['IIST Trivandrum (ISRO), IIT Bombay, IIT Madras, IIT Kanpur, IIT Kharagpur'],
            skillsToAcquire: ['ANSYS Fluent CFD', 'Orbital Trajectory Simulation (STK)', 'Cryogenic Rocket Propulsion', 'Flight Avionics'],
            estimatedCostRange: '100% Free / Govt Sponsored with stipend at IIST for top CGPA',
            keyActionTip: 'Maintain >7.5 CGPA at IIST to secure direct campus absorption into ISRO centers.'
          },
          {
            id: 'aero_mpc_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Mission Launch & Scientist Career',
            title: 'Scientist / Engineer ‘SC’ at ISRO / Private Space Leader',
            subtitle: 'Directing satellite orbital insertions, rocket launches, and interplanetary exploration',
            description: 'Lead countdown protocols, rocket propulsion testing, and satellite communication constellations.',
            mandatoryEligibility: ['B.Tech Aerospace / Avionics and ISRO Scientist clearance'],
            examGateways: [],
            recommendedInstitutions: ['ISRO (VSSC Thiruvananthapuram, URSC Bengaluru, SDSC Sriharikota, LPSC) & Skyroot / Agnikul'],
            skillsToAcquire: ['Flight Mission Authorization Protocols', 'Spacecraft Telemetry & Deep Space Navigation'],
            estimatedCostRange: 'Zero (Prestigious Central Scientist Service)',
            keyActionTip: 'Publish research on reusable launch vehicle thermal protection systems and green propellants.'
          }
        ]
      }
    }
  },

  // 4. ROBOTICS & AUTOMATION ENGINEER
  robotics_engineer: {
    id: 'robotics_engineer',
    title: 'Robotics & Automation Engineer (Mechatronics & AI Swarms)',
    slug: 'robotics-automation-engineer',
    domainId: 'stem_computing_robotics',
    domainName: 'Engineering & Technology',
    shortDescription: 'Build autonomous industrial robots, bipedal humanoid systems, medical surgical robotic arms, drone swarms, and AI-driven mechatronics.',
    holisticInsight: 'Robotics bridges mechanical kinematics, embedded microcontrollers, computer vision, and ROS (Robot Operating System) software. Accessible via 10+2 MPC (JEE/CET in Mechatronics/Robotics/ECE/Mech), 3-Year Polytechnic Diploma in Mechatronics, or direct software robotics guilds.',
    recommendedDegreeBranch: 'B.Tech in Robotics & Automation, Mechatronics, or B.Tech in ECE / Mechanical with Robotics Specialization',
    iconName: 'Cpu',
    tags: ['Robotics', 'Mechatronics', 'ROS', 'Computer Vision', 'Automation', 'Humanoids', 'Microcontrollers', 'AI'],
    marketDemand: 'EXPLOSIVE',
    streams: {
      MPC: {
        streamType: 'MPC',
        streamName: '10+2 MPC to B.Tech Robotics & Mechatronics (ROS & AI Vision)',
        streamShortDesc: '10+2 MPC -> JEE / State CET -> 4-Year B.Tech Robotics / Mechatronics -> Robotics OEM / Smart Factory R&D',
        badgeLabel: 'Autonomous Systems & Humanoids Track',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Master inverse kinematics, microcontrollers (STM32/ESP32), LiDAR SLAM navigation, and deep learning computer vision to design autonomous physical intelligence.',
        branchSelectionStrategy: 'In counseling, choose B.Tech Robotics & Automation, Mechatronics, or ECE with Robotics electives. Master ROS 2 and Gazebo physics simulation.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'VERY_HIGH', flexibilityScore: 9, practicalToTheoryRatio: 9 },
        pros: ['Exponential global demand across automated warehouse logistics (Amazon/GreyOrange), surgical robots, and drone robotics', 'Combines mechanical engineering, electronics hardware, and cutting-edge AI software'],
        cons: ['Requires continuous multi-disciplinary learning across mechanical hardware, circuit design, and software stacks'],
        entryJobRoles: ['Robotics Software Engineer (ROS 2)', 'Embedded Hardware Roboticist', 'Computer Vision & SLAM Engineer', 'Automation Systems Integrator'],
        fiveYearTrajectory: 'Lead Robotics Architect / Autonomous Fleet Director (₹22L - ₹55L LPA).',
        salarySpectrumLpa: { entryMin: 7.5, entryMax: 16.0, experiencedPeak: 48.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'rob_mpc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & Robotics Hobbyist Projects',
            subtitle: 'Arduino microcontrollers, sensor interfacing, and basic Python coding',
            description: 'Pass 10th standard while building obstacle-avoiding robots and line-followers.',
            mandatoryEligibility: ['Pass 10th with min 60%'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards & Tinkering Labs (Atal Tinkering Labs)'],
            skillsToAcquire: ['Arduino C++ Coding', 'DC Motor Drivers & Ultrasonic Sensors', 'Basic Soldering'],
            estimatedCostRange: '₹3,000 (Robotics Starter Kit)',
            keyActionTip: 'Build an autonomous mobile robot using Arduino and enter local robotics competitions.'
          },
          {
            id: 'rob_mpc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (MPC)',
            title: '10+2 Intermediate in MPC + JEE / CET Prep',
            subtitle: 'Electric circuits, rotational kinematics, calculus, and matrix mathematics',
            durationYears: '2 Years',
            description: 'Master Class 11-12 physics and mathematics for engineering entrance exams.',
            mandatoryEligibility: ['10+2 with PCM and min 60%'],
            examGateways: ['JEE_MAIN', 'JEE_ADVANCED', 'BITSAT'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Kirchhoff’s Circuit Laws', 'Linear Algebra & Matrices', 'Python Programming'],
            estimatedCostRange: '₹30,000 - ₹1L',
            keyActionTip: 'Learn Python programming and Raspberry Pi Linux basics during holidays.'
          },
          {
            id: 'rob_mpc_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Undergraduate Robotics Degree',
            title: 'B.Tech in Robotics & Automation / Mechatronics',
            subtitle: 'Robot kinematics, ROS 2, LiDAR SLAM, computer vision, and PLC industrial automation',
            durationYears: '4 Years',
            description: 'Design robotic manipulators, AGVs, bipedal legs, and drone swarms in state-of-the-art robotics labs.',
            branchOrSpecializationToChoose: 'Choose: B.Tech Robotics & Automation, Mechatronics, or ECE with Robotics specialization.',
            mandatoryEligibility: ['JEE / State CET rank and 10+2 PCM pass'],
            examGateways: [],
            recommendedInstitutions: ['IIT Kanpur (Robotics Wing), IIIT Hyderabad (Robotics Research Center), PSG Tech, Manipal'],
            skillsToAcquire: ['ROS 2 (Robot Operating System)', 'Gazebo Simulation', 'OpenCV Computer Vision', 'Path Planning (A*, RRT*)'],
            estimatedCostRange: '₹3L - ₹14L',
            keyActionTip: 'Publish open-source ROS 2 packages on GitHub and compete in university Robocon championships.'
          },
          {
            id: 'rob_mpc_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Robotics Engineering Deployment',
            title: 'Autonomous Systems & Robotics Lead',
            subtitle: 'Deploying autonomous mobile robots (AMRs), humanoid physical AI, and surgical robotics',
            description: 'Design production-grade robotic hardware and autonomous SLAM navigation software.',
            mandatoryEligibility: ['B.Tech in Robotics / Mechatronics with demonstrated hardware portfolio'],
            examGateways: [],
            recommendedInstitutions: ['GreyOrange, Addverb Technologies, Boston Dynamics, ABB Robotics, KUKA, Tesla Optimus'],
            skillsToAcquire: ['Real-Time Operating Systems (RTOS)', 'Safety-Critical Robot Control Architecture'],
            estimatedCostRange: 'Zero (High Tech Salary)',
            keyActionTip: 'Specialize in Physical AI and sensor fusion algorithms (LiDAR + Camera + IMU).'
          }
        ]
      }
    }
  }
};
