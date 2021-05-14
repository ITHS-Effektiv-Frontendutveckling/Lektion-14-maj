import './App.css';
import { useState } from 'react';

function App() {
  /*
  let [count, setCount] = useState(0);

  function increment(){
    setCount((oldVal) => {
      return oldVal + 1;
    })
  }
  
  function decrement(){
    setCount((oldVal) => {
      return oldVal - 1;
    })
  }
  
  console.log('render!')
 */

  let [list, setList] = useState(() => []);

  let text = '';

  function updateText(e){
    text = e.target.value;
  }

  function addItem(){
    setList(oldVal => {
      return [...oldVal, text]
    })
  }

  return (
    <div className="App">
     <input onChange={updateText} />
     <button onClick={addItem}>Add thing</button>
     <ul>
      {list.map((item, index) => {
        return (<li key={index}>{item}</li>)
      })}
     </ul>
    </div>
  );
}

export default App;
