//Här använder vi object destructuring där vi plockar ut task från props-objektet
function TodoItem({ task, done, id, update }) {
  console.log('TodoItem props:', task);
  
  let doneClass = (done) ? 'done' : '';

  function handleCheck(){
    update(id)
  }

  return (
    <li className={doneClass}>
      <input type="checkbox" checked={done} onChange={ handleCheck } />
      { task }
    </li>
  )
}

export default TodoItem;