import './scss/main.scss';
import ChildComponent from './components/ChildComponent';

function App() {

  let people = [
    { name: 'Johan' },
    { name: 'Christoffer' },
    { name: 'Maja' }
  ];

  let text = '';

  function updateText(e){
    console.log(e.target.value)
    text = e.target.value;
  }

  function submit(){
    people.push({ name: text })
    console.log(people)
  }

  console.log('render!')

  let comps = people.map((person, index) => {
    return <ChildComponent name={person.name} key={index} />
  })

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input onChange={updateText} /> 
      <button onClick={submit}>Go!</button>
      {comps}
    </div>
  );
}

export default App;
