import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from '../services/slices/ingredients';
import ingredientInfoSlice from '../services/slices/ingredients-info';
import burgerComponentsSlice from '../services/slices/burger-components';
import orderSlice from '../services/slices/order';
import userSlice from "../services/slices/user-slice";
import getUserSlice from "../services/slices/get-user-slice";
import updateUserSlice from "../services/slices/update-user-slice";
import loginSlice from "../services/slices/login-slice";
import registrationSlice from "../services/slices/registration-slice";
import forgotPasswordSlice from "../services/slices/forgot-password-slice";
import resetPasswordSlice from "../services/slices/reset-password-slice";
import updateTokensSlice from "../services/slices/update-tokens-slice";
import socketMiddleware from "./middleware/socket-middleware";
import loggerMiddleware from "./middleware/logger-middleware";
import allOrdersSlice, {
  wsConnectionClosed,
  wsConnectionClosing,
  wsConnectionError,
  wsConnectionStart,
  wsConnectionSuccess,
  wsGetMessage
} from "./slice/all-orders-slice";
import wsOrderSlice, {
  orderConnectionClosed,
  orderConnectionClosing,
  orderConnectionError,
  orderConnectionStart,
  orderConnectionSuccess,
  orderGetMessage
} from "./slice/ws-order-slice";

const wsUrlAllOrders = "wss://norma.nomoreparties.space/orders/all";
const wsActionsAllOrders = {
  wsInit: wsConnectionStart,
  onOpen: wsConnectionSuccess,
  onMessage: wsGetMessage,
  onClosing: wsConnectionClosing,
  onClose: wsConnectionClosed,
  onError: wsConnectionError,
};

const wsUrlOrder = "wss://norma.nomoreparties.space/orders";
const wsActionsOrder = {
  wsInit: orderConnectionStart,
  onOpen: orderConnectionSuccess,
  onMessage: orderGetMessage,
  onClosing: orderConnectionClosing,
  onClose: orderConnectionClosed,
  onError: orderConnectionError,
};

const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
    ingredientInfo: ingredientInfoSlice,
    burgerComponents: burgerComponentsSlice,
    order: orderSlice,
    user: userSlice,
    getUser: getUserSlice,
    updateUser: updateUserSlice,
    login: loginSlice,
    registration: registrationSlice,
    forgotPassword: forgotPasswordSlice,
    resetPassword: resetPasswordSlice,
    updateTokens: updateTokensSlice,
    allOrders: allOrdersSlice,
    wsOrder: wsOrderSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      loggerMiddleware,
      socketMiddleware(wsUrlAllOrders, wsActionsAllOrders),
      socketMiddleware(wsUrlOrder, wsActionsOrder)
    ]);
  },
});

export default store;
