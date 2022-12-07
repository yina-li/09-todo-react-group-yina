import Todo from './Todo';
import NewTodo from './NewTodo';

const Todolist = (props) => {
    let postList = props.bruh.map((todo) => <Todo text={todo.text} />)
    return (
        <div>
            <div><NewTodo /></div>
            <div>{postList}</div>
        </div>
    )
}

export default Todolist;