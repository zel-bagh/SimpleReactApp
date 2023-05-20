import { useState } from 'react'
import NewTodo from './NewTodo'

export default function App() {
  const [todos, setTodos] = useState([]);

  function done(id, completed){
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id)
        return {...todo, completed};
      return todo;
    })
  })
  }
  function deleteTodos(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <>
      <NewTodo onSubmit= {setTodos} ></NewTodo>

      <h1 className='Todo List'>Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return(
          <li key={todo.id}>
          <label>
            <input type='checkbox' checked= {todo.completed} onChange= {e => done(todo.id, e.target.checked)}/>
              {todo.title}
          </label>
          <button className="btn btn-danger" onClick={e => deleteTodos(todo.id)}>Delete</button>
        </li>
        )}) // a script that will execute and return a table of jsx as a childs of the "ui", and the key is for identifying each child.
        }
      </ul>
    </>
  )
}
