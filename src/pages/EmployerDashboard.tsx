import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EmployerDashboard = () => (
  <div className="min-h-screen py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-cosmic font-bold mb-8">Employer Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Active Jobs', 'Candidates', 'Interviews', 'Hires'].map((metric) => (
          <Card key={metric} className="cosmic-card">
            <CardHeader><CardTitle>{metric}</CardTitle></CardHeader>
            <CardContent><div className="text-2xl font-bold text-primary">42</div></CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default EmployerDashboard;