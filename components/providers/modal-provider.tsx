'use client';

import { useEffect, useState } from 'react';
import { LoginModal } from '@/components/modals/login-modal';
import { SignUpModal } from '@/components/modals/signup-modal';

export const ModalProvider = () => {
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
      <SignUpModal />
    </>
  );
};
