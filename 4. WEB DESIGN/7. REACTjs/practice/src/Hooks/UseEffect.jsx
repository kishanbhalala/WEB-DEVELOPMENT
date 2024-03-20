import React, { useEffect, useState } from "react";

const UseEffect = () => {

  const [data1, setData1] = useState(10);
  const [data2, setData2] = useState(100);

    useEffect(() => {
        console.log("useEffect data2");
    },[data2])

  return (
    <div>
      <button onClick={() => setData1(data1 + 1)}>update {data1} counter</button>
      <button onClick={() => setData2(data2 + 1)}>update {data2} counter</button>
    </div>
  );
};

export default UseEffect;




