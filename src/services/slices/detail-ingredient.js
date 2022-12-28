import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null,
};

const detailIngredientSlice = createSlice({
    name: 'detailIngredient',
    initialState,
    reducers: {
        setDetailIngredient(state, action) { state.value = action.payload },
    },
});

export const { setDetailIngredient } = detailIngredientSlice.actions;
export default detailIngredientSlice.reducer;
