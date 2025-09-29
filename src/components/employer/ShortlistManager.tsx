import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Calendar, Star, Building, MapPin, DollarSign, Clock, User, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

// =================================================================
// SHORTLIST MANAGER - API INTEGRATION POINTS
// =================================================================
// Required API endpoints:
// GET    /api/shortlist/employer/:employerId - Fetch shortlisted candidates
// POST   /api/tests/send - Send test request to candidate
// GET    /api/tests/:testId/status - Check test completion status
// POST   /api/contracts/create - Create contract for hired candidate
// PUT    /api/shortlist/:candidateId/remove - Remove from shortlist
// =================================================================

interface ShortlistedCandidate {
  id: string;
  candidateNumber: string;
  experienceLevel: string;
  experienceYears: number;
  overallScore: number;
  skills: Array<{ name: string; level: 'Expert' | 'Advanced' | 'Intermediate' }>;
  availability: 'Available' | 'Busy';
  industryTags: string[];
  workType: 'Full-time' | 'Contract' | 'Part-time';
  location: string;
  salaryRange: string;
  recentProject: string;
  shortlistedDate: string;
  testStatus: 'pending' | 'sent' | 'completed' | 'not_sent';
  testScore?: number;
}

const ShortlistManager = () => {
  const { toast } = useToast();
  
  // TODO: Load shortlisted candidates from API on component mount
  // useEffect(() => {
  //   const loadShortlistedCandidates = async () => {
  //     const response = await fetch(`/api/shortlist/employer/${currentUserId}`);
  //     const candidates = await response.json();
  //     setShortlistedCandidates(candidates.data);
  //   };
  //   loadShortlistedCandidates();
  // }, []);
  
  const [shortlistedCandidates] = useState<ShortlistedCandidate[]>([
    {
      id: '1',
      candidateNumber: 'Candidate #2938',
      experienceLevel: 'Senior',
      experienceYears: 7,
      overallScore: 94,
      skills: [
        { name: 'React', level: 'Expert' },
        { name: 'TypeScript', level: 'Expert' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'AWS', level: 'Advanced' }
      ],
      availability: 'Available',
      industryTags: ['Fintech', 'E-commerce', 'SaaS'],
      workType: 'Full-time',
      location: 'Remote (EU)',
      salaryRange: '$95,000 - $120,000',
      recentProject: 'Led development of a microservices-based payment platform handling 10M+ transactions',
      shortlistedDate: '2024-02-15',
      testStatus: 'completed',
      testScore: 88
    },
    {
      id: '2',
      candidateNumber: 'Candidate #1847',
      experienceLevel: 'Mid-Level',
      experienceYears: 4,
      overallScore: 87,
      skills: [
        { name: 'Python', level: 'Expert' },
        { name: 'Machine Learning', level: 'Advanced' },
        { name: 'TensorFlow', level: 'Advanced' },
        { name: 'Docker', level: 'Intermediate' }
      ],
      availability: 'Available',
      industryTags: ['AI/ML', 'Healthcare', 'Research'],
      workType: 'Full-time',
      location: 'San Francisco, CA',
      salaryRange: '$80,000 - $100,000',
      recentProject: 'Developed ML models for medical image analysis with 95% accuracy improvement',
      shortlistedDate: '2024-02-14',
      testStatus: 'sent'
    },
    {
      id: '3',
      candidateNumber: 'Candidate #3521',
      experienceLevel: 'Senior',
      experienceYears: 8,
      overallScore: 91,
      skills: [
        { name: 'Vue.js', level: 'Expert' },
        { name: 'GraphQL', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'Kubernetes', level: 'Intermediate' }
      ],
      availability: 'Busy',
      industryTags: ['E-commerce', 'Media', 'Social'],
      workType: 'Contract',
      location: 'Remote (Global)',
      salaryRange: '$90,000 - $115,000',
      recentProject: 'Architected scalable GraphQL API serving 50M+ requests daily',
      shortlistedDate: '2024-02-13',
      testStatus: 'pending'
    }
  ]);

  const [testDialogOpen, setTestDialogOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<ShortlistedCandidate | null>(null);
  const [testRequest, setTestRequest] = useState({
    title: '',
    description: '',
    duration: '',
    instructions: ''
  });

  const handleSendTest = (candidate: ShortlistedCandidate) => {
    setSelectedCandidate(candidate);
    setTestDialogOpen(true);
  };

  const handleSubmitTestRequest = async () => {
    if (!selectedCandidate) return;
    
    // TODO: Replace with API call to send test
    // const response = await fetch('/api/tests/send', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     candidateId: selectedCandidate.id,
    //     testTitle: testRequest.title,
    //     description: testRequest.description,
    //     duration: testRequest.duration,
    //     instructions: testRequest.instructions
    //   })
    // });
    // 
    // if (response.ok) {
    //   // Update candidate test status to 'sent'
    //   // Refresh shortlisted candidates list
    // }
    
    toast({
      title: "Test Request Sent",
      description: `Test request sent to ${selectedCandidate.candidateNumber}`,
    });
    
    setTestDialogOpen(false);
    setSelectedCandidate(null);
    setTestRequest({ title: '', description: '', duration: '', instructions: '' });
  };

  const handleProceedToContract = (candidate: ShortlistedCandidate) => {
    // TODO: This should create a contract draft and navigate to contract page
    // const createContract = async () => {
    //   const response = await fetch('/api/contracts/create', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ candidateId: candidate.id })
    //   });
    //   const contract = await response.json();
    //   window.location.href = `/contract/${contract.id}`;
    // };
    // createContract();
    
    window.location.href = `/contract?candidate=${candidate.id}`;
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'completed': return 'default';
      case 'sent': return 'secondary';
      case 'pending': return 'outline';
      default: return 'outline';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Test Completed';
      case 'sent': return 'Test Sent';
      case 'pending': return 'Ready for Test';
      default: return 'No Test';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-cosmic font-bold text-foreground">Shortlisted Candidates</h2>
          <p className="text-muted-foreground">Manage your shortlisted candidates and send test requests</p>
        </div>
        <Badge variant="secondary" className="text-lg px-3 py-1">
          {shortlistedCandidates.length} Candidates
        </Badge>
      </div>

      <div className="grid gap-6">
        {shortlistedCandidates.map((candidate, index) => (
          <motion.div
            key={candidate.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="cosmic-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{candidate.candidateNumber}</h3>
                      <p className="text-muted-foreground">
                        {candidate.experienceLevel} • {candidate.experienceYears} years experience
                      </p>
                      <p className="text-xs text-muted-foreground">Shortlisted on {candidate.shortlistedDate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-primary fill-current" />
                      <span className="text-2xl font-bold text-primary">{candidate.overallScore}</span>
                      <span className="text-muted-foreground">/100</span>
                    </div>
                    <Badge variant={candidate.availability === 'Available' ? 'default' : 'secondary'}>
                      {candidate.availability}
                    </Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Skills</Label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {candidate.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill.name} ({skill.level})
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Industry Experience</Label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {candidate.industryTags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-muted-foreground" />
                    <span>{candidate.workType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{candidate.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span>{candidate.salaryRange}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <Label className="text-sm font-medium text-muted-foreground">Recent Project</Label>
                  <p className="text-sm text-foreground mt-1">{candidate.recentProject}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Badge variant={getStatusBadgeVariant(candidate.testStatus)}>
                      {getStatusText(candidate.testStatus)}
                    </Badge>
                    {candidate.testScore && (
                      <div className="flex items-center gap-1 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Score: {candidate.testScore}/100</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {candidate.testStatus === 'pending' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleSendTest(candidate)}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Test
                      </Button>
                    )}
                    {candidate.testStatus === 'completed' && (
                      <Button 
                        variant="cosmic" 
                        size="sm"
                        onClick={() => handleProceedToContract(candidate)}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Proceed to Contract
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Test Request Dialog */}
      <Dialog open={testDialogOpen} onOpenChange={setTestDialogOpen}>
        <DialogContent className="cosmic-card max-w-2xl">
          <DialogHeader>
            <DialogTitle>Send Test Request to {selectedCandidate?.candidateNumber}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="testTitle">Test Title</Label>
              <Input
                id="testTitle"
                placeholder="e.g., React Developer Technical Assessment"
                value={testRequest.title}
                onChange={(e) => setTestRequest({ ...testRequest, title: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="testDuration">Duration (minutes)</Label>
              <Input
                id="testDuration"
                placeholder="e.g., 120"
                type="number"
                value={testRequest.duration}
                onChange={(e) => setTestRequest({ ...testRequest, duration: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="testDescription">Description</Label>
              <Textarea
                id="testDescription"
                placeholder="Describe what the test will cover..."
                value={testRequest.description}
                onChange={(e) => setTestRequest({ ...testRequest, description: e.target.value })}
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="testInstructions">Special Instructions</Label>
              <Textarea
                id="testInstructions"
                placeholder="Any special instructions for the candidate..."
                value={testRequest.instructions}
                onChange={(e) => setTestRequest({ ...testRequest, instructions: e.target.value })}
                rows={3}
              />
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setTestDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="cosmic" onClick={handleSubmitTestRequest}>
                <Mail className="w-4 h-4 mr-2" />
                Send Test Request
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShortlistManager;