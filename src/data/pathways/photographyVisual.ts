import { CareerRole } from '../../types/pathway';

export const PHOTOGRAPHY_PATHWAY: CareerRole = {
  id: 'professional_photographer',
  title: 'Professional Photographer & Visual Cinematographer',
  slug: 'professional-photographer',
  domainId: 'design_fashion_arts',
  domainName: 'Visual Arts, Design & Media',
  shortDescription: 'Capture high-impact commercial campaigns, wildlife documentaries, editorial fashion, aerial drone panoramas, and visual journalism.',
  holisticInsight: 'Photography can be pursued through specialized Fine Arts degrees (BFA in Applied Arts/Photography at JJ School of Art or BHU), Design degrees (B.Des in Photography/Visual Communication at NID), Optics & Drone Technology (MPC B.Sc/B.Tech Optics), Nature & Wildlife Biology (BiPC Wildlife Photography), or Direct Apprenticeship with master photographers and global agencies (Magnum, National Geographic).',
  recommendedDegreeBranch: 'BFA in Photography / Applied Arts, B.Des in Visual Communication, or Diploma in Cinematography (FTII / SRFTI)',
  iconName: 'Camera',
  tags: ['Photography', 'Cinematography', 'Wildlife', 'Fashion', 'Visual Arts', 'Drone Camera', 'Commercial Ads', 'Lightroom'],
  marketDemand: 'HIGH',
  streams: {
    HEC: {
      streamType: 'HEC',
      streamName: 'Humanities & Fine Arts (BFA Photography) Route',
      streamShortDesc: '10+2 HEC -> BFA in Photography / Visual Communication (BHU/JJ School) -> Editorial & Commercial Studio',
      badgeLabel: 'Fine Arts & Editorial Master Track',
      themeColor: {
        primary: '#a855f7',
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        glow: 'shadow-purple-500/20'
      },
      approachPhilosophy: 'Deep exploration of visual aesthetics, composition geometry, art history, lighting psychology, and documentary storytelling through comprehensive university fine arts education.',
      branchSelectionStrategy: 'In University Admissions, choose Bachelor of Fine Arts (BFA) with specialization in Photography, Applied Arts, or Visual Communication. Post-degree, appear for FTII JET (Cinematography) or IIMC for Photojournalism.',
      metrics: {
        timeToFirstJobYears: 4,
        financialInvestment: 'LOW',
        competitionLevel: 'HIGH',
        flexibilityScore: 10,
        practicalToTheoryRatio: 9
      },
      pros: [
        'Recognized academic degree for international exhibition grants, museum residencies, and editorial contracts',
        'State-of-the-art university darkroom facilities, lighting studios, and high-end medium format digital cameras',
        'Affordable government university fee structures with national art scholarships'
      ],
      cons: [
        'Entrance practical studio tests require advanced freehand perspective drawing and portfolio proof'
      ],
      entryJobRoles: [
        'Editorial Fashion Photographer',
        'Commercial Advertising Photographer',
        'Photojournalist / Visual Reporter',
        'Curator of Visual Archives'
      ],
      fiveYearTrajectory: 'Celebrity Campaign Photographer / Global Exhibition Director (₹18L - ₹60L+ LPA).',
      salarySpectrumLpa: {
        entryMin: 4.5,
        entryMax: 12.0,
        experiencedPeak: 65.0
      },
      lateralSwitches: [
        {
          id: 'lat_photo_ftii',
          title: 'Post-Degree FTII JET for 3-Year Cinematography Fellowship',
          fromStage: 'After BFA / Bachelor’s Degree',
          toTarget: 'PG Diploma in Cinematography (FTII Pune / SRFTI Kolkata)',
          bridgeExamOrMechanism: 'FTII Joint Entrance Test (JET)',
          description: 'Transition from still photography to high-budget feature film cinematography on ARRI & RED camera systems.',
          durationAdjustment: '3-Year Master Specialization',
          keyBenefit: 'Prepares you for Bollywood, Hollywood, and regional feature film director of photography (DoP) roles.'
        }
      ],
      milestones: [
        {
          id: 'm_photo_hec_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board & Visual Arts Portfolio Foundation',
          subtitle: 'Learn perspective drawing, rule of thirds, and manual camera exposure',
          description: 'Pass 10th standard while building a starter visual portfolio of 20 high-quality photos.',
          mandatoryEligibility: ['Pass 10th Board with min 50%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools'],
          skillsToAcquire: ['Manual Camera Exposure (Shutter Speed, Aperture, ISO)', 'Rule of Thirds & Leading Lines', 'Mobile / Entry DSLR Controls'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Participate in local photo walks and create an Instagram/Behance visual diary.'
        },
        {
          id: 'm_photo_hec_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (HEC)',
          title: '10+2 Intermediate in HEC (History, Economics, Civics/Fine Arts)',
          subtitle: 'Visual art history, color theory, light temperature, and entrance prep',
          durationYears: '2 Years',
          description: 'Build creative ability, studio lighting basics, and art history while preparing for BFA entrance exams (BHU, Sir JJ School of Art, College of Art Delhi).',
          mandatoryEligibility: ['Class 12 in any stream with min 50%'],
          examGateways: ['BHU_BFA_ENTRANCE', 'NID_DAT', 'CUET_UG'],
          recommendedInstitutions: ['Junior Colleges with Visual Arts / Humanities'],
          skillsToAcquire: ['Color Harmony & Golden Ratio', 'Lightroom Raw Post-Processing', 'Studio Strobe Flash Basics'],
          estimatedCostRange: '₹20,000 - ₹60,000',
          keyActionTip: 'Prepare a physical portfolio binder with 15 printed 8x10 photographs demonstrating diverse lighting conditions.'
        },
        {
          id: 'm_photo_hec_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Degree',
          title: 'Bachelor of Fine Arts (BFA) in Photography / Applied Arts',
          subtitle: 'Studio lighting, large format cameras, architectural photography & color grading',
          durationYears: '4 Years',
          description: 'Comprehensive 4-year degree exploring studio strobe setups, high-fashion portraiture, architectural exterior optics, and documentary photojournalism.',
          branchOrSpecializationToChoose: 'MUST Choose: BFA with Specialization in Photography, Applied Art, or Visual Communication.',
          mandatoryEligibility: ['Merit Rank in BFA Entrance / Practical Studio Assessment'],
          examGateways: [],
          postDegreeExams: ['FTII_JET', 'UGC_NET_JRF'],
          recommendedInstitutions: ['Sir J.J. Institute of Applied Art Mumbai', 'Faculty of Visual Arts BHU Varanasi', 'College of Art New Delhi'],
          skillsToAcquire: ['Capture One Pro & Photoshop Retouching', 'Multi-Light Studio Strobe Modifiers', 'Medium Format Digital Backs (Hasselblad/Phase One)'],
          estimatedCostRange: '₹40,000 - ₹1.8L (Highly subsidized state universities)',
          keyActionTip: 'Assist commercial senior photographers on weekends to gain real-world client set experience.'
        },
        {
          id: 'm_photo_hec_4',
          phase: 'PHASE_POST_GRAD_RECRUITMENT',
          phaseLabel: 'Post-Graduation / FTII Specialization',
          title: 'FTII JET for Cinematography / Commercial Studio Apprenticeship',
          subtitle: 'Feature film camera operation, OTT series lighting, or international ad campaigns',
          durationYears: '2 to 3 Years',
          description: 'Qualify in FTII JET for PG Diploma in Cinematography, or establish an independent commercial photography agency.',
          mandatoryEligibility: ['Graduation degree and comprehensive visual showreel'],
          examGateways: ['FTII_JET'],
          recommendedInstitutions: ['Film and Television Institute of India (FTII Pune)', 'Satyajit Ray Film Institute (SRFTI)'],
          skillsToAcquire: ['Moving Camera Stabilizers (Steadicam / Gimbals)', 'Cinematic Lighting Rigs (ARRI HMI, Skypanels)', 'Color LUT Creation in DaVinci Resolve'],
          estimatedCostRange: '₹1.5L - ₹3.5L',
          keyActionTip: 'Submit documentary photo essays to national and international contests like Sony World Photography Awards and World Press Photo.'
        },
        {
          id: 'm_photo_hec_5',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Industry Outcomes',
          title: 'Master Commercial Photographer / Lead Director of Photography',
          subtitle: 'Directing advertising campaigns for luxury brands, automotive giants, and Vogue/Harper’s Bazaar',
          description: 'Command high day-rates for global commercial assignments, celebrity portraits, and gallery prints.',
          mandatoryEligibility: ['Recognized body of work with international client roster'],
          examGateways: [],
          recommendedInstitutions: ['Global Advertising Agencies', 'Condé Nast International', 'Production Houses'],
          skillsToAcquire: ['Creative Direction', 'High-End Retouching Oversight', 'Commercial Copyright & Usage Licensing'],
          estimatedCostRange: 'Zero (High-Earning Commercial Phase)',
          keyActionTip: 'Register your signature fine art prints for gallery auctions and international art fairs.'
        }
      ]
    },
    MPC: {
      streamType: 'MPC',
      streamName: 'Optics, Aerial Drone & High-Speed Computational Photography',
      streamShortDesc: '10+2 MPC -> B.Tech / B.Sc in Optical Engineering / Computer Vision -> Drone & VFX Camera Lead',
      badgeLabel: 'Optics, Drone & Computational Vision Track',
      themeColor: {
        primary: '#3b82f6',
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        glow: 'shadow-blue-500/20'
      },
      approachPhilosophy: 'Master optical physics, lens aberrations, high-speed camera sensors, LiDAR scanning, aerial drone photogrammetry, and computer vision imaging algorithms.',
      branchSelectionStrategy: 'In B.Tech, select Electronics, Instrumentation, or Computer Science with electives in Digital Image Processing and Photogrammetry. Obtain DGCA Drone Pilot Remote Pilot Certificate (RPC).',
      metrics: {
        timeToFirstJobYears: 4,
        financialInvestment: 'MODERATE',
        competitionLevel: 'MODERATE',
        flexibilityScore: 9,
        practicalToTheoryRatio: 8
      },
      pros: [
        'Huge demand in high-budget cinema VFX, industrial drone surveying, autonomous car vision, and aerospace imaging',
        'Combines engineering salaries with creative aerial visual direction'
      ],
      cons: [
        'Requires rigorous understanding of Fourier optics, wave physics, and sensor mathematics'
      ],
      entryJobRoles: ['DGCA Certified Drone Cinematographer', 'Computational Photography Specialist', '3D Photogrammetry & LiDAR Surveyor'],
      fiveYearTrajectory: 'Chief Aerial DoP / Optical Imaging Systems Architect (₹22L - ₹55L+ LPA).',
      salarySpectrumLpa: { entryMin: 6.0, entryMax: 15.0, experiencedPeak: 70.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_photo_mpc_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Exam',
          subtitle: 'Focus on optics in physics, trigonometry, and coordinate geometry',
          description: 'Pass 10th board with strong physical science foundation.',
          mandatoryEligibility: ['Pass 10th with min 60%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools'],
          skillsToAcquire: ['Ray Optics (Focal length, Refraction)', 'Basic Physics of Light'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Build a DIY pinhole camera to understand focal length and angle of view.'
        },
        {
          id: 'm_photo_mpc_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (MPC)',
          title: '10+2 Intermediate in MPC (Maths, Physics, Chemistry)',
          subtitle: 'Wave optics, diffraction, polarized light, and entrance exam preparation',
          durationYears: '2 Years',
          description: 'Master Wave Optics, Electromagnetic Waves, and coordinate geometry while building drone flying and camera skills.',
          mandatoryEligibility: ['Class 12 with PCM min 60%'],
          examGateways: ['JEE_MAIN', 'UCEED'],
          recommendedInstitutions: ['Junior Colleges'],
          skillsToAcquire: ['Wave Optics & Polarization', 'Basic Drone Flight Controls', 'Raw Image Sensor Debayering Algorithms'],
          estimatedCostRange: '₹30,000 - ₹90,000',
          keyActionTip: 'Complete a DGCA-approved Remote Pilot Training Organization (RPTO) course for drone certification.'
        },
        {
          id: 'm_photo_mpc_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Degree',
          title: 'B.Tech in Computer Science / Electronics / Optical Engineering',
          subtitle: 'Specialization in Digital Image Processing, Photogrammetry & Computer Vision',
          durationYears: '4 Years',
          description: 'Learn computer vision algorithms (OpenCV), HDR imaging, high-speed camera triggers, and 3D photogrammetry reconstruction.',
          branchOrSpecializationToChoose: 'Choose: B.Tech in CSE / Electronics with electives in Image Processing and Computer Vision.',
          mandatoryEligibility: ['Admission via JEE / State CET'],
          examGateways: [],
          postDegreeExams: ['GATE_EC'],
          recommendedInstitutions: ['IIT Roorkee (Geomatics)', 'IIT Madras', 'IIIT Hyderabad (CVIT)'],
          skillsToAcquire: ['OpenCV & Python Imaging', 'LiDAR & Photogrammetry (Agisoft Metashape)', 'Cinematic FPV Drone Operation'],
          estimatedCostRange: '₹3L - ₹8L',
          keyActionTip: 'Shoot aerial drone sequences for OTT productions or tourism boards to build commercial showreel credits.'
        },
        {
          id: 'm_photo_mpc_4',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Industry Outcomes',
          title: 'Lead Aerial Cinematographer & VFX Optical Supervisor',
          subtitle: 'Directing complex aerial drone shots for major feature films and geographic expeditions',
          description: 'Operate custom heavy-lift cinema drones carrying RED/ARRI cameras on movie sets worldwide.',
          mandatoryEligibility: ['DGCA Commercial RPC License and certified aerial cinema reel'],
          examGateways: [],
          recommendedInstitutions: ['Feature Film Production Studios', 'Discovery Channel Expeditions', 'VFX Studios'],
          skillsToAcquire: ['Heavy-Lift Drone Piloting in High Winds', 'Virtual Production (LED Volume Calibration)'],
          estimatedCostRange: 'Zero (High-Earning Phase)',
          keyActionTip: 'Partner with international documentary crews for high-altitude wildlife and geographical aerial surveys.'
        }
      ]
    },
    BiPC: {
      streamType: 'BiPC',
      streamName: 'Wildlife, Macro & Scientific Medical Photography Route',
      streamShortDesc: '10+2 BiPC -> B.Sc in Zoology / Wildlife Biology -> National Geographic & BBC Natural History',
      badgeLabel: 'Wildlife & Scientific Macro Track',
      themeColor: {
        primary: '#10b981',
        border: 'border-emerald-500/30',
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
        glow: 'shadow-emerald-500/20'
      },
      approachPhilosophy: 'Understand animal behavior, habitat ecology, telephoto long-lens optics, camera-trap sensor technology, and underwater marine photography to document endangered wildlife and biodiversity.',
      branchSelectionStrategy: 'In University, choose B.Sc in Zoology, Wildlife Biology, or Environmental Sciences. Combine natural sciences with field photography expeditions across national parks (Kaziranga, Jim Corbett, Ranthambore, Western Ghats).',
      metrics: {
        timeToFirstJobYears: 4,
        financialInvestment: 'MODERATE',
        competitionLevel: 'HIGH',
        flexibilityScore: 8,
        practicalToTheoryRatio: 10
      },
      pros: [
        'Direct assignments with conservation organizations (WWF, Sanctuary Asia, National Geographic, BBC Earth)',
        'Deep scientific purpose preserving biodiversity through powerful visual storytelling'
      ],
      cons: [
        'Demands intense patience, extreme weather endurance, and high-cost telephoto lenses (400mm/600mm f/4)'
      ],
      entryJobRoles: ['Wildlife Expedition Photographer', 'Conservation Photojournalist', 'Scientific Macro Photographer'],
      fiveYearTrajectory: 'Natural History Documentarian / BBC Field Specialist (₹15L - ₹45L LPA).',
      salarySpectrumLpa: { entryMin: 4.0, entryMax: 10.0, experiencedPeak: 55.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_photo_bipc_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Exam',
          subtitle: 'Strong performance in biology, environmental science, and bird watching',
          description: 'Pass 10th standard with active outdoor curiosity.',
          mandatoryEligibility: ['Pass 10th with min 50%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools'],
          skillsToAcquire: ['Bird Identification', 'Basic Nature Sketching & Framing'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Start a regional bird and butterfly identification journal in your city/district.'
        },
        {
          id: 'm_photo_bipc_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (BiPC)',
          title: '10+2 Intermediate in BiPC (Biology, Physics, Chemistry)',
          subtitle: 'Zoology, animal physiology, ecological niches, and telephoto lens basics',
          durationYears: '2 Years',
          description: 'Master biology and biodiversity taxonomy while practicing telephoto wildlife tracking in sanctuaries.',
          mandatoryEligibility: ['Class 12 PCB with min 50%'],
          examGateways: ['CUET_UG'],
          recommendedInstitutions: ['Junior Colleges'],
          skillsToAcquire: ['Telephoto Shutter Speed Optimization', 'Tracking Animal Movement in Foliage', 'Raw Processing of Foliage Colors'],
          estimatedCostRange: '₹25,000 - ₹75,000',
          keyActionTip: 'Spend school vacations volunteering in forest reserve interpretation centers.'
        },
        {
          id: 'm_photo_bipc_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Degree',
          title: 'B.Sc in Wildlife Biology / Zoology & Environmental Science',
          subtitle: 'Field ecology, animal behavior tracking, and camera-trap deployment',
          durationYears: '3 Years',
          description: 'Study ethology (animal behavior), conservation biology, and high-speed infrared camera trapping.',
          branchOrSpecializationToChoose: 'Choose: B.Sc in Wildlife Biology, Zoology, or Environmental Studies.',
          mandatoryEligibility: ['Admission via CUET or University Merit'],
          examGateways: [],
          recommendedInstitutions: ['Wildlife Institute of India (WII Dehradun)', 'St. Xavier’s College Mumbai', 'Loyola College Chennai'],
          skillsToAcquire: ['Camera-Trap Setup & Motion Sensors', 'Telephoto Super-Zoom Handholding Technique', 'Underwater Camera Housing Diving Basics'],
          estimatedCostRange: '₹60,000 - ₹2.5L',
          keyActionTip: 'Publish wildlife photo stories in Sanctuary Asia and Nature in Focus magazines.'
        },
        {
          id: 'm_photo_bipc_4',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Industry Outcomes',
          title: 'National Geographic / BBC Natural History Field Photographer',
          subtitle: 'Documenting rare species, migration spectacles, and conservation triumphs',
          description: 'Lead multi-month field expeditions to document tiger tracking, snow leopards, and marine ecosystems.',
          mandatoryEligibility: ['Verified conservation documentary portfolio and field safety certifications'],
          examGateways: [],
          recommendedInstitutions: ['National Geographic Society', 'BBC Natural History Unit', 'WWF International'],
          skillsToAcquire: ['Extreme Climate Field Survival', 'High-Frame-Rate 4K/8K Slow Motion Capture'],
          estimatedCostRange: 'Zero (Sponsored Expedition Phase)',
          keyActionTip: 'Apply for National Geographic Storytelling Grants to fund independent wildlife conservation projects.'
        }
      ]
    },
    MEC_CEC: {
      streamType: 'MEC_CEC',
      streamName: 'Commercial Studio Enterprise & Fashion Agency Route',
      streamShortDesc: '10+2 MEC -> BBA Luxury & Fashion Management -> Commercial Photography Agency Founder',
      badgeLabel: 'Commercial Studio Business Track',
      themeColor: {
        primary: '#f59e0b',
        border: 'border-amber-500/30',
        bg: 'bg-amber-500/10',
        text: 'text-amber-400',
        glow: 'shadow-amber-500/20'
      },
      approachPhilosophy: 'Build and scale high-revenue commercial production studios, e-commerce catalog operations (Myntra/Amazon shoots), luxury wedding empires, and model talent management.',
      branchSelectionStrategy: 'In Degree, choose BBA or B.Com in Marketing & Media Management. Learn commercial client invoicing, usage licensing copyright, and studio equipment asset depreciation.',
      metrics: {
        timeToFirstJobYears: 3,
        financialInvestment: 'MODERATE',
        competitionLevel: 'MODERATE',
        flexibilityScore: 10,
        practicalToTheoryRatio: 8
      },
      pros: [
        'Highest commercial earning potential in destination weddings (₹5L - ₹25L per wedding) and brand catalog shoots',
        'Scalable business model employing junior photographers, videographers, and retouchers'
      ],
      cons: [
        'Requires strong sales, marketing, and client negotiation skills in competitive markets'
      ],
      entryJobRoles: ['Commercial Studio Producer', 'Destination Wedding Photography Director', 'E-Commerce Shoot Lead'],
      fiveYearTrajectory: 'Founder & CEO of Leading Creative Production Agency (₹30L - ₹1Cr+ Annual Revenue).',
      salarySpectrumLpa: { entryMin: 6.0, entryMax: 18.0, experiencedPeak: 120.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_photo_mec_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Exam',
          subtitle: 'Strong communication, arithmetic, and creative thinking',
          description: 'Pass 10th standard with focus on commercial awareness.',
          mandatoryEligibility: ['Pass 10th with min 50%'],
          examGateways: [],
          recommendedInstitutions: ['Secondary Schools'],
          skillsToAcquire: ['Basic Social Media Marketing', 'Budget Planning'],
          estimatedCostRange: 'Nominal School Fees',
          keyActionTip: 'Observe how top luxury fashion and wedding brands package their visual content.'
        },
        {
          id: 'm_photo_mec_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '10+2 Intermediate (MEC)',
          title: '10+2 Intermediate in MEC (Maths, Economics, Commerce)',
          subtitle: 'Marketing principles, accounting, consumer psychology, and photography basics',
          durationYears: '2 Years',
          description: 'Learn financial management and commercial contracts while shooting portrait and event portfolios.',
          mandatoryEligibility: ['Class 12 in Commerce/MEC with min 50%'],
          examGateways: ['CUET_UG', 'IPMAT_INDORE'],
          recommendedInstitutions: ['Junior Commerce Colleges'],
          skillsToAcquire: ['Brand Storytelling', 'Client Contract Negotiation', 'High-Speed Workflow Turnaround'],
          estimatedCostRange: '₹30,000 - ₹75,000',
          keyActionTip: 'Create a business plan for an event photography agency calculating equipment ROI and crew costs.'
        },
        {
          id: 'm_photo_mec_3',
          phase: 'PHASE_3_DEGREE',
          phaseLabel: 'Undergraduate Degree',
          title: 'BBA in Media & Entertainment Management / B.Com',
          subtitle: 'Production management, intellectual property copyright, and studio operations',
          durationYears: '3 Years',
          description: 'Learn studio management, media marketing, corporate taxation, and crew coordination.',
          branchOrSpecializationToChoose: 'Choose: BBA in Media Management, Event Management, or Advertising.',
          mandatoryEligibility: ['Admission via University Merit / Entrance'],
          examGateways: [],
          recommendedInstitutions: ['Symbiosis Centre for Media', 'NMIMS Mumbai', 'Christ University Bangalore'],
          skillsToAcquire: ['Studio Lighting Equipment Logistics', 'Client Retainer Contracts', 'Multi-Camera Live Event Directing'],
          estimatedCostRange: '₹2.5L - ₹6.5L',
          keyActionTip: 'Launch a student event photography venture on campus to build operational experience.'
        },
        {
          id: 'm_photo_mec_4',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Industry Outcomes',
          title: 'Founder & Creative Director of High-End Production Studio',
          subtitle: 'Managing luxury destination weddings, corporate ad campaigns, and fashion lookbooks',
          description: 'Direct full production crews (cinematographers, drone pilots, lighting assistants, retouchers) for premium international clients.',
          mandatoryEligibility: ['High-value client portfolio and established production team'],
          examGateways: [],
          recommendedInstitutions: ['Independent Production House', 'Luxury Event Industry'],
          skillsToAcquire: ['Creative Agency Scaling', 'Global Destination Shoot Logistics'],
          estimatedCostRange: 'Zero (High Profit Commercial Phase)',
          keyActionTip: 'Expand into international destination markets (Italy, Dubai, Thailand, Bali) for premium luxury weddings.'
        }
      ]
    },
    POLYTECHNIC: {
      streamType: 'POLYTECHNIC',
      streamName: '3-Year Polytechnic Diploma in Photography & Digital Imaging',
      streamShortDesc: '10th -> POLYCET -> 3-Yr Diploma in Photography -> State Studio Certification',
      badgeLabel: 'Hands-On Studio Technician Track',
      themeColor: {
        primary: '#06b6d4',
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
        glow: 'shadow-cyan-500/20'
      },
      approachPhilosophy: 'Direct hands-on darkroom, lighting grid, camera sensor, and print technology training right after 10th standard in government-recognized polytechnic institutes (such as JNAFAU Hyderabad or State Technical Boards).',
      branchSelectionStrategy: 'In POLYCET, select 3-Year Diploma in Photography & Digital Imaging (D.PDI) or Printing Technology.',
      metrics: {
        timeToFirstJobYears: 3,
        financialInvestment: 'LOW',
        competitionLevel: 'LOW',
        flexibilityScore: 8,
        practicalToTheoryRatio: 10
      },
      pros: [
        'Fastest route to becoming a professional studio operator with state government certification',
        'Direct lab training on industrial photo printers, darkroom chemical processes, and studio strobes',
        'Extremely affordable government fees (< ₹15,000 total)'
      ],
      cons: [
        'Limited seats in state polytechnic photography diploma branches'
      ],
      entryJobRoles: ['Professional Studio Photographer', 'Industrial Print & Lab Technician', 'Assistant Cinematographer'],
      fiveYearTrajectory: 'Independent Studio Owner / Lead Lighting Technician (₹12L - ₹35L LPA).',
      salarySpectrumLpa: { entryMin: 3.5, entryMax: 8.0, experiencedPeak: 45.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_photo_poly_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board Exam & State POLYCET',
          subtitle: 'Appear for POLYCET to secure admission in Diploma in Photography',
          description: 'Clear 10th standard board exam and qualify in POLYCET.',
          mandatoryEligibility: ['Pass 10th Board with min 35% in Science & Maths'],
          examGateways: ['POLYCET_DIPLOMA'],
          recommendedInstitutions: ['State Technical Education Boards'],
          skillsToAcquire: ['Basic Mathematics & Science'],
          estimatedCostRange: '₹3,000 - ₹8,000',
          keyActionTip: 'Opt for Diploma in Photography during state polytechnic counseling.'
        },
        {
          id: 'm_photo_poly_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: '3-Year Polytechnic Diploma',
          title: '3-Year Diploma in Photography & Digital Imaging (D.PDI)',
          subtitle: 'Studio lighting, portraiture, industrial photo lab operation, and digital retouching',
          durationYears: '3 Years',
          description: 'Hands-on practical training on full-frame digital cameras, flash meters, softboxes, beauty dishes, color calibration, and Photoshop editing.',
          branchOrSpecializationToChoose: 'MUST Choose: Diploma in Photography & Digital Imaging (D.PDI).',
          mandatoryEligibility: ['Seat Allotment in Diploma Photography via POLYCET'],
          examGateways: [],
          recommendedInstitutions: ['Jawaharlal Nehru Architecture and Fine Arts University (JNAFAU Hyderabad)', 'State Polytechnic Institutes'],
          skillsToAcquire: ['Studio Strobe Flash Metering', 'High-End Photoshop Retouching (Frequency Separation, Dodge & Burn)', 'Large Format Fine Art Printing'],
          estimatedCostRange: '₹15,000 - ₹35,000',
          keyActionTip: 'Master studio lighting modifiers (stripboxes, parabolic umbrellas, grids) to control shadow ratios.'
        },
        {
          id: 'm_photo_poly_3',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Industry Outcomes',
          title: 'Lead Commercial Studio Photographer',
          subtitle: 'Running portrait studios, commercial catalog shoots, and corporate events',
          description: 'Manage professional photography shoots with complete technical mastery of camera systems and lighting.',
          mandatoryEligibility: ['Diploma in Photography and professional portfolio'],
          examGateways: [],
          recommendedInstitutions: ['Commercial Studios', 'Advertising Production Centers'],
          skillsToAcquire: ['Client Posing & Direction', 'Color Managed Print Workflow'],
          estimatedCostRange: 'Zero (Earning Phase)',
          keyActionTip: 'Upgrade equipment progressively investing in high-speed sync (HSS) battery strobes.'
        }
      ]
    },
    VOCATIONAL_GUILD: {
      streamType: 'VOCATIONAL_GUILD',
      streamName: 'Master Assistant & Guild Apprenticeship Route',
      streamShortDesc: 'Direct Studio Apprenticeship -> 2nd Shooter -> Master Fashion & Advertising Photographer',
      badgeLabel: 'Direct Studio Guild Track',
      themeColor: {
        primary: '#f43f5e',
        border: 'border-rose-500/30',
        bg: 'bg-rose-500/10',
        text: 'text-rose-400',
        glow: 'shadow-rose-500/20'
      },
      approachPhilosophy: 'Learn by assisting top commercial and fashion master photographers directly on live commercial sets, mastering equipment handling, client communication, and lighting nuances in real-time.',
      branchSelectionStrategy: 'Build a focused 15-image portfolio, apply as a 1st/2nd camera assistant to established photographers in Mumbai, Delhi, or Bengaluru, and transition to independent lead shooter.',
      metrics: {
        timeToFirstJobYears: 2,
        financialInvestment: 'LOW',
        competitionLevel: 'HIGH',
        flexibilityScore: 10,
        practicalToTheoryRatio: 10
      },
      pros: [
        'Fastest real-world exposure to celebrity shoots, high-budget commercial ad sets, and global brands',
        'Learn unwritten industry etiquette, client management, and lighting troubleshooting'
      ],
      cons: [
        'Requires humility and physical stamina during early assistant years on long shoot days'
      ],
      entryJobRoles: ['1st Camera Assistant', 'Digital Tech / On-Set Tethering Operator', 'Associate Photographer'],
      fiveYearTrajectory: 'Top Independent Commercial Photographer (₹20L - ₹65L LPA).',
      salarySpectrumLpa: { entryMin: 4.0, entryMax: 10.0, experiencedPeak: 60.0 },
      lateralSwitches: [],
      milestones: [
        {
          id: 'm_photo_guild_1',
          phase: 'PHASE_0_10TH',
          phaseLabel: '10th Standard Gateway',
          title: '10th Board & Self-Taught Photography',
          subtitle: 'Master camera settings and lighting fundamentals through practice',
          description: 'Pass 10th standard and master manual exposure controls.',
          mandatoryEligibility: ['Basic 10th pass and passion for visual creation'],
          examGateways: [],
          recommendedInstitutions: ['Self-Taught & Masterclass Workshops'],
          skillsToAcquire: ['Manual Camera Settings', 'Light Quality & Direction'],
          estimatedCostRange: 'Nominal',
          keyActionTip: 'Study lighting setups of master photographers by analyzing catchlights in eyes.'
        },
        {
          id: 'm_photo_guild_2',
          phase: 'PHASE_1_STREAM',
          phaseLabel: 'Apprenticeship Phase',
          title: '1st / 2nd Camera Assistant to Master Photographer',
          subtitle: 'On-set lighting setup, digital tethering in Capture One, and equipment care',
          durationYears: '2 to 3 Years',
          description: 'Assist senior photographers on real fashion campaigns, magazine covers, and brand commercials.',
          mandatoryEligibility: ['Solid work ethic, attention to detail, and willingness to learn on set'],
          examGateways: [],
          recommendedInstitutions: ['Top Commercial Studios in Mumbai / Delhi / Bengaluru'],
          skillsToAcquire: ['Tethered Shooting in Capture One', 'C-Stand & Boom Rigging', 'Light Shaping & Bounce Control'],
          estimatedCostRange: 'Earning Stipend (₹15,000 - ₹35,000/month)',
          keyActionTip: 'Anticipate the lead photographer’s next move on set: have the right lens and battery ready.'
        },
        {
          id: 'm_photo_guild_3',
          phase: 'PHASE_5_OUTCOME',
          phaseLabel: 'Industry Launch',
          title: 'Independent Fashion & Commercial Campaign Photographer',
          subtitle: 'Signing direct contracts with top brands, designers, and ad agencies',
          description: 'Launch your independent label with established client connections and signature visual style.',
          mandatoryEligibility: ['Verified commercial portfolio and agency contacts'],
          examGateways: [],
          recommendedInstitutions: ['Independent Agency Practice'],
          skillsToAcquire: ['Art Direction', 'Commercial Client Negotiations'],
          estimatedCostRange: 'Zero (High-Earning Phase)',
          keyActionTip: 'Maintain strong relationships with stylists, makeup artists, and art directors who recommend photographers for major campaigns.'
        }
      ]
    }
  }
};
