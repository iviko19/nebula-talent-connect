import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TestingModule = () => (
  <div className="min-h-screen py-20">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-cosmic font-bold mb-8 text-center">Testing Module</h1>
      <Card className="cosmic-card">
        <CardHeader><CardTitle>Create Technical Assessment</CardTitle></CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">Design custom tests for candidates</p>
          <Button variant="cosmic">Start Test Creation</Button>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default TestingModule;