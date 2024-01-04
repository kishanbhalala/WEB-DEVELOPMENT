import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    const [count, setcount] = useState(0);

    useEffect(() => {
        document.title = `you clicked ${count} times`;
        console.log(count);
    })

    return (
        <div>
            <button onClick={() => setcount((prevCount) => prevCount + 1)}>
                click {count} times{" "}
            </button>
        </div>
    )
}

export default UseEffect1
