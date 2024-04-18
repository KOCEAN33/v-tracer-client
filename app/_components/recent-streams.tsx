'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRecentStreams } from '@/hooks/use-recent-streams';

export const RecentStreams = () => {
  const { data, isLoading, isError } = useRecentStreams();

  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader>
        <CardTitle>Recent Streams</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {data?.map((recentStream) => (
          <div className="flex items-center gap-4" key={recentStream.id}>
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src={recentStream.image} alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-md font-medium leading-none">
                {recentStream.title}
              </p>
              {/*<p className="text-sm text-muted-foreground">*/}
              {/*  {recentStream.name}*/}
              {/*</p>*/}
            </div>
            <div className="ml-auto font-medium">{recentStream.duration}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
