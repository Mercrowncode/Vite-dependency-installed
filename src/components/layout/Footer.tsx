import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">About MIDE&DARA MOTORS</h3>
          <p className="text-muted-foreground">
            Premium car dealership offering luxury vehicles and exceptional service since 1970.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/vehicles" className="text-muted-foreground hover:text-primary">Vehicles</a></li>
            <li><a href="/financing" className="text-muted-foreground hover:text-primary">Financing</a></li>
            <li><a href="/trade-in" className="text-muted-foreground hover:text-primary">Trade-In</a></li>
            <li><a href="/contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-muted-foreground hover:text-primary">Facebook</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary">Instagram</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary">Twitter</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Newsletter</h3>
          <p className="text-muted-foreground mb-4">
            Subscribe to receive updates on new arrivals and special offers.
          </p>
          <div className="flex gap-2">
            <Input placeholder="Enter your email" type="email" />
            <Button size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="border-t">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MIDE&DARA MOTORS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}