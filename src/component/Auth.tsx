import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleChangeField, logout } from 'src/state/reducer/auth';
// import SplashScreen from 'src/components/SplashScreen';
// import { setUserData, logout } from 'src/actions/accountActions';
import authService from 'src/apis/auth';
import { UserInfo } from 'src/constant/Type/user';

interface AuthProps {
  children: React.ReactNode;
}

export default function Auth({ children }: AuthProps) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      authService.setAxiosInterceptors({
        onLogout: () => dispatch(logout()),
      });

      authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        const user: UserInfo = await authService.loginInWithToken();

        dispatch(handleChangeField({ userInfor: user }));
      }

      setLoading(false);
    };

    initAuth();
  }, [dispatch]);

  console.log('isLoading', isLoading);

  if (isLoading) {
    return <div>loading</div>;
  }

  return <div>{children}</div>;
}
