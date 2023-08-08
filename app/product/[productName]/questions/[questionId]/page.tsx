import { Button } from '@/components/ui/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';

import { SampleAnswers } from '@/app/product/[productName]/data/answers';

interface QuestionPageProps {
  params: { questionId: string };
}

const QuestionPage: React.FC<QuestionPageProps> = ({ params }) => {
  const answers = SampleAnswers;
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
      <div>{params.questionId}</div>
      <div></div>
    </>
  );
};

export default QuestionPage;
