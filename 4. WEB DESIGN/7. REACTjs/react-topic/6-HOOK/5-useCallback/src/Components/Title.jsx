import React from 'react'

const Title = () => {
    console.log("Rendering Title function");
  return (
    <>
      <h1 className='text-3xl font-bold ml-2'>useCallback Hook</h1>
    </>
  )
}

export default React.memo(Title)
