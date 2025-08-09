import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TalentDashboard = () => (
  <div className="min-h-screen py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-cosmic font-bold mb-8">Talent Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Profile Views', 'Test Scores', 'Job Offers', 'Applications'].map((metric) => (
          <Card key={metric} className="cosmic-card">
            <CardHeader><CardTitle>{metric}</CardTitle></CardHeader>
            <CardContent><div className="text-2xl font-bold text-primary">156</div></CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default TalentDashboard;