import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { detailIngredientSlice } from '../services/slices/detail-ingredient';
import { ingredientsSlice } from '../services/slices/ingredients';
import { selectedIngredientsReducer } from '../services/reducers/selected-ingredients';

const rootReducer = combineReducers({
  ingredientsReducer: ingredientsSlice.reducer,
  detailIngredientReducer: detailIngredientSlice.reducer,
  selectedIngredientsReducer: selectedIngredientsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});
