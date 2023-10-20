import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ExtractState } from '@/hooks/types/ExtractState';

interface AuthStore {
  isLoggedIn: boolean;
  actions: {
    setLoggedIn: () => void;
    setLogout: () => void;
  };
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    (set) => ({
      isLoggedIn: false,
      actions: {
        setLoggedIn: () => set({ isLoggedIn: true }),
        setLogout: () => set({ isLoggedIn: false }),
      },
    }),
    { name: 'AuthStore' },
  ),
);

// Selectors
const loginStatusSelector = (state: ExtractState<typeof useAuthStore>) =>
  state.isLoggedIn;
const actionSelector = (state: ExtractState<typeof useAuthStore>) =>
  state.actions;

// Getters
export const getLoginStatus = () =>
  loginStatusSelector(useAuthStore.getState());
export const getActions = () => actionSelector(useAuthStore.getState());

// Hooks
export const useAuth = () => useAuthStore(loginStatusSelector);
