import { createSlice } from '@reduxjs/toolkit';

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: [],
  reducers: {
    setIngredients: (state, action) => [...action.payload],
  },
});

export { ingredientsSlice };