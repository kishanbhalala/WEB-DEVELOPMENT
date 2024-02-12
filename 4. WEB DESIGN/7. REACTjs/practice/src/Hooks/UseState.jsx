import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  function plus() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
   
  }
  function minus() {
    setCount(count - 1);
  }
  return (
    <div>
      <button onClick={plus}>+</button>
      <div>{count}</div>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default UseState;
