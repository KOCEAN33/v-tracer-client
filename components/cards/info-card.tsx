'use client';

import Image from 'next/image';

import { Separator } from '@/components/ui/separator';

import { Product } from '@/app/product/[productName]/data/product';

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

export const InfoCard: React.FC<InfoCardProps> = ({ product }) => {
  return (
    <>
      <div className="px-3 py-3">
        <div className="mb-2 px-4">
          <Image
            height="50"
            width="50"
            src={product.image}
            alt={`${product.name}'s Logo`}
          />
        </div>
        <div className="mb-2 px-4">
          <h1 className="text-lg font-semibold tracking-tight">Notion</h1>
          <p className="text-sm text-muted-foreground">{product.company}</p>
        </div>
      </div>

      <div className="grid justify-items-center space-y-1">
        <Separator className="w-4/5" />
      </div>
    </>
  );
};
