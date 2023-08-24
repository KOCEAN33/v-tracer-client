'use client';

import { cn } from '@/lib/utils';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Question {
  id: string;
  author: { id: string; image: string; name: string };
  title: string;
  body: string;
  answers: number;
  vote: { up: number; down: number };
  publishedAt: string;
}

interface OverviewQuestionProps extends React.HTMLAttributes<HTMLDivElement> {
  question: Question;
}

export const OverviewQuestion: React.FC<OverviewQuestionProps> = ({
  question,
  className,
}) => {
  const fallbackName = question.author.name.substring(0, 2);

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
                        {question.vote.up - question.vote.down}
                      </p>
                      <p className="text-xs text-muted-foreground">답변</p>
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
                      src={question.author.image}
                      alt={question.author.name}
                    />
                    <AvatarFallback>{fallbackName}</AvatarFallback>
                  </Avatar>

                  <CardTitle>{question.title}</CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex">
                <p className="basis-11/12 text-base">{question.body}</p>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </>
  );
};
