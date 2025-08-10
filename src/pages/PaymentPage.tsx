import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  Shield, 
  Check, 
  ArrowLeft,
  Unlock,
  Star,
  User,
  Mail,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const talentId = searchParams.get('talentId');
  
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    email: '',
    billingAddress: ''
  });

  const [talentPreview] = useState({
    candidateNumber: '2938',
    title: 'Senior AI Engineer',
    skills: ['Python', 'TensorFlow', 'React', 'Node.js'],
    score: 95,
    yearsExperience: 8,
    location: 'San Francisco, CA'
  });

  const handlePayment = (method: string) => {
    // Mock payment processing
    console.log(`Processing payment with ${method}`);
    
    // Simulate payment success and redirect
    setTimeout(() => {
      navigate(`/talent/${talentId}?unlocked=true`);
    }, 2000);
  };

  const features = [
    'Full contact information',
    'Detailed work history',
    'Portfolio and project links',
    'Test result breakdowns',
    'Availability and preferences',
    '30-day profile access'
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl font-cosmic font-bold text-foreground mb-2">
              Unlock <span className="text-primary text-glow">Talent Profile</span>
            </h1>
            <p className="text-muted-foreground">
              Get full access to candidate information and contact details
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Talent Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="cosmic-card mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Candidate Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Candidate #{talentPreview.candidateNumber}
                      </h3>
                      <p className="text-muted-foreground">{talentPreview.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {talentPreview.yearsExperience} years • {talentPreview.location}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-primary font-semibold text-lg">
                        <Star className="w-5 h-5 fill-current" />
                        <span>{talentPreview.score}/100</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Test Score</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Top Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {talentPreview.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Unlock className="w-4 h-4 text-primary" />
                      Unlock to reveal:
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card className="cosmic-card border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Secure Payment</h3>
                    <p className="text-sm text-muted-foreground">
                      Your payment is protected by enterprise-grade encryption
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">$99.00</span>
                  <Badge variant="secondary">One-time payment</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Payment Method Selection */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Payment Method</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      variant={paymentMethod === 'stripe' ? 'default' : 'outline'}
                      className="h-16 flex-col gap-1"
                      onClick={() => setPaymentMethod('stripe')}
                    >
                      <CreditCard className="w-5 h-5" />
                      <span className="text-xs">Credit Card</span>
                    </Button>
                    <Button
                      variant={paymentMethod === 'paypal' ? 'default' : 'outline'}
                      className="h-16 flex-col gap-1"
                      onClick={() => setPaymentMethod('paypal')}
                    >
                      <div className="w-5 h-5 bg-current rounded" />
                      <span className="text-xs">PayPal</span>
                    </Button>
                    <Button
                      variant={paymentMethod === 'wise' ? 'default' : 'outline'}
                      className="h-16 flex-col gap-1"
                      onClick={() => setPaymentMethod('wise')}
                    >
                      <div className="w-5 h-5 bg-current rounded" />
                      <span className="text-xs">Wise</span>
                    </Button>
                  </div>
                </div>

                {paymentMethod === 'stripe' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={paymentData.cardNumber}
                        onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={paymentData.expiryDate}
                          onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={paymentData.cvv}
                          onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cardholderName">Cardholder Name</Label>
                      <Input
                        id="cardholderName"
                        placeholder="John Doe"
                        value={paymentData.cardholderName}
                        onChange={(e) => setPaymentData({...paymentData, cardholderName: e.target.value})}
                      />
                    </div>
                  </div>
                )}

                <Separator />

                {/* Billing Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Billing Information</h3>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={paymentData.email}
                      onChange={(e) => setPaymentData({...paymentData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="billingAddress">Billing Address</Label>
                    <Input
                      id="billingAddress"
                      placeholder="123 Main St, City, Country"
                      value={paymentData.billingAddress}
                      onChange={(e) => setPaymentData({...paymentData, billingAddress: e.target.value})}
                    />
                  </div>
                </div>

                <Separator />

                {/* Payment Summary */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Profile unlock</span>
                    <span>$99.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Processing fee</span>
                    <span>$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$99.00</span>
                  </div>
                </div>

                {/* Payment Button */}
                <Button 
                  variant="cosmic" 
                  className="w-full"
                  onClick={() => handlePayment(paymentMethod)}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Complete Secure Payment
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By completing this payment, you agree to our Terms of Service and Privacy Policy. 
                  You will gain immediate access to the full candidate profile.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );

};

export default PaymentPage;