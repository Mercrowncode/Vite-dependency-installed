import * as z from "zod";

export const vehicleSchema = z.object({
  make: z.string().min(1, "Make is required"),
  model: z.string().min(1, "Model is required"),
  year: z.number().min(1900).max(new Date().getFullYear() + 1),
  price: z.number().min(0, "Price must be greater than 0"),
  bodyType: z.string().min(1, "Body type is required"),
  mileage: z.number().min(0, "Mileage must be greater than or equal to 0"),
  fuelType: z.string().min(1, "Fuel type is required"),
  transmission: z.string().min(1, "Transmission type is required"),
  images: z.array(z.string().url()).min(1, "At least one image is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});