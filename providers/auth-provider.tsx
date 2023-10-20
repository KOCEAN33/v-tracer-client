'use client';

import { getActions } from '@/hooks/use-auth-store';
import { getCookie } from 'cookies-next';
import { useEffect } from 'react';

export const AuthProvider = () => {
  const action = getActions();
  const token = getCookie('token-access');

  useEffect(() => {
    if (token) {
      action.setLoggedIn();
    }
  }, [token, action]);

  return null;
};
