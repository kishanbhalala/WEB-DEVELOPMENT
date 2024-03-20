import React, { useRef, useState } from 'react'

const UseRef = () => {
    const refEle = useRef("");
    
    const [name, setName] = useState("kishan")
    console.log(refEle);

    function reset(){
        setName("")
        refEle.current.focus()
    }
    function colorChange(){
        refEle.current.style.color = "blue"
    }
  return (
    <div>
      <h1>useRef hook dom  manipulation</h1>
      <input ref={refEle} type="text" value={name} onChange={(e) => setName(e.target.value)}/>

      <button onClick={reset}>reset</button>
      <button onClick={colorChange}>change color</button>
    </div>
  )
}

export default UseRef
