import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams',
      features: ['5 profile unlocks', 'Basic testing', 'Email support'],
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'For growing companies',
      features: ['25 profile unlocks', 'Advanced testing', 'Priority support', 'Analytics dashboard'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: ['Unlimited unlocks', 'Custom integrations', 'Dedicated manager', 'SLA guarantee'],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-cosmic font-bold text-foreground mb-4">
            Simple, <span className="text-primary text-glow">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your hiring needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`cosmic-card h-full ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader className="text-center">
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full mx-auto mb-4 w-fit">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-cosmic font-bold">
                    {plan.price}<span className="text-base font-normal">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <Button variant={plan.popular ? 'cosmic' : 'cosmic-outline'} className="w-full mt-6">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;