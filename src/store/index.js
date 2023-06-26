import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from './feature/ingredients/ingredients-slice';
import ingredientInfoSlice from '../services/slices/ingredients-info';
import burgerComponentsSlice from '../services/slices/burger-components';
import orderSlice from './feature/orderNumber/order-number-slice';
import userSlice from "./feature/user/user-slice";
import getUserSlice from "../services/slices/get-user-slice";
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
} from "./feature/orders/all-orders-slice";
import userOrdersSlice, {
  userOrdersConnectionStart,
  userOrdersConnectionSuccess,
  userOrdersConnectionError,
  userOrdersConnectionClosing,
  userOrdersConnectionClosed,
  userOrdersGetMessage,
} from "./feature/orders/user-order-slice";

const wsUrlAllOrders = "wss://norma.nomoreparties.space/orders/all";
const wsActionsAllOrders = {
  wsInit: wsConnectionStart,
  onOpen: wsConnectionSuccess,
  onMessage: wsGetMessage,
  onClosing: wsConnectionClosing,
  onClose: wsConnectionClosed,
  onError: wsConnectionError,
};

const wsUrlUserOrders = "wss://norma.nomoreparties.space/orders";
const wsActionsUserOrders = {
  wsInit: userOrdersConnectionStart,
  onOpen: userOrdersConnectionSuccess,
  onMessage: userOrdersGetMessage,
  onClosing: userOrdersConnectionClosing,
  onClose: userOrdersConnectionClosed,
  onError: userOrdersConnectionError,
};

const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
    ingredientInfo: ingredientInfoSlice,
    burgerComponents: burgerComponentsSlice,
    order: orderSlice,
    user: userSlice,
    getUser: getUserSlice,
    login: loginSlice,
    registration: registrationSlice,
    forgotPassword: forgotPasswordSlice,
    resetPassword: resetPasswordSlice,
    updateTokens: updateTokensSlice,
    allOrders: allOrdersSlice,
    userOrders: userOrdersSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      loggerMiddleware,
      socketMiddleware(wsUrlAllOrders, wsActionsAllOrders),
      socketMiddleware(wsUrlUserOrders, wsActionsUserOrders),
    ]);
  },
});

export default store;
