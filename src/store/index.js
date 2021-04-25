import { configureStore } from '@reduxjs/toolkit';
import CourseSlice from './CourseSlice';

const store = configureStore({
	reducer: { course: CourseSlice.reducer },
});

export default store;
