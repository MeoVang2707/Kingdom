import PaginationPage from "src/component/Pagination";
import { useState } from "react";
import { useHistory } from "react-router";
import Table from "./Table";
import Tabs from "./Tabs";
import Total from "./Total";
import Icon from "src/component/Icon";

export default function Metrics() {
  const [selectedTab, setSelecetedTab] = useState("24h");

  const history = useHistory();

  const onClick = () => {
    history.push("/marketplace");
  };

  const onChangePage = () => {};

  return (
    <div className="sm:px-4 md:px-26 xl:px-16 2xl:px-26 py-12">
      <div className="flex flex-col items-center">
        <Tabs selected={selectedTab} onChangeTab={setSelecetedTab} />

        <Total />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-12 w-full mb-6">
          <div className="col-span-1">
            <Table title="Recently listed" type="list" />

            <div className="flex flex-row-reverse mt-2">
              <div
                className="flex items-center cursor-pointer"
                onClick={onClick}
              >
                <span className="text-accent-500 text-sm font-semibold pr-2">
                  View more on Marketplace
                </span>
                {/* <img src="/assets/images/arrow_right.svg" /> */}
                <Icon name="arrow_right" />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Table title="Recently sold" type="sold" />
          </div>
        </div>

        <PaginationPage total={101} pageSize={10} onChange={onChangePage} />
      </div>
    </div>
  );
}
