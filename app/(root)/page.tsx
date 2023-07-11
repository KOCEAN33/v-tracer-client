'use client';

import { useHomeModal } from '@/hooks/use-home-modal';
import { useEffect } from 'react';

const Home = () => {
  const onOpen = useHomeModal((state) => state.onOpen);
  const isOpen = useHomeModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  // return null;

  return <div className="p-4">Root Page</div>;
};

export default Home;
