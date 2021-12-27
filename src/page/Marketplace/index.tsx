import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainTab from 'src/component/Tabs/MainTab';
import { FilterValue, MainObject, SortValue } from 'src/constant/Type';
import { handleChangeField } from 'src/state/reducer/marketplace';
import { RootState } from 'src/state/store';
import Filters from './Filters';
import LeftMenu from './LeftMenu';
import MarketPlaceDetail from './MarketPlaceDetail';

interface MarketplaceProps {}

const Marketplace = (props: MarketplaceProps) => {
  const dispatch = useDispatch();
  const { selectedTag, filterPrice } = useSelector(
    (state: RootState) => state.marketplace,
  );
  const handleClickItem = (val: MainObject) => {
    dispatch(handleChangeField({ selectedTag: val, filters: {} }));
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
