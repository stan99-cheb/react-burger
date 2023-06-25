import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wsConnecting: false,
  wsConnected: false,
  wsClosing: false,
  data: undefined,
  error: undefined,
};

const allOrdersSlice = createSlice({
  name: 'socket/allOrders',
  initialState,
  reducers: {
    wsConnectionStart(state) {
      state.wsConnecting = true;
      state.error = undefined;
    },
    wsConnectionSuccess(state) {
      state.wsConnecting = false;
      state.wsConnected = true;
      state.error = undefined;
    },
    wsConnectionError(state) {
      state.wsConnected = false;
    },
    wsConnectionClosing(state) {
      state.wsClosing = true;
      state.error = undefined;
    },
    wsConnectionClosed(state) {
      state.wsConnected = false;
      state.wsClosing = false;
      state.error = undefined;
      state.data = {};
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
export const dataAllOrdersState = (state) => state.allOrders.data;
