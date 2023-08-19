'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { VoteButton } from '@/components/vote-button';
import { AuthorDateLine } from '@/components/author-date';
import { Questions } from '@/app/product/[productName]/data/questions';
import { AnswersButton } from '@/app/product/[productName]/questions/components/answers-button';
import { UserPostDropdownMenu } from '@/components/menu/user-post-dropdown-menu';

interface QuestionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  question: Questions;
  params: {
    productName: string;
  };
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  params,
  className,
}) => {
  const QuestionPageUrl = `/product/${params.productName}/questions/${question.id}`;
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
              name={question.author.name}
              image={question.author.image}
              publishedAt={question.publishedAt}
            />
            <div>
              <UserPostDropdownMenu />
            </div>
          </div>
          <Link href={QuestionPageUrl}>
            <div className="cursor-pointer">
              <CardTitle>{question.title}</CardTitle>
            </div>
          </Link>
        </CardHeader>

        <Link href={QuestionPageUrl}>
          <CardContent>
            <div className="flex">
              <div className="basis-11/12">{question.body}</div>
            </div>
          </CardContent>
        </Link>

        <CardFooter className="flex flex-row space-x-5">
          <VoteButton vote={question.vote} />
          <AnswersButton count={5} />
        </CardFooter>
      </Card>
    </>
  );
};
