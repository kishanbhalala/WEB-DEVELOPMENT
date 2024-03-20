import React, { useState } from "react";

const GetInputBox = () => {
    const [data,setData] = useState(null)
    const [btn,setBtn] = useState()

  function myFun(e) {
    setData(e.target.value)
  }
  function myBtn(){
    setBtn(true)
  }
  return (
    <div>
      {
        btn ? <h1>{data}</h1> :null
      }
      <input type="text" onChange={myFun} />
      <button onClick={myBtn}>click</button>
    </div>
  );
};

export default GetInputBox;



