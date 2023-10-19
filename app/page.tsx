'use client';

import { useUserData } from '@/hooks/use-auth-store';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import $api from '@/lib/axios-interceptor';
import { useUserStore } from '@/hooks/use-user-store';
import { useUserProfile } from '@/hooks/use-user-profile';

const Home = () => {
  // const { onOpen } = useModal();
  const user = useUserData();
  // const { loading, userData } = useUserStore();
  //
  // const onAction = (e: React.MouseEvent, action: ModalType) => {
  //   e.stopPropagation();
  //   onOpen(action);
  // };
  //

  const testStore = async () => {
    const res = await $api.get('auth/myinfo');
    toast.success(JSON.stringify(res.data.data));
  };

  const authTest = async () => {
    const res = await $api
      .get('auth/test')
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log(e.response.data);
      });
    toast.success(JSON.stringify(res.data));
  };

  return (
    <div className="flex space-x-2">
      {/*<Button onClick={(e) => onAction(e, 'signUp')}>이거 열립니꽈</Button>*/}
      <Button onClick={() => testStore()}>핑핑핑</Button>
      <Button onClick={() => authTest()}>AuthTest</Button>
      <Button onClick={() => testStore()}>QuryTest</Button>
    </div>
  );
};

export default Home;
