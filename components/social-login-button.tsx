import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { API_URL } from '@/lib/axios-interceptor';

import { getActions } from '@/hooks/use-auth-store';
import { useModal } from '@/hooks/use-modal-store';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export const SocialLoginButton = () => {
  const { onClose } = useModal();
  const action = getActions();
  const router = useRouter();

  const socialLogin = (event: React.MouseEvent, provider: string) => {
    event.stopPropagation();
    window.open(`${API_URL}/api/v1/auth/${provider}`, 'Auth');
    if (typeof window !== 'undefined') {
      window.addEventListener('message', (e) => {
        if (e.origin !== API_URL) return;
        const resData: any = JSON.parse(e.data);
        if (resData) {
          if (resData.statusCode == 409) {
            toast.error('이 이메일은 이미 존재합니다');
            onClose();
            return;
          }
          if (resData.statusCode == 200) {
            deleteCookie('token-access');
            setCookie('token-access', resData.accessToken);
            action.setLoggedIn();
            toast.success('로그인 성공');
            onClose();
            router.refresh();
          }
        } else {
          toast.error('알 수 없는 오류로 로그인 실패');
        }
        return;
      });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <Button variant="outline" onClick={(e) => socialLogin(e, 'github')}>
        <Icons.gitHub className="mr-2 h-4 w-4" />
        Github
      </Button>
      <Button variant="outline" onClick={(e) => socialLogin(e, 'google')}>
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  );
};
