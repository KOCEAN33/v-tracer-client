'use client';

import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

import { Separator } from '@/components/ui/separator';
import { useAuthStore } from '@/hooks/use-auth-store';

export default function SettingsProfilePage() {
  const { isLoggedIn } = useAuthStore();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  useEffect(() => {
    if (load) {
      if (!isLoggedIn) {
        toast.error('로그인이 필요합니다');
        redirect('/');
      }
    }
  }, [isLoggedIn, load]);

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
