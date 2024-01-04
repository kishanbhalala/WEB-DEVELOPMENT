import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  const col = () => {
    setcolor("red")
  }


  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl'>
            <button onClick={col} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl ' style={{ backgroundColor: "red" }}>red</button>
            <button onClick={() => setcolor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl ' style={{ backgroundColor: "green" }}>green</button>
            <button onClick={() => setcolor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl ' style={{ backgroundColor: "blue" }}>blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
