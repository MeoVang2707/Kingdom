import ArrowLeft from 'src/component/Icon/Pagination/ArrowLeft';
import PaginationPage from 'src/component/Pagination';
import { MainObject, MainObjectEnum } from 'src/constant/Type';
import { Redirect, useHistory, useParams } from 'react-router';
import About from './About';
import SaleHistory from './SaleHistory';
import SellBuy from './SellBuy';
import Stats from './Stats';
import Icon from 'src/component/Icon';

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

  if (
    ![
      MainObjectEnum.ACCESSORY,
      MainObjectEnum.CHARACTER,
      MainObjectEnum.SHIP,
    ].includes(type)
  ) {
    return <Redirect to="/" />;
  }

  return (
    <div className="pt-8 pb-12 px-4 max-w-screen-lg mx-auto">
      <div className="cursor-pointer" onClick={handleClickBack}>
        <ArrowLeft fontSize="40px" />
      </div>

      <div className="flex mt-2">
        <div className="text-white font-semibold bg-accent-500 flex items-center rounded px-1">
          #62354876
        </div>
      </div>

      <div className="flex justify-between mt-6 flex-wrap">
        <div>
          <Icon name="/char/char1" type="png" className="w-25rem max-w-25" />
        </div>

        <div className="lg:w-1/2 grow lg:grow-0">
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
