import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wsConnecting: false,
  wsConnected: false,
  data: {},
  error: undefined,
};

const wsOrderSlice = createSlice({
  name: 'socket/order',
  initialState,
  reducers: {
    orderConnectionStart(state) {
      state.wsConnecting = true;
      state.error = undefined;
    },
    orderConnectionSuccess(state) {
      state.wsConnected = true;
      state.wsConnecting = false;
      state.error = undefined;
    },
    orderConnectionError(state) {
      state.wsConnected = false;
    },
    orderConnectionClosing(state) {
      state.wsConnected = false;
      state.error = undefined;
    },
    orderConnectionClosed(state) {
      state.wsConnected = false;
      state.error = undefined;
    },
    orderGetMessage(state, { payload }) {
      state.data = payload;
      state.error = undefined;
    },
  },
});

export const {
  orderConnectionStart,
  orderConnectionSuccess,
  orderConnectionError,
  orderConnectionClosing,
  orderConnectionClosed,
  orderGetMessage,
} = wsOrderSlice.actions;
export default wsOrderSlice.reducer;

export const wsOrderState = (state) => state.wsOrder;
export const wsOrderDataState = (state) => state.wsOrder.data;
