import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Star, 
  MapPin, 
  DollarSign, 
  Briefcase, 
  Building, 
  Mail, 
  Phone, 
  Eye,
  Users,
  Heart,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// =================================================================
// ADMIN DASHBOARD - API INTEGRATION POINTS
// =================================================================
// Required API endpoints:
// GET    /api/admin/talents - Fetch all registered talents with full details
// GET    /api/admin/companies - Fetch all registered companies  
// GET    /api/admin/shortlisted - Fetch shortlisted candidates by company
// PUT    /api/admin/talents/:id - Update talent profile
// DELETE /api/admin/talents/:id - Delete talent profile
// PUT    /api/admin/companies/:id - Update company details
// DELETE /api/admin/companies/:id - Delete company
// =================================================================

interface TalentProfile {
  id: string;
  candidateNumber: string;
  realName: string;
  email: string;
  phone: string;
  seniority: string;
  yearsExperience: number;
  overallScore: number;
  skills: Array<{ name: string; proficiency: 'Expert' | 'Advanced' | 'Intermediate' }>;
  availability: 'Available' | 'Busy';
  industry: string[];
  workType: 'Full-time' | 'Contract' | 'Part-time';
  location: string;
  salaryRange: { min: number; max: number };
  recentProject: string;
  status: 'Active' | 'Testing' | 'Shortlisted' | 'Hired';
}

interface Company {
  id: string;
  name: string;
  email: string;
  phone: string;
  industry: string;
  website: string;
  status: 'Active' | 'Pending' | 'Inactive';
  shortlistedCandidates: string[];
  joinedDate: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  // TODO: Replace with API calls - Load from /api/admin/talents
  // useEffect(() => {
  //   fetchAdminTalents().then(setTalents);
  //   fetchAdminCompanies().then(setCompanies);
  // }, []);
  
  const [talents] = useState<TalentProfile[]>([
    {
      id: '1',
      candidateNumber: 'CAND-2938',
      realName: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1-555-0123',
      seniority: 'Senior',
      yearsExperience: 5,
      overallScore: 92,
      skills: [
        { name: 'React', proficiency: 'Expert' },
        { name: 'Node.js', proficiency: 'Advanced' },
        { name: 'TypeScript', proficiency: 'Expert' },
        { name: 'AWS', proficiency: 'Intermediate' }
      ],
      availability: 'Available',
      industry: ['FinTech', 'E-commerce'],
      workType: 'Full-time',
      location: 'New York, USA',
      salaryRange: { min: 120, max: 150 },
      recentProject: 'Led development of a real-time trading platform serving 10M+ users',
      status: 'Active'
    },
    {
      id: '2',
      candidateNumber: 'CAND-1847',
      realName: 'Sarah Chen',
      email: 'sarah.chen@email.com',
      phone: '+1-555-0456',
      seniority: 'Mid-Level',
      yearsExperience: 3,
      overallScore: 88,
      skills: [
        { name: 'React', proficiency: 'Advanced' },
        { name: 'Python', proficiency: 'Expert' },
        { name: 'Docker', proficiency: 'Intermediate' }
      ],
      availability: 'Available',
      industry: ['Healthcare', 'EdTech'],
      workType: 'Full-time',
      location: 'San Francisco, USA',
      salaryRange: { min: 90, max: 120 },
      recentProject: 'Built ML-powered analytics dashboard for healthcare platform',
      status: 'Testing'
    }
  ]);

  const [companies] = useState<Company[]>([
    {
      id: '1',
      name: 'TechCorp Inc.',
      email: 'hr@techcorp.com',
      phone: '+1-555-1000',
      industry: 'Technology',
      website: 'https://techcorp.com',
      status: 'Active',
      shortlistedCandidates: ['1', '2'],
      joinedDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'FinanceFlow Ltd.',
      email: 'hiring@financeflow.com',
      phone: '+1-555-2000',
      industry: 'Financial Services',
      website: 'https://financeflow.com',
      status: 'Active',
      shortlistedCandidates: ['1'],
      joinedDate: '2024-01-20'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredTalents = talents.filter(talent =>
    talent.candidateNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    talent.realName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    talent.seniority.toLowerCase().includes(searchQuery.toLowerCase()) ||
    talent.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    talent.skills.some(skill => skill.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const shortlistedTalents = talents.filter(talent => talent.status === 'Shortlisted');

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-cosmic font-bold text-foreground">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage talent profiles, companies, and recruitment pipeline
            </p>
          </div>

          {/* Navigation Tabs */}
          <Tabs defaultValue="candidates" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="candidates">Candidates</TabsTrigger>
              <TabsTrigger value="companies">Companies</TabsTrigger>
              <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
            </TabsList>

            {/* Candidates Tab */}
            <TabsContent value="candidates" className="space-y-6">
              {/* Search and Add Button */}
              <div className="flex gap-4 items-center mb-6">
                <Input
                  placeholder="Search candidates by name, skills, location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button variant="default" size="default" className="flex items-center gap-2" onClick={() => navigate('/add-candidate')}>
                  <Plus className="w-4 h-4" />
                  Add Candidate
                </Button>
              </div>

              {/* Talent List */}
              <div className="grid gap-6">
                {filteredTalents.map((talent, index) => (
                  <motion.div
                    key={talent.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="cosmic-card">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                              <Avatar className="w-12 h-12">
                                <AvatarImage src="" alt={talent.realName} />
                                <AvatarFallback>{talent.realName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="text-lg font-semibold text-foreground">
                                  {talent.realName}
                                </h3>
                                <p className="text-sm text-muted-foreground">{talent.candidateNumber}</p>
                                <Badge variant={talent.availability === 'Available' ? 'default' : 'secondary'}>
                                  {talent.availability}
                                </Badge>
                              </div>
                            </div>
                            
                            {/* Contact Information */}
                            <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/30 rounded-lg">
                              <div className="flex items-center gap-2 text-sm">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <span>{talent.email}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <span>{talent.phone}</span>
                              </div>
                            </div>

                            {/* Profile Details */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                              <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-muted-foreground" />
                                <span>{talent.seniority} • {talent.yearsExperience} years</span>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-primary fill-current" />
                                <span>{talent.overallScore}/100</span>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-muted-foreground" />
                                <span>{talent.location}</span>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-muted-foreground" />
                                <span>${talent.salaryRange.min}k-${talent.salaryRange.max}k</span>
                              </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-4">
                              <p className="text-sm text-muted-foreground mb-2">Skills:</p>
                              <div className="flex flex-wrap gap-1">
                                {talent.skills.map((skill) => (
                                  <Badge key={skill.name} variant="secondary" className="text-xs">
                                    {skill.name} ({skill.proficiency})
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Recent Project */}
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              <strong>Recent Project:</strong> {talent.recentProject}
                            </p>
                          </div>

                          <div className="flex flex-col gap-2 ml-4">
                            <Badge variant={
                              talent.status === 'Active' ? 'default' :
                              talent.status === 'Testing' ? 'secondary' :
                              talent.status === 'Shortlisted' ? 'outline' : 'default'
                            }>
                              {talent.status}
                            </Badge>
                            <Button variant="cosmic" size="sm" onClick={() => navigate(`/candidate/${talent.id}`)}>
                              <Eye className="w-4 h-4 mr-1" />
                              Edit Profile
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Companies Tab */}
            <TabsContent value="companies" className="space-y-6">
              {/* Search and Add Button */}
              <div className="flex gap-4 items-center mb-6">
                <Input
                  placeholder="Search companies by name, industry..."
                  className="flex-1"
                />
                <Button variant="default" size="default" className="flex items-center gap-2" onClick={() => navigate('/add-company')}>
                  <Plus className="w-4 h-4" />
                  Add Company
                </Button>
              </div>
              
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle>Registered Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Company</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Industry</TableHead>
                        <TableHead>Shortlisted</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {companies.map((company) => (
                        <TableRow key={company.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{company.name}</p>
                              <p className="text-sm text-muted-foreground">{company.website}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <p>{company.email}</p>
                              <p className="text-muted-foreground">{company.phone}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{company.industry}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4 text-muted-foreground" />
                              <span>{company.shortlistedCandidates.length}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={
                              company.status === 'Active' ? 'default' :
                              company.status === 'Pending' ? 'secondary' : 'outline'
                            }>
                              {company.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Shortlisted Tab */}
            <TabsContent value="shortlisted" className="space-y-6">
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle>Shortlisted Candidates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {companies.map((company) => (
                      <div key={company.id} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">{company.name}</h3>
                          <Badge variant="secondary">
                            {company.shortlistedCandidates.length} candidates
                          </Badge>
                        </div>
                        <div className="grid gap-2">
                          {company.shortlistedCandidates.map((candidateId) => {
                            const candidate = talents.find(t => t.id === candidateId);
                            if (!candidate) return null;
                            
                            return (
                              <div key={candidateId} className="flex items-center justify-between p-3 bg-muted/30 rounded">
                                <div className="flex items-center gap-3">
                                  <Avatar className="w-8 h-8">
                                    <AvatarFallback>{candidate.realName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="text-sm font-medium">{candidate.realName}</p>
                                    <p className="text-xs text-muted-foreground">{candidate.candidateNumber}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center gap-1 text-xs">
                                    <Star className="w-3 h-3 text-primary fill-current" />
                                    <span>{candidate.overallScore}</span>
                                  </div>
                                  <Button variant="outline" size="sm">
                                    View Profile
                                  </Button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;