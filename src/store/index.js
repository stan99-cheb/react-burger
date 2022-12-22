import { configureStore } from '@reduxjs/toolkit'
import detailIngredientSlice from '../services/slices/detail-ingredient';
import ingredientsSlice from '../services/slices/ingredients';
import selectedsIngredientsSlice from '../services/slices/selected-ingredients';
import orderNumberSlice from '../services/slices/order-number';

export const store = configureStore({
    reducer: {
        ingredients: ingredientsSlice,
        detailIngredient: detailIngredientSlice,
        selectedIngredients: selectedsIngredientsSlice,
        orderNumber: orderNumberSlice,
    },
});
