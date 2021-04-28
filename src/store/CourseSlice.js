import { createSlice } from '@reduxjs/toolkit';
import Course from '../components/Course';
import axios from 'axios';

const CourseSlice = createSlice({
	name: 'course',
	initialState: {
		courses: [],
		credits: 15,
		selectedId: '',
		register: false,
		registerAgain: false,
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
			if (state.credits >= 15 && !state.register) {
				return;
			}

			console.log('drop');
			console.log(action.payload);
			console.log(state.courses.filter((course) => course.id !== action.payload));

			state.courses = state.courses.filter((course) => course.id !== action.payload);

			state.credits = state.credits + 3;
			state.registerAgain = true;
		},
		registerCourses(state, action) {
			state.courses = action.payload.subjects;
			state.register = action.payload.register;
			state.credits = action.payload.credits;
			//state.credits = action.payload.credits;
			//state.credits = 0;
		},
		registerHandler(state) {
			state.register = false;
		},
		creditHandle(state) {
			state.credits = 15;
		},
	},
});

export const registerCoursesSend = (courses, name) => {
	return async (dispatch) => {
		console.log(courses, name);
		const { data } = await axios.post('http://localhost:8000/register', { courses, name, register: true });
		console.log(data);
		dispatch(
			CourseSlice.actions.registerCourses({
				subjects: data.user.subjects,
				register: data.user.register,
				credits: data.user.credits,
			})
		);
	};
};

export const unsubmitCourseAction = (courses, name) => {
	return async (dispatch) => {
		console.log(courses, name);
		const { data } = await axios.post('http://localhost:8000/register', { courses, name, register: false });
		console.log(data);
		dispatch(
			CourseSlice.actions.registerCourses({
				subjects: [],
				register: data.user.register,
				credits: data.user.credits,
			})
		);
		dispatch(CourseSlice.actions.creditHandle());
	};
};

export const courseActions = CourseSlice.actions;
export default CourseSlice;
