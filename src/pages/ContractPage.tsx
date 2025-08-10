import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Send, 
  Edit,
  Check,
  Clock,
  User,
  Building,
  DollarSign,
  Calendar,
  Shield,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';

const ContractPage = () => {
  const [contractType, setContractType] = useState('full-service');
  const [formData, setFormData] = useState({
    candidateName: '',
    position: '',
    startDate: '',
    salary: '',
    currency: 'USD',
    workLocation: 'remote',
    contractDuration: '',
    benefits: [],
    additionalTerms: ''
  });

  const [existingContracts] = useState([
    {
      id: 1,
      candidate: 'Alex Johnson',
      position: 'Senior AI Engineer',
      status: 'signed',
      value: '$180,000',
      startDate: '2024-02-01',
      type: 'Full-time'
    },
    {
      id: 2,
      candidate: 'Sarah Chen',
      position: 'React Developer',
      status: 'pending',
      value: '$95,000',
      startDate: '2024-02-15',
      type: 'Contract'
    },
    {
      id: 3,
      candidate: 'Mike Rodriguez',
      position: 'Product Manager',
      status: 'draft',
      value: '$120,000',
      startDate: '2024-03-01',
      type: 'Full-time'
    }
  ]);

  const contractTemplates = [
    {
      id: 1,
      name: 'Full-Time Employment',
      description: 'Standard full-time employment contract with benefits',
      fields: ['salary', 'benefits', 'startDate', 'location']
    },
    {
      id: 2,
      name: 'Contract Worker',
      description: 'Independent contractor agreement for project-based work',
      fields: ['hourlyRate', 'duration', 'deliverables', 'payment']
    },
    {
      id: 3,
      name: 'Part-Time Position',
      description: 'Part-time employment with flexible scheduling',
      fields: ['hourlyRate', 'schedule', 'benefits', 'duration']
    }
  ];

  const benefits = [
    'Health Insurance',
    'Dental Insurance',
    'Vision Insurance',
    '401(k) Matching',
    'Paid Time Off',
    'Remote Work',
    'Professional Development',
    'Stock Options'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contract data:', formData);
    // Mock contract creation
  };

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
                Contract <span className="text-primary text-glow">Management</span>
              </h1>
              <p className="text-muted-foreground">
                Create, manage, and track employment contracts with e-signature integration
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Templates
              </Button>
              <Button variant="cosmic">
                <Plus className="w-4 h-4 mr-2" />
                New Contract
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="create" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="create">Create Contract</TabsTrigger>
                <TabsTrigger value="existing">Existing Contracts</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>

              {/* Create Contract Tab */}
              <TabsContent value="create" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader>
                      <CardTitle>Create New Contract</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Contract Type Selection */}
                        <div>
                          <Label className="text-base font-semibold">Contract Type</Label>
                          <div className="grid md:grid-cols-2 gap-4 mt-3">
                            <div 
                              className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                                contractType === 'full-service' 
                                  ? 'border-primary bg-primary/5' 
                                  : 'border-border hover:border-primary/50'
                              }`}
                              onClick={() => setContractType('full-service')}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-nebula rounded-lg flex items-center justify-center">
                                  <Building className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="font-semibold">Full Service Contract</h3>
                                  <p className="text-sm text-muted-foreground">Complete hiring solution with ongoing support</p>
                                </div>
                              </div>
                            </div>
                            <div 
                              className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                                contractType === 'one-time' 
                                  ? 'border-primary bg-primary/5' 
                                  : 'border-border hover:border-primary/50'
                              }`}
                              onClick={() => setContractType('one-time')}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-nebula rounded-lg flex items-center justify-center">
                                  <User className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="font-semibold">One-Time Placement</h3>
                                  <p className="text-sm text-muted-foreground">Single placement with basic contract</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Basic Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Basic Information</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="candidateName">Candidate Name</Label>
                              <Input
                                id="candidateName"
                                value={formData.candidateName}
                                onChange={(e) => setFormData({...formData, candidateName: e.target.value})}
                                placeholder="Enter candidate name"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="position">Position</Label>
                              <Input
                                id="position"
                                value={formData.position}
                                onChange={(e) => setFormData({...formData, position: e.target.value})}
                                placeholder="Job title/position"
                                required
                              />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="startDate">Start Date</Label>
                              <Input
                                id="startDate"
                                type="date"
                                value={formData.startDate}
                                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="workLocation">Work Location</Label>
                              <Select value={formData.workLocation} onValueChange={(value) => setFormData({...formData, workLocation: value})}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="remote">Remote</SelectItem>
                                  <SelectItem value="onsite">On-site</SelectItem>
                                  <SelectItem value="hybrid">Hybrid</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Compensation */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Compensation</h3>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="md:col-span-2">
                              <Label htmlFor="salary">Annual Salary</Label>
                              <Input
                                id="salary"
                                type="number"
                                value={formData.salary}
                                onChange={(e) => setFormData({...formData, salary: e.target.value})}
                                placeholder="Enter salary amount"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="currency">Currency</Label>
                              <Select value={formData.currency} onValueChange={(value) => setFormData({...formData, currency: value})}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="USD">USD</SelectItem>
                                  <SelectItem value="EUR">EUR</SelectItem>
                                  <SelectItem value="GBP">GBP</SelectItem>
                                  <SelectItem value="GEL">GEL</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Benefits */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Benefits & Perks</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {benefits.map((benefit) => (
                              <div key={benefit} className="flex items-center space-x-2">
                                <Checkbox 
                                  id={benefit}
                                  checked={formData.benefits.includes(benefit)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      setFormData({
                                        ...formData,
                                        benefits: [...formData.benefits, benefit]
                                      });
                                    } else {
                                      setFormData({
                                        ...formData,
                                        benefits: formData.benefits.filter(b => b !== benefit)
                                      });
                                    }
                                  }}
                                />
                                <Label htmlFor={benefit} className="text-sm">
                                  {benefit}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        {/* Additional Terms */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Additional Terms</h3>
                          <Textarea
                            value={formData.additionalTerms}
                            onChange={(e) => setFormData({...formData, additionalTerms: e.target.value})}
                            placeholder="Enter any additional terms, conditions, or special clauses..."
                            rows={4}
                          />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                          <Button type="submit" variant="cosmic" className="flex-1">
                            <FileText className="w-4 h-4 mr-2" />
                            Generate Contract
                          </Button>
                          <Button type="button" variant="outline">
                            <Edit className="w-4 h-4 mr-2" />
                            Save as Draft
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Existing Contracts Tab */}
              <TabsContent value="existing" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader>
                      <CardTitle>Contract Status Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {existingContracts.map((contract) => (
                          <div key={contract.id} className="p-4 border border-border rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h3 className="font-semibold text-foreground">{contract.candidate}</h3>
                                <p className="text-sm text-muted-foreground">{contract.position}</p>
                                <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                                  <span>Start: {contract.startDate}</span>
                                  <span>{contract.type}</span>
                                  <span>{contract.value}</span>
                                </div>
                              </div>
                              <div className="text-center mx-6">
                                <Badge variant={
                                  contract.status === 'signed' ? 'default' :
                                  contract.status === 'pending' ? 'secondary' : 'outline'
                                }>
                                  {contract.status}
                                </Badge>
                              </div>
                              <div className="flex flex-col gap-2">
                                <Button variant="outline" size="sm">
                                  <FileText className="w-4 h-4 mr-1" />
                                  View
                                </Button>
                                {contract.status === 'draft' && (
                                  <Button variant="cosmic" size="sm">
                                    <Send className="w-4 h-4 mr-1" />
                                    Send
                                  </Button>
                                )}
                                {contract.status === 'signed' && (
                                  <Button variant="outline" size="sm">
                                    <Download className="w-4 h-4 mr-1" />
                                    Download
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Templates Tab */}
              <TabsContent value="templates" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="cosmic-card">
                    <CardHeader>
                      <CardTitle>Contract Templates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {contractTemplates.map((template) => (
                          <div key={template.id} className="p-4 border border-border rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">{template.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                            <div className="mb-4">
                              <p className="text-xs font-medium text-muted-foreground mb-2">Includes:</p>
                              <div className="flex flex-wrap gap-1">
                                {template.fields.map((field) => (
                                  <Badge key={field} variant="outline" className="text-xs">
                                    {field}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <Button variant="cosmic" className="w-full">
                              Use Template
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contract Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Contract Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Contracts</span>
                      <span className="font-medium">27</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Signed</span>
                      <span className="font-medium text-primary">18</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pending</span>
                      <span className="font-medium text-accent">6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Drafts</span>
                      <span className="font-medium">3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>E-signature integration</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Legal compliance</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Template library</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Version tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Automatic reminders</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Help & Support */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="cosmic-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-nebula rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our legal team can review your contracts and ensure compliance.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Legal Support
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

export default ContractPage;
