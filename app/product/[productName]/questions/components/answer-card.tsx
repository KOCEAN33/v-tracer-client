'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { AuthorDateLine } from '@/components/author-date';
import { UserPostDropdownMenu } from '@/components/menu/user-post-dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { VoteButtonVartical } from '@/components/vote-button-vertical';

interface Answer {
  id: string;
  author: { id: string; image: string; name: string };
  body: string;
  vote: { up: number; down: number };
  publishedAt: string;
}

interface AnswersCardProps extends React.HTMLAttributes<HTMLDivElement> {
  answer: Answer;
}

export const AnswerCard: React.FC<AnswersCardProps> = ({
  answer,
  className,
}) => {
  return (
    <>
      <Card
        className={cn(
          'flex flex-row rounded-lg border-none shadow-none ',
          className,
        )}
      >
        <div className="basis-1/12">
          <VoteButtonVartical vote={answer.vote} />
        </div>
        <div className="basis-11/12">
          <CardContent>
            <div className="flex">
              <div className="basis-11/12 pt-6">{answer.body}</div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-row space-x-5">
            {/*<VoteButton vote={answer.vote} />*/}
            <AuthorDateLine
              name={answer.author.name}
              image={answer.author.image}
              publishedAt={answer.publishedAt}
            />
            <UserPostDropdownMenu />
          </CardFooter>
        </div>
      </Card>
      <Separator />
    </>
  );
};
