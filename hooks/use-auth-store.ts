import { createStore } from 'zustand';
import { z } from 'zod';
import jwtDecode from 'jwt-decode';

const UserDataSchema = z.object({
  userId: z.string(),
  name: z.string(),
  image: z.string().optional(),
});

type UserData = z.infer<typeof UserDataSchema>;

type AuthStore = {
  userData: UserData | undefined;
  accessToken: string | undefined;
  init: () => void;
};

const decodedAccessToken = (accessToken: string) =>
  UserDataSchema.parse(jwtDecode(accessToken));

export const authStore = createStore<AuthStore>((set, get) => ({
  userData: undefined,
  accessToken: undefined,
  init: () => {},
}));

// HOW to fix zustand hydration error
// https://dev.to/abdulsamad/how-to-use-zustands-persist-middleware-in-nextjs-4lb5
