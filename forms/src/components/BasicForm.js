import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const isNotEmpty=value=>value.trim !=='';
  const isEmail=value=>value.includes('@');
  const {
		value:firstNameValue,
		hasError:firstNameHasError,
		isValid:firstNameIsValid,
		valueChangeHandler:firstNameChangeHandler,
		reset:resetFirstName,
		inputBlurHandler:firstNameBlurHandler}=useInput(isNotEmpty);
	  const {
      value:lastNameValue,
      hasError:lastNameHasError,
      isValid:lastNameIsValid,
      valueChangeHandler:lastNameChangeHandler,
      reset:resetLastName,
      inputBlurHandler:lastNameBlurHandler}=useInput(isNotEmpty);
		const {
			value:emailValue,
			hasError:emailHasError,
			isValid:emailIsValid,
			valueChangeHandler:emailChangeHandler,
			reset:resetEmail,
			inputBlurHandler:emailBlurHandler}=useInput(isEmail);


      let formIsValid=false;

	
if(firstNameIsValid && lastNameIsValid && emailIsValid){
	formIsValid=true;
};

const formSubmissionHandler = (event) => {
  event.preventDefault();
  
  if (!formIsValid) {
    return;
  }
  resetFirstName();
  resetLastName();
  resetEmail();
};

const firstNameClasses = firstNameHasError
		? 'form-control invalid'
		: 'form-control';
    const lastNameClasses = lastNameHasError
		? 'form-control invalid'
		: 'form-control';
		const emailClasses = emailHasError
		? 'form-control invalid'
		: 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstNameValue} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameHasError && (
					<p className="error-text">First Name must not be Empty.</p>
				)}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
          {lastNameHasError && (
					<p className="error-text">Last Name must not be Empty.</p>
				)}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailHasError && (
					<p className="error-text">Please Enter a valid email.</p>
				)}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
