'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import $api, { API_URL } from '@/lib/axios-interceptor';
import { cn } from '@/lib/utils';
import { ModalType, useModal } from '@/hooks/use-modal-store';

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
import { getActions } from '@/hooks/use-auth-store';
import { deleteCookie, setCookie } from 'cookies-next';
import toast from 'react-hot-toast';

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: '유효한 이메일 주소를 입력해주세요' })
    .min(1),
  password: z.string().min(6, { message: '비밀번호는 6자 이상이여야 합니다' }),
});

export const LoginModal = () => {
  const { isOpen, onClose, type, onOpen } = useModal();
  const router = useRouter();
  const action = getActions();

  const googleLogin = () => {
    window.open(
      `${API_URL}/api/auth/google`,
      'Auth',
      // 'width=500,height=700,status=yes,toolbar=no,menubar=no,location=no', // window.params
    );
    if (typeof window !== 'undefined') {
      window.addEventListener('message', (e) => {
        if (e.origin !== API_URL) return;
        const userData: any = JSON.parse(e.data);
        if (userData) {
          if (userData.statusCode == 409) {
            toast.error('이 이메일은 이미 존재합니다');
            form.reset();
            onClose();
            return;
          }
          console.log({ userData });
          $api
            .post('/auth/gen_token', {
              userId: userData.userId,
              provider: userData.provider,
              externalId: userData.externalId,
              accessToken: userData.accessToken,
            })
            .then((response) => {
              deleteCookie('token-access');

              if (response.data.statusCode == 201) {
                setCookie('token-access', response.data.data.accessToken);
                action.setLoggedIn();
                toast.success('로그인 성공');
                form.reset();
                onClose();
                router.refresh();
              }
            })
            .catch((e) => {
              console.log(e);
              toast.error('로그인 실패');
            });
        } else {
          console.log('access token или googleId отсутствуют');
        }
        return;
      });
    }
  };

  const isModalOpen = isOpen && type === 'logIn';

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    $api
      .post('/auth/login', values)
      .then((response) => {
        deleteCookie('token-access');

        if (response.data.statusCode === 201) {
          setCookie('token-access', response.data.data.accessToken);
          action.setLoggedIn();
          toast.success('로그인 성공');
          form.reset();
          onClose();
          router.refresh();
        }
      })
      .catch((e: any) => {
        if (e.response.data.statusCode === 500) {
          toast.error('잠시후 다시 시도해주세요');
        } else {
          toast.error('로그인에 실패했습니다');
        }
      });
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

        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" onClick={() => googleLogin()}>
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
              </div>{' '}
              <div className="pt-6">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  로그인
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          {/*<div className="flex w-full flex-col space-y-5">*/}
          <div className="flex flex-row space-x-2">
            <p className="grid gap-4">아직 계정이 없으신가요?</p>
            <p
              onClick={(e) => onAction(e, 'signUp')}
              className="cursor-pointer font-semibold underline underline-offset-4"
            >
              계정 만들기
            </p>
          </div>
          {/*</div>*/}
        </CardFooter>
      </DialogContent>
    </Dialog>
  );
};
