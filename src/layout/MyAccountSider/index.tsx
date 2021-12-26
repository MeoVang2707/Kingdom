// import { useIsConnected } from '@/utils/hooks/connect/wallet';
import React from 'react';
import Menu from './Menu';

interface MyAccountSiderProps {
  children?: React.ReactNode;
}

const MyAccountSider = (props: MyAccountSiderProps) => {
  // const isConnected: boolean = useIsConnected();

  // React.useEffect(() => {
  //   if (!isConnected) {
  //     history.push('/');
  //   }
  // }, []);

  return (
    <div className="py-6 px-4">
      <Menu />
      {props?.children && <div className="pl-64">{props.children}</div>}
    </div>
  );
};

export default React.memo(MyAccountSider);
