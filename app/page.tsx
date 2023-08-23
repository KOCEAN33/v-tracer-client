'use client';

import { Button } from '@/components/ui/button';
import { useCreateAccountModal } from '@/hooks/use-create-account';

const Home = () => {
  const createAccountModal = useCreateAccountModal();
  return (
    <>
      <div>
        <Button onClick={() => createAccountModal.onOpen()}>
          이거 열립니꽈
        </Button>
      </div>
    </>
  );
};

export default Home;
