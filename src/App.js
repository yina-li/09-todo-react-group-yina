import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';
import axios from 'axios';
import Todolist from './yina';

// class App extends Component {
//   render() {
//     return (
//       <section id="todos">
//         <NewTodo />
//         <Todo />
//       </section>
//     )
//   }
// }



const App = () => {
  let [bruh, setBruh] = useState([])
  const config = {
    headers: {
      "x-api-key": "3d3b6b-cbe564-ffd618-b64d7b-4af84e"
    }
  };
  useEffect(() => {
    let pain = [];
    console.log("something")
    axios.get("https://cse204.work/todos", config).then(response => {
      for (let key in response.data) {
        pain.push(response.data[key])
      }
      setBruh(pain);
    })
  }, [])

  return (
    <div>
      {/* <NewTodo bruh={bruh}/> */}
      <Todolist bruh={bruh}/>
    </div>
  )
}

export default App;
