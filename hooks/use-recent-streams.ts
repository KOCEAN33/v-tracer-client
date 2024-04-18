import { z } from 'zod';
import $api from '@/lib/axios-interceptor';
import { useQuery } from '@tanstack/react-query';

const RecentStreamsSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string(),
  duration: z.number(),
});

type RecentStreams = z.infer<typeof RecentStreamsSchema>;

const getRecentStreams = async (): Promise<RecentStreams[]> => {
  const res = await $api.get('/streams/recent');
  console.log(res.data);
  return res.data.result;
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
