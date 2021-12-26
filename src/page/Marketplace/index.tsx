import React, { useState } from "react";
import Filters from "./Filters";
import MarketPlaceDetail from "./MarketPlaceDetail";
import MainTab from "src/component/Tabs/MainTab";
import { MainObject, MainObjectEnum } from "src/constant/Type";
import LeftMenu from "./LeftMenu";

interface MarketplaceProps {}

const Marketplace = (props: MarketplaceProps) => {
  const [selected, setSelected] = useState(MainObjectEnum.CHARACTER);
  const handleClickItem = (val: MainObject) => {
    // history.push(`${pathname}?tab=${val}`);
    // console.log();
    setSelected(val);
  };

  return (
    <div>
      <MainTab
        selected={selected}
        onClick={handleClickItem}
        className="flex px-4 py-2 border-b border-primary-300"
      />

      <div className="p-4 flex">
        <div>
          <LeftMenu selected={selected}/>
        </div>

        <div className="px-4 grow">
          <div>
            <Filters />
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
