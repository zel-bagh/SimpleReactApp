import TodoItem from "./TodoItem";

export default function TodoList(props){
    return(
        <>
        <ul className='list'>
          {props.todos.length === 0 && "No Todos"}
          {props.todos.map(todo => {
            return(
              <TodoItem todo={todo} setTodos={props.setTodos} key = {todo.id}></TodoItem>
          )}) // a script that will execute and return a table of jsx as a childs of the "ui", and the key is for identifying each child.
          }
        </ul>
        </>
    )
}
