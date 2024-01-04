import React, { useContext } from 'react'
import { countingContext } from './Counter'

const Compo_F = () => {
    const countContext = useContext(countingContext)
  return (
    <>
      <div>
        <div className='bg-yellow-300'>
            <button className='button'onClick={() => countContext.countDispatch('inc')}>increment</button>
            <button className='button'onClick={() => countContext.countDispatch('dec')}>decrement</button>
            <button className='button'onClick={() => countContext.countDispatch('reset')}>reset</button>
        </div>
        <div>
            <h1 className='text-4xl text-center'>Comonent F</h1>
        </div> 
      </div>
    </>
  )
}

export default Compo_F
