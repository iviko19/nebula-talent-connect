import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, User, Building, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    userType: 'talent',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    jobTitle: '',
    country: '',
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    // Mock signup - redirect based on user type
    if (formData.userType === 'talent') {
      navigate('/talent-dashboard');
    } else {
      navigate('/employer-dashboard');
    }
  };

  const benefits = [
    'Access to 50,000+ verified talents',
    'AI-powered skill matching',
    'Secure payment processing',
    'Global talent network',
    'Priority support'
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-cosmic font-bold bg-gradient-nebula bg-clip-text text-transparent mb-2">
              Join Nebula
            </h1>
            <p className="text-muted-foreground text-lg">
              Connect with the future of talent acquisition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="cosmic-card h-full">
                <CardHeader>
                  <CardTitle>Why Choose Nebula?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <p className="text-muted-foreground">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-cosmic rounded-lg text-white">
                    <h3 className="text-lg font-semibold mb-2">
                      Ready to get started?
                    </h3>
                    <p className="text-white/80 text-sm">
                      Join thousands of companies and professionals who trust Nebula 
                      for their talent acquisition needs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle className="text-center">Create Your Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={formData.userType} onValueChange={(value) => setFormData({...formData, userType: value})}>
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="talent" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        I'm Talent
                      </TabsTrigger>
                      <TabsTrigger value="employer" className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        I'm Hiring
                      </TabsTrigger>
                    </TabsList>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Personal Information */}
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          required
                        />
                        <Input
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          required
                        />
                      </div>

                      <Input
                        type="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />

                      {/* Company Info for Employers */}
                      <TabsContent value="employer" className="space-y-4 mt-4">
                        <Input
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          required={formData.userType === 'employer'}
                        />
                        <Input
                          placeholder="Job Title"
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                          required={formData.userType === 'employer'}
                        />
                      </TabsContent>

                      <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="ge">Georgia</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>

                      {/* Password */}
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                      </div>

                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                      </div>

                      {/* Terms Agreement */}
                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="terms"
                          className="rounded mt-1"
                          checked={formData.agreeToTerms}
                          onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                          required
                        />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          I agree to the{' '}
                          <Link to="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link to="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>

                      <Button type="submit" variant="cosmic" className="w-full group">
                        Create Account
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>

                    <Separator className="my-6" />

                    {/* Social Login */}
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full">
                        Continue with Google
                      </Button>
                      <Button variant="outline" className="w-full">
                        Continue with LinkedIn
                      </Button>
                      <Button variant="outline" className="w-full">
                        Continue with GitHub
                      </Button>
                    </div>

                    <div className="text-center text-sm mt-6">
                      <p className="text-muted-foreground">
                        Already have an account?{' '}
                        <Link to="/login" className="text-primary hover:underline">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );

};

export default Signup;