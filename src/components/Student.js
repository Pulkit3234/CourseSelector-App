import classes from './Student.module.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { courseActions } from '../store/CourseSlice';

const Student = (props) => {
	const [show, setShow] = useState(false);
	const [credits, setCredits] = useState(15);
	const [isAuth, setIsAuth] = useState(false);
	let courseSelected = {};
	const dispatch = useDispatch();
	const value = credits === 0;

	const courseState = useSelector((state) => state.course);

	const length = courseState.courses.length === 0;

	const creditsRem = courseState.credits;

	const courses = courseState.courses.map((course) => {
		return (
			<div>
				<li style={{ listStyle: 'none' }}>
					<div style={{}}>
						<p
							style={{
								marginRight: '30px',
								marginBottom: '10px',
								height: '10px',
								width: '20px',

								color: 'white',
							}}
						>
							{course.name}
						</p>
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
		console.log('this');
	};

	const data = (
		<div className={classes.body}>
			<h2 style={{ background: 'yellow', height: '25px' }}>You Can Select Maximum of 5 Courses Only</h2>
			<div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',

						alignItems: 'center',
						background: 'green',
						height: '80px',
						textAlign: 'center',
					}}
				>
					<div style={{ color: 'yellow', fontWeight: 'bold', paddingTop: '17px' }}>Selected Courses -</div>
					{courses}
				</div>
			</div>
			<hr style={{ marginTop: '30px' }} />
			<div>
				<h3>{courseSelected?.name}</h3>
			</div>
			<hr />
			<div style={{ marginTop: '40px' }}>
				{!isAuth ? <h3 style={{ color: 'white' }}>Login To Register Courses</h3> : ''}
				<button
					disabled={credits !== 0}
					style={{ backgroundColor: 'orange', padding: '10px', borderRadius: '20px', marginRight: '10px' }}
				>
					Register Selected Courses
				</button>
				<button disabled={!show} style={{ backgroundColor: 'orange', padding: '10px', borderRadius: '20px' }}>
					Download Form
				</button>
			</div>
			<h3>{`Credits Remaining - ${credits}`}</h3>
		</div>
	);

	const alternateData = (
		<div className={classes.body}>
			<h2 style={{ background: 'yellow', height: '25px' }}>You Can Select Maximum of 5 Courses Only</h2>
			<h3 style={{ color: 'white' }}>No Course Selected</h3>
			<hr style={{ marginTop: '30px' }} />

			<hr />
			<div style={{ marginTop: '40px' }}>
				<button
					disabled={true}
					style={{ backgroundColor: 'orange', padding: '10px', borderRadius: '20px', marginRight: '10px' }}
				>
					Register Selected Courses
				</button>
				<button disabled={!show} style={{ backgroundColor: 'orange', padding: '10px', borderRadius: '20px' }}>
					Download Form
				</button>
			</div>
			<h3>{`Credits Remaining - ${credits}`}</h3>
		</div>
	);

	return (
		<>
			{!length && data}
			{length && alternateData}
		</>
	);
};

export default Student;
