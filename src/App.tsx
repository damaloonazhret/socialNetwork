import { useState } from 'react';
import { Button } from '@components/Button';
import './App.css';
import { Link } from './components/link';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count} count</Button>
        <div onClick={() => console.log('asd')}>hello</div>
        <div onClick={() => console.log('asd2')}>world</div>
        <Link />
        <p>
          Edit <code>src/App.tsx</code>
        </p>
      </div>
    </div>
  );
};
