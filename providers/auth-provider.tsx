'use client';

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { getActions } from '@/hooks/use-auth-store';

function checkAuthStatus() {
  const action = getActions();
  try {
    const accessToken = Cookies.get('token-access');
    if (accessToken) {
      action.init();
      return true;
    }
  } catch (e) {
    console.error(e);
    return false;
  } finally {
    action.setLoaded();
  }
}

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
