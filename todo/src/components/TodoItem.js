import React from 'react';

export class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <li className="todo-item">
                    {this.props.todo.title}
                </li>
            </div>
        );
    }
}

export default TodoItem
