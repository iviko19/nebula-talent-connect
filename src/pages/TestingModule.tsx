import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Plus, 
  Clock, 
  Users, 
  Award, 
  Code,
  BookOpen,
  CheckCircle,
  Eye,
  Edit,
  Trash2,
  Filter,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TestingModule = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const [testTemplates] = useState([
    {
      id: 1,
      name: 'JavaScript & React Fundamentals',
      category: 'Frontend',
      duration: 60,
      questions: 25,
      difficulty: 'Intermediate',
      usage: 156,
      avgScore: 78
    },
    {
      id: 2,
      name: 'Python & Machine Learning',
      category: 'Data Science',
      duration: 90,
      questions: 30,
      difficulty: 'Advanced',
      usage: 89,
      avgScore: 82
    },
    {
      id: 3,
      name: 'System Design Principles',
      category: 'Architecture',
      duration: 45,
      questions: 15,
      difficulty: 'Senior',
      usage: 67,
      avgScore: 71
    },
    {
      id: 4,
      name: 'SQL & Database Design',
      category: 'Backend',
      duration: 30,
      questions: 20,
      difficulty: 'Intermediate',
      usage: 134,
      avgScore: 85
    }
  ]);

  const [activeTests] = useState([
    {
      id: 1,
      candidate: 'Alex Johnson',
      test: 'JavaScript & React Fundamentals',
      startTime: '2024-01-20 14:30',
      timeRemaining: 35,
      status: 'in-progress',
      currentQuestion: 12
    },
    {
      id: 2,
      candidate: 'Sarah Chen',
      test: 'Python & Machine Learning',
      startTime: '2024-01-20 15:00',
      timeRemaining: 0,
      status: 'completed',
      score: 88
    },
    {
      id: 3,
      candidate: 'Mike Rodriguez',
      test: 'System Design Principles',
      startTime: '2024-01-20 16:00',
      timeRemaining: 25,
      status: 'in-progress',
      currentQuestion: 8
    }
  ]);

  const [testResults] = useState([
    {
      id: 1,
      candidate: 'Emily Davis',
      test: 'JavaScript & React Fundamentals',
      score: 92,
      completedDate: '2024-01-19',
      status: 'passed',
      timeSpent: 58,
      category: 'Frontend'
    },
    {
      id: 2,
      candidate: 'John Smith',
      test: 'SQL & Database Design',
      score: 76,
      completedDate: '2024-01-19',
      status: 'passed',
      timeSpent: 28,
      category: 'Backend'
    },
    {
      id: 3,
      candidate: 'Lisa Wang',
      test: 'Python & Machine Learning',
      score: 65,
      completedDate: '2024-01-18',
      status: 'failed',
      timeSpent: 87,
      category: 'Data Science'
    }
  ]);

  const [stats] = useState({
    totalTests: 245,
    activeTests: 8,
    avgScore: 79,
    passRate: 68
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
                Testing <span className="text-primary text-glow">Module</span>
              </h1>
              <p className="text-muted-foreground">
                Create, manage, and analyze technical assessments for candidates
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                Test Library
              </Button>
              <Button variant="cosmic">
                <Plus className="w-4 h-4 mr-2" />
                Create Test
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
            { key: 'totalTests', label: 'Total Tests', value: stats.totalTests, icon: Award, color: 'text-primary' },
            { key: 'activeTests', label: 'Active Tests', value: stats.activeTests, icon: Play, color: 'text-accent' },
            { key: 'avgScore', label: 'Average Score', value: `${stats.avgScore}%`, icon: CheckCircle, color: 'text-primary' },
            { key: 'passRate', label: 'Pass Rate', value: `${stats.passRate}%`, icon: Users, color: 'text-accent' }
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

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="templates">Test Templates</TabsTrigger>
            <TabsTrigger value="active">Active Tests</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
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
                      <Button variant="cosmic" className="h-20 flex-col gap-2">
                        <Plus className="w-5 h-5" />
                        <span>Create New Test</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col gap-2">
                        <Code className="w-5 h-5" />
                        <span>Use Template</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col gap-2">
                        <Eye className="w-5 h-5" />
                        <span>Preview Tests</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col gap-2">
                        <Award className="w-5 h-5" />
                        <span>View Analytics</span>
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
                    <CardTitle>Recent Test Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {activeTests.slice(0, 3).map((test) => (
                        <div key={test.id} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium">{test.candidate}</p>
                            <Badge variant={test.status === 'completed' ? 'default' : 'secondary'}>
                              {test.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{test.test}</p>
                          {test.status === 'in-progress' && (
                            <div className="mt-2">
                              <div className="flex justify-between text-xs mb-1">
                                <span>Question {test.currentQuestion}/25</span>
                                <span>{test.timeRemaining}m left</span>
                              </div>
                              <Progress value={(test.currentQuestion / 25) * 100} className="h-1" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          {/* Test Templates Tab */}
          <TabsContent value="templates" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="cosmic-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Test Templates</CardTitle>
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Search templates..."
                        className="w-64"
                      />
                      <Select>
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="frontend">Frontend</SelectItem>
                          <SelectItem value="backend">Backend</SelectItem>
                          <SelectItem value="data-science">Data Science</SelectItem>
                          <SelectItem value="architecture">Architecture</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="cosmic">
                        <Plus className="w-4 h-4 mr-2" />
                        New Template
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {testTemplates.map((template) => (
                      <div key={template.id} className="p-4 border border-border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-foreground">{template.name}</h3>
                            <Badge variant="outline" className="mt-1">
                              {template.category}
                            </Badge>
                          </div>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{template.duration} min</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{template.questions} questions</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            <span>{template.difficulty}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{template.usage} uses</span>
                          </div>
                        </div>

                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Average Score</span>
                            <span className="font-semibold">{template.avgScore}%</span>
                          </div>
                          <Progress value={template.avgScore} className="h-2" />
                        </div>

                        <div className="flex gap-2">
                          <Button variant="cosmic" size="sm" className="flex-1">
                            Use Template
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            Preview
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Active Tests Tab */}
          <TabsContent value="active" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle>Currently Active Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeTests.map((test) => (
                      <div key={test.id} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-foreground">{test.candidate}</h3>
                            <p className="text-sm text-muted-foreground">{test.test}</p>
                            <p className="text-xs text-muted-foreground">Started: {test.startTime}</p>
                          </div>
                          <Badge variant={test.status === 'completed' ? 'default' : 'secondary'}>
                            {test.status}
                          </Badge>
                        </div>

                        {test.status === 'in-progress' ? (
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span>Progress: Question {test.currentQuestion}/25</span>
                              <span className="text-primary font-medium">
                                {test.timeRemaining} minutes remaining
                              </span>
                            </div>
                            <Progress value={(test.currentQuestion / 25) * 100} className="h-2 mb-3" />
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4 mr-1" />
                                Monitor
                              </Button>
                              <Button variant="destructive" size="sm">
                                End Test
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="flex items-center gap-4 mb-3">
                              <div className="text-center">
                                <div className="text-lg font-bold text-primary">{test.score}%</div>
                                <p className="text-xs text-muted-foreground">Score</p>
                              </div>
                              <Badge variant="default">Completed</Badge>
                            </div>
                            <Button variant="cosmic" size="sm">
                              View Results
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="cosmic-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Test Results</CardTitle>
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Search results..."
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
                    {testResults.map((result) => (
                      <div key={result.id} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{result.candidate}</h3>
                            <p className="text-sm text-muted-foreground">{result.test}</p>
                            <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                              <span>Completed: {result.completedDate}</span>
                              <span>Time: {result.timeSpent} min</span>
                              <Badge variant="outline">{result.category}</Badge>
                            </div>
                          </div>
                          <div className="text-center mx-6">
                            <div className={`text-2xl font-bold ${
                              result.status === 'passed' ? 'text-primary' : 'text-destructive'
                            }`}>
                              {result.score}%
                            </div>
                            <Badge variant={result.status === 'passed' ? 'default' : 'destructive'}>
                              {result.status}
                            </Badge>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              Download Report
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
        </Tabs>
      </div>
    </div>
  );
};

export default TestingModule;