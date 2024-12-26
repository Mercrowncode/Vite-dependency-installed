import { Vehicle } from '@/lib/types/vehicle';
import { formatCurrency } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Trash2, Pencil } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';

interface AdminVehicleTableProps {
  vehicles: Vehicle[];
  isLoading: boolean;
}

export function AdminVehicleTable({ vehicles, isLoading }: AdminVehicleTableProps) {
  const { toast } = useToast();

  const handleDelete = async (id: string) => {
    try {
      // TODO: Implement delete functionality
      toast({
        title: "Vehicle deleted",
        description: "The vehicle has been removed from the inventory.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete vehicle. Please try again.",
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Vehicle</TableHead>
          <TableHead>Year</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {vehicles.map((vehicle) => (
          <TableRow key={vehicle.id}>
            <TableCell>
              <img
                src={vehicle.images[0]}
                alt={vehicle.model}
                className="w-16 h-12 object-cover rounded"
              />
            </TableCell>
            <TableCell>
              <div>
                <p className="font-medium">{vehicle.make} {vehicle.model}</p>
                <p className="text-sm text-muted-foreground">{vehicle.bodyType}</p>
              </div>
            </TableCell>
            <TableCell>{vehicle.year}</TableCell>
            <TableCell>{formatCurrency(vehicle.price)}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />
                Active
              </div>
            </TableCell>
            <TableCell className="text-right">
              <Button
                variant="ghost"
                size="icon"
                className="mr-2"
                onClick={() => {
                  // TODO: Implement edit functionality
                }}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-destructive hover:text-destructive"
                onClick={() => handleDelete(vehicle.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}