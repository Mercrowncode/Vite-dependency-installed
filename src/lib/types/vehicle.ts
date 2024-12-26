export interface VehicleSpecs {
  engine: string;
  power: string;
  acceleration: string;
  topSpeed: string;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  images: string[];
  specs: VehicleSpecs;
  description: string;
  bodyType: string;
}