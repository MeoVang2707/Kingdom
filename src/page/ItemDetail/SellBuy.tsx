import Button from 'src/component/Button';
import Input from 'src/component/Input';
import Modal from 'src/component/Modal';
import ModalInfo from 'src/component/Modal/ModalInfo';
import { useState } from 'react';

interface SellBuyProps {
  isSell: boolean;
}

export default function SellBuy({ isSell }: SellBuyProps) {
  const [isShowModalSell, setIsShowModalSell] = useState(false);
  const [isShowModalBuy, setIsShowModalBuy] = useState(false);
  const [isShowModalBuySuccess, setIsShowModalBuySuccess] = useState(false);
  const onClickSell = () => {
    setIsShowModalSell(true);
  };

  const onClickSellConfirm = () => {
    setIsShowModalSell(false);
  };

  const onClickBuy = () => {
    setIsShowModalBuy(true);
  };

  const onClickBuyConfirm = () => {
    setIsShowModalBuy(false);
    setIsShowModalBuySuccess(true);
  };

  const onClickButtonInSuccessModal = () => {
    setIsShowModalBuySuccess(false);
  };

  return (
    <>
      <div className="flex flex-row-reverse">
        {isSell && (
          <Button variant="fulfill" onClick={onClickSell}>
            Sell
          </Button>
        )}

        {!isSell && (
          <div className="flex items-center">
            <div className="text-accent-500 font-bold text-2xl">10</div>
            <img
              alt="logo"
              src="/assets/images/bnb.svg"
              width={32}
              height={32}
              className="ml-1 mr-2"
            />

            <div className="text-white text-sm pr-4">$1,200</div>

            <Button variant="fulfill" onClick={onClickBuy}>
              Buy now
            </Button>
          </div>
        )}
      </div>

      {/* Confirm Buy */}
      <ModalInfo
        type="confirm"
        title="Confirm payment"
        message="Lorem ipsum dolor sit amet consectetur"
        buttonName="Confirm"
        onClickButton={onClickBuyConfirm}
        visible={isShowModalBuy}
        onClose={() => setIsShowModalBuy(false)}
      />

      {/* <ModalInfo
        type="danger"
        title="Purchase failed!"
        message="Lorem ipsum dolor sit amet consectetur"
        buttonName="Deposit"
        onClickButton={() => {}}
      /> */}

      {/* Buy success  */}
      <ModalInfo
        type="success"
        title="Purchase successful!"
        message="Lorem ipsum dolor sit amet consectetur"
        buttonName="Go to Inventory"
        onClickButton={onClickButtonInSuccessModal}
        visible={isShowModalBuySuccess}
        onClose={() => setIsShowModalBuySuccess(false)}
      />

      {/* Sell Modal  */}
      <Modal
        visible={isShowModalSell}
        onClose={() => setIsShowModalSell(false)}
        title="Sell"
      >
        <div className="mt-6">
          <Input
            type="number"
            classNameInput="w-full"
            placeholder="0"
            rightIcon={
              <img
                src="/assets/images/bnb.svg"
                alt="icon"
                width={24}
                height={24}
              />
            }
          />
        </div>

        <Button
          variant="fulfill"
          className="w-full mt-6"
          onClick={onClickSellConfirm}
        >
          Sell
        </Button>
      </Modal>
    </>
  );
}
