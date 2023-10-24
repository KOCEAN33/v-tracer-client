'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

import $api from '@/lib/axios-interceptor';

enum STATUS {
  NOCODE = 0,
  LOADING = 1,
  SUCCESS = 2,
  FAILURE = 3,
}

const verifyCodeSchema = z.string().length(10);

export const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const getVerifyCode = searchParams.get('verifyCode');

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(STATUS.NOCODE);

  const { isError, refetch } = useQuery({
    queryKey: ['verifyEmail'],
    queryFn: () =>
      $api
        .post('auth/verify/email', { verifyCode: getVerifyCode })
        .then((response) => {
          if (response.data.statusCode === 201) {
            setStatus(STATUS.SUCCESS);
            return response.data;
          }
        })
        .catch((e) => {
          setStatus(STATUS.FAILURE);
          return e.response.data;
        }),
    enabled: false,
  });

  const handleSendData = useCallback(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    setLoading(false);
    if (getVerifyCode) {
      const parse = verifyCodeSchema.safeParse(getVerifyCode);
      if (parse.success) {
        setStatus(STATUS.LOADING);
        handleSendData();
      } else {
        setStatus(STATUS.FAILURE);
      }
    }
  }, [loading]);

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

  if (status === STATUS.FAILURE || isError) {
    pageContent = (
      <div>
        <h1>코드 확인에 실패했습니다</h1>
      </div>
    );
  }

  return <>{pageContent}</>;
};
