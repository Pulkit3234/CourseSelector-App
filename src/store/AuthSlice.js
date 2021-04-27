import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		authName: '',
		isAuth: true,
		logintoken: '',
	},
	reducers: {
		login(state, action) {
			localStorage.setItem('token', JSON.stringify(action.payload));
			state.authName = action.payload.name;
			state.isAuth = true;
			state.loginToken = action.payload.token;
		},
		logout(state, action) {
			localStorage.clear();
			state.authName = '';
			state.isAuth = false;
			state.loginToken = '';
		},
	},
});

export const authActions = authSlice.actions;
export default authSlice;
