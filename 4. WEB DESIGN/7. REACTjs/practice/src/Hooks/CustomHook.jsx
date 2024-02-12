import React from 'react'
import useCustom from './useCustom'

const CustomHook = () => {
    const [count,inc,dec] = useCustom()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default CustomHook
