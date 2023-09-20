'use client';

import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { ModalType, useModal } from '@/hooks/use-modal-store';
import useStore from '@/hooks/use-store';
import { useAuthStore } from '@/common/store/auth-store';
import $api from '@/common/http/axios-interceptor';

const Home = () => {
  const { onOpen } = useModal();
  const user = useStore(useAuthStore, (state) => state.user);

  const onAction = (e: React.MouseEvent, action: ModalType) => {
    e.stopPropagation();
    onOpen(action);
  };

  const testStore = () => {
    console.log(user);
    toast.success(`hello ${user?.name}`);
  };

  const authTest = async () => {
    if (user?.id) {
      await $api.get('auth/test');
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
