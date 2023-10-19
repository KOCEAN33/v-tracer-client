import { useQuery, useQueryClient } from '@tanstack/react-query';
import $api from '@/lib/axios-interceptor';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { getCookie } from 'cookies-next';

const UserProfileSchema = z.object({
  userId: z.string(),
  name: z.string(),
  image: z.string().optional(),
});

type UserProfile = z.infer<typeof UserProfileSchema>;

const getUserProfile = async (): Promise<UserProfile> => {
  const res = await $api.get('/auth/myinfo');
  return res.data.data;
};

export const useUserProfile = () => {
  return useQuery({ queryKey: ['myProfile'], queryFn: () => getUserProfile() });
};
