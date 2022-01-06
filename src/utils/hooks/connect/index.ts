import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  disConnectWallet,
  updateWalletInforByAddress,
} from 'src/state/reducer/auth';

export const useProvider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window?.ethereum) {
      console.log('window?.ethereum', window?.ethereum);

      window?.ethereum.on('accountsChanged', (accounts: any) => {
        const account = accounts[0];
        if (account) {
          dispatch(updateWalletInforByAddress(account));
        }
      });
      window?.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
      window?.ethereum.on('disconnect', () => {
        dispatch(disConnectWallet());
      });
    }
  }, []);
};
