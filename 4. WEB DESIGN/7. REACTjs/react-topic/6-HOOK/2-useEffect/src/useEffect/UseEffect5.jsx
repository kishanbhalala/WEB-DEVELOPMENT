import React, { useEffect } from 'react'

const UseEffect5 = ({e}) => {
    useEffect(() => {
        const id = setInterval(() => {
            console.log(e);
        }, 2000);
        return () => {
            clearInterval(id)
        };
    },[e]);

    return <div>I'm logging to console {e}</div>;
}

export default UseEffect5
