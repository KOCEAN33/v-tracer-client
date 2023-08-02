'use client';

import { format, formatDistance, subDays } from 'date-fns';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ko } from 'date-fns/locale';
import { MoreVertical } from 'lucide-react';
import { dateConverter } from '@/lib/date-converter';

interface Review {
  id: string;
  author: { id: string; name: string };
  title: string;
  body: string;
  vote: { up: number; down: number };
  publishedAt: string;
}

interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: Review;
  userId: string;
}

export function ReviewCard({ review, userId }: ReviewCardProps) {
  const publishedDate = new Date(review.publishedAt);
  const dateDistance = formatDistance(
    new Date(review.publishedAt),
    new Date(),
    {
      addSuffix: true,
      locale: ko,
    },
  );
  return (
    <>
      <Card className="border-transparent hover:bg-gray-100">
        <CardHeader>
          <div className="flex flex-row">
            <div>
              <div className="flex flex-row items-center pb-4">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt={review.author.name}
                  />
                  <AvatarFallback>{review.author.name} </AvatarFallback>
                </Avatar>
                <div className="ml-2 text-sm">{review.author.name}</div>
                <div className="ml-2">•</div>
                <div className="ml-2 text-sm">
                  {dateConverter(review.publishedAt, 14)}
                </div>
              </div>
              <CardTitle>{review.title}</CardTitle>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-more-vertical"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">{review.body}</div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </>
  );
}
