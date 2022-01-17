import React, { useEffect } from 'react';

const TodoItem = (props) => {  
		const completedStyle = {
			fontStyle: 'italic',
			color: '#c5e2d2',
			textDecoration: 'line-through',
		};

	const { completed, id, title } = props.todo;
	useEffect(() => {
		return () => {
			alert('Item about to be deleted!');
		};
	}, []);  
		return (
			<div>
				<li className="todo-item">
					<input
						type="checkbox"
						checked={completed}
						onChange={() => props.handleChange(id)}
					/>
					<button
						className="btn-style"
						onClick={() => props.deleteTodo(id)}
					>
						X
					</button>
					<span style={completed ? completedStyle : null}>{title}</span>
				</li>
			</div>
		);
	
}

export default TodoItem;
