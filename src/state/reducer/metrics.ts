import { createAction, createSlice } from '@reduxjs/toolkit';
import { MainObject, MainObjectEnum } from 'src/constant/Type';

interface MetricsType {
  selectedTag: string;
  tagListed: MainObject;
  tagSold: MainObject;
}

const initialState: MetricsType = {
  selectedTag: '24h',
  tagListed: MainObjectEnum.CHARACTER,
  tagSold: MainObjectEnum.CHARACTER,
};

export const handleChangeField = createAction<Partial<MetricsType>>(
  'metrics/handleChangeField',
);

export const slice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    // updateTab: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(handleChangeField, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

const reducer = slice.reducer;
export default reducer;

// export const { updateTab } = slice.actions;
