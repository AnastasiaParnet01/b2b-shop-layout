import { createDraftSafeSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store/store';

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

// const productState = (state: RootState) => state.productsReducer;

// export const productsSelector = createDraftSafeSelector(productsState, (state) => state);

// export const {} = productsSlice.actions;

export default productsSlice.reducer;
