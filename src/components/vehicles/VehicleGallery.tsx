import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VehicleGalleryProps {
  images: string[];
  make: string;
  model: string;
}

export function VehicleGallery({ images, make, model }: VehicleGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((current) => 
    current === images.length - 1 ? 0 : current + 1
  );

  const previous = () => setActiveIndex((current) => 
    current === 0 ? images.length - 1 : current - 1
  );

  return (
    <div className="relative">
      <div className="aspect-video overflow-hidden rounded-lg">
        <img
          src={images[activeIndex]}
          alt={`${make} ${model}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={previous}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative flex-none w-20 aspect-video rounded-lg overflow-hidden",
              activeIndex === index && "ring-2 ring-primary"
            )}
          >
            <img
              src={image}
              alt={`${make} ${model} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}