import { useState } from 'react';
const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');

	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const nameInputBlurHandler = (event) => {
		setEnteredNameTouched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		setEnteredNameTouched(true);
		if (!enteredNameIsValid) {
			return;
		}
		setEnteredName('');
		setEnteredNameTouched(false);
	};

	const nameInputClasses = nameInputInvalid
		? 'form-control invalid'
		: 'form-control';
	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					onBLur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputInvalid && (
					<p className="error-text">Name must not be Empty.</p>
				)}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
