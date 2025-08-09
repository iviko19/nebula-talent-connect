import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContractPage = () => (
  <div className="min-h-screen py-20">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-cosmic font-bold mb-8 text-center">Contract Management</h1>
      <Card className="cosmic-card">
        <CardHeader><CardTitle>Create Employment Contract</CardTitle></CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">Generate contracts with e-signature integration</p>
          <Button variant="cosmic">Create Contract</Button>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default ContractPage;