import React, { useReducer } from 'react'
import Compo_A from './Compo_A';
import Compo_B from './Compo_B';
import Compo_C from './Compo_C';
import Compo_D from './Compo_D';

export const countingContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        case 'reset':
            return initialState
        default:
            return state;
    }
}
const Counter = () => {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <countingContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <div className='button bg-teal-500'>{count}</div>

            <div className='flex'>
                <Compo_A />
                <Compo_B />
                <Compo_D/>
            </div>
        </countingContext.Provider>
    )
}

export default Counter
