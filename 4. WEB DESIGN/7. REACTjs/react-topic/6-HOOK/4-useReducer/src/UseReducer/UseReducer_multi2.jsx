import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 20,
}

const reducer = (state, action) => {
    switch (action.type) {

        case 'inc1':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'dec1':
            return { ...state, firstCounter: state.firstCounter - action.value }

        case 'inc2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'dec2':
            return { ...state, secondCounter: state.secondCounter - action.value }

        case 'reset':
            return initialState;
        default:
            return state;
    }
}
const UseReducer_multi2 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>

            <div className='flex'>
                <div className='button bg-gray-600'>First Counter : {count.firstCounter}</div>
                <div className='button bg-gray-600'>Second Counter : {count.secondCounter}</div>
            </div>

            <div className='flex'>
                <div>
                    <div>
                        <button className='button' onClick={() => dispatch({ type: 'inc1', value: 1 })}>First Increment +1</button>
                        <button className='button' onClick={() => dispatch({ type: 'dec1', value: 1 })}>First Decrement -1</button>
                    </div>
                    <div>
                        <button className='button' onClick={() => dispatch({ type: 'inc1', value: 5 })}>First Increment +5</button>
                        <button className='button' onClick={() => dispatch({ type: 'dec1', value: 5 })}>First Decrement -5</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button className='button' onClick={() => dispatch({ type: 'inc2', value: 2 })}>Second Increment +2</button>
                        <button className='button' onClick={() => dispatch({ type: 'dec2', value: 4 })}>Second Decrement -4</button>
                    </div>
                    <div>
                        <button className='button' onClick={() => dispatch({ type: 'inc2', value: 10 })}>Second Increment +10</button>
                        <button className='button' onClick={() => dispatch({ type: 'dec2', value: 10 })}>Second Decrement -10</button>
                    </div>
                </div>
            </div>
            <div className='button bg-red-400' onClick={() => dispatch({ type: 'reset' })}>Reset All</div>
        </>
    )
}

export default UseReducer_multi2
