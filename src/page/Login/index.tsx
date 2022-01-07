import Button from 'src/component/Button';
import { useState } from 'react';
import Form from './Form';
import Icon from 'src/component/Icon';

const MarketPlaceDetail = () => {
  const [isShowForm, setIsShowForm] = useState(false);

  const showLoginForm = () => {
    setIsShowForm(true);
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
          <div className="font-bold text-accent-500 pl-1 cursor-pointer">
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
