import { MostPlayedGames } from '@/app/_components/most-played-games';
import { RecentStreams } from '@/app/_components/recent-streams';
import { TopSimpleCards } from '@/app/_components/top-simple-cards';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <TopSimpleCards />
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
