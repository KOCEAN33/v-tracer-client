import { create } from 'zustand';
import { z } from 'zod';
import $api from '@/lib/axios-interceptor';

export const UserDataSchema = z.object({
  userId: z.string(),
  name: z.string(),
  image: z.string().optional(),
});

export type UserData = z.infer<typeof UserDataSchema>;

type UserStore = {
  isLoading: boolean;
  isLoggedIn: boolean;
  userData: UserData | undefined;
  actions: {
    setLoaded: () => void;
    setLoggedIn: () => void;
    setUserData: (userData: UserData) => void;
    clearUserData: () => void;
  };
};

export const useUserStore = create<UserStore>((set, get) => ({
  isLoading: true,
  isLoggedIn: false,
  userData: undefined,
  actions: {
    setLoaded: () => {
      set({ isLoading: false });
    },
    setLoggedIn: () => {
      set({ isLoggedIn: true });
    },
    setUserData: (userData) => {
      set({ userData: userData });
    },
    clearUserData: () => {
      set({ isLoggedIn: false, userData: undefined });
    },
  },
}));
