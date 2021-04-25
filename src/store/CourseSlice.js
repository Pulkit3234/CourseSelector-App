import { createSlice } from '@reduxjs/toolkit';
import Course from '../components/Course';

const CourseSlice = createSlice({
	name: 'course',
	initialState: {
		courses: [],
		credits: 15,
		selectedId: '',
	},
	reducers: {
		selectCourse(state, action) {
			if (state.credits <= 0) {
				return;
			}
			state.selectedId = action.payload.id;
			state.courses.push(action.payload);
			state.credits = state.credits - 3;
		},
		dropCourse(state, action) {
			if (state.credits >= 15) {
				return;
			}

			console.log(action.payload);
			console.log(state.courses.filter((course) => course.id !== action.payload));

			state.courses = state.courses.filter((course) => course.id !== action.payload);

			state.credits = state.credits + 3;
		},
	},
});

export const courseActions = CourseSlice.actions;
export default CourseSlice;
