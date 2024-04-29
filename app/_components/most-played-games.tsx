'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { useMostPlayedGames } from '@/hooks/use-most-played-games';

export const MostPlayedGames = () => {
  const { data } = useMostPlayedGames();

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
            {data?.map((game) => (
              <TableRow key={game.gameId}>
                <TableCell>
                  <div className="text-lg font-black">{game.gameTitle}</div>
                </TableCell>
                <TableCell className="text-right font-bold">
                  {game.duration}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
