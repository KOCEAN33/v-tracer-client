'use client';

import { useState } from 'react';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface VoteButtonVarticalProps extends React.HTMLAttributes<HTMLDivElement> {
  vote: { up: number; down: number };
}

export const VoteButtonVartical: React.FC<VoteButtonVarticalProps> = ({
  vote,
}) => {
  const [voteUp, setVoteUp] = useState<number>(vote.up);
  const [voteDown, setVoteDown] = useState<number>(vote.down);
  const [userAction, setUserAction] = useState<'voteUp' | 'voteDown' | null>(
    null,
  );

  const totalCount = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(vote.up - vote.down);

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
      <div className=" mx-3 w-10 pt-3 ">
        <div className="flex flex-col items-center justify-center rounded-md dark:bg-gray-900">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleVoteUp}
            disabled={userAction === 'voteDown'}
          >
            <ArrowBigUp />
          </Button>
          <div className="text-lg font-bold">{totalCount}</div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleVoteDown}
            disabled={userAction === 'voteUp'}
          >
            <ArrowBigDown />
          </Button>
        </div>
      </div>
    </>
  );
};
