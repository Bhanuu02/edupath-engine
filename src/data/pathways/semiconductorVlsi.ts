import { CareerRole } from '../../types/pathway';

export const VLSI_ENGINEER_PATHWAY: CareerRole = {
  id: 'vlsi_semiconductor_engineer',
  title: 'VLSI Design & Semiconductor Chip Engineer',
  slug: 'vlsi-semiconductor-engineer',
  domainId: 'stem_computing_robotics',
  domainName: 'STEM, Electronics & Semiconductor Tech',
  shortDescription: 'Architect microprocessors, AI accelerators, ASICs, and nanometer-scale integrated circuits for global tech leaders.',
  holisticInsight: 'To become a VLSI Engineer in India, the gold standard route is 10+2 MPC -> B.Tech in Electronics and Communication Engineering (ECE) or Microelectronics -> GATE EC for M.Tech at IISc/IITs or CDAC PG-DVLSI. Alternatively, enter via a 3-Year Polytechnic Diploma in Electronics (DECE) -> State ECET into 2nd Year B.Tech ECE, or via Physics/Maths B.Sc -> M.Sc Electronic Science.',
  recommendedDegreeBranch: 'B.Tech in Electronics & Communication Engineering (ECE), Microelectronics, or VLSI Design',
  iconName: 'Cpu',
  tags: ['VLSI', 'Semiconductor', 'Chip Design', 'Verilog', 'ECE', 'ASIC', 'FPGA', 'Hardware AI'],
  marketDemand: 'EXPLOSIVE',
  streams: {
    MPC: {
      streamType: 'MPC',
      streamName: 'Mathematical, Physics & ECE Engineering Route',
      streamShortDesc: '10+2 MPC -> B.Tech ECE / Microelectronics -> GATE EC / CDAC -> Semiconductor Giants',
      badgeLabel: 'Premier Direct Engineering Track',
      themeColor: {
        primary: '#3b82f6',
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        glow: 'shadow-blue-500/20'
      },
      approachPhilosophy: 'Direct engineering path building deep mathematical, quantum physics, and semiconductor device intuition with hardware description languages (Verilog, SystemVerilog).',
      branchSelectionStrategy: 'In B.Tech Engineering Counseling (JoSAA / State CET), select Electronics & Communication Engineering (ECE), Microelectronics, or Electrical & Electronics (EEE). In 3rd year, choose Electives in CMOS Digital IC Design, Static Timing Analysis (STA), and VLSI Verification.',
      metrics: {
        timeToFirstJobYears: 4,
        financialInvestment: 'MODERATE',
        competitionLevel: 'EXTREME',
        flexibilityScore: 9,
        practicalToTheoryRatio: 8
      },
      pros: [
        'Direct campus hiring by Intel, Qualcomm, NVIDIA, AMD, Texas Instruments, and ARM (₹14L - ₹35L starting)',
        'Highest technical authority with both frontend (RTL design & verification) and backend (Physical Design/Layout) roles',
        'Direct gateway to government research labs (ISRO, DRDO, SCL Chandigarh) through GATE EC'
      ],
      cons: [
        'High competitive cutoffs in JEE Main & Advanced for ECE branch in top IITs and NITs',
        'Requires continuous mastering of proprietary EDA tools (Cadence Virtuoso, Synopsys Design Compiler)'
      ],
      entryJobRoles: [
        'RTL Design Engineer',
        'ASIC Verification Engineer (SystemVerilog/UVM)',
        'Physical Design Engineer',
        'FPGA Systems Developer'
      ],
      fiveYearTrajectory: 'Senior Principal Chip Architect / Hardware AI Lead (₹35L - ₹95L+ LPA).',
      salarySpectrumLpa: {
        entryMin: 12.0,
        entryMax: 28.0,
        experiencedPeak: 120.0
      },
      lateralSwitches: [
        {
          id: 'lat_vlsi_gate',
          title: 'Post-B.Tech GATE EC for M.Tech VLSI at IISc / IIT Bombay',
          fromStage: '4th Year B.Tech ECE',
          toTarget: '2-Year M.Tech in Microelectronics & VLSI (IISc / IITs)',
          bridgeExamOrMechanism: 'GATE (Electronics & Communication)',
          description: 'Crack GATE EC (Score > 750) to enter premier M.Tech programs with 100% core semiconductor placements.',
          durationAdjustment: 'Direct PG Specialization',
          keyBenefit: 'Guarantees core ASIC/SoC design team placements with US-tier starting compensation.'
        },
        {
          id: 'lat_vlsi_cdac',
          title: 'C-DAC PG Diploma in VLSI Design (PG-DVLSI)',
          fromStage: 'After B.Tech ECE / EEE',
          toTarget: '6-Month Intensive Semiconductor Residency at C-DAC Pune/Bengaluru',
          bridgeExamOrMechanism: 'C-DAC C-CAT Entrance',
          description: 'Industry-standard 24-week hardware bootcamp with hands-on Synopsys/Cadence tool access and placement drives.',
          durationAdjustment: '6 Months Bridge',
          keyBenefit: 'Fast-tracks non-IIT engineering graduates into top VLSI design centers.'
        }
      ],
      milestones: [
        {
          id: 'm_vlsi_mpc_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board (SSC/CBSE/ICSE) with Strong Maths & Physics',
          subtitle: 'Build core foundation in algebra, basic electricity, and logical reasoning',
          description: 'Score above 70% in 10th standard with emphasis on Mathematics and Physics concepts.',
          mandatoryEligibility: ['Pass 10th Board with min 60% in Science and Mathematics'],
          examGateways: ['POLYCET_DIPLOMA'],
          recommendedInstitutions: ['Recognized Secondary Schools'],
          skillsToAcquire: ['Basic Circuit Principles', 'Boolean Algebra & Logic Gates', 'Introductory Python / C Programming'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Experiment with basic Arduino, breadboards, and logic gate simulators like Logisim.'
        },
        {
          id: 'm_vlsi_mpc_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (MPC)',
          title: '10+2 Intermediate in MPC (Maths, Physics, Chemistry)',
          subtitle: 'Master mechanics, electromagnetism, semiconductor diodes, and advanced calculus',
          durationYears: '2 Years',
          description: 'Focus heavily on Modern Physics (semiconductor diodes, transistors, band theory) and Vector Calculus while preparing for national engineering entrance exams.',
          mandatoryEligibility: ['Class 12 Board with Physics, Chemistry & Mathematics (PCM > 75% for JEE)'],
          examGateways: ['JEE_MAIN', 'JEE_ADVANCED', 'BITSAT'],
          recommendedInstitutions: ['Top Junior Colleges / Senior Secondary Schools'],
          skillsToAcquire: ['Semiconductor Physics (PN Junction, Transistors)', 'Advanced Coordinate Geometry & Calculus', 'Algorithmic Problem Solving'],
          estimatedCostRange: '₹30,000 - ₹1.8L',
          keyActionTip: 'Prioritize Physics chapter on "Electronic Devices & Logic Gates" and solve past 10 years JEE Advanced papers.'
        },
        {
          id: 'm_vlsi_mpc_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Engineering (B.Tech)',
          title: 'B.Tech in Electronics & Communication Engineering (ECE)',
          subtitle: 'Specialization in CMOS VLSI, Digital Signal Processing & FPGA Hardware',
          durationYears: '4 Years',
          description: 'Complete 4-year B.Tech in ECE. Select specialized departmental electives in Digital System Design with Verilog, Analog CMOS Design, Low Power VLSI, and Computer Architecture.',
          branchOrSpecializationToChoose: 'MUST Choose: Electronics and Communication Engineering (ECE), Microelectronics, or Electrical Engineering (EEE). Avoid generic non-circuit branches.',
          mandatoryEligibility: ['Admission through JEE Main/Adv, BITSAT, or State CET (EAMCET/MHCET/KCET)'],
          examGateways: [],
          postDegreeExams: ['GATE_EC', 'CDAC_CCAT'],
          recommendedInstitutions: ['IIT Bombay', 'IIT Madras', 'IIT Kharagpur', 'BITS Pilani', 'NIT Trichy', 'IIIT Hyderabad'],
          skillsToAcquire: ['Verilog / SystemVerilog HDL', 'Cadence / Synopsys EDA Suite', 'Static Timing Analysis (STA)', 'CMOS Layout & DRC/LVS'],
          estimatedCostRange: '₹4L - ₹12L (Subsidized with govt/institute scholarships)',
          keyActionTip: 'Design and tape-out a working RISC-V processor or FIR filter on an FPGA board (Xilinx Basys 3 / Vivado) as your 3rd-year mini-project.'
        },
        {
          id: 'm_vlsi_mpc_4',
          phase: 'PHASE_POST_GRAD_RECRUITMENT',
          phaseLabel: 'Post-Graduation / Semiconductor Industry Entrance',
          title: 'M.Tech in VLSI Design or Direct ASIC Core Campus Recruitment',
          subtitle: 'Join leading semiconductor multinationals (Intel, Qualcomm, NVIDIA, AMD, TI)',
          durationYears: '2 Years (If M.Tech) or Immediate Job',
          description: 'Crack GATE EC with top 500 AIR for M.Tech at IISc/IITs, or clear C-DAC C-CAT for PG-DVLSI, or get placed directly through Tier-1 campus placement drives.',
          mandatoryEligibility: ['B.Tech ECE with CGPA > 7.5 or valid GATE EC score'],
          examGateways: ['GATE_EC', 'CDAC_CCAT'],
          postDegreeExams: ['GATE_EC', 'CDAC_CCAT'],
          recommendedInstitutions: ['IISc Bangalore (DESE)', 'IIT Delhi', 'IIT Madras', 'C-DAC ACTS Pune'],
          skillsToAcquire: ['UVM (Universal Verification Methodology)', 'Sub-5nm FinFET / GAAFET Fabrication Tech', 'Silicon Bring-Up & Lab Debug'],
          estimatedCostRange: '₹25,000 - ₹2.5L (M.Tech provides ₹12,400/mo AICTE stipend)',
          keyActionTip: 'Prepare deeply for technical interviews on Setup/Hold Time violations, Metastability, Clock Domain Crossing (CDC), and FSM modeling.'
        },
        {
          id: 'm_vlsi_mpc_5',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Industry Outcomes & Semiconductor Leadership',
          title: 'Principal Semiconductor Design Architect & Silicon Lead',
          subtitle: 'Spearheading AI hardware accelerators, 5G modems, and quantum processor design',
          description: 'Lead next-generation silicon tape-outs, high-frequency SoC architectures, and semiconductor intellectual property (IP) blocks.',
          mandatoryEligibility: ['Proven track record of multiple silicon tape-outs and design closures'],
          examGateways: [],
          recommendedInstitutions: ['Qualcomm Labs', 'NVIDIA Bangalore', 'Intel India', 'Texas Instruments'],
          skillsToAcquire: ['SoC Subsystem Partitioning', 'Power-Performance-Area (PPA) Optimization', 'Patent Filing & Tech Strategy'],
          estimatedCostRange: 'Zero (High-Earning Phase)',
          keyActionTip: 'Contribute to open-source silicon initiatives like OpenROAD and RISC-V International.'
        }
      ]
    },
    POLYTECHNIC: {
      streamType: 'POLYTECHNIC',
      streamName: '3-Year Polytechnic Diploma (DECE) -> ECET Lateral B.Tech',
      streamShortDesc: '10th -> POLYCET -> 3-Yr Diploma in ECE -> ECET Lateral Entry into 2nd Year B.Tech ECE',
      badgeLabel: 'Hands-On Hardware Fast-Track',
      themeColor: {
        primary: '#06b6d4',
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
        glow: 'shadow-cyan-500/20'
      },
      approachPhilosophy: 'Early hands-on workshop mastery of soldering, PCB layout design, microcontrollers, and logic circuits right after 10th standard, bypassing 12th board pressure and entering B.Tech 2nd year directly via ECET.',
      branchSelectionStrategy: 'In POLYCET counseling, choose Diploma in Electronics and Communication Engineering (DECE). In ECET lateral entry, join B.Tech 2nd Year in ECE.',
      metrics: {
        timeToFirstJobYears: 5,
        financialInvestment: 'LOW',
        competitionLevel: 'MODERATE',
        flexibilityScore: 8,
        practicalToTheoryRatio: 10
      },
      pros: [
        'Hands-on lab and hardware fabrication experience 2 years before intermediate 12th students',
        'Direct lateral entry into 2nd Year B.Tech without repeating any academic year',
        'Highly subsidized government polytechnic college fees (< ₹15,000 total)'
      ],
      cons: [
        'Requires dedicated focus on advanced engineering maths during 2nd year B.Tech transition'
      ],
      entryJobRoles: [
        'Junior Hardware Design Engineer',
        'VLSI Physical Design Trainee',
        'FPGA Lab Validation Engineer'
      ],
      fiveYearTrajectory: 'Senior VLSI Design Engineer / Hardware Verification Lead (₹22L - ₹55L LPA).',
      salarySpectrumLpa: {
        entryMin: 6.5,
        entryMax: 18.0,
        experiencedPeak: 85.0
      },
      lateralSwitches: [
        {
          id: 'lat_dece_ecet',
          title: 'Direct Lateral Entry to B.Tech 2nd Year via State ECET',
          fromStage: 'After 3-Year Diploma in ECE (DECE)',
          toTarget: '2nd Year (3rd Semester) B.Tech in Electronics & Communication (ECE)',
          bridgeExamOrMechanism: 'State ECET Exam',
          description: 'Saves 1 full year by entering directly into 2nd year engineering degree alongside 12th PCM students.',
          durationAdjustment: 'Direct 2nd Year Entry (3 Years for B.Tech)',
          keyBenefit: 'Combines diploma practical technician skills with full accredited B.Tech degree.'
        }
      ],
      milestones: [
        {
          id: 'm_vlsi_poly_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Exam & State POLYCET Test',
          subtitle: 'Appear for State POLYCET to secure admission in top Govt Polytechnic College',
          description: 'Clear 10th standard and secure a top state rank in POLYCET in Mathematics and Physical Sciences.',
          mandatoryEligibility: ['Pass 10th Board with min 35% in Maths & Science'],
          examGateways: ['POLYCET_DIPLOMA'],
          recommendedInstitutions: ['Govt Model Residential Polytechnics', 'State Central Polytechnics'],
          skillsToAcquire: ['Basic Algebra & Trigonometry', 'Basic Physical Science'],
          estimatedCostRange: '₹3,000 - ₹10,000',
          keyActionTip: 'Focus on 10th Mathematics chapters to score top 5,000 rank in POLYCET.'
        },
        {
          id: 'm_vlsi_poly_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '3-Year Polytechnic Diploma (DECE)',
          title: 'Diploma in Electronics & Communication Engineering (DECE)',
          subtitle: 'Intensive lab training in digital ICs, PCB design, 8051/ARM microcontrollers, and Verilog',
          durationYears: '3 Years',
          description: 'Master practical hardware troubleshooting, breadboard prototyping, oscilloscope measurements, and digital logic circuits.',
          branchOrSpecializationToChoose: 'MUST Choose: Diploma in Electronics & Communication Engineering (DECE).',
          mandatoryEligibility: ['POLYCET Rank and Seat Allotment in DECE branch'],
          examGateways: ['ECET_LATERAL'],
          recommendedInstitutions: ['Government Polytechnic Hyderabad', 'Govt Polytechnic Vijayawada', 'SJT Polytechnic Bangalore'],
          skillsToAcquire: ['Microcontroller Programming (C & Assembly)', 'PCB Layout using KiCad/Eagle', 'Verilog HDL simulation in ModelSim'],
          estimatedCostRange: '₹12,000 - ₹45,000',
          keyActionTip: 'Prepare for State ECET exam during 5th and 6th semester focusing on core ECE diploma subjects.'
        },
        {
          id: 'm_vlsi_poly_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Lateral Degree (B.Tech 2nd Year Entry)',
          title: 'B.Tech in ECE via State ECET Lateral Entry',
          subtitle: 'Direct admission to 3rd semester engineering with full diploma credit transfer',
          durationYears: '3 Years',
          description: 'Join top state engineering universities directly in 2nd year. Complete advanced courses in CMOS VLSI, Computer Architecture, and Embedded Systems.',
          branchOrSpecializationToChoose: 'Choose: B.Tech in Electronics and Communication Engineering (ECE).',
          mandatoryEligibility: ['Passed 3-Yr Diploma with min 45% and qualified in State ECET'],
          examGateways: [],
          postDegreeExams: ['GATE_EC', 'CDAC_CCAT'],
          recommendedInstitutions: ['JNTU Hyderabad', 'Andhra University', 'Osmania University College of Engineering', 'PSG Tech Coimbatore'],
          skillsToAcquire: ['Advanced Verilog & SystemVerilog', 'STA & Timing Constraints (SDC)', 'FPGA Synthesis & Place-and-Route'],
          estimatedCostRange: '₹1.5L - ₹3.5L (Reimbursed under State Fee Reimbursement Schemes)',
          keyActionTip: 'Take C-DAC C-CAT or GATE EC in final year to secure premier semiconductor core placement.'
        },
        {
          id: 'm_vlsi_poly_4',
          phase: 'PHASE_POST_GRAD_RECRUITMENT',
          phaseLabel: 'Recruitment & VLSI Career Launch',
          title: 'Semiconductor Design Center Hiring / C-DAC PG-DVLSI',
          subtitle: 'Join fabless semiconductor companies (Synopsys, Cadence, Marvell, Broadcom)',
          description: 'Work on physical design, DFT (Design for Testability), synthesis, and verification for high-speed microchips.',
          mandatoryEligibility: ['B.Tech ECE degree and verified VLSI capstone projects'],
          examGateways: ['GATE_EC', 'CDAC_CCAT'],
          recommendedInstitutions: ['C-DAC ACTS', 'Top Tech Parks in Bengaluru/Hyderabad'],
          skillsToAcquire: ['DFT (Scan Chains, ATPG)', 'Low-Power UPF/CPF Design', 'Automated Perl/Python Scripting for EDA'],
          estimatedCostRange: 'Zero (Earning Phase)',
          keyActionTip: 'Build an open-source GitHub repository containing Verilog modules and testbenches for interview demonstrations.'
        }
      ]
    },
    BiPC: {
      streamType: 'BiPC',
      streamName: 'Bio-Electronics, Bio-Sensors & Neural Chip Route',
      streamShortDesc: '10+2 BiPC -> B.Tech Biomedical Engineering / Bio-Electronics -> Neural Implant VLSI',
      badgeLabel: 'Bio-Sensors & Neural VLSI Focus',
      themeColor: {
        primary: '#10b981',
        border: 'border-emerald-500/30',
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
        glow: 'shadow-emerald-500/20'
      },
      approachPhilosophy: 'Design medical diagnostic microchips, brain-computer interfaces (like Neuralink), pacemakers, and biosensor ASICs combining biology with circuit design.',
      branchSelectionStrategy: 'Choose B.Tech in Biomedical Engineering or Bio-Electronics, with cross-departmental electives in VLSI and Digital Electronics.',
      metrics: {
        timeToFirstJobYears: 4.5,
        financialInvestment: 'MODERATE',
        competitionLevel: 'MODERATE',
        flexibilityScore: 8,
        practicalToTheoryRatio: 8
      },
      pros: [
        'Fastest growing frontier in medical robotics, implantable pacemakers, and DNA sequencer chips',
        'Unique cross-disciplinary domain bridging medicine and silicon engineering'
      ],
      cons: [
        'Requires bridge mathematics for digital filter design and circuit analysis'
      ],
      entryJobRoles: ['Biosensor Chip Designer', 'Medical Device Hardware Engineer', 'Neural Interface Specialist'],
      fiveYearTrajectory: 'Lead Bio-Electronics Systems Architect (₹25L - ₹60L LPA).',
      salarySpectrumLpa: { entryMin: 8.0, entryMax: 16.0, experiencedPeak: 70.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_vlsi_bipc_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Completion',
          subtitle: 'Strong foundation in biology, physics, and basic mathematics',
          description: 'Pass 10th standard with strong science aptitude.',
          mandatoryEligibility: ['Pass 10th with min 55%'],
          examGateways: [],
          recommendedInstitutions: ['Recognized Secondary Schools'],
          skillsToAcquire: ['Cell Biology', 'Basic Physics Circuits'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Explore how bio-potential signals (ECG/EEG) are converted into digital data.'
        },
        {
          id: 'm_vlsi_bipc_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (BiPC)',
          title: '10+2 BiPC with Additional Mathematics (or NIOS Bridge Maths)',
          subtitle: 'Human physiology, chemistry, physics, and basic differential calculus',
          durationYears: '2 Years',
          description: 'Take 10+2 BiPC and clear NIOS / CBSE bridge mathematics to remain eligible for engineering entrance.',
          mandatoryEligibility: ['Class 12 PCB with min 55%'],
          examGateways: ['CUET_UG'],
          recommendedInstitutions: ['Top Junior Colleges'],
          skillsToAcquire: ['Neural Physiology', 'Biochemical Sensors', 'Circuit Theory'],
          estimatedCostRange: '₹35,000 - ₹90,000',
          keyActionTip: 'Clear 12th Mathematics via NIOS on-demand if your board does not offer PCMB.'
        },
        {
          id: 'm_vlsi_bipc_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Degree',
          title: 'B.Tech in Biomedical Engineering / Medical Electronics',
          subtitle: 'Bio-MEMS, Implantable Circuits & Sensor Signal Conditioning',
          durationYears: '4 Years',
          description: 'Learn biosensor design, analog frontend circuits for microvolt biopotentials, and low-power ASIC design.',
          branchOrSpecializationToChoose: 'Choose: Biomedical Engineering or Medical Electronics with VLSI electives.',
          mandatoryEligibility: ['Admission via State CET / CUET / University Test'],
          examGateways: [],
          postDegreeExams: ['GATE_EC', 'CDAC_CCAT'],
          recommendedInstitutions: ['IIT Madras (Biomedical)', 'Manipal Institute of Technology', 'SRM University'],
          skillsToAcquire: ['Bio-MEMS Design', 'Low-Noise Analog Amplifiers', 'Verilog for Medical Signal Processors'],
          estimatedCostRange: '₹3.5L - ₹9L',
          keyActionTip: 'Build an ECG wearable monitor using an analog frontend IC and custom microcontroller firmware.'
        },
        {
          id: 'm_vlsi_bipc_4',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Industry Outcomes',
          title: 'Bio-Chip & Medical Silicon Designer',
          subtitle: 'Join Medtronic, Siemens Healthineers, Philips Healthcare, or Neuralink',
          description: 'Architect implantable bio-compatible chips and point-of-care diagnostic microfluidic ASICs.',
          mandatoryEligibility: ['Degree in Biomedical Electronics / VLSI'],
          examGateways: [],
          recommendedInstitutions: ['MedTech Research Hubs', 'Global Medical Device Centers'],
          skillsToAcquire: ['ISO 13485 Medical Device Standards', 'Ultra-Low-Power Circuit Design'],
          estimatedCostRange: 'Zero (Earning Phase)',
          keyActionTip: 'Publish research on low-power analog frontends in IEEE Transactions on Biomedical Circuits.'
        }
      ]
    },
    MEC_CEC: {
      streamType: 'MEC_CEC',
      streamName: 'Semiconductor Techno-Commercial & Supply Chain Route',
      streamShortDesc: '10+2 MEC -> B.Sc Electronics / BBA Tech Management -> Semiconductor Product Lead',
      badgeLabel: 'Commercial & Silicon Product Management',
      themeColor: {
        primary: '#f59e0b',
        border: 'border-amber-500/30',
        bg: 'bg-amber-500/10',
        text: 'text-amber-400',
        glow: 'shadow-amber-500/20'
      },
      approachPhilosophy: 'Lead the multi-billion dollar business of semiconductors: silicon wafer procurement, fab foundry capacity negotiations (TSMC/GlobalFoundries), and chip product line management.',
      branchSelectionStrategy: 'In Degree, pursue B.Sc in Electronics & Mathematics or B.Com/BBA with Supply Chain & Tech Product Management electives, followed by CAT for MBA at top IIMs.',
      metrics: {
        timeToFirstJobYears: 3.5,
        financialInvestment: 'MODERATE',
        competitionLevel: 'MODERATE',
        flexibilityScore: 9,
        practicalToTheoryRatio: 7
      },
      pros: [
        'Crucial leadership roles in global fabless semiconductor corporate strategy',
        'Direct involvement with global silicon supply chains and venture investments'
      ],
      cons: [
        'Less focus on low-level transistor circuit layout compared to ECE track'
      ],
      entryJobRoles: ['Semiconductor Product Marketing Specialist', 'Silicon Supply Chain Analyst', 'Foundry Operations Coordinator'],
      fiveYearTrajectory: 'Director of Semiconductor Product Line / Silicon Strategy Lead (₹30L - ₹80L LPA).',
      salarySpectrumLpa: { entryMin: 7.0, entryMax: 15.0, experiencedPeak: 75.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_vlsi_mec_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Completion',
          subtitle: 'Strong performance in commercial arithmetic and social studies',
          description: 'Pass 10th standard with focus on mathematics and analytical reasoning.',
          mandatoryEligibility: ['Pass 10th Board with min 50%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools'],
          skillsToAcquire: ['Data Analysis Basics', 'Spreadsheets & Financial Logic'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Read about the geopolitical importance of semiconductor manufacturing (TSMC, ASML, India Semiconductor Mission).'
        },
        {
          id: 'm_vlsi_mec_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (MEC)',
          title: '10+2 Intermediate in MEC (Maths, Economics, Commerce)',
          subtitle: 'Macroeconomics, calculus, financial markets, and statistical modeling',
          durationYears: '2 Years',
          description: 'Master economics, statistical analysis, and applied mathematics for supply chain economics.',
          mandatoryEligibility: ['Class 12 with Maths and Economics'],
          examGateways: ['CUET_UG', 'IPMAT_INDORE'],
          recommendedInstitutions: ['Top Junior Commerce Colleges'],
          skillsToAcquire: ['Quantitative Modeling', 'Microeconomics & Pricing Strategy', 'Global Trade Laws'],
          estimatedCostRange: '₹30,000 - ₹75,000',
          keyActionTip: 'Target CUET UG for top Delhi University commerce and economics colleges.'
        },
        {
          id: 'm_vlsi_mec_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Degree',
          title: 'B.Sc in Electronics & Statistics or B.Com (FinTech / Analytics)',
          subtitle: 'Understanding semiconductor economics, production yields, and enterprise resource planning',
          durationYears: '3 Years',
          description: 'Study tech supply chain dynamics, capital expenditure (CapEx) in semiconductor fabrication, and vendor management.',
          branchOrSpecializationToChoose: 'Choose: B.Sc Electronics with Mathematics/Statistics or BBA in Tech Management.',
          mandatoryEligibility: ['Admission via CUET or University Merit'],
          examGateways: [],
          postDegreeExams: ['CAT_IIM'],
          recommendedInstitutions: ['Delhi University', 'St. Xavier’s College', 'Loyola College Chennai'],
          skillsToAcquire: ['ERP Systems (SAP S/4HANA)', 'Semiconductor Yield Cost Analysis', 'Foundry Capacity Contracts'],
          estimatedCostRange: '₹1.2L - ₹3.5L',
          keyActionTip: 'Appear for CAT in final year to target premier IIMs for Tech & Operations MBA.'
        },
        {
          id: 'm_vlsi_mec_4',
          phase: 'PHASE_POST_GRAD_RECRUITMENT',
          phaseLabel: 'MBA / Post-Graduation',
          title: 'MBA in Operations & Tech Management (IIM / Top B-School)',
          subtitle: 'Fast-track to leadership in semiconductor multinationals and foundry alliances',
          durationYears: '2 Years',
          description: 'Join corporate strategy and product marketing teams at semiconductor OEMs (Applied Materials, Lam Research, ASML).',
          mandatoryEligibility: ['Graduation with CAT percentile > 98%'],
          examGateways: ['CAT_IIM'],
          postDegreeExams: ['CAT_IIM'],
          recommendedInstitutions: ['IIM Ahmedabad', 'IIM Bangalore', 'IIM Calcutta', 'NITIE / IIM Mumbai'],
          skillsToAcquire: ['Geopolitical Chip Strategy', 'B2B Tech Negotiations', 'Product Lifecycle Management'],
          estimatedCostRange: '₹15L - ₹25L (Funded via 100% collateral-free education loans)',
          keyActionTip: 'Intern with the India Semiconductor Mission (ISM) or global hardware venture capital funds.'
        },
        {
          id: 'm_vlsi_mec_5',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Industry Outcomes',
          title: 'Global Semiconductor Product Line Director',
          subtitle: 'Directing billion-dollar chip launches and global supply security',
          description: 'Manage global silicon product portfolios for automotive, AI data centers, and smartphone chipsets.',
          mandatoryEligibility: ['Leadership track record in semiconductor marketing or supply chain'],
          examGateways: [],
          recommendedInstitutions: ['Intel Global Operations', 'NVIDIA Product Group', 'Qualcomm Ventures'],
          skillsToAcquire: ['Cross-Border Tariff Strategy', 'Foundry Joint Ventures'],
          estimatedCostRange: 'Zero (Earning Phase)',
          keyActionTip: 'Drive localization and fab setup partnerships under the Make in India semiconductor program.'
        }
      ]
    },
    HEC: {
      streamType: 'HEC',
      streamName: 'Semiconductor Patent Law & Geopolitical Policy Route',
      streamShortDesc: '10+2 HEC -> 5-Year Integrated B.A. LL.B -> Semiconductor IP & Patent Attorney',
      badgeLabel: 'Chip Patent Law & Policy Focus',
      themeColor: {
        primary: '#a855f7',
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        glow: 'shadow-purple-500/20'
      },
      approachPhilosophy: 'Protect high-value microarchitecture patents, resolve global cross-licensing patent disputes (Qualcomm vs Apple type litigation), and formulate national semiconductor sovereign policy.',
      branchSelectionStrategy: 'In 10+2 HEC, build deep constitutional and international law aptitude -> Crack CLAT for 5-Year B.A. LL.B at premier NLUs -> Specialize in Intellectual Property Rights (IPR) & Technology Law.',
      metrics: {
        timeToFirstJobYears: 5,
        financialInvestment: 'MODERATE',
        competitionLevel: 'HIGH',
        flexibilityScore: 9,
        practicalToTheoryRatio: 7
      },
      pros: [
        'Semiconductor IP litigators and patent attorneys earn some of the highest billing rates in corporate law',
        'Direct influence on national semiconductor policies, CHIPS Act incentives, and global trade compliance'
      ],
      cons: [
        'Requires rigorous comprehension of complex international trade treaties and patent jurisprudence'
      ],
      entryJobRoles: ['Semiconductor Patent Associate', 'Technology Policy Analyst', 'IPR Compliance Specialist'],
      fiveYearTrajectory: 'Senior Technology Partner / Chief Intellectual Property Counsel (₹35L - ₹90L+ LPA).',
      salarySpectrumLpa: { entryMin: 10.0, entryMax: 22.0, experiencedPeak: 95.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_vlsi_hec_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Completion',
          subtitle: 'Strong foundation in social sciences, debate, and English communication',
          description: 'Pass 10th standard with strong reading and analytical writing skills.',
          mandatoryEligibility: ['Pass 10th Board with min 50%'],
          examGateways: [],
          recommendedInstitutions: ['Recognized Secondary Schools'],
          skillsToAcquire: ['Critical Essay Writing', 'Debate & Public Speaking'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Participate in Model United Nations (MUNs) focusing on technology transfer committees.'
        },
        {
          id: 'm_vlsi_hec_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (HEC)',
          title: '10+2 Intermediate in HEC (History, Economics, Civics/Pol Science)',
          subtitle: 'Constitutional law basics, international relations, economic history, and CLAT prep',
          durationYears: '2 Years',
          description: 'Master legal reasoning, constitutional history, and current geopolitical affairs while preparing for national law entrances.',
          mandatoryEligibility: ['Class 12 in any stream with min 45% (CLAT eligibility)'],
          examGateways: ['CLAT_UG', 'CUET_UG'],
          recommendedInstitutions: ['Top Junior Colleges'],
          skillsToAcquire: ['Legal Comprehension', 'Logical & Analytical Reasoning', 'International Trade Policy'],
          estimatedCostRange: '₹25,000 - ₹80,000',
          keyActionTip: 'Read the Patents Act 1970 and WIPO guidelines on semiconductor integrated circuit layout designs.'
        },
        {
          id: 'm_vlsi_hec_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Integrated Law Degree',
          title: '5-Year Integrated B.A. LL.B (Hons) in Top National Law University (NLU)',
          subtitle: 'Specialization in Intellectual Property Law (IPR), Patent Drafting & Tech Regulation',
          durationYears: '5 Years',
          description: 'Study Semiconductor Integrated Circuits Layout-Design Act, patent claims drafting, standard-essential patents (SEPs), and FRAND licensing.',
          branchOrSpecializationToChoose: 'Choose: B.A. LL.B with Honors in Intellectual Property Rights (IPR) & Technology Law.',
          mandatoryEligibility: ['CLAT UG Rank and NLU Admission'],
          examGateways: [],
          postDegreeExams: ['STATE_JUDICIAL_SERVICES', 'UPSC_CSE'],
          recommendedInstitutions: ['NLSIU Bangalore', 'NALSAR Hyderabad', 'WBNUJS Kolkata', 'NLU Delhi'],
          skillsToAcquire: ['Patent Claim Drafting', 'Cross-Border Technology Licensing', 'Moot Court Advocacy in Tech Disputes'],
          estimatedCostRange: '₹8L - ₹14L',
          keyActionTip: 'Intern with tier-1 law firms (Shardul Amarchand Mangaldas, Cyril Amarchand, Anand & Anand) in their TMT/IPR practice.'
        },
        {
          id: 'm_vlsi_hec_4',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Industry Outcomes',
          title: 'Semiconductor Patent Litigator & Tech Policy Counsel',
          subtitle: 'Representing global chipmakers in high-stakes patent infringement and antitrust disputes',
          description: 'Defend multi-million dollar semiconductor patents and advise ministries on chip sovereignty.',
          mandatoryEligibility: ['Enrolled with Bar Council of India / Registered Patent Agent'],
          examGateways: [],
          recommendedInstitutions: ['Top Corporate Law Firms', 'Ministry of Electronics & IT (MeitY)', 'Global Tech Legal Divisions'],
          skillsToAcquire: ['Cross-Licensing Arbitrations', 'Antitrust Regulations in High-Tech'],
          estimatedCostRange: 'Zero (High-Earning Phase)',
          keyActionTip: 'Qualify as a Registered Indian Patent Agent by passing the Indian Patent Agent Examination (CGPDTM).'
        }
      ]
    },
    VOCATIONAL_GUILD: {
      streamType: 'VOCATIONAL_GUILD',
      streamName: 'Open-Source Silicon & FPGA Guild Apprenticeship',
      streamShortDesc: 'Open Silicon EDA Tools (OpenROAD/SkyWater 130nm) -> Tiny Tapeout -> Independent ASIC Dev',
      badgeLabel: 'Independent Open-Silicon Guild',
      themeColor: {
        primary: '#f43f5e',
        border: 'border-rose-500/30',
        bg: 'bg-rose-500/10',
        text: 'text-rose-400',
        glow: 'shadow-rose-500/20'
      },
      approachPhilosophy: 'Democratize semiconductor chip design by creating open-source silicon IP on public fabs (SkyWater 130nm / Tiny Tapeout) using open-source EDA tools (Yosys, OpenROAD, Magic, Verilator) and demonstrating verified hardware on GitHub.',
      branchSelectionStrategy: 'Build an independent digital portfolio of open-source Verilog designs, synthesize on low-cost FPGAs (Tang Nano / iCE40), and submit designs to global multi-project wafer (MPW) shuttle runs.',
      metrics: {
        timeToFirstJobYears: 2,
        financialInvestment: 'LOW',
        competitionLevel: 'HIGH',
        flexibilityScore: 8,
        practicalToTheoryRatio: 10
      },
      pros: [
        'Direct proof-of-work: having your own custom silicon chip manufactured on a real wafer',
        'Fastest entry for self-taught programmers into hardware acceleration and RISC-V development'
      ],
      cons: [
        'Requires self-directed discipline in advanced discrete mathematics and digital logic'
      ],
      entryJobRoles: ['Open-Source Silicon Developer', 'FPGA Prototyping Specialist', 'RISC-V Firmware Engineer'],
      fiveYearTrajectory: 'Hardware Accelerator Specialist / Custom Silicon Consultant (₹25L - ₹70L LPA).',
      salarySpectrumLpa: { entryMin: 6.0, entryMax: 16.0, experiencedPeak: 80.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_vlsi_guild_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board & Self-Paced Digital Logic',
          subtitle: 'Learn digital logic gates and Boolean algebra on open-source web simulators',
          description: 'Pass 10th standard and build digital counters and ALU modules on digital simulator tools.',
          mandatoryEligibility: ['Basic 10th pass and self-motivation to build hardware'],
          examGateways: [],
          recommendedInstitutions: ['Online Open-Source Guilds & GitHub Hardware Communities'],
          skillsToAcquire: ['Digital Logic Fundamentals', 'C Programming & Linux Terminal'],
          estimatedCostRange: 'Free (Online Resources)',
          keyActionTip: 'Complete the Nand2Tetris course building a computer from basic NAND gates up to a full CPU.'
        },
        {
          id: 'm_vlsi_guild_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: 'Open Skill Building',
          title: 'Verilog HDL & FPGA Hardware Prototyping',
          subtitle: 'Program physical FPGA boards (Tang Nano 9K / Gowin / Xilinx)',
          durationYears: '1 to 2 Years',
          description: 'Design and synthesize real digital circuits: UART controllers, VGA video generators, and custom arithmetic units.',
          mandatoryEligibility: ['Portfolio of working Verilog modules on GitHub'],
          examGateways: [],
          recommendedInstitutions: ['Tiny Tapeout Workshops', 'FOSSI (Free and Open Source Silicon Foundation)'],
          skillsToAcquire: ['Verilog HDL Synthesis', 'Timing Closure on FPGAs', 'Oscilloscope Signal Debugging'],
          estimatedCostRange: '₹8,000 - ₹25,000 (FPGA hardware development boards)',
          keyActionTip: 'Submit a custom logic design to the Tiny Tapeout shuttle for manufacturing on real silicon.'
        },
        {
          id: 'm_vlsi_guild_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Open Silicon ASIC Tapeout',
          title: 'ASIC Physical Design using OpenROAD & SkyWater 130nm PDK',
          subtitle: 'End-to-end RTL-to-GDSII flow using free, fully automated open-source silicon tools',
          durationYears: '1 Year',
          description: 'Run automated floorplanning, placement, clock-tree synthesis (CTS), and routing to generate production-ready GDSII chip layout files.',
          mandatoryEligibility: ['Verified GDSII layout passing DRC & LVS clean verification'],
          examGateways: [],
          recommendedInstitutions: ['Efabless Open MPW Platform', 'RISC-V Foundation'],
          skillsToAcquire: ['OpenROAD Automated ASIC Flow', 'Static Timing Analysis with OpenSTA', 'Magic DRC/LVS Verification'],
          estimatedCostRange: 'Sponsored / Subsidized by Google & Efabless MPW Programs',
          keyActionTip: 'Publish your complete open-source silicon repository with comprehensive README, schematics, and testbench waveforms.'
        },
        {
          id: 'm_vlsi_guild_4',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Industry Outcomes',
          title: 'Silicon Prototyping Specialist & FPGA Consultant',
          subtitle: 'Join bleeding-edge hardware startups, robotics firms, or remote silicon engineering teams',
          description: 'Build custom silicon accelerators for edge AI, aerospace sensors, and cryptographic security.',
          mandatoryEligibility: ['Demonstrable tape-out portfolio on GitHub / physical chips'],
          examGateways: [],
          recommendedInstitutions: ['Hardware Startups', 'Remote Semiconductor Boutiques', 'DeepTech Labs'],
          skillsToAcquire: ['Hardware-Software Co-Design', 'PCB Integration & Silicon Validation'],
          estimatedCostRange: 'Zero (Earning Phase)',
          keyActionTip: 'Leverage your physical tape-out proof-of-work to apply directly to engineering managers at top chip companies.'
        }
      ]
    }
  }
};
