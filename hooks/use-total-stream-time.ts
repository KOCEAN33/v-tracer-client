import { z } from 'zod';
import { useQuery } from '@tanstack/react-query';

import $api from '@/lib/axios-interceptor';

const TotalStreamTimeSchema = z.object({
  total: z.string(),
  percent: z.string(),
});

type TotalStreamTime = z.infer<typeof TotalStreamTimeSchema>;

const apiRequest = async (): Promise<TotalStreamTime> => {
  const res = await $api.get('v1/streams/count/total-time');
  return res.data.data;
};

export const useTotalStreamTime = () => {
  return useQuery({
    queryKey: ['totalStreamTime'],
    queryFn: () => apiRequest(),
    gcTime: 10 * 60 * 1000, // 10 min
    staleTime: 5 * 50 * 1000, // 5 min
    retry: 2,
  });
};
