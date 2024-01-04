import React, { useEffect } from 'react'

const UseEffect4 = ({ mess }) => {
    useEffect(() => {
        setInterval(()=>{
            console.log(mess);
        },2000)
    },[mess]);

    return (
        <div>
               i m loggin to console "{mess}" 
        </div>
    )
}

export default UseEffect4
