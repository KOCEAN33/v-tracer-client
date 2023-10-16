'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import { z } from 'zod';
import $api from '@/lib/axios-interceptor';
import toast from 'react-hot-toast';

enum STATUS {
  NOCODE = 0,
  VERIFYING = 1,
  SUCCESS = 2,
  FAILURE = 3,
}

const verifyCodeSchema = z.string().length(10);

export const EmailVerifyCard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('verifyCode');

  const [status, setStatus] = useState(STATUS.NOCODE);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(STATUS.VERIFYING);
        await $api
          .post('/auth/verify/email', code)
          .then((response) => {
            if (response.data.statusCode === 201) {
              // success verify
              setStatus(STATUS.SUCCESS);
            }
          })
          .catch((e) => {
            setStatus(STATUS.FAILURE);
            toast.error(e.response.data.message);
          });
      } catch (e) {
        setStatus(STATUS.FAILURE);
      }
    };
    if (code) {
      fetchData();
    }
  }, []);

  let pageContent = (
    <div>
      <h1>이메일을 확인해주세요</h1>
    </div>
  );

  if (status === STATUS.VERIFYING) {
    pageContent = (
      <div>
        <h1>코드 확인중입니다</h1>
      </div>
    );
  }

  if (status === STATUS.SUCCESS) {
    pageContent = (
      <div>
        <h1>이메일 인증이 완료되었습니다</h1>
      </div>
    );
  }

  if (status === STATUS.FAILURE) {
    pageContent = (
      <div>
        <h1>코드 확인에 실패했습니다</h1>
      </div>
    );
  }

  return <>{pageContent}</>;
};
