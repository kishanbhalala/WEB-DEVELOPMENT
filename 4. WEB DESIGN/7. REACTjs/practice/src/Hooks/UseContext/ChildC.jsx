import React, { useContext } from 'react'
import { data, data1 } from './UseContext';


const ChildC = () => {
    const name = useContext(data);
    const surname = useContext(data1);
  return (
    <div>
        <h1>my name is {name} {surname}</h1>
    </div>
  )
}

export default ChildC
