import { useState, useEffect } from 'react';
import { Vehicle } from '@/lib/types/vehicle';
import { vehicles } from '@/lib/data/vehicles';

export function useVehicles() {
  const [vehicleData, setVehicleData] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchVehicles = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setVehicleData(vehicles);
      setIsLoading(false);
    };

    fetchVehicles();
  }, []);

  return { vehicles: vehicleData, isLoading };
}