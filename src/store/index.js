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
import socketSlice from "./slice/socket-slice";

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
    socket: socketSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([loggerMiddleware, socketMiddleware]);
  },
});

export default store;
