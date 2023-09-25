'use client';

import { useState } from 'react';

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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import $api from '@/lib/axios-interceptor';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useAuth } from '@/hooks/use-auth-store';

export function UserAvatarMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const user = useAuth();

  const logOut = async () => {
    try {
      const response = await $api.post('/auth/logout', {
        userId: user?.id,
      });

      if (response.status == 201) {
        console.log(response);
        toast.success(response.data.message);
      } else {
        toast.success('logged out');
      }
    } catch (err: any) {
      toast.error(err);
    } finally {
      Cookies.remove('token-access');
      router.refresh();
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 pr-2">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 pl-1.5 transition">
              <Avatar className="h-9 w-9 cursor-pointer transition hover:shadow-md">
                <AvatarImage src={user.imageSrc} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>Assign to...</DropdownMenuItem>
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
