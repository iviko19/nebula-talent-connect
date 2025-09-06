import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  UserCheck, 
  Calendar, 
  Briefcase, 
  Plus,
  Search,
  Filter,
  MoreVertical,
  Star,
  MessageSquare,
  Settings,
  Bell,
  TrendingUp,
  Eye,
  Download,
  Building,
  Heart,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import JobManager from '@/components/employer/JobManager';
import ShortlistManager from '@/components/employer/ShortlistManager';

const EmployerDashboard = () => {
  const [company] = useState({
    name: 'TechCorp Inc.',
    logo: '',
    plan: 'Professional'
  });

  const [stats] = useState({
    activeJobs: 12,
    candidates: 156,
    interviews: 8,
    hires: 42
  });

  const [activeJobs] = useState([
    {
      id: 1,
      title: 'Senior React Developer',
      department: 'Engineering',
      applicants: 34,
      status: 'active',
      postedDate: '2024-01-20',
      priority: 'high'
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'Data Science',
      applicants: 28,
      status: 'active',
      postedDate: '2024-01-18',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      applicants: 52,
      status: 'paused',
      postedDate: '2024-01-15',
      priority: 'low'
    }
  ]);

  const [recentCandidates] = useState([
    {
      id: 1,
      name: 'Alex Johnson',
      title: 'Senior AI Engineer',
      score: 95,
      status: 'interview',
      appliedFor: 'AI/ML Engineer',
      avatar: ''
    },
    {
      id: 2,
      name: 'Sarah Chen',
      title: 'React Developer',
      score: 88,
      status: 'reviewing',
      appliedFor: 'Senior React Developer',
      avatar: ''
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      title: 'Product Manager',
      score: 92,
      status: 'shortlisted',
      appliedFor: 'Product Manager',
      avatar: ''
    }
  ]);

  const [upcomingInterviews] = useState([
    {
      id: 1,
      candidate: 'Alex Johnson',
      position: 'AI/ML Engineer',
      date: 'Today',
      time: '2:00 PM',
      type: 'Technical'
    },
    {
      id: 2,
      candidate: 'Sarah Chen',
      position: 'Senior React Developer',
      date: 'Tomorrow',
      time: '10:00 AM',
      type: 'Culture Fit'
    }
  ]);

  const [analytics] = useState({
    applicationTrend: 85,
    hireRate: 12,
    timeToHire: 18,
    candidateScore: 87
  });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-cosmic font-bold text-foreground">
                {company.name} Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage your hiring pipeline and track recruitment metrics
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">{company.plan} Plan</Badge>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="cosmic" size="sm" asChild>
                <Link to="/settings">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>


        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="candidates" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="candidates">Candidates</TabsTrigger>
                <TabsTrigger value="shortlist">Shortlist</TabsTrigger>
              </TabsList>


              {/* Candidates Tab */}
              <TabsContent value="candidates" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Candidate Pipeline</CardTitle>
                        <div className="flex items-center gap-2">
                          <Input
                            placeholder="Search candidates..."
                            className="w-64"
                          />
                          <Button variant="outline" size="sm">
                            <Filter className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentCandidates.map((candidate) => (
                          <div key={candidate.id} className="p-4 border border-border rounded-lg">
                            <div className="flex items-center gap-4">
                              <Avatar className="w-12 h-12">
                                <AvatarImage src={candidate.avatar} alt={candidate.name} />
                                <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <h3 className="font-semibold text-foreground">{candidate.name}</h3>
                                <p className="text-sm text-muted-foreground">{candidate.title}</p>
                                <p className="text-xs text-muted-foreground">Applied for: {candidate.appliedFor}</p>
                              </div>
                              <div className="text-center">
                                <div className="flex items-center gap-1 text-primary text-sm font-semibold mb-1">
                                  <Star className="w-4 h-4 fill-current" />
                                  <span>{candidate.score}/100</span>
                                </div>
                                <Badge variant={
                                  candidate.status === 'interview' ? 'default' :
                                  candidate.status === 'shortlisted' ? 'secondary' : 'outline'
                                }>
                                  {candidate.status}
                                </Badge>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <MessageSquare className="w-4 h-4 mr-1" />
                                  Message
                                </Button>
                                <Button variant="cosmic" size="sm">
                                  View Profile
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Shortlist Tab */}
              <TabsContent value="shortlist" className="space-y-6">
                <ShortlistManager />
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Interviews */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Upcoming Interviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingInterviews.map((interview) => (
                      <div key={interview.id} className="p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium">{interview.candidate}</p>
                        <p className="text-xs text-muted-foreground">{interview.position}</p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-muted-foreground">
                            {interview.date} at {interview.time}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {interview.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Calendar
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="cosmic-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-nebula rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{company.name}</h3>
                  <Badge variant="secondary" className="mb-4">{company.plan} Plan</Badge>
                  <Button variant="outline" className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Company Settings
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;