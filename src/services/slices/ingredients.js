import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
    status: 'idle',
};

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        setIngredients(state, action) {
            state.value = [...action.payload];
        },
    },
});

export const { setIngredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
