import Courses from './components/Courses';
import Header from './components/Layout/Header';
import Student from './components/Student';
import Signup from './components/Signup';
import { BrowserRoute, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import React from 'react';
import Pdf from './components/Generatepdf';

function App() {
	console.log(React.version);
	return (
		<>
			<Header />

			<Route path="/" exact>
				<Courses />

				<Student />
			</Route>

			<Route path="/signup" exact>
				<Signup />
			</Route>
			<Route path="/login" exact>
				<Login />
			</Route>
		</>
	);
}

export default App;
