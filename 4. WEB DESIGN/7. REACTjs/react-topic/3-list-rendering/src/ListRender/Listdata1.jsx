import React from 'react'
import List from './ListData'



const Listdata1 = () => {

    const ListItem = List.filter(List => List.title === 'car')
    
    return (
        <div>
            <ul>
                {
                    ListItem.map(List => <li>{List.total}</li>)
                }
            </ul>
        </div>
    )
}

export default Listdata1
