import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'talent'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect based on user type
    if (formData.userType === 'talent') {
      navigate('/talent-dashboard');
    } else {
      navigate('/employer-dashboard');
    }
  };

  return (
    <div className="min-h-screen py-8 flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-cosmic font-bold bg-gradient-nebula bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Sign in to your Nebula account
            </p>
          </div>

          {/* Login Form */}
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="text-center">Sign In</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={formData.userType} onValueChange={(value) => setFormData({...formData, userType: value})}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="talent" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Talent
                  </TabsTrigger>
                  <TabsTrigger value="employer" className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Employer
                  </TabsTrigger>
                </TabsList>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

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

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-muted-foreground">Remember me</span>
                    </label>
                    <Link 
                      to="/forgot-password" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button type="submit" variant="cosmic" className="w-full group">
                    Sign In
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <TabsContent value="talent" className="mt-6">
                  <div className="text-center text-sm">
                    <p className="text-muted-foreground mb-2">
                      Don't have an account?
                    </p>
                    <Link to="/signup">
                      <Button variant="cosmic-outline" size="sm">
                        Join as Talent
                      </Button>
                    </Link>
                  </div>
                </TabsContent>

                <TabsContent value="employer" className="mt-6">
                  <div className="text-center text-sm">
                    <p className="text-muted-foreground mb-2">
                      Don't have an account?
                    </p>
                    <Link to="/signup">
                      <Button variant="cosmic-outline" size="sm">
                        Register Company
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>

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
            </CardContent>
          </Card>

          {/* Demo Credentials */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-muted/20 border-dashed">
              <CardContent className="p-4">
                <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <Badge variant="secondary">Demo</Badge>
                  Test Credentials
                </h3>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p><strong>Talent:</strong> talent@demo.com / demo123</p>
                  <p><strong>Employer:</strong> employer@demo.com / demo123</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

};

export default Login;