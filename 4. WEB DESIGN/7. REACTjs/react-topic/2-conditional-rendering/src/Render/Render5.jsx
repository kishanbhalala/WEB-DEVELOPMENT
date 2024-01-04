import React from 'react'

const ItemStatus = ({ Item, ItemPacked }) => {
    return (
        <li>
            {ItemPacked ? Item : null}
        </li>
    )
}

const Render5 = () => {
    return (
        <div>
            <ItemStatus Item="OnePlus 9" ItemPacked={false} />
            <ItemStatus Item="Iphone 15" ItemPacked={false} />
            <ItemStatus Item="Samsung Altra" ItemPacked={false} />
            <ItemStatus Item="Oppo" ItemPacked={true} />
        </div>
    )
}

export default Render5
