import classes from './Student.module.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { courseActions } from '../store/CourseSlice';
import { registerCoursesSend, unsubmitCourseAction } from '../store/CourseSlice';
import axios from 'axios';

const Student = (props) => {
	const [show, setShow] = useState(false);
	//const [credits, setCredits] = useState(15);
	//const [isAuth, setIsAuth] = useState(false);
	const [token, setToken] = useState('');
	const [register, setRegister] = useState('');

	const [selected, setSelected] = useState(false);

	const dispatch = useDispatch();
	//const value = credits === 0;
	const courseState = useSelector((state) => state.course);
	//let selected = false;

	const isAuth = useSelector((state) => state.auth.isAuth);

	const name = useSelector((state) => state.auth.authName);

	const length = courseState.courses.length === 0;

	useEffect(() => {
		const fetch = async () => {
			try {
				console.log(JSON.parse(localStorage.getItem('token')).name);
				const { data } = await axios.get('http://localhost:8000/register', {
					params: JSON.parse(localStorage.getItem('token')).name,
				});
				console.log(data.user[0]);
				if (data.user) {
					dispatch(
						courseActions.registerCourses({
							subjects: data.user[0].subjects,
							register: data.user[0].register,
						})
					);
				}

				setRegister(data.user[0].register);
			} catch (error) {
				console.log(error);
			}
		};

		if (localStorage.getItem('token')) {
			fetch();
		}

		if (JSON.parse(localStorage.getItem('token'))) {
			setToken(JSON.parse(localStorage.getItem('token')).token);
		}

		if (courseState.register) {
			setSelected(true);
		}
		console.log('run');
	}, [courseState.register, courseState.authName]);

	//const creditsRem = courseState.credits;
	let credits = 15;
	console.log('running');
	const courses = courseState.courses.map((course) => {
		credits = credits - course.credits;

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

	const registerCourseHandler = () => {
		console.log(courseState.courses);
		dispatch(registerCoursesSend(courseState.courses, JSON.parse(localStorage.getItem('token')).name));
	};

	const unsubmitCourseHandler = () => {
		dispatch(unsubmitCourseAction([], JSON.parse(localStorage.getItem('token')).name));
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

			<hr />
			<div style={{ marginTop: '40px' }}>
				{!isAuth ? <h3 style={{ color: 'white' }}>Login To Register Courses</h3> : ''}

				<button
					disabled={credits !== 0 && !courseState.register}
					style={{ backgroundColor: 'orange', padding: '10px', borderRadius: '20px', marginRight: '10px' }}
					onClick={registerCourseHandler}
				>
					Register Selected Courses
				</button>
				<button
					disabled={!courseState.register && !isAuth}
					style={{ backgroundColor: 'orange', padding: '10px', borderRadius: '20px', marginRight: '10px' }}
					onClick={unsubmitCourseHandler}
				>
					Unsubmit Courses
				</button>
				<button disabled={!show} style={{ backgroundColor: 'orange', padding: '10px', borderRadius: '20px' }}>
					Download Form
				</button>
				{courseState.register && isAuth && <h4>You have Successfully Registered the Courses</h4>}
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
					disabled={credits !== 0 && courseState.register && !isAuth}
					style={{ backgroundColor: 'orange', padding: '10px', borderRadius: '20px', marginRight: '10px' }}
				>
					Register Selected Courses
				</button>
				<button
					disabled={!courseState.register && !isAuth}
					style={{ backgroundColor: 'orange', padding: '10px', borderRadius: '20px', marginRight: '10px' }}
				>
					Unsubmit Courses
				</button>
				<button disabled={!show} style={{ backgroundColor: 'orange', padding: '10px', borderRadius: '20px' }}>
					Download Form
				</button>
				{courseState.register && isAuth && <h4>You have Successfully Registered the Courses</h4>}
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
//courseState.authName
