export default function Total() {
  return (
    <div className="flex w-full items-center justify-around mt-8">
      <div className="flex flex-col items-center">
        <img alt="logo" src="/assets/images/token_big.svg" />
        <div className="text-white text-sm font-bold pt-2">TOTAL SALE</div>
        <div className="text-accent-500 font-bold text-2xl">50.000</div>
      </div>

      <div className="flex flex-col items-center">
        <img alt="logo" src="/assets/images/token_big.svg" />
        <div className="text-white text-sm font-bold pt-2">TOTAL SALE</div>
        <div className="flex items-center">
          <div className="text-accent-500 font-bold text-2xl">50.000</div>

          <img
            alt="logo"
            src="/assets/images/bnb.svg"
            width={32}
            height={32}
            className="ml-1 mr-2"
          />

          <div className="text-white text-sm">$100.000</div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img alt="logo" src="/assets/images/token_big.svg" />
        <div className="text-white text-sm font-bold pt-2">TOTAL SALE</div>
        <div className="text-accent-500 font-extrabold text-2xl">50.000</div>
      </div>
    </div>
  );
}
