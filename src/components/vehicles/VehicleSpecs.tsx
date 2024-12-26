import { VehicleSpecs as Specs } from '@/lib/types/vehicle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cog, Gauge, Timer, Wind } from 'lucide-react';

interface VehicleSpecsProps {
  specs: Specs;
}

export function VehicleSpecs({ specs }: VehicleSpecsProps) {
  const specItems = [
    { icon: Cog, label: 'Engine', value: specs.engine },
    { icon: Gauge, label: 'Power', value: specs.power },
    { icon: Timer, label: '0-100 km/h', value: specs.acceleration },
    { icon: Wind, label: 'Top Speed', value: specs.topSpeed },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vehicle Specifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {specItems.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-2">
              <Icon className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-sm text-muted-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}