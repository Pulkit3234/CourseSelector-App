import classes from './Modal.module.css';

const modal = ({ show }) => {
	const modalCloseHandler = () => {
		show();
	};
	return (
		<>
			<div className={classes.modal_backdrop} onClick={modalCloseHandler} />
			<div className={classes.modal}>
				<div className={classes.sub_modal}>
					<div className={classes.c1}>
						<h3>About This Project</h3>
					</div>

					<div className={classes.c2}>
						<div style={{ marginBottom: '20px', fontSize: '20px', color: 'white' }}>
							Hi there <i class="fas fa-hand-spock"></i>, this project is a Course Selection Project, in
							which users can select courses from the listed courses. It can be used commercially by
							educational institutions to allow students to select the subjects/courses which they want to
							study efficiently without any hustle.
							<p>
								<i class="fas fa-star"></i> <span style={{ color: 'yellow' }}>Rules</span> <br />
								1) You have to signup so that you can the register the selected courses. <br />
								2) You are allowed to select a maximum of 5 courses (15 credits). <br />
								3) You have to register the courses after selecting them.
								<br /> 4) Once the courses are registered you can click the download form button to
								download the form. <br />
								5) If you want to reselect the courses, then you first have to unsubmit the courses to
								select and register the courses again.
								<br /> 6) Once again after re-registering, on click the download form to download the
								form. <br />
								7) Note that form can take 5-10 seconds to download.
								<br /> <br />
								<span
									style={{
										color: 'yellow',
									}}
								>
									Thanks for Reading{' '}
								</span>
								<i class="fas fa-smile"></i>
							</p>
						</div>
						<div onClick={modalCloseHandler} className={classes.btn}>
							Close
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default modal;
