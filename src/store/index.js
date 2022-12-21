import { configureStore } from '@reduxjs/toolkit'
import { detailIngredientSlice } from '../services/slices/detail-ingredient';
import ingredientsSlice from '../services/slices/ingredients';
import { selectedIngredientsReducer } from '../services/reducers/selected-ingredients';

export const store = configureStore({
    reducer: {
        ingredientsReducer: ingredientsSlice,
        detailIngredientReducer: detailIngredientSlice.reducer,
        selectedIngredientsReducer: selectedIngredientsReducer,
    },
});
