import Cart from 'src/component/Cart';
import PaginationPage from 'src/component/Pagination';

const MarketPlaceDetail = () => {
  const handleChangePage = () => {};
  return (
    <div className="pt-4 -mx-2">
      <div className="flex flex-wrap m-auto justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
          return (
            <div className="m-2" key={item}>
              <Cart />
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex justify-center items-center">
        <PaginationPage pageSize={10} total={100} onChange={handleChangePage} />
      </div>
    </div>
  );
};

export default MarketPlaceDetail;
