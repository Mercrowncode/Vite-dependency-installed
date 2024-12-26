import { useState } from 'react';
import { VehicleGrid } from '@/components/vehicles/VehicleGrid';
import { VehicleFilters } from '@/components/vehicles/VehicleFilters';
import { useVehicles } from '@/hooks/useVehicles';
import { PRICE_RANGE } from '@/lib/constants';

export function VehicleListingPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    make: '',
    priceRange: [PRICE_RANGE.MIN, PRICE_RANGE.MAX],
    year: '',
    bodyType: '',
  });
  
  const { vehicles, isLoading } = useVehicles();

  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Our Vehicle Collection</h1>
            <p className="text-muted-foreground">
              Discover our extensive range of premium vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <aside className="lg:col-span-1">
              <VehicleFilters
                filters={selectedFilters}
                onFilterChange={setSelectedFilters}
              />
            </aside>
            
            <main className="lg:col-span-3">
              <VehicleGrid 
                vehicles={vehicles} 
                isLoading={isLoading}
                filters={selectedFilters}
              />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}