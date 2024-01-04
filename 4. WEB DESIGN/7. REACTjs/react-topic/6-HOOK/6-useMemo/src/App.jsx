import { useState } from 'react'
import './App.css'
import Count1 from './Components/Count1'
import Count2 from './Components/Count2'
import Count3 from './Components/Count3'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Count1/> */}
      {/* <Count2/> */}
      <Count3/>
    </>
  )
}

export default App
