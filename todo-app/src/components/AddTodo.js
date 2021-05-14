import { useState } from "react";

function AddTodo({ update }) {
  
  let [todoText, setTodoText] = useState('');

  function handleInput(event) {
    console.log(event.target.value);
    setTodoText(() => event.target.value);
  }

  function handleClick() {
    console.log('Du skrev: ', todoText);
    update(todoText);
    setTodoText(() => '');
  }

  return (
    <section>
      <input type="text" onChange={ handleInput } value={todoText} />
      <button onClick= { handleClick }>Lägg till todo</button>
    </section>
  )
}

export default AddTodo;