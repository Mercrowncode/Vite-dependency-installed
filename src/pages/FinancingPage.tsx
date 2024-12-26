import { FinancingHero } from '@/components/financing/FinancingHero';
import { FinancingOptions } from '@/components/financing/FinancingOptions';
import { MaintenancePolicies } from '@/components/financing/MaintenancePolicies';
import { FinancingCalculator } from '@/components/financing/FinancingCalculator';

export function FinancingPage() {
  return (
    <div className="min-h-screen">
      <FinancingHero />
      <FinancingOptions />
      <MaintenancePolicies />
      <FinancingCalculator />
    </div>
  );
}