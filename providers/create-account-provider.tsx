'use client';

import { useEffect, useState } from 'react';
import { CreateAccountModal } from '@/components/modals/create-account';

export const CreateAccountProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateAccountModal />
    </>
  );
};
