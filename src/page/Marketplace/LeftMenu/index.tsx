import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from 'src/component/Checkbox';
import Icon from 'src/component/Icon';
import RangeSlider from 'src/component/RangeSlider';
import { MainObject, MainObjectEnum } from 'src/constant/Type';
import { handleChangeField } from 'src/state/reducer/marketplace';
import { RootState } from 'src/state/store';

interface MenuProps {
  selected: MainObject;
}

export enum MenuSider {
  METRICS = 'Metrics',
  MARKETPLACE = 'Marketplace',
}

const ClassFilter = {
  title: 'CLASS',
  value: 'class',
  filters: [
    {
      name: 'Warrior',
      logo: 'warrrior',
      value: 'warrior',
    },
    {
      name: 'Mage',
      logo: 'mage',
      value: 'mage',
    },
    {
      name: 'Assasin',
      logo: 'assasin',
      value: 'assasin',
    },
  ],
};

const RarityFilter = {
  title: 'RARITY',
  value: 'rarity',
  filters: [
    {
      name: 'Legendary',
      logo: 'RarityLegend',
      value: 'legendary',
    },
    {
      name: 'Epic',
      logo: 'RarityEpic',
      value: 'epic',
    },
    {
      name: 'Rare',
      logo: 'RarityRare',
      value: 'rare',
    },
    {
      name: 'Common',
      logo: 'RarityCommon',
      value: 'common',
    },
  ],
};

const BuffFilter = {
  title: 'BUFF AMOUNT',
  value: 'buff',
  filters: [
    {
      name: '0 buff',
      logo: 'token',
      value: '0',
    },
    {
      name: '1 buff',
      logo: 'token',
      value: '1',
    },
    {
      name: '2 buffs',
      logo: 'token',
      value: '2',
    },
    {
      name: '3 buffs',
      logo: 'token',
      value: '3',
    },
  ],
};

const StatFilter = {
  title: 'STAT',
  value: 'stat',
  filters: [
    {
      name: 'Stat 1',
      logo: 'token',
      value: '1',
    },
    {
      name: 'Stat 2',
      logo: 'token',
      value: '2',
    },
  ],
};

const filtersByObject = {
  [MainObjectEnum.CHARACTER]: [ClassFilter, RarityFilter],
  [MainObjectEnum.SHIP]: [RarityFilter, BuffFilter],
  [MainObjectEnum.ACCESSORY]: [RarityFilter, StatFilter],
};

const filtersAccessory = [
  {
    name: 'HP',
    min: 100,
    max: 1000,
  },
  {
    name: 'ATK',
    min: 100,
    max: 1000,
  },
  {
    name: 'DEF',
    min: 100,
    max: 1000,
  },
  {
    name: 'SPD',
    min: 100,
    max: 1000,
  },
];

const Menu = ({ selected }: MenuProps) => {
  const dispatch = useDispatch();
  const filtersMap =
    filtersByObject[selected] || filtersByObject[MainObjectEnum.CHARACTER];

  const { filters } = useSelector((state: RootState) => state.marketplace);

  const onClickFilter = () => {
    dispatch(handleChangeField({ filters: {} }));
  };

  const onClickCheckBox =
    (name: string, name2: string) => (checked: boolean) => {
      // if(checked){
      //   if(filters)
      // }
      if (checked) {
        dispatch(handleChangeField({ filters: { ...filters, [name]: name2 } }));
      } else {
        const newFilters = { ...filters };
        delete newFilters[name];

        dispatch(handleChangeField({ filters: newFilters }));
      }
    };

  const filterLength = Object.keys(filters).length;

  return (
    <div className="h-full bg-primary-300 p-4 w-64 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon name="filter" type="png" />
          <div className="text-white text-xl font-semibold pl-2">
            Filter {filterLength > 0 && `(${filterLength})`}
          </div>
        </div>

        <div
          className="text-sm cursor-pointer text-accent-500 font-semibold"
          onClick={onClickFilter}
        >
          Clear filter
        </div>
      </div>

      <div className="mt-8">
        {filtersMap.map((item) => {
          return (
            <div key={item.title} className="mb-6">
              <div className="text-xs text-accent-500 font-bold">
                {item.title}
              </div>

              {item.filters.map((item2) => {
                return (
                  <div className="mt-2 flex items-center" key={item2.name}>
                    <Checkbox
                      selected={filters[item.value] === item2.value}
                      onClick={onClickCheckBox(item.value, item2.value)}
                    />
                    <Icon className="ml-2" name={item2.logo} />
                    <div className="ml-1 text-white font-bold">
                      {item2.name}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {selected === MainObjectEnum.ACCESSORY &&
        filtersAccessory.map((item, index) => (
          <div className="mt-2 mb-8" key={index}>
            <div className="text-xs font-bold text-primary-100 mb-2">
              {item.name}
            </div>
            <div className="mx-2 mt-1">
              <RangeSlider
                min={item.min}
                max={item.max}
                handleChange={() => {}}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default React.memo(Menu);
