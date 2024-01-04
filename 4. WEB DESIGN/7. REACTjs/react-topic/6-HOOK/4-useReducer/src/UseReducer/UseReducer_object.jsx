import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + 1 }
        case 'decrement':
            return {firstCounter: state.firstCounter - 1}
        case 'reset' :
            return initialState
        default:
            return state
    }
}

const UseReducer_object = () => {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div className='button bg-red-500'>{count.firstCounter}</div>
            <button className='button'onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button className='button'onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button className='button'onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </>
    )
}

export default UseReducer_object
