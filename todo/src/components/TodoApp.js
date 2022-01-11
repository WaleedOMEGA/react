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
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};
	deleteTodo = (id) => {
		this.setState({
			todos: this.state.todos.filter((todo) => {
				 return todo.id !== id;  
			}),
		});
	};
	render() {
		return (
			<div className="container">
				<Header />
                <Todos todos={this.state.todos} handleChange={this.handleChange} deleteTodo={this.deleteTodo}/>
			</div>
		);
	}
}

export default TodoApp;

