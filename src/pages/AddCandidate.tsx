import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, User, Mail, Phone, MapPin, DollarSign, Briefcase, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Skill {
  name: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
}

const AddCandidate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  
  const isEditing = Boolean(id);
  
  const [formData, setFormData] = useState({
    realName: '',
    email: '',
    phone: '',
    seniority: '',
    yearsExperience: '',
    location: '',
    minSalary: '',
    maxSalary: '',
    workType: '',
    availability: '',
    industry: '',
    recentProject: '',
    status: 'Active'
  });

  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState({ name: '', proficiency: 'Intermediate' as const });

  // Load candidate data if editing
  useEffect(() => {
    if (isEditing && id) {
      // TODO: Implement API call to load candidate data
      // const loadCandidate = async () => {
      //   const response = await fetch(`/api/talents/${id}`);
      //   const candidateData = await response.json();
      //   setFormData(candidateData);
      //   setSkills(candidateData.skills);
      // };
      // loadCandidate();
      
      // MOCK DATA - Remove when backend is ready
      const mockCandidate = {
        realName: 'John Smith',
        email: 'john.smith@email.com',
        phone: '+1-555-0123',
        seniority: 'Senior',
        yearsExperience: '5',
        location: 'New York, USA',
        minSalary: '120',
        maxSalary: '150',
        workType: 'Full-time',
        availability: 'Available',
        industry: 'FinTech, E-commerce',
        recentProject: 'Led development of a real-time trading platform serving 10M+ users',
        status: 'Active'
      };
      
      const mockSkills = [
        { name: 'React', proficiency: 'Expert' as const },
        { name: 'Node.js', proficiency: 'Advanced' as const },
        { name: 'TypeScript', proficiency: 'Expert' as const },
        { name: 'AWS', proficiency: 'Intermediate' as const }
      ];
      
      setFormData(mockCandidate);
      setSkills(mockSkills);
    }
  }, [isEditing, id]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = () => {
    if (newSkill.name.trim()) {
      setSkills(prev => [...prev, { ...newSkill }]);
      setNewSkill({ name: '', proficiency: 'Intermediate' });
    }
  };

  const removeSkill = (index: number) => {
    setSkills(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement API call to save/update candidate
    // const candidateData = { ...formData, skills };
    // const url = isEditing ? `/api/talents/${id}` : '/api/talents';
    // const method = isEditing ? 'PUT' : 'POST';
    // 
    // const response = await fetch(url, {
    //   method,
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(candidateData)
    // });
    // 
    // if (response.ok) {
    //   toast({ title: "Success", description: "Candidate saved successfully" });
    //   navigate('/admin-dashboard');
    // }
    
    toast({
      title: isEditing ? "Candidate Updated" : "Candidate Added",
      description: isEditing 
        ? "Candidate profile has been successfully updated." 
        : "New candidate has been successfully added to the system.",
    });
    navigate('/admin-dashboard');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/admin-dashboard')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-3xl font-cosmic font-bold text-foreground">
              {isEditing ? 'Edit Candidate' : 'Add New Candidate'}
            </h1>
            <p className="text-muted-foreground">
              {isEditing ? 'Update candidate profile information' : 'Create a new candidate profile in the system'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="realName">Full Name</Label>
                    <Input
                      id="realName"
                      value={formData.realName}
                      onChange={(e) => handleInputChange('realName', e.target.value)}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1-555-0123"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="New York, USA"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Information */}
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Professional Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="seniority">Seniority Level</Label>
                    <Select value={formData.seniority} onValueChange={(value) => handleInputChange('seniority', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select seniority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Junior">Junior</SelectItem>
                        <SelectItem value="Mid-Level">Mid-Level</SelectItem>
                        <SelectItem value="Senior">Senior</SelectItem>
                        <SelectItem value="Lead">Lead</SelectItem>
                        <SelectItem value="Principal">Principal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="yearsExperience">Years of Experience</Label>
                    <Input
                      id="yearsExperience"
                      type="number"
                      value={formData.yearsExperience}
                      onChange={(e) => handleInputChange('yearsExperience', e.target.value)}
                      placeholder="5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="workType">Work Type</Label>
                    <Select value={formData.workType} onValueChange={(value) => handleInputChange('workType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select work type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Part-time">Part-time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Select value={formData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="Busy">Busy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="industry">Industry Preference</Label>
                  <Input
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    placeholder="FinTech, E-commerce (comma separated)"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="minSalary">Min Salary (K USD)</Label>
                    <Input
                      id="minSalary"
                      type="number"
                      value={formData.minSalary}
                      onChange={(e) => handleInputChange('minSalary', e.target.value)}
                      placeholder="120"
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxSalary">Max Salary (K USD)</Label>
                    <Input
                      id="maxSalary"
                      type="number"
                      value={formData.maxSalary}
                      onChange={(e) => handleInputChange('maxSalary', e.target.value)}
                      placeholder="150"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Skill name (e.g., React)"
                    value={newSkill.name}
                    onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
                    className="flex-1"
                  />
                  <Select
                    value={newSkill.proficiency}
                    onValueChange={(value: any) => setNewSkill(prev => ({ ...prev, proficiency: value }))}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="button" onClick={addSkill}>Add</Button>
                </div>
                
                {skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="cursor-pointer"
                        onClick={() => removeSkill(index)}
                      >
                        {skill.name} ({skill.proficiency}) ×
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Project */}
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle>Recent Project</CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="recentProject">Project Description</Label>
                <Textarea
                  id="recentProject"
                  value={formData.recentProject}
                  onChange={(e) => handleInputChange('recentProject', e.target.value)}
                  placeholder="Describe the most recent significant project..."
                  className="min-h-24"
                />
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                <Save className="w-4 h-4 mr-2" />
                {isEditing ? 'Update Candidate' : 'Save Candidate'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/admin-dashboard')}
              >
                Cancel
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AddCandidate;