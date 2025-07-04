import { useEffect, useReducer, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { store, type DecrementAction, type IncrementAction } from './store';

function App() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>count is {store.getState().counter}</h1>
      <div className='card'>
        <button onClick={() => store.dispatch({ type: 'increment' } satisfies IncrementAction)}>
          increment
        </button>
        <button onClick={() => store.dispatch({ type: 'decrement' } satisfies DecrementAction)}>
          decrement
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
