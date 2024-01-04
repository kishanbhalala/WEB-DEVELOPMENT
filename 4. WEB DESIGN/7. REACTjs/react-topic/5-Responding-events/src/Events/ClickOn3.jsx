import React from 'react'

const ClickOn3 = () => {

    const abc = () => {
        alert("first function")
    }
    const xyz = () => { 
        alert();
    }

  return (
    <div>
      <h1 className="text-6xl mb-10">React onClick Events 3</h1>

      <button className='border border-gray-700 px-6 py-2 m-3' onClick={() => alert("click me inner function!")}>click 1</button>
      <button className='border border-gray-700 px-6 py-2 m-3' onClick={abc}>click 2</button>
      <button className='border border-gray-700 px-6 py-2 m-3' onClick={xyz}>click 3</button>
    </div>
  )
}

export default ClickOn3
