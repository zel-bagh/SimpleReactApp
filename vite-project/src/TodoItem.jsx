export default function TodoItem(props){
    function done(id, completed){
        props.setTodos(currentTodos => {
          return currentTodos.map(todo => {
            if (todo.id === id)
              return {...todo, completed};
            return todo;
          })
        })
        }
    function deleteTodos(id){
      props.setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id);
      })
    }
    return(
        <li>
        <label>
          <input type='checkbox' checked= {props.todo.completed} onChange= {e => done(props.todo.id, e.target.checked)}/>
            {props.todo.title}
        </label>
        <button className="btn btn-danger" onClick={e => deleteTodos(props.todo.id)}>Delete</button>
      </li>
    )
}