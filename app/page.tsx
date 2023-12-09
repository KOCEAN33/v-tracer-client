'use client';

import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import $api, { API_URL } from '@/lib/axios-interceptor';
import { useUserProfile } from '@/hooks/use-user-profile';

const Home = () => {
  const userProfile = useUserProfile();

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

  const apiTest = async () => {
    toast.success(JSON.stringify({ API_URL }));
  };

  return (
    <div className="flex space-x-2">
      {/*<Button onClick={(e) => onAction(e, 'signUp')}>이거 열립니꽈</Button>*/}
      <Button onClick={() => apiTest()}>핑핑핑</Button>
      <Button onClick={() => authTest()}>AuthTest</Button>
      <Button onClick={() => profileTest()}>ProfileTest</Button>
    </div>
  );
};

export default Home;
