import React from "react";
import Todos from "./Todos";
import Header from "./layout/Header";
import AddTodo from "./AddTodo";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';  
class TodoApp extends React.Component {
	state = { todos: [], show: false };
	handleChange = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
			show: !this.state.show,
		});  
	};
	deleteTodo = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((reponse) =>
				this.setState({
					todos: [
						...this.state.todos.filter((todo) => {
							return todo.id !== id;
						}),
					],
				}),
			);
	};
	addTodo = (title) => {
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title: title,
				completed: false,
			})
			.then((response) =>
				this.setState({ todos: [...this.state.todos, response.data] }),
			);
	};
	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then((response) => this.setState({ todos: response.data }));
	}

	render() {
		return (
			<div className="container">
				<Header headerSpan={this.state.show} />
				<AddTodo addTodo={this.addTodo} />
				<Todos
					todos={this.state.todos}
					handleChange={this.handleChange}
					deleteTodo={this.deleteTodo}
				/>
			</div>
		);
	}
}

export default TodoApp;

