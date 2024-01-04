import { useState } from 'react'
import './App.css'
import ParentCompo from './Components/ParentCompo'
import Task1 from './Practice/Task1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ParentCompo/> */}
      <Task1/>
    </>
  )
}

export default App
