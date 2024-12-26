import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { VEHICLE_MAKES, VEHICLE_BODY_TYPES, PRICE_RANGE } from '@/lib/constants';

interface VehicleFiltersProps {
  filters: {
    make: string;
    priceRange: number[];
    year: string;
    bodyType: string;
  };
  onFilterChange: (filters: any) => void;
}

export function VehicleFilters({ filters, onFilterChange }: VehicleFiltersProps) {
  const years = Array.from(
    { length: 2024 - 2015 + 1 },
    (_, i) => (2024 - i).toString()
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Make</label>
          <Select
            value={filters.make || "all"}
            onValueChange={(value) =>
              onFilterChange({ ...filters, make: value === "all" ? "" : value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="All Makes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Makes</SelectItem>
              {VEHICLE_MAKES.map((make) => (
                <SelectItem key={make} value={make}>
                  {make}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Price Range</label>
          <div className="pt-2">
            <Slider
              value={filters.priceRange}
              min={PRICE_RANGE.MIN}
              max={PRICE_RANGE.MAX}
              step={PRICE_RANGE.STEP}
              onValueChange={(value) =>
                onFilterChange({ ...filters, priceRange: value })
              }
            />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>{formatCurrency(filters.priceRange[0])}</span>
              <span>{formatCurrency(filters.priceRange[1])}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Year</label>
          <Select
            value={filters.year || "all"}
            onValueChange={(value) =>
              onFilterChange({ ...filters, year: value === "all" ? "" : value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="All Years" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Body Type</label>
          <Select
            value={filters.bodyType || "all"}
            onValueChange={(value) =>
              onFilterChange({ ...filters, bodyType: value === "all" ? "" : value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="All Body Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Body Types</SelectItem>
              {VEHICLE_BODY_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}