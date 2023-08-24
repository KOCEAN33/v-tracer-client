'use client';

import { cn } from '@/lib/utils';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export interface Review {
  id: string;
  author: { id: string; image: string; name: string };
  title: string;
  body: string;
  vote: { up: number; down: number };
  publishedAt: string;
}

interface OverviewReviewProps extends React.HTMLAttributes<HTMLDivElement> {
  review: Review;
}

export const OverviewReview: React.FC<OverviewReviewProps> = ({
  review,
  className,
}) => {
  const fallbackName = review.author.name.substring(0, 2);

  return (
    <>
      <Card
        className={cn(
          'border-none bg-none shadow-none hover:bg-gray-900',
          className,
        )}
      >
        <div className="flex flex-row items-center justify-center">
          <div className="basis-1/12">
            <div className="flex flex-col items-center ">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div>
                      <p className=" text-xl font-bold underline">
                        {review.vote.up - review.vote.down}
                      </p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>유저들의 추천 포인트 총합 </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="basis-11/12">
            <CardHeader>
              <div className="flex">
                <div className="flex items-center justify-items-center space-x-3 ">
                  <Avatar>
                    <AvatarImage
                      src={review.author.image}
                      alt={review.author.name}
                    />
                    <AvatarFallback>{fallbackName}</AvatarFallback>
                  </Avatar>

                  <CardTitle>{review.title}</CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex flex-row">
                <p className="basis-11/12 text-base">{review.body}</p>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </>
  );
};
