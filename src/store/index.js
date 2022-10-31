import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { costBurgerSlice } from '../services/slices/cost-burger';
import { ingredientsReducer } from '../services/reducers/ingredients';

const rootReducer = combineReducers({
  ingredientsReducer,
  costReducer: costBurgerSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});
