import React from 'react';
import Button from 'src/component/Button';

interface MenuProps {}

export enum MenuAccountSider {
  ACCOUNT = 'account',
  INVENTORY = 'inventory',
  ACTIVITY = 'activity',
  CLAIM = 'claim-tokens',
  SETTING = 'settings',
}

const Menu = (props: MenuProps) => {
  return (
    <div className="border border-primary-100 rounded-lg p-4">
      <div className="text-white text-center text-xl leading-7 font-semibold">
        Jack Richards
      </div>
      <div className="text-center mb-4 text-xs leading-5 text-primary-100">
        jrichards123@gmail.com
      </div>
      <div className="flex justify-center">
        <Button
          icon={<img alt="icon" src="/assets/images/qr.svg" />}
          variant="outline"
        >
          Show QR
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Menu);
