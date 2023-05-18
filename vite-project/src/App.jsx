import { useState } from 'react'

export default function App() {
  const [newitem, setnewitem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newitem, completed: false},
    ]
  });
  setnewitem("");
  }

  function done(id, completed)
  {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id)
          return {...todo, completed};
        return todo;
      })
    })
  }
  function deleteTodos(id)
  {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <>
    <form onSubmit={handleSubmit} className='form'>
      <div className="new-item">
      <label htmlFor='new-item'></label>
      <input type= 'text' value={newitem} onChange={e => setnewitem(e.target.value)} id= 'new-item' ></input>
      </div>
      <button className='btn'> Add </button>
    </form>
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
