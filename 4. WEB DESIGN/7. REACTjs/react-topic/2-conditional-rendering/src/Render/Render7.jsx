import React from 'react'

const ItemStatus = ({ Item, ItemPacked }) => {
    return (
        <li>
            {Item} {ItemPacked || "Empty Item"}
            {/* {Item} {ItemPacked && "is Empty Item"} */}
        </li>
    );
}

const Render7 = () => {
    return (
        <div>
            <ItemStatus Item="OnePlus 9" ItemPacked={false} />
            <ItemStatus Item="Iphone 15" ItemPacked={false} />
            <ItemStatus Item="Samsung Altra" ItemPacked={true} />
            <ItemStatus Item="Oppo" ItemPacked={true} />
        </div>
    )
}

export default Render7
