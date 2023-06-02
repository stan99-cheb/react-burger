import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wsConnected: false,
  data: {
    orders: [],
    success: undefined,
    total: undefined,
    totalToday: undefined,
  },
  error: undefined,
};

const allOrdersSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    wsConnectionStart(state) {
      state.wsConnected = true;
      state.error = undefined;
    },
    wsConnectionSuccess(state) {
      state.wsConnected = true;
      state.error = undefined;
    },
    wsConnectionError(state) {
      state.wsConnected = false;
    },
    wsConnectionClosing(state) {
      state.wsConnected = false;
      state.error = undefined;
    },
    wsConnectionClosed(state) {
      state.wsConnected = false;
      state.error = undefined;
    },
    wsGetMessage(state, { payload }) {
      state.data = payload;
      state.error = undefined;
    },
  },
});

export const {
  wsConnectionStart,
  wsConnectionSuccess,
  wsConnectionError,
  wsConnectionClosing,
  wsConnectionClosed,
  wsGetMessage
} = allOrdersSlice.actions;
export default allOrdersSlice.reducer;

export const allOrdersState = (state) => state.allOrders;
export const ordersState = (state) => state.allOrders.data;