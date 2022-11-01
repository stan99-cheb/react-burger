import { createSlice } from '@reduxjs/toolkit';

const detailIngredientSlice = createSlice({
  name: 'detailIngredient',
  initialState: null,
  reducers: {
    setDetailIngredient: (state, action) => action.payload,
  },
});

export { detailIngredientSlice };