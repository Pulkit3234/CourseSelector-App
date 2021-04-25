import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
const Header = () => {
	return (
		<>
			<ul className={classes.ul}>
				<div>
					<p style={{ cursor: 'pointer' }}>
						<i class="fas fa-address-book fa-2x"></i>
					</p>
				</div>

				<div>
					<li>SignUp</li>
					<li>Select Courses</li>
                    <li>Admin</li>
                    <li>?</li>
				</div>
            </ul>
        
		</>
	);
};

export default Header;
// ? will open a modal which will help the user to know the information of what the project is about.