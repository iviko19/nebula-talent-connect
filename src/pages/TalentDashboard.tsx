import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, 
  Eye, 
  Star, 
  Briefcase, 
  MessageSquare, 
  Settings, 
  Bell,
  TrendingUp,
  Calendar,
  Edit,
  Download,
  ExternalLink,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TalentDashboard = () => {
  const [profile] = useState({
    name: 'Alex Johnson',
    title: 'Senior AI Engineer',
    avatar: '',
    location: 'San Francisco, CA',
    profileCompletion: 85,
    visibility: 'public'
  });

  const [stats] = useState({
    profileViews: 156,
    testScores: 92,
    jobOffers: 8,
    applications: 23
  });

  const [recentActivity] = useState([
    { id: 1, type: 'view', company: 'TechCorp', time: '2 hours ago' },
    { id: 2, type: 'test', company: 'AI Innovations', time: '1 day ago' },
    { id: 3, type: 'message', company: 'StartupXYZ', time: '2 days ago' },
    { id: 4, type: 'offer', company: 'BigTech Inc', time: '3 days ago' }
  ]);

  const [jobOffers] = useState([
    {
      id: 1,
      title: 'Senior ML Engineer',
      company: 'TechCorp',
      salary: '$180k - $220k',
      location: 'Remote',
      status: 'pending'
    },
    {
      id: 2,
      title: 'AI Research Scientist',
      company: 'Research Labs',
      salary: '$200k - $250k',
      location: 'Boston, MA',
      status: 'interviewing'
    }
  ]);

  const [tests] = useState([
    {
      id: 1,
      name: 'Python & ML Fundamentals',
      score: 95,
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      name: 'System Design',
      score: 88,
      date: '2024-01-10',
      status: 'completed'
    },
    {
      id: 3,
      name: 'React & Frontend',
      score: 92,
      date: '2024-01-05',
      status: 'completed'
    }
  ]);

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
                Welcome back, {profile.name.split(' ')[0]}
              </h1>
              <p className="text-muted-foreground">
                Manage your profile and track your career opportunities
              </p>
            </div>
            <div className="flex items-center gap-4">
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
            { key: 'profileViews', label: 'Profile Views', value: stats.profileViews, icon: Eye, color: 'text-primary' },
            { key: 'testScores', label: 'Avg Test Score', value: `${stats.testScores}%`, icon: Star, color: 'text-accent' },
            { key: 'jobOffers', label: 'Job Offers', value: stats.jobOffers, icon: Briefcase, color: 'text-primary' },
            { key: 'applications', label: 'Applications', value: stats.applications, icon: MessageSquare, color: 'text-accent' }
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
                <TabsTrigger value="offers">Job Offers</TabsTrigger>
                <TabsTrigger value="tests">Test Results</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Recent Activity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Recent Activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivity.map((activity) => (
                          <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                            <div className="w-10 h-10 rounded-full bg-gradient-nebula flex items-center justify-center">
                              {activity.type === 'view' && <Eye className="w-5 h-5 text-white" />}
                              {activity.type === 'test' && <Star className="w-5 h-5 text-white" />}
                              {activity.type === 'message' && <MessageSquare className="w-5 h-5 text-white" />}
                              {activity.type === 'offer' && <Briefcase className="w-5 h-5 text-white" />}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">
                                {activity.type === 'view' && 'Profile viewed by'}
                                {activity.type === 'test' && 'Test completed for'}
                                {activity.type === 'message' && 'Message received from'}
                                {activity.type === 'offer' && 'Job offer from'}
                                {' '}{activity.company}
                              </p>
                              <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-20 flex-col gap-2">
                          <Edit className="w-5 h-5" />
                          <span>Edit Profile</span>
                        </Button>
                        <Button variant="outline" className="h-20 flex-col gap-2">
                          <Download className="w-5 h-5" />
                          <span>Download CV</span>
                        </Button>
                        <Button variant="outline" className="h-20 flex-col gap-2">
                          <Plus className="w-5 h-5" />
                          <span>Take Test</span>
                        </Button>
                        <Button variant="outline" className="h-20 flex-col gap-2">
                          <ExternalLink className="w-5 h-5" />
                          <span>View Public Profile</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Job Offers Tab */}
              <TabsContent value="offers" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader>
                      <CardTitle>Job Offers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {jobOffers.map((offer) => (
                          <div key={offer.id} className="p-4 border border-border rounded-lg">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="font-semibold text-foreground">{offer.title}</h3>
                                <p className="text-sm text-muted-foreground">{offer.company}</p>
                              </div>
                              <Badge variant={offer.status === 'pending' ? 'secondary' : 'default'}>
                                {offer.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span>{offer.salary}</span>
                              <span>{offer.location}</span>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="cosmic" size="sm">
                                View Details
                              </Button>
                              <Button variant="outline" size="sm">
                                Schedule Interview
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Test Results Tab */}
              <TabsContent value="tests" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader>
                      <CardTitle>Test Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {tests.map((test) => (
                          <div key={test.id} className="p-4 border border-border rounded-lg">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h3 className="font-semibold text-foreground">{test.name}</h3>
                                <p className="text-sm text-muted-foreground">Completed on {test.date}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-primary">{test.score}%</div>
                                <Badge variant="default">Passed</Badge>
                              </div>
                            </div>
                            <Progress value={test.score} className="h-2 mb-3" />
                            <Button variant="outline" size="sm">
                              View Certificate
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader>
                      <CardTitle>Profile Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={profile.avatar} alt={profile.name} />
                          <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-foreground">{profile.name}</h3>
                          <p className="text-muted-foreground">{profile.title}</p>
                          <p className="text-sm text-muted-foreground">{profile.location}</p>
                        </div>
                        <Button variant="outline" size="sm" className="ml-auto">
                          Change Photo
                        </Button>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Profile Completion</h4>
                        <Progress value={profile.profileCompletion} className="h-2 mb-2" />
                        <p className="text-sm text-muted-foreground">
                          {profile.profileCompletion}% complete
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="cosmic">
                          Edit Profile
                        </Button>
                        <Button variant="outline">
                          Privacy Settings
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="cosmic-card">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback className="text-lg">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-foreground mb-1">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{profile.title}</p>
                  <Badge variant="secondary">{profile.visibility} profile</Badge>
                  <Button variant="outline" className="w-full mt-4">
                    <User className="w-4 h-4 mr-2" />
                    View Public Profile
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Upcoming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium">Interview with TechCorp</p>
                      <p className="text-xs text-muted-foreground">Tomorrow at 2:00 PM</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium">Technical Assessment</p>
                      <p className="text-xs text-muted-foreground">Friday at 10:00 AM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentDashboard;