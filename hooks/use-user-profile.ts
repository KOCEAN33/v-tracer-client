import { useQuery } from '@tanstack/react-query';
import $api from '@/lib/axios-interceptor';
import { z } from 'zod';
import { useAuth } from '@/hooks/use-auth-store';

const UserProfileSchema = z.object({
  userId: z.string(),
  name: z.string(),
  image: z.string().optional(),
});

type UserProfile = z.infer<typeof UserProfileSchema>;

const getUserProfile = async (): Promise<UserProfile> => {
  const res = await $api.get('v1/users/getme');
  return res.data.data;
};

export const useUserProfile = () => {
  const login = useAuth();
  return useQuery({
    queryKey: ['myProfile'],
    queryFn: () => getUserProfile(),
    enabled: login,
    gcTime: 10 * 60 * 1000, // 10 minutes
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};
