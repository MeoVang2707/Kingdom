import Tab from "./OneTab";
import { MainObject, MainObjectEnum, MainObjectLabel } from "src/constant/Type";

export const tabs = [
  {
    logo: "character",
    logoSelected: "character_selected",
    title: MainObjectLabel.CHARACTER,
    value: MainObjectEnum.CHARACTER,
  },
  {
    logo: "ship",
    logoSelected: "ShipSelected",
    title: MainObjectLabel.SHIP,
    value: MainObjectEnum.SHIP,
  },
  {
    logo: "accessory",
    logoSelected: "accessory_selected",
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
        return (
          <Tab
            key={item.title}
            title={item.title}
            logo={selected === item.value ? item.logoSelected : item.logo}
            onClick={handleClickItem(item.value)}
            className="mr-8"
            isSelected={selected === item.value}
          />
        );
      })}
    </div>
  );
}
