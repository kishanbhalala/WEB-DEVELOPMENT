import React, { useReducer } from 'react'

// multiple reducer 
const initialState = {
    firstCounter: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'i':
            return { firstCounter: state.firstCounter + 1 }
        case 'd':
            return { firstCounter: state.firstCounter - 1 }
        case 'r':
            return initialState
        default:
            return state
    }
}

const UseReducer_multi3 = () => {
    const [count1, dispatch1] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)

    return (
        <>
            <div className='flex'>
                <div>
                    <div className='button bg-sky-400'>{count1.firstCounter}</div>
                    <button className='button' onClick={() => dispatch1({ type: 'i' })}>inc</button>
                    <button className='button' onClick={() => dispatch1({ type: 'd' })}>dec</button>
                    <button className='button' onClick={() => dispatch1({ type: 'r' })}>reset</button>
                </div>
                <div>
                    <div className='button bg-teal-500'>{count2.firstCounter}</div>
                    <button className='button' onClick={() => dispatch2({ type: 'i' })}>inc</button>
                    <button className='button' onClick={() => dispatch2({ type: 'd' })}>dec</button>
                    <button className='button' onClick={() => dispatch2({ type: 'r' })}>reset</button>
                </div>
            </div>  
        </>
    )
}

export default UseReducer_multi3
