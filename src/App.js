import React, { useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const increment2 = () => setCount((previousCount) => previousCount + 1);
  const decrement2 = () => setCount((previousCount) => previousCount - 1);
  const real = () => setCount((previousCount) => previousCount * 2);
  const real3 = () => setCount((previousCount) => {

    return previousCount % 3 === 0 ? previousCount / 3 : previousCount
    
    })
  
  return (
    <React.Fragment>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>

      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={real}>×２</button>
        <button onClick={real3}>3</button>
        <button onClick={reset}>Reset</button>
      </div>
    </React.Fragment>
  );
};


export default App;
