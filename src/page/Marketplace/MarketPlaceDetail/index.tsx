import Cart from 'src/component/Cart';

const MarketPlaceDetail = () => {
  return (
    <div className="pt-4">
      <div className="flex flex-wrap m-auto justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
          return (
            <div className="m-2" key={item}>
              <Cart />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketPlaceDetail;
