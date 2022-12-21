import { configureStore } from '@reduxjs/toolkit'
import detailIngredientSlice from '../services/slices/detail-ingredient';
import ingredientsSlice from '../services/slices/ingredients';
import selectedsIngredientsSlice from '../services/slices/selected-ingredients';

export const store = configureStore({
    reducer: {
        ingredients: ingredientsSlice,
        detailIngredient: detailIngredientSlice,
        selectedIngredients: selectedsIngredientsSlice,
    },
});
