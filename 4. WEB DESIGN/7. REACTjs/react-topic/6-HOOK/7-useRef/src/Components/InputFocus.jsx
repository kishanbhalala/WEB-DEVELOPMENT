import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const InputFocus = () => {
  const inputRef = useRef("kishan")
  console.log(inputRef);

  function reset() {
    setName("")
    inputRef.current.focus()
    inputRef.current.style.color = "black"
    inputRef.current.style.textDecoration = "none"
  }

  function handleClick() {
    inputRef.current.style.color = "pink"
    inputRef.current.style.textDecoration = "underline"
  }

  const [name, setName] = useState("kishan")
  return (
    <>
      <div className=''>
        <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={reset}>Reset</button>
        <button onClick={handleClick}>handleInput</button>
      </div>
    </>
  )
}

export default InputFocus

