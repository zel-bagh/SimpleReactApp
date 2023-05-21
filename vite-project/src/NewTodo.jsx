import { useState } from "react";

export default function NewTodo(props){
const [newitem, setnewitem] = useState("");

function handleSubmit(e){

    e.preventDefault();
    props.onSubmit((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newitem, completed: false},
    ]
  });
  setnewitem("");
}

return (
    <form onSubmit={handleSubmit} className='form'>
    <div className="new-item">
    <label htmlFor='new-item'></label>
    <input type= 'text' value={newitem} onChange={e => setnewitem(e.target.value)} id= 'new-item' ></input>
    </div>
    <button className='btn'> Add </button>
    </form>
)

}