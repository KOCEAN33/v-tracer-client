interface ProductPageProps {
  params: {
    productName: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  return <div>This is product page</div>;
};

export default ProductPage;
