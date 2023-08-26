import { makeAutoObservable } from 'mobx';
import { IUser } from '@/types/i-user';
import Cookies from 'js-cookie';
import { AuthService } from '@/common/api/auth.service';
import toast from 'react-hot-toast';

export class AuthStore {
  user = {} as IUser;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);

      // AccessToken
      Cookies.remove('token-access');
      Cookies.set('token-access', response.data.accessToken);

      // save to store
      this.setAuth(true);
      this.setUser(response.data.userData);

      //toast alert
      toast.success('로그인 성공');
    } catch (e: any) {
      toast.error(e.response.data.message);
    }
  }
}
