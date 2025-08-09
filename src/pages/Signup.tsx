import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Signup = () => (
  <div className="min-h-screen py-20 flex items-center justify-center">
    <Card className="cosmic-card w-full max-w-md">
      <CardHeader><CardTitle className="text-center">Join Nebula</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Full Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button variant="cosmic" className="w-full">Create Account</Button>
      </CardContent>
    </Card>
  </div>
);

export default Signup;