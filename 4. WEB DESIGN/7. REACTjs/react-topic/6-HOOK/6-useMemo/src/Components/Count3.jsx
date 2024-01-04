import React, { useMemo, useState } from 'react'

// using useMemo Hook 

const Count3 = () => {

    const [counterOne, setCounterOne] = useState(5)
    const [counterTwo, setCounterTwo] = useState(5)

    const incrementOne = () => {
        setCounterOne(counterOne + 5)
        console.log("jjj");
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 5)
    }

    // const isEven = () => {
    //     for (let i = 0; i < 2000000000; i++)
    //         return counterOne % 2 === 0
    // }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
        
    },[counterOne])

    return (
        <>
            <div>

                <div>
                    <button className='btn1' onClick={incrementOne}>countOne - {counterOne} </button>

                    <span>{isEven ? 'Even' : 'Odd'}</span>
                </div>


                <button className='btn2' onClick={incrementTwo}>countTwo - {counterTwo} </button>

            </div>
        </>
    )
}

export default Count3
