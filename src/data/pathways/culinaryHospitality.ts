import { CareerRole } from '../../types/pathway';

const STREAM_THEMES = {
  MPC: { primary: '#3b82f6', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400', glow: 'shadow-blue-500/20' },
  BiPC: { primary: '#10b981', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  MEC_CEC: { primary: '#f59e0b', border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400', glow: 'shadow-amber-500/20' },
  HEC: { primary: '#a855f7', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400', glow: 'shadow-purple-500/20' },
  POLYTECHNIC: { primary: '#06b6d4', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
  VOCATIONAL_GUILD: { primary: '#f43f5e', border: 'border-rose-500/30', bg: 'bg-rose-500/10', text: 'text-rose-400', glow: 'shadow-rose-500/20' }
};

export const CULINARY_HOSPITALITY_PATHWAYS: Record<string, CareerRole> = {
  executive_chef: {
    id: 'executive_chef',
    title: 'Executive Head Chef & Culinary Visionary',
    slug: 'executive-chef',
    domainId: 'culinary_hospitality',
    domainName: 'Culinary Arts & Hospitality',
    shortDescription: 'Master haute cuisine, molecular gastronomy, restaurant kitchen brigades, food science, and culinary entrepreneurship in luxury hotels and fine dining.',
    holisticInsight: 'Culinary excellence can be reached via NCHMCT JEE / IHM degrees (stream-agnostic), BiPC (food biochemistry and nutrition focus), MPC (molecular gastronomy & food thermal physics), MEC (restaurant P&L & hospitality management), or direct luxury hotel apprenticeship (Oberoi STEP / Guild kitchens).',
    iconName: 'Utensils',
    tags: ['Culinary', 'Chef', 'Gastronomy', 'NCHMCT', 'Oberoi STEP', 'Hospitality', 'Fine Dining'],
    marketDemand: 'HIGH',
    streams: {
      HEC: {
        streamType: 'HEC',
        streamName: 'Cultural Gastronomy & Hospitality Route (NCHMCT JEE)',
        streamShortDesc: '10+2 HEC -> NCHMCT JEE -> B.Sc in Hospitality & Hotel Administration at Central IHMs',
        badgeLabel: 'Premier Central IHM Culinary Track',
        themeColor: STREAM_THEMES.HEC,
        approachPhilosophy: 'Deep grounding in global food cultures, culinary history, and hospitality management through premier Central Institute of Hotel Management (IHM Pusa Delhi, IHM Mumbai).',
        metrics: { timeToFirstJobYears: 3, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 9, practicalToTheoryRatio: 9 },
        pros: ['Direct campus placements from top IHMs (Pusa, Mumbai, Bangalore) into luxury hotel kitchen management trainee (MT) programs (Taj, Oberoi, Marriott, ITC)', 'Holistic training across kitchen production, food & beverage service, front office, and housekeeping'],
        cons: ['Early kitchen shifts require intense physical stamina (12-14 hour standing shifts)'],
        entryJobRoles: ['Kitchen Management Trainee (KMT)', 'Commis Chef', 'Demi Chef de Partie', 'Pastry Sous Chef'],
        fiveYearTrajectory: 'Executive Head Chef / Corporate Culinary Director (₹18L - ₹75L+).',
        salarySpectrumLpa: { entryMin: 4.5, entryMax: 9, experiencedPeak: 65 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'chef_hec_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Culinary Curiosity',
            subtitle: 'Master basic knife skills, flavor pairings, and kitchen safety',
            description: 'Pass 10th board while experimenting with regional Indian recipes and baking fundamentals.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Knife Safety & Cuts (Julienne, Brunoise)', 'Spice Layering', 'Kitchen Sanitation Basics'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Read "Salt, Fat, Acid, Heat" by Samin Nosrat to understand flavor science.'
          },
          {
            id: 'chef_hec_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 HEC + NCHMCT JEE Prep',
            title: '10+2 Intermediate HEC with NCHMCT JEE Prep',
            subtitle: 'Service sector aptitude, English comprehension, and general awareness',
            durationYears: '2 Years',
            description: 'Prepare for National Council for Hotel Management Joint Entrance Examination (NCHMCT JEE).',
            mandatoryEligibility: ['10+2 pass in any stream with English as a compulsory subject'],
            examGateways: ['NCHMCT_JEE'],
            recommendedInstitutions: ['Junior Colleges & Hospitality Prep Hubs'],
            skillsToAcquire: ['Service Sector Professional Etiquette', 'Culinary Geography of India & Europe'],
            estimatedCostRange: '₹30,000 - ₹80,000',
            keyActionTip: 'Aim for a top 500 All India Rank in NCHMCT JEE to secure IHM Pusa Delhi or IHM Mumbai.'
          },
          {
            id: 'chef_hec_3', phase: 'PHASE_3_DEGREE', phaseLabel: '3-Year IHM Degree',
            title: '3-Year B.Sc in Hospitality & Hotel Administration (Central IHM)',
            subtitle: 'Quantity food kitchens, continental culinary arts, bakery & confectionery, and 6-month industrial hotel training',
            durationYears: '3 Years',
            description: 'Train in industrial commercial kitchens cooking 500+ covers daily and complete mandatory luxury hotel kitchen training.',
            mandatoryEligibility: ['Allotment via NCHMCT JEE Central Counseling'],
            examGateways: [],
            recommendedInstitutions: ['IHM Pusa (New Delhi)', 'IHM Mumbai', 'IHM Bangalore', 'IHM Aurangabad (Taj Group)'],
            skillsToAcquire: ['French Classical Culinary Techniques (Stocks, Mother Sauces)', 'Bakery & Laminated Pastry Doughs', 'Food Cost Yield Calculations'],
            estimatedCostRange: '₹3.5L - ₹6.5L for entire 3-year degree',
            keyActionTip: 'Target Kitchen Management Trainee (KMT / MT Kitchen) campus placement with Oberoi OCLD, Taj TMTP, or Marriott Voyage.'
          },
          {
            id: 'chef_hec_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Executive Head Chef & Culinary Director',
            subtitle: 'Curating Michelin-standard menus, managing multi-crore kitchen operations, and opening signature restaurants',
            description: 'Direct kitchen brigades of 50+ chefs, design seasonal farm-to-table menus, and manage restaurant P&L.',
            mandatoryEligibility: ['Proven culinary artistry and kitchen leadership track record'],
            examGateways: [],
            recommendedInstitutions: ['Luxury Hotel Chains, Michelin-Starred Restaurants & Global Cruise Liners'],
            skillsToAcquire: ['Menu Engineering & High-Gross-Margin Pricing', 'HACCP International Food Safety Compliance'],
            estimatedCostRange: 'Zero (High Comp & Global Mobility Phase)',
            keyActionTip: 'Master international cuisines (Japanese, Italian, Modern Indian) to command global executive chef salaries.'
          }
        ]
      },
      BiPC: {
        streamType: 'BiPC',
        streamName: 'Food Science, Nutrition & Molecular Gastronomy Route',
        streamShortDesc: '10+2 BiPC -> B.Sc Food Technology / Culinary Arts -> Molecular Gastronomist & Menu Chemist',
        badgeLabel: 'Food Biochemistry & Molecular Gastronomy',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Apply biochemistry, enzymatic reactions, fermentation kinetics, and nutritional science to create avant-garde dining experiences and innovative plant-based food concepts.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 9 },
        pros: ['Deep chemistry knowledge allows pioneering spherification, sous-vide precision cooking, and natural food preservation', 'High demand in alternative protein, food tech R&D, and premium wellness resorts'],
        cons: ['Requires balancing laboratory food science with high-speed restaurant kitchen pressure'],
        entryJobRoles: ['Molecular Gastronomy Chef', 'Culinary R&D Specialist', 'Nutritional Executive Chef', 'Food Technologist'],
        fiveYearTrajectory: 'Culinary Innovation Director / R&D Head at Global Food & Hospitality Brand (₹22L - ₹85L+).',
        salarySpectrumLpa: { entryMin: 5, entryMax: 11, experiencedPeak: 80 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'chef_bipc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Biology & Chemistry',
            subtitle: 'Study nutrition and chemical reactions in cooking',
            description: 'Pass 10th board with high grades in science.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Chemical Emulsions', 'Bacterial Fermentation Basics'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Experiment with sourdough fermentation and pickling chemistry at home.'
          },
          {
            id: 'chef_bipc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 BiPC',
            title: '10+2 Intermediate BiPC (Biology, Chemistry, Physics)',
            subtitle: 'Organic chemistry, biomolecules (proteins, lipids, carbohydrates), and microbiology',
            durationYears: '2 Years',
            description: 'Deep dive into organic chemistry of proteins and fats while studying culinary applications.',
            mandatoryEligibility: ['10+2 PCB pass with min 50%'],
            examGateways: ['CUET_UG', 'NCHMCT_JEE'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Maillard Reaction Chemistry', 'Hydrocolloids (Agar-Agar, Sodium Alginate) Functionality'],
            estimatedCostRange: '₹30,000 - ₹90,000',
            keyActionTip: 'Read Harold McGee’s "On Food and Cooking: The Science and Lore of the Kitchen".'
          },
          {
            id: 'chef_bipc_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Undergraduate Degree',
            title: 'B.Sc / B.A. in Culinary Arts & Food Science',
            subtitle: 'Precision sous-vide thermal control, textural transformation, and flavor chemistry',
            durationYears: '3 to 4 Years',
            description: 'Combine culinary technique with food science laboratories at premier culinary institutes.',
            mandatoryEligibility: ['Admission via Entrance / University Merit'],
            examGateways: ['NCHMCT_JEE', 'CUET_UG'],
            recommendedInstitutions: ['Welcomgroup Graduate School of Hotel Administration (WGSHA Manipal)', 'Culinary Academy of India (Hyderabad)', 'Symbiosis School of Culinary Arts'],
            skillsToAcquire: ['Spherification & Emulsification Protocols', 'Precision Thermal Immersion Circulator Cooking', 'Nutritional Macronutrient Balancing'],
            estimatedCostRange: '₹4L - ₹12L',
            keyActionTip: 'Intern at progressive fine dining restaurants (e.g. Indian Accent, Masque, Tresind).'
          },
          {
            id: 'chef_bipc_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Culinary Innovation Chef & Gastronomy Director',
            subtitle: 'Creating sensory tasting menus and developing new sustainable food formulations',
            description: 'Lead culinary R&D kitchens creating multi-sensory dining experiences and clean-label gourmet foods.',
            mandatoryEligibility: ['Proven innovation portfolio in avant-garde gastronomy'],
            examGateways: [],
            recommendedInstitutions: ['Progressive Fine Dining Restaurants & Food Tech Innovation Labs'],
            skillsToAcquire: ['Sensory Evaluation Panel Design', 'Fermentation Lab Scale-Up'],
            estimatedCostRange: 'Zero (Earning Phase)',
            keyActionTip: 'Publish experimental culinary papers and collaborate with beverage sommeliers for multisensory pairings.'
          }
        ]
      },
      VOCATIONAL_GUILD: {
        streamType: 'VOCATIONAL_GUILD',
        streamName: 'Oberoi STEP & Luxury Hotel Residency Route (100% Sponsored)',
        streamShortDesc: '10+2 -> Oberoi STEP Selection -> 3-Year Fully Sponsored Hotel Kitchen Residency + Stipend',
        badgeLabel: 'Oberoi STEP Luxury Kitchen Residency',
        themeColor: STREAM_THEMES.VOCATIONAL_GUILD,
        approachPhilosophy: 'Direct entry into the world-renowned Oberoi Group’s Systematic Training and Education Programme (STEP)—earning a fully sponsored 3-year hotel kitchen residency with monthly stipend and guaranteed luxury placement.',
        metrics: { timeToFirstJobYears: 3, financialInvestment: 'FREE_SCHOLARSHIP', competitionLevel: 'EXTREME', flexibilityScore: 8, practicalToTheoryRatio: 10 },
        pros: ['100% free culinary training funded by The Oberoi Group with zero student debt and monthly stipend', 'Trained directly in 5-star luxury Oberoi kitchens with legendary grooming, discipline, and international culinary standards', 'Direct absorption into The Oberoi Group as permanent culinary associate upon graduation'],
        cons: ['Selection process is extremely selective (< 1% acceptance rate) across rigorous grooming, English fluency, and situational rounds'],
        entryJobRoles: ['Oberoi Kitchen Associate', 'Junior Sous Chef', 'Pastry Chef', 'Commis I'],
        fiveYearTrajectory: 'Oberoi Executive Sous Chef / Senior Kitchen Specialist (₹15L - ₹55L+).',
        salarySpectrumLpa: { entryMin: 4.8, entryMax: 9.5, experiencedPeak: 60 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'chef_voc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with English Fluency & Grooming',
            subtitle: 'Focus on communication, personal discipline, and hospitality passion',
            description: 'Pass 10th board with high marks in English and immaculate personal grooming standards.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Spoken English Fluency', 'Impeccable Grooming & Poise'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Practice conversational English and situational interview responses.'
          },
          {
            id: 'chef_voc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 & STEP Selection',
            title: '10+2 Pass in Any Stream + Oberoi STEP Selection',
            subtitle: 'Clear Round 1 Group Assessment, Round 2 Presentation, and Round 3 General Manager Panel',
            durationYears: '2 Years',
            description: 'Pass 10+2 with minimum 61% in English and clear the 3-tier Oberoi STEP selection process.',
            mandatoryEligibility: ['10+2 pass with min 61% in English, maximum age 20 years'],
            examGateways: ['OBEROI_STEP'],
            recommendedInstitutions: ['The Oberoi Centre of Learning and Development (OCLD)'],
            skillsToAcquire: ['Luxury Brand Standards', 'High-Pressure Situational Composure', 'Basic Culinary Terminology'],
            estimatedCostRange: 'Zero (Free Selection Process)',
            keyActionTip: 'Demonstrate humility, eagerness to learn, and genuine passion for luxury guest delight during interviews.'
          },
          {
            id: 'chef_voc_3', phase: 'PHASE_3_DEGREE', phaseLabel: '3-Year STEP Residency',
            title: '3-Year Full-Time Kitchen Residency at Oberoi Hotels & Resorts',
            subtitle: 'Live kitchen shifts across banquet, specialty restaurants, butchery, and bakery with B.Sc IGNOU degree',
            durationYears: '3 Years',
            description: 'Work alongside master executive chefs in legendary Oberoi properties (The Oberoi New Delhi, Mumbai, Bengaluru, Udaivilas), receiving monthly stipend, uniforms, meals, and medical coverage.',
            mandatoryEligibility: ['Selected Oberoi STEP Kitchen Trainee'],
            examGateways: [],
            recommendedInstitutions: ['The Oberoi Hotels & Resorts (Delhi, Mumbai, Bengaluru, Udaipur, Jaipur)'],
            skillsToAcquire: ['Luxury Banquet Cooking for 1,000+ Guests', 'Master Butchery & Fish Filleting', 'Classical European & Indian Kitchen Line Mastery'],
            estimatedCostRange: 'Fully Sponsored by Oberoi Group (Includes Monthly Stipend to Trainee)',
            keyActionTip: 'Excel in your kitchen rotations to earn a nomination for the elite 2-year OCLD Kitchen Management Programme.'
          },
          {
            id: 'chef_voc_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Permanent Oberoi Luxury Chef & Future Executive Chef',
            subtitle: 'Leading premier restaurant kitchens across global luxury hotel chains',
            description: 'Graduate with the golden credential of Oberoi kitchen training, commanding instant respect in luxury hotel groups worldwide.',
            mandatoryEligibility: ['Successful completion of 3-Year STEP curriculum'],
            examGateways: [],
            recommendedInstitutions: ['The Oberoi Group, Four Seasons, Aman Resorts, Mandarin Oriental'],
            skillsToAcquire: ['International Five-Star Kitchen Operations', 'VIP Guest Bespoke Menu Design'],
            estimatedCostRange: 'Zero (High Net Earning Phase)',
            keyActionTip: 'The Oberoi STEP culinary alumni network holds executive chef positions in top luxury hotels across 40+ countries.'
          }
        ]
      },
      MEC_CEC: {
        streamType: 'MEC_CEC',
        streamName: 'Restaurant Entrepreneurship & Hospitality P&L Route',
        streamShortDesc: '10+2 MEC -> BBA Hospitality / Culinary Management -> Restaurateur & Cloud Kitchen Founder',
        badgeLabel: 'Restaurant Founder & F&B Entrepreneur',
        themeColor: STREAM_THEMES.MEC_CEC,
        approachPhilosophy: 'Combine culinary kitchen mastery with menu engineering, restaurant real estate location analysis, food cost control, cloud kitchen logistics, and venture capital financing.',
        metrics: { timeToFirstJobYears: 3.5, financialInvestment: 'MODERATE', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 8 },
        pros: ['Direct path to launching successful multi-outlet restaurant chains, cloud kitchen networks, and gourmet F&B brands', 'Sharp understanding of prime cost (food cost + labor cost) ensures high restaurant profitability'],
        cons: ['High capital risk in competitive restaurant industry requiring strong marketing differentiation'],
        entryJobRoles: ['Restaurant Operations Manager', 'F&B Entrepreneur', 'Cloud Kitchen Brand Manager', 'Chef-Owner'],
        fiveYearTrajectory: 'Founder / Managing Director of Multi-City Restaurant Chain (₹30L - ₹2Cr+).',
        salarySpectrumLpa: { entryMin: 6, entryMax: 14, experiencedPeak: 120 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'chef_mec_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Business Interest',
            subtitle: 'Pass 10th standard with strong foundation',
            description: 'Pass 10th board with interest in commerce and dining brands.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Basic Financial Math'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Analyze why certain local restaurants succeed while others shut down within 1 year.'
          },
          {
            id: 'chef_mec_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 MEC',
            title: '10+2 MEC (Maths, Economics, Commerce)',
            subtitle: 'Study unit economics, marketing, and inventory accounting',
            durationYears: '2 Years',
            description: 'Complete 10+2 MEC while learning commercial food costing and recipe scaling.',
            mandatoryEligibility: ['10+2 Commerce pass with min 55%'],
            examGateways: ['CUET_UG', 'NCHMCT_JEE'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Food Cost Percentage Modeling (Targeting < 28%)', 'Restaurant POS & Inventory Systems'],
            estimatedCostRange: '₹35,000 - ₹90,000',
            keyActionTip: 'Prepare for CUET and top hospitality management entrance tests.'
          },
          {
            id: 'chef_mec_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Undergraduate Degree',
            title: 'BBA in Hospitality & Culinary Entrepreneurship',
            subtitle: 'Commercial kitchen layout design, franchise models, supply chain sourcing, and brand marketing',
            durationYears: '3 to 4 Years',
            description: 'Learn restaurant finance, FSSAI regulatory licensing, cloud kitchen hub-and-spoke models, and culinary execution.',
            mandatoryEligibility: ['Admission via Merit / Entrance'],
            examGateways: [],
            recommendedInstitutions: ['IHM Aurangabad (BBA Hospitality with Taj)', 'Symbiosis School of Culinary Arts', 'NMIMS'],
            skillsToAcquire: ['Kitchen Ergonomic Flow Design', 'Venture Capital Pitch Deck Creation for F&B Brands', 'Franchise SOP Development'],
            estimatedCostRange: '₹3L - ₹10L',
            keyActionTip: 'Launch a small pop-up food kiosk or campus delivery brand to test real customer unit economics.'
          },
          {
            id: 'chef_mec_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Restaurateur & Managing Director of Multi-Brand F&B Group',
            subtitle: 'Scaling profitable restaurant concepts and cloud kitchen networks nationally',
            description: 'Own and operate profitable fine dining concepts, QSR franchises, and digital-first delivery brands.',
            mandatoryEligibility: ['Demonstrated brand profitability and multi-unit scalability'],
            examGateways: [],
            recommendedInstitutions: ['Independent Restaurant Groups & Venture-Backed F&B Companies'],
            skillsToAcquire: ['Central Base Kitchen (CK) Supply Chain Logistics', 'Private Equity F&B Valuation'],
            estimatedCostRange: 'Zero (Business Equity Phase)',
            keyActionTip: 'Focus on high-margin fast-casual dining concepts with fast table turnarounds.'
          }
        ]
      },
      MPC: {
        streamType: 'MPC',
        streamName: 'Kitchen Thermodynamics & Culinary Engineering Route',
        streamShortDesc: '10+2 MPC -> B.Tech Food Process Engineering / Culinary Tech -> Commercial Kitchen Innovator',
        badgeLabel: 'Culinary Engineering & Precision Equipment',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Apply heat transfer physics, fluid dynamics, industrial automation, and smart commercial combi-oven technology to pioneer high-efficiency restaurant operations and automated cooking robotics.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 8 },
        pros: ['High demand in commercial kitchen equipment manufacturing (Rational, Electrolux) and automated robotic kitchen startups', 'Strong technical and engineering fallback in food processing technology'],
        cons: ['Less focus on classical knife artistry compared to specialized culinary academies'],
        entryJobRoles: ['Culinary Applications Specialist', 'Kitchen Technology Engineer', 'Executive Development Chef', 'Automated Cooking Systems Engineer'],
        fiveYearTrajectory: 'Director of Global Culinary Technology & Kitchen Systems (₹25L - ₹90L+).',
        salarySpectrumLpa: { entryMin: 6, entryMax: 13, experiencedPeak: 90 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'chef_mpc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Physics & Maths',
            subtitle: 'Pass 10th standard',
            description: 'Pass 10th board with high science and maths marks.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Thermodynamics Basics'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Study how induction cooking and pressure steamers work.'
          },
          {
            id: 'chef_mpc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 MPC',
            title: '10+2 Intermediate MPC (Physics, Chemistry, Maths)',
            subtitle: 'Thermal physics, thermodynamics, fluid flow, and chemical kinetics',
            durationYears: '2 Years',
            description: 'Complete 10+2 MPC with high engineering entrance ranks.',
            mandatoryEligibility: ['10+2 PCM pass with min 60%'],
            examGateways: ['JEE_MAIN', 'NCHMCT_JEE'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Heat Exchanger Calculations', 'Smart Sensor Programming'],
            estimatedCostRange: '₹40,000 - ₹1.2L',
            keyActionTip: 'Participate in robotics competitions designing automated food dispensing prototypes.'
          },
          {
            id: 'chef_mpc_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Engineering Degree',
            title: 'B.Tech in Food Process Engineering / Culinary Technology',
            subtitle: 'Smart commercial ovens, automated line cooking, blast chilling kinetics, and precision culinary execution',
            durationYears: '4 Years',
            description: 'Master industrial food machinery, smart IoT kitchen sensors, combi-steamer thermal programming, and culinary production.',
            mandatoryEligibility: ['Admission via JEE / University Entrance'],
            examGateways: [],
            recommendedInstitutions: ['NIFTEM (Kundli / Thanjavur)', 'IIT Kharagpur (Agri & Food Engg)', 'ICT Mumbai'],
            skillsToAcquire: ['Combi-Oven Programming (Rational iCombi)', 'Cryogenic Blast Freezing Cycles', 'Commercial Kitchen Ventilation Optimization'],
            estimatedCostRange: '₹4L - ₹8L',
            keyActionTip: 'Work with commercial kitchen manufacturers on energy-efficient induction ranges.'
          },
          {
            id: 'chef_mpc_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Corporate Culinary Technology Director',
            subtitle: 'Designing the world’s most advanced commercial kitchens and automated culinary platforms',
            description: 'Design mega-flight kitchens (preparing 50,000 meals/day for international airlines) and smart robotic restaurant lines.',
            mandatoryEligibility: ['Engineering degree + Certified Culinary Applications experience'],
            examGateways: [],
            recommendedInstitutions: ['Global In-Flight Catering Giants (TajSATS, Emirates Flight Catering), Equipment MNCs'],
            skillsToAcquire: ['Mega-Flight Kitchen Cook-Chill Protocols', 'Robotic Assembly Line Programming'],
            estimatedCostRange: 'Zero (High Tech Comp Phase)',
            keyActionTip: 'Aviation flight kitchen executive chefs with engineering degrees command premium corporate compensation.'
          }
        ]
      },
      POLYTECHNIC: {
        streamType: 'POLYTECHNIC',
        streamName: 'Hotel Operations & Commercial Food Production Diploma Route',
        streamShortDesc: '3-Year Polytechnic Diploma in Hotel Management & Catering Tech -> Direct Chef Entry',
        badgeLabel: 'Commercial Kitchen & Catering Master',
        themeColor: STREAM_THEMES.POLYTECHNIC,
        approachPhilosophy: 'Hands-on practical cooking, bulk banquet catering, kitchen station rotations, and hotel operations right after 10th through state polytechnic institutes.',
        metrics: { timeToFirstJobYears: 3, financialInvestment: 'LOW', competitionLevel: 'LOW', flexibilityScore: 8, practicalToTheoryRatio: 10 },
        pros: ['Immediate culinary employment right after 10th with zero time wasted on general theoretical academics', 'Extremely affordable fees at state government technical colleges (< ₹15,000/year)'],
        cons: ['Initial entry starts as Commis III or kitchen apprentice before station promotions'],
        entryJobRoles: ['Commis Chef (Continental/Tandoor/Halwai)', 'Banquet Kitchen Assistant', 'Catering Supervisor'],
        fiveYearTrajectory: 'Executive Sous Chef / Master Specialty Chef (₹10L - ₹40L+).',
        salarySpectrumLpa: { entryMin: 3, entryMax: 6, experiencedPeak: 40 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'chef_poly_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & POLYCET Entrance',
            subtitle: 'Secure state diploma seat in Hotel Management & Catering Technology',
            description: 'Pass 10th board and clear state POLYCET.',
            mandatoryEligibility: ['Pass 10th with min 35%'],
            examGateways: ['POLYCET_DIPLOMA'],
            recommendedInstitutions: ['State Polytechnic Colleges'],
            skillsToAcquire: ['Basic Cooking & Hygiene'],
            estimatedCostRange: '₹500',
            keyActionTip: 'Choose polytechnic institutes with commercial training restaurants on campus.'
          },
          {
            id: 'chef_poly_2', phase: 'PHASE_1_STREAM', phaseLabel: '3-Year Diploma',
            title: '3-Year Diploma in Hotel Management & Catering Technology (DHMCT)',
            subtitle: 'Food production, bakery, butchery, food service, and banquet operations',
            durationYears: '3 Years',
            description: 'Cook daily in institutional kitchens, mastering Indian gravies, Chinese wok cookery, tandoori marinades, and continental prep.',
            mandatoryEligibility: ['POLYCET seat allotment'],
            examGateways: [],
            recommendedInstitutions: ['Govt Polytechnic for Catering Tech'],
            skillsToAcquire: ['Tandoor Temperature Control & Skewering', 'High-Volume Gravy Bases', 'Stock & Sauce Prep'],
            estimatedCostRange: '₹15,000 - ₹35,000 total',
            keyActionTip: 'Work weekend catering gigs with top wedding caterers to master live counter cooking under pressure.'
          },
          {
            id: 'chef_poly_3', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Master Specialty Chef & Restaurant Head Cook',
            subtitle: 'Commanding high-volume specialty restaurant and banquet kitchens',
            description: 'Run busy restaurant kitchen stations with speed, zero wastage, and authentic flavor consistency.',
            mandatoryEligibility: ['Proven cooking speed and palate mastery'],
            examGateways: [],
            recommendedInstitutions: ['Prominent Fine Dining & Casual Dining Restaurant Groups'],
            skillsToAcquire: ['Fast Multi-Station Line Coordination', 'Kitchen Inventory Waste Elimination'],
            estimatedCostRange: 'Zero (Earning Phase)',
            keyActionTip: 'Specialty chefs with unmatched mastery in Tandoor, Dim Sum, or Biryani command high bidding wars between restaurant chains.'
          }
        ]
      }
    }
  }
};
