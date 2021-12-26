import Cart from "src/component/Cart";

const MarketPlaceDetail = () => {
  return (
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
  );
};

export default MarketPlaceDetail;
