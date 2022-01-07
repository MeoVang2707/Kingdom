import Button from 'src/component/Button';
import Icon from 'src/component/Icon';
import React from 'react';
import { useHistory } from 'react-router';

const WalletInfo = () => {
  const history = useHistory();

  const changeToAccount = () => {
    history.push('/account');
  };

  return (
    <div className="flex items-center">
      <div className="px-4 rounded-lg h-10 border border-accent-500 flex items-center mr-8">
        <Icon name="metamask" type="png" />
        <div className="pl-2 text-xs">
          <div className="font-semibold text-white">100 BNB</div>
          <div className="text-primary-100">0x9nq30....x2609nt</div>
        </div>
      </div>

      <Button
        variant="outline"
        icon={<Icon name="account" />}
        textClassName="text-xs"
        onClick={changeToAccount}
      >
        My Account
      </Button>
    </div>
  );
};

export default React.memo(WalletInfo);
