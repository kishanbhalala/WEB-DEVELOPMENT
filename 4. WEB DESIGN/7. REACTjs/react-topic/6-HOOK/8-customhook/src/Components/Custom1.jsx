import React from 'react'
import useCounter from './useCounter'

const Custom1 = () => {
    const [count, Increment, Decrement] = useCounter(10);
    return (
        <>
            <div>
                <h1 className='ml-5 text-3xl'>Custom hook 1</h1>
                <span className="button">{count}</span>
                <button className="button" onClick={Increment}>
                    Increment
                </button>
                <button className="button" onClick={Decrement}>
                    Decrement
                </button>
            </div>
        </>
    )
}

export default Custom1
