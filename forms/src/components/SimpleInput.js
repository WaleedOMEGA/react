import { useState } from 'react';
import useInput from '../hooks/use-input';
const SimpleInput = (props) => {

	const {
		value:enteredName,
		hasError:nameInputHasError,
		isValid:enteredNameIsValid,
		valueChangeHandler:nameChangeHandler,
		reset:resetNameInput,
		inputBlurHandler:nameBlurHandler}=useInput(value=>value.trim !=='');
	
	
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
	
	const enteredEmailIsValid = enteredEmail.includes('@');
	
	const emailInputInvalid = !enteredEmailIsValid && enteredEmailTouched;

	let formIsValid=false;

	
if(enteredNameIsValid && enteredEmailIsValid){
	formIsValid=true;
}
	
	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const emailInputBlurHandler = () => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		
		if (!enteredNameIsValid) {
			return;
		}
		resetNameInput();
		setEnteredEmail('');
		setEnteredEmailTouched(false);
	};

	const nameInputClasses = nameInputHasError
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
					onChange={nameChangeHandler}
					onBLur={nameBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
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
