import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { costBurgerSlice } from '../services/slices/cost-burger';
import { ingredientsReducer } from '../services/reducers/ingredients';
import { detailIngredientSlice } from '../services/slices/detail-ingredient';
import { selectedsIngredientsSlice } from '../services/slices/selected-ingredients';

const rootReducer = combineReducers({
  ingredientsReducer,
  selectedsIngredientsReducer: selectedsIngredientsSlice.reducer,
  detailIngredientReducer: detailIngredientSlice.reducer,
  costReducer: costBurgerSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});
