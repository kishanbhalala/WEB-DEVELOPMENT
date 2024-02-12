import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [plus,setPlus] = useState(0)
    const [minus,setMinus] = useState(10)

    const multi = useMemo(function multiply () {
        console.log("*******");
        return plus * 10;
    },[plus])

  return (
    <div>

        <h1>{multi}</h1><br/>
        <button onClick={() => setPlus(plus + 1)}>addition</button>
        <span>{plus}</span> <br/>
        <button onClick={() => setMinus(minus - 10)}>substration</button>
        <span>{minus}</span>
    </div>
  )
}

export default UseMemo
