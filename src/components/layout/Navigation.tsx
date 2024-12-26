import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavigationLink({ href, children, className }: NavigationLinkProps) {
  return (
    <Link
      to={href}
      className={cn(
        "px-4 py-2 hover:text-primary transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Navigation({ className }: { className?: string }) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationLink href="/">Home</NavigationLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationLink href="/vehicles">Vehicles</NavigationLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationLink href="/about">About</NavigationLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}