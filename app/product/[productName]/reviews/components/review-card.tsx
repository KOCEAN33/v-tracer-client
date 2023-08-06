'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { ReviewDropdownMenu } from '@/app/product/[productName]/reviews/components/review-dropdown-menu';
import { cn } from '@/lib/utils';
import { VoteButton } from '@/components/vote-button';
import { AuthorDateLine } from '@/components/author-date';

interface Review {
  id: string;
  author: { id: string; image: string; name: string };
  title: string;
  body: string;
  vote: { up: number; down: number };
  publishedAt: string;
}

interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: Review;
  userId: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  className,
}) => {
  return (
    <>
      <Card
        className={cn(
          'rounded-lg border-none shadow-none hover:bg-gray-100 hover:dark:bg-gray-900',
          className,
        )}
      >
        <CardHeader>
          <div className="flex justify-between pb-4">
            <AuthorDateLine
              name={review.author.name}
              image={review.author.image}
              publishedAt={review.publishedAt}
            />
            <div>
              <ReviewDropdownMenu />
            </div>
          </div>
          <div className="">
            <CardTitle>{review.title}</CardTitle>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex">
            <div className="basis-11/12">{review.body}</div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-row space-x-5">
          <VoteButton vote={review.vote} />
        </CardFooter>
      </Card>
    </>
  );
};
