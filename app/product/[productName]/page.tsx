import { PlusCircledIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { OverviewReview } from '@/components/overview-review';
import { OverviewQuestion } from '@/components/overview-question';
import { OverviewProduct } from '@/components/overview-product';

import { SampleReviews } from '@/app/product/[productName]/data/review';
import { SampleQuestions } from '@/app/product/[productName]/data/questions';
import { product } from '@/app/product/[productName]/data/product';

export interface ProductPageProps {
  params: {
    productName: string;
  };
}

//TODO : 1000이상 숫자는 1K로 짧게 수정

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const reviews = SampleReviews;
  reviews.sort((a, b) => b.vote.up - a.vote.up);
  const topReviews = reviews.slice(0, 2);
  const questions = SampleQuestions;
  questions.sort((a) => a.vote.up - a.vote.down);
  const topQuestions = questions.slice(0, 1);
  const userId = '13294710234';

  return (
    <>
      <div className="space-between flex items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="text-sm text-muted-foreground">
            Top picks for you. Updated daily.
          </p>
        </div>
        <div className="ml-auto mr-4">
          <Button>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            리뷰 작성
          </Button>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="relative"></div>
      <div className="mt-6 space-y-1">
        <OverviewProduct product={product} />
      </div>

      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Reviews</h2>
        <p className="text-sm text-muted-foreground">
          Your personal playlists. Updated daily.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <div className="flex flex-col space-y-5 pb-4">
          {topReviews.map((review) => (
            <OverviewReview key={review.id} review={review} />
          ))}
        </div>
      </div>
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Questions</h2>
        <p className="text-sm text-muted-foreground">
          Your personal playlists. Updated daily.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <div className="flex flex-col space-y-5 pb-4">
          {topQuestions.map((question) => (
            <OverviewQuestion key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
