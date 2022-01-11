import React from "react";
import Todos from "./Todos";
import Header from "./layout/Header";
import AddTodo from "./AddTodo";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

class TodoApp extends React.Component {
	state = {
		todos: [
			{
				// id: uuid.v4(),
				id: 1,
				title: 'Setup development environment',
				completed: true,
			},
			{
				// id: uuid.v4(),
				id: 2,
				title: 'Develop website and add content',
				completed: false,
			},
			{
				// id: uuid.v4(),
				id: 3,
				title: 'Deploy to live server',
				completed: false,
			},
		],
	};
	handleChange = (id) => {
		console.log('clicked', id);
	};
	render() {
		return (
			<div className="container">
				<Header />
				<Todos todos={this.state.todos} handleChange={this.handleChange} />
			</div>
		);
	}
}

export default TodoApp;

