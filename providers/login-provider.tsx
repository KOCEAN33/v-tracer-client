'use client';

import { useEffect, useState } from 'react';
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
