export default function SaleHistory() {
  return (
    <div>
      <div className="text-white text-xl font-extrabold">Sale History</div>

      <div className="mt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <div
              key="item"
              className={`px-4 rounded-lg border border-primary-100 flex justify-between items-center ${
                index === 0 ? '' : 'mt-2'
              }`}
            >
              <div className="flex">
                <div className="w-32">
                  <div className="text-primary-100 text-xs leading-5">
                    BUYER
                  </div>
                  <div
                    className="font-semibold text-white text-sm"
                    style={{ lineHeight: '22px' }}
                  >
                    NamNQLC
                  </div>
                  <div className="text-primary-100 text-xs leading-5">
                    (0xx6...78hvfg)
                  </div>
                </div>
                <div className="w-32">
                  <div className="text-primary-100 text-xs leading-5">
                    SELLER
                  </div>
                  <div
                    className="font-semibold text-white text-sm"
                    style={{ lineHeight: '22px' }}
                  >
                    ChiNTNQ
                  </div>
                  <div className="text-primary-100 text-xs leading-5">
                    (0xx6...78hvfg)
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="text-accent-500 font-bold text-xl leading-6">
                    10
                  </div>

                  <img
                    alt="logo"
                    src="/assets/images/bnb.svg"
                    width={28}
                    height={28}
                    className="ml-1 mr-2"
                  />

                  <div className="text-white text-sm leading-5">$1,200</div>
                </div>

                <div className="text-right text-primary-100 text-xs leading-5">
                  a few seconds ago
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
