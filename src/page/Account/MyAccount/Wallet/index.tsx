import Button from 'src/component/Button';
import ContainerBoder from 'src/component/ContainerBorder';
import Icon from 'src/component/Icon';
import OneItem from './Item';

const items1 = [
  {
    iconName: 'bnb',
    label: '10 BNB',
  },
  {
    iconName: 'bnb',
    label: '10 KGC',
  },
];

const items2 = [
  {
    iconName: 'char/char1_small',
    label: '10 Charactors',
  },
  {
    iconName: 'ship/ship1_small',
    label: '10 Ships',
  },
  {
    iconName: 'ship/ship1_small',
    label: '10 Accessory',
  },
];

export default function Wallet() {
  return (
    <div>
      <div className="text-primary-100 font-semibold leading-8 text-2xl">
        Wallets
      </div>
      <div className="mt-4 flex">
        <ContainerBoder className="w-23rem flex flex-col-reverse justify-between">
          <div className="py-2 pr-2 pl-6 flex justify-between">
            <div className="text-white">
              MetaMask Address: 0x9nq30....x2609nt
            </div>

            <Icon name="copy" className="cursor-pointer" />
          </div>

          <div
            style={{ flexGrow: 1 }}
            className="border-b border-primary-100 px-6 pt-6 pb-4 flex flex-col justify-between flex-grow-1"
          >
            <div>
              <div className="flex items-center">
                <div className="text-white text-3xl pr-1 font-semibold leading-9.5">
                  10
                </div>
                <Icon name="bnb" width={38} height={38} />
              </div>
              <div className="text-white pt-2 leading-6 font-semibold">
                $1,200
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full col-span-1">
                Deposit
              </Button>
              <Button variant="outline" className="w-full col-span-1">
                Withdraw
              </Button>
            </div>
          </div>
        </ContainerBoder>

        <div className="pl-2 grid grid-rows-2 gap-4" style={{ flexGrow: 1 }}>
          <div className="row-span-1 grid grid-cols-2 gap-4">
            {items1.map((item, index) => {
              return (
                <OneItem
                  key={index}
                  iconName={item.iconName}
                  label={item.label}
                />
              );
            })}
          </div>

          <div className="row-span-1 grid grid-cols-3 gap-4">
            {items2.map((item, index) => {
              return (
                <OneItem
                  key={index}
                  iconName={item.iconName}
                  label={item.label}
                  iconType="png"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
