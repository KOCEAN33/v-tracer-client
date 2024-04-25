import { z } from 'zod';
import { useQuery } from '@tanstack/react-query';

import $api from '@/lib/axios-interceptor';

const GameStreamRatioSchema = z.object({
  total: z.string(),
  percent: z.string(),
});

type GameStreamRatio = z.infer<typeof GameStreamRatioSchema>;

const apiRequest = async (): Promise<GameStreamRatio> => {
  const res = await $api.get('v1/streams/ratio/game');
  return res.data.data;
};

export const useGameStreamRatio = () => {
  return useQuery({
    queryKey: ['gameStreamRatio'],
    queryFn: () => apiRequest(),
    gcTime: 10 * 60 * 1000, // 10 min
    staleTime: 5 * 50 * 1000, // 5 min
    retry: 2,
  });
};
