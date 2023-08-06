interface ProductQuestionsPageProps {
  params: {
    productName: string;
  };
}

const ProductQuestionsPage: React.FC<ProductQuestionsPageProps> = ({
  params,
}) => {
  return <div>This is questions page</div>;
};

export default ProductQuestionsPage;
