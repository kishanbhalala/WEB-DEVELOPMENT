import { useState } from 'react'
import UseEffect1 from './useEffect/UseEffect1'
import Task1 from './useEffect/Task1'
import UseEffect2 from './useEffect/UseEffect2'
import UseEffect3 from './useEffect/UseEffect3'
import UseEffect4 from './useEffect/UseEffect4'
import UseEffect5 from './useEffect/UseEffect5'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Task1/> */}
     {/* <UseEffect1/> */}
     {/* <UseEffect2 names="how are you"/> */}
     {/* <UseEffect3 val="kishan"/> */}
     {/* <UseEffect4 mess="12"/> */}
     <UseEffect5 e="hy king"/>
   

    </>
  )
}

export default App
