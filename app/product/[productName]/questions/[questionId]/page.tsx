import { Button } from '@/components/ui/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';

import { questionDetail } from '@/app/product/[productName]/data/answers';
import { QuestionDetail } from '@/app/product/[productName]/questions/components/question-detail';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AnswerCard } from '@/app/product/[productName]/questions/components/answer-card';
import { AnswersSeparator } from '@/app/product/[productName]/questions/components/answers-separator';

interface QuestionPageProps extends React.HTMLAttributes<HTMLDivElement> {
  params: { questionId: string };
}

const QuestionPage: React.FC<QuestionPageProps> = ({ params, className }) => {
  const qna = questionDetail;
  return (
    <>
      <div className="space-between flex items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Question</h2>
          <p className="text-sm text-muted-foreground">From real user</p>
        </div>
        <div className="ml-auto mr-4">
          <Button>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            답변 쓰기
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <QuestionDetail question={qna.question} />
      <div className="my-2 py-2">
        <AnswersSeparator />
      </div>
      <div>
        <div>
          <div className="flex flex-col space-y-5 py-4 ">
            {qna.answers.map((answer) => (
              <AnswerCard key={answer.id} answer={answer} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
