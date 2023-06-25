import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wsConnecting: false,
  wsConnected: false,
  data: undefined,
  error: undefined,
};

const userOrdersSlice = createSlice({
  name: 'socket/userOrders',
  initialState,
  reducers: {
    userOrdersConnectionStart(state) {
      state.wsConnecting = true;
      state.error = undefined;
    },
    userOrdersConnectionSuccess(state) {
      state.wsConnected = true;
      state.wsConnecting = false;
      state.error = undefined;
    },
    userOrdersConnectionError(state) {
      state.wsConnected = false;
    },
    userOrdersConnectionClosing(state) {
      state.wsConnected = false;
      state.error = undefined;
    },
    userOrdersConnectionClosed(state) {
      state.wsConnected = false;
      state.error = undefined;
    },
    userOrdersGetMessage(state, { payload }) {
      state.data = payload;
      state.error = undefined;
    },
  },
});

export const {
  userOrdersConnectionStart,
  userOrdersConnectionSuccess,
  userOrdersConnectionError,
  userOrdersConnectionClosing,
  userOrdersConnectionClosed,
  userOrdersGetMessage,
} = userOrdersSlice.actions;
export default userOrdersSlice.reducer;
