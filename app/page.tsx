import { Hourglass, Percent, Tv, Users } from 'lucide-react';

import { SimpleBoldCard } from '@/components/cards/simple-bold-card';
import { MostPlayedGames } from '@/app/_components/most-played-games';
import { RecentStreams } from '@/app/_components/recent-streams';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <SimpleBoldCard
            title="Total Stream Time"
            icon={<Hourglass className="h-4 w-4 text-muted-foreground" />}
            mainValue="2K Hours"
            subValue="+20.1%"
          />
          <SimpleBoldCard
            title="Game Stream Ratio"
            icon={<Percent className="h-4 w-4 text-muted-foreground" />}
            mainValue="75.8%"
            subValue="+180.1%"
          />
          <SimpleBoldCard
            title="Streams Count"
            icon={<Tv className="h-4 w-4 text-muted-foreground" />}
            mainValue="+5042"
            subValue="+19%"
          />
          <SimpleBoldCard
            title="Vtuber Count"
            icon={<Users className="h-4 w-4 text-muted-foreground" />}
            mainValue="+15"
            subValue="+201"
          />
        </div>
        {/*상단 카드 종료*/}
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <MostPlayedGames />
          {/*최근 판매*/}
          <RecentStreams />
        </div>
      </main>
    </div>
  );
}
