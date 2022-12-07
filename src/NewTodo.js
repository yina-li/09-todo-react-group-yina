import axios from 'axios';
import React, { Component, useState } from 'react';
import './NewTodo.css';
import Todo from './Todo';

// class NewTodo extends Component {
//     render() {
//         return (
//             <div id="myDIV" className="header">
//                 <form>
//                     <input value={this.state.title} onChange={this.onChange} name="todo" type="text" id="myInput" placeholder="Title..." />
//                 </form>
//             </div>
//         );
//     }
// }

const config = {
    headers: {
        "x-api-key": "3d3b6b-cbe564-ffd618-b64d7b-4af84e",
        "Content-type": "application/json"
    }
};

function updateList() {
    let pain2 = [];
    axios.get("https://cse204.work/todos", config).then(response => {
        for (let key in response.data) {
            console.log("this is response.data")
            console.log(response.data)
            pain2.push(response.data[key])
        }
    }
    )
    console.log("this is pain2")
    console.log(pain2)
    return listMaker(pain2);
}

function listMaker(listThings) {
    let postList = listThings.map((todo) => <Todo text={todo.text} />)
    console.log(postList)
    return postList;
}

const NewTodo = (props) => {
    // let postList = props.bruh.map((todo) => <Todo text={todo.text} />)
    // console.log(postList)
    let [allTodos, setallTodos] = useState(updateList());
    console.log(allTodos)
    let [newitem, setnewitem] = useState("");

    const handleChange = (e) => {
        setnewitem(e.target.value)
        console.log(newitem)
    }

    const submitFunct = (e) => {
        e.preventDefault()
        axios.post("https://cse204.work/todos", {"text":newitem}, config).then(response => {
            console.log(response)
        })
    }

    return (
        <div id="myDIV" className="header">
            <form noValidate onSubmit={submitFunct}>
                <input value={newitem} onChange={handleChange} name="todo" type="text" id="myInput" placeholder="Title..." />
                <button type="submit">Submit</button>
            </form>
            <div>{allTodos}</div>
        </div>
    )
}

export default NewTodo;