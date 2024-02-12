import React from 'react'

const ClickOn2 = () => {

    const btn = () => {
        alert("you are use first function ");
    }
    const all = () => {
        alert("kishan");
        btn();
    }
    
    return (
        <div>
            <h1 className="text-6xl">React onClick Events 2</h1>
            
            <button className="px-12 h-16 w-48 bg-orange-700 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={() => alert("direct inner calling function ")}>Click1</button>

            <button className="px-12 h-16 w-48 bg-gray-500 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={btn}>Click2</button>

            <button className="px-12 h-16 w-48 bg-green-700 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={all}>Click3</button>
        </div>
    )
}

export default ClickOn2
