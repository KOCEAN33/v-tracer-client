'use client';

import { useEffect, useState } from 'react';
import { CreateAccountModal } from '@/components/modals/create-account-modal';
import { LoginModal } from '@/components/modals/login-modal';

export const LoginProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <LoginModal />
    </>
  );
};
