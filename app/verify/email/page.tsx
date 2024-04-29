import { VerifyEmail } from '@/app/verify/email/_components/verify-email';
import { Suspense } from 'react';

export default function VerifyEmailPage() {
  return (
    <>
      <Suspense>
        <VerifyEmail />
      </Suspense>
    </>
  );
}
