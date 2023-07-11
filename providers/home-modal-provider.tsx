'use client';

import { useEffect, useState } from 'react';
import { HomeModal } from '@/components/modals/home-modal';

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
      <HomeModal />
    </>
  );
};
