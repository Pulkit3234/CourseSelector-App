import { NavLink, useHistory } from 'react-router-dom';
import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/AuthSlice';
import { courseActions } from '../../store/CourseSlice';
import { useEffect, useState } from 'react';

const Header = ({ show }) => {
	const history = useHistory();
	//const name = useSelector((state) => state.auth.authName);
	//const [name, setName] = useState('');
	let name = '';
	if (JSON.parse(localStorage.getItem('token'))) {
		name = JSON.parse(localStorage.getItem('token')).name;
	}
	//console.log(name);

	//let authName = useSelector((state) => state.auth.authName);
	//let authName = ''; */

	const authName = useSelector((state) => state.auth);
	console.log(authName);
	

	const dispatch = useDispatch();
	const logoutHandler = (e) => {
		dispatch(authActions.logout());
		dispatch(courseActions.registerHandler());
		history.push('/');
	};
	

	//for checking whether the token is present or not.(on refresh the user should be shown)
	const modalShowHandler = () => {
		show();
	};

	//console.log(data.name);
	//console.log(authName);
	return (
		<>
			<ul className={classes.ul}>
				<div>
					<p style={{ cursor: 'pointer' }}>
						<i class="fas fa-address-book fa-2x"></i>
					</p>
				</div>

				<div>
					{name && authName.isAuth && <li style={{ color: 'white' }}>{`Hi ${name}`}</li>}
					<li>
						{name && authName.isAuth ? (
							<NavLink
								to="/login"
								exact
								style={{ textDecoration: 'none' }}
								activeClassName={classes.active}
								onClick={logoutHandler}
							>
								Logout
							</NavLink>
						) : (
							<NavLink
								to="/signup"
								exact
								style={{ textDecoration: 'none' }}
								activeClassName={classes.active}
							>
								Sign Up
							</NavLink>
						)}
					</li>
					<li>
						<NavLink to="/" exact style={{ textDecoration: 'none' }} activeClassName={classes.active}>
							Select Courses
						</NavLink>
					</li>
					<li>Admin</li>

					<li onClick={modalShowHandler}>?</li>
				</div>
			</ul>
		</>
	);
};

export default Header;
// ? will open a modal which will help the user to know the information of what the project is about.
