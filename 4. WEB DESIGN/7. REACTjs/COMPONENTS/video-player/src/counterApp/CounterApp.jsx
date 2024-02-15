import React, { useState } from "react";

const CounterApp = () => {
  const [value, setValue] = useState(5);
  return (
    <div>
      <div
        style={{
          width:"100%",
          textAlign:"center"
            
        }}
      >
        <h1>Counter App</h1>
        <h1>{value}</h1>
        <div>
          <button onClick={() => setValue(value + 1)}>Increment</button>
          <button onClick={() => setValue(value - 1)}>Decrement</button>
          <button onClick={() => setValue(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
