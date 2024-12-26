import { Vehicle } from '@/lib/types/vehicle';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Fuel, Calendar, Gauge, Car } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden">
      <div 
        className="aspect-video relative overflow-hidden cursor-pointer"
        onClick={() => navigate(`/vehicles/${vehicle.id}`)}
      >
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-2 right-2">
          {vehicle.bodyType}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <p className="text-2xl font-bold text-primary mb-4">
          {formatCurrency(vehicle.price)}
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span>{vehicle.fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="h-4 w-4" />
            <span>{vehicle.mileage.toLocaleString()}km</span>
          </div>
          <div className="flex items-center gap-1">
            <Car className="h-4 w-4" />
            <span>{vehicle.transmission}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full"
          onClick={() => navigate(`/vehicles/${vehicle.id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}