import { createAction, createSlice } from '@reduxjs/toolkit';
import {
  FilterValue,
  FilterValueEnum,
  MainObject,
  MainObjectEnum,
  SortValue,
} from 'src/constant/Type';

interface MarketType {
  selectedTag: MainObject;
  filterPrice: FilterValue;
  sort: SortValue | '';
  filters: { [key: string]: string | string[] }[];
}

const initialState: MarketType = {
  selectedTag: MainObjectEnum.CHARACTER,
  filterPrice: FilterValueEnum.SALE,
  sort: '',
  filters: [],
};

export const handleChangeField = createAction<Partial<MarketType>>(
  'marketplace/handleChangeField',
);

export const resetStateMarketPlace = createAction(
  'marketplace/resetStateMarketPlace',
);

export const slice = createSlice({
  name: 'marketplace',
  initialState,
  reducers: {
    // updateTab: (state, action) => {
    //   state.userInfor = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleChangeField, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(resetStateMarketPlace, () => {
        return initialState;
      });
  },
});

const reducer = slice.reducer;
export default reducer;

// export const { updateTab } = slice.actions;
