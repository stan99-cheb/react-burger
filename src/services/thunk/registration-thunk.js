import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
import { BASE_URL } from "../../utils/constants";
import { loginUser } from "../slices/user-slice";

export const registrationThunk = createAsyncThunk(
    'user/registration',
    async (formField, { dispatch, rejectWithValue }) => {
        try {
            const result = await api.registrationUser(BASE_URL, formField);
            const data = await result.json();
            if (result.ok) {
                dispatch(loginUser(data));
            } else {
                return rejectWithValue(data.message);
            }
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
