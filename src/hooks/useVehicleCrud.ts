import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import {
  createVehicle,
  updateVehicle,
  deleteVehicle,
} from '@/lib/firebase/vehicles';
import { Vehicle } from '@/lib/types/vehicle';

export function useVehicleCrud() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleCreate = async (vehicle: Omit<Vehicle, 'id'>) => {
    try {
      setLoading(true);
      const id = await createVehicle(vehicle);
      toast({
        title: 'Success',
        description: 'Vehicle created successfully',
      });
      return id;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to create vehicle',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: string, vehicle: Partial<Vehicle>) => {
    try {
      setLoading(true);
      await updateVehicle(id, vehicle);
      toast({
        title: 'Success',
        description: 'Vehicle updated successfully',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to update vehicle',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      await deleteVehicle(id);
      toast({
        title: 'Success',
        description: 'Vehicle deleted successfully',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to delete vehicle',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    createVehicle: handleCreate,
    updateVehicle: handleUpdate,
    deleteVehicle: handleDelete,
  };
}