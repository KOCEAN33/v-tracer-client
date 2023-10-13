import { create } from 'zustand';
import { z } from 'zod';

import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const UserDataSchema = z.object({
  userId: z.string(),
  name: z.string(),
  image: z.string().nullish(),
});

type UserData = z.infer<typeof UserDataSchema>;

type AuthStore = {
  userData: UserData | undefined;
  accessToken: string | undefined;
  actions: {
    setAccessToken: (accessToken: string | undefined) => void;
    init: () => void;
    clearTokens: () => void;
  };
};

const decodeAccessToken = (accessToken: string) =>
  UserDataSchema.parse(jwtDecode<UserData>(accessToken));

export const useAuthStore = create<AuthStore>()((set, get) => ({
  userData: undefined,
  accessToken: undefined,
  actions: {
    setAccessToken: (accessToken: string | undefined) => {
      const userData = (() => {
        try {
          return accessToken ? decodeAccessToken(accessToken) : undefined;
        } catch (e) {
          console.error(e);
          return undefined;
        }
      })();
      set({ accessToken, userData });
    },
    init: () => {
      const { setAccessToken } = get().actions;
      setAccessToken(Cookies.get('token-access'));
    },
    clearTokens: () => set({ userData: undefined, accessToken: undefined }),
  },
}));

export type ExtractState<S> = S extends {
  getState: () => infer T;
}
  ? T
  : never;

// Selectors
const userDataSelector = (state: ExtractState<typeof useAuthStore>) =>
  state.userData;
const accessTokenSelector = (state: ExtractState<typeof useAuthStore>) =>
  state.accessToken;
const actionsSelector = (state: ExtractState<typeof useAuthStore>) =>
  state.actions;

// getters
export const getAccessToken = () =>
  accessTokenSelector(useAuthStore.getState());
export const getUserData = () => userDataSelector(useAuthStore.getState());
export const getActions = () => actionsSelector(useAuthStore.getState());

// Hooks
export const useUserData = () => useAuthStore(userDataSelector);
export const useAuthActions = () => useAuthStore(actionsSelector);

// HOW to fix zustand hydration error
// https://dev.to/abdulsamad/how-to-use-zustands-persist-middleware-in-nextjs-4lb5
