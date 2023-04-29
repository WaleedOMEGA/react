
import useInput from '../hooks/use-input';
const SimpleInput = (props) => {

	const {
		value:enteredName,
		hasError:nameInputHasError,
		isValid:enteredNameIsValid,
		valueChangeHandler:nameChangeHandler,
		reset:resetNameInput,
		inputBlurHandler:nameBlurHandler}=useInput(value=>value.trim !=='');
	
		const {
			value:enteredEmail,
			hasError:EmailInputHasError,
			isValid:enteredEmailIsValid,
			valueChangeHandler:emailChangeHandler,
			reset:resetEmailInput,
			inputBlurHandler:emailBlurHandler}=useInput(value=>value.includes('@'));
	

	let formIsValid=false;

	
if(enteredNameIsValid && enteredEmailIsValid){
	formIsValid=true;
}
	


	const formSubmissionHandler = (event) => {
		event.preventDefault();
		
		if (!enteredNameIsValid) {
			return;
		}
		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

		const emailInputClasses = EmailInputHasError
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
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					
					value={enteredEmail}
				/>
				{nameInputHasError && (
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
