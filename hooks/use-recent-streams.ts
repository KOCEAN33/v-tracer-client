import { z } from 'zod';
import { useQuery } from '@tanstack/react-query';

import $api from '@/lib/axios-interceptor';

const RecentStreamsSchema = z.object({
  streamId: z.string(),
  streamTitle: z.string(),
  image: z.string(),
  gameTitle: z.number(),
});

type RecentStreams = z.infer<typeof RecentStreamsSchema>;

const getRecentStreams = async (): Promise<RecentStreams[]> => {
  const res = await $api.get('v1/streams/recent');
  return res.data.data;
};

export const useRecentStreams = () => {
  return useQuery({
    queryKey: ['recentStreams'],
    queryFn: () => getRecentStreams(),
    gcTime: 10 * 60 * 1000, // 10 min
    staleTime: 5 * 50 * 1000, // 5 min
    retry: 2,
  });
};
