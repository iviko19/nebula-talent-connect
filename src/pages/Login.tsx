import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Login = () => (
  <div className="min-h-screen py-20 flex items-center justify-center">
    <Card className="cosmic-card w-full max-w-md">
      <CardHeader><CardTitle className="text-center">Login to Nebula</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button variant="cosmic" className="w-full">Sign In</Button>
      </CardContent>
    </Card>
  </div>
);

export default Login;