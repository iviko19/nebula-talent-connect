import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Shield, Zap, CheckCircle, Star, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ForCompanies = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Users,
      title: 'Pre-Screened Talent Pool',
      description: 'Access 50,000+ vetted AI and tech professionals ready to contribute from day one',
      color: 'text-primary'
    },
    {
      icon: Target,
      title: 'Advanced Skill Testing',
      description: 'Comprehensive technical assessments and real-world project evaluations',
      color: 'text-accent'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR compliance and data protection',
      color: 'text-primary'
    },
    {
      icon: Zap,
      title: 'AI-Powered Matching',
      description: 'Smart algorithms find the perfect fit for your team culture and requirements',
      color: 'text-accent'
    }
  ];

  const features = [
    {
      title: 'Talent Database Access',
      description: 'Search and filter through our extensive database of pre-screened candidates',
      included: true
    },
    {
      title: 'Advanced Testing Platform',
      description: 'Create custom technical tests and assessments for your specific needs',
      included: true
    },
    {
      title: 'Dedicated Account Manager',
      description: 'Personal support throughout your hiring journey',
      included: true
    },
    {
      title: 'Contract Management',
      description: 'Streamlined contract creation and e-signature integration',
      included: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track hiring metrics and optimize your recruitment process',
      included: true
    },
    {
      title: 'Priority Support',
      description: '24/7 support with guaranteed response times',
      included: true
    }
  ];

  const stats = [
    { value: '92%', label: 'Success Rate', icon: Star },
    { value: '14 days', label: 'Average Time to Hire', icon: Clock },
    { value: '60%', label: 'Cost Reduction', icon: DollarSign },
    { value: '98%', label: 'Client Satisfaction', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-cosmic font-bold text-foreground mb-6">
                Hire <span className="bg-gradient-nebula bg-clip-text text-transparent text-glow">Elite AI & Tech Talent</span> Faster Than Ever
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect with pre-screened, top-tier professionals who can drive your innovation forward. 
                Our AI-powered platform matches you with perfect candidates in days, not months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cosmic" size="xl" asChild>
                  <Link to="/talent-search" className="group">
                    Start Hiring Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="cosmic-outline" size="xl" asChild>
                  <Link to="/contact">
                    Schedule Demo
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Placeholder for hero image */}
                <div className="w-full h-96 bg-gradient-cosmic rounded-2xl shadow-glow flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Talent Acquisition Dashboard</p>
                  </div>
                </div>
                {/* Floating cards */}
                <div className="absolute -top-4 -left-4 bg-card rounded-lg p-4 shadow-cosmic animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium">50k+ Talents</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card rounded-lg p-4 shadow-cosmic animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-medium">98% Match Rate</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-nebula rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-cosmic font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-cosmic font-bold text-foreground mb-4">
              Why Leading Companies Choose <span className="text-primary text-glow">Nebula</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your hiring process with our comprehensive talent acquisition platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="cosmic-card h-full group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-nebula flex items-center justify-center mb-4 ${benefit.color} group-hover:animate-pulse-glow`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-cosmic font-bold text-foreground mb-4">
              Everything You Need to <span className="text-accent text-glow">Hire Smart</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools and services designed for modern hiring teams
            </p>
          </motion.div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="cosmic-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {feature.included ? (
                          <CheckCircle className="w-6 h-6 text-primary" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-muted" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cosmic">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-cosmic font-bold text-white mb-6">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join hundreds of companies who have transformed their hiring with Nebula
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glow" size="xl" asChild>
                <Link to="/contact">
                  Talk to Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForCompanies;