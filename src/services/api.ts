// Mock API service - Replace with real backend calls later
// This file contains all placeholder functions for backend integration

import { Talent, Company, APIResponse, TalentFilters, DashboardStats, TestResult, JobOffer } from '@/types';

// Mock data
export const mockTalents: Talent[] = [
  {
    id: '1',
    candidateNumber: '2938',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML'],
    seniority: 'Senior' as const,
    yearsExperience: 6,
    location: 'Remote',
    availability: 'Available',
    lastProject: 'AI-powered e-commerce recommendation engine',
    testScores: { overall: 92, technical: 95, communication: 88 },
    salaryRange: { min: 80000, max: 120000, currency: 'USD' },
    // Locked data (shown after payment)
    locked: {
      name: 'Sarah Chen',
      photo: '/api/placeholder/150/150',
      email: 'sarah.chen@email.com',
      portfolio: 'https://sarahchen.dev',
      fullTestReports: {},
      detailedProjects: []
    }
  },
  {
    id: '2',
    candidateNumber: '4712',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'MLOps'],
    seniority: 'Senior' as const,
    yearsExperience: 8,
    location: 'USA/Remote',
    availability: 'Available in 2 weeks',
    lastProject: 'Computer vision system for autonomous vehicles',
    testScores: { overall: 96, technical: 98, communication: 94 },
    salaryRange: { min: 100000, max: 150000, currency: 'USD' },
    locked: {
      name: 'Alex Rodriguez',
      photo: '/api/placeholder/150/150',
      email: 'alex.rodriguez@email.com',
      portfolio: 'https://alexml.com',
      fullTestReports: {},
      detailedProjects: []
    }
  },
  {
    id: '3',
    candidateNumber: '1847',
    skills: ['Vue.js', 'Laravel', 'AWS', 'Docker', 'Microservices'],
    seniority: 'Mid-Level' as const,
    yearsExperience: 4,
    location: 'Europe/Remote',
    availability: 'Available',
    lastProject: 'Cloud-native microservices architecture for fintech',
    testScores: { overall: 87, technical: 89, communication: 85 },
    salaryRange: { min: 60000, max: 85000, currency: 'EUR' },
    locked: {
      name: 'Elena Kowalski',
      photo: '/api/placeholder/150/150',
      email: 'elena.kowalski@email.com',
      portfolio: 'https://elenadev.io',
      fullTestReports: {},
      detailedProjects: []
    }
  }
];

export const mockCompanies = [
  { id: '1', name: 'TechCorp', logo: '/api/placeholder/100/50' },
  { id: '2', name: 'AI Innovations', logo: '/api/placeholder/100/50' },
  { id: '3', name: 'CloudSoft', logo: '/api/placeholder/100/50' },
  { id: '4', name: 'DataDrive', logo: '/api/placeholder/100/50' },
  { id: '5', name: 'NextGen Systems', logo: '/api/placeholder/100/50' },
  { id: '6', name: 'QuantumLabs', logo: '/api/placeholder/100/50' }
];

export const mockStats = {
  talents: 52340,
  hires: 8925,
  companies: 1250,
  satisfaction: 98
};

// API Functions (currently return mock data)
export const fetchTalents = async (filters: Partial<TalentFilters> = {}): Promise<APIResponse<Talent[]>> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // TODO: Replace with real API call
  // return fetch('/api/talents', { method: 'POST', body: JSON.stringify(filters) })
  
  // Simple filtering logic for demo
  let filteredTalents = [...mockTalents];
  
  if (filters.skills) {
    const skillsArray = filters.skills.toLowerCase().split(',').map(s => s.trim());
    filteredTalents = filteredTalents.filter(talent => 
      skillsArray.some(skill => 
        talent.skills.some(ts => ts.toLowerCase().includes(skill))
      )
    );
  }
  
  if (filters.seniority && filters.seniority !== 'any') {
    filteredTalents = filteredTalents.filter(talent => 
      talent.seniority.toLowerCase() === filters.seniority?.toLowerCase()
    );
  }
  
  if (filters.location && filters.location !== 'any') {
    filteredTalents = filteredTalents.filter(talent => 
      talent.location.toLowerCase().includes(filters.location?.toLowerCase() || '')
    );
  }
  
  return {
    data: filteredTalents,
    total: filteredTalents.length,
    page: 1,
    totalPages: 1,
    success: true
  };
};

export const fetchTalentById = async (id: string): Promise<Talent> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // TODO: Replace with real API call
  // return fetch(`/api/talents/${id}`)
  
  const talent = mockTalents.find(t => t.id === id);
  if (!talent) throw new Error('Talent not found');
  
  return talent;
};

export const unlockTalentProfile = async (talentId: string, paymentMethod: string) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // TODO: Replace with real payment processing
  // return fetch('/api/unlock-profile', { method: 'POST', body: JSON.stringify({ talentId, paymentMethod }) })
  
  return {
    success: true,
    talent: mockTalents.find(t => t.id === talentId),
    message: 'Profile unlocked successfully'
  };
};

export const startTest = async (testType: string, candidateId?: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // TODO: Replace with real test creation
  // return fetch('/api/tests', { method: 'POST', body: JSON.stringify({ testType, candidateId }) })
  
  return {
    testId: `test_${Date.now()}`,
    instructions: 'Complete the coding challenge within 2 hours',
    dueDate: new Date(Date.now() + 2 * 60 * 60 * 1000),
    status: 'active'
  };
};

export const getTestResults = async (testId: string) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // TODO: Replace with real test results
  // return fetch(`/api/tests/${testId}/results`)
  
  return {
    testId,
    score: 89,
    completedAt: new Date(),
    breakdown: {
      algorithms: 92,
      systemDesign: 88,
      codeQuality: 87,
      problemSolving: 91
    },
    feedback: 'Excellent performance with clean, efficient code'
  };
};

export const fetchEmployerDashboardData = async (): Promise<DashboardStats> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // TODO: Replace with real dashboard data
  // return fetch('/api/employer/dashboard')
  
  return {
    activeVacancies: 12,
    shortlistedCandidates: 45,
    ongoingTests: 8,
    completedHires: 23,
    monthlyStats: {
      profileViews: 1250,
      contactRequests: 89,
      interviews: 34,
      offers: 12
    }
  };
};

export const fetchTalentDashboardData = async (): Promise<{
  profileViews: number;
  testResults: TestResult[];
  jobOffers: JobOffer[];
  visibility: boolean;
}> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // TODO: Replace with real talent dashboard data
  // return fetch('/api/talent/dashboard')
  
  return {
    profileViews: 156,
    testResults: [
      { id: '1', type: 'JavaScript Assessment', score: 94, date: '2024-01-15' },
      { id: '2', type: 'System Design', score: 87, date: '2024-01-10' },
      { id: '3', type: 'React.js Skills', score: 91, date: '2024-01-05' }
    ],
    jobOffers: [
      { id: '1', company: 'TechCorp', position: 'Senior Frontend Developer', status: 'pending' },
      { id: '2', company: 'AI Innovations', position: 'React Developer', status: 'interview' }
    ],
    visibility: true
  };
};

export const createContract = async (contractData: any) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // TODO: Replace with real contract creation
  // return fetch('/api/contracts', { method: 'POST', body: JSON.stringify(contractData) })
  
  return {
    contractId: `contract_${Date.now()}`,
    status: 'draft',
    signUrl: '/mock-docusign-url',
    message: 'Contract created successfully'
  };
};

// Authentication placeholders
export const login = async (email: string, password: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // TODO: Replace with real authentication
  return {
    user: {
      id: 'user_123',
      email,
      name: 'John Doe',
      type: 'employer', // or 'talent'
      avatar: '/api/placeholder/40/40'
    },
    token: 'mock_jwt_token'
  };
};

export const signup = async (userData: any) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // TODO: Replace with real user registration
  return {
    user: {
      id: `user_${Date.now()}`,
      ...userData,
      avatar: '/api/placeholder/40/40'
    },
    token: 'mock_jwt_token'
  };
};