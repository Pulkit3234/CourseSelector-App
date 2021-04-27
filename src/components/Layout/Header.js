import { NavLink, useHistory } from 'react-router-dom';
import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/AuthSlice';
import { courseActions } from '../../store/CourseSlice';
import { useEffect } from 'react';
const Header = () => {
	const history = useHistory();
	//const name = useSelector((state) => state.auth.authName);
	let name = '';
	if (JSON.parse(localStorage.getItem('token'))) {
		name = JSON.parse(localStorage.getItem('token')).name;
	}

	const isAuth = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();
	const logoutHandler = (e) => {
		dispatch(authActions.logout());
		dispatch(courseActions.registerHandler());
		history.push('/');
	};
	//let obj = JSON.parse(localStorage.getItem('token'));

	//for checking whether the token is present or not.(on refresh the user should be shown)

	console.log(name);
	return (
		<>
			<ul className={classes.ul}>
				<div>
					<p style={{ cursor: 'pointer' }}>
						<i class="fas fa-address-book fa-2x"></i>
					</p>
				</div>

				<div>
					{name && isAuth && <li style={{ color: 'white' }}>{`Hi ${name}`}</li>}
					<li>
						{name && isAuth ? (
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

					<li>?</li>
				</div>
			</ul>
		</>
	);
};

export default Header;
// ? will open a modal which will help the user to know the information of what the project is about.
