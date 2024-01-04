import React from 'react'
import { useState } from 'react'

const Practice = () => {

    const [loggedIn, setLoggedIn] = useState(true)
    if (loggedIn) {
        return (
            <div>
                <h1>chai</h1>
            </div>
        )
    } else  {   
        return (
            <div>
                <h1>coffee</h1>
            </div>
        )
    }
}


// const Practice = () => {
//     var [loggedIn] = useState(1)
//     return (
//         <div>       
//             {loggedIn == 1 ? <h1>tea</h1> : loggedIn == 2 ? <h1>coffee</h1> : <h1>other</h1>}
//         </div>
//     )
// }

// const Food = ({ Item, Availble }) => {
//     if (Availble) {
//         return <li>Item is {Item} is Availble</li>
//     }
//     return <li>Item Is {Item} nothing</li>
// }


// const Practice = () => {
    
//     return (
//         <div>
//             <Food Item="burgur" Availble={true} />
//             <Food Item="Pizza" Availble={true} />
//             <Food Item="Sandwich" Availble={false} />
//             <Food Item="chips" Availble={true} />
//             <Food Item="Momos" Availble={false} />
//         </div>
//     )
// }






export default Practice
