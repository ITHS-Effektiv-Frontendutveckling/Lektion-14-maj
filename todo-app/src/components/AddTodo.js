function AddTodo({ update }) {
  let todoText = '';

  function handleInput(event) {
    console.log(event.target.value);
    todoText = event.target.value;
  }

  function handleClick() {
    console.log('Du skrev: ', todoText);
    update(todoText);
  }

  return (
    <section>
      <input type="text" onKeyUp={ handleInput } />
      <button onClick= { handleClick }>Lägg till todo</button>
    </section>
  )
}

export default AddTodo;