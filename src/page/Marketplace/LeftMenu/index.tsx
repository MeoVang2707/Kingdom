import React from 'react';
import Checkbox from 'src/component/Checkbox';
import RangeSlider from 'src/component/RangeSlider';
import { MainObject, MainObjectEnum } from 'src/constant/Type';

interface MenuProps {
  selected: MainObject;
}

export enum MenuSider {
  METRICS = 'Metrics',
  MARKETPLACE = 'Marketplace',
}

const ClassFilter = {
  title: 'CLASS',
  filters: [
    {
      name: 'Warrior',
      logo: '/assets/images/warrrior.svg',
      value: 'warrior',
    },
    {
      name: 'Mage',
      logo: '/assets/images/mage.svg',
      value: 'mage',
    },
    {
      name: 'Assasin',
      logo: '/assets/images/assasin.svg',
      value: 'assasin',
    },
  ],
};

const RarityFilter = {
  title: 'RARITY',
  filters: [
    {
      name: 'Legendary',
      logo: '/assets/images/RarityLegend.svg',
      value: 'legendary',
    },
    {
      name: 'Epic',
      logo: '/assets/images/RarityEpic.svg',
      value: 'epic',
    },
    {
      name: 'Rare',
      logo: '/assets/images/RarityRare.svg',
      value: 'legendary',
    },
    {
      name: 'Common',
      logo: '/assets/images/RarityCommon.svg',
      value: 'common',
    },
  ],
};

const BuffFilter = {
  title: 'BUFF AMOUNT',
  filters: [
    {
      name: '0 buff',
      logo: '/assets/images/token.svg',
      value: '0',
    },
    {
      name: '1 buff',
      logo: '/assets/images/token.svg',
      value: '1',
    },
    {
      name: '2 buffs',
      logo: '/assets/images/token.svg',
      value: '2',
    },
    {
      name: '3 buffs',
      logo: '/assets/images/token.svg',
      value: '3',
    },
  ],
};

const StatFilter = {
  title: 'STAT',
  filters: [
    {
      name: 'Stat 1',
      logo: '/assets/images/token.svg',
      value: '1',
    },
    {
      name: 'Stat 2',
      logo: '/assets/images/token.svg',
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
  const filters = filtersByObject[selected] || filtersByObject['character'];

  return (
    <div className="h-full bg-primary-300 p-4 w-64 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img alt="filter" src="/assets/images/filter.png" />
          <div className="text-white text-xl font-semibold pl-2">
            Filter ({2})
          </div>
        </div>

        <div className="text-sm cursor-pointer text-accent-500 font-semibold">
          Clear filter
        </div>
      </div>

      <div className="mt-8">
        {filters.map((item) => {
          return (
            <div key={item.title} className="mb-6">
              <div className="text-xs text-accent-500 font-bold">
                {item.title}
              </div>

              {item.filters.map((item2) => {
                return (
                  <div className="mt-2 flex items-center" key={item2.name}>
                    <Checkbox />
                    <img className="ml-2" alt="logo" src={item2.logo} />
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
