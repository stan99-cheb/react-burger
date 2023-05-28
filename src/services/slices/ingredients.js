import { createSlice } from '@reduxjs/toolkit';
import { getIngredients } from '../thunk/get-ingredients';

const initialState = {
  status: 'idle',
  data: [],
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getIngredients.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.data = [...payload.data];
      })
      .addCase(getIngredients.rejected, (state, { payload }) => {
        state.status = 'failed';
        console.log(payload);
      })
  },
});

// export const {} = ingredientsSlice.actions;
export const ingredientsState = state => state.ingredients;
export default ingredientsSlice.reducer;
