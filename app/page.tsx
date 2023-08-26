'use client';

import { Button } from '@/components/ui/button';
import { useCreateAccountModal } from '@/hooks/use-create-account';
import { useLoginModal } from '@/hooks/use-login-modal';
import $api from '@/common/http/axios-interceptor';
import toast from 'react-hot-toast';

const Home = () => {
  const createAccountModal = useCreateAccountModal();
  const loginModal = useLoginModal();

  const test = async () => {
    const data = await $api.get('/auth/test');
    console.log(data);
    toast.success(JSON.stringify(data));
  };

  return (
    <>
      <div className="flex space-x-2">
        <Button onClick={() => loginModal.onOpen()}>이거 열립니꽈</Button>
        <Button onClick={() => test()}>핑핑핑</Button>
      </div>
    </>
  );
};

export default Home;
