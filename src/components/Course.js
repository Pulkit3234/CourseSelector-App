import React from 'react';
import classes from './Course.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { courseActions } from '../store/CourseSlice';

const Course = (props) => {
	const dispatch = useDispatch();
	const courses = useSelector((state) => state.course.courses);
	const selected = courses.find((course) => course.id === props.id);
	const obj = useSelector((state) => state.course);

	const courseHandler = () => {
		console.log(obj.credits);
		dispatch(
			courseActions.selectCourse({
				id: props.id,
				name: props.name,
				description: props.description,
				credits: props.credits,
			})
		);
	};

	const dropCourseHandler = () => {
		dispatch(courseActions.dropCourse(selected.id));
	};
	return (
		<>
			<div style={{ backgroundColor: 'yellow' }}>
				<h2 style={{ color: '#ff3333', fontWeight: 'bold' }}>{props.name}</h2>
				<p style={{ color: 'blue' }}>{props.description}</p>
				<div className={classes.d1}>
					{selected ? (
						<button style={{ borderRadius: '12px', fontWeight: 'bold' }} onClick={dropCourseHandler}>
							Drop Course
						</button>
					) : (
						<button style={{ borderRadius: '12px', fontWeight: 'bold' }} onClick={courseHandler}>
							Select Course
						</button>
					)}

					<p>Credits - {props.credits}</p>
				</div>
			</div>
		</>
	);
};

export default Course;
