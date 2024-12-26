import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AdminVehicleTable } from '@/components/admin/AdminVehicleTable';
import { AddVehicleDialog } from '@/components/admin/AddVehicleDialog';
import { useVehicles } from '@/hooks/useVehicles';

export function AdminDashboard() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { vehicles, isLoading } = useVehicles();

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Vehicle Management</h1>
          <p className="text-muted-foreground">Manage your vehicle inventory</p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Vehicle
        </Button>
      </div>

      <AdminVehicleTable vehicles={vehicles} isLoading={isLoading} />
      <AddVehicleDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} />
    </div>
  );
}