import React from 'react'

const ClickOn1 = () => {
    /* React Events Handling */
    function alerts() {
        alert("you are clicked me orange!");
    }
    const handleClick = () => {
        alert("you are using function gray!");
    }
    const all = () => {
        alerts();
        handleClick();
    }

    return (
        <div>
            <h1 className='ml-80'>React onClick Events 1</h1>
            <button className="px-12 h-16 w-48 bg-orange-700 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={alerts}>Click</button>

            <button className="px-12 h-16 w-48 bg-gray-500 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={handleClick}>Click</button>

            <button className="px-12 h-16 w-48 bg-green-700 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={all}>Click</button>
        </div>
    )
}

export default ClickOn1
