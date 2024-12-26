import { Shield, Banknote, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 group hover:shadow-lg transition-all duration-300">
            <div 
              className="cursor-pointer"
              onClick={() => navigate('/vehicles')}
            >
              <Shield className="h-12 w-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">Premium Vehicles</h3>
              <p className="text-muted-foreground mb-4">
                Carefully selected luxury cars from the world's finest manufacturers.
              </p>
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                onClick={() => navigate('/vehicles')}
              >
                View Collection
              </Button>
            </div>
          </Card>

          <Card className="p-6 group hover:shadow-lg transition-all duration-300">
            <div 
              className="cursor-pointer"
              onClick={() => navigate('/financing')}
            >
              <Banknote className="h-12 w-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">Flexible Financing</h3>
              <p className="text-muted-foreground mb-4">
                Tailored financial solutions including vehicle loans, leasing options, and maintenance policies.
              </p>
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                onClick={() => navigate('/financing')}
              >
                View Options
              </Button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <RefreshCw className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Trade-In Service</h3>
            <p className="text-muted-foreground mb-4">
              Exchange your current vehicle as part payment towards your new luxury car. We offer competitive valuations and a hassle-free process.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              disabled
            >
              Coming Soon
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}