import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    if (action.type === "Increment") {
        return state + 1
    }
    if (action.type === "Decrement") {
        return state - 1
    }
    if (action.type === "Reset") {
        return initialState
    }
    return state
}



const BasicProgram = () => {

    const [state, dispatch] = useReducer(reducer, initialState)


    const Increment = () => {
        dispatch({ type: "Increment" })
    }

    const Decrement = () => {
        dispatch({ type: "Decrement" })
    }
    const Reset = () => {
        dispatch({ type: "Reset" })
    }

    return (
        <div>
            <span className="button">{state}</span>
            <button className="button" onClick={Increment}>Increment</button>
            <button className="button" onClick={Decrement}>Decerement</button>
            <button className="button" onClick={Reset}>Reset</button>
        </div>
    )
}

export default BasicProgram
