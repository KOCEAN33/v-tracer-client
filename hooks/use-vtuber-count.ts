import { z } from 'zod';
import { useQuery } from '@tanstack/react-query';

import $api from '@/lib/axios-interceptor';

const VtuberCountSchema = z.object({
  total: z.string(),
  percent: z.string(),
});

type VtuberCount = z.infer<typeof VtuberCountSchema>;

const apiRequest = async (): Promise<VtuberCount> => {
  const res = await $api.get('v1/vtubers/count');
  return res.data.data;
};

export const useVtuberCount = () => {
  return useQuery({
    queryKey: ['vtuberCount'],
    queryFn: () => apiRequest(),
    gcTime: 10 * 60 * 1000, // 10 min
    staleTime: 5 * 50 * 1000, // 5 min
    retry: 2,
  });
};
