import React from 'react'

const ClickOn4 = () => {
    // passing a function 
    // calling a function 

    const abc = () => {
        alert("you are use the function")
    }
    return (
        <>
            <h1 className='font-extrabold text-5xl'>auto called function bcz use calling function </h1>
            <div>
                <button className='button' onClick={abc()}>click me</button>
            </div>
        </>
    )
}

export default ClickOn4
