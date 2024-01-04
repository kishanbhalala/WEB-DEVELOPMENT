import React from 'react'

const ItemStatus = ({Item, ItemPacked}) => {
    if (ItemPacked) {
        return null;
    }
    return <li>{Item}</li>
}

const Render4 = () => {
  return (
    <div>
      <ItemStatus Item="OnePlus 9" ItemPacked={true}/>
      <ItemStatus Item="Iphone 15" ItemPacked={false}/>
      <ItemStatus Item="Samsung Altra" ItemPacked={false}/>
      <ItemStatus Item="Oppo" ItemPacked={true}/>
    </div>
  )
}

export default Render4
