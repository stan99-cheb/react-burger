import { createSlice } from "@reduxjs/toolkit";
import { getOrderNumber } from "./order-number-thunk";

const initialState = {
  status: 'idle',
  number: undefined,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrderNumber(state) {
      state.number = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderNumber.pending, (state) => {
        state.status = 'loading';
        state.number = undefined;
      })
      .addCase(getOrderNumber.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.number = payload.order.number;
      })
      .addCase(getOrderNumber.rejected, (state, { payload }) => {
        state.status = 'failed';
        console.log(payload);
      })
  },
});

export const { resetOrderNumber } = orderSlice.actions;
export default orderSlice.reducer;
