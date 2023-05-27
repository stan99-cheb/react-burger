import { createSlice } from "@reduxjs/toolkit";
import { getOrderNumber } from "../thunk/get-order-number";

const initialState = {
  status: 'idle',
  value: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderNumber.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getOrderNumber.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.value = [...state.value, {
          number: payload.order.number,
          date: new Date().toLocaleString(),
        }];
      })
      .addCase(getOrderNumber.rejected, (state, { payload }) => {
        state.status = 'failed';
        console.log(payload);
      })
  },
});

export const { clearError } = orderSlice.actions;
export const orderState = state => state.order;
export default orderSlice.reducer;
