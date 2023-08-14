'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { AuthorDateLine } from '@/components/author-date';
import { UserPostDropdownMenu } from '@/components/menu/user-post-dropdown-menu';
import { VoteButton } from '@/components/vote-button';

interface Question {
  id: string;
  author: { id: string; image: string; name: string };
  title: string;
  body: string;
  answers: number;
  vote: { up: number; down: number };
  publishedAt: string;
}

interface QuestionDetailProps extends React.HTMLAttributes<HTMLDivElement> {
  question: Question;
}

export const QuestionDetail: React.FC<QuestionDetailProps> = ({
  question,
  className,
}) => {
  return (
    <>
      <Card className={cn(' rounded-lg border-none shadow-none', className)}>
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
          <div>
            <CardTitle>{question.title}</CardTitle>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex">
            <div className="basis-11/12">{question.body}</div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-row space-x-5">
          <VoteButton vote={question.vote} />
        </CardFooter>
      </Card>
    </>
  );
};
