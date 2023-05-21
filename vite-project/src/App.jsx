import { useEffect, useState } from 'react'
import NewTodo from './NewTodo'
import TodoList from './TodoList';


export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null)
      return [];
    return JSON.parse(localValue);
  });


  useEffect(() => localStorage.setItem("ITEMS", JSON.stringify(todos)), [todos]);
  return (
    <>
      <NewTodo onSubmit= {setTodos} ></NewTodo>
      <h1 className='Todo List'>Todo List</h1>
      <TodoList todos = {todos} setTodos = {setTodos}></TodoList>
    </>
  )
}
