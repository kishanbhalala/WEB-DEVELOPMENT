import React, { useEffect, useState } from 'react'

const Task1 = () => {
    const [val, setval] = useState("");

    useEffect(() => {
        // console.log(val);
        document.title = ` ${val} `
    }, [val]);
    
    const changes = (e) => {
        setval(e.target.value);
    }
    return (
        <>
            <h2>Get DropDown Selected Value</h2>
            <select onChange={changes}>
                <option> </option>
                <option>chrome</option>
                <option>safari</option>
                <option>mozila</option>
            </select>

            <h1>selected :- {val} </h1>
        </>
    )
}

export default Task1
