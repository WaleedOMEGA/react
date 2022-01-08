import { React,useState } from 'react';




function TodoApp(){
    const [todos, setTodo] = useState();
    todos=[ {    id: 1,    title: "Setup development environment",    completed: true    },    {    id: 2,    title: "Develop website and add content",    completed: false    },    {    id: 3,    title: "Deploy to live server",    completed: false    }  ]
    return(
<div>
    <h1>Hello from Create React App</h1>
    <p>I am in a React</p>
</div>
    );
}


export default TodoApp;
