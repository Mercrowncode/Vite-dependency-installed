import { Wallet, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const options = [
  {
    icon: Wallet,
    title: 'Vehicle Loans',
    description: 'Competitive interest rates with flexible repayment terms up to 72 months.',
    features: ['Low interest rates', 'Quick approval', 'Flexible terms', 'No hidden fees']
  },
  {
    icon: Clock,
    title: 'Lease Options',
    description: 'Drive a new luxury vehicle with lower monthly payments and flexible end-of-term options.',
    features: ['Lower payments', 'New car every few years', 'Warranty coverage', 'Flexible terms']
  },
  {
    icon: Shield,
    title: 'Premium Financing',
    description: 'Exclusive financing options for high-end luxury vehicles with personalized service.',
    features: ['Competitive rates', 'Personalized service', 'Special terms', 'Quick processing']
  }
];

export function FinancingOptions() {
  return (
    <section className="py-16 container">
      <h2 className="text-3xl font-bold text-center mb-12">Financing Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {options.map((option) => (
          <Card key={option.title} className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <option.icon className="h-12 w-12 text-primary mb-4" />
              <CardTitle>{option.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{option.description}</p>
              <ul className="space-y-2">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}