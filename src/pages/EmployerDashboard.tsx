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


        <div className="max-w-4xl mx-auto">
          <ShortlistManager />
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;