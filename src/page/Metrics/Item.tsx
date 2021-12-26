import { MainObject, MainObjectEnum } from "src/constant/Type";

interface ItemProps {
  type: MainObject;
  isSold?: boolean;
}

const items = {
  [MainObjectEnum.CHARACTER]: [
    { img: "/assets/images/ObjectProps/sta.svg", value: "sta" },
    { img: "/assets/images/ObjectProps/str.svg", value: "str" },
    { img: "/assets/images/ObjectProps/agi.svg", value: "agi" },
    { img: "/assets/images/ObjectProps/int.svg", value: "int" },
    { img: "/assets/images/ObjectProps/spd.svg", value: "spd" },
  ],
  [MainObjectEnum.SHIP]: [],
  [MainObjectEnum.ACCESSORY]: [
    { img: "/assets/images/ObjectProps/sta.svg", value: "sta" },
    { img: "/assets/images/ObjectProps/str.svg", value: "str" },
    { img: "/assets/images/ObjectProps/agi.svg", value: "agi" },
    { img: "/assets/images/ObjectProps/int.svg", value: "int" },
  ],
};

export default function Item({ type, isSold }: ItemProps) {
  return (
    <div
      className="h-16 flex justify-between items-center border border-primary-100 p-2 rounded-lg mt-4 flex-wrap hover:border-accent-500 cursor-pointer"
      style={{ boxSizing: "border-box" }}
    >
      <div className="flex items-center">
        <img
          alt={type}
          src="/assets/images/char/char1_small.png"
          className="w-12 h-12"
        />

        <span className="text-white font-semibold text-xs ml-2 bg-accent-500 flex items-center rounded px-1">
          #62354876
        </span>

        {!isSold && (
          <div className="flex items-center ml-8 w-64">
            {items[type]?.map?.((item, i) => {
              return (
                <div key={item.value} className={i === 0 ? "" : "ml-6"}>
                  <img src={item.img} alt="icon" />
                  <span className="mt-1 text-white text-xs font-semibold">
                    100
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {isSold && (
          <div className="flex items-center pl-8 -my-2">
            <div className="w-32">
              <div className="text-primary-100 text-xs leading-5">BUYER</div>
              <div
                className="font-semibold text-white text-sm"
                style={{ lineHeight: "22px" }}
              >
                NamNQLC
              </div>
              <div className="text-primary-100 text-xs leading-5">
                (0xx6...78hvfg)
              </div>
            </div>
            <div className="w-32">
              <div className="text-primary-100 text-xs leading-5">SELLER</div>
              <div
                className="font-semibold text-white text-sm"
                style={{ lineHeight: "22px" }}
              >
                ChiNTNQ
              </div>
              <div className="text-primary-100 text-xs leading-5">
                (0xx6...78hvfg)
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center">
          <div className="text-accent-500 font-bold text-xl leading-6">10</div>

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
}
