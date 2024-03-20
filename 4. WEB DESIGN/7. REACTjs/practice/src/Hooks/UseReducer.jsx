import React, { useReducer } from "react";

let initialState = 0;
let reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialState;
    default:
      state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => dispatch("inc")}>increment</button>
      <button onClick={() => dispatch("dec")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default UseReducer;



