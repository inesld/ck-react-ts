import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState <number>(0);

  const increment = () :void => {
    // setCount(count + 1); JS 
    // setCount((prevCount:number)=> prevCount +1);  tS
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
