import { createSlice } from '@reduxjs/toolkit';

const costBurgerSlice = createSlice({
  name: 'cost',
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload,
  },
});

export { costBurgerSlice };
