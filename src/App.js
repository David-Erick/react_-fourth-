//components
import FirstComponent from './components/FirstComponent';
//hooks
import {useState} from 'react';
//
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  console.log('rederizou')

  return (
    <div className="App">
     <h1>O contador é:  {count}</h1>

    <button onClick={() => setCount((prevCount) => prevCount +1)}> 
      Adicionar
     </button>
    
    </div>
  );
}

export default App;
