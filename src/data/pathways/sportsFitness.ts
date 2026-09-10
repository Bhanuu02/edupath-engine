import { CareerRole } from '../../types/pathway';

const STREAM_THEMES = {
  VOCATIONAL_GUILD: { primary: '#f97316', border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-700', glow: 'shadow-orange-500/20' },
  HEC: { primary: '#a855f7', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-700', glow: 'shadow-purple-500/20' },
  BiPC: { primary: '#10b981', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-700', glow: 'shadow-emerald-500/20' },
  MEC_CEC: { primary: '#f59e0b', border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-700', glow: 'shadow-amber-500/20' }
};

export const SPORTS_FITNESS_PATHWAYS: Record<string, CareerRole> = {
  // 1. COMBAT SPORTS ATHLETE (MMA, BOXING, WRESTLING)
  combat_sports_athlete: {
    id: 'combat_sports_athlete',
    title: 'Combat Sports Athlete (MMA, Boxing, Wrestling & Olympic Martial Arts)',
    slug: 'combat-sports-athlete',
    domainId: 'sports_fitness_esports',
    domainName: 'Sports, Athletics & Fitness',
    shortDescription: 'Compete in national wrestling championships, Olympic boxing tournaments, professional MMA promotions (UFC / ONE Championship), and earn central sports quota jobs.',
    holisticInsight: 'Combat sports demand supreme cardiovascular conditioning, mental resilience, weight management, and martial discipline. Accessible via 10th standard sports hostel entry (SAI - Sports Authority of India), state wrestling akharas, boxing federations, and university sports degrees (LNIPE Gwalior B.P.Ed).',
    recommendedDegreeBranch: 'B.P.Ed (Bachelor of Physical Education) / Sports Science Degree (LNIPE / SAI NIS Patiala)',
    iconName: 'Trophy',
    tags: ['Boxing', 'Wrestling', 'MMA', 'Olympics', 'SAI', 'Martial Arts', 'Fitness', 'Sports Quota'],
    marketDemand: 'HIGH',
    streams: {
      VOCATIONAL_GUILD: {
        streamType: 'VOCATIONAL_GUILD',
        streamName: 'Direct Federation Academy & SAI Sports Hostel Track',
        streamShortDesc: '10th Pass -> SAI Sports Hostel / Wrestling Akhara -> National Championships -> Professional Combat / Indian Railways Sports Quota',
        badgeLabel: 'Direct Combat & Championship Track',
        themeColor: STREAM_THEMES.VOCATIONAL_GUILD,
        approachPhilosophy: 'Direct daily training in boxing gyms, wrestling mats (akharas), and MMA dojos, competing in state and national ranking tournaments to secure international podiums and central government sports quota appointments (Railways, Police, Armed Forces).',
        branchSelectionStrategy: 'Pass 10th and join a SAI (Sports Authority of India) National Center of Excellence or registered state boxing/wrestling association.',
        metrics: { timeToFirstJobYears: 3, financialInvestment: 'FREE_SCHOLARSHIP', competitionLevel: 'EXTREME', flexibilityScore: 8, practicalToTheoryRatio: 10 },
        pros: ['Direct government job security (Indian Railways, ONGC, State Police DSP/Inspector ranks) for national medalists under sports quota', 'Massive commercial prize money and sponsorship endorsements in professional MMA promotions (ONE Championship, Matrix Fight Night)'],
        cons: ['High risk of physical contact injuries requiring disciplined recovery and medical physiotherapy oversight'],
        entryJobRoles: ['National Combat Sports Athlete', 'Sports Quota Officer (Indian Railways / Defense)', 'Combat Striking / Grappling Coach', 'Martial Arts Academy Director'],
        fiveYearTrajectory: 'Olympic / Asian Games Medalist / International Pro Champion (₹15L - ₹60L+ LPA).',
        salarySpectrumLpa: { entryMin: 5.0, entryMax: 12.0, experiencedPeak: 45.0 },
        lateralSwitches: [
          {
            id: 'combat_to_coach',
            title: 'NIS Diploma in Sports Coaching (Boxing / Wrestling)',
            fromStage: 'After National Medal Participation',
            toTarget: 'Chief Combat Sports Coach (SAI / State Sports Academies)',
            bridgeExamOrMechanism: 'NS NIS Patiala 1-Year Diploma Entrance',
            description: 'Transition from active competitive fighting to official national coaching and athlete development.',
            durationAdjustment: '1 Year',
            keyBenefit: 'Permanent government sports coaching appointment with full pension.'
          }
        ],
        milestones: [
          {
            id: 'com_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Pass & District / State Championship Medal',
            subtitle: 'Daily training in wrestling akharas, boxing clubs, or taekwondo/judo dojos',
            description: 'Pass 10th standard while competing in School Games Federation of India (SGFI) state tournaments.',
            mandatoryEligibility: ['Pass 10th standard + District / State medal'],
            examGateways: [],
            recommendedInstitutions: ['SAI Training Centres (STC) & State Sports Hostels'],
            skillsToAcquire: ['Cardiovascular Stamina (5km in < 20 mins)', 'Combat Footwork & Reflexes', 'Strict Weight-Cut Nutrition'],
            estimatedCostRange: 'Free (Govt Sports Hostel Allotment)',
            keyActionTip: 'Earn an SGFI or State Championship medal to qualify for central SAI sports hostel scholarship.'
          },
          {
            id: 'com_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Any Stream + Khelo India Games',
            title: '10+2 Intermediate (Any Stream) + Khelo India Youth Games',
            subtitle: 'National ranking tournaments, junior nationals, and SAI National Centre of Excellence',
            durationYears: '2 Years',
            description: 'Compete in Khelo India Youth Games and Junior National Championships to earn cash scholarship of ₹5L/year from Ministry of Youth Affairs.',
            mandatoryEligibility: ['Selected for Junior National / Khelo India squad'],
            examGateways: [],
            recommendedInstitutions: ['SAI National Centres of Excellence (NCOE Rohtak, Patiala, Sonipat, Bengaluru)'],
            skillsToAcquire: ['Advanced Tactical Fight IQ', 'Sports Biomechanics & Video Analysis', 'Injury Taping & Recovery'],
            estimatedCostRange: 'Fully Funded by Govt (Out-of-Pocket Allowance ₹10,000/month)',
            keyActionTip: 'Medal in Khelo India Youth Games to guarantee direct recruitment into Indian Railways / Services sports trials.'
          },
          {
            id: 'com_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Physical Education & Sports Degree',
            title: 'B.P.Ed (Bachelor of Physical Education) / Sports Science',
            subtitle: 'Complete university degree under sports exemption while competing at Senior National level',
            durationYears: '3 Years',
            description: 'Study sports pedagogy, nutrition, kinesiology, and exercise physiology while representing university at All India Inter-University games.',
            branchOrSpecializationToChoose: 'Choose: B.P.Ed from LNIPE Gwalior or accredited state sports university.',
            mandatoryEligibility: ['Participation in state / national tournaments + 10+2 pass'],
            examGateways: [],
            recommendedInstitutions: ['Lakshmibai National Institute of Physical Education (LNIPE Gwalior), Netaji Subhas National Institute of Sports (NIS Patiala)'],
            skillsToAcquire: ['Kinesiology & Periodized Training', 'Sports Psychology & Mental Toughness', 'Weight-Cutting Safety Protocols'],
            estimatedCostRange: '₹15,000 - ₹45,000 (Govt Subsidized)',
            keyActionTip: 'Win Senior National Championship medal to receive direct gazetted sports officer appointment.'
          },
          {
            id: 'com_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Pro Championship & National Pride',
            title: 'International Combat Athlete / National Sports Director',
            subtitle: 'Representing India at Commonwealth Games, Asian Games, Olympics, or Pro MMA Fight Leagues',
            description: 'Compete on international combat stages and direct youth sports high-performance centers.',
            mandatoryEligibility: ['Senior National / International Medalist status'],
            examGateways: [],
            recommendedInstitutions: ['Indian Boxing Federation, Wrestling Federation of India, Matrix Fight Night (MFN), ONE Championship'],
            skillsToAcquire: ['Sponsorship Contract Negotiation', 'High-Altitude Hypoxic Conditioning'],
            estimatedCostRange: 'Zero (High Tournament Prizes & Govt Cash Rewards)',
            keyActionTip: 'Build a private combat sports academy brand to train the next generation of champions.'
          }
        ]
      }
    }
  },

  // 2. HIGH-PERFORMANCE STRENGTH & CONDITIONING COACH
  fitness_strength_coach: {
    id: 'fitness_strength_coach',
    title: 'High-Performance Strength & Conditioning Coach (CSCS / Olympic Squads)',
    slug: 'strength-conditioning-coach',
    domainId: 'sports_fitness_esports',
    domainName: 'Sports, Athletics & Fitness',
    shortDescription: 'Program athletic power, VO2 max endurance, sprint speed, and injury prevention for elite cricket franchises (IPL), Olympic athletes, and celebrity fitness clients.',
    holisticInsight: 'Strength and conditioning is a precise physiological science, combining exercise biochemistry, force-velocity profiling, velocity-based training (VBT), and athletic periodization. Accessible via 10+2 Science/Any Stream -> B.Sc Sports Science / B.P.Ed -> CSCS (Certified Strength & Conditioning Specialist) -> IPL/SAI athletic teams.',
    recommendedDegreeBranch: 'B.Sc in Sports & Exercise Science or B.P.Ed -> CSCS (NSCA USA) / ASCA Certification',
    iconName: 'Trophy',
    tags: ['Fitness', 'Strength Coach', 'CSCS', 'IPL', 'SAI', 'Athletic Performance', 'Sports Science', 'Nutrition'],
    marketDemand: 'HIGH',
    streams: {
      BiPC: {
        streamType: 'BiPC',
        streamName: '10+2 BiPC / Science to B.Sc Sports Science -> CSCS Olympic Performance Track',
        streamShortDesc: '10+2 Science -> B.Sc Sports & Exercise Science -> CSCS Certification -> Head S&C Coach (IPL / BCCI / SAI)',
        badgeLabel: 'Athletic Science & High-Performance Track',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Master muscular physiology, GPS athlete tracking (Catapult), velocity-based barbell training, and metabolic conditioning in elite sports institutions.',
        branchSelectionStrategy: 'In 10+2, study biology/sports. Pursue B.Sc Sports Science from premier sports universities (CSS Chennai, Manipal, National Sports University).',
        metrics: { timeToFirstJobYears: 3.5, financialInvestment: 'LOW', competitionLevel: 'MODERATE', flexibilityScore: 10, practicalToTheoryRatio: 10 },
        pros: ['High international demand across IPL, ISL, Pro Kabaddi leagues, and corporate luxury athletic gyms with high hourly consulting fees (₹3,000 - ₹8,000/hr)', 'Direct integration with top orthopedic surgeons and professional athlete management agencies'],
        cons: ['Requires continuous practical lifting mastery, early morning athletic training schedules, and team travel'],
        entryJobRoles: ['Assistant S&C Coach (Sports Academy)', 'Performance Data Analyst', 'Elite Personal Conditioning Coach', 'Rehab Conditioning Specialist'],
        fiveYearTrajectory: 'Head Strength & Conditioning Coach (IPL Franchise / National Olympic Team) (₹18L - ₹48L LPA).',
        salarySpectrumLpa: { entryMin: 5.5, entryMax: 11.0, experiencedPeak: 38.0 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'fit_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board Science & Gym Foundation',
            subtitle: 'Foundation in biology and personal physical fitness training',
            description: 'Pass 10th standard with strong health and biological science interest.',
            mandatoryEligibility: ['Pass 10th with min 50%'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Barbell Squat / Deadlift Form', 'Human Muscular Anatomy Basics'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Learn foundational compound barbell lifting mechanics under verified certified trainers.'
          },
          {
            id: 'fit_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 Intermediate (BiPC / Any)',
            title: '10+2 Intermediate in BiPC or Any Stream + Sports Elective',
            subtitle: 'Human energy systems (ATP-PC, Glycolytic, Oxidative), nutrition, and biomechanics',
            durationYears: '2 Years',
            description: 'Complete 10+2 while preparing for entrance exams into National Sports University and premier sports science colleges.',
            mandatoryEligibility: ['10+2 pass with min 50% aggregate'],
            examGateways: ['CUET_UG'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Nutritional Macro Calculations', 'Aerobic vs Anaerobic Physiology'],
            estimatedCostRange: '₹20,000 - ₹50,000',
            keyActionTip: 'Earn introductory CPR / AED and Level-1 fitness instructor certifications.'
          },
          {
            id: 'fit_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Sports Science Degree & CSCS',
            title: 'B.Sc in Sports & Exercise Science + NSCA CSCS Certification',
            subtitle: 'Force plate analysis, velocity-based training (VBT), linear speed mechanics, and periodization',
            durationYears: '3 Years',
            description: 'Learn under Olympic sport scientists: analyze Catapult GPS telemetry, conduct VO2 max lactate testing, and clear the NSCA CSCS exam.',
            branchOrSpecializationToChoose: 'Choose: B.Sc Sports Science / Exercise Physiology from accredited university.',
            mandatoryEligibility: ['CUET / University sports entrance rank'],
            examGateways: [],
            recommendedInstitutions: ['Center for Sports Science (SRMC Chennai), National Sports University (Imphal), Manipal College of Health Professions'],
            skillsToAcquire: ['Catapult GPS Athlete Load Monitoring', 'Force Plate Jump Profiling', 'Olympic Weightlifting Technique (Snatch/Clean & Jerk)', 'Periodization Program Design'],
            estimatedCostRange: '₹1.5L - ₹4.5L',
            keyActionTip: 'Clear the NSCA Certified Strength and Conditioning Specialist (CSCS) exam in final year.'
          },
          {
            id: 'fit_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Elite High-Performance Leadership',
            title: 'Head of High Performance / Chief S&C Coach',
            subtitle: 'Managing physical preparation and load management for IPL cricket squads, Olympic athletes, and national teams',
            description: 'Direct injury prevention, speed development, and strength conditioning protocols for top athletic franchises.',
            mandatoryEligibility: ['B.Sc Sports Science + CSCS / ASCA Level 2'],
            examGateways: [],
            recommendedInstitutions: ['BCCI National Cricket Academy (NCA Bengaluru), Inspire Institute of Sport (IIS Vijayanagar), IPL Franchises (MI, CSK, RCB)'],
            skillsToAcquire: ['Elite Team Cultural Leadership', 'Return-to-Play Concussion & Muscle Strain Integration'],
            estimatedCostRange: 'Zero (High Performance Sports Retainer)',
            keyActionTip: 'Publish athletic performance case studies and velocity-based training data insights.'
          }
        ]
      }
    }
  }
};
