import { useEffect, useState } from 'react'
import './App.css'
import {store} from './fluxStructure/store'
import { dispatcher } from './fluxStructure/Dispatcher';
import { INCREMENT_COUNT, SET_COUNT, DECREMENT_COUNT, RESET_COUNT } from './fluxStructure/ActionNames';

function App() {
  const [state, setState] = useState(store.getState());


  useEffect(() => {
    const handleChange = () => {
      setState({...store.getState()});
    };

    store.addChangeListener(handleChange);

    return () => {
      store.removeChangeListener(handleChange);
    };
  }
  , []);

  const increment = () => {
    dispatcher.dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    dispatcher.dispatch({ type: DECREMENT_COUNT });
  };
  const reset = () => {
    dispatcher.dispatch({ type: RESET_COUNT });
  };
  const setCount = (count) => {
    dispatcher.dispatch({ type: SET_COUNT, payload: count });
  };

  return (
    <div>
      <div>{state.count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setCount(5)}>Set Count to 5</button>
    </div>
  )
}

export default App
