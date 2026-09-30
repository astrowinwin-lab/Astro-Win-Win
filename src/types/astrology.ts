export interface Astrologer {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  rating: number;
  consultationsCount: number;
  ratePerMin: number;
  specialties: string[];
  languages: string[];
  avatarUrl: string;
  isOnline: boolean;
  verified: boolean;
  about?: string;
}

export type ConsultationMode = 'chat' | 'voice' | 'video' | 'call';

export interface ZodiacForecast {
  sign: string;
  symbol: string;
  element: string;
  transitSummary: string;
  detailedPrediction: string;
  luckyColor: string;
  luckyNumber: number;
  score: number;
  auspiciousTime: string;
}

export interface AIResponse {
  id: string;
  query: string;
  title: string;
  answer: string;
  remedy: string;
  transitFactor: string;
}

export interface AppScreenModule {
  id: string;
  moduleNumber: string;
  title: string;
  description: string;
  gradient: string;
  icon: string;
  details: string[];
}
