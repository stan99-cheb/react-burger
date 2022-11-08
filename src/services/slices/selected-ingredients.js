import { createSlice } from '@reduxjs/toolkit';

const selectedsIngredientsSlice = createSlice({
  name: 'selectedsIngredients',
  initialState: [],
  reducers: {
    setSelectedIngredients: (state, action) => [...state, action.payload],
  },
});

export { selectedsIngredientsSlice };