import { createSlice } from '@reduxjs/toolkit';

const CourseSlice = createSlice({
	name: 'course',
    initialState: {
        courses: [], credits: 15, selectedId : '' },
	reducers: {
		selectCourse(state, action) {
			if (state.credits  <= 0) {
				return;
            }
            state.selectedId = action.payload.id;
			state.courses.push(action.payload);
			state.credits = state.credits - 3;
		},
        dropCourse(state, action) {
            
        },
	},
});

export const courseActions = CourseSlice.actions;
export default CourseSlice;
