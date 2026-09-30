import { Astrologer, ZodiacForecast, AppScreenModule } from '../types/astrology';

// Image assets hotlinked from user's provided HTML
export const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1VZjVMJ7De0b39Pd-IFGib_xy_Qzks9KA6jcN2qRbbG_TKlrB1SoiBjLrSDTTsetJknAatuccqd4z-dxYVCtnJpAp74odl1K19-enK5R1evfTzh6xdBIjmSFOw-8yIJVlVf9-3fCpxqr0pCk1rBQldaKr3iEOqOdlgFXVdHlyA7z93NUsgxP6xezOKaUimxdJBidEYleVHZV4j5cM0wxSgr1MnSRmxA8Ti6lJEpoWdhsQ_gd5Bf7OWw7ZM';

export const SUNITA_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUeUWDHDTYpIDlCXWWKp2FBgzsr2Cn3QRjp4a8QziJabpgrFrmADg4KpNzo1JKQiQX8rG0CvAmJAwVe4n7T968J8iDiGhy1VW7b6ua4gJcshpL-Ifeze6bAoS__dltaXcl6LL31BzKywxzz4Ur_RsbMmDgxQhBFvuVz3x1_2Q0cb0rUwTuDIzXrWct0sKb2bPS_hmaCalf28qQkJ-y5jb3uwqGSawiCO-4zazcTprunkN-pSc-23wb';

export const ROHAN_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcIK0XPD7Kx6fK3TQUKDkgaU1J7WGjJH6Pbr2b16KnOWitzEBupNZLzJJlnRUbnF86v0stwKZ5Cty9rbz-MGntZLz3jzOfJ-19wo_vdkP8GR429z4OP3U_yDQN3RXljyXPWshXVUwt2jmTyIIUGMBAOsJTSebR7C4incpOzbLPNcPoeqbGb7o0D0EXrDX_S2pbsCw0vHToSh_LDACbSd4N9g8i3ptl75-9bLrT-Tfd6GLCwLiHeS3n';

export const ASTROLOGERS: Astrologer[] = [
  {
    id: 'rohan',
    name: 'Acharya Rohan',
    title: 'Vedic & Vastu Expert',
    experienceYears: 12,
    rating: 4.9,
    consultationsCount: 2400,
    ratePerMin: 25,
    specialties: ['Kundali Matching', 'Career & Wealth', 'Vastu Shastra'],
    languages: ['Hindi', 'English'],
    avatarUrl: ROHAN_AVATAR,
    isOnline: true,
    verified: true,
    about: 'Acharya Rohan comes from a traditional lineage of Varanasi scholars with 12+ years of clinical counseling in Prashna Kundali, Career timing, and Business expansions.'
  },
  {
    id: 'sunita',
    name: 'Dr. Sunita Sharma',
    title: 'Vedic & Numerology Expert',
    experienceYears: 15,
    rating: 5.0,
    consultationsCount: 3800,
    ratePerMin: 30,
    specialties: ['Relationship Harmony', 'Dasha Analysis', 'Numerology'],
    languages: ['English', 'Punjabi', 'Hindi'],
    avatarUrl: SUNITA_AVATAR,
    isOnline: true,
    verified: true,
    about: 'Dr. Sunita holds a Doctorate in Vedic Astrology from Sampurnanand Sanskrit University with deep research in Vimshottari Dasha calculations and marital harmony.'
  },
  {
    id: 'rajesh',
    name: 'Pandit Rajesh Shastri',
    title: 'KP System & Nadi Astrologer',
    experienceYears: 18,
    rating: 4.95,
    consultationsCount: 5100,
    ratePerMin: 35,
    specialties: ['KP Stellar Astrology', 'Health & Vitality', 'Gemstone Therapy'],
    languages: ['Hindi', 'Sanskrit', 'Gujarati'],
    avatarUrl: ROHAN_AVATAR,
    isOnline: true,
    verified: true,
    about: 'Specialist in Krishnamurti Padhdhati (KP) sub-lord theory and Nadi palm leaf cross-references with high accuracy for life timeline milestones.'
  }
];

export const ZODIAC_FORECASTS: Record<string, ZodiacForecast> = {
  Aries: {
    sign: 'Aries',
    symbol: '♈',
    element: 'Fire',
    transitSummary: 'Jupiter enters your 10th house. Auspicious period for strategic leadership conversations.',
    detailedPrediction: 'The Moon conjoins Mars in your 1st house today, activating immense creative drive. Auspicious period for pitch meetings, team alignments, and closing high-value agreements.',
    luckyColor: 'Solar Gold',
    luckyNumber: 9,
    score: 94,
    auspiciousTime: '10:30 AM - 12:15 PM'
  },
  Taurus: {
    sign: 'Taurus',
    symbol: '♉',
    element: 'Earth',
    transitSummary: 'Venus casts a benign aspect onto your 2nd house of accumulated wealth and family warmth.',
    detailedPrediction: 'Financial prospects strengthen through structured long-term assets. Maintain calm diplomacy in family discussions to harvest optimal planetary favor.',
    luckyColor: 'Emerald Silk',
    luckyNumber: 6,
    score: 91,
    auspiciousTime: '02:00 PM - 03:45 PM'
  },
  Gemini: {
    sign: 'Gemini',
    symbol: '♊',
    element: 'Air',
    transitSummary: 'Mercury advances in your 5th house of intellect and creative manifestation.',
    detailedPrediction: 'Your communication channels burst with sudden breakthroughs. Writing, negotiations, and analytical tasks yield triple returns under today’s Nakshatra.',
    luckyColor: 'Electric Amber',
    luckyNumber: 5,
    score: 89,
    auspiciousTime: '09:15 AM - 11:00 AM'
  },
  Cancer: {
    sign: 'Cancer',
    symbol: '♋',
    element: 'Water',
    transitSummary: 'Moon shifts into high dignity, enhancing intuition and inner balance.',
    detailedPrediction: 'Trust intuitive first impressions regarding partners and joint investments. Excellent moment for domestic realignments and peace rituals.',
    luckyColor: 'Pearl Silver',
    luckyNumber: 2,
    score: 96,
    auspiciousTime: '04:30 PM - 06:00 PM'
  },
  Leo: {
    sign: 'Leo',
    symbol: '♌',
    element: 'Fire',
    transitSummary: 'Sun illuminates your 9th house of fortune, mentor guidance, and spiritual expansion.',
    detailedPrediction: 'Senior mentors or key decision makers offer favorable endorsements. Channel your natural magnanimity into collaborative projects.',
    luckyColor: 'Crimson Ruby',
    luckyNumber: 1,
    score: 95,
    auspiciousTime: '11:45 AM - 01:30 PM'
  }
};

export const APP_MODULES: AppScreenModule[] = [
  {
    id: 'dashboard',
    moduleNumber: 'Module 01',
    title: 'Home Dashboard',
    description: 'Daily planetary transit overview, panchang timings, and live verified mentors.',
    gradient: 'from-primary to-primary-container',
    icon: 'dashboard',
    details: [
      'Personalized daily Vedic transit calculation',
      'Real-time Rahu Kaal, Gulika & Abhijit Muhurta alerts',
      'Direct one-tap connection to verified online astrologers',
      'Customized planetary remedy cards based on current Dasha'
    ]
  },
  {
    id: 'profile',
    moduleNumber: 'Module 02',
    title: 'Astrologer Profile',
    description: 'Transparent user reviews, degrees, spoken languages, and per-minute rate cards.',
    gradient: 'from-secondary-container to-secondary',
    icon: 'account_box',
    details: [
      'Verified lineage documents and university degrees',
      'Audited consultation counters and uncensored user reviews',
      'Transparent per-minute billing breakdown with no surge pricing',
      'Voice samples and introduction videos for authentic feel'
    ]
  },
  {
    id: 'consultations',
    moduleNumber: 'Module 03',
    title: 'Live Consultations',
    description: 'End-to-end encrypted messaging, birth chart sharing, and HD calling rooms.',
    gradient: 'from-tertiary to-[#19052F]',
    icon: 'question_answer',
    details: [
      'Interactive Kundali sync on screen during live audio/video calls',
      'Encrypted voice calls with zero latency and background noise cancellation',
      'Permanent chat records with remedies and downloadable Kundali PDF',
      'Privacy mode that completely conceals personal phone numbers'
    ]
  },
  {
    id: 'ai-wallet',
    moduleNumber: 'Module 04',
    title: 'Wallet & Astro AI',
    description: 'Instant one-tap micro-recharges and 24/7 AI chat companion accessibility.',
    gradient: 'from-primary-container to-[#7A2FE6]',
    icon: 'account_balance_wallet',
    details: [
      'Instant UPI, RuPay, Visa, and Net Banking zero-fee top-ups',
      'Pay strictly per second of consultation time with instant refund protection',
      'Next-generation Vedic AI engine for instantaneous chart transit queries',
      'Computer-vision palm line contour analysis across lifeline & headline'
    ]
  }
];

export const PRESET_AI_QUERIES = [
  {
    label: '🪐 Jupiter 10th House Transit',
    query: 'How does Jupiter transiting my 10th house affect my career this quarter?',
    title: 'Career Expansion & Leadership Favour',
    answer: 'Jupiter in the 10th House (Karma Bhava) initiates an auspicious window for occupational growth. It aspects your 2nd house of wealth and 6th house of service, signifying promotion, elevated peer recognition, and favorable contract negotiations.',
    remedy: 'Chant Brihaspati Beej Mantra on Thursday mornings and wear light yellow or gold tones.',
    transitFactor: 'Jupiter Transit in 10th House · Moon Nakshatra: Rohini'
  },
  {
    label: '💼 Next Auspicious Job Switch Date',
    query: 'When is the best astrological window for a new job or role transition?',
    title: 'Optimal Shubh Muhurta for Transitions',
    answer: 'With Mercury entering a friendly trine and Mars exiting combustion, your planetary cluster opens an optimal transition portal between the 12th and 28th of next month, specifically on Wednesdays and Thursdays during Shukla Paksha.',
    remedy: 'Offer water to the rising Sun at dawn and donate green lentils (Moong Dal) on Wednesdays.',
    transitFactor: 'Mercury Direct Trine · Benefic Transit Cycle'
  },
  {
    label: '💎 Gemstone for Wealth & Focus',
    query: 'Which gemstone balances Saturn and Mercury for focus and wealth accumulation?',
    title: 'Saturn-Mercury Harmonic Gemstone',
    answer: 'For your planetary positioning, an untreated Natural Blue Sapphire (or clean Amethyst substitute) combined with Emerald in Panchdhatu ring harmonizes the 9th and 10th lord, bringing grounded clarity and financial stability.',
    remedy: 'Consecrate before wearing on Saturday sunrise during Saturn Hora.',
    transitFactor: '9th & 10th House Raj Yoga Synergy'
  }
];
