import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { costReducer } from '../services/reducers/cost';
import { ingredientsReducer } from '../services/reducers/ingredients';

const rootReducer = combineReducers({
  ingredientsReducer,
  costReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
