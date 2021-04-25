import classes from './Student.module.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { courseActions } from '../store/CourseSlice';

const Student = (props) => {
	const [show, setShow] = useState(false);
	const [credits, setCredits] = useState(15);
	let courseSelected = {};
	const dispatch = useDispatch();

	const courseState = useSelector((state) => state.course);
	const id = courseState.selectedId;
	const creditsRem = courseState.credits;

	if (id) {
		courseSelected = courseState.courses.find((course) => course.id === id);
	} else {
		courseSelected = '';
	}

	const courses = courseState.courses.map((course) => {
		console.log('array', course.name);
		return (
			<div>
				<li style={{ listStyle: 'none' }}>
					<div
						style={{
							paddingRight: '50px',
							height: '10px',
							width: '20px',

							color: 'white',
						}}
					>
						<p>{course.name}</p>
					</div>
				</li>
			</div>
		);
	});

	console.log(courseState.courses);
	useEffect(() => {
		setCredits(creditsRem);
	}, [creditsRem]);

	const dropCourseHandler = () => {
		dispatch(courseActions.dropCourse(props.id));
	};

	const data = (
		<div className={classes.body}>
			<h2>You Can Select a Maximum of 5 Courses Only</h2>
			<div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-evenly',

						alignItems: 'center',
					}}
				>
					<span>Selected Courses -</span> {courses}
				</div>
			</div>
			<hr style={{ marginTop: '30px' }} />
			<div>
				<h3>{courseSelected.name}</h3>
				<button disabled={credits === 15 || !id} onClick={dropCourseHandler} className={classes.btn}>
					Drop Course
				</button>
			</div>
			<hr />
			<div style={{ marginTop: '40px' }}>
				<button style={{ marginRight: '20px' }} disabled={credits !== 0}>
					Lock Selected Courses
				</button>
				<button disabled={!show}>Download Form</button>
			</div>
			<p>{`Credits Remaining - ${credits}`}</p>
		</div>
	);

	const alternateData = (
		<div className={classes.body}>
			<h2>You Can Select a Maximum of 5 Courses Only</h2>
			<h3>No Course Selected</h3>
			<hr style={{ marginTop: '30px' }} />
			<div>
				<h3>{courseSelected.name}</h3>
			</div>
			<hr />
			<div style={{ marginTop: '40px' }}>
				<button style={{ marginRight: '20px' }} disabled={credits !== 0}>
					Lock Selected Courses
				</button>
				<button disabled={!show}>Download Form</button>
			</div>
			<p>{`Credits Remaining - ${credits}`}</p>
		</div>
	);

	return (
		<>
			{courseSelected && data}
			{!courseSelected && alternateData}
		</>
	);
};

export default Student;
