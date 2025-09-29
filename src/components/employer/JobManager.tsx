import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Eye, Edit, Pause, Play, Trash2, Users, Calendar, MapPin, DollarSign, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

// =================================================================
// JOB MANAGER - API INTEGRATION POINTS
// =================================================================
// Required API endpoints:
// GET    /api/jobs/employer/:employerId - Fetch jobs for logged-in employer
// POST   /api/jobs - Create new job posting
// PUT    /api/jobs/:id - Update existing job
// DELETE /api/jobs/:id - Delete job posting
// GET    /api/jobs/:id/applications - Get job applications
// PUT    /api/jobs/:id/status - Toggle job active/paused status
// =================================================================

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Part-time';
  salaryRange: string;
  description: string;
  requirements: string[];
  status: 'active' | 'paused' | 'draft';
  priority: 'high' | 'medium' | 'low';
  applicants: number;
  views: number;
  postedDate: string;
  expiryDate: string;
}

const JobManager = () => {
  const { toast } = useToast();
  
  // TODO: Load jobs from API on component mount
  // useEffect(() => {
  //   const loadJobs = async () => {
  //     const response = await fetch(`/api/jobs/employer/${currentUserId}`);
  //     const jobsData = await response.json();
  //     setJobs(jobsData.data);
  //   };
  //   loadJobs();
  // }, []);
  
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Remote (Global)',
      type: 'Full-time',
      salaryRange: '$90,000 - $120,000',
      description: 'We are looking for a skilled React developer to join our growing team...',
      requirements: ['React', 'TypeScript', 'Node.js', '5+ years experience'],
      status: 'active',
      priority: 'high',
      applicants: 34,
      views: 156,
      postedDate: '2024-02-15',
      expiryDate: '2024-03-15'
    },
    {
      id: '2',
      title: 'AI/ML Engineer',
      department: 'Data Science',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salaryRange: '$100,000 - $140,000',
      description: 'Join our AI team to build cutting-edge machine learning solutions...',
      requirements: ['Python', 'TensorFlow', 'PyTorch', 'PhD/Masters preferred'],
      status: 'active',
      priority: 'high',
      applicants: 28,
      views: 89,
      postedDate: '2024-02-14',
      expiryDate: '2024-03-14'
    },
    {
      id: '3',
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      salaryRange: '$80,000 - $110,000',
      description: 'Lead product strategy and roadmap for our core platform...',
      requirements: ['Product Management', 'Analytics', 'Agile', '3+ years experience'],
      status: 'paused',
      priority: 'medium',
      applicants: 52,
      views: 203,
      postedDate: '2024-02-10',
      expiryDate: '2024-03-10'
    }
  ]);

  const [jobDialogOpen, setJobDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [newJob, setNewJob] = useState<Partial<Job>>({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    salaryRange: '',
    description: '',
    requirements: [],
    status: 'draft',
    priority: 'medium'
  });

  const handleCreateJob = () => {
    setEditingJob(null);
    setNewJob({
      title: '',
      department: '',
      location: '',
      type: 'Full-time',
      salaryRange: '',
      description: '',
      requirements: [],
      status: 'draft',
      priority: 'medium'
    });
    setJobDialogOpen(true);
  };

  const handleEditJob = (job: Job) => {
    setEditingJob(job);
    setNewJob(job);
    setJobDialogOpen(true);
  };

  const handleSaveJob = async () => {
    // TODO: Replace with API call
    // const jobData = { ...newJob };
    // const url = editingJob ? `/api/jobs/${editingJob.id}` : '/api/jobs';
    // const method = editingJob ? 'PUT' : 'POST';
    // 
    // const response = await fetch(url, {
    //   method,
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(jobData)
    // });
    // 
    // if (response.ok) {
    //   const savedJob = await response.json();
    //   if (editingJob) {
    //     setJobs(jobs.map(job => job.id === editingJob.id ? savedJob : job));
    //   } else {
    //     setJobs([...jobs, savedJob]);
    //   }
    // }
    
    if (editingJob) {
      setJobs(jobs.map(job => job.id === editingJob.id ? { ...job, ...newJob } as Job : job));
      toast({
        title: "Job Updated",
        description: `${newJob.title} has been updated successfully.`,
      });
    } else {
      const job: Job = {
        ...newJob,
        id: Date.now().toString(),
        applicants: 0,
        views: 0,
        postedDate: new Date().toISOString().split('T')[0],
        expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      } as Job;
      setJobs([...jobs, job]);
      toast({
        title: "Job Created",
        description: `${newJob.title} has been created successfully.`,
      });
    }
    setJobDialogOpen(false);
  };

  const handleToggleStatus = async (jobId: string) => {
    // TODO: Replace with API call to /api/jobs/:id/status
    setJobs(jobs.map(job => 
      job.id === jobId 
        ? { ...job, status: job.status === 'active' ? 'paused' : 'active' }
        : job
    ));
  };

  const handleDeleteJob = async (jobId: string) => {
    // TODO: Replace with API call to DELETE /api/jobs/:id
    setJobs(jobs.filter(job => job.id !== jobId));
    toast({
      title: "Job Deleted",
      description: "The job posting has been deleted.",
    });
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'paused': return 'secondary';
      case 'draft': return 'outline';
      default: return 'outline';
    }
  };

  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-cosmic font-bold text-foreground">Job Management</h2>
          <p className="text-muted-foreground">Create and manage your job postings</p>
        </div>
        <Button variant="cosmic" onClick={handleCreateJob}>
          <Plus className="w-4 h-4 mr-2" />
          Post New Job
        </Button>
      </div>

      <div className="grid gap-6">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="cosmic-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                      <Badge variant={getStatusBadgeVariant(job.status)}>
                        {job.status}
                      </Badge>
                      <Badge variant={getPriorityBadgeVariant(job.priority)}>
                        {job.priority} priority
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-1">{job.department}</p>
                    <p className="text-sm text-muted-foreground">Posted {job.postedDate} • Expires {job.expiryDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{job.applicants}</p>
                    <p className="text-sm text-muted-foreground">applicants</p>
                    <p className="text-xs text-muted-foreground">{job.views} views</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span>{job.salaryRange}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <Label className="text-sm font-medium text-muted-foreground">Requirements</Label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {job.requirements.map((req, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Users className="w-4 h-4 mr-2" />
                      Candidates ({job.applicants})
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleEditJob(job)}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleToggleStatus(job.id)}
                    >
                      {job.status === 'active' ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Activate
                        </>
                      )}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDeleteJob(job.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Job Creation/Edit Dialog */}
      <Dialog open={jobDialogOpen} onOpenChange={setJobDialogOpen}>
        <DialogContent className="cosmic-card max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingJob ? 'Edit Job' : 'Create New Job'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  placeholder="e.g., Senior React Developer"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  placeholder="e.g., Engineering"
                  value={newJob.department}
                  onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Remote (Global)"
                  value={newJob.location}
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="jobType">Job Type</Label>
                <Select 
                  value={newJob.type} 
                  onValueChange={(value) => setNewJob({ ...newJob, type: value as Job['type'] })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="salary">Salary Range</Label>
                <Input
                  id="salary"
                  placeholder="e.g., $90,000 - $120,000"
                  value={newJob.salaryRange}
                  onChange={(e) => setNewJob({ ...newJob, salaryRange: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select 
                  value={newJob.priority} 
                  onValueChange={(value) => setNewJob({ ...newJob, priority: value as Job['priority'] })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the role, responsibilities, and what you're looking for..."
                value={newJob.description}
                onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="requirements">Requirements (comma-separated)</Label>
              <Input
                id="requirements"
                placeholder="e.g., React, TypeScript, 5+ years experience"
                value={newJob.requirements?.join(', ')}
                onChange={(e) => setNewJob({ 
                  ...newJob, 
                  requirements: e.target.value.split(',').map(req => req.trim()).filter(req => req)
                })}
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setJobDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="cosmic" onClick={handleSaveJob}>
                {editingJob ? 'Update Job' : 'Create Job'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobManager;
