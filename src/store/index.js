import { configureStore } from '@reduxjs/toolkit';
import CourseSlice from './CourseSlice';
import AuthSlice from './AuthSlice';

const store = configureStore({
	reducer: { course: CourseSlice.reducer, auth : AuthSlice.reducer},
});

export default store;
