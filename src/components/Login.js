import classes from './Signup.module.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { authActions } from '../store/AuthSlice';
import { useDispatch } from 'react-redux';

const Signup = () => {

	const emailRef = useRef();
	const passwordRef = useRef();
	const [formData, setFormData] = useState({});
	const form = {};
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchFunc = async () => {
			try {
				const { data } = await axios({
					method: 'POST',
					url: 'https://courseselectapi.herokuapp.com/login',
					data: formData,
				});

				console.log(data);

				if (data.token) {
					
					dispatch(authActions.login(data));
					history.push('/');
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchFunc();
	}, [formData]);

	const onSubmitHandler = (e) => {
		//e.preventDefault();
		form.email = emailRef.current.value;
		form.password = passwordRef.current.value;
		setFormData(form);
		console.log(form);
		emailRef.current.value = '';
		passwordRef.current.value = '';
	};

	return (
		<>
			<div className={classes.design}>
				<div className={classes.body}>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" ref={emailRef} />
					<label htmlFor="password">Password</label>
					<input id="password" type="password" ref={passwordRef} />

					<button
						style={{ background: 'orange', pointer: 'cursor', marginTop: '20px' }}
						onClick={onSubmitHandler}
					>
						Login
					</button>
					<h3>
						New User? <NavLink to="/signup">Sign Up</NavLink>
					</h3>
				</div>
			</div>
		</>
	);
};

export default Signup;
