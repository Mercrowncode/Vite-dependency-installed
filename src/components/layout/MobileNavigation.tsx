import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface MobileNavigationProps {
  onItemClick?: () => void;
}

export function MobileNavigation({ onItemClick }: MobileNavigationProps) {
  const handleClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className="flex flex-col gap-4 pt-8">
      <Button
        variant="ghost"
        className="justify-start w-full text-left"
        asChild
        onClick={handleClick}
      >
        <Link to="/">Home</Link>
      </Button>
      <Button
        variant="ghost"
        className="justify-start w-full text-left"
        asChild
        onClick={handleClick}
      >
        <Link to="/vehicles">Vehicles</Link>
      </Button>
      <Button
        variant="ghost"
        className="justify-start w-full text-left"
        asChild
        onClick={handleClick}
      >
        <Link to="/about">About</Link>
      </Button>
    </div>
  );
}