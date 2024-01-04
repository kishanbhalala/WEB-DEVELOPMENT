import React, { useState } from 'react'


// without useMemo Hook 

const Count2 = () => {

    const [counterOne, setCounterOne] = useState(10)
    const [counterTwo, setCounterTwo] = useState(10)

    const incrementOne = () => {
        setCounterOne(counterOne + 5)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 5)
    }

    // const isEven = () => {
    //     for (let i = 0; i < 2000000000; i++)
    //         return counterOne % 2 === 0
    // }

    const isEven = () => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }

    return (
        <>
            <div>

                <div>
                    <button className='btn1' onClick={incrementOne}>countOne - {counterOne} </button>

                    <span>{isEven() ? 'Even' : 'Odd'}</span>
                </div>


                <button className='btn2' onClick={incrementTwo}>countTwo - {counterTwo} </button>

            </div>
        </>
    )
}

export default Count2
