import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bun: null,
    otherIngredients: []
};

const selectedsIngredientsSlice = createSlice({
    name: 'selectedsIngredients',
    initialState,
    reducers: {
        add(state, actions) {
            if (actions.payload.type === 'bun') {
                state.bun = actions.payload;
                return;
            };
            state.otherIngredients = state.bun ? [...state.otherIngredients, actions.payload] : [...state.otherIngredients];
        },
        update(state, actions) {
            state.otherIngredients = [...actions.payload];
        },
    },
});

export const { add, update } = selectedsIngredientsSlice.actions;
export default selectedsIngredientsSlice.reducer;
