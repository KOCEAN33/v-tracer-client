'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ko } from 'date-fns/locale';
import { MoreVertical } from 'lucide-react';
import { dateConverter } from '@/lib/date-converter';
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

export function ReviewCard({ review, userId, className }: ReviewCardProps) {
  return (
    <>
      <Card
        className={cn(
          'rounded-lg border-none shadow-none hover:bg-gray-100 hover:dark:bg-gray-900',
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
          <form>
            <div className="grid max-w-2xl items-center gap-4">
              <div className="flex flex-col space-y-1.5">{review.body}</div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-row space-x-5">
          <VoteButton vote={review.vote} />
        </CardFooter>
      </Card>
    </>
  );
}
