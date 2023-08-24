'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCreateAccountModal } from '@/hooks/use-create-account';
import { useCallback, useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { cn } from '@/lib/utils';
import { DialogContent } from '@/components/ui/dialog';
import { useLoginModal } from '@/hooks/use-login-modal';

export function CreateAccountModal() {
  const createAccountModal = useCreateAccountModal();
  const loginModal = useLoginModal();

  const [loading, setLoading] = useState(false);

  const onToggle = useCallback(() => {
    createAccountModal.onClose();
    loginModal.onOpen();
  }, [createAccountModal, loginModal]);

  return (
    <Modal
      isOpen={createAccountModal.isOpen}
      onClose={createAccountModal.onClose}
    >
      <DialogContent className={cn('max-w-md p-0')}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="Name" type="Name" placeholder="사이트에 표시될 이름" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="사용중인 이메일" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full flex-col space-y-5">
            <Button className="w-full">Create account</Button>
            <div className="flex flex-row space-x-2">
              <p className="grid gap-4">이미 계정이 있으신가요?</p>
              <p
                onClick={onToggle}
                className="cursor-pointer font-semibold underline underline-offset-4"
              >
                로그인 하기
              </p>
            </div>
          </div>
        </CardFooter>
      </DialogContent>
    </Modal>
  );
}