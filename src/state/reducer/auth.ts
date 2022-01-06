import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import authService from 'src/apis/auth';
import { UserInfo } from 'src/constant/Type/user';
import { formatWalletAddress } from 'src/utils/normalizers';

const infoCache = localStorage.getItem('@SAM');

let initialInfo;
if (infoCache) {
  initialInfo = JSON.parse(infoCache);
}

interface AuthType {
  userInfor?: UserInfo;
  walletInfo: {
    formattedAddress: string;
    address: string;
  };
}

const initialState: AuthType = {
  walletInfo: {
    formattedAddress: initialInfo?.formattedAddress,
    address: initialInfo?.address,
  },
};

export const handleChangeField = createAction<Partial<AuthType>>(
  'auth/handleChangeField',
);

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      authService.logout();
      localStorage.removeItem('@SAM');
      state.userInfor = undefined;
      state.walletInfo = {
        formattedAddress: '',
        address: '',
      };
    },
    disConnectWallet: (state) => {
      localStorage.removeItem('@SAM');
      state.walletInfo = {
        formattedAddress: '',
        address: '',
      };
    },
    updateWalletInforByAddress: (state, action: PayloadAction<string>) => {
      const address = action.payload;
      const formattedAddress = formatWalletAddress(address);
      const walletInfo = {
        address,
        formattedAddress,
      };
      localStorage.setItem('@SAM', JSON.stringify(walletInfo));

      state.walletInfo = walletInfo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleChangeField, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

const reducer = slice.reducer;
export default reducer;

export const { updateWalletInforByAddress, logout, disConnectWallet } =
  slice.actions;
