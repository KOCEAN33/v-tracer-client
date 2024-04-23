'use client';

import { Hourglass, Percent, Tv, Users } from 'lucide-react';

import { SimpleBoldCard } from '@/components/cards/simple-bold-card';
import { useTotalStreamTime } from '@/hooks/use-total-stream-time';
import { useGameStreamRatio } from '@/hooks/use-game-stream-ratio';
import { useTotalStreamCount } from '@/hooks/use-total-stream-count';

export const TopSimpleCards = () => {
  const totalStreamTime = useTotalStreamTime();
  const gameStreamRatio = useGameStreamRatio();
  const totalStreamCount = useTotalStreamCount();

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <SimpleBoldCard
        title="Total Stream Time"
        icon={<Hourglass className="h-4 w-4 text-muted-foreground" />}
        mainValue={`${totalStreamTime?.data?.total} H`}
        subValue={totalStreamTime?.data?.percent}
      />
      <SimpleBoldCard
        title="Game Stream Ratio"
        icon={<Percent className="h-4 w-4 text-muted-foreground" />}
        mainValue={`${gameStreamRatio.data?.total} %`}
        subValue={gameStreamRatio.data?.percent}
      />
      <SimpleBoldCard
        title="Streams Count"
        icon={<Tv className="h-4 w-4 text-muted-foreground" />}
        mainValue={totalStreamCount.data?.total}
        subValue={totalStreamCount.data?.percent}
      />
      <SimpleBoldCard
        title="Vtuber Count"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
        mainValue="+15"
        subValue="+201"
      />
    </div>
  );
};
