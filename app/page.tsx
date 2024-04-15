import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';

import { SimpleBoldCard } from '@/components/cards/simple-bold-card';
import { MostPlayedGames } from '@/app/_components/most-played-games';
import { RecentStreams } from '@/app/_components/recent-streams';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <SimpleBoldCard
            title="Total Revenue"
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
            mainValue="$45,231.89"
            subValue="+20.1%"
          />
          <SimpleBoldCard
            title="Subscriptions"
            icon={<Users className="h-4 w-4 text-muted-foreground" />}
            mainValue="+2350"
            subValue="+180.1%"
          />
          <SimpleBoldCard
            title="Sales"
            icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
            mainValue="+12,234"
            subValue="+19%"
          />
          <SimpleBoldCard
            title="Active Now"
            icon={<Activity className="h-4 w-4 text-muted-foreground" />}
            mainValue="+573"
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
