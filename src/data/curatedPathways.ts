import { CareerRole } from '../types/pathway';
import { CREATIVE_ARTS_PATHWAYS } from './pathways/creativeArts';
import { AVIATION_DEFENSE_PATHWAYS } from './pathways/aviationDefense';
import { LAW_CIVIL_PATHWAYS } from './pathways/lawCivilServices';
import { CULINARY_HOSPITALITY_PATHWAYS } from './pathways/culinaryHospitality';

// Base Pathways (Film Director, Actor, AI Engineer)
const STREAM_THEMES = {
  MPC: { primary: '#3b82f6', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400', glow: 'shadow-blue-500/20' },
  BiPC: { primary: '#10b981', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  MEC_CEC: { primary: '#f59e0b', border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400', glow: 'shadow-amber-500/20' },
  HEC: { primary: '#a855f7', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400', glow: 'shadow-purple-500/20' },
  POLYTECHNIC: { primary: '#06b6d4', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
  VOCATIONAL_GUILD: { primary: '#f43f5e', border: 'border-rose-500/30', bg: 'bg-rose-500/10', text: 'text-rose-400', glow: 'shadow-rose-500/20' }
};

const BASE_PATHWAYS: Record<string, CareerRole> = {
  // 1. FILM DIRECTOR
  film_director: {
    id: 'film_director',
    title: 'Film Director / Visionary Filmmaker',
    slug: 'film-director',
    domainId: 'film_theatre_arts',
    domainName: 'Film, Theatre & Performing Arts',
    shortDescription: 'Lead cinematic storytelling, visual composition, actor direction, and creative production from script to silver screen.',
    holisticInsight: 'Filmmaking is interdisciplinary. You can approach it via Humanities/Theatre (narrative focus), MPC (cinematography/VFX/virtual production focus), MEC (producer-director/studio leadership), Polytechnic (camera/sound technical master), or direct Guild apprenticeship.',
    iconName: 'Clapperboard',
    tags: ['Cinema', 'Direction', 'Storytelling', 'FTII', 'Visual Arts', 'Creative Producing'],
    marketDemand: 'HIGH',
    streams: {
      HEC: {
        streamType: 'HEC',
        streamName: 'Humanities & Dramatic Arts Route',
        streamShortDesc: 'Literature, Psychology & Classical Dramatic Narrative',
        badgeLabel: 'Narrative & Performance Focus',
        themeColor: STREAM_THEMES.HEC,
        approachPhilosophy: 'Deep grounding in human emotion, classical drama, literature, and social history, leading to premier film institutes (FTII, SRFTI, NSD).',
        metrics: { timeToFirstJobYears: 5, financialInvestment: 'LOW', competitionLevel: 'EXTREME', flexibilityScore: 9, practicalToTheoryRatio: 8 },
        pros: ['Unrivaled storytelling depth, character psychological nuance, and literary grounding', 'Direct eligibility for top government film institutes (FTII / SRFTI / NSD) with heavily subsidized tuition', 'High adaptability into screenwriting, docu-filmmaking, advertising, and creative direction'],
        cons: ['Requires self-initiated technical upskilling in cameras, lighting gear, and editing NLEs', 'FTII / NSD entrance exams and auditions have sub-1% acceptance rates'],
        entryJobRoles: ['Assistant Director (AD)', 'Script Supervisor', 'Independent Short Filmmaker', 'Creative Associate'],
        fiveYearTrajectory: 'Feature Film Director, Web Series Showrunner, or Ad Agency Creative Director (₹25L - ₹1.5Cr+ per project).',
        salarySpectrumLpa: { entryMin: 4.5, entryMax: 9, experiencedPeak: 80 },
        lateralSwitches: [
          {
            id: 'hec_to_ad_agency',
            title: 'Advertising & Commercial Direction Pivot',
            fromStage: 'After BA in Mass Media / Film',
            toTarget: 'Leading Ad Film Production Houses',
            bridgeExamOrMechanism: 'Portfolio Reel & Ad Festival Awards',
            description: 'Transition into 60-second high-budget commercial direction before helming feature films.',
            durationAdjustment: 'Immediate',
            keyBenefit: 'High upfront cash flow while developing original feature screenplays.'
          }
        ],
        milestones: [
          {
            id: 'm1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard Foundation',
            title: '10th Board Completion & Creative Portfolio Inception',
            subtitle: 'Creative writing, theatre participation & film analysis',
            description: 'Complete 10th standard with strong foundation in languages, creative writing, and basic photography.',
            mandatoryEligibility: ['Pass 10th Board (State/CBSE/ICSE) with min 50%', 'Active reading habits and visual diary maintenance'],
            examGateways: [],
            recommendedInstitutions: ['Recognized Secondary Schools', 'Local Youth Theatre Groups'],
            skillsToAcquire: ['Creative Essay Writing', 'Scene Breakdown Analysis', 'Basic Still Photography Composition'],
            estimatedCostRange: 'Nominal Board Fees',
            keyActionTip: 'Start watching world cinema classics (Kurosawa, Ray, Hitchcock) and keeping an analytical scene notebook.'
          },
          {
            id: 'm2', phase: 'PHASE_1_STREAM', phaseLabel: 'Intermediate / 10+2 (HEC)',
            title: '10+2 HEC (History, Economics, Civics / Literature)',
            subtitle: 'Study socio-political history, world literature, and theatre arts',
            durationYears: '2 Years',
            description: 'Focus on history, literature, and visual culture while making zero-budget smartphone short films.',
            mandatoryEligibility: ['10+2 Pass in HEC / Arts / Humanities with minimum 55%'],
            examGateways: ['CUET_UG'],
            recommendedInstitutions: ['Top Arts Colleges (St. Xavier’s, Loyola, Miranda House, MCC)'],
            skillsToAcquire: ['Three-Act Screenplay Structure', 'Actor Blocking & Rehearsal Techniques', 'Adobe Premiere / DaVinci Resolve basics'],
            estimatedCostRange: '₹20,000 - ₹80,000 for 2 years',
            keyActionTip: 'Direct at least 3 five-minute short films with fellow students and submit to local film festivals.'
          },
          {
            id: 'm3', phase: 'PHASE_2_EXAMS', phaseLabel: 'Entrance Gateways & Film Auditions',
            title: 'Crack National Film Institute Joint Entrance (FTII JET)',
            subtitle: 'Competitive entrance for Direction & Screenplay at FTII Pune / SRFTI Kolkata',
            description: 'Clear the grueling FTII JET testing cinema history, creative writing, visual sequencing, and personal interview.',
            mandatoryEligibility: ['Bachelor’s Degree in any discipline (B.A. / B.Sc / B.Tech / B.Com)'],
            examGateways: ['FTII_JET'],
            recommendedInstitutions: ['FTII Pune', 'Satyajit Ray Film & Television Institute (SRFTI Kolkata)'],
            skillsToAcquire: ['Shot List Conception', 'Mise-en-Scène Staging', 'Sound Track Layering & Temp Tracks'],
            estimatedCostRange: '₹4,000 - ₹10,000 (Exam & Prep)',
            keyActionTip: 'Analyze previous 10 years of FTII JET question papers and create a 10-photograph visual story portfolio.'
          },
          {
            id: 'm4', phase: 'PHASE_3_DEGREE', phaseLabel: 'Premier Film Degree / PG Diploma',
            title: '3-Year Post-Graduate Diploma in Direction & Screenplay Writing',
            subtitle: 'Hands-on celluloid and digital film production with industry mentors',
            durationYears: '3 Years',
            description: 'Direct dialogue exercises, documentary projects, playback shoots, and a 20-minute diploma graduation film with full crew.',
            mandatoryEligibility: ['Selection through FTII JET merit rank and orientation workshop'],
            examGateways: [],
            recommendedInstitutions: ['FTII Pune', 'SRFTI Kolkata', 'Whistling Woods International'],
            skillsToAcquire: ['Directing Actors for Camera', 'Multi-Camera Studio Setup', 'Budget Scheduling & Line Production'],
            estimatedCostRange: '₹1.5L - ₹3.5L total at FTII (Govt Subsidized) vs ₹18L - ₹24L at Private Academies',
            keyActionTip: 'Build strong lifelong creative alliances with your batchmate cinematographers, sound designers, and editors.'
          },
          {
            id: 'm5', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes & Career Launch',
            title: 'Directorial Debut & Professional Film Career',
            subtitle: 'From Chief Assistant Director to Independent Feature Director',
            description: 'Enter the industry as 1st AD or pitch original web-series pilots / indie feature films to studios, OTT platforms, and producers.',
            mandatoryEligibility: ['Award-winning diploma short or acclaimed indie short film reel'],
            examGateways: [],
            recommendedInstitutions: ['Mainstream Film Studios (YRF, Dharma, Geetha Arts, Mythri)', 'OTT Platforms (Netflix, Amazon Prime)'],
            skillsToAcquire: ['Pitch Deck & Lookbook Presentation', 'Cast Packaging & Talent Negotiation', 'Post-Production Supervision'],
            estimatedCostRange: 'Zero (Earning Phase)',
            keyActionTip: 'Register original scripts with the Screenwriters Association (SWA) before pitching to production houses.'
          }
        ]
      },
      MPC: {
        streamType: 'MPC',
        streamName: 'Mathematical, Physics & Tech-Cinema Route',
        streamShortDesc: 'Optics, Virtual Production, VFX Direction & Technical Cinematography',
        badgeLabel: 'Tech, VFX & Virtual Production',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Harness physics of light, computational imaging, unreal engine virtual production, and sound acoustics to become a high-tech visionary director.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 10, practicalToTheoryRatio: 7 },
        pros: ['Mastery over complex CGI, virtual production (LED volumes), and advanced camera optics', 'Immense fallback flexibility: B.Tech / B.Sc in Visual Media or CS opens massive gaming/VFX/tech careers', 'Natural bridge into sound engineering and technical direction'],
        cons: ['Heavy STEM academic load in 11th & 12th leaves less time for early theatre/literature exploration', 'Must intentionally build narrative and acting empathy skills'],
        entryJobRoles: ['VFX Art Director', 'Virtual Production Supervisor', 'Technical Director', 'Assistant Director'],
        fiveYearTrajectory: 'Sci-Fi / Big-Budget Action Feature Director or Virtual Production Studio Head (₹30L - ₹2Cr+).',
        salarySpectrumLpa: { entryMin: 6, entryMax: 14, experiencedPeak: 120 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'mpc_m1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Strong Maths & Science',
            subtitle: 'Solid geometry, optics, and computational logic',
            description: 'Excel in 10th standard science and mathematics with an eye on computer graphics and digital arts.',
            mandatoryEligibility: ['Pass 10th with > 65% in Science and Maths'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['3D Coordinate Geometry', 'Basic Coding in Python', 'Digital Art & Blender 3D basics'],
            estimatedCostRange: 'Standard School Fees',
            keyActionTip: 'Experiment with Blender 3D and Unreal Engine 5 to understand virtual lighting and virtual cameras.'
          },
          {
            id: 'mpc_m2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 MPC',
            title: '10+2 Intermediate MPC (Maths, Physics, Chemistry)',
            subtitle: 'Deep study of wave optics, rotational mechanics, and calculus',
            durationYears: '2 Years',
            description: 'Master physics of light, lenses, acoustics, and geometry while maintaining creative hobbies.',
            mandatoryEligibility: ['10+2 PCM pass with min 60%'],
            examGateways: ['JEE_MAIN', 'UCEED'],
            recommendedInstitutions: ['Junior Colleges / CBSE 10+2'],
            skillsToAcquire: ['Optics & Focal Length Calculations', 'Color Grading Physics', 'Unreal Engine Virtual Sets'],
            estimatedCostRange: '₹40,000 - ₹1.5L',
            keyActionTip: 'Prepare for both JEE Main and UCEED (Design Entrance for IITs).'
          },
          {
            id: 'mpc_m3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Undergraduate Degree',
            title: 'B.Des / B.Tech in Visual Media & Virtual Production',
            subtitle: 'Intersection of computer vision, cinema tech, and visual direction',
            durationYears: '4 Years',
            description: 'Master virtual cinematography, real-time LED wall volume shooting, sound engineering, and CGI integration.',
            mandatoryEligibility: ['Admission via UCEED / JEE / University Test'],
            examGateways: ['UCEED', 'FTII_JET', 'JEE_MAIN'],
            recommendedInstitutions: ['IIT Bombay IDC', 'SRM School of Media', 'MIT Institute of Design'],
            skillsToAcquire: ['Virtual Production Pipeline', 'Motion Capture Direction', 'Colour Science (ACES)'],
            estimatedCostRange: '₹3L - ₹12L',
            keyActionTip: 'Direct complex VFX-heavy sci-fi short films during college tech festivals.'
          },
          {
            id: 'mpc_m4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Tech-Forward Film & VFX Director',
            subtitle: 'Directing big-scale fantasy, sci-fi, and action cinema',
            description: 'Direct high-concept films that utilize seamless CGI and virtual production environments with high commercial returns.',
            mandatoryEligibility: ['Industry reel of groundbreaking visual direction'],
            examGateways: [],
            recommendedInstitutions: ['Global VFX & Film Studios (DNEG, Red Chillies VFX, Prime Focus)'],
            skillsToAcquire: ['Supervising 500+ VFX Artists', 'Budget Optimization for Tech Shoots', 'Immersive Storytelling'],
            estimatedCostRange: 'Zero (High Revenue Phase)',
            keyActionTip: 'Pitch high-concept sci-fi and historical epics where technical precision cuts production costs in half.'
          }
        ]
      },
      POLYTECHNIC: {
        streamType: 'POLYTECHNIC',
        streamName: '3-Year Polytechnic Diploma in Cinematography & Sound',
        streamShortDesc: 'Direct Hands-on Technical Mastery via POLYCET',
        badgeLabel: 'Fast Hands-on Technical Entry',
        themeColor: STREAM_THEMES.POLYTECHNIC,
        approachPhilosophy: 'Direct technical mastery of lighting setups, digital cinema camera rigs (ARRI/RED), multi-track sound consoles, and film lab editing right after 10th.',
        metrics: { timeToFirstJobYears: 3, financialInvestment: 'LOW', competitionLevel: 'MODERATE', flexibilityScore: 8, practicalToTheoryRatio: 9 },
        pros: ['Immediate hands-on industry readiness in 3 years with zero theoretical fluff', 'Government polytechnics offer virtually free tuition (< ₹15,000/yr)', 'Direct lateral entry gateway into 2nd year B.Tech / B.Sc Visual Communication via ECET'],
        cons: ['Initial industry entry starts as camera technician, focus puller, or boom operator before directorial breaks'],
        entryJobRoles: ['Camera Operator / 1st AC', 'Sound Recordist', 'Associate Cinematographer', 'Assistant Director'],
        fiveYearTrajectory: 'Director of Photography (DOP) transitioning into Full Feature Film Director (₹20L - ₹80L+).',
        salarySpectrumLpa: { entryMin: 3.6, entryMax: 7.5, experiencedPeak: 60 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'poly_m1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th SSC & POLYCET Entrance',
            subtitle: 'Clear POLYCET for Government Polytechnic seats',
            description: 'Crack State POLYCET to secure merit admission in specialized technical diploma streams.',
            mandatoryEligibility: ['Pass 10th with minimum 35% in Maths & Science'],
            examGateways: ['POLYCET_DIPLOMA'],
            recommendedInstitutions: ['State Government Polytechnic Colleges'],
            skillsToAcquire: ['Basic Electronics & Optics', '10th Standard Mathematics'],
            estimatedCostRange: '₹500 (Exam fee)',
            keyActionTip: 'Focus on securing a top 5,000 rank in POLYCET to get government cinematography or electronics diploma seats.'
          },
          {
            id: 'poly_m2', phase: 'PHASE_1_STREAM', phaseLabel: '3-Year Diploma',
            title: '3-Year Diploma in Cinematography / Sound Recording / Digital Film',
            subtitle: 'Intensive workshop training on cinema cameras, cranes, lighting & DAWs',
            durationYears: '3 Years',
            description: 'Spend 6 semesters handling ARRI Alexa, RED, Steadicams, tungsten/HMI lighting, ProTools consoles, and live film sets.',
            mandatoryEligibility: ['Seat allotment through POLYCET State Counseling'],
            examGateways: [],
            recommendedInstitutions: ['Govt Polytechnic for Printing & Film Tech', 'SJT Polytechnic Bangalore'],
            skillsToAcquire: ['3-Point & High-Key Cinematography Lighting', 'Focus Pulling & Lens Calibration', 'Audio Equalization'],
            estimatedCostRange: '₹12,000 - ₹35,000 for entire 3-year diploma',
            keyActionTip: 'Shoot short film projects for university drama clubs on weekends to build a showreel.'
          },
          {
            id: 'poly_m3', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Independent Cinematographer & Feature Director',
            subtitle: 'Directing films with mastery over visual storytelling and framing',
            description: 'Use your deep technical mastery to direct visually stunning features with lightning-fast turnaround times.',
            mandatoryEligibility: ['Robust showreel of commercial ads and festival shorts'],
            examGateways: [],
            recommendedInstitutions: ['Film Production Studios & Independent Guilds'],
            skillsToAcquire: ['Visual Script Breakdown', 'Actor Communication & Blocking', 'Budget Maximization'],
            estimatedCostRange: 'Zero (Earning Phase)',
            keyActionTip: 'Directors who can operate and light their own cameras are favored by modern OTT platforms for indie budgets.'
          }
        ]
      },
      BiPC: {
        streamType: 'BiPC',
        streamName: 'Biology & Natural Sciences Route',
        streamShortDesc: 'Wildlife Documentary, Scientific Cinema & Medical Visuals',
        badgeLabel: 'Wildlife, Eco & Medical Documentarian',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Merge deep zoological, botanical, and anatomical knowledge with cinematography to become a premier National Geographic/BBC wildlife documentarian or medical filmmaker.',
        metrics: { timeToFirstJobYears: 5, financialInvestment: 'MODERATE', competitionLevel: 'MODERATE', flexibilityScore: 8, practicalToTheoryRatio: 8 },
        pros: ['Dominant niche in multi-million dollar global wildlife, environmental, and medical documentary sectors', 'High international grant funding from National Geographic, Discovery, and conservation foundations'],
        cons: ['Requires extreme physical patience, wilderness survival skills, and remote field deployments'],
        entryJobRoles: ['Wildlife Cameraman', 'Scientific Documentary Director', 'Conservation Visualist', 'Medical Animator'],
        fiveYearTrajectory: 'National Geographic / Netflix Natural History Series Director ($80,000 - $250,000+ USD).',
        salarySpectrumLpa: { entryMin: 5, entryMax: 12, experiencedPeak: 75 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'bipc_m1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Biology & Nature Passion',
            subtitle: 'Nature club activities and outdoor photography',
            description: 'Complete 10th board with high enthusiasm for wildlife, ecosystems, and visual documentation.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Bird Identification & Habitat Mapping', 'Telephoto Wildlife Photography'],
            estimatedCostRange: 'Standard Schooling',
            keyActionTip: 'Start documenting local biodiversity on citizen science platforms like iNaturalist and eBird.'
          },
          {
            id: 'bipc_m2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 BiPC',
            title: '10+2 Intermediate BiPC (Biology, Physics, Chemistry)',
            subtitle: 'Animal physiology, environmental ecology, and optics',
            durationYears: '2 Years',
            description: 'Deep dive into biology, animal behavior, and physical optics of lenses and underwater refraction.',
            mandatoryEligibility: ['10+2 PCB pass with min 55%'],
            examGateways: ['CUET_UG'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Animal Ethology (Behavior)', 'Macro Photography', 'Scuba Diving & Field Expedition Basics'],
            estimatedCostRange: '₹30,000 - ₹1L',
            keyActionTip: 'Earn basic PADI Open Water Scuba Diver certification during summer vacations.'
          },
          {
            id: 'bipc_m3', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Natural History Series Director & Conservation Producer',
            subtitle: 'Directing landmark series for BBC Earth, Nat Geo, and Netflix',
            description: 'Lead months-long remote jungle and arctic expeditions to capture never-before-seen animal behavior.',
            mandatoryEligibility: ['Pioneering wildlife portfolio and proven remote expedition resilience'],
            examGateways: [],
            recommendedInstitutions: ['BBC Natural History Unit', 'Silverback Films', 'Off the Fence'],
            skillsToAcquire: ['Expedition Risk Management', 'Ethical Wildlife Filming Protocols'],
            estimatedCostRange: 'Zero (Funded Production)',
            keyActionTip: 'Pitch natural history stories with human-wildlife coexistence angles.'
          }
        ]
      },
      MEC_CEC: {
        streamType: 'MEC_CEC',
        streamName: 'Commerce, Economics & Media Management Route',
        streamShortDesc: 'Creative Studio Head, Line Producer & Executive Producer-Director',
        badgeLabel: 'Studio Leadership & Creative Producing',
        themeColor: STREAM_THEMES.MEC_CEC,
        approachPhilosophy: 'Master film business, entertainment IP law, distribution economics, and OTT algorithms to build sustainable film studios and direct commercially resilient cinematic universes.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 7 },
        pros: ['High commercial acumen ensures projects get financed, packaged, and distributed globally', 'Fast path to becoming an independent Studio Founder / Creative Producer-Director'],
        cons: ['Requires deliberate dedication to artistic and aesthetic visual craft outside business classes'],
        entryJobRoles: ['Line Producer', 'Executive Producer Associate', 'Creative Development Executive', 'Director-Producer'],
        fiveYearTrajectory: 'Studio Head / Independent Producer-Director (₹30L - ₹1.5Cr+).',
        salarySpectrumLpa: { entryMin: 5.5, entryMax: 11, experiencedPeak: 95 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'mec_m1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Completion with Commercial Aptitude',
            subtitle: 'Understanding media business and creative writing',
            description: 'Pass 10th standard board exams with interest in commerce, economics, and entertainment industries.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Schools'],
            skillsToAcquire: ['Financial Budgeting', 'Creative Story Analysis'],
            estimatedCostRange: 'Nominal Fees',
            keyActionTip: 'Read trade magazines like Variety and Box Office India to understand box office models.'
          },
          {
            id: 'mec_m2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 MEC / CEC',
            title: '10+2 MEC (Mathematics, Economics, Commerce)',
            subtitle: 'Study economics of markets, statistics, and business organization',
            durationYears: '2 Years',
            description: 'Build sharp mathematical modeling and economic analysis skills while organizing school film events.',
            mandatoryEligibility: ['10+2 MEC/Commerce pass with min 60%'],
            examGateways: ['IPMAT_INDORE', 'CUET_UG'],
            recommendedInstitutions: ['Top Junior Colleges'],
            skillsToAcquire: ['Film P&L Modeling', 'Audience Demographic Analytics', 'Script Pitch Packaging'],
            estimatedCostRange: '₹30,000 - ₹90,000',
            keyActionTip: 'Prepare for IPMAT / CUET for top management and media universities.'
          },
          {
            id: 'mec_m3', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Creative Producer-Director & Studio Founder',
            subtitle: 'Financing, developing, and directing original content IPs',
            description: 'Control the entire lifecycle of a film—from buying book rights and developing screenplays to directing and monetizing global OTT rights.',
            mandatoryEligibility: ['Track record of delivering projects on time and under budget'],
            examGateways: [],
            recommendedInstitutions: ['Independent Production Banners & Streaming Platforms'],
            skillsToAcquire: ['Co-Production Treaty Structuring', 'Cross-Platform Franchise Management'],
            estimatedCostRange: 'Zero (Profit Sharing Phase)',
            keyActionTip: 'Combine lean budget production techniques with viral digital marketing to achieve maximum ROI.'
          }
        ]
      },
      VOCATIONAL_GUILD: {
        streamType: 'VOCATIONAL_GUILD',
        streamName: 'Direct Industry Guild & Apprenticeship Route',
        streamShortDesc: 'On-Set Assistantship, Independent Web Creator & Festival Guilds',
        badgeLabel: 'Independent Creator & Direct Apprenticeship',
        themeColor: STREAM_THEMES.VOCATIONAL_GUILD,
        approachPhilosophy: 'Bypass conventional university classrooms by building a massive YouTube/Vimeo/Reels creative portfolio, assisting established directors on active sets, and learning in real-world production trenches.',
        metrics: { timeToFirstJobYears: 2, financialInvestment: 'LOW', competitionLevel: 'HIGH', flexibilityScore: 7, practicalToTheoryRatio: 10 },
        pros: ['Fastest entry to active sets—zero waiting for academic degrees', 'Builds direct, irreplaceable industry relationships with stars, producers, and crew'],
        cons: ['Requires relentless personal discipline, self-funding, and resilience to early rejection'],
        entryJobRoles: ['2nd/3rd Assistant Director (AD)', 'YouTube Creator / Viral Director', 'Freelance Editor-Director'],
        fiveYearTrajectory: 'Mainstream Feature Director / Digital Media Production House Owner (₹20L - ₹1Cr+).',
        salarySpectrumLpa: { entryMin: 3, entryMax: 8, experiencedPeak: 85 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'voc_m1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & Digital Content Inception',
            subtitle: 'Start creating weekly sketches and visual reels',
            description: 'Begin hands-on content creation using smartphones and free editing software.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Independent Self-Learning Platforms'],
            skillsToAcquire: ['Mobile Cinematography', 'Viral Hook Storytelling', 'CapCut / DaVinci Resolve Editing'],
            estimatedCostRange: 'Minimal (Smartphone & Internet)',
            keyActionTip: 'Post 1 original cinematic micro-short every week on YouTube Shorts and Instagram.'
          },
          {
            id: 'voc_m2', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Full-Fledged Independent Feature Director',
            subtitle: 'Directing OTT original series and theatrical releases',
            description: 'Transition from viral acclaim to helming major studio productions with established stars.',
            mandatoryEligibility: ['Proven box-office or digital streaming track record'],
            examGateways: [],
            recommendedInstitutions: ['Leading OTT Platforms & Theatrical Distributors'],
            skillsToAcquire: ['High-Pressure Star Management', 'Complex Multi-Unit Direction'],
            estimatedCostRange: 'Zero (Profitable Directing Fees)',
            keyActionTip: 'Cultivate a distinctive visual signature that makes your films instantly recognizable.'
          }
        ]
      }
    }
  },

  // 2. FILM & THEATRE ACTOR
  professional_actor: {
    id: 'professional_actor',
    title: 'Film, Television & Theatre Actor',
    slug: 'actor',
    domainId: 'film_theatre_arts',
    domainName: 'Film, Theatre & Performing Arts',
    shortDescription: 'Embody diverse characters, master voice, emotional expression, movement, and psychological realism for stage, streaming, and cinema.',
    holisticInsight: 'Acting can be pursued through classical dramatic literature (HEC -> NSD), technical voice & physical movement (BiPC -> Movement Therapy / Physical Theatre), commercial screen acting (MEC -> Media Arts), or direct repertory theatre workshops and casting auditions.',
    iconName: 'Smile',
    tags: ['Acting', 'NSD', 'Drama', 'Cinema', 'Voice Acting', 'Theatre Guilds'],
    marketDemand: 'HIGH',
    streams: {
      HEC: {
        streamType: 'HEC',
        streamName: 'Humanities & Classical Dramatic Arts (NSD Route)',
        streamShortDesc: 'Literature, Psychology, Stage Craft & National School of Drama',
        badgeLabel: 'Classical Theatre & Method Acting',
        themeColor: STREAM_THEMES.HEC,
        approachPhilosophy: 'Deep immersion in dramatic literature, Navarasa, Stanislavski method, voice modulation, and stage discipline through premier institutions like NSD and FTII.',
        metrics: { timeToFirstJobYears: 5, financialInvestment: 'LOW', competitionLevel: 'EXTREME', flexibilityScore: 9, practicalToTheoryRatio: 9 },
        pros: ['Premier training at National School of Drama (NSD) with full central government monthly fellowship', 'Unrivaled voice projection, script comprehension, and psychological character depth', 'Direct casting recognition by top cinema casting directors'],
        cons: ['NSD accepts only ~26 actors nationwide per year with rigorous 6-play prior experience requirement'],
        entryJobRoles: ['Repertory Stage Actor', 'Cinema Supporting Actor', 'Voice-Over Artist', 'Acting Coach'],
        fiveYearTrajectory: 'Leading Film/Web-Series Actor or Acclaimed Character Protagonist (₹15L - ₹1Cr+).',
        salarySpectrumLpa: { entryMin: 4, entryMax: 10, experiencedPeak: 90 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'act_m1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & Early Stage Theatre Participation',
            subtitle: 'Join local amateur theatre repertories and speech competitions',
            description: 'Complete 10th standard while performing in school plays, street plays (Nukkad Natak), and elocution contests.',
            mandatoryEligibility: ['Pass 10th Board with passion for expressive arts'],
            examGateways: [],
            recommendedInstitutions: ['Local Theatre Troupes & Drama Societies'],
            skillsToAcquire: ['Clear Hindi/English/Regional Diction', 'Memorization of Monologues', 'Basic Body Flexibility & Yoga'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Participate in at least 2 community theatre productions to start building your mandatory actor record.'
          },
          {
            id: 'act_m2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 HEC',
            title: '10+2 Intermediate HEC (History, Literature & Sociology)',
            subtitle: 'Study human behavior, dramatic texts (Shakespeare, Kalidasa, Brecht)',
            durationYears: '2 Years',
            description: 'Study literature and human societies to gain deep emotional vocabulary and intellectual character understanding.',
            mandatoryEligibility: ['10+2 pass in Arts/Humanities with min 50%'],
            examGateways: ['CUET_UG'],
            recommendedInstitutions: ['Arts Colleges with active Drama Clubs (DU, St. Xavier’s)'],
            skillsToAcquire: ['Navarasa Emotional Mapping', 'Physical Theatre & Mime', 'Micro-Expression Control for Camera'],
            estimatedCostRange: '₹20,000 - ₹60,000',
            keyActionTip: 'Actively perform in at least 4 more full-length stage productions during your college years.'
          },
          {
            id: 'act_m3', phase: 'PHASE_2_EXAMS', phaseLabel: 'Audition Gateways',
            title: 'National School of Drama (NSD) Auditions / FTII Screen Acting',
            subtitle: 'Clear Preliminary Auditions and 5-Day Intensive Selection Workshop',
            description: 'Undergo rigorous monologues, voice tests, movement improvisation, and psychometric theatre panel interviews.',
            mandatoryEligibility: ['Bachelor’s degree and verifiable proof of acting in 6 stage plays with recommendations'],
            examGateways: ['NSD_AUDITION', 'FTII_JET'],
            recommendedInstitutions: ['National School of Drama, New Delhi', 'FTII Screen Acting Wing'],
            skillsToAcquire: ['Dialect & Accents Mastery', 'Camera Continuity Acting', 'Fight & Stunt Movement Basics'],
            estimatedCostRange: '₹5,000 (Audition logistics)',
            keyActionTip: 'Work with a senior theatre guru on two contrasting monologues (one classical, one contemporary realism).'
          },
          {
            id: 'act_m4', phase: 'PHASE_3_DEGREE', phaseLabel: '3-Year Dramatic Arts Diploma',
            title: '3-Year Intensive Diploma in Dramatic Arts (NSD / FTII Acting)',
            subtitle: 'Full scholarship training in voice, martial arts (Kalaripayattu), method acting, and stage productions',
            durationYears: '3 Years',
            description: 'Perform in 15+ major repertory stage plays directed by world-renowned theatre masters.',
            mandatoryEligibility: ['Final selection in NSD/FTII Batch'],
            examGateways: [],
            recommendedInstitutions: ['National School of Drama New Delhi', 'FTII Pune'],
            skillsToAcquire: ['Subtext Delivery', 'Kalaripayattu & Chhau Movement', 'Voice Resonance & Pitch Control'],
            estimatedCostRange: 'Fully Funded by Govt (Includes Monthly Stipend & Hostel)',
            keyActionTip: 'Make every graduation showcase performance your calling card for visiting casting directors.'
          },
          {
            id: 'act_m5', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Professional Cinema & OTT Actor',
            subtitle: 'Auditioning for premier casting agencies and headlining major series',
            description: 'Sign with top casting directors for feature films, web series, international co-productions, and voice-acting projects.',
            mandatoryEligibility: ['High-impact audition tapes and versatile character showreel'],
            examGateways: [],
            recommendedInstitutions: ['Casting Bay, Mukesh Chhabra Casting, Anti-Casting'],
            skillsToAcquire: ['Self-Tape Audition Lighting & Sound', 'Contract & Royalty Negotiation', 'Public Image & Media Training'],
            estimatedCostRange: 'Zero (Earning Phase)',
            keyActionTip: 'Invest in a broadcast-quality home self-tape studio to turn around audition scripts within 24 hours.'
          }
        ]
      },
      MPC: {
        streamType: 'MPC',
        streamName: 'Tech, Mo-Cap & Performance Capture Route',
        streamShortDesc: 'Motion Capture, Virtual Production & Screen Performance',
        badgeLabel: 'Mo-Cap & Action Performance',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Combine physical acting with digital motion capture (Mo-Cap) suit acting for AAA video games, 3D animated epics, and CGI virtual production.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 8 },
        pros: ['High international demand for specialized Motion Capture (Mo-Cap) & Voice Over actors in gaming & VFX', 'Technical mastery of virtual cameras and digital body calibration gives an edge on modern sets'],
        cons: ['Requires self-initiated stage acting workshops alongside science curriculum'],
        entryJobRoles: ['Motion Capture Performer', 'Voice Acting Specialist', 'Screen Actor', 'Stunt Pre-vis Actor'],
        fiveYearTrajectory: 'Lead Mo-Cap Performer & Mainstream Screen Actor (₹18L - ₹80L+).',
        salarySpectrumLpa: { entryMin: 4.5, entryMax: 9.5, experiencedPeak: 70 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'act_mpc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Physical Agility',
            subtitle: 'Sports, gymnastics, martial arts & voice training',
            description: 'Pass 10th standard while cultivating physical dexterity, athletics, and martial arts disciplines.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Schools'],
            skillsToAcquire: ['Gymnastics / Martial Arts', 'Voice Mimicry & Character Voices'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Train in Taekwondo or Kalaripayattu for body spatial awareness.'
          },
          {
            id: 'act_mpc_2', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Leading Performance Capture & Cinema Actor',
            subtitle: 'Starring in CGI-driven franchise blockbusters and video game titles',
            description: 'Bring complex digital and live-action characters to life with emotional authenticity and technical motion capture mastery.',
            mandatoryEligibility: ['Extensive Mo-Cap and live-action casting portfolio'],
            examGateways: [],
            recommendedInstitutions: ['Gaming Studios (Ubisoft, EA, Krafton)', 'Major Film Studios'],
            skillsToAcquire: ['Celebrity Brand Endorsements', 'Voice Licensing & AI Synthetic Voice Protections'],
            estimatedCostRange: 'Zero (High Revenue Phase)',
            keyActionTip: 'Protect your digital likeness and voice rights when signing game and film contracts.'
          }
        ]
      },
      BiPC: {
        streamType: 'BiPC',
        streamName: 'Physicality, Body Kinetics & Expressive Arts Route',
        streamShortDesc: 'Anatomy, Expressive Dance, Physical Theatre & Art Therapy',
        badgeLabel: 'Physical Theatre & Kinetic Arts',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Harness anatomical knowledge of musculoskeletal movement, breath control, and expressive therapy to create astonishingly physical character transformations.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'LOW', competitionLevel: 'MODERATE', flexibilityScore: 8, practicalToTheoryRatio: 9 },
        pros: ['Exceptional physical stamina, breath control, and bodily flexibility for demanding stage/screen stunts', 'Unique dual career in Drama Therapy & Expressive Arts Consulting'],
        cons: ['Must build scriptwriting and screen audition networks independently'],
        entryJobRoles: ['Physical Theatre Actor', 'Expressive Arts Facilitator', 'Screen Actor', 'Movement Director'],
        fiveYearTrajectory: 'Renowned Screen Actor & Movement Director (₹12L - ₹65L+).',
        salarySpectrumLpa: { entryMin: 3.8, entryMax: 8, experiencedPeak: 60 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'act_bipc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Classical Dance / Yoga Training',
            subtitle: 'Train in classical Indian dance (Bharatanatyam / Kathakali / Chhau)',
            description: 'Pass 10th standard while building foundational mastery over mudras, facial expressions (Bhavas), and rhythm (Tala).',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Classical Dance Academies (Kalakshetra, Kathak Kendra)'],
            skillsToAcquire: ['Facial Muscle Isolation', 'Rhythmic Footwork', 'Breath & Prana Control'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Kathakali and Chhau provide intense physical training for cinematic expression.'
          },
          {
            id: 'act_bipc_2', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Critically Acclaimed Feature & Stage Actor',
            subtitle: 'Performing transformative, physically intense protagonist roles',
            description: 'Win critical acclaim and festival awards for deeply transformative roles requiring intense physical and psychological metamorphosis.',
            mandatoryEligibility: ['Showcase reel of award-winning performances'],
            examGateways: [],
            recommendedInstitutions: ['National and International Feature Productions'],
            skillsToAcquire: ['Method Transformation Health Protocols', 'International Film Festival Networking'],
            estimatedCostRange: 'Zero (Earning Phase)',
            keyActionTip: 'Maintain peak vocal and physical conditioning throughout your acting journey.'
          }
        ]
      },
      MEC_CEC: {
        streamType: 'MEC_CEC',
        streamName: 'Commerce, Commercial Talent & Influencer Route',
        streamShortDesc: 'Brand Packaging, Television Commercials & Digital Media Lead',
        badgeLabel: 'Commercial Star & Brand Ambassador',
        themeColor: STREAM_THEMES.MEC_CEC,
        approachPhilosophy: 'Understand brand value, personal IP monetization, audience engagement metrics, and commercial ad auditions to become a top-earning screen actor and brand ambassador.',
        metrics: { timeToFirstJobYears: 3, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 9, practicalToTheoryRatio: 8 },
        pros: ['Fast path to high-earning TV Commercials (TVCs), brand campaigns, and digital brand ambassadorships', 'Sharp financial awareness helps manage contracts, royalties, and agency negotiations'],
        cons: ['High competition in commercial modeling and ad casting calls'],
        entryJobRoles: ['TV Commercial (TVC) Actor', 'Digital Series Actor', 'Brand Influencer', 'Voice Artist'],
        fiveYearTrajectory: 'Lead Commercial Screen Actor & Brand Endorser (₹25L - ₹1.2Cr+).',
        salarySpectrumLpa: { entryMin: 5, entryMax: 12, experiencedPeak: 95 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'act_mec_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Public Speaking & Modeling',
            subtitle: 'Cultivate charisma, public presence, and camera confidence',
            description: 'Pass 10th standard while participating in debate competitions, anchoring, and student lifestyle photo shoots.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Schools'],
            skillsToAcquire: ['Camera Presence & Poise', 'Spoken English & Hindi Fluency'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Build a clean, high-fashion Instagram portfolio focusing on natural, well-lit portraits.'
          },
          {
            id: 'act_mec_2', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'A-List Commercial Actor & Lifestyle Brand Ambassador',
            subtitle: 'Headlining multi-crore ad campaigns and mainstream cinema',
            description: 'Command high day-rates for film shoots while earning perpetual royalties from major global brand endorsements.',
            mandatoryEligibility: ['High social affinity and consistent streaming pull'],
            examGateways: [],
            recommendedInstitutions: ['Talent Management Agencies (KWAN, Matrix, YRF Talent)'],
            skillsToAcquire: ['Personal Brand Equity Protection', 'Equity-for-Endorsement Deal Structuring'],
            estimatedCostRange: 'Zero (High Net Worth Phase)',
            keyActionTip: 'Negotiate equity stakes in emerging startup brands instead of one-time modeling fees.'
          }
        ]
      },
      POLYTECHNIC: {
        streamType: 'POLYTECHNIC',
        streamName: 'Technical Stage & Audio-Visual Diploma Route',
        streamShortDesc: 'Direct Technical Theatre, Stage Lighting & Practical Performance',
        badgeLabel: 'Stage Craft & Practical Theatre',
        themeColor: STREAM_THEMES.POLYTECHNIC,
        approachPhilosophy: 'Master stage craft, theatre lighting consoles, sound staging, and practical performance right after 10th through technical polytechnic diplomas.',
        metrics: { timeToFirstJobYears: 3, financialInvestment: 'LOW', competitionLevel: 'LOW', flexibilityScore: 7, practicalToTheoryRatio: 9 },
        pros: ['Immediate entry into professional theatre repertories and event management companies', 'Affordable government fees with high hands-on technical skills'],
        cons: ['Must actively seek out screen acting auditions on personal initiative'],
        entryJobRoles: ['Stage Production Assistant', 'Voice Actor', 'Theatre Actor', 'Dubbing Artist'],
        fiveYearTrajectory: 'Leading Stage & Character Screen Actor (₹10L - ₹45L+).',
        salarySpectrumLpa: { entryMin: 3, entryMax: 6.5, experiencedPeak: 45 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'act_poly_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th SSC & POLYCET Entrance',
            subtitle: 'Secure diploma seat in sound, lighting or media technology',
            description: 'Pass 10th board and appear for State POLYCET.',
            mandatoryEligibility: ['10th Pass with min 35%'],
            examGateways: ['POLYCET_DIPLOMA'],
            recommendedInstitutions: ['State Polytechnic Institutes'],
            skillsToAcquire: ['Basic Acoustics', 'Stage Geometry'],
            estimatedCostRange: '₹500',
            keyActionTip: 'Target polytechnic campuses located near major theatre and film hubs.'
          },
          {
            id: 'act_poly_2', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Professional Dubbing Artist & Screen Actor',
            subtitle: 'Dubbing major pan-Indian films and acting in feature cinema',
            description: 'Work as voice artist for pan-Indian film dubbing while securing prominent character roles in cinema.',
            mandatoryEligibility: ['Flawless diction in regional and national languages'],
            examGateways: [],
            recommendedInstitutions: ['Major Dubbing Studios & Film Houses'],
            skillsToAcquire: ['Lip-Sync Micro Timing', 'Emotional Pitch Matching'],
            estimatedCostRange: 'Zero (Earning Phase)',
            keyActionTip: 'Voice-over artists who can act on screen enjoy 365-day annual income stability.'
          }
        ]
      },
      VOCATIONAL_GUILD: {
        streamType: 'VOCATIONAL_GUILD',
        streamName: 'Direct Casting, Repertory & Social Media Route',
        streamShortDesc: 'Repertory Theatre, Digital Skits, Viral Shorts & Open Casting Calls',
        badgeLabel: 'Direct Audition & Viral Creator',
        themeColor: STREAM_THEMES.VOCATIONAL_GUILD,
        approachPhilosophy: 'Direct immersion through self-published comedy/drama digital reels, local repertory theatre workshops, and relentless casting auditions.',
        metrics: { timeToFirstJobYears: 1, financialInvestment: 'LOW', competitionLevel: 'EXTREME', flexibilityScore: 8, practicalToTheoryRatio: 10 },
        pros: ['Immediate audience validation through digital sketches and micro-acting', 'Zero academic prerequisites—talent and charisma dictate success'],
        cons: ['Irregular early income requiring side survival jobs'],
        entryJobRoles: ['Digital Skit Actor', 'Short Film Lead', 'Crowd/Featured Extra', 'Voice Artist'],
        fiveYearTrajectory: 'Mainstream OTT Star & Standup/Digital Headliner (₹15L - ₹80L+).',
        salarySpectrumLpa: { entryMin: 2.5, entryMax: 7, experiencedPeak: 75 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'act_voc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & Daily Monologue Practice',
            subtitle: 'Record and critique 1 monologue every single day',
            description: 'Pass 10th standard and commit to intense daily vocal and facial exercise routines.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Self-Taught & Online Masterclasses'],
            skillsToAcquire: ['Self-Tape Recording', 'Emotional Recall', 'Comic Timing'],
            estimatedCostRange: 'Minimal',
            keyActionTip: 'Study master actors (Naseeruddin Shah, Irrfan Khan, Manoj Bajpayee) frame by frame.'
          },
          {
            id: 'act_voc_2', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Lead OTT & Feature Film Actor',
            subtitle: 'Breakthrough casting in critically acclaimed series',
            description: 'Secure breakthrough lead or impactful supporting roles in top streaming series and feature films.',
            mandatoryEligibility: ['Magnetic screen presence verified by casting auditions'],
            examGateways: [],
            recommendedInstitutions: ['Top Streaming Platforms & Film Banners'],
            skillsToAcquire: ['Scene Chemistry with Co-Stars', 'Handling Intense Shoot Schedules'],
            estimatedCostRange: 'Zero (Earning Phase)',
            keyActionTip: 'Maintain absolute humility and professionalism on set.'
          }
        ]
      }
    }
  },

  // 3. AI RESEARCH & ML ENGINEER
  ai_engineer: {
    id: 'ai_engineer',
    title: 'Artificial Intelligence & ML Research Engineer',
    slug: 'ai-engineer',
    domainId: 'stem_computing_robotics',
    domainName: 'STEM, Computing & Robotics',
    shortDescription: 'Design generative models, autonomous agents, neural architectures, and intelligent systems reshaping global computing.',
    holisticInsight: 'AI is reached primarily via MPC (core computer science/maths), Polytechnic Diploma (via POLYCET -> ECET lateral engineering), MEC (FinTech/Quantitative Trading AI), or BiPC (Computational Biology & Neural Bioinformatics).',
    iconName: 'Cpu',
    tags: ['AI', 'Machine Learning', 'Deep Learning', 'Python', 'IIT', 'Data Science'],
    marketDemand: 'EXPLOSIVE',
    streams: {
      MPC: {
        streamType: 'MPC',
        streamName: 'Mathematical & Computer Science Route',
        streamShortDesc: 'Linear Algebra, Calculus, Algorithms & Premier IIT/NIT B.Tech',
        badgeLabel: 'Premier CS & Deep Tech Pathway',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'The gold-standard pathway: rigorous mathematical physics in 10+2, cracking JEE Main/Advanced for IIT/NIT B.Tech in CSE/AI, leading to top global AI labs.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'EXTREME', flexibilityScore: 10, practicalToTheoryRatio: 7 },
        pros: ['Direct access to top AI campus placements (Google DeepMind, Microsoft, OpenAI, Nvidia) with ₹30L - ₹1.2Cr+ starting packages', 'Rigorous foundation in multi-variable calculus, probability, and linear algebra', 'Maximum global flexibility for Master’s/Ph.D. at Stanford, MIT, CMU'],
        cons: ['JEE Advanced is one of the world’s most competitive engineering exams'],
        entryJobRoles: ['AI/ML Engineer', 'Research Scientist', 'LLM Alignment Engineer', 'Computer Vision Specialist'],
        fiveYearTrajectory: 'Senior AI Research Scientist / Founding AI Engineer at Tier-1 Tech (₹45L - ₹2.5Cr+).',
        salarySpectrumLpa: { entryMin: 18, entryMax: 45, experiencedPeak: 220 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'ai_mpc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & Competitive Maths Olympiads',
            subtitle: 'Master algebra, combinatorics, and introductory Python coding',
            description: 'Pass 10th standard with > 90% in Mathematics and Science, participating in RMO / IOQM math competitions.',
            mandatoryEligibility: ['10th Pass with high mathematics score'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Python 3 Basics', 'Boolean Logic & Proofs', 'Combinatorics'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Solve Project Euler programming problems to merge mathematical proofs with code.'
          },
          {
            id: 'ai_mpc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 MPC',
            title: '10+2 Intermediate MPC with JEE Main & Advanced Prep',
            subtitle: 'Calculus, vectors, probability, and physics electromagnetism',
            durationYears: '2 Years',
            description: 'Intensive preparation in Class 11 & 12 PCM curriculum targeting top ranks in JEE.',
            mandatoryEligibility: ['10+2 PCM pass with min 75% aggregate'],
            examGateways: ['JEE_MAIN', 'JEE_ADVANCED', 'BITSAT'],
            recommendedInstitutions: ['Top Junior Colleges & Coaching Institutes'],
            skillsToAcquire: ['Differential Equations', 'Matrix Algebra', 'Statistical Probability Distributions'],
            estimatedCostRange: '₹1L - ₹3.5L',
            keyActionTip: 'Maintain deep conceptual clarity in vectors and matrices.'
          },
          {
            id: 'ai_mpc_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Undergraduate Degree',
            title: '4-Year B.Tech in Computer Science & Artificial Intelligence',
            subtitle: 'Data structures, neural networks, transformers, reinforcement learning & distributed systems',
            durationYears: '4 Years',
            description: 'Publish research papers at top conferences (NeurIPS, ICML, CVPR) and build open-source AI projects.',
            mandatoryEligibility: ['Admission via JoSAA / CSAB Counseling'],
            examGateways: ['JEE_ADVANCED', 'JEE_MAIN', 'BITSAT'],
            recommendedInstitutions: ['IITs, NITs, IIIT Hyderabad, BITS Pilani'],
            skillsToAcquire: ['PyTorch / JAX', 'CUDA GPU Acceleration', 'Transformer Architectures & Attention Mechanisms'],
            estimatedCostRange: '₹8L - ₹14L (Govt B.Tech tuition)',
            keyActionTip: 'Win global hackathons and contribute to PyTorch/HuggingFace libraries.'
          },
          {
            id: 'ai_mpc_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Tier-1 AI Research Engineer / Lab Scientist',
            subtitle: 'Deploying foundation models and autonomous systems globally',
            description: 'Build production-scale foundation models, autonomous agents, and next-generation neural architectures.',
            mandatoryEligibility: ['High-impact GitHub portfolio and published research/internships'],
            examGateways: [],
            recommendedInstitutions: ['Google DeepMind, Microsoft AI, Anthropic, Nvidia, OpenAI'],
            skillsToAcquire: ['Distributed Model Sharding (DeepSpeed)', 'RLHF & Alignment', 'AI Ethics & Safety'],
            estimatedCostRange: 'Zero (High Comp Package)',
            keyActionTip: 'Focus on AI agent architecture and distributed GPU inference optimization.'
          }
        ]
      },
      POLYTECHNIC: {
        streamType: 'POLYTECHNIC',
        streamName: '3-Year Diploma in Computer Engineering + ECET Lateral Route',
        streamShortDesc: 'Hands-on Software Development -> ECET -> B.Tech CSE 2nd Year',
        badgeLabel: 'Hands-on Coding & Lateral B.Tech Bridge',
        themeColor: STREAM_THEMES.POLYTECHNIC,
        approachPhilosophy: 'Direct software engineering, Linux systems, and Python/C++ programming right after 10th via POLYCET, followed by ECET to join 2nd-year B.Tech at top state engineering colleges.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'LOW', competitionLevel: 'HIGH', flexibilityScore: 9, practicalToTheoryRatio: 8 },
        pros: ['Immediate coding from Day 1 of diploma', 'ECET lateral entry reserves 10% supernumerary seats in top government engineering colleges directly into 2nd year (3rd semester)', 'Cost-effective with near-zero tuition at government polytechnics'],
        cons: ['Must self-study advanced higher mathematics for elite AI research roles'],
        entryJobRoles: ['Junior ML Engineer', 'Data Engineer', 'Python Backend Developer', 'AI Application Developer'],
        fiveYearTrajectory: 'Senior Machine Learning Engineer (₹22L - ₹75L+).',
        salarySpectrumLpa: { entryMin: 6.5, entryMax: 14, experiencedPeak: 95 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'ai_poly_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & POLYCET Entrance',
            subtitle: 'Clear POLYCET for Diploma in Computer Engineering (DCME)',
            description: 'Pass 10th with top rank in State POLYCET to secure Computer Engineering branch.',
            mandatoryEligibility: ['Pass 10th with min 35% in Maths & Science'],
            examGateways: ['POLYCET_DIPLOMA'],
            recommendedInstitutions: ['Govt Polytechnic Colleges'],
            skillsToAcquire: ['Basic C Programming', 'Logical Problem Solving'],
            estimatedCostRange: '₹500',
            keyActionTip: 'Target Top 1,000 rank in POLYCET.'
          },
          {
            id: 'ai_poly_2', phase: 'PHASE_1_STREAM', phaseLabel: '3-Year Diploma',
            title: '3-Year Diploma in Computer Engineering (DCME)',
            subtitle: 'Data structures, database systems, Python, Linux, and web development',
            durationYears: '3 Years',
            description: 'Master full-stack coding, Linux operating system kernels, and machine learning libraries.',
            mandatoryEligibility: ['Seat allotment via POLYCET'],
            examGateways: ['ECET_LATERAL'],
            recommendedInstitutions: ['State Board of Technical Education (SBTET)'],
            skillsToAcquire: ['C++ & Python OOP', 'Data Structures & Algorithms', 'FastAPI & PyTorch APIs'],
            estimatedCostRange: '₹15,000 - ₹35,000 for 3 years',
            keyActionTip: 'Build production AI web applications during diploma capstone projects.'
          },
          {
            id: 'ai_poly_3', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Senior Machine Learning & AI Systems Engineer',
            subtitle: 'Architecting scalable AI backends and neural pipeline infrastructure',
            description: 'Design robust enterprise AI pipelines serving millions of predictions per second.',
            mandatoryEligibility: ['Proven production AI deployment track record'],
            examGateways: [],
            recommendedInstitutions: ['Global Tech Firms, Unicorn Startups & AI Labs'],
            skillsToAcquire: ['Low-Latency LLM Serving (vLLM, TensorRT-LLM)', 'Distributed Training'],
            estimatedCostRange: 'Zero (High Salary Phase)',
            keyActionTip: 'Specialize in MLOps and efficient model quantization for edge deployment.'
          }
        ]
      },
      MEC_CEC: {
        streamType: 'MEC_CEC',
        streamName: 'Quantitative Finance & Algorithmic AI Route',
        streamShortDesc: 'Statistical Economics, FinTech, Algorithmic Trading & Predictive AI',
        badgeLabel: 'Quant Trading & Financial AI',
        themeColor: STREAM_THEMES.MEC_CEC,
        approachPhilosophy: 'Merge economic market dynamics, probability statistics, and financial modeling with AI algorithms for quantitative hedge funds and FinTech trading desks.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 9, practicalToTheoryRatio: 7 },
        pros: ['Direct eligibility for Quantitative Analyst and Algorithmic Trading roles', 'High demand for AI professionals who understand financial derivatives and macro trends'],
        cons: ['Requires self-initiated advanced programming in Python and C++'],
        entryJobRoles: ['Quantitative AI Analyst', 'FinTech ML Engineer', 'Risk Modeling Specialist'],
        fiveYearTrajectory: 'Head of Quantitative AI / Portfolio Trading Strategist (₹35L - ₹1.8Cr+).',
        salarySpectrumLpa: { entryMin: 12, entryMax: 28, experiencedPeak: 180 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'ai_mec_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Mathematics & Economics Passion',
            subtitle: 'Strong foundation in statistics and market logic',
            description: 'Pass 10th standard with high interest in numbers and digital technology.',
            mandatoryEligibility: ['Pass 10th Board with > 70% in Maths'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Schools'],
            skillsToAcquire: ['Probability & Statistics', 'Introductory Python'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Experiment with backtesting stock trading strategies in Python.'
          },
          {
            id: 'ai_mec_2', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Quantitative AI Researcher / FinTech Strategist',
            subtitle: 'Building automated trading algorithms and risk prediction engines',
            description: 'Design automated machine learning models that trade global equity, fx, and crypto markets.',
            mandatoryEligibility: ['Proven statistical modeling acumen'],
            examGateways: [],
            recommendedInstitutions: ['Quantitative Trading Desks (Jane Street, Tower Research, Graviton, WorldQuant)'],
            skillsToAcquire: ['Low-Latency Strategy Execution', 'Alternative Data NLP'],
            estimatedCostRange: 'Zero (High Bonus Structure)',
            keyActionTip: 'Participate in WorldQuant International Quant Championship challenges.'
          }
        ]
      },
      BiPC: {
        streamType: 'BiPC',
        streamName: 'Bioinformatics & Computational Genomics Route',
        streamShortDesc: 'Genomics, Molecular Dynamics, AlphaFold & Drug Discovery AI',
        badgeLabel: 'Genomic AI & Bio-Computing',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Apply deep learning to protein folding (AlphaFold), CRISPR gene editing, and computational neurobiology.',
        metrics: { timeToFirstJobYears: 5, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 8, practicalToTheoryRatio: 8 },
        pros: ['Frontier domain with explosive global funding in pharmaceutical AI', 'Direct eligibility from BiPC into B.Tech/B.Sc Bioinformatics'],
        cons: ['Requires strong post-10+2 commitment to learning computer science'],
        entryJobRoles: ['Computational Biologist', 'Bio-AI Research Scientist', 'Genomics Data Engineer'],
        fiveYearTrajectory: 'Lead Bio-AI Scientist / Biotech Startup Co-Founder (₹25L - ₹1.2Cr+).',
        salarySpectrumLpa: { entryMin: 8, entryMax: 18, experiencedPeak: 110 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'ai_bipc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Biology & Computing Passion',
            subtitle: 'Strong foundation in genetics and cell biology',
            description: 'Pass 10th standard with enthusiasm for life sciences and computing.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Genetics Fundamentals', 'Python Scripting'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Read about AlphaFold.'
          },
          {
            id: 'ai_bipc_2', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Lead AI Drug Discovery Scientist / Genomic Engineer',
            subtitle: 'Accelerating therapeutic cures through deep learning',
            description: 'Design novel small-molecule drugs and immunotherapies using generative AI.',
            mandatoryEligibility: ['Track record in computational biology research'],
            examGateways: [],
            recommendedInstitutions: ['Biotech Giants (Insilico Medicine, Deep Genomics, AstraZeneca)'],
            skillsToAcquire: ['Diffusion Models for Protein Design', 'Clinical Trial Prediction'],
            estimatedCostRange: 'Zero (High Research Package)',
            keyActionTip: 'Contribute to global synthetic biology competitions like iGEM.'
          }
        ]
      },
      HEC: {
        streamType: 'HEC',
        streamName: 'Cognitive Science, Computational Linguistics & AI Ethics Route',
        streamShortDesc: 'Natural Language Processing (NLP), Cognitive Philosophy & AI Policy',
        badgeLabel: 'AI Ethics, NLP & Cognitive Science',
        themeColor: STREAM_THEMES.HEC,
        approachPhilosophy: 'Approach AI through the lens of human cognitive psychology, philosophy of mind, linguistics, and governance policy.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'LOW', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 7 },
        pros: ['Explosive demand for AI Safety, Ethics Officers, and Computational Linguists', 'Unique cross-disciplinary perspective bridging human rights with autonomous algorithms'],
        cons: ['Must build coding proficiency in Python independently'],
        entryJobRoles: ['AI Ethics & Safety Officer', 'Computational Linguist', 'Prompt Architecture Lead'],
        fiveYearTrajectory: 'Director of AI Governance & Responsible AI Research (₹25L - ₹90L+).',
        salarySpectrumLpa: { entryMin: 8, entryMax: 16, experiencedPeak: 85 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'ai_hec_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Language & Philosophy Interest',
            subtitle: 'Strong linguistics and logical debate skills',
            description: 'Pass 10th standard with strong foundation in grammar and social sciences.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Formal Logic', 'Linguistic Syntax'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Read Alan Turing’s "Computing Machinery and Intelligence".'
          },
          {
            id: 'ai_hec_2', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Lead AI Safety & Cognitive Systems Architect',
            subtitle: 'Ensuring global frontier AI systems are aligned with human safety',
            description: 'Direct AI alignment, red-teaming evaluations, and multilingual localization.',
            mandatoryEligibility: ['Expertise in language modeling safety'],
            examGateways: [],
            recommendedInstitutions: ['Frontier AI Labs, UN AI Advisory, Policy Think Tanks'],
            skillsToAcquire: ['Red-Teaming Jailbreak Defense', 'Constitutional AI Alignment'],
            estimatedCostRange: 'Zero (High Comp Phase)',
            keyActionTip: 'Lead responsible AI governance committees.'
          }
        ]
      },
      VOCATIONAL_GUILD: {
        streamType: 'VOCATIONAL_GUILD',
        streamName: 'Self-Taught Open Source & AI Bounty Route',
        streamShortDesc: 'Kaggle Grandmaster, HuggingFace Contributor & AI Freelance Guilds',
        badgeLabel: 'Open-Source AI Hacker',
        themeColor: STREAM_THEMES.VOCATIONAL_GUILD,
        approachPhilosophy: 'Learn through digital masterclasses (fast.ai), open-source GitHub contributions, competing on Kaggle, and claiming AI bounties.',
        metrics: { timeToFirstJobYears: 2, financialInvestment: 'LOW', competitionLevel: 'HIGH', flexibilityScore: 8, practicalToTheoryRatio: 10 },
        pros: ['Direct hiring by remote international startups purely based on GitHub/HuggingFace code', 'Fast turnaround to high remote USD freelance consulting rates'],
        cons: ['Requires tremendous personal persistence without classroom oversight'],
        entryJobRoles: ['Remote AI Developer', 'Kaggle Competitor', 'Prompt & Fine-Tuning Engineer'],
        fiveYearTrajectory: 'Staff AI Engineer / Remote Founder at Global AI Startup (₹35L - ₹1.5Cr+).',
        salarySpectrumLpa: { entryMin: 8, entryMax: 20, experiencedPeak: 120 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'ai_voc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & Fast.ai Self-Learning',
            subtitle: 'Complete Practical Deep Learning for Coders',
            description: 'Pass 10th board while fine-tuning computer vision models in Google Colab.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Fast.ai, Coursera, DeepLearning.AI'],
            skillsToAcquire: ['PyTorch Basics', 'Fine-Tuning Pretrained Models'],
            estimatedCostRange: 'Zero',
            keyActionTip: 'Deploy your first model to Hugging Face Spaces.'
          },
          {
            id: 'ai_voc_2', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'High-Impact Remote AI Engineer & Consultant',
            subtitle: 'Contracting with high-growth US/European AI startups',
            description: 'Build custom fine-tuned models, agentic workflows, and RAG pipelines for global clients from home.',
            mandatoryEligibility: ['Verified public GitHub repository and Kaggle rank'],
            examGateways: [],
            recommendedInstitutions: ['Remote First AI Startups'],
            skillsToAcquire: ['LangChain / LlamaIndex Agentic Systems', 'API Scalability'],
            estimatedCostRange: 'Zero (High Dollar Inflow)',
            keyActionTip: 'Launch open-source projects on Twitter/X.'
          }
        ]
      }
    }
  }
};

// Unified Merged Catalog
export const CURATED_CAREER_PATHWAYS: Record<string, CareerRole> = {
  ...BASE_PATHWAYS,
  ...CREATIVE_ARTS_PATHWAYS,
  ...AVIATION_DEFENSE_PATHWAYS,
  ...LAW_CIVIL_PATHWAYS,
  ...CULINARY_HOSPITALITY_PATHWAYS
};
