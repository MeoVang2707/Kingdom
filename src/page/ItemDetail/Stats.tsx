import Icon from 'src/component/Icon';
import { MainObjectEnum, MainObject } from 'src/constant/Type';

const items = {
  [MainObjectEnum.CHARACTER]: [
    { img: 'ObjectProps/sta', title: 'STA', value: 'sta' },
    { img: 'ObjectProps/str', title: 'STR', value: 'str' },
    { img: 'ObjectProps/agi', title: 'AGI', value: 'agi' },
    { img: 'ObjectProps/int', title: 'INT', value: 'int' },
    { img: 'ObjectProps/spd', title: 'SPD', value: 'spd' },
  ],
  [MainObjectEnum.SHIP]: [],
  [MainObjectEnum.ACCESSORY]: [
    { img: 'ObjectProps/sta', title: 'STA', value: 'sta' },
    { img: 'ObjectProps/str', title: 'STR', value: 'str' },
    { img: 'ObjectProps/agi', title: 'AGI', value: 'agi' },
    { img: 'ObjectProps/int', title: 'INT', value: 'int' },
  ],
};

interface StatsProps {
  type: MainObject;
}

export default function Stats({ type }: StatsProps) {
  return (
    <div>
      <div className="text-white text-xl font-extrabold">Stats</div>

      <div className="grid grid-cols-5 border border-primary-100 rounded-lg p-4 mt-4">
        {items[type]?.map?.((item, i) => {
          return (
            <div key={item.value} className="col-span-1">
              <div className="text-primary-100 text-xs font-semibold leading-5">
                {item.title}
              </div>
              <div className="flex items-center">
                <Icon name={item.img} alt="icon" />
                <span className="ml-1 text-white text-xs font-semibold">
                  100
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
