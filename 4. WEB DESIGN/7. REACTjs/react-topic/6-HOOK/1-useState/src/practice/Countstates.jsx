import { useState } from "react";

// countstates :- counting value increment and decrement  

const Countstates = () => {

  // couniting value 
  
 let [count,setcount] = useState(0)

  const addValue = () => {
    // console.log("value added",Math.random());
    // console.log("value added",count);
    // count += 1; 
    setcount(count + 1)
  }

  const rmvValue = () => {
    // console.log("value added",Math.random());
    // console.log("value added",count);
    // count += 1; 
    setcount(count - 1)
  }

  return (
    <>
      <div className='h-screen grid place-content-center bg-gray-700 text-2xl text-center '>

        <h1>hook counting value</h1>
        <h2 className='text-emerald-50'>count value : {count}</h2>

        <div className=''>
          <button className='mr-5 border rounded-lg p-2' onClick={addValue}> Add</button>
          <button className='border rounded-lg p-2' onClick={rmvValue}>remove</button>
        </div>

        {/* <p>footer : {count}</p> */}

      </div>
    </>
  )
}

export default Countstates
