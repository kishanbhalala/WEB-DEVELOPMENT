import React from 'react'

const ItemStatus = ({ Item, ItemPacked }) => {
    return (
        <li>
            {ItemPacked ? <del>{Item}</del> : (Item)}
        </li>
    );  
}

const Render6 = () => {
    return (
        <div>
            <ItemStatus Item="OnePlus 9" ItemPacked={false} />
            <ItemStatus Item="Iphone 15" ItemPacked={true} />
            <ItemStatus Item="Samsung Altra" ItemPacked={false} />
            <ItemStatus Item="Oppo" ItemPacked={true} />
        </div>
    )
}

export default Render6
