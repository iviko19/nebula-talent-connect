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
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';

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

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {[
            { key: 'activeJobs', label: 'Active Jobs', value: stats.activeJobs, icon: Briefcase, color: 'text-primary', trend: '+12%' },
            { key: 'candidates', label: 'Total Candidates', value: stats.candidates, icon: Users, color: 'text-accent', trend: '+8%' },
            { key: 'interviews', label: 'This Week', value: stats.interviews, icon: Calendar, color: 'text-primary', trend: '+15%' },
            { key: 'hires', label: 'Total Hires', value: stats.hires, icon: UserCheck, color: 'text-accent', trend: '+5%' }
          ].map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="cosmic-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-primary">{stat.trend} vs last month</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-gradient-nebula ${stat.color}`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="jobs">Active Jobs</TabsTrigger>
                <TabsTrigger value="candidates">Candidates</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="cosmic" className="h-20 flex-col gap-2" asChild>
                          <Link to="/talent-search">
                            <Search className="w-5 h-5" />
                            <span>Search Talent</span>
                          </Link>
                        </Button>
                        <Button variant="outline" className="h-20 flex-col gap-2">
                          <Plus className="w-5 h-5" />
                          <span>Post New Job</span>
                        </Button>
                        <Button variant="outline" className="h-20 flex-col gap-2">
                          <Calendar className="w-5 h-5" />
                          <span>Schedule Interviews</span>
                        </Button>
                        <Button variant="outline" className="h-20 flex-col gap-2">
                          <Download className="w-5 h-5" />
                          <span>Export Reports</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Recent Candidates
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentCandidates.map((candidate) => (
                          <div key={candidate.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                            <Avatar>
                              <AvatarImage src={candidate.avatar} alt={candidate.name} />
                              <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="font-medium text-foreground">{candidate.name}</p>
                              <p className="text-sm text-muted-foreground">{candidate.title}</p>
                              <p className="text-xs text-muted-foreground">Applied for: {candidate.appliedFor}</p>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                                <Star className="w-4 h-4 fill-current" />
                                <span>{candidate.score}</span>
                              </div>
                              <Badge variant={
                                candidate.status === 'interview' ? 'default' :
                                candidate.status === 'shortlisted' ? 'secondary' : 'outline'
                              }>
                                {candidate.status}
                              </Badge>
                            </div>
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Active Jobs Tab */}
              <TabsContent value="jobs" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Active Job Postings</CardTitle>
                      <Button variant="cosmic" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Post New Job
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {activeJobs.map((job) => (
                          <div key={job.id} className="p-4 border border-border rounded-lg">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="font-semibold text-foreground">{job.title}</h3>
                                <p className="text-sm text-muted-foreground">{job.department}</p>
                                <p className="text-xs text-muted-foreground">Posted {job.postedDate}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                                  {job.status}
                                </Badge>
                                <Badge variant={
                                  job.priority === 'high' ? 'destructive' :
                                  job.priority === 'medium' ? 'secondary' : 'outline'
                                }>
                                  {job.priority} priority
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-muted-foreground">
                                {job.applicants} applicants
                              </p>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4 mr-1" />
                                  View
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Users className="w-4 h-4 mr-1" />
                                  Candidates
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <MoreVertical className="w-4 h-4" />
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

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-6">
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Hiring Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Application Rate</span>
                          <span className="font-semibold">{analytics.applicationTrend}%</span>
                        </div>
                        <Progress value={analytics.applicationTrend} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Hire Success Rate</span>
                          <span className="font-semibold">{analytics.hireRate}%</span>
                        </div>
                        <Progress value={analytics.hireRate} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Avg. Candidate Score</span>
                          <span className="font-semibold">{analytics.candidateScore}%</span>
                        </div>
                        <Progress value={analytics.candidateScore} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cosmic-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Performance Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {analytics.timeToHire} days
                        </div>
                        <p className="text-sm text-muted-foreground">Average Time to Hire</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-semibold text-foreground">156</div>
                          <p className="text-xs text-muted-foreground">Total Candidates</p>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-foreground">23</div>
                          <p className="text-xs text-muted-foreground">In Pipeline</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
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