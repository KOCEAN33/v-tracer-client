'use client';

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { getActions } from '@/hooks/use-auth-store';

const checkAuthStatus = () => {
  const accessToken = Cookies.get('token-access');
  const action = getActions();

  if (accessToken) {
    action.init();
    return true;
  }

  return false;
};

export const AuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(true);
    checkAuthStatus();
  }, []);

  if (!isLoggedIn) {
    return null;
  }

  return;
};
