'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

import $api from '@/lib/axios-interceptor';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Link from 'next/link';
import { useUserData } from '@/hooks/use-auth-store';
import { getCookie } from 'cookies-next';
import { useUserProfile } from '@/hooks/use-user-profile';

export function UserAvatarMenu() {
  const [open, setOpen] = useState(false);
  const user = useUserData();
  const token = getCookie('token-access');
  const { data } = useUserProfile();

  function nameSlicer(name: string | undefined): string | undefined {
    if (name === undefined) {
      return undefined;
    }
    return name.slice(0, 2).toUpperCase();
  }

  const logOut = async () => {
    await $api
      .post('/auth/logout', {
        userId: user?.userId,
      })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      })
      .finally(() => {
        Cookies.remove('token-access');
        window.location.reload();
      });
  };

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
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/user">User Setting...</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Set due date...</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub></DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => logOut()}
                className="text-red-600"
              >
                로그아웃
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
