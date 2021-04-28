import classes from './Signup.module.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { authActions } from '../store/AuthSlice';
import { useDispatch } from 'react-redux';

const Signup = () => {
	
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmRef = useRef();
	const [formData, setFormData] = useState({});
	const [valid, setValid] = useState(true);
	const form = {};
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchFunc = async () => {
			try {
				const { data } = await axios({
					method: 'POST',
					url: 'http://localhost:8000/signup',
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
		form.name = nameRef.current.value;
		form.confirmpassword = confirmRef.current.value;
		console.log(confirmRef.current.value, passwordRef.current.value);
		if (confirmRef.current.value !== passwordRef.current.value) {
			emailRef.current.value = '';
			nameRef.current.value = '';
			passwordRef.current.value = '';
			confirmRef.current.value = '';
			setValid(false);
			return;
		}
		console.log('test');
		setFormData(form);
		
		console.log(form);
		emailRef.current.value = '';
		nameRef.current.value = '';
		passwordRef.current.value = '';
		confirmRef.current.value = '';
	};

	return (
		<>
			<div className={classes.design}>
				<div className={classes.body}>
					<label htmlFor="name">Name</label>
					<input id="name" type="text" ref={nameRef} />
					<label htmlFor="email">Email</label>
					<input id="email" type="email" ref={emailRef} />
					<label htmlFor="password">Password</label>
					<input id="password" type="password" ref={passwordRef} />
					<label htmlFor="password">Confirm Password</label>
					<input id="password" type="password" ref={confirmRef} />
					<button
						style={{ background: 'orange', pointer: 'cursor', marginTop: '20px' }}
						onClick={onSubmitHandler}
					>
						Sign Up
					</button>
					<h3>
						Already Have an Account?
						<span>
							<NavLink to="/login">Log In</NavLink>
						</span>
					</h3>
					{!valid && <h2>Password and Confirm Password Don't Match</h2>}
				</div>
			</div>
		</>
	);
};

export default Signup;
