import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { formatCurrency } from '@/lib/utils';

export function FinancingCalculator() {
  const [loanAmount, setLoanAmount] = useState(50000000);
  const [downPayment, setDownPayment] = useState(20);
  const [term, setTerm] = useState(36);
  const interestRate = 0.075; // 7.5% annual interest rate

  const calculateMonthlyPayment = () => {
    const principal = loanAmount * (1 - downPayment / 100);
    const monthlyRate = interestRate / 12;
    const numberOfPayments = term;
    
    const monthlyPayment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment;
  };

  return (
    <section className="py-16 container">
      <h2 className="text-3xl font-bold text-center mb-12">Financing Calculator</h2>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Estimate Your Monthly Payments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Vehicle Price</Label>
            <Input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              min={1000000}
              max={200000000}
            />
            <p className="text-sm text-muted-foreground">
              {formatCurrency(loanAmount)}
            </p>
          </div>

          <div className="space-y-2">
            <Label>Down Payment ({downPayment}%)</Label>
            <Slider
              value={[downPayment]}
              onValueChange={([value]) => setDownPayment(value)}
              min={10}
              max={50}
              step={5}
            />
            <p className="text-sm text-muted-foreground">
              {formatCurrency(loanAmount * (downPayment / 100))}
            </p>
          </div>

          <div className="space-y-2">
            <Label>Loan Term ({term} months)</Label>
            <Slider
              value={[term]}
              onValueChange={([value]) => setTerm(value)}
              min={12}
              max={72}
              step={12}
            />
          </div>

          <div className="pt-6 border-t">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Monthly Payment:</span>
              <span className="text-2xl font-bold text-primary">
                {formatCurrency(calculateMonthlyPayment())}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}