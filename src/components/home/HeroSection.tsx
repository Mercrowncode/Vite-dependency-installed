import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80")',
          transform: 'translateZ(-1px) scale(1.5)'
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Luxury Redefined
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience the pinnacle of automotive excellence with our curated collection of premium vehicles.
        </p>
        <Button 
          size="lg" 
          className="text-lg"
          onClick={() => navigate('/vehicles')}
        >
          Explore Our Collection
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}