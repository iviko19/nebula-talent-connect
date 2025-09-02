// Core Type Definitions
export interface User {
  id: string;
  email: string;
  name: string;
  type: 'employer' | 'talent';
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Talent {
  id: string;
  candidateNumber: string;
  skills: Array<{ name: string; proficiency: 'Expert' | 'Advanced' | 'Intermediate' }> | string[];
  seniority: 'Junior' | 'Mid-Level' | 'Senior' | 'Lead' | 'Principal';
  yearsExperience: number;
  location: string;
  availability: 'Available' | 'Busy' | string;
  lastProject: string;
  testScores: {
    overall: number;
    technical: number;
    communication: number;
  };
  salaryRange: {
    min: number;
    max: number;
    currency?: string;
  };
  industry?: string[];
  workType?: 'Full-time' | 'Contract' | 'Part-time';
  locked?: {
    name: string;
    photo: string;
    email: string;
    portfolio: string;
    fullTestReports: Record<string, any>;
    detailedProjects: ProjectDetail[];
  };
}

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  role: string;
  achievements: string[];
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  description?: string;
  website?: string;
  industry?: string;
}

export interface TalentFilters {
  skills: string;
  seniority: string;
  location: string;
  minSalary: string;
  maxSalary: string;
  availability: string;
}

export interface APIResponse<T> {
  data: T;
  total?: number;
  page?: number;
  totalPages?: number;
  message?: string;
  success?: boolean;
}

export interface TestResult {
  id: string;
  type: string;
  score: number;
  date: string;
  breakdown?: Record<string, number>;
  feedback?: string;
}

export interface JobOffer {
  id: string;
  company: string;
  position: string;
  status: 'pending' | 'interview' | 'accepted' | 'rejected';
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  location?: string;
  description?: string;
}

export interface DashboardStats {
  profileViews?: number;
  activeVacancies?: number;
  shortlistedCandidates?: number;
  ongoingTests?: number;
  completedHires?: number;
  monthlyStats?: {
    profileViews: number;
    contactRequests: number;
    interviews: number;
    offers: number;
  };
}

export interface Contract {
  id: string;
  talentId: string;
  employerId: string;
  position: string;
  salary: number;
  currency: string;
  startDate: Date;
  duration: string;
  status: 'draft' | 'pending' | 'signed' | 'active' | 'completed';
  terms: string[];
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal' | 'bank';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
}

export interface UnlockProfile {
  talentId: string;
  paymentMethod: string;
  amount: number;
  currency: string;
}