import Button from 'src/component/Button';
// import { useIsConnected } from '@/utils/hooks/connect/wallet';
import React from 'react';
import Navigation from './Navigation';
import WalletInfo from './WalletInfo';
import Icon from 'src/component/Icon';
import { useHistory } from 'react-router';

const Header = () => {
  const isConnected: boolean = true;
  const history = useHistory();
  const onClickLogo = () => {
    history.push('/');
  };

  return (
    <header className="bg-primary-500 w-full sticky top-0 z-50">
      <div className="flex items-center px-8 justify-between ">
        <div className="flex item-center">
          <Icon
            name="logo"
            type="png"
            className="cursor-pointer"
            onClick={onClickLogo}
          />
          <Navigation />
        </div>

        {isConnected ? (
          <WalletInfo />
        ) : (
          <Button variant="outline">Login</Button>
        )}
      </div>

      <div className="absolute left-o bottom-0 w-full h-px bg-primary-300" />
    </header>
  );
};

export default React.memo(Header);
