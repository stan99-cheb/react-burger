import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: '',
  bun: null,
  ingredients: [],
};

const burgerComponentsSlice = createSlice({
  name: 'burgerComponents',
  initialState,
  reducers: {
    addBurgerComponent(state, { payload }) {
      const { burgerComponent, uuid } = payload;
      if (burgerComponent.type === 'bun') {
        state.bun = burgerComponent;
      } else {
        state.ingredients = [...state.ingredients, { ...burgerComponent, uuid }];
      };
    },
    updateBurgerComponent(state, { payload }) {
      state.ingredients = [...payload];
    },
    resetBurgerComponents(state) {
      state.bun = null;
      state.ingredients = [];
    },
  },
});

export const {
  addBurgerComponent,
  updateBurgerComponent,
  resetBurgerComponents
} = burgerComponentsSlice.actions;
export const burgerComponentState = state => state.burgerComponents;
export default burgerComponentsSlice.reducer;
