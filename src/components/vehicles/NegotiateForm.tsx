import { FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface NegotiateFormProps {
  onSuccess: () => void;
}

export function NegotiateForm({ onSuccess }: NegotiateFormProps) {
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent",
      description: "We'll get back to you shortly regarding your negotiation request.",
    });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Your Offer</label>
        <Input type="number" placeholder="Enter your offer" required />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Message</label>
        <Textarea 
          placeholder="Include any additional comments or questions"
          className="min-h-[100px]"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Submit Offer
      </Button>
    </form>
  );
}