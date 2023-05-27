import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
import { loginUser } from "../slices/user-slice";

export const registrationThunk = createAsyncThunk(
	'user/registration',
	async (formField, { dispatch, rejectWithValue }) => {
		try {
			const result = await api.request('/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					"email": formField.email,
					"password": formField.password,
					"name": formField.name,
				}),
			});
			dispatch(loginUser(result));
		} catch (err) {
			return rejectWithValue(err);
		};
	}
);
