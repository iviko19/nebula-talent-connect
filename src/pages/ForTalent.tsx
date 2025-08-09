import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Award, Globe, TrendingUp, Shield, Star, Briefcase, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ForTalent = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Access remote and international positions with leading tech companies worldwide',
      color: 'text-primary'
    },
    {
      icon: Award,
      title: 'Skill Certification',
      description: 'Get recognized for your expertise with our comprehensive testing and certification system',
      color: 'text-accent'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Advance your career with personalized recommendations and skill development guidance',
      color: 'text-primary'
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Your profile stays private until you choose to share it with potential employers',
      color: 'text-accent'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Create Your Profile',
      description: 'Build a comprehensive profile showcasing your skills, experience, and achievements',
      icon: User
    },
    {
      step: '02',
      title: 'Complete Assessments',
      description: 'Take our technical tests to validate your skills and stand out to employers',
      icon: Award
    },
    {
      step: '03',
      title: 'Get Discovered',
      description: 'Top companies will find you based on your verified skills and experience',
      icon: Star
    },
    {
      step: '04',
      title: 'Start Working',
      description: 'Connect with employers, negotiate terms, and begin your next career adventure',
      icon: Briefcase
    }
  ];

  const features = [
    'Profile visibility control',
    'Skill-based matching',
    'Technical assessment platform',
    'Direct employer communication',
    'Interview scheduling tools',
    'Contract negotiation support',
    'Global payment processing',
    'Career development resources'
  ];

  const stats = [
    { value: '150+', label: 'Countries Represented' },
    { value: '$125k', label: 'Average Salary' },
    { value: '95%', label: 'Job Satisfaction Rate' },
    { value: '30 days', label: 'Average Time to Offer' }
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
                Your <span className="bg-gradient-nebula bg-clip-text text-transparent text-glow">Dream Job</span> is Waiting
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join the most exclusive network of AI and tech professionals. Get discovered by 
                top companies actively seeking your unique skills and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cosmic" size="xl" asChild>
                  <Link to="/signup" className="group">
                    Join as Talent
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="cosmic-outline" size="xl" asChild>
                  <Link to="/talent-dashboard">
                    View Dashboard
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
                    <User className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Talent Profile Dashboard</p>
                  </div>
                </div>
                {/* Floating achievement cards */}
                <div className="absolute -top-4 -left-4 bg-card rounded-lg p-4 shadow-cosmic animate-float">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">Skill Verified</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card rounded-lg p-4 shadow-cosmic animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary fill-current" />
                    <span className="text-sm font-medium">Top 1% Talent</span>
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
              Why Top Talent Chooses <span className="text-primary text-glow">Nebula</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a platform designed specifically for elite AI and tech professionals
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

      {/* How It Works Section */}
      <section className="py-20 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-cosmic font-bold text-foreground mb-4">
              How It <span className="text-accent text-glow">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to unlock your career potential
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-nebula flex items-center justify-center text-white font-cosmic font-bold text-xl shadow-glow">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-nebula flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-cosmic font-bold text-foreground mb-4">
              Everything You Need to <span className="text-primary text-glow">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools to showcase your skills and find your perfect role
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
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
              Ready to Take Your Career to the Next Level?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of elite professionals who have found their dream roles through Nebula
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
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForTalent;