import { MainObjectEnum, MainObject } from 'src/constant/Type';

const items = {
  [MainObjectEnum.CHARACTER]: [
    { img: '/assets/images/ObjectProps/sta.svg', title: 'STA', value: 'sta' },
    { img: '/assets/images/ObjectProps/str.svg', title: 'STR', value: 'str' },
    { img: '/assets/images/ObjectProps/agi.svg', title: 'AGI', value: 'agi' },
    { img: '/assets/images/ObjectProps/int.svg', title: 'INT', value: 'int' },
    { img: '/assets/images/ObjectProps/spd.svg', title: 'SPD', value: 'spd' },
  ],
  [MainObjectEnum.SHIP]: [],
  [MainObjectEnum.ACCESSORY]: [
    { img: '/assets/images/ObjectProps/sta.svg', title: 'STA', value: 'sta' },
    { img: '/assets/images/ObjectProps/str.svg', title: 'STR', value: 'str' },
    { img: '/assets/images/ObjectProps/agi.svg', title: 'AGI', value: 'agi' },
    { img: '/assets/images/ObjectProps/int.svg', title: 'INT', value: 'int' },
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
                <img src={item.img} alt="icon" />
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
