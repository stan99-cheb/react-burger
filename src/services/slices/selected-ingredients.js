import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bun: {},
  otherIngredients: []
};

const selectedsIngredientsSlice = createSlice({
  name: 'selectedsIngredients',
  initialState,
  reducers: {
    add(state, actions) {
      if (actions.payload.ingredient.type === 'bun') {
        state.bun = actions.payload.ingredient;
        return;
      };
      state.otherIngredients = state.bun
        ? [...state.otherIngredients, { ...actions.payload.ingredient, uuid: actions.payload.uuid }]
        : [...state.otherIngredients];
    },
    update(state, actions) {
      state.otherIngredients = [...actions.payload];
    },
    reset(state) {
      state.bun = {};
      state.otherIngredients = [];
    },
  },
});

export const { add, update, reset } = selectedsIngredientsSlice.actions;
export default selectedsIngredientsSlice.reducer;
