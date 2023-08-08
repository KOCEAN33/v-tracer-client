'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface AnswersButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
}

export const AnswersButton: React.FC<AnswersButtonProps> = ({
  count,
  className,
}) => {
  return (
    <>
      <div className="relative h-10 cursor-pointer rounded-full dark:bg-gray-900">
        <Button variant="ghost" className={cn('rounded-full', className)}>
          <h2 className=" flex text-lg">답변 {count}개</h2>
        </Button>
      </div>
    </>
  );
};
