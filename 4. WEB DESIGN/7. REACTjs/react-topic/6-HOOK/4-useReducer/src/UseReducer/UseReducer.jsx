import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'incre':
            return state + 1
        case 'decre':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div className='button'>{count}</div>
            <button className='button' onClick={() => dispatch('incre')}>Increment</button>
            <button className='button' onClick={() => dispatch('decre')}>Decrement</button>
            <button className='button' onClick={() => dispatch('reset')}>Reset</button>
        </>
    )
}

export default UseReducer
