import { useParams } from 'react-router-dom';
import { useVehicles } from '@/hooks/useVehicles';
import { VehicleGallery } from '@/components/vehicles/VehicleGallery';
import { VehicleSpecs } from '@/components/vehicles/VehicleSpecs';
import { NegotiateDialog } from '@/components/vehicles/NegotiateDialog';
import { formatCurrency } from '@/lib/utils';
import { Fuel, Calendar, Gauge, Car } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function VehicleDetailsPage() {
  const { id } = useParams();
  const { vehicles } = useVehicles();
  const vehicle = vehicles.find(v => v.id === id);

  if (!vehicle) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Vehicle Not Found</h1>
        <p className="text-muted-foreground">
          The vehicle you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <VehicleGallery 
              images={vehicle.images} 
              make={vehicle.make} 
              model={vehicle.model} 
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h1>
                <Badge variant="secondary">{vehicle.bodyType}</Badge>
              </div>
              <p className="text-3xl font-bold text-primary">
                {formatCurrency(vehicle.price)}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y">
              <div className="flex items-center gap-2">
                <Fuel className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Fuel Type</p>
                  <p className="text-sm text-muted-foreground">{vehicle.fuelType}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Year</p>
                  <p className="text-sm text-muted-foreground">{vehicle.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Mileage</p>
                  <p className="text-sm text-muted-foreground">
                    {vehicle.mileage.toLocaleString()} km
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Transmission</p>
                  <p className="text-sm text-muted-foreground">{vehicle.transmission}</p>
                </div>
              </div>
            </div>

            <VehicleSpecs specs={vehicle.specs} />

            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-muted-foreground">{vehicle.description}</p>
            </div>

            <NegotiateDialog 
              vehicleName={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              price={vehicle.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
}