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

const socketSlice = createSlice({
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
    wsConnectionError(state, { payload }) {
      state.wsConnected = false;
      state.error = payload;
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
} = socketSlice.actions;
export const socketState = (state) => state.socket;
export default socketSlice.reducer;
