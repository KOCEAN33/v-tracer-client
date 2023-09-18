'use client';

import * as z from 'zod';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import $api from '@/common/http/axios-interceptor';
import { cn } from '@/lib/utils';
import { ModalType, useModal } from '@/hooks/use-modal-store';

import { useAuthStore } from '@/common/store/auth-store';
import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const loginSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, { message: '유효한 이메일 주소를 입력해주세요' }),
  password: z.string().min(6, { message: '비밀번호는 6자 이상이여야 합니다' }),
});

export const LoginModal = () => {
  const authStore = useAuthStore();

  const { isOpen, onClose, type, onOpen } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === 'logIn';

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const response = await $api.post('/auth/login', values);

      Cookies.remove('token-access');
      Cookies.set('token-access', response.data.accessToken);

      authStore.setUser(response.data.userData);

      toast.success(response.data.message);
      form.reset();
      router.refresh();
      onClose();
    } catch (e: any) {
      console.log(e);
      // if (e.response.data.message) {
      //   toast.error(e.response.data.message);
      // }
    }
  };

  const onAction = (e: React.MouseEvent, action: ModalType) => {
    e.stopPropagation();
    onOpen(action);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className={cn('max-w-md p-0')}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">로그인 하기</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          type="email"
                          placeholder="이메일"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          type="password"
                          placeholder="비밀번호"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full flex-col space-y-5">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  로그인
                </Button>

                <div className="flex flex-row space-x-2">
                  <p className="grid gap-4">아직 계정이 없으신가요?</p>
                  <p
                    onClick={(e) => onAction(e, 'signUp')}
                    className="cursor-pointer font-semibold underline underline-offset-4"
                  >
                    계정 만들기
                  </p>
                </div>
              </div>
            </CardFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
