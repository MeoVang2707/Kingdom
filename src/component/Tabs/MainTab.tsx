import Tab from './OneTab';
import { MainObject, MainObjectEnum } from 'src/constant/Type';
import { MainObjectLabel } from 'src/constant';
import Ship from 'src/component/Icon/Ship';
import Character from 'src/component/Icon/Character';
import Accessory from 'src/component/Icon/Accessory';

export const tabs = [
  {
    logo: Character,
    title: MainObjectLabel.CHARACTER,
    value: MainObjectEnum.CHARACTER,
  },
  {
    logo: Ship,
    title: MainObjectLabel.SHIP,
    value: MainObjectEnum.SHIP,
  },
  {
    logo: Accessory,
    title: MainObjectLabel.ACCESSORY,
    value: MainObjectEnum.ACCESSORY,
  },
];

interface ViewProps {
  onClick: (val: MainObject) => void;
  selected: string;
  className?: string;
}

export default function View({ onClick, selected, className }: ViewProps) {
  const handleClickItem = (val: MainObject) => () => {
    onClick(val);
  };

  return (
    <div className={className}>
      {tabs.map((item) => {
        const Icon = item.logo;
        return (
          <Tab
            key={item.title}
            title={item.title}
            logo={<Icon />}
            onClick={handleClickItem(item.value)}
            className="mr-8"
            isSelected={selected === item.value}
          />
        );
      })}
    </div>
  );
}
