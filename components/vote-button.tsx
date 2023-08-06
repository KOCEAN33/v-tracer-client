import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface VoteButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  vote: { up: number; down: number };
}

export function VoteButton({ vote, className }: VoteButtonProps) {
  const [voteUp, setVoteUp] = useState<number>(vote.up);
  const [voteDown, setVoteDown] = useState<number>(vote.down);
  const [userAction, setUserAction] = useState<'voteUp' | 'voteDown' | null>(
    null,
  );

  const handleVoteUp = () => {
    if (userAction === 'voteUp') {
      setVoteUp(voteUp - 1);
      setUserAction(null);
    } else if (userAction === null) {
      setVoteUp(voteUp + 1);
      setUserAction('voteUp');
    }
  };

  const handleVoteDown = () => {
    if (userAction === 'voteDown') {
      setVoteDown(voteDown - 1);
      setUserAction(null);
    } else if (userAction === null) {
      setVoteDown(voteDown + 1);
      setUserAction('voteDown');
    }
  };

  return (
    <>
      <div className="relative rounded-full dark:bg-gray-900">
        <div className="relative flex inline-flex items-center space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className={cn('rounded-full', className)}
            onClick={handleVoteUp}
            disabled={userAction === 'voteDown'}
          >
            <ArrowBigUp />
          </Button>
          <div className="text-lg">{voteUp - voteDown}</div>
          <Button
            variant="ghost"
            size="icon"
            className={cn('rounded-full', className)}
            onClick={handleVoteDown}
            disabled={userAction === 'voteUp'}
          >
            <ArrowBigDown />
          </Button>
        </div>
      </div>
    </>
  );
}
