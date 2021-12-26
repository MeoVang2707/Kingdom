import { useState } from 'react';
import Cart from 'src/component/Cart';
import TabHeader from 'src/component/Tabs/MainTab';
import { MainObjectEnum } from 'src/constant/Type';
import Filters from 'src/page/Marketplace/Filters';

export default function Inventory() {
  const [tabSelected, setTabSelected] = useState(MainObjectEnum.CHARACTER);

  return (
    <div className="pl-4">
      <TabHeader
        className="flex py-2 border-b border-primary-300"
        onClick={setTabSelected}
        selected={tabSelected}
      />
      <div className="mt-4">
        <Filters />
      </div>

      <div className="pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
            return (
              <div className="col-span-1" key={item}>
                <Cart />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
