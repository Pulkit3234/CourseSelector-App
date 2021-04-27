import { createSlice } from '@reduxjs/toolkit';
import Course from '../components/Course';
import axios from 'axios';

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
		registerCourses(state, action) {
			state.courses = action.payload.data;
		},
	},
});

export const registerCoursesSend = (courses) => {
	return async (dispatch) => {
		const { data } = await axios.post('http://localhost:8000/register', courses);
		dispatch(CourseSlice.actions.registerCourses(data));
	};
};

export const courseActions = CourseSlice.actions;
export default CourseSlice;
