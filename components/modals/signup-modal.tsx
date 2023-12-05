'use client';

import { z } from 'zod';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import $api from '@/lib/axios-interceptor';
import { Icons } from '@/components/icons';

import { ModalType, useModal } from '@/hooks/use-modal-store';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
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
import { SocialLoginButton } from '@/components/social-login-button';

const signUpSchema = z.object({
  name: z.string().min(1, { message: '이름은 최소 한글자 이상이여야 합니다' }),
  email: z
    .string()
    .email({ message: '이메일 주소가 올바르지 않습니다' })
    .min(1),
  password: z
    .string()
    .min(6, { message: '비밀번호는 최소 6자 이상이여야 합니다' }),
});

export function SignUpModal() {
  const { isOpen, onClose, type, onOpen } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === 'signUp';

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: '', email: '', password: '' },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof signUpSchema>) => {
    $api
      .post('/auth/signup', values)
      .then((response) => {
        if (response.data.statusCode === 201) {
          toast.success(response.data.message);
          form.reset();
          router.refresh();
          onClose();
        }
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };

  const onAction = (e: React.MouseEvent, action: ModalType) => {
    form.reset();
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
          <CardTitle className="text-2xl">새로운 계정 만들기</CardTitle>
          <CardDescription>
            계정을 만들기 위해 아래 내용을 입력해 주세요
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          <SocialLoginButton />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          type="name"
                          placeholder="이름"
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
              <div className="pt-6">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  계정 만들기
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div className="flex w-full flex-col space-y-5">
            <div className="flex flex-row space-x-2">
              <p className="grid gap-4">이미 계정이 있으신가요?</p>
              <p
                onClick={(e) => onAction(e, 'logIn')}
                className="cursor-pointer font-semibold underline underline-offset-4"
              >
                로그인 하기
              </p>
            </div>
          </div>
        </CardFooter>
      </DialogContent>
    </Dialog>
  );
}
