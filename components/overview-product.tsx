'use client';

export interface Product {
  id: string;
  handle: string;
  name: string;
  owner: string;
  image: string;
  url: string;
  company: string;
  description: string;
  tag: string[];
}

interface OverviewProductProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

export const OverviewProduct: React.FC<OverviewProductProps> = ({
  product,
}) => {
  return (
    <>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </>
  );
};
