// import { useWallet } from "src/utils/hooks/connect/wallet";
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import Icon from 'src/component/Icon';
import AccountIcon from 'src/component/Icon/Account';
import ActivityIcon from 'src/component/Icon/Activity';
import ClaimIcon from 'src/component/Icon/Claim';
import InventoryIcon from 'src/component/Icon/Inventory';
import Settingicon from 'src/component/Icon/Setting';
// import { history, useIntl, useLocation } from "umi";
import Infor from './Infor';
import MenuItem from './MenuItem';

interface MenuProps {}

export enum MenuAccountSider {
  ACCOUNT = 'account',
  INVENTORY = 'inventory',
  ACTIVITY = 'activity',
  CLAIM = 'claim-tokens',
  SETTING = 'settings',
}

const menus: any[] = [
  {
    key: MenuAccountSider.ACCOUNT,
    path: '/account',
    title: 'Account',
    icon: AccountIcon,
  },
  {
    key: MenuAccountSider.INVENTORY,
    path: '/account/inventory',
    title: 'Inventory',
    icon: InventoryIcon,
  },
  {
    key: MenuAccountSider.ACTIVITY,
    path: '/account/activity',
    title: 'Activity',
    icon: ActivityIcon,
  },
  {
    key: MenuAccountSider.CLAIM,
    path: '/account/claim-tokens',
    title: 'Claim Tokens',
    icon: ClaimIcon,
  },
  {
    key: MenuAccountSider.SETTING,
    path: '/account/settings',
    title: 'Account Settings',
    icon: Settingicon,
  },
];

const Menu = (props: MenuProps) => {
  const { pathname } = useLocation();
  const history = useHistory();
  // const wallet = useWallet();

  const [activeKey, setActiveKey] = React.useState<MenuAccountSider>(
    (pathname.split('/')?.[2] || MenuAccountSider.ACCOUNT) as MenuAccountSider,
  );

  const onSelect = (newActiveKey: MenuAccountSider) => {
    setActiveKey(newActiveKey);
  };

  const handleDisconnect = () => {
    // wallet.disconnectWallet();
    history.push('/');
  };

  return (
    <div
      className="border border-primary-100 rounded-lg p-4 w-64 flex flex-col justify-between fixed"
      style={{ height: 'calc(100vh - 112px)' }}
    >
      <div className="flex flex-col justify-between">
        <Infor />

        <div className="mt-4">
          {menus.map((item, index) => (
            <MenuItem
              item={item}
              key={item.title}
              activeKey={activeKey}
              onSelect={onSelect}
              className={index === 0 ? '' : 'mt-2'}
            />
          ))}
        </div>
      </div>

      <div className="flex cursor-pointer" onClick={handleDisconnect}>
        <Icon name="logout" />
        <span className="text-warning-500 leading-6 font-semibold pl-2">
          Log out
        </span>
      </div>
    </div>
  );
};

export default React.memo(Menu);
