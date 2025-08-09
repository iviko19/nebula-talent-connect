import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PaymentPage = () => (
  <div className="min-h-screen py-20">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-cosmic font-bold mb-8 text-center">Unlock Profile</h1>
      <Card className="cosmic-card">
        <CardHeader><CardTitle>Payment Options</CardTitle></CardHeader>
        <CardContent className="text-center space-y-4">
          <p>Unlock full candidate profile for $99</p>
          <div className="space-y-2">
            <Button variant="cosmic" className="w-full">Pay with Stripe</Button>
            <Button variant="cosmic-outline" className="w-full">Pay with PayPal</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default PaymentPage;