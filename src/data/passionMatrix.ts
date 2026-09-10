export interface PassionRouteOption {
  roleId: string;
  title: string;
  domainName: string;
  streamBadge: string;
  streamBadgeColor: string;
  primaryExam: string;
  durationYears: string;
  financialInvestment: string;
  competitionLevel: string;
  salaryTrajectory: {
    entryLpa: string;
    peakLpa: string;
  };
  tradeOffPros: string;
  tradeOffCons: string;
  corePhilosophy: string;
}

export interface PassionCluster {
  passionId: string;
  passionTitle: string;
  tagline: string;
  keywords: string[];
  iconName: string;
  summary: string;
  options: PassionRouteOption[];
}

export const PASSION_COMPARISON_MATRIX: PassionCluster[] = [
  {
    passionId: 'cars_motorsports',
    passionTitle: 'Cars, Automobiles & Speed',
    tagline: 'From Engineering EV Powertrains to Racing on the Track & Automotive Design',
    keywords: ['cars', 'car', 'automobile', 'automobiles', 'driving', 'racing', 'race', 'motorsport', 'vehicles', 'engine', 'engines', 'motors', 'ev', 'speed'],
    iconName: 'Car',
    summary: 'A passion for cars can lead to engineering next-gen electric vehicles, styling aerodynamic supercars, racing at 300 km/h, or mastering rapid vehicle fabrication.',
    options: [
      {
        roleId: 'mechanical_auto_engineer',
        title: 'Mechanical & Automobile Engineer',
        domainName: 'Engineering & Technology',
        streamBadge: '10+2 MPC -> B.Tech',
        streamBadgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
        primaryExam: 'JEE Main / Adv / State CET',
        durationYears: '4 Years',
        financialInvestment: 'Moderate (Govt Subsidized)',
        competitionLevel: 'Very High (Top Engineering Colleges)',
        salaryTrajectory: { entryLpa: '₹6L - ₹14L', peakLpa: '₹40L - ₹85L' },
        tradeOffPros: 'Highest job security across Tata/Tesla/Mahindra; direct eligibility for GATE PSUs (ISRO/DRDO).',
        tradeOffCons: 'Heavy mathematical thermodynamics and calculus equations during engineering degree.',
        corePhilosophy: 'Designs the powertrain, battery thermal management, and crash mechanics of real production vehicles.'
      },
      {
        roleId: 'architect_spatial_planner',
        title: 'Automotive & Industrial Designer',
        domainName: 'Design & Visual Arts',
        streamBadge: 'Any Stream / MPC -> B.Des',
        streamBadgeColor: 'bg-pink-100 text-pink-800 border-pink-200',
        primaryExam: 'UCEED / NID DAT',
        durationYears: '4 Years',
        financialInvestment: 'Moderate',
        competitionLevel: 'High (Visual Portfolio)',
        salaryTrajectory: { entryLpa: '₹7L - ₹15L', peakLpa: '₹35L - ₹75L' },
        tradeOffPros: 'Creative freedom to sculpt car silhouettes, interior cockpits, and concept clay prototypes.',
        tradeOffCons: 'Requires exceptional freehand sketching and 3D surface modeling skills (Alias/Rhino).',
        corePhilosophy: 'Shapes the aesthetic emotional appeal, ergonomics, and futuristic exterior styling of concept vehicles.'
      },
      {
        roleId: 'combat_sports_athlete',
        title: 'Professional Motorsport & Race Driver',
        domainName: 'Sports & Athletics',
        streamBadge: 'Vocational / Karting Guild',
        streamBadgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
        primaryExam: 'FMSCI National Championship Trials',
        durationYears: '3 to 5 Years',
        financialInvestment: 'Premium (High Sponsorship Dependent)',
        competitionLevel: 'Extreme (Sub-1% Podium Finish)',
        salaryTrajectory: { entryLpa: '₹5L - ₹12L (Sponsorships)', peakLpa: '₹50L - ₹2Cr+' },
        tradeOffPros: 'Pure adrenaline racing on international tracks (F4, GT3, Rally, Formula E) with global fame.',
        tradeOffCons: 'Requires private family backing or corporate sponsors to fund initial karting tire and engine costs.',
        corePhilosophy: 'Tests the extreme physical and mental limits of vehicle dynamics at high G-forces on race tracks.'
      },
      {
        roleId: 'polytechnic_junior_engineer',
        title: 'Automotive Master Technician / EV Specialist',
        domainName: 'Polytechnic & Vocational',
        streamBadge: '10th Pass -> 3-Yr Diploma / ITI',
        streamBadgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
        primaryExam: 'State POLYCET / Direct Guild',
        durationYears: '2 to 3 Years (Earliest Earning)',
        financialInvestment: 'Low (₹15,000 - ₹35,000 Total)',
        competitionLevel: 'Moderate (Practical Workshop)',
        salaryTrajectory: { entryLpa: '₹4.5L - ₹9L', peakLpa: '₹22L - ₹35L' },
        tradeOffPros: 'Fastest runway to employment with zero student debt; high avenue to launch an independent high-end performance garage.',
        tradeOffCons: 'Requires manual labor in workshop environments and subsequent lateral B.Tech upskilling for corporate management.',
        corePhilosophy: 'Directly tears down engines, diagnoses complex ECU sensors, and tunes electric battery packs.'
      }
    ]
  },
  {
    passionId: 'helping_healing_impact',
    passionTitle: 'Helping People, Saving Lives & Social Impact',
    tagline: 'From Emergency Trauma Surgery to District Governance & Mental Health',
    keywords: ['helping people', 'helping', 'help', 'saving lives', 'save lives', 'healing', 'health', 'doctor', 'care', 'social impact', 'service', 'medicine'],
    iconName: 'Heart',
    summary: 'Desire to serve humanity can be channeled through emergency clinical surgery, district governance, mental psychotherapy, or global non-profit direction.',
    options: [
      {
        roleId: 'mbbs_doctor',
        title: 'MBBS Doctor & Trauma Surgeon',
        domainName: 'Medical & Healthcare',
        streamBadge: '10+2 BiPC (PCB) -> MBBS',
        streamBadgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        primaryExam: 'NEET UG (Score 650+ for GMC)',
        durationYears: '5.5 Years + Residency',
        financialInvestment: 'Low (Govt GMCs Subsidized)',
        competitionLevel: 'Extreme (24+ Lakh Applicants)',
        salaryTrajectory: { entryLpa: '₹8.5L - ₹16L', peakLpa: '₹45L - ₹1.2Cr+' },
        tradeOffPros: 'Highest societal respect and immediate life-saving bedside clinical impact every single day.',
        tradeOffCons: 'Long training runway (5.5 yrs MBBS + 3 yrs MD/MS) and demanding overnight emergency on-call duties.',
        corePhilosophy: 'Cures complex organic diseases and performs surgical interventions directly inside the operating theatre.'
      },
      {
        roleId: 'civil_services_officer',
        title: 'Civil Services Officer (IAS / District Collector)',
        domainName: 'Public Policy & Governance',
        streamBadge: 'Any Degree -> UPSC CSE',
        streamBadgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
        primaryExam: 'UPSC CSE (Prelims + Mains + Interview)',
        durationYears: '3 to 4 Years (Grad + Prep)',
        financialInvestment: 'Low (Self Study / Subsidized)',
        competitionLevel: 'Extreme (0.01% IAS Selection)',
        salaryTrajectory: { entryLpa: '₹12L (Apex Perks + Quarters)', peakLpa: '₹30L + Cabinet Directorship' },
        tradeOffPros: 'Supreme administrative authority over entire districts, public welfare budgets, schools, and hospitals.',
        tradeOffCons: 'Unpredictable government transfers, political administrative scrutiny, and intense competitive entrance exam.',
        corePhilosophy: 'Builds public healthcare systems, eliminates rural poverty, and administers constitutional justice for millions.'
      },
      {
        roleId: 'clinical_psychologist',
        title: 'Clinical Psychologist & Mental Health Doctor',
        domainName: 'Psychology & Mental Health',
        streamBadge: 'Any Stream -> BA Psych -> M.Phil',
        streamBadgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
        primaryExam: 'CUET UG / PG + NIMHANS Entrance',
        durationYears: '5 Years',
        financialInvestment: 'Low (NIMHANS Stipend)',
        competitionLevel: 'Very High (RCI M.Phil Seats)',
        salaryTrajectory: { entryLpa: '₹5.5L - ₹11L', peakLpa: '₹25L - ₹50L' },
        tradeOffPros: 'High personal autonomy to establish independent therapy practice with zero emergency surgery overhead.',
        tradeOffCons: 'Requires intense emotional resilience and listening stamina to handle deep psychiatric trauma and depression.',
        corePhilosophy: 'Heals severe psychological trauma, depression, and cognitive disorders through evidence-based psychotherapy.'
      },
      {
        roleId: 'physiotherapist',
        title: 'Physiotherapist & Rehabilitation Doctor',
        domainName: 'Allied Health Sciences',
        streamBadge: '10+2 BiPC -> BPT',
        streamBadgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        primaryExam: 'State Allied Health CET / NEET',
        durationYears: '4.5 Years',
        financialInvestment: 'Low to Moderate',
        competitionLevel: 'Moderate',
        salaryTrajectory: { entryLpa: '₹4.5L - ₹9L', peakLpa: '₹20L - ₹38L' },
        tradeOffPros: 'Restores paralyzed stroke victims, amputees, and injured athletes back to full physical movement and mobility.',
        tradeOffCons: 'Physically active clinical profession requiring manual therapy stamina throughout the day.',
        corePhilosophy: 'Rebuilds neuromuscular mobility and alleviates chronic orthopedic pain without surgery.'
      }
    ]
  },
  {
    passionId: 'combat_defense_uniform',
    passionTitle: 'Combat, Bravery, Defense & the Uniform',
    tagline: 'From Fighter Cockpits & Commando Units to Combat Sports & Paramilitary Command',
    keywords: ['combat', 'fighting', 'fight', 'defense', 'army', 'soldier', 'bravery', 'uniform', 'war', 'special forces', 'air force', 'navy', 'police', 'martial arts'],
    iconName: 'Shield',
    summary: 'A passion for bravery, discipline, and physical combat can lead to commanding frontline military strike corps, flying fighter jets, or elite athletic combat rings.',
    options: [
      {
        roleId: 'iaf_fighter_pilot',
        title: 'Armed Forces Officer & Fighter Pilot (UPSC NDA)',
        domainName: 'Defense & Armed Forces',
        streamBadge: '10+2 MPC/Any -> NDA -> IMA / AFA',
        streamBadgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
        primaryExam: 'UPSC NDA (Written + 5-Day SSB)',
        durationYears: '4 Years (Full Military Academy)',
        financialInvestment: '100% Free (Govt Paid + Stipend)',
        competitionLevel: 'Extreme (0.08% Selection Rate)',
        salaryTrajectory: { entryLpa: '₹14L - ₹22L (Flying Pay + Perks)', peakLpa: '₹40L + Air Marshal Rank' },
        tradeOffPros: 'Highest national prestige: commissioned officer rank, supersonic fighter jet flight, and lifetime military honor.',
        tradeOffCons: 'Strict 5-day SSB psychological screening and demanding military discipline in high-stakes environments.',
        corePhilosophy: 'Commands tactical military operations, air defense squadrons, and naval warfare to protect sovereign integrity.'
      },
      {
        roleId: 'soldier_defense_forces',
        title: 'Frontline Agniveer Soldier / Para SF Commando',
        domainName: 'Defense Combat Forces',
        streamBadge: '10th / 12th Pass -> Army Rally',
        streamBadgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
        primaryExam: 'Army Agniveer CEE & 1.6km Physical Rally',
        durationYears: '6 Months (Fastest Entry)',
        financialInvestment: 'Free (Govt Provided Kit & Food)',
        competitionLevel: 'High Physical Competition',
        salaryTrajectory: { entryLpa: '₹5.5L + Seva Nidhi', peakLpa: '₹18L (Subedar Major)' },
        tradeOffPros: 'Direct frontline combat training right after 10th standard; eligibility for elite airborne Para Special Forces.',
        tradeOffCons: 'Requires peak physical fitness (1.6 km run in 5m30s, 10 pull-ups) and high physical combat risk.',
        corePhilosophy: 'Executes direct tactical frontline strikes, counter-insurgency operations, and mountain border patrols.'
      },
      {
        roleId: 'combat_sports_athlete',
        title: 'Professional Combat Sports Athlete (MMA / Boxing)',
        domainName: 'Sports & Martial Arts',
        streamBadge: 'Vocational / SAI Sports Hostel',
        streamBadgeColor: 'bg-red-100 text-red-800 border-red-200',
        primaryExam: 'State / National Federation Trials',
        durationYears: '3 to 5 Years',
        financialInvestment: 'Free (SAI Govt Scholarship)',
        competitionLevel: 'Extreme (Podium Medalists)',
        salaryTrajectory: { entryLpa: '₹5L - ₹12L (Govt Quota / Prizes)', peakLpa: '₹45L - ₹1.5Cr+' },
        tradeOffPros: 'Direct central government sports quota appointments (Railways/Police DSP) for national medalists + pro fight purses.',
        tradeOffCons: 'Demanding physical weight-cuts and high risk of sports impact injuries.',
        corePhilosophy: 'Masters martial arts striking and grappling inside competitive rings and Olympic podiums.'
      }
    ]
  },
  {
    passionId: 'storytelling_cinema_arts',
    passionTitle: 'Storytelling, Movies & Creative Media',
    tagline: 'From Feature Film Direction & Screenwriting to 3D CGI Animation & Journalism',
    keywords: ['storytelling', 'story', 'movies', 'cinema', 'writing', 'filmmaking', 'filmmaker', 'directing', 'director', 'acting', 'actor', 'scripts', 'creative'],
    iconName: 'Clapperboard',
    summary: 'A passion for compelling stories and visual media can be channeled into directing silver-screen blockbusters, acting, novel writing, or Hollywood CGI.',
    options: [
      {
        roleId: 'film_director',
        title: 'Film Director & Visionary Filmmaker',
        domainName: 'Film, Theatre & Performing Arts',
        streamBadge: 'Any Stream / HEC -> FTII / SRFTI',
        streamBadgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
        primaryExam: 'FTII / SRFTI JET Entrance Exam',
        durationYears: '3 to 4 Years',
        financialInvestment: 'Low (Govt FTII Subsidized)',
        competitionLevel: 'Extreme (Sub-1% Acceptance)',
        salaryTrajectory: { entryLpa: '₹4.5L - ₹9L (AD / Shorts)', peakLpa: '₹50L - ₹5Cr+ per Project' },
        tradeOffPros: 'Ultimate creative authority over cinema narratives, actors, cinematography, and OTT series.',
        tradeOffCons: 'Requires persevering through freelance project pitching and multi-year production development cycles.',
        corePhilosophy: 'Translates human emotions, societal drama, and visual metaphors onto the big screen.'
      },
      {
        roleId: 'animation_vfx_artist',
        title: '3D CGI & VFX Narrative Director',
        domainName: 'Design & Visual Arts',
        streamBadge: 'Any Stream / MPC -> B.Des',
        streamBadgeColor: 'bg-pink-100 text-pink-800 border-pink-200',
        primaryExam: 'UCEED / NID DAT / Portfolio',
        durationYears: '3 to 4 Years',
        financialInvestment: 'Moderate',
        competitionLevel: 'Moderate to High',
        salaryTrajectory: { entryLpa: '₹5L - ₹11L', peakLpa: '₹30L - ₹65L' },
        tradeOffPros: 'Brings impossible fantasy worlds, sci-fi creatures, and superhero blockbusters to life with high tech salaries.',
        tradeOffCons: 'Demands long hours in front of multi-screen computer workstations mastering complex 3D software.',
        corePhilosophy: 'Constructs immersive digital worlds, virtual reality cinematics, and photorealistic visual effects.'
      },
      {
        roleId: 'investigative_journalist',
        title: 'Investigative Journalist & Media Anchor',
        domainName: 'Media & Journalism',
        streamBadge: '10+2 Humanities -> IIMC / ACJ',
        streamBadgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
        primaryExam: 'CUET UG / IIMC Entrance Exam',
        durationYears: '3 to 4 Years',
        financialInvestment: 'Low',
        competitionLevel: 'High',
        salaryTrajectory: { entryLpa: '₹4.5L - ₹9L', peakLpa: '₹22L - ₹48L' },
        tradeOffPros: 'Investigates systemic corruption, influences national policy discourse, and breaks defining national exclusives.',
        tradeOffCons: 'Tight breaking-news deadlines and legal pressure from high-stakes investigative reportage.',
        corePhilosophy: 'Uncovers documented truths and crafts compelling non-fiction ground reporting for public accountability.'
      }
    ]
  },
  {
    passionId: 'money_finance_business',
    passionTitle: 'Money, Finance, Markets & Business Strategy',
    tagline: 'From Statutory Corporate Audits to Wall Street M&A & Mathematical Risk Modeling',
    keywords: ['money', 'finance', 'wealth', 'stock market', 'trading', 'investment', 'business', 'accounting', 'stocks', 'ca', 'banking'],
    iconName: 'TrendingUp',
    summary: 'A passion for capital allocation and financial wealth can lead to auditing Fortune 500 balance sheets, engineering multi-billion dollar mergers, or pricing actuarial risk.',
    options: [
      {
        roleId: 'chartered_accountant',
        title: 'Chartered Accountant (CA & Auditor)',
        domainName: 'Commerce & Audit',
        streamBadge: '10+2 MEC/CEC -> ICAI Curriculum',
        streamBadgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
        primaryExam: 'ICAI Foundation -> Inter -> Final',
        durationYears: '4.5 Years (With Articleship)',
        financialInvestment: 'Low (Course cost under ₹75k)',
        competitionLevel: 'Extreme (Passing rate 8-15%)',
        salaryTrajectory: { entryLpa: '₹10L - ₹22L', peakLpa: '₹50L - ₹1.5Cr+' },
        tradeOffPros: 'Sole legal statutory authority to audit and sign corporate financial statements in India; high Big 4 demand.',
        tradeOffCons: 'Demands intense self-study discipline to clear tough professional board papers alongside articleship.',
        corePhilosophy: 'Guarantees the legal integrity, corporate tax strategy, and audit compliance of business balance sheets.'
      },
      {
        roleId: 'investment_banker',
        title: 'Investment Banker & Private Equity Analyst',
        domainName: 'High Finance & M&A',
        streamBadge: 'MEC / MPC -> Top College -> IIM MBA',
        streamBadgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
        primaryExam: 'CUET UG (SRCC) -> CAT (99+%ile)',
        durationYears: '5 Years',
        financialInvestment: 'High (IIM MBA Loan)',
        competitionLevel: 'Extreme (Top 0.5% CAT percentile)',
        salaryTrajectory: { entryLpa: '₹18L - ₹45L', peakLpa: '₹1Cr - ₹3Cr+' },
        tradeOffPros: 'Highest initial entry-level compensation in the private sector + multi-million dollar IPO deal bonuses.',
        tradeOffCons: 'Demanding 75-hour workweeks during high-stakes transaction deal closings.',
        corePhilosophy: 'Structures multi-billion dollar corporate acquisitions, tech IPO listings, and venture buyouts.'
      },
      {
        roleId: 'actuary_risk_modeler',
        title: 'Actuary & Quantitative Risk Modeler',
        domainName: 'Mathematical Risk & Insurance',
        streamBadge: '10+2 MPC / Maths -> IAI Papers',
        streamBadgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
        primaryExam: 'ACET + 13 IAI Actuarial Papers',
        durationYears: '3.5 to 5 Years',
        financialInvestment: 'Low',
        competitionLevel: 'Very High (Advanced Mathematics)',
        salaryTrajectory: { entryLpa: '₹8L - ₹16L', peakLpa: '₹40L - ₹90L+' },
        tradeOffPros: 'Direct salary raises for every single paper cleared; massive scarcity of Fellows in India (~500 active Fellows).',
        tradeOffCons: 'Requires supreme mathematical probability and statistical stochastic calculus capabilities.',
        corePhilosophy: 'Mathematically calculates survival probabilities, prices catastrophe bonds, and hedges pension solvency.'
      }
    ]
  }
];

export function findPassionMatches(query: string): PassionCluster | null {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return null;

  for (const cluster of PASSION_COMPARISON_MATRIX) {
    if (cluster.keywords.some(kw => normalized.includes(kw) || kw.includes(normalized))) {
      return cluster;
    }
  }
  return null;
}
