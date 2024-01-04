import React from 'react'

const List = [
    'kishan bhalala',
    'jeegar bhalala',
    'sagar bhalala',
    'urvesh kordiya',
    'prashant surani',
    'jenish shiyani',
    'mehul parmar',
    'ravi savaliya'
]

const Listrender1 = () => {
    const ListItem = List.map(List => <td className='border-2 border-red-600'>{List}</td>);
    return (
        <tr>
            {ListItem}
        </tr>
    )
}
export default Listrender1
