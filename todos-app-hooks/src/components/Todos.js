import React from 'react';
import TodoItem from './TodoItem';
const Todos = (props) => {
	return (
		<div>
			
			{props.todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					handleChange={props.handleChange}
					deleteTodo={props.deleteTodo}
				/>
			))}
		</div>
	);
};
export default Todos;
