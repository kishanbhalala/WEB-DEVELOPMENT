import React, { useCallback, useState } from 'react'
import Child1 from './Child1';

const Task1 = () => {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(10);

    const Learning = useCallback(() => {

    }, [count])

    return (
        <>
            <h1 className='font-bold text-3xl'>useCallback</h1>

            <Child1 Learn={Learning} cou={count} />

            <h1 className='button bg-yellow-400'>{add}</h1>
            <button className='button' onClick={() => setAdd(add + 1)}>addition</button>

            <h1 className='button bg-yellow-400'>{count}</h1>
            <button className='button' onClick={() => setCount(count * 2)}>multiply</button>
        </>
    )
}

export default Task1
