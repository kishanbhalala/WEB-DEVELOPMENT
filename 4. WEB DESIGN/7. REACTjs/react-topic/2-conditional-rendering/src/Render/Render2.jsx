import React from 'react'

const ItemStatus = ({Item,ItemPacked}) => {
    return(
        <>
            <h1>this is item section {Item}</h1>
            <h1>this is item section {ItemPacked}</h1>
        </>
    )
}

const Render2 = () => {
  return (
    <div>
      <ItemStatus Item = "OnePlus 9" ItemPacked={false}/>
    </div>
  )
}

export default Render2
