import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';

export function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}