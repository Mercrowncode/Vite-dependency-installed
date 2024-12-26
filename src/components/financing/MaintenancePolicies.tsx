import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const policies = [
  {
    title: 'Basic Care',
    price: '₦500,000',
    features: [
      'Annual maintenance service',
      'Oil changes',
      'Tire rotations',
      'Basic inspections'
    ]
  },
  {
    title: 'Premium Care',
    price: '₦1,200,000',
    features: [
      'Everything in Basic Care',
      'Extended warranty coverage',
      'Priority service scheduling',
      'Roadside assistance',
      'Wear and tear coverage'
    ],
    popular: true
  },
  {
    title: 'Ultimate Care',
    price: '₦2,000,000',
    features: [
      'Everything in Premium Care',
      'Complete vehicle protection',
      'Concierge service',
      'Replacement vehicle service',
      'Annual detailed cleaning'
    ]
  }
];

export function MaintenancePolicies() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Maintenance Policies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {policies.map((policy) => (
            <Card 
              key={policy.title}
              className={`relative ${policy.popular ? 'border-primary shadow-lg' : ''}`}
            >
              {policy.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-center">{policy.title}</CardTitle>
                <p className="text-2xl font-bold text-center text-primary">{policy.price}</p>
                <p className="text-center text-sm text-muted-foreground">per year</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {policy.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}