import React from 'react';
import { useHistory } from 'react-router';
import { MenuAccountSider } from '..';

interface MenuItemProps {
  item: Record<string, any>;
  activeKey: MenuAccountSider;
  onSelect: (menuKey: MenuAccountSider) => void;
  className?: string;
}

const MenuItem = ({ item, onSelect, activeKey, className }: MenuItemProps) => {
  const history = useHistory();

  const isActiveKey = activeKey === item.key;

  const handleClick = () => {
    onSelect(item.key as MenuAccountSider);

    return history.push(item.path);
  };

  const Icon = item.icon;

  if (item.key === MenuAccountSider.ACCOUNT) {
    console.log('aaaaaaaa', isActiveKey);
  }

  return (
    <div
      className={`${
        isActiveKey
          ? 'bg-accent-500 text-white hover:bg-accent-600'
          : 'text-primary-100'
      } p-2 rounded-lg flex items-center cursor-pointer hover:text-white ${className}`}
      onClick={handleClick}
    >
      <Icon />
      <span className="pl-2 font-semibold leading-6">{item.title}</span>
    </div>
  );
};

export default React.memo(MenuItem);
