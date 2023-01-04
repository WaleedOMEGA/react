import React,{useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
const AddUser = props => {
	const [enteredUsername, setEnteredusername] = useState('')
	const [enteredAge, setEnteredage] = useState('');
    const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			return;
		}
		if (+enteredAge < 1) {
			return;
		}
		console.log(enteredUsername, enteredAge);
		setEnteredage('');
		setEnteredusername('')
	};
	const usernameChangehandler = (event) => {
		setEnteredusername(event.target.value)
	};
	const ageChangehandler = (event) => {
		setEnteredage(event.target.value);
	};
    return (
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="userName">User Name</label>
					<input id="userName" type="text" value={enteredUsername} onChange={usernameChangehandler} />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" value={enteredAge} onChange={ageChangehandler} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		);
};

export default AddUser;