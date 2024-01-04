import React from 'react'
import useCounter from './useCounter';

const Custom2 = () => {
    const [count, Increment, Decrement] = useCounter(20);
    return (
        <>
            <div>
                <h1 className='ml-5 text-3xl'>Custom hook 2</h1>
                <span className="button bg-yellow-400">{count}</span>
                <button className="button bg-yellow-400" onClick={Increment}>
                    Increment
                </button>
                <button className="button bg-yellow-400" onClick={Decrement}>
                    Decrement
                </button>
            </div>
        </>
    )
}

export default Custom2
