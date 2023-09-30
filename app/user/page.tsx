'use client';

import { Separator } from '@/components/ui/separator';
import { ProfileForm } from '@/app/user/profile-form';
import { useUserData } from '@/hooks/use-auth-store';

export default function SettingsProfilePage() {
  const user = useUserData();

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
