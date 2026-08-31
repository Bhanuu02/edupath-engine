import { CareerRole } from '../../types/pathway';

const STREAM_THEMES = {
  MPC: { primary: '#3b82f6', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400', glow: 'shadow-blue-500/20' },
  BiPC: { primary: '#10b981', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  MEC_CEC: { primary: '#f59e0b', border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400', glow: 'shadow-amber-500/20' },
  HEC: { primary: '#a855f7', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400', glow: 'shadow-purple-500/20' },
  POLYTECHNIC: { primary: '#06b6d4', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
  VOCATIONAL_GUILD: { primary: '#f43f5e', border: 'border-rose-500/30', bg: 'bg-rose-500/10', text: 'text-rose-400', glow: 'shadow-rose-500/20' }
};

export const CREATIVE_ARTS_PATHWAYS: Record<string, CareerRole> = {
  music_producer: {
    id: 'music_producer',
    title: 'Music Producer, Composer & Audio Architect',
    slug: 'music-producer',
    domainId: 'film_theatre_arts',
    domainName: 'Film, Theatre & Performing Arts',
    shortDescription: 'Compose film scores, produce hit commercial records, engineer spatial audio, and craft sonic identities for cinema, games, and streaming.',
    holisticInsight: 'Music production blends acoustic science with artistic soul. You can enter via MPC (sound physics/acoustics/DSP), HEC (classical music theory & composition), BiPC (psychoacoustics & music therapy), Polytechnic (audio studio diploma), or direct digital audio workstation (DAW) music guilds.',
    iconName: 'Music',
    tags: ['Music', 'Composer', 'Audio Engineering', 'DAW', 'A.R. Rahman', 'Film Scoring'],
    marketDemand: 'HIGH',
    streams: {
      HEC: {
        streamType: 'HEC',
        streamName: 'Classical Indian & Western Composition Route',
        streamShortDesc: 'Musicology, Raag Shastra, Orchestration & KM Music Conservatory',
        badgeLabel: 'Classical Musicology & Orchestration',
        themeColor: STREAM_THEMES.HEC,
        approachPhilosophy: 'Deep training in melodic raagas, harmonic counterpoint, Western orchestral arrangement, and music theory leading to prestigious conservatories (KM Music, Bhatkhande, Trinity).',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 9, practicalToTheoryRatio: 9 },
        pros: ['Deep melodic foundation enables composing multi-genre film soundtracks and orchestral scores', 'Direct eligibility for international conservatory degrees (Berklee, KM Music, Trinity)'],
        cons: ['Requires dedicated daily instrument / vocal riyaaz alongside academic studies'],
        entryJobRoles: ['Assistant Film Composer', 'Song Arranger', 'Session Keyboardist / Guitarist', 'Jingle Composer'],
        fiveYearTrajectory: 'Lead Film Music Director / Hit Record Producer (₹20L - ₹1.5Cr+ per film).',
        salarySpectrumLpa: { entryMin: 4.5, entryMax: 10, experiencedPeak: 95 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'mus_hec_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & Instrument Visharad / Trinity Grades',
            subtitle: 'Clear Grade 5+ in Piano/Guitar or Carnatic/Hindustani classical training',
            description: 'Pass 10th standard while building classical instrumental or vocal foundations.',
            mandatoryEligibility: ['Pass 10th Board', 'Basic music literacy'],
            examGateways: [],
            recommendedInstitutions: ['Trinity College London Exam Centres / Gandharva Mahavidyalaya'],
            skillsToAcquire: ['Sight Reading Sheet Music', 'Scale & Chord Theory', 'Ear Training'],
            estimatedCostRange: 'Nominal',
            keyActionTip: 'Learn basic keyboard skills; piano layout is the foundation of modern digital composition.'
          },
          {
            id: 'mus_hec_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 HEC',
            title: '10+2 Intermediate HEC with Music Electives',
            subtitle: 'Study literature, poetry, and music history',
            durationYears: '2 Years',
            description: 'Master lyric prosody, poetic meter, and cultural storytelling while setting up home studio DAW.',
            mandatoryEligibility: ['10+2 Arts/Humanities with min 50%'],
            examGateways: ['KM_MUSIC_AUDITION', 'BHATKHANDE_MUSIC', 'CUET_UG'],
            recommendedInstitutions: ['KM Music Conservatory (Chennai)', 'Junior Colleges with Music Departments'],
            skillsToAcquire: ['DAW Composition (Logic Pro / Ableton)', 'MIDI Orchestration', 'Microphone Techniques'],
            estimatedCostRange: '₹30,000 - ₹90,000',
            keyActionTip: 'Prepare 2 original compositions for conservatory audition screenings.'
          },
          {
            id: 'mus_hec_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Conservatory Degree',
            title: 'B.A. / B.Mus in Music Composition & Sound Production',
            subtitle: 'Orchestral arrangement, film scoring, synthesizers, and studio recording',
            durationYears: '3 Years',
            description: 'Study under master composers, scoring live strings, brass, and choral ensembles for university films.',
            mandatoryEligibility: ['Conservatory audition clearing'],
            examGateways: [],
            recommendedInstitutions: ['KM Music Conservatory Chennai', 'Berklee India Exchange', 'Whistling Woods Music Department'],
            skillsToAcquire: ['Film Score Sync to Picture', 'Surround Sound Mixing (Dolby Atmos)', 'Vocal Tuning & Production'],
            estimatedCostRange: '₹3L - ₹10L',
            keyActionTip: 'Score at least 5 student short films to build a diverse soundtrack portfolio.'
          },
          {
            id: 'mus_hec_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Film Score Composer & Independent Record Producer',
            subtitle: 'Scoring major theatrical films, OTT series, and global streaming releases',
            description: 'Produce chart-topping commercial tracks and score cinematic film soundtracks.',
            mandatoryEligibility: ['Demonstrated sonic signature and hit streaming catalog'],
            examGateways: [],
            recommendedInstitutions: ['Major Music Labels (T-Series, Sony Music, Universal Music) & Film Studios'],
            skillsToAcquire: ['Master Rights & Music Publishing Royalties (IPRS)', 'Orchestra Conducting'],
            estimatedCostRange: 'Zero (High Royalty Stream)',
            keyActionTip: 'Register all original tracks with IPRS (Indian Performing Right Society) to secure perpetual royalties.'
          }
        ]
      },
      MPC: {
        streamType: 'MPC',
        streamName: 'Acoustic Physics & Digital Sound Engineering Route',
        streamShortDesc: 'Wave Physics, DSP, Dolby Atmos Spatial Audio & FTII Sound Recording',
        badgeLabel: 'Audio DSP & Sound Engineering',
        themeColor: STREAM_THEMES.MPC,
        approachPhilosophy: 'Master sound wave propagation, studio acoustic design, Digital Signal Processing (DSP), and spatial audio to become a world-class mixing engineer and music technologist.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'HIGH', flexibilityScore: 9, practicalToTheoryRatio: 8 },
        pros: ['Deep physics mastery makes clearing FTII Sound Recording entrance effortless', 'High international demand in Dolby Atmos spatial audio mixing, gaming audio, and audio software DSP'],
        cons: ['Requires balancing rigorous science studies with creative music creation'],
        entryJobRoles: ['Mix & Mastering Engineer', 'Spatial Audio Specialist', 'Game Audio Programmer', 'Recording Studio Engineer'],
        fiveYearTrajectory: 'Chief Sound Designer / Grammy/National Award Sound Engineer (₹25L - ₹1Cr+).',
        salarySpectrumLpa: { entryMin: 5, entryMax: 12, experiencedPeak: 85 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'mus_mpc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Physics & Sound Acoustics',
            subtitle: 'Study wave mechanics and digital audio basics',
            description: 'Pass 10th board with high science scores and interest in sound technology.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Sound Wave Frequencies & Decibels', 'Audio Interface Basics'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Learn parametric equalization and frequency spectrum analysis.'
          },
          {
            id: 'mus_mpc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 MPC',
            title: '10+2 Intermediate MPC (Mandatory Physics for FTII Sound)',
            subtitle: 'Wave optics, alternating current, acoustics, and calculus',
            durationYears: '2 Years',
            description: 'Master physics of sound and electromagnetic transducers (microphones, speakers).',
            mandatoryEligibility: ['10+2 PCM pass with min 55%'],
            examGateways: ['FTII_JET', 'JEE_MAIN'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Studio Acoustic Room Treatment', 'ProTools / Nuendo Signal Routing'],
            estimatedCostRange: '₹40,000 - ₹1.2L',
            keyActionTip: 'FTII Sound Recording requires Physics in 10+2—maintain strong physics fundamentals.'
          },
          {
            id: 'mus_mpc_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Premier Degree / Diploma',
            title: '3-Year PG Diploma in Sound Recording & Sound Design (FTII / SRFTI)',
            subtitle: 'Celluloid multi-track recording, dialogue dubbing, Foley, and final 7.1.4 Dolby Atmos film mixing',
            durationYears: '3 Years',
            description: 'Train on multi-million dollar SSL and Neve consoles mixing full-scale cinema productions.',
            mandatoryEligibility: ['Selection via FTII JET Sound Recording wing'],
            examGateways: ['FTII_JET'],
            recommendedInstitutions: ['FTII Pune (Sound Recording Wing)', 'SRFTI Kolkata'],
            skillsToAcquire: ['Analog Console Summing', 'Dolby Atmos Spatial Panning', 'Foley Art & Field Recording'],
            estimatedCostRange: '₹1.5L - ₹3.5L (Govt Subsidized)',
            keyActionTip: 'Mix sound for as many short film projects as possible across editing and cinematography departments.'
          },
          {
            id: 'mus_mpc_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Master Audio Engineer & Music Producer',
            subtitle: 'Mixing blockbuster film scores and chart-topping international albums',
            description: 'Deliver the final sonic mix for theatrical releases and streaming masters.',
            mandatoryEligibility: ['Award-winning portfolio of pristine audio mixes'],
            examGateways: [],
            recommendedInstitutions: ['Top Recording Studios (YRF Studios, AR Studios, Abbey Road India)'],
            skillsToAcquire: ['Mastering for Global Streaming Standards (LUFS)', 'Acoustic Architecture Consulting'],
            estimatedCostRange: 'Zero (Earning Phase)',
            keyActionTip: 'Build a private acoustically treated mix suite for independent mixing contracts.'
          }
        ]
      },
      POLYTECHNIC: {
        streamType: 'POLYTECHNIC',
        streamName: '3-Year Diploma in Sound Engineering & Live Audio Route',
        streamShortDesc: 'Direct Studio Console & Live Concert Audio Rigging via POLYCET',
        badgeLabel: 'Live Concert & Studio Audio Master',
        themeColor: STREAM_THEMES.POLYTECHNIC,
        approachPhilosophy: 'Direct hands-on mastery of live concert line arrays, digital mixing consoles (Yamaha/Digico), studio cabling, and broadcast sound right after 10th.',
        metrics: { timeToFirstJobYears: 3, financialInvestment: 'LOW', competitionLevel: 'MODERATE', flexibilityScore: 8, practicalToTheoryRatio: 10 },
        pros: ['Immediate employment in high-paying live music concert tours, corporate festivals, and recording studios', 'Very affordable government polytechnic fees'],
        cons: ['Physically demanding live event setups with late-night schedules'],
        entryJobRoles: ['Live Sound FOH Engineer', 'Studio Assistant Engineer', 'Broadcast Sound Tech', 'Stage Audio Monitor Engineer'],
        fiveYearTrajectory: 'Chief Touring Sound Engineer for Global Music Artists (₹18L - ₹60L+).',
        salarySpectrumLpa: { entryMin: 3.5, entryMax: 7.5, experiencedPeak: 55 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'mus_poly_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & POLYCET Entrance',
            subtitle: 'Secure government diploma seat in sound or electronics',
            description: 'Pass 10th board and clear State POLYCET.',
            mandatoryEligibility: ['10th Pass with min 35%'],
            examGateways: ['POLYCET_DIPLOMA'],
            recommendedInstitutions: ['State Polytechnic Colleges'],
            skillsToAcquire: ['Basic Electronics & Soldering', 'Audio Cable Types (XLR, TRS, RCA)'],
            estimatedCostRange: '₹500',
            keyActionTip: 'Learn how to solder custom audio cables and balance audio signals.'
          },
          {
            id: 'mus_poly_2', phase: 'PHASE_1_STREAM', phaseLabel: '3-Year Diploma',
            title: '3-Year Diploma in Sound Recording & Engineering',
            subtitle: 'Digital consoles, microphone polar patterns, acoustic measurements, and DAW software',
            durationYears: '3 Years',
            description: 'Spend 6 semesters operating concert sound gear, line arrays, wireless transmitters, and digital studio DAWs.',
            mandatoryEligibility: ['POLYCET seat allotment'],
            examGateways: [],
            recommendedInstitutions: ['Govt Polytechnic for Film & Audio Tech'],
            skillsToAcquire: ['Live FOH (Front of House) Mixing', 'Feedback Elimination', 'Wireless Frequency Coordination'],
            estimatedCostRange: '₹15,000 - ₹35,000 total',
            keyActionTip: 'Work as freelance stage hand for music festivals (Sunburn, NH7 Weekender, Lollapalooza) during breaks.'
          },
          {
            id: 'mus_poly_3', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Lead Live Concert Sound Engineer & Studio Producer',
            subtitle: 'Touring with headline bands and producing independent music records',
            description: 'Manage 50,000+ audience concert sound acoustics and produce music in private studio.',
            mandatoryEligibility: ['Impeccable live audio reputation and zero feedback record'],
            examGateways: [],
            recommendedInstitutions: ['Concert Touring Companies, Artist Management Agencies & Studios'],
            skillsToAcquire: ['Stadium Array DSP Tuning', 'Multi-Track Live Concert Recording'],
            estimatedCostRange: 'Zero (Earning Phase)',
            keyActionTip: 'Live sound engineers with studio production skills double their annual earning potential.'
          }
        ]
      },
      BiPC: {
        streamType: 'BiPC',
        streamName: 'Psychoacoustics & Music Therapy Route',
        streamShortDesc: 'Neurological Audio, Binaural Beats, Sound Healing & Bio-Musicology',
        badgeLabel: 'Music Therapy & Psychoacoustics',
        themeColor: STREAM_THEMES.BiPC,
        approachPhilosophy: 'Harness the neuroscience of sound, auditory cortex frequencies, binaural brain entrainment, and medical music therapy to compose therapeutic soundscapes.',
        metrics: { timeToFirstJobYears: 4, financialInvestment: 'MODERATE', competitionLevel: 'LOW', flexibilityScore: 8, practicalToTheoryRatio: 8 },
        pros: ['Rapidly expanding global wellness and mental health audio app market (Calm, Headspace, Endel)', 'Unique clinical medical career blending healthcare with musical artistry'],
        cons: ['Niche specialty requiring overseas or specialized post-graduate clinical credentials'],
        entryJobRoles: ['Clinical Music Therapist', 'Psychoacoustic Sound Designer', 'Audio Wellness Producer'],
        fiveYearTrajectory: 'Lead Sound Wellness Architect / Clinical Music Therapy Director (₹15L - ₹60L+).',
        salarySpectrumLpa: { entryMin: 4.5, entryMax: 9, experiencedPeak: 60 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'mus_bipc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Biology & Music',
            subtitle: 'Study biology while learning musical instruments',
            description: 'Pass 10th standard with enthusiasm for medical science and music.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Basic Human Anatomy', 'Vocal/Instrumental Practice'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Read Oliver Sacks’ "Musicophilia: Tales of Music and the Brain".'
          },
          {
            id: 'mus_bipc_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 BiPC',
            title: '10+2 BiPC (Biology, Physics, Chemistry)',
            subtitle: 'Study the human nervous system, auditory ear canal, and sound physics',
            durationYears: '2 Years',
            description: 'Excel in biology and neurobiology while producing ambient music compositions.',
            mandatoryEligibility: ['10+2 PCB pass with min 50%'],
            examGateways: ['CUET_UG'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Auditory Cortex Neural Pathways', 'Binaural Frequency Synthesis'],
            estimatedCostRange: '₹30,000 - ₹90,000',
            keyActionTip: 'Compose ambient sleep and focus soundscapes using frequency modulation.'
          },
          {
            id: 'mus_bipc_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Undergraduate Degree',
            title: 'B.Sc in Psychology / Allied Health Sciences + PG Diploma in Music Therapy',
            subtitle: 'Clinical rehabilitation through melodic and rhythmic neurological stimulation',
            durationYears: '3 to 4 Years',
            description: 'Conduct clinical sessions using music for neurological rehabilitation (stroke, autism, dementia, anxiety).',
            mandatoryEligibility: ['Admission via University Entrance / Merit'],
            examGateways: ['CUET_UG'],
            recommendedInstitutions: ['The Music Therapy Trust India', 'Manipal Academy of Higher Education', 'NIMHANS'],
            skillsToAcquire: ['Neurological Music Therapy (NMT) Protocols', 'Clinical Patient Assessment'],
            estimatedCostRange: '₹1.5L - ₹5L',
            keyActionTip: 'Publish research on therapeutic audio applications for reducing surgical patient anxiety.'
          },
          {
            id: 'mus_bipc_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Lead Audio Wellness Architect & Music Therapy Consultant',
            subtitle: 'Creating therapeutic sound products for global healthcare apps and hospitals',
            description: 'Design AI-driven adaptive soundscapes that modulate heart rate and stress levels in real-time.',
            mandatoryEligibility: ['Certified Music Therapist credentials'],
            examGateways: [],
            recommendedInstitutions: ['Global Digital Health Apps & Specialized Neuro Hospitals'],
            skillsToAcquire: ['Biofeedback Audio Algorithms', 'Clinical Trial Design'],
            estimatedCostRange: 'Zero (High Consultant Earnings)',
            keyActionTip: 'Partner with MedTech startups creating smart audio wellness wearables.'
          }
        ]
      },
      MEC_CEC: {
        streamType: 'MEC_CEC',
        streamName: 'Music Business, A&R & Label Management Route',
        streamShortDesc: 'Artist & Repertoire (A&R), Music Publishing, Streaming Economics & Commercial Production',
        badgeLabel: 'Music Business & Record Label Head',
        themeColor: STREAM_THEMES.MEC_CEC,
        approachPhilosophy: 'Combine music production skills with streaming playlist algorithms, copyright synchronization licensing, and talent scouting to run profitable record labels and music publishing businesses.',
        metrics: { timeToFirstJobYears: 3, financialInvestment: 'MODERATE', competitionLevel: 'MODERATE', flexibilityScore: 9, practicalToTheoryRatio: 7 },
        pros: ['Commercial awareness creates high monetization from digital streaming royalties (Spotify, Apple Music, YouTube)', 'Fast path to becoming an A&R Executive or Music Label Founder'],
        cons: ['Must balance creative composition time with business balance sheets'],
        entryJobRoles: ['A&R Scout', 'Music Publishing Coordinator', 'Digital Distribution Manager', 'Commercial Producer'],
        fiveYearTrajectory: 'Head of Music Label / Executive Music Producer (₹25L - ₹1.2Cr+).',
        salarySpectrumLpa: { entryMin: 5, entryMax: 11, experiencedPeak: 95 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'mus_mec_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board with Music & Business Interest',
            subtitle: 'Understanding digital streaming platforms and artists',
            description: 'Pass 10th board while observing how global and Indian indie music is monetized.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['Secondary Boards'],
            skillsToAcquire: ['Digital Streaming Platforms', 'Basic Music Production'],
            estimatedCostRange: 'Standard',
            keyActionTip: 'Learn how Spotify and YouTube royalty payouts work per 1,000 streams.'
          },
          {
            id: 'mus_mec_2', phase: 'PHASE_1_STREAM', phaseLabel: '10+2 MEC',
            title: '10+2 MEC (Maths, Economics, Commerce)',
            subtitle: 'Study economics, contracts, and market trends',
            durationYears: '2 Years',
            description: 'Complete 10+2 MEC while producing beats and pitching to indie singer-songwriters.',
            mandatoryEligibility: ['10+2 Commerce pass with min 55%'],
            examGateways: ['CUET_UG', 'IPMAT_INDORE'],
            recommendedInstitutions: ['Junior Colleges'],
            skillsToAcquire: ['Music Copyright Law Basics', 'Streaming Playlist Pitching Strategy'],
            estimatedCostRange: '₹30,000 - ₹90,000',
            keyActionTip: 'Build an indie distribution catalog via DistroKid or TuneCore.'
          },
          {
            id: 'mus_mec_3', phase: 'PHASE_3_DEGREE', phaseLabel: 'Undergraduate Degree',
            title: 'BBA / B.Com with Music Business & Audio Production',
            subtitle: 'Sync licensing, master rights, artist management, and commercial studio production',
            durationYears: '3 Years',
            description: 'Learn entertainment finance, brand sponsorships, and commercial jingle production.',
            mandatoryEligibility: ['Admission via University Merit / Entrance'],
            examGateways: ['CUET_UG'],
            recommendedInstitutions: ['NMIMS Mumbai', 'St. Xavier’s', 'Christ University'],
            skillsToAcquire: ['Sync Licensing for OTT/Commercials', 'Master Recording Royalty Splits'],
            estimatedCostRange: '₹2L - ₹6L',
            keyActionTip: 'Sign and distribute indie artists to build a commercial catalog generating passive royalties.'
          },
          {
            id: 'mus_mec_4', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Executive Producer & Indie Record Label Founder',
            subtitle: 'Monetizing high-value music catalogs across global films, games, and streaming',
            description: 'Lead major label A&R or run an independent music empire with multi-million monthly streams.',
            mandatoryEligibility: ['Track record of viral hit records and sustainable streaming revenue'],
            examGateways: [],
            recommendedInstitutions: ['Universal Music Group, Sony Music, Warner Music India, T-Series'],
            skillsToAcquire: ['Catalog Valuation & Buyouts', 'Global Distribution Deals'],
            estimatedCostRange: 'Zero (High Profit Sharing Phase)',
            keyActionTip: 'Never sell your publishing master rights early; license them for defined time windows.'
          }
        ]
      },
      VOCATIONAL_GUILD: {
        streamType: 'VOCATIONAL_GUILD',
        streamName: 'Beatmaking, Bedroom Producer & Online Sync Guild Route',
        streamShortDesc: 'FL Studio / Ableton Beatmaker, Sample Pack Creator & Type Beat Marketplace',
        badgeLabel: 'Independent Beatmaker & Sonic Hacker',
        themeColor: STREAM_THEMES.VOCATIONAL_GUILD,
        approachPhilosophy: 'Master modern digital beatmaking at home with a laptop, MIDI keyboard, and headphones, selling beats globally on Beatstars and licensing music for global video games and creators.',
        metrics: { timeToFirstJobYears: 1, financialInvestment: 'LOW', competitionLevel: 'HIGH', flexibilityScore: 8, practicalToTheoryRatio: 10 },
        pros: ['Start earning in USD immediately from home by selling beats and sample libraries to international artists', 'Zero academic barrier—the sound and rhythm alone dictate success'],
        cons: ['High online saturation requires relentless branding and unique sonic signature'],
        entryJobRoles: ['Online Beat Producer', 'Sound Designer / Sample Pack Creator', 'Ghost Producer', 'Freelance Jingle Composer'],
        fiveYearTrajectory: 'Platinum-Certified Record Producer & International Beatmaker ($50,000 - $300,000+ USD).',
        salarySpectrumLpa: { entryMin: 4, entryMax: 12, experiencedPeak: 80 },
        lateralSwitches: [],
        milestones: [
          {
            id: 'mus_voc_1', phase: 'PHASE_0_10TH', phaseLabel: '10th Standard',
            title: '10th Board & FL Studio Beat Inception',
            subtitle: 'Learn drum programming, 808 bass tuning, and melody loops',
            description: 'Pass 10th board while making 1 beat every single day using FL Studio or Ableton Live.',
            mandatoryEligibility: ['Pass 10th Board'],
            examGateways: [],
            recommendedInstitutions: ['YouTube Beatmaking Communities & Online Tutorials'],
            skillsToAcquire: ['Drum Groove Swing & Velocity', '808 Bass Slide Tuning', 'Vocal Chops Manipulation'],
            estimatedCostRange: 'Minimal (Laptop & DAW)',
            keyActionTip: 'Upload 3 beats per week to YouTube and Beatstars with clear type-beat SEO tags.'
          },
          {
            id: 'mus_voc_2', phase: 'PHASE_1_STREAM', phaseLabel: 'Vocational Production',
            title: 'Vocational 10+2 & Online Sample Pack Business',
            subtitle: 'Collaborate with international producers on Discord and Splice',
            durationYears: '2 Years',
            description: 'Sell royalty-free melody loop kits to global producers while completing flexible 10+2 schooling.',
            mandatoryEligibility: ['Enrolled in NIOS 10+2'],
            examGateways: [],
            recommendedInstitutions: ['Beatstars, Splice, Tracklib, Loopmasters'],
            skillsToAcquire: ['Analog Synth Sound Design (Serum/Vital)', 'Audio Compression & Sidechaining'],
            estimatedCostRange: '₹10,000 (Schooling)',
            keyActionTip: 'Collaborate with top Beatstars sellers to get co-production credits on major rapper albums.'
          },
          {
            id: 'mus_voc_3', phase: 'PHASE_5_OUTCOME', phaseLabel: 'Industry Outcomes',
            title: 'Billboard-Charting Record Producer',
            subtitle: 'Producing hits for international and Indian hip-hop, pop, and electronic stars',
            description: 'Score official production placements on chart-topping commercial albums with multi-million streams.',
            mandatoryEligibility: ['Verified catalog of commercially released hit songs'],
            examGateways: [],
            recommendedInstitutions: ['Global Record Labels & Independent Hip-Hop Collectives'],
            skillsToAcquire: ['International Studio Etiquette', 'Publishing Split Sheet Execution'],
            estimatedCostRange: 'Zero (High Royalties & Advance Fees)',
            keyActionTip: 'Always get signed producer agreements and split sheets before a song goes viral.'
          }
        ]
      }
    }
  }
};
