import { CareerRole } from '../../types/pathway';

const STREAM_THEMES = {
  MPC: { primary: '#3b82f6', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-700', glow: 'shadow-blue-500/20' },
  HEC: { primary: '#a855f7', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-700', glow: 'shadow-purple-500/20' },
  VOCATIONAL_GUILD: { primary: '#f97316', border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-700', glow: 'shadow-orange-500/20' },
  POLYTECHNIC: { primary: '#06b6d4', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-700', glow: 'shadow-cyan-500/20' }
};

export const CREATIVE_DESIGN_PATHWAYS: Record<string, CareerRole> = {
  // 1. ARCHITECT & SPATIAL URBAN PLANNER
  architect_spatial_planner: {
    id: 'architect_spatial_planner',
    title: 'Architect & Spatial Urban Planner (B.Arch / NATA / SPA)',
    slug: 'architect-spatial-planner',
    domainId: 'design_fashion_arts',
    domainName: 'Visual Arts, Design & Architecture',
    shortDescription: 'Design sustainable iconic skyscrapers, airport terminals, eco-resorts, smart urban masterplans, and futuristic spatial monuments.',
    holisticInsight: 'Architecture blends visual aesthetics, structural engineering, environmental climatology, and Council of Architecture (COA) statutory licensing. Accessible via 10+2 MPC (Physics, Chemistry, Maths mandatory) -> NATA / JEE Main Paper 2 -> 5-Year B.Arch at School of Planning & Architecture (SPA) / IITs.',
    recommendedDegreeBranch: 'B.Arch (Bachelor of Architecture - 5 Years) -> M.Arch / Urban Planning at SPA / IITs',
    iconName: 'Palette',
    tags: ['Architecture', 'B.Arch', 'NATA', 'SPA', 'Urban Planning', 'Revit', 'Skyscrapers', 'Interior Design'],
    marketDemand: 'HIGH',
    streams: {
      MPC: {
        streamType: 'MPC',
        streamName: '10+2 MPC to NATA / JEE Paper 2 -> 5-Year B.Arch at SPA / IITs',
        streamShortDesc: '10+2 PCM -> NATA / JEE Paper 2 -> 5-Year B.Arch -> Council of Architecture (COA) Licensed Architect',
        badgeLabel: 'Premier Architectural & Spatial Design Track',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Master architectural geometry, perspective drawing, climatology, structural analysis, and Building Information Modeling (Revit/Rhino) in India’s apex planning schools.',
        branchSelectionStrategy: 'In 10+2 MPC, practice perspective sketching and spatial 3D visualization. Clear NATA (National Aptitude Test in Architecture) and JEE Paper 2.',
        metrics: { timeToFirstJobYears: 5, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 10, practicalToTheoryRatio: 10 },
        pros: ['Council of Architecture (COA) License allows legally signing and sanctioning commercial/residential architectural drawings in India', 'High prestige and direct avenue for building private architectural design firms and real estate partnerships'],
        cons: ['Intensive 5-year studio curriculum with continuous late-night jury presentations and scale-model fabrication'],
        entryJobRoles: ['Junior Project Architect', 'BIM Architectural Modeler', 'Interior Concept Architect', 'Urban Planning Associate'],
        fiveYearTrajectory: 'Principal Architectural Partner / Chief Urban Design Director (₹18L - ₹50L+ LPA).',
        salarySpectrumLpa: { entryMin: 5.5, entryMax: 11.0, experiencedPeak: 45.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'arch_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Drawing & Geometry Foundation',
            subtitle: 'Strong performance in 3D geometry, visual perspective sketching, and physics',
            description: 'Pass 10th standard with strong score in mathematics and spatial drawing.',
            mandatoryEligibility: ['Pass 10th with min 60%'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Two-Point Perspective Drawing', 'Geometry & Spatial Proportions'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Practice outdoor sketching of heritage buildings, shadows, and perspective streetscapes.'
          },
          {
            id: 'arch_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (MPC)',
            title: '10+2 Intermediate in MPC + NATA / JEE Paper 2 Prep',
            subtitle: 'Mandatory Physics, Chemistry & Mathematics for Council of Architecture eligibility',
            durationYears: '2 Years',
            description: 'Crack NATA and JEE Main Paper 2 to qualify for SPA Delhi, SPA Bhopal, SPA Vijayawada, CEPT Ahmedabad, and IIT Roorkee.',
            mandatoryEligibility: ['10+2 with Physics, Chemistry and Mathematics as mandatory subjects with min 50% aggregate'],
            examGateways: ['NATA_EXAM', 'JEE_MAIN'],
            recommendedInstitutions: ['Junior Colleges / Senior Secondary Schools'],
            skillsToAcquire: ['3D Spatial Reasoning & Visual Composition', 'Architectural Awareness & Heritage History'],
            estimatedCostRange: '₹30,000 - ₹90,000',
            keyActionTip: 'Solve NATA previous year drawing and aesthetic sensitivity test papers.'
          },
          {
            id: 'arch_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Professional Architecture Degree',
            title: 'B.Arch (Bachelor of Architecture - 5 Years)',
            subtitle: 'Architectural design studios, climate responsive buildings, structural mechanics, and 6-month practical architectural office training',
            durationYears: '5 Years',
            description: 'Complete 10 semesters of design studios: high-rise housing, institutional campuses, hospital architecture, and thesis defense.',
            branchOrSpecializationToChoose: 'Choose: B.Arch at COA-approved premier school (SPA / CEPT / IIT).',
            mandatoryEligibility: ['NATA / JEE Paper 2 rank + 10+2 PCM clearance'],
            examGateways: [],
            recommendedInstitutions: ['School of Planning and Architecture (SPA New Delhi, Bhopal, Vijayawada), CEPT University Ahmedabad, IIT Roorkee, IIT Kharagpur, Sir JJ College of Architecture Mumbai'],
            skillsToAcquire: ['Autodesk Revit & Rhino 3D / Grasshopper Parametric Modeling', 'Lumion / V-Ray Photorealistic Rendering', 'Sustainable Climatology & LEED Green Building Standards', 'Structural Working Drawings'],
            estimatedCostRange: '₹2.5L - ₹10L (Govt Subsidized at SPAs/IITs)',
            keyActionTip: 'Intern with a top national architectural firm during the 9th/10th semester practical training.'
          },
          {
            id: 'arch_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Licensed Architecture Practice',
            title: 'Council of Architecture (COA) Registered Principal Architect',
            subtitle: 'Directing private architectural practices, luxury residences, smart city masterplans, and public monuments',
            description: 'Design and sanction sustainable architectural landmarks, corporate tech parks, and commercial towers.',
            mandatoryEligibility: ['B.Arch degree + COA Registration Certificate (CA/XXXX/XXXXX)'],
            examGateways: [],
            recommendedInstitutions: ['Hafeez Contractor Architects, Morphogenesis, HCP Design (Bimal Patel), Studio Lotus, Foster+Partners India'],
            skillsToAcquire: ['Urban Masterplanning Regulations & By-Laws', 'Client Project Budgeting & BOQ Costing'],
            estimatedCostRange: 'Zero (High Practice Profits & Design Fees)',
            keyActionTip: 'Register your independent architectural studio with COA to bid on central government infrastructure design tenders.'
          }
        ]
      }
    }
  },

  // 2. 3D ANIMATION, GAME ART & VFX SUPERVISOR
  animation_vfx_artist: {
    id: 'animation_vfx_artist',
    title: '3D Animation, Game Artist & Visual Effects (VFX) Supervisor',
    slug: '3d-animation-game-art-vfx',
    domainId: 'design_fashion_arts',
    domainName: 'Visual Arts, Design & Architecture',
    shortDescription: 'Create photorealistic CGI monsters, Hollywood superhero visual effects, Unreal Engine 5 video game environments, and 3D character rigs for cinema and gaming.',
    holisticInsight: 'VFX and 3D game art represent India’s booming entertainment tech industry (powering global blockbusters from Marvel, Disney, and AAA PlayStation games). Accessible after 10th or 12th in any stream -> B.Des / B.Sc in Animation & VFX -> Maya / Blender / Unreal Engine 5 mastery -> Global VFX studios.',
    recommendedDegreeBranch: 'B.Des in Animation / B.Sc in VFX & Gaming (NID / Whistling Woods / Frameboxx) -> Unreal Engine Technical Artist',
    iconName: 'Palette',
    tags: ['Animation', 'VFX', '3D Game Art', 'Unreal Engine', 'Blender', 'Maya', 'CGI', 'Marvel', 'Gaming'],
    marketDemand: 'EXPLOSIVE',
    streams: {
      HEC: {
        streamType: 'HEC',
        streamName: '10+2 Arts/Humanities to B.Des Animation -> Hollywood & AAA Gaming Track',
        streamShortDesc: '10+2 Arts/Humanities -> NID / Whistling Woods B.Des -> Maya / Unreal Engine -> VFX Lead / Game Studio',
        badgeLabel: 'CGI Storytelling & Real-Time Game Art Track',
        themeColor: STREAM_THEMES.HEC,
        approachPhilosophy: 'Master 3D character modeling, anatomical rigging, real-time procedural lighting, particle dynamics (Houdini), and virtual production (LED volumes).',
        branchSelectionStrategy: 'In 10+2, study visual art and computer graphics. Clear UCEED / NID DAT or join dedicated animation academies.',
        metrics: { timeToFirstJobYears: 3.5, financialInvestment: 'MODERATE', competitionLevel: 'MODERATE', flexibilityScore: 10, practicalToTheoryRatio: 10 },
        pros: ['Massive global outsourcing demand from Hollywood (Marvel, Netflix, HBO) and major game publishers (Rockstar, Ubisoft, EA)', 'High remote work flexibility earning international USD consulting rates from India'],
        cons: ['Requires continuous GPU hardware investment and tight crunch deadlines before theatrical release dates'],
        entryJobRoles: ['3D Character Modeler', 'Unreal Engine Environment Artist', 'VFX Compositor (Nuke)', '3D Character Animator'],
        fiveYearTrajectory: 'VFX Supervisor / Game Art Director (₹20L - ₹55L+ LPA).',
        salarySpectrumLpa: { entryMin: 5.0, entryMax: 11.0, experiencedPeak: 42.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'vfx_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & Digital Art Exploration',
            subtitle: 'Learn open-source 3D software Blender and Photoshop digital painting',
            description: 'Pass 10th standard while building a starter digital art and 3D modeling portfolio.',
            mandatoryEligibility: ['Pass 10th standard'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards & Online YouTube Communities (Blender Guru, CG Cookie)'],
            skillsToAcquire: ['Blender 3D Modeling Basics', 'Digital Texture Painting', 'Visual Composition'],
            estimatedCostRange: 'Free Software (Blender)',
            keyActionTip: 'Create 5 complete 3D hard-surface prop models and render them in Blender Cycles.'
          },
          {
            id: 'vfx_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (Any Stream)',
            title: '10+2 Intermediate (Any Stream) + UCEED / NID Entrance Prep',
            subtitle: 'Character design, visual storytelling, lighting theory, and 3D animation basics',
            durationYears: '2 Years',
            description: 'Complete 10+2 while preparing for UCEED, NID DAT, and university animation screening tests.',
            mandatoryEligibility: ['10+2 pass in any stream with min 50%'],
            examGateways: ['UCEED_DESIGN', 'NID_DAT'],
            recommendedInstitutions: ['Junior Colleges / Design Coaching'],
            skillsToAcquire: ['Maya / ZBrush Character Sculpting', 'Human & Animal Anatomy', 'Animation 12 Principles'],
            estimatedCostRange: '₹30,000 - ₹90,000',
            keyActionTip: 'Build a video showreel showing your 3D models and lighting breakdowns on ArtStation.'
          },
          {
            id: 'vfx_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Professional Animation & VFX Degree',
            title: 'B.Des in Animation / B.Sc in Animation & Game VFX',
            subtitle: 'Houdini procedural dynamics, Nuke node compositing, Unreal Engine 5, and student film capstone',
            durationYears: '3 to 4 Years',
            description: 'Direct a complete 3D animated short film or build an interactive playable level in Unreal Engine 5 with photorealistic Nanite/Lumen lighting.',
            branchOrSpecializationToChoose: 'Choose: B.Des in Animation from NID, Whistling Woods, or specialized animation institutes.',
            mandatoryEligibility: ['Portfolio submission + entrance screening clearance'],
            examGateways: [],
            recommendedInstitutions: ['National Institute of Design (NID Ahmedabad), Whistling Woods International Mumbai, MIT Institute of Design Pune, Rubika India'],
            skillsToAcquire: ['Unreal Engine 5 Real-Time Virtual Production', 'Foundry Nuke 3D Compositing', 'Houdini FX Particle Sim (Fire, Smoke, Destruction)', 'Substance 3D Painter PBR Texturing'],
            estimatedCostRange: '₹2.5L - ₹12L',
            keyActionTip: 'Upload breakdowns of your VFX shots and game environments to ArtStation and LinkedIn.'
          },
          {
            id: 'vfx_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Studio VFX & Game Art Leadership',
            title: 'VFX Supervisor / Technical Art Director',
            subtitle: 'Supervising visual effects for international OTT shows, blockbusters, and AAA game releases',
            description: 'Lead teams of 50+ CGI artists, integrate on-set LED volume cameras, and deliver world-class cinematic visual effects.',
            mandatoryEligibility: ['Recognized 3D portfolio showreel with credit in major productions'],
            examGateways: [],
            recommendedInstitutions: ['DNEG India, Framestore, Technicolor, MPC (Moving Picture Company), Ubisoft India, Rockstar Games India'],
            skillsToAcquire: ['VFX Production Bidding & Pipeline Architecture', 'Real-Time Shader Optimization'],
            estimatedCostRange: 'Zero (High Creative Compensation)',
            keyActionTip: 'Specialize as a Technical Artist bridging Python scripting with Unreal Engine shaders for highest industry salaries.'
          }
        ]
      }
    }
  },

  // 3. FASHION DESIGNER & APPAREL ARCHITECT
  fashion_designer: {
    id: 'fashion_designer',
    title: 'Fashion Designer & Haute Couture Architect (NIFT / NID)',
    slug: 'fashion-designer-couture',
    domainId: 'design_fashion_arts',
    domainName: 'Visual Arts, Design & Architecture',
    shortDescription: 'Design luxury bridal couture, sustainable pret-a-porter collections, launch global designer labels, and showcase at Lakme & Paris Fashion Weeks.',
    holisticInsight: 'Fashion design merges textile science, silhouette drapery, sustainable materials, and runway branding. Premier entry via 10+2 in Any Stream (MPC/MEC/HEC/BiPC) -> NIFT Entrance Exam (CAT + GAT + Situation Test) -> 4-Year B.Des Fashion Design at National Institute of Fashion Technology.',
    recommendedDegreeBranch: 'B.Des in Fashion Design / Textile Design (NIFT New Delhi / Mumbai)',
    iconName: 'Palette',
    tags: ['Fashion', 'NIFT', 'Design', 'Couture', 'Textiles', 'Lakme Fashion Week', 'Styling', 'Apparel'],
    marketDemand: 'HIGH',
    streams: {
      HEC: {
        streamType: 'HEC',
        streamName: '10+2 Arts/Humanities to NIFT B.Des Fashion Design Track',
        streamShortDesc: '10+2 Any Stream -> NIFT Entrance (CAT/GAT) -> 4-Year B.Des Fashion -> Luxury Designer Label / Apparel Export House',
        badgeLabel: 'Haute Couture & Luxury Fashion Track',
        themeColor: STREAM_THEMES.HEC,
        approachPhilosophy: 'Master pattern making, garment construction, textile weaving, digital CAD fashion rendering (Clo3D), and runway collection styling.',
        branchSelectionStrategy: 'Pass 10+2 in any stream and clear NIFT entrance with top All India Rank for NIFT New Delhi or Mumbai.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 10, practicalToTheoryRatio: 10 },
        pros: ['Direct campus placements with premier fashion houses (Sabyasachi, Manish Malhotra, Anita Dongre), retail giants (Reliance Retail, Aditya Birla Fashion, Zara), and export houses', 'High avenue for building independent luxury brand labels and celebrity styling careers'],
        cons: ['Fast-paced seasonal collection deadlines and dynamic trend forecasting shifts'],
        entryJobRoles: ['Assistant Fashion Designer', 'Fashion Stylist & Wardrobe Consultant', 'Apparel Merchandiser', 'Textile Trend Forecaster'],
        fiveYearTrajectory: 'Creative Director (Fashion House) / Independent Couture Label Founder (₹18L - ₹60L+ LPA).',
        salarySpectrumLpa: { entryMin: 5.0, entryMax: 10.5, experiencedPeak: 40.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'fash_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & Visual Sketching Foundation',
            subtitle: 'Creative interest in apparel styling, fabrics, color harmonies, and sketching',
            description: 'Pass 10th standard with strong foundation in creative drawing.',
            mandatoryEligibility: ['Pass 10th standard'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Fashion Croquis Figure Drawing', 'Color Wheel Harmony'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Practice sketching 10-head fashion figures and understanding textile weaves (cotton, silk, linen).'
          },
          {
            id: 'fash_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (Any Stream)',
            title: '10+2 Intermediate in Any Stream + NIFT / NID Entrance Prep',
            subtitle: 'Creative Ability Test (CAT), General Ability Test (GAT), and 3D Situation Test',
            durationYears: '2 Years',
            description: 'Crack NIFT entrance exam with top rank for NIFT New Delhi, Mumbai, Bengaluru, or Hyderabad.',
            mandatoryEligibility: ['10+2 pass in any stream from recognized board'],
            examGateways: ['NIFT_ENTRANCE', 'NID_DAT'],
            recommendedInstitutions: ['Junior Colleges / Design Preparation Centers'],
            skillsToAcquire: ['Speed Conceptual Sketching', 'Material Manipulation (Clay, Wire, Fabric)', 'Current Fashion Awareness'],
            estimatedCostRange: '₹30,000 - ₹90,000',
            keyActionTip: 'Practice 3D model fabrication with cardboard, thermocol, and cloth for the NIFT Situation Test.'
          },
          {
            id: 'fash_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'NIFT Fashion Design Degree',
            title: 'B.Des (Bachelor of Design in Fashion Design) at NIFT',
            subtitle: 'Pattern drafting, garment stitching, fabric dyeing, digital 3D fashion (Clo3D), and graduation runway collection',
            durationYears: '4 Years',
            description: 'Fabricate 6 complete avant-garde runway garments, complete craft cluster field documentation, and intern with top fashion houses.',
            branchOrSpecializationToChoose: 'Choose: B.Des Fashion Design or B.Des Textile Design at NIFT.',
            mandatoryEligibility: ['NIFT Entrance Rank + 10+2 pass'],
            examGateways: [],
            recommendedInstitutions: ['National Institute of Fashion Technology (NIFT New Delhi, Mumbai, Bengaluru, Hyderabad, Chennai)'],
            skillsToAcquire: ['Draping on Mannequins & Flat Pattern Drafting', 'Industrial Sewing Machine Mastery', 'Clo3D / Browzwear 3D Digital Fashion', 'Collection Range Planning'],
            estimatedCostRange: '₹3L - ₹11L',
            keyActionTip: 'Showcase your graduation collection to fashion critics and buyers at the annual NIFT Graduating Fashion Show.'
          },
          {
            id: 'fash_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Couture House & Label Leadership',
            title: 'Creative Director / Luxury Fashion Label Founder',
            subtitle: 'Directing runway collections, luxury bridal ensembles, and sustainable global fashion exports',
            description: 'Launch independent boutique collections, style Bollywood/OTT celebrities, and direct sustainable luxury brands.',
            mandatoryEligibility: ['B.Des in Fashion Design with verified portfolio'],
            examGateways: [],
            recommendedInstitutions: ['Sabyasachi Couture, Manish Malhotra, House of Anita Dongre, Aditya Birla Fashion (ABFRL), Zara/Inditex'],
            skillsToAcquire: ['Luxury Brand Storytelling & PR', 'Sustainable Supply Chain Sourcing'],
            estimatedCostRange: 'Zero (High Creative & Brand Royalties)',
            keyActionTip: 'Showcase collections at Lakme Fashion Week / FDCI fashion platforms for global retail distribution.'
          }
        ]
      }
    }
  }
};
