import './App.css';
import { useState } from 'react';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

//Funktionella komponenter i React måste starta med en stor bokstav
//Detta för att React ska veta att det är en komponent
function App() {
  
  let [todos, setTodos] = useState(() => [
    { task: 'Köp kaffe', done: true, id: 1 },
    { task: 'Köp kaka', done: false, id: 2 },
    { task: 'Brygg kaffe', done: false, id: 3 },
    { task: 'Drick kaffe', done: false, id: 4 }
  ])

  function updateTodo(todoText) {
    console.log('I update Todo')

    const todo = {
      task: todoText,
      done: false,
      id: todos.length + 1
    }
    
    setTodos(currentTodos => {
      return [...currentTodos, todo]
    })
  
  }

  function handleCheck(id){
    let arr = [...todos];
    arr[id - 1].done = !arr[id -1].done;
    setTodos(arr)
  }


  return (
    <section className="App-wrapper">
      <h1>Todo</h1>
      <ul className="App-list">
        { todos.map((todo) => {
          return <TodoItem task={ todo.task } done={ todo.done } id={todo.id} key={ todo.id } update={handleCheck} />
        }) }
      </ul>

      <AddTodo update={ updateTodo } />
    </section>
  );
}

export default App;
