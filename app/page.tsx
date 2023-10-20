'use client';

import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import $api from '@/lib/axios-interceptor';
import { useUserProfile } from '@/hooks/use-user-profile';

const Home = () => {
  // const { onOpen } = useModal();
  //
  // const onAction = (e: React.MouseEvent, action: ModalType) => {
  //   e.stopPropagation();
  //   onOpen(action);
  // };
  //

  const userProfile = useUserProfile();

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

  const profileTest = () => {
    console.log(userProfile.data);
  };

  return (
    <div className="flex space-x-2">
      {/*<Button onClick={(e) => onAction(e, 'signUp')}>이거 열립니꽈</Button>*/}
      <Button onClick={() => testStore()}>핑핑핑</Button>
      <Button onClick={() => authTest()}>AuthTest</Button>
      <Button onClick={() => profileTest()}>ProfileTest</Button>
    </div>
  );
};

export default Home;
