import React, { useCallback, useState } from "react";
import ChildCallback from "./ChildCallback";

const UseCallback = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const Learning = useCallback(() => {

  }, [count]);
  return (
    <div>
      <h1>use call back memoizes callback function</h1>
      <ChildCallback Learning={Learning} count={count} />
      <h1>{add}</h1>
      <button style={{display:"block", marginBottom:"50px"}} onClick={() => setAdd(add + 1)}>+1</button>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 5)}> click</button>
    </div>
  );
};

export default UseCallback;
