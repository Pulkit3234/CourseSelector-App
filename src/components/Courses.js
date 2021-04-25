import Course from './Course';
const data = [
	{
		id: 'c1',
		name: 'Astronomy',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		credits: 3,
	},
	{
		id: 'c2',
		name: 'Biomedical Sciences',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		credits: 3,
	},
	{
		id: 'c3',
		name: 'Earth Science',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		credits: 3,
	},

	{
		id: 'c4',
		name: 'Life Sciences',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		credits: 3,
	},
	{
		id: 'c5',
		name: 'Chemistry',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		credits: 3,
	},
	{
		id: 'c6',
		name: 'Physics',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		credits: 3,
	},
	{
		id: 'c7',
		name: 'Mathematics',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		credits: 3,
	},
	{
		id: 'c8',
		name: 'Environmental Sciences',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		credits: 3,
	},
	{
		id: 'c9',
		name: 'Sports Science',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		credits: 3,
	},

	{
		id: 'c10',
		name: 'Physical Geography',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		credits: 3,
	},
];
const Courses = () => {
	const courseList = data.map((course) => {
		return (
			<Course
				name={course.name}
				key={course.id}
				id={course.id}
				description={course.description}
				credits={course.credits}
			/>
		);
	});

	return (
		<>
			<div
				style={{
					height: '80vh',
					overflowY: 'scroll',
					width: '35vw',
					position: 'absolute',
					top: '30px',
					left: '30px',

					marginTop: '50px',
				}}
			>
				{courseList}
			</div>
		</>
	);
};

export default Courses;
