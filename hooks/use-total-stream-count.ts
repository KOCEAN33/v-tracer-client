import { z } from 'zod';
import { useQuery } from '@tanstack/react-query';

import $api from '@/lib/axios-interceptor';

const TotalStreamCountSchema = z.object({
  total: z.string(),
  percent: z.string(),
});

type TotalStreamCount = z.infer<typeof TotalStreamCountSchema>;

const apiRequest = async (): Promise<TotalStreamCount> => {
  const res = await $api.get('v1/streams/count');
  return res.data.data;
};

export const useTotalStreamCount = () => {
  return useQuery({
    queryKey: ['totalStreamCount'],
    queryFn: () => apiRequest(),
    gcTime: 10 * 60 * 1000, // 10 min
    staleTime: 5 * 50 * 1000, // 5 min
    retry: 2,
  });
};
