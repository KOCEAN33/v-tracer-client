'use client';

import { useEffect, useState } from 'react';

export const SearchBoxProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SearchBox />
    </>
  );
};
