import React, { useState } from 'react'

const Count1 = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = () => {
        return counterOne % 2 === 0
    }
    
    return (
        <>
            <div>

                <div>
                    <button className='btn1' onClick={incrementOne}>countOne - {counterOne}</button>

                    <span>{isEven() ? 'Even' : 'odd'}</span>
                </div>

                <button className='btn2' onClick={incrementTwo}>countTwo - {counterTwo}</button>

            </div>
        </>
    )
}

export default Count1
