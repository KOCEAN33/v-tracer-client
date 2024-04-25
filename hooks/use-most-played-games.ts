import { z } from 'zod';
import { useQuery } from '@tanstack/react-query';

import $api from '@/lib/axios-interceptor';

const MostPlayedGamesSchema = z.object({
  gameId: z.number(),
  gameTitle: z.string(),
  duration: z.string(),
});

type MostPlayedGames = z.infer<typeof MostPlayedGamesSchema>;

const getMostPlayedGames = async (): Promise<MostPlayedGames[]> => {
  const res = await $api.get('v1/games/ranking');
  return res.data.data;
};

export const useMostPlayedGames = () => {
  return useQuery({
    queryKey: ['mostPlayedGames'],
    queryFn: () => getMostPlayedGames(),
    gcTime: 10 * 60 * 1000, // 10 min
    staleTime: 5 * 50 * 1000, // 5 min
    retry: 2,
  });
};
