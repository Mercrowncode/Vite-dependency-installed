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
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
  };
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}