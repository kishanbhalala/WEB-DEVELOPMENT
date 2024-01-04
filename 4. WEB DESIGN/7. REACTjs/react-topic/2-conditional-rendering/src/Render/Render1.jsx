import React from 'react'

const Item = ({ Update }) => {
  return (
    <>
      <h1>Conditional Rendering in React {Update}</h1>
    </>
  )
}


const Render1 = () => {
  return (
    <div>
      <Item Update="Kishan bhalala" />
    </div>
  )
}

export default Render1