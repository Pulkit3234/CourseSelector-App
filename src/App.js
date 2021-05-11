import Courses from './components/Courses';
import Header from './components/Layout/Header';
import Student from './components/Student';
import Signup from './components/Signup';
import { BrowserRoute, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import React, { useState } from 'react';
import Modal from './components/Layout/Modal';
import Footer from './components/Layout/Footer'

function App() {
	const [show, setShow] = useState(false);

	
	const showModalHandler = () => {
		setShow(true);
	};

	const closeModalHandler = () => {
		setShow(false);
	};
	return (
		<>
			<Header show={showModalHandler} />
			{show && <Modal show={closeModalHandler} />}

			<Route path="/" exact>
				<Courses />

				<Student />
			</Route>

			<Route path="/signup" exact>
				<Signup  />
			</Route>
			<Route path="/login" exact>
				<Login  />
			</Route>
			<Footer/>
		</>
	);
}

export default App;
