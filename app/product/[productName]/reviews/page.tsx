import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { PlusCircledIcon } from '@radix-ui/react-icons';

import { SampleReviews } from '@/app/product/[productName]/data/review';
import { ReviewCard } from '@/app/product/[productName]/reviews/components/review-card';

const ProductReviewsPage = () => {
  const reviews = SampleReviews;
  const userId = '6494ed4bcdebc4eb4c615c25';

  return (
    <>
      <div className="space-between flex items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Reviews</h2>
          <p className="text-sm text-muted-foreground">From real user</p>
        </div>
        <div className="ml-auto mr-4">
          <Button>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            리뷰 작성
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <div>
        <ScrollArea>
          <div className="flex flex-col space-y-5 pb-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} userId={userId} />
            ))}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </>
  );
};

export default ProductReviewsPage;
