'use client';

import { useEffect, useState } from 'react';
import { useUserStore } from '@/hooks/use-user-store';
import Cookies from 'js-cookie';
import { useQuery } from '@tanstack/react-query';

export const UserProvider = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const userData = useUserStore((state) => state.userData);
  // const getUserData = useUserStore((state) => state.fetchUserData);
  // const accessToken = Cookies.get('token-access');
  // const { data } = useQuery({});
  //
  // useEffect(() => {
  //   console.log(accessToken);
  //   if (accessToken) {
  //     console.log('Access token');
  //   } else {
  //     console.log('no exist access token');
  //   }
  // }, [accessToken]);
  //
  // return;
};
