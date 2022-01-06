import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from 'src/apis/auth';
import Button from 'src/component/Button';
import Icon from 'src/component/Icon';
import {
  handleChangeField,
  updateWalletInforByAddress,
} from 'src/state/reducer/auth';
import { connectMetaService } from 'src/utils/hooks/connect/metamask';
import Form from './Form';
import accountContract from 'src/utils/contracts/account';
import { UserInfo } from 'src/constant/Type/user';
import { useHistory } from 'react-router';

// const message =
//   'uSRMKZTsvBpTP7ad+2H6oNyjX9iHnO1YisoB966sC4z3Y+72zJsbtbPjELxnLE98CoP0t0TM1/8G+TFuJ+7AdCb/IBzLYj7DHtWYgK31Q/aNIYHn2S5wjxXdW4OHBpapq91v3Vn2oQ0BWKDgzKec2BSOLWMTuTBpO5KQIX/xluBnMjZC2fm3lA9cc8h98MzS';

const MarketPlaceDetail = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const showLoginForm = () => {
    setIsShowForm(true);
  };

  const onClickConnectMetaMask = async () => {
    try {
      const address = await connectMetaService();
      dispatch(updateWalletInforByAddress(address));
      const message = await authService.loginInWithAddress(address);
      const { signMessage } = accountContract();
      const { signature } = await signMessage(message);
      await authService.validateSignature({
        address,
        signature,
        message,
      });
      const user: UserInfo = await authService.loginInWithToken();
      dispatch(handleChangeField({ userInfor: user }));
      history.push('/');
    } catch (e) {
      console.log('eeeeeeee', e);
    }
    // const address = await connectMetaService();
    // console.log('address', address);
    // dispatch(updateWalletInforByAddress(address));
    // const message = await authService.loginInWithAddress(address);
  };

  return (
    <div className="pt-12 w-full">
      <div className="max-w-25 mx-auto">
        <div className="text-1.875 text-accent-500 font-bold text-center">
          Log in
        </div>
        <div>
          <Button
            variant="fulfill"
            className="mt-6 w-full"
            icon={<Icon name="metamask" type="png" />}
            onClick={onClickConnectMetaMask}
          >
            Log in with Meta Mask
          </Button>
        </div>

        {!isShowForm && (
          <Button
            variant="outline"
            className="mt-4 w-full"
            icon={<Icon name="gmail" />}
            onClick={showLoginForm}
          >
            Log in with Email
          </Button>
        )}

        {isShowForm && (
          <div className="pb-2 mt-4">
            <Form />
          </div>
        )}

        <div className="mt-4 text-sm flex justify-center">
          <div className="text-white">By continuing, you agree to our</div>
          <div className="font-bold text-accent-500 pl-1 cursor-pointer hover:text-accent-600">
            Terms of Use
          </div>
        </div>
      </div>
    </div>

    // <div className="py-4">
    //   <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
    //     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
    //       return (
    //         <div className="col-span-1" key={item}>
    //           <Cart />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default MarketPlaceDetail;
