import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  imageSrc: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User | null) => set({ user }),
    }),
    {
      name: 'user-storage', // name of item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

// HOW to fix zustand hydration error
// https://dev.to/abdulsamad/how-to-use-zustands-persist-middleware-in-nextjs-4lb5
