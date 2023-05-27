import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredient: null,
};

const ingredientInfoSlice = createSlice({
  name: 'ingredientInfo',
  initialState,
  reducers: {
    setIngredientInfo(state, { payload }) {
      state.ingredient = payload;
    }
  },
});

export const { setIngredientInfo } = ingredientInfoSlice.actions;
export default ingredientInfoSlice.reducer;
