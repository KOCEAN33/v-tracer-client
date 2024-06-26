'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { config } from '@/config/config';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {config.site.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/product/notion"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/product')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Product
        </Link>
      </nav>
    </div>
  );
}
