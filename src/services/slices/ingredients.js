import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../utils/api';

const initialState = {
    value: [],
    status: 'idle',
};

export const getIngredients = createAsyncThunk(
    'ingredients/fetch',
    async (url) => {
        const response = await api.fetchIngredients(url);
        return response.data;
    }
);

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getIngredients.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getIngredients.fulfilled, (state, actions) => {
                state.status = 'idle';
                state.value = [...actions.payload];
            })
            .addCase(getIngredients.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

export const { setIngredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
