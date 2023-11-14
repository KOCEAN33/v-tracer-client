'use client';

import { Separator } from '@/components/ui/separator';

import { useAuthStore } from '@/hooks/use-auth-store';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function SettingsProfilePage() {
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error('로그인이 필요합니다');
      redirect('/');
    }
  }, [isLoggedIn]);

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
