import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, User, Mail, Phone, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const JoinAsTalent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    skills: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const benefits = [
    'Access to exclusive job opportunities',
    'Work with top global companies',
    'Competitive compensation packages',
    'Remote-first opportunities',
    'Professional skill testing and validation',
    'Direct communication with employers'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto px-4"
        >
          <Card className="cosmic-card text-center">
            <CardContent className="p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="w-8 h-8 text-green-500" />
              </motion.div>
              
              <h2 className="text-2xl font-cosmic font-bold text-foreground mb-2">
                Application Submitted!
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Thank you for your interest! We will contact you soon to discuss opportunities and next steps.
              </p>
              
              <div className="bg-primary/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  <strong>What's next?</strong><br />
                  Our team will review your application and reach out within 2-3 business days with more information about our testing process and available opportunities.
                </p>
              </div>

              <Button 
                variant="cosmic" 
                asChild 
                className="w-full"
              >
                <a href="/">Return to Homepage</a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-cosmic font-bold bg-gradient-nebula bg-clip-text text-transparent mb-4">
              Join Our Talent Network
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with leading companies and unlock exciting career opportunities in tech
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="cosmic-card h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Why Join Our Network?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">{benefit}</p>
                    </motion.div>
                  ))}

                  <div className="mt-8 p-6 bg-gradient-cosmic rounded-lg text-white">
                    <h3 className="text-lg font-semibold mb-2">
                      Ready to get started?
                    </h3>
                    <p className="text-white/80 text-sm">
                      Fill out the form to join thousands of professionals who have found their dream jobs through our platform.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle>Apply to Join</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Personal Information */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="skills">Skills & Technologies *</Label>
                      <div className="relative">
                        <Code className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
                        <Textarea
                          id="skills"
                          placeholder="e.g., React, Node.js, Python, AWS, MongoDB..."
                          className="pl-10 min-h-[80px]"
                          value={formData.skills}
                          onChange={(e) => setFormData({...formData, skills: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your experience, what type of opportunities you're looking for, or any other relevant information..."
                        className="min-h-[100px]"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                      <p>
                        * Required fields. By submitting this form, you agree to be contacted by our team regarding potential job opportunities. Your information will be kept confidential.
                      </p>
                    </div>

                    <Button type="submit" variant="cosmic" className="w-full group">
                      Submit Application
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinAsTalent;