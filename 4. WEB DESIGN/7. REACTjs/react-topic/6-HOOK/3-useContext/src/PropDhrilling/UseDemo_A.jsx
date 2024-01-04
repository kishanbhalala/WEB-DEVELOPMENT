import React from 'react'
import UseDemo_B from './UseDemo_B'


const UseDemo_A = ({surname}) => {
  return (
    <div>
      <UseDemo_B surname={surname}/>
    </div>
  )
}

export default UseDemo_A
