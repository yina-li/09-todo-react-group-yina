import React, { Component } from 'react';
import './Todo.css';

// class Todo extends Component {
//     render() {
//         return (
//             <li id="08f75720-66c9-11ed-b4cd-9753f66750e7">hello</li>
//         )
//     }
// }

const Todo = (props) => {
    return (
        <li id="08f75720-66c9-11ed-b4cd-9753f66750e7">{props.text}</li>
    )
}

export default Todo;