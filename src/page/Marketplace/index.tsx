import React, { useState } from 'react';
import Filters from './Filters';
import MarketPlaceDetail from './MarketPlaceDetail';
import MainTab from 'src/component/Tabs/MainTab';
import {
  FilterValue,
  MainObject,
  MainObjectEnum,
  SortValue,
} from 'src/constant/Type';
import LeftMenu from './LeftMenu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/state/store';
import { handleChangeField } from 'src/state/reducer/marketplace';

interface MarketplaceProps {}

const Marketplace = (props: MarketplaceProps) => {
  const dispatch = useDispatch();
  const { selectedTag, filterPrice } = useSelector(
    (state: RootState) => state.marketplace,
  );
  const handleClickItem = (val: MainObject) => {
    dispatch(handleChangeField({ selectedTag: val }));
  };

  const handleChangeFilterPrice = (val: string) => {
    dispatch(handleChangeField({ filterPrice: val as FilterValue }));
  };

  const handleChangeSort = (val: string) => {
    dispatch(handleChangeField({ sort: val as SortValue }));
  };

  return (
    <div>
      <MainTab
        selected={selectedTag}
        onClick={handleClickItem}
        className="flex px-4 py-2 border-b border-primary-300 z-50 fixed w-full bg-primary-400"
      />

      <div className="pt-17 p-4 flex">
        <div style={{ height: 'calc(100vh - 148px)' }} className="fixed">
          <LeftMenu selected={selectedTag} />
        </div>

        <div className="px-4 ml-64 grow">
          <div>
            <Filters
              handleChangeFilter={handleChangeFilterPrice}
              filterPrice={filterPrice}
              handleChangeSort={handleChangeSort}
            />
          </div>

          <div>
            <MarketPlaceDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Marketplace);
