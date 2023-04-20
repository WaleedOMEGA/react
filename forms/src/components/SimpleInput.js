import { useState } from 'react';
const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);
	
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
	const enteredNameIsValid = enteredName.trim() !== '';
	const enteredEmailIsValid = enteredEmail.includes('@');
	const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;
	const emailInputInvalid = !enteredEmailIsValid && enteredEmailTouched;

	let formIsValid=false;

	
if(enteredNameIsValid && enteredEmailIsValid){
	formIsValid=true;
}
	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const nameInputBlurHandler = () => {
		setEnteredNameTouched(true);
	};

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const emailInputBlurHandler = () => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		setEnteredNameTouched(true);
		if (!enteredNameIsValid) {
			return;
		}
		setEnteredName('');
		setEnteredNameTouched(false);
		setEnteredEmail('');
		setEnteredEmailTouched(false);
	};

	const nameInputClasses = nameInputInvalid
		? 'form-control invalid'
		: 'form-control';

		const emailInputClasses = emailInputInvalid
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
			<div className={emailInputClasses}>
				<label htmlFor="email">Your E-Mail</label>
				<input
					type="email"
					id="email"
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					
					value={enteredEmail}
				/>
				{emailInputInvalid && (
					<p className="error-text">Please Enter a valid email.</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
