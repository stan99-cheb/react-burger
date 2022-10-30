import { createStore, combineReducers } from 'redux';
import { costReducer } from '../services/reducers/cost';
import { ingredientsReducer } from '../services/reducers/ingredients';

const rootReducer = combineReducers({
  ingredientsReducer,
  costReducer,
});

export const store = createStore(rootReducer);
