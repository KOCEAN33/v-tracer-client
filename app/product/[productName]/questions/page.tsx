import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { SampleQuestions } from '@/app/product/[productName]/data/questions';
import { TextCard } from '@/components/post-card';

const ProductQuestionsPage = () => {
  const questions = SampleQuestions;
  return (
    <>
      <div className="space-between flex items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Questions</h2>
          <p className="text-sm text-muted-foreground">Someone need help</p>
        </div>
        <div className="ml-auto mr-4">
          <Button>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            질문 하기
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <div>
        <ScrollArea>
          <div className="flex flex-col space-y-5 pb-4">
            {questions.map((question) => (
              <TextCard
                key={question.id}
                data={question}
                url={`questions/${question.id}`}
              />
            ))}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </>
  );
};

export default ProductQuestionsPage;
