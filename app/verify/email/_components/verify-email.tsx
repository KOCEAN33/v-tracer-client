'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { z } from 'zod';

import $api from '@/lib/axios-interceptor';

enum STATUS {
  NOCODE = 0,
  LOADING = 1,
  SUCCESS = 2,
  FAILURE = 3,
}

const verifyCodeSchema = z.string().length(12);

export const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const getVerifyCode = searchParams.get('verifyCode');

  const [sent, setSent] = useState<boolean>(false);
  const [status, setStatus] = useState<STATUS>(STATUS.NOCODE);

  const postVerifyCode = (code: string) => {
    setSent(true);
    return $api
      .post('v1/auth/verify/email', { verifyCode: code })
      .then((response) => {
        if (response.data.statusCode === 201) {
          setStatus(STATUS.SUCCESS);
          return response.data;
        }
      })
      .catch((e) => {
        setStatus(STATUS.FAILURE);
        return e.response.data;
      });
  };

  useEffect(() => {
    if (getVerifyCode) {
      const parse = verifyCodeSchema.safeParse(getVerifyCode);
      if (parse.success && !sent) {
        setStatus(STATUS.LOADING);
        postVerifyCode(getVerifyCode);
      } else {
        setStatus(STATUS.FAILURE);
      }
    }
  }, [getVerifyCode, sent]);

  let pageContent = (
    <div>
      <h1>이메일을 확인해주세요</h1>
    </div>
  );

  if (status === STATUS.LOADING) {
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
