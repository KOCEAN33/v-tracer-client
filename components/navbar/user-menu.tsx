'use client';

import { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { deleteCookie } from 'cookies-next';

import $api from '@/lib/axios-interceptor';
import { nameSlicer } from '@/lib/name-slicer';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { getActions } from '@/hooks/use-auth-store';
import { useUserProfile } from '@/hooks/use-user-profile';

export function UserAvatarMenu() {
  const action = getActions();

  const [open, setOpen] = useState(false);
  const { data, isLoading, isError } = useUserProfile();

  const logOut = () => {
    $api
      .post('/auth/logout', {
        userId: data?.userId,
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.response.data.message);
      })
      .finally(() => {
        deleteCookie('token-access');
        action.setLogout();
        toast.success('로그아웃 되었습니다');
        // router.refresh(); react-query의 캐시 데이터가 잠깐동안 사용가능함
        // window.location.reload();
      });
  };

  if (isError || isLoading) {
    return null;
  }

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 pr-2">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 pl-1.5 transition">
              <Avatar className="h-9 w-9 cursor-pointer transition hover:shadow-md">
                <AvatarImage src={data?.image} />
                <AvatarFallback>{nameSlicer(data?.name)}</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logOut()} className="text-red-600">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
