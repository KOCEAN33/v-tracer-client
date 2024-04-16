import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const MostPlayedGames = () => {
  const games = [
    { id: 1, title: 'エーペックスレジェンズ', totalTime: 1251251 },
    { id: 3, title: 'VALORANT', totalTime: 125125 },
    { id: 4, title: 'パルワールド', totalTime: 12125 },
  ];
  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Most Played Games</CardTitle>
          <CardDescription>가장 많이 플레이 된 게임</CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="#">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Total Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {games.map((game) => (
              <TableRow key={game.id}>
                <TableCell>
                  <div className="text-lg font-black">{game.title}</div>
                </TableCell>
                <TableCell className="text-right font-bold">
                  {game.totalTime}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
