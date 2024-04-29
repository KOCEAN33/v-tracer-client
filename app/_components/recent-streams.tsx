'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRecentStreams } from '@/hooks/use-recent-streams';
import Link from 'next/link';

export const RecentStreams = () => {
  const { data } = useRecentStreams();

  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader>
        <CardTitle>Recent Streams</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {data?.map((recentStream) => (
          <div className="flex items-center gap-4" key={recentStream.streamId}>
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src={recentStream.image} alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <Link
              href={`https://youtube.com/watch?v=${recentStream.streamId}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="grid gap-1">
                <p className="text-md truncate font-medium leading-none">
                  {recentStream.streamTitle}
                </p>
                <p className="truncate text-sm text-muted-foreground">
                  {recentStream.gameTitle}
                </p>
              </div>
            </Link>
            {/*<div className="ml-auto font-medium">{recentStream.duration}</div>*/}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
