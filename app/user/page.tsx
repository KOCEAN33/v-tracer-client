'use client';

import { Separator } from '@/components/ui/separator';

import { useAuthStore } from '@/hooks/use-auth-store';
import { redirect, useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function SettingsProfilePage() {
  const { isLoading, userData } = useAuthStore();
  const router = useRouter();
  const cookie = getCookie('token-access');

  // if (!cookie) {
  //   redirect('/');
  //   toast.error('로그인이 필요합니다');
  // }

  useEffect(() => {
    console.log(cookie);
    if (!cookie) {
      redirect('/');
      toast.error('로그인이 필요합니다');
    }
  }, [cookie]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      {/*<ProfileForm />*/}
    </div>
  );
}
