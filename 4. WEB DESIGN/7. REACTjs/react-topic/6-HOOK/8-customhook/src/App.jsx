import { useState } from 'react'

import './App.css'
import Custom1 from './Components/Custom1'
import Custom2 from './Components/Custom2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Custom1/>
      <Custom2/>
    </>
  )
}

export default App
