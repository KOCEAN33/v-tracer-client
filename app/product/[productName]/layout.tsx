import { Sidebar } from '@/app/product/[productName]/components/sidebar';
import { product } from '@/app/product/[productName]/data/product';

import { Container } from '@/components/container';

interface ProductLayoutProps {
  children: React.ReactNode;
  params: { productName: string };
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children, params }) => {
  return (
    <Container>
      <div className="bg-background">
        <div className="grid lg:grid-cols-5">
          <Sidebar product={product} params={params} />
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">{children}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductLayout;
