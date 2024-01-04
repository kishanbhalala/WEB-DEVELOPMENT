import React from 'react'

const Button = ({handlClick, children}) => {
console.log(`Rendering button function - `,children);
  return (
    <>
        <button className='button' onClick={handlClick}>{children}</button>
    </>
  )
}

export default React.memo(Button)
