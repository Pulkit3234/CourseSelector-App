import React from 'react';
import classes from './Course.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { courseActions } from '../store/CourseSlice';

const Course = (props) => {
	const dispatch = useDispatch();

	const courseHandler = () => {
		dispatch(
			courseActions.selectCourse({
				id: props.id,
				name: props.name,
				description: props.description,
				credits: props.credits,
			})
		);
	};
	return (
		<>
			<div style={{ backgroundColor: 'yellow' }}>
				<h2 style={{ color: '#ff3333', fontWeight: 'bold' }}>{props.name}</h2>
				<p>{props.description}</p>
				<div className={classes.d1}>
					<button style={{ borderRadius: '12px', fontWeight: 'bold' }} onClick={courseHandler}>
						Select Course
					</button>

					<p>Credits - {props.credits}</p>
				</div>
			</div>
		</>
	);
};

export default Course;
