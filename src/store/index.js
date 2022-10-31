import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { costReducer } from '../services/reducers/cost';
import { ingredientsReducer } from '../services/reducers/ingredients';

const rootReducer = combineReducers({
  ingredientsReducer,
  costReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});
