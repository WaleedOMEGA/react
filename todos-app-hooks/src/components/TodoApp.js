import React, { useState, useEffect } from 'react';
import Todos from './Todos';
import Header from './layout/Header';
import AddTodo from './AddTodo';
import uuid from 'uuid';
import axios from 'axios';
const TodoApp = (props) => {
	const [todos, setTodos] = useState([]);
	const [show, setShow] = useState(false);
	const handleChange = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		);
		setShow(!show);
	};
	const deleteTodo = (id) => {
		setTodos([
			...todos.filter((todo) => {
				return todo.id !== id;
			}),
		]);
	};
	const addTodo = (title) => {
		const newTodo = { id: uuid.v4(), title: title, completed: false };
		setTodos([...todos, newTodo]);
	};
	useEffect(() => {
		console.log("test run");
		axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
			.then(response => setTodos(response.data))
	}, []);  
	return (
		<div className="container">
			<Header headerSpan={show} />
			<AddTodo addTodo={addTodo} />
			<Todos
				todos={todos}
				handleChange={handleChange}
				deleteTodo={deleteTodo}
			/>
		</div>
	);
};

export default TodoApp;
