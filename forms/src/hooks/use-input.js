import { useState } from 'react';

const useInput=(validateValue)=>{
    const [enteredValue, setEnteredValue] = useState('');
	const [IsTouched, setIsTouched] = useState(false);
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && IsTouched;

    const valueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const inputBlurHandler = () => {
		setIsTouched(true);
        setIsTouched(false);
	};

const reset=()=>{
setEnteredValue('');
};

    return{
        value:enteredValue,hasError,valueChangeHandler,inputBlurHandler,isValid:valueIsValid,reset
    };
};

export default useInput;