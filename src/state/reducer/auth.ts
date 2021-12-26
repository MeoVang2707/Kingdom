import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTab: 'day',
  showAddToMenuScreen: false,
  showFoodSearchScreen: false,
};

export const handleChangeField = createAction('food/handleChangeField');

export const slice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    updateTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleChangeField, (state, action) => {
      return { ...state };
    });
  },
});

const reducer = slice.reducer;
export default reducer;

export const { updateTab } = slice.actions;
