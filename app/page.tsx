'use client';

import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { ModalType, useModal } from '@/hooks/use-modal-store';

import $api from '@/lib/axios-interceptor';
import { useUserData } from '@/hooks/use-auth-store';

const Home = () => {
  const { onOpen } = useModal();
  const user = useUserData();

  const onAction = (e: React.MouseEvent, action: ModalType) => {
    e.stopPropagation();
    onOpen(action);
  };

  const testStore = () => {
    console.log(user);

    toast.success(JSON.stringify(user?.userId));
  };

  const authTest = async () => {
    if (user?.userId) {
      const res = await $api.get('auth/test');
      toast.success(JSON.stringify(res.data));
    } else {
      toast.error('you need to login');
    }
  };

  return (
    <>
      <div className="flex space-x-2">
        <Button onClick={(e) => onAction(e, 'signUp')}>이거 열립니꽈</Button>
        <Button onClick={() => testStore()}>핑핑핑</Button>
        <Button onClick={() => authTest()}>AuthTest</Button>
      </div>
    </>
  );
};

export default Home;
