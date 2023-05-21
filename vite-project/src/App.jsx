import { useState } from 'react'
import NewTodo from './NewTodo'
import TodoList from './TodoList';


export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <NewTodo onSubmit= {setTodos} ></NewTodo>
      <h1 className='Todo List'>Todo List</h1>
      <TodoList todos = {todos} setTodos = {setTodos}></TodoList>
    </>
  )
}
