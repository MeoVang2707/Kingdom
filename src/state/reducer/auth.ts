import { createAction, createSlice } from '@reduxjs/toolkit';

interface AuthType {
  userInfor?: {
    name: string;
    email?: string;
    address: string;
    balance: number;
  };
}

const initialState: AuthType = {
  // userInfor: null,
};

export const handleChangeField = createAction<Partial<AuthType>>(
  'auth/handleChangeField',
);

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateTab: (state, action) => {
      state.userInfor = action.payload;
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

export const { updateTab } = slice.actions;
