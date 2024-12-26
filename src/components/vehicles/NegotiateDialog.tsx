import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { NegotiateForm } from './NegotiateForm';

interface NegotiateDialogProps {
  vehicleName: string;
  price: number;
}

export function NegotiateDialog({ vehicleName }: NegotiateDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg">Negotiate Price</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Negotiate Price</DialogTitle>
          <DialogDescription>
            Submit your offer for the {vehicleName}
          </DialogDescription>
        </DialogHeader>
        <NegotiateForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}