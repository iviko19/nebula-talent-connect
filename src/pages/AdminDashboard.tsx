import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit, Trash2, User, Star, MapPin, DollarSign, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface TalentProfile {
  id: string;
  candidateNumber: string;
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
  realName: string;
  email: string;
  phone: string;
}

const AdminDashboard = () => {
  const [talents, setTalents] = useState<TalentProfile[]>([
    {
      id: '1',
      candidateNumber: 'CAND-2938',
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
      realName: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1-555-0123'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingTalent, setEditingTalent] = useState<TalentProfile | null>(null);
  const [newTalent, setNewTalent] = useState<Partial<TalentProfile>>({
    candidateNumber: '',
    seniority: '',
    yearsExperience: 0,
    overallScore: 0,
    skills: [],
    availability: 'Available',
    industry: [],
    workType: 'Full-time',
    location: '',
    salaryRange: { min: 0, max: 0 },
    recentProject: '',
    realName: '',
    email: '',
    phone: ''
  });

  const generateCandidateNumber = () => {
    return `CAND-${Math.floor(Math.random() * 9000) + 1000}`;
  };

  const handleAddTalent = () => {
    const talent: TalentProfile = {
      ...newTalent,
      id: Date.now().toString(),
      candidateNumber: generateCandidateNumber(),
    } as TalentProfile;
    
    setTalents([...talents, talent]);
    setNewTalent({
      candidateNumber: '',
      seniority: '',
      yearsExperience: 0,
      overallScore: 0,
      skills: [],
      availability: 'Available',
      industry: [],
      workType: 'Full-time',
      location: '',
      salaryRange: { min: 0, max: 0 },
      recentProject: '',
      realName: '',
      email: '',
      phone: ''
    });
    setIsAddDialogOpen(false);
  };

  const handleEditTalent = (talent: TalentProfile) => {
    setEditingTalent(talent);
  };

  const handleUpdateTalent = () => {
    if (!editingTalent) return;
    
    setTalents(talents.map(t => t.id === editingTalent.id ? editingTalent : t));
    setEditingTalent(null);
  };

  const handleDeleteTalent = (id: string) => {
    setTalents(talents.filter(t => t.id !== id));
  };

  const filteredTalents = talents.filter(talent =>
    talent.candidateNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    talent.seniority.toLowerCase().includes(searchQuery.toLowerCase()) ||
    talent.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    talent.skills.some(skill => skill.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-cosmic font-bold text-foreground">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage talent profiles and candidate database
              </p>
            </div>
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="cosmic" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Talent
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Talent</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="realName">Real Name</Label>
                      <Input
                        id="realName"
                        value={newTalent.realName || ''}
                        onChange={(e) => setNewTalent({...newTalent, realName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newTalent.email || ''}
                        onChange={(e) => setNewTalent({...newTalent, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="seniority">Seniority</Label>
                      <Select value={newTalent.seniority} onValueChange={(value) => setNewTalent({...newTalent, seniority: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select seniority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Junior">Junior</SelectItem>
                          <SelectItem value="Mid-level">Mid-level</SelectItem>
                          <SelectItem value="Senior">Senior</SelectItem>
                          <SelectItem value="Lead">Lead</SelectItem>
                          <SelectItem value="Principal">Principal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="experience">Years Experience</Label>
                      <Input
                        id="experience"
                        type="number"
                        value={newTalent.yearsExperience || 0}
                        onChange={(e) => setNewTalent({...newTalent, yearsExperience: parseInt(e.target.value)})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="score">Overall Score</Label>
                      <Input
                        id="score"
                        type="number"
                        min="0"
                        max="100"
                        value={newTalent.overallScore || 0}
                        onChange={(e) => setNewTalent({...newTalent, overallScore: parseInt(e.target.value)})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="availability">Availability</Label>
                      <Select value={newTalent.availability} onValueChange={(value: 'Available' | 'Busy') => setNewTalent({...newTalent, availability: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Available">Available</SelectItem>
                          <SelectItem value="Busy">Busy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={newTalent.location || ''}
                      onChange={(e) => setNewTalent({...newTalent, location: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="minSalary">Min Salary (k)</Label>
                      <Input
                        id="minSalary"
                        type="number"
                        value={newTalent.salaryRange?.min || 0}
                        onChange={(e) => setNewTalent({...newTalent, salaryRange: {...newTalent.salaryRange!, min: parseInt(e.target.value)}})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="maxSalary">Max Salary (k)</Label>
                      <Input
                        id="maxSalary"
                        type="number"
                        value={newTalent.salaryRange?.max || 0}
                        onChange={(e) => setNewTalent({...newTalent, salaryRange: {...newTalent.salaryRange!, max: parseInt(e.target.value)}})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="recentProject">Recent Project</Label>
                    <Textarea
                      id="recentProject"
                      value={newTalent.recentProject || ''}
                      onChange={(e) => setNewTalent({...newTalent, recentProject: e.target.value})}
                    />
                  </div>

                  <Button onClick={handleAddTalent} variant="cosmic">
                    Add Talent
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search candidates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="cosmic-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Candidates</p>
                    <p className="text-2xl font-bold text-foreground">{talents.length}</p>
                  </div>
                  <User className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="cosmic-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Available</p>
                    <p className="text-2xl font-bold text-foreground">
                      {talents.filter(t => t.availability === 'Available').length}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cosmic-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg Score</p>
                    <p className="text-2xl font-bold text-foreground">
                      {Math.round(talents.reduce((acc, t) => acc + t.overallScore, 0) / talents.length || 0)}
                    </p>
                  </div>
                  <Star className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="cosmic-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Senior Level</p>
                    <p className="text-2xl font-bold text-foreground">
                      {talents.filter(t => t.seniority === 'Senior' || t.seniority === 'Lead' || t.seniority === 'Principal').length}
                    </p>
                  </div>
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
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
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {talent.candidateNumber}
                          </h3>
                          <Badge variant={talent.availability === 'Available' ? 'default' : 'secondary'}>
                            {talent.availability}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
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

                        <div className="mt-4">
                          <p className="text-sm text-muted-foreground mb-2">Skills:</p>
                          <div className="flex flex-wrap gap-1">
                            {talent.skills.map((skill) => (
                              <Badge key={skill.name} variant="secondary" className="text-xs">
                                {skill.name} ({skill.proficiency})
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mt-4 line-clamp-2">
                          <strong>Recent Project:</strong> {talent.recentProject}
                        </p>

                        <div className="mt-4 text-xs text-muted-foreground">
                          <strong>Contact:</strong> {talent.realName} • {talent.email}
                        </div>
                      </div>

                      <div className="flex gap-2 ml-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditTalent(talent)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteTalent(talent.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Edit Dialog */}
          {editingTalent && (
            <Dialog open={!!editingTalent} onOpenChange={() => setEditingTalent(null)}>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Edit Talent: {editingTalent.candidateNumber}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div>
                    <Label htmlFor="editScore">Overall Score</Label>
                    <Input
                      id="editScore"
                      type="number"
                      min="0"
                      max="100"
                      value={editingTalent.overallScore}
                      onChange={(e) => setEditingTalent({...editingTalent, overallScore: parseInt(e.target.value)})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="editAvailability">Availability</Label>
                    <Select value={editingTalent.availability} onValueChange={(value: 'Available' | 'Busy') => setEditingTalent({...editingTalent, availability: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="Busy">Busy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="editProject">Recent Project</Label>
                    <Textarea
                      id="editProject"
                      value={editingTalent.recentProject}
                      onChange={(e) => setEditingTalent({...editingTalent, recentProject: e.target.value})}
                    />
                  </div>

                  <Button onClick={handleUpdateTalent} variant="cosmic">
                    Update Talent
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;