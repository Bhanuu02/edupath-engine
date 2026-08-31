import { CareerDomain } from '../types/pathway';

export const UNIVERSAL_DOMAINS: CareerDomain[] = [
  {
    id: 'film_theatre_arts',
    name: 'Film, Theatre & Performing Arts',
    tagline: 'Cinema, Acting, Music, Direction & Stage Guilds',
    description: 'Master screenwriting, acting, music composition, sound engineering, and visual direction through academic degrees, prestigious national institutes (FTII, NSD), and industry apprenticeship networks.',
    iconName: 'Clapperboard',
    accentColor: '#f43f5e',
    popularRoles: [
      { id: 'film_director', title: 'Film Director / Filmmaker', slug: 'film-director' },
      { id: 'professional_actor', title: 'Film & Theatre Actor', slug: 'actor' },
      { id: 'music_producer', title: 'Music Producer & Composer', slug: 'music-producer' },
      { id: 'cinematographer', title: 'Cinematographer / Director of Photography', slug: 'cinematographer' },
      { id: 'sound_designer', title: 'Sound Designer & Audio Engineer', slug: 'sound-designer' },
      { id: 'screenwriter', title: 'Screenwriter & Narrative Designer', slug: 'screenwriter' }
    ]
  },
  {
    id: 'design_fashion_arts',
    name: 'Design, Fashion & Fine Arts',
    tagline: 'Visual Expression, Interactive Design & Couture',
    description: 'Transform aesthetics and user experiences via product design, haute couture, 3D game art, animation VFX, and fine arts through NID, NIFT, IIT IDC, and global art academies.',
    iconName: 'Palette',
    accentColor: '#ec4899',
    popularRoles: [
      { id: 'ui_ux_designer', title: 'Product & UI/UX Designer', slug: 'ui-ux-designer' },
      { id: 'fashion_designer', title: 'Haute Couture & Apparel Designer', slug: 'fashion-designer' },
      { id: 'game_3d_artist', title: '3D Game Artist & Character Modeler', slug: 'game-3d-artist' },
      { id: 'vfx_supervisor', title: 'Visual Effects (VFX) Supervisor', slug: 'vfx-supervisor' },
      { id: 'interior_architect', title: 'Spatial & Interior Architect', slug: 'interior-architect' },
      { id: 'fine_artist_painter', title: 'Fine Artist & Sculptor', slug: 'fine-artist' }
    ]
  },
  {
    id: 'culinary_hospitality',
    name: 'Culinary Arts & Hospitality',
    tagline: 'Gastronomy, Luxury Hospitality & Tourism',
    description: 'From Michelin-tier executive chefs and artisanal pastry creators to luxury hotel management and culinary entrepreneurship via IHM, Oberoi STEP, and international culinary institutes.',
    iconName: 'Utensils',
    accentColor: '#f59e0b',
    popularRoles: [
      { id: 'executive_chef', title: 'Executive Head Chef', slug: 'executive-chef' },
      { id: 'pastry_chocolatier', title: 'Artisanal Pastry Chef & Chocolatier', slug: 'pastry-chef' },
      { id: 'luxury_hotel_gm', title: 'Luxury Hotel General Manager', slug: 'hotel-gm' },
      { id: 'sommelier_beverage', title: 'Master Sommelier & Beverage Director', slug: 'sommelier' },
      { id: 'food_stylist', title: 'Food Stylist & Culinary Media Producer', slug: 'food-stylist' }
    ]
  },
  {
    id: 'sports_fitness_esports',
    name: 'Sports, Fitness & Esports',
    tagline: 'Athletics, High-Performance Coaching & Esports',
    description: 'High-performance athletics, sports science, physiotherapy, tournament coaching, and professional esports strategy across SAI academies, LNIPE, and global sports federations.',
    iconName: 'Trophy',
    accentColor: '#10b981',
    popularRoles: [
      { id: 'sports_coach', title: 'High-Performance Sports Coach', slug: 'sports-coach' },
      { id: 'sports_physiotherapist', title: 'Sports Physiotherapist & Kinesiologist', slug: 'sports-physiotherapist' },
      { id: 'esports_pro_strategist', title: 'Professional Esports Player & Team Coach', slug: 'esports-coach' },
      { id: 'adventure_mountaineer', title: 'Extreme Sports & Mountaineering Expedition Leader', slug: 'adventure-mountaineer' },
      { id: 'sports_analytics_manager', title: 'Sports Data & Performance Analyst', slug: 'sports-analyst' }
    ]
  },
  {
    id: 'aviation_defense_maritime',
    name: 'Aviation, Defense & Maritime',
    tagline: 'Wings, Uniforms & High Seas Navigation',
    description: 'Take command of cockpits, naval fleets, military defense corps, and maritime merchant shipping through IGRUA, NDA, IMU CET, and DGCA certifications.',
    iconName: 'Plane',
    accentColor: '#0284c7',
    popularRoles: [
      { id: 'commercial_pilot', title: 'Commercial Airline Pilot (CPL)', slug: 'commercial-pilot' },
      { id: 'iaf_fighter_pilot', title: 'IAF Fighter Pilot / Armed Forces Officer (NDA)', slug: 'fighter-pilot-nda' },
      { id: 'merchant_navy_officer', title: 'Merchant Navy Deck Navigation Officer', slug: 'merchant-navy' },
      { id: 'air_traffic_controller', title: 'Air Traffic Controller (ATCO)', slug: 'atco' },
      { id: 'marine_engineer', title: 'Marine Chief Engineer', slug: 'marine-engineer' }
    ]
  },
  {
    id: 'law_civil_services',
    name: 'Law, Public Policy & Civil Services',
    tagline: 'Governance, Constitutional Law & Diplomacy',
    description: 'Shape nation-building, corporate jurisprudence, international diplomacy, and judicial review through NLUs (CLAT), UPSC Civil Services, and prestigious policy institutions.',
    iconName: 'Scale',
    accentColor: '#8b5cf6',
    popularRoles: [
      { id: 'ias_officer', title: 'IAS / IPS Civil Services Officer', slug: 'ias-ips-officer' },
      { id: 'corporate_lawyer', title: 'Corporate M&A Lawyer & Legal Counsel', slug: 'corporate-lawyer' },
      { id: 'supreme_court_advocate', title: 'Litigation Advocate & Judicial Magistrate', slug: 'litigation-lawyer' },
      { id: 'diplomat_ifs', title: 'Diplomat / Indian Foreign Service (IFS)', slug: 'diplomat-ifs' },
      { id: 'public_policy_analyst', title: 'Public Policy Think-Tank Strategist', slug: 'policy-analyst' }
    ]
  },
  {
    id: 'stem_computing_robotics',
    name: 'STEM, Computing & Robotics',
    tagline: 'Artificial Intelligence, Space & Deep Tech',
    description: 'Pioneer cutting-edge computation, autonomous machines, space exploration, and cyber resilience via IITs, NITs, BITS, and direct technical polytechnic pipelines.',
    iconName: 'Cpu',
    accentColor: '#3b82f6',
    popularRoles: [
      { id: 'ai_engineer', title: 'Artificial Intelligence & ML Engineer', slug: 'ai-engineer' },
      { id: 'game_developer', title: 'Game Engine & Gameplay Programmer', slug: 'game-developer' },
      { id: 'cybersecurity_expert', title: 'Cyber Defense & Ethical Hacker', slug: 'cybersecurity-expert' },
      { id: 'robotics_engineer', title: 'Autonomous Robotics & Mechatronics Engineer', slug: 'robotics-engineer' },
      { id: 'isro_space_scientist', title: 'Aerospace & ISRO Space Scientist', slug: 'isro-space-scientist' },
      { id: 'quantum_engineer', title: 'Quantum Computing Research Scientist', slug: 'quantum-scientist' }
    ]
  },
  {
    id: 'life_sciences_medicine',
    name: 'Life Sciences, Medicine & Healthcare',
    tagline: 'Surgery, Genetics, Psychology & Clinical Care',
    description: 'Heal human and animal life, unlock molecular genetics, understand the human mind, and lead biotech revolutions via NEET, AIIMS, ICAR, and clinical residencies.',
    iconName: 'Activity',
    accentColor: '#059669',
    popularRoles: [
      { id: 'neurosurgeon_specialist', title: 'Neurosurgeon & Medical Specialist (MBBS/MS)', slug: 'neurosurgeon' },
      { id: 'clinical_psychologist', title: 'Clinical Neuropsychologist & Psychotherapist', slug: 'clinical-psychologist' },
      { id: 'biotech_entrepreneur', title: 'Biotechnologist & Genomics Researcher', slug: 'biotechnologist' },
      { id: 'wildlife_veterinarian', title: 'Wildlife Veterinarian & Conservation Surgeon', slug: 'wildlife-veterinarian' },
      { id: 'forensic_scientist', title: 'Forensic Medical & Ballistics Expert', slug: 'forensic-scientist' }
    ]
  },
  {
    id: 'commerce_finance_strategy',
    name: 'Commerce, Finance & Strategy',
    tagline: 'Investment Banking, Actuary & Capital Markets',
    description: 'Direct global capital, calculate risk, structure private equity deals, and audit multinational corporations through ICAI, IIM IPMAT, CFA, and Actuarial science.',
    iconName: 'TrendingUp',
    accentColor: '#d97706',
    popularRoles: [
      { id: 'investment_banker', title: 'Investment Banker & Private Equity Associate', slug: 'investment-banker' },
      { id: 'chartered_accountant', title: 'Chartered Accountant (CA - ICAI)', slug: 'chartered-accountant' },
      { id: 'actuary_risk_analyst', title: 'Certified Actuary & Financial Risk Model', slug: 'actuary' },
      { id: 'fintech_product_lead', title: 'FinTech Strategy & Algorithmic Trading Lead', slug: 'fintech-lead' },
      { id: 'management_consultant', title: 'Strategy & Management Consultant (MBB)', slug: 'management-consultant' }
    ]
  },
  {
    id: 'media_journalism_literature',
    name: 'Media, Journalism & Literature',
    tagline: 'Investigative Press, Authoring & Broadcasting',
    description: 'Investigate the truth, author groundbreaking literature, host influential podcasts, and curate brand communication through IIMC, ACJ, and university journalism schools.',
    iconName: 'BookOpen',
    accentColor: '#7c3aed',
    popularRoles: [
      { id: 'investigative_journalist', title: 'Investigative Broadcast & Print Journalist', slug: 'investigative-journalist' },
      { id: 'published_author', title: 'Author, Novelist & Creative Literary Writer', slug: 'published-author' },
      { id: 'podcast_showrunner', title: 'Digital Media Creator & Podcast Producer', slug: 'podcast-producer' },
      { id: 'public_relations_lead', title: 'Global Public Relations (PR) Director', slug: 'pr-director' }
    ]
  },
  {
    id: 'agriculture_wildlife_env',
    name: 'Agriculture, Wildlife & Environment',
    tagline: 'Agritech, Oceanography & Climate Action',
    description: 'Safeguard planetary biodiversity, engineer sustainable food security, and explore oceanic depths through ICAR AIEEA, IFoS, and Earth sciences.',
    iconName: 'Leaf',
    accentColor: '#16a34a',
    popularRoles: [
      { id: 'marine_biologist', title: 'Marine Biologist & Oceanographer', slug: 'marine-biologist' },
      { id: 'agritech_specialist', title: 'Precision Agritech & Hydroponics Engineer', slug: 'agritech-engineer' },
      { id: 'environmental_auditor', title: 'Climate Scientist & ESG Environmental Auditor', slug: 'environmental-scientist' },
      { id: 'wildlife_photographer', title: 'National Geographic Wildlife Documentarian', slug: 'wildlife-photographer' }
    ]
  },
  {
    id: 'vocational_trades_guilds',
    name: 'Vocational Trades, Tech & Guilds',
    tagline: 'Applied Engineering, Audio Tech & Precision Trades',
    description: 'Hands-on technical mastery, industrial robotics maintenance, live audio production, and specialized craftsmanship entering industry immediately or via lateral degree bridges.',
    iconName: 'Wrench',
    accentColor: '#ea580c',
    popularRoles: [
      { id: 'industrial_automation_tech', title: 'Industrial Robotics & Automation Specialist', slug: 'industrial-robotics' },
      { id: 'live_audio_engineer', title: 'Concert & Live Event Audio Production Engineer', slug: 'live-audio-engineer' },
      { id: 'drone_operator_technician', title: 'Commercial Drone Pilot & Mechatronics Technician', slug: 'drone-technician' },
      { id: 'precision_cnc_machinist', title: 'Precision Aerospace CNC Machining Specialist', slug: 'cnc-machinist' }
    ]
  }
];
