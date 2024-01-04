import React, { useEffect } from 'react'

const UseEffect3 = ({val}) => {
    const message = `hello ${val}`;

    useEffect(() => {
        document.title = `greetings to ${val}`;
    },[val])
  return (
    <div>
       {message}
    </div>
  )
}

export default UseEffect3
