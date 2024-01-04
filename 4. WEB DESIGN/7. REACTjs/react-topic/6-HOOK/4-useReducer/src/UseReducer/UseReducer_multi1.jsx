import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { firstCounter: state.firstCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const UseReducer_multi1 = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div className='button bg-green-600'>{count.firstCounter}</div>
            <button className='button' onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment 1</button>
            <button className='button' onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement 1</button>
            <button className='button' onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button className='button' onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <button className='button' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </>
    )
}

export default UseReducer_multi1
