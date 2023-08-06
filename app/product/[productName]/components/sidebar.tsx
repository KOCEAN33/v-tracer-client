'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import { Product } from '@/app/product/[productName]/data/product';
import { InfoCard } from '@/app/product/[productName]/components/info-card';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
  params: {
    productName: string;
  };
}

export const Sidebar: React.FC<SidebarProps> = ({
  className,
  product,
  params,
}) => {
  const pathname = usePathname();
  const sidePath = {
    overview: `/product/${params.productName}`,
    reviews: `/product/${params.productName}/reviews`,
    questions: `/product/${params.productName}/questions`,
  };

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <InfoCard product={product} />

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Information
          </h2>
          <div className="space-y-1">
            <Link href={sidePath.overview}>
              <Button
                variant={pathname === sidePath.overview ? 'secondary' : 'ghost'}
                className="w-full justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
                  <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
                  <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
                </svg>
                Overview
              </Button>
            </Link>
            <Link href={sidePath.reviews}>
              <Button
                variant={pathname === sidePath.reviews ? 'secondary' : 'ghost'}
                className="w-full justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M8 6h10" />
                  <path d="M6 12h9" />
                  <path d="M11 18h7" />
                </svg>
                Reviews
              </Button>
            </Link>
            <Link href={sidePath.questions}>
              <Button
                variant={
                  pathname === sidePath.questions ? 'secondary' : 'ghost'
                }
                className="w-full justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                Questions
              </Button>
            </Link>
          </div>
        </div>
        <div className="mb-2 px-7 py-2">
          <Link
            href="https://tries.io"
            rel="noopener noreferrer"
            target="_blank"
            className="text-sm text-muted-foreground"
          >
            tries.io © 2023
          </Link>
        </div>
      </div>
    </div>
  );
};
