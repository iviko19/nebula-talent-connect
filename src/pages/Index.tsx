import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, Target, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CounterAnimation from '@/components/CounterAnimation';
import HolographicText from '@/components/HolographicText';
import { mockStats, mockCompanies } from '@/services/api';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Index = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const buttons = buttonsRef.current;
    const subtitle = subtitleRef.current;
    
    if (!hero || !buttons || !subtitle) return;

    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const deltaX = (clientX - centerX) / centerX;
      const deltaY = (clientY - centerY) / centerY;
      
      // Different speeds for different layers
      gsap.to(subtitle, {
        duration: 1,
        x: deltaX * 20,
        y: deltaY * 20,
        ease: "power2.out"
      });
      
      gsap.to(buttons, {
        duration: 1.2,
        x: deltaX * 30,
        y: deltaY * 30,
        ease: "power2.out"
      });
    };

    // Scroll parallax
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      gsap.to(hero, {
        duration: 0.5,
        y: scrollY * 0.5,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      icon: Users,
      title: t('features.database.title'),
      description: t('features.database.description'),
      color: 'text-primary'
    },
    {
      icon: Target,
      title: t('features.testing.title'),
      description: t('features.testing.description'),
      color: 'text-accent'
    },
    {
      icon: Shield,
      title: t('features.security.title'),
      description: t('features.security.description'),
      color: 'text-primary'
    },
    {
      icon: Zap,
      title: t('features.matching.title'),
      description: t('features.matching.description'),
      color: 'text-accent'
    }
  ];

  const howItWorksSteps = [
    {
      step: '01',
      title: 'Define Requirements',
      description: 'Specify your technical needs, team culture, and project requirements.',
      icon: CheckCircle
    },
    {
      step: '02',
      title: 'AI-Powered Matching',
      description: 'Our algorithm finds the perfect candidates from our vetted talent pool.',
      icon: Zap
    },
    {
      step: '03',
      title: 'Connect & Hire',
      description: 'Review profiles, conduct interviews, and make your hiring decision.',
      icon: Users
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className="text-center">
            <motion.div
              className="text-4xl sm:text-5xl lg:text-6xl font-cosmic font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HolographicText 
                text={t('hero.title')}
                className="block"
              />
            </motion.div>

            <motion.p
              ref={subtitleRef}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button variant="neon" size="xl" asChild>
                <Link to="/talent-search" className="group">
                  {t('hero.findTalent')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="neon" size="xl" asChild>
                <Link to="/for-talent">
                  {t('hero.joinTalent')}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'talents', value: mockStats.talents, suffix: '+' },
              { key: 'hires', value: mockStats.hires, suffix: '+' },
              { key: 'companies', value: mockStats.companies, suffix: '+' },
              { key: 'satisfaction', value: mockStats.satisfaction, suffix: '%' }
            ].map((stat, index) => (
              <motion.div
                key={stat.key}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl lg:text-4xl mb-2">
                  <CounterAnimation 
                    end={stat.value} 
                    suffix={stat.suffix}
                    className="text-primary"
                  />
                </div>
                <p className="text-muted-foreground">
                  {t(`stats.${stat.key}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose <span className="text-primary text-glow">Nebula</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets human expertise to deliver exceptional talent matching
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="cosmic-card h-full group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-nebula flex items-center justify-center ${feature.color} group-hover:animate-pulse-glow`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
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
              Simple, efficient, and effective talent acquisition process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Connection Line */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-primary to-accent transform translate-x-1/2 z-0" />
                )}

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-nebula flex items-center justify-center text-white font-cosmic font-bold text-xl shadow-glow">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-muted-foreground mb-8">
              Trusted by Leading Companies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-80 transition-opacity">
              {mockCompanies.map((company, index) => (
                <motion.div
                  key={company.id}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-10 bg-muted rounded flex items-center justify-center text-xs font-medium">
                    {company.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of companies who trust Nebula for their talent acquisition needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup" className="group">
                  {t('hero.getStarted')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glow" size="xl" asChild>
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;