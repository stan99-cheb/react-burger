import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../utils/api';

const initialState = {
    value: [],
    status: 'idle',
};

export const getOrderNumber = createAsyncThunk(
    'orderNumber/fetch',
    async ({ url, array, selectedIngredients, costBurger }) => {
        const response = await api.fetchOrderNumber(url, array);
        return {
            name: response.name,
            number: response.order.number,
            cost: costBurger,
            ingredients: selectedIngredients,
            date: new Date().toLocaleString(),
        };
    }
);

const orderNumberSlice = createSlice({
    name: 'orderNumber',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOrderNumber.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOrderNumber.fulfilled, (state, actions) => {
                state.status = 'idle';
                state.value.push(actions.payload);
            })
            .addCase(getOrderNumber.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

// export const { } = orderNumberSlice.actions;
export default orderNumberSlice.reducer;
