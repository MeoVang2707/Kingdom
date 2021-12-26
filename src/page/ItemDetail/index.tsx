import ArrowLeft from "src/component/Icon/Pagination/ArrowLeft";
import PaginationPage from "src/component/Pagination";
import { MainObject, MainObjectEnum } from "src/constant/Type";
import { useHistory, useParams } from "react-router";
import About from "./About";
import SaleHistory from "./SaleHistory";
import SellBuy from "./SellBuy";
import Stats from "./Stats";

interface ItemDetailProps {
  isInventory?: boolean;
}

export default function ItemDetail({ isInventory }: ItemDetailProps) {
  const params: { type: MainObject; id: string } = useParams();
  const history = useHistory();

  const type = params.type;

  const handleChangePage = () => {};

  const handleClickBack = () => {
    history.goBack();
  };

  return (
    <div className="pt-8 pb-12 px-52">
      <div className="cursor-pointer" onClick={handleClickBack}>
        <ArrowLeft fontSize="40px" />
      </div>

      <div className="flex mt-2">
        <div className="text-white font-semibold text-xs bg-accent-500 flex items-center rounded px-1">
          #62354876
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <div>
          <img
            alt="chracter"
            src="/assets/images/char/char1.png"
            className="w-25rem max-w-25"
          />
        </div>

        <div className="pl-7.5rem" style={{ flexGrow: 1 }}>
          <SellBuy isSell={!!isInventory} />

          <div className="mt-8">
            <About />
          </div>

          {type !== MainObjectEnum.SHIP && (
            <div className="mt-8">
              <Stats type={type} />
            </div>
          )}

          <div className="mt-8">
            <SaleHistory />
          </div>

          <div className="flex justify-center mt-6">
            <div>
              <PaginationPage
                pageSize={10}
                total={100}
                onChange={handleChangePage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
