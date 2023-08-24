'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AuthorDateLine } from '@/components/author-date';
import { VoteButtonVartical } from '@/components/vote-button-vertical';

export interface TextCardProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  data: {
    id: string;
    author: { id: string; image: string; name: string };
    title: string;
    body: string;
    answers?: number;
    vote: { up: number; down: number };
    publishedAt: string;
  };
}

export function TextCard({ url, data, className }: TextCardProps) {
  return (
    <>
      <Card
        className={cn(
          'flex rounded-lg border-none shadow-sm hover:bg-gray-100 hover:dark:bg-gray-900',
          className,
        )}
      >
        <div className="flex basis-1/12 flex-col items-center justify-center py-5 ">
          <VoteButtonVartical vote={data.vote} />
        </div>

        <div className="basis-11/12 cursor-pointer">
          <Link href={url}>
            <CardHeader>
              <div className="flex justify-between pb-4">
                <AuthorDateLine
                  name={data.author.name}
                  image={data.author.image}
                  publishedAt={data.publishedAt}
                />
                <div></div>
              </div>
              <div className="">
                <CardTitle>{data.title}</CardTitle>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex">
                <div className="basis-11/12">{data.body}</div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-row space-x-5"></CardFooter>
          </Link>
        </div>
      </Card>
    </>
  );
}
