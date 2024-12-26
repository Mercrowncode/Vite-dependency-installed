import { Vehicle } from './types';

export const MOCK_VEHICLES: Vehicle[] = [
  {
    id: '1',
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2024,
    price: 120000,
    mileage: 0,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    images: [
      'https://images.unsplash.com/photo-1622200294737-488215cc8e6c?auto=format&fit=crop&q=80',
    ],
    specs: {
      engine: '3.0L 6-cylinder',
      power: '429 hp',
      acceleration: '4.9s',
      topSpeed: '250 km/h',
    },
    description: 'Brand new Mercedes-Benz S-Class with premium features.',
  },
  {
    id: '2',
    make: 'BMW',
    model: '7 Series',
    year: 2023,
    price: 110000,
    mileage: 5000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80',
    ],
    specs: {
      engine: 'Electric',
      power: '536 hp',
      acceleration: '4.7s',
      topSpeed: '240 km/h',
    },
    description: 'Luxurious BMW 7 Series with cutting-edge technology.',
  },
  {
    id: '3',
    make: 'Audi',
    model: 'A8',
    year: 2024,
    price: 115000,
    mileage: 1000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    images: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80',
    ],
    specs: {
      engine: '4.0L V8',
      power: '453 hp',
      acceleration: '4.5s',
      topSpeed: '250 km/h',
    },
    description: 'Executive Audi A8 with premium comfort features.',
  },
];