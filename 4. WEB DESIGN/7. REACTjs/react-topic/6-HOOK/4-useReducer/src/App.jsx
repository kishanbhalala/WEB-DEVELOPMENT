import { useState } from 'react'

import './App.css'
import UseReducer from './UseReducer/UseReducer'
import Task1 from './UseReducer/Task1'
import UseReducer_object from './UseReducer/UseReducer_object'
import UseReducer_multi1 from './UseReducer/UseReducer_multi1'
import UseReducer_multi2 from './UseReducer/UseReducer_multi2'
import UseReducer_multi3 from './UseReducer/UseReducer_multi3'

import Counter from './Components/Counter'
import BasicProgram from './UseReducer/BasicProgram'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <BasicProgram/> */}
      {/* <Task1/> */}
      {/* <UseReducer/> */}
      {/* <UseReducer_multi1/> */}
      {/* <UseReducer_multi2/> */}
      <UseReducer_multi3/>
      {/* <UseReducer_object/> */}

      {/* <Counter/> */}
    </>
  )
}

export default App

