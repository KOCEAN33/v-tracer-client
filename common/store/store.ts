import { AuthStore } from '@/common/store/auth-store';
import { createContext } from 'react';

interface State {
  store: AuthStore;
}

export const store = new AuthStore();

export const Context = createContext<State>({ store });
