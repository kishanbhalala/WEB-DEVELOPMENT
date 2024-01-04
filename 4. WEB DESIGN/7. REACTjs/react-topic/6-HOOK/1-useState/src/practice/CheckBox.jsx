// checkbox checked = message you are clicked ! / unchecked message you do't clicked 

import React from 'react'
import { useState } from 'react'

const CheckBox = () => {
    const [check, setcheck] = useState(false)

    const changes = () => {
        // console.log(!check);
        setcheck(!check);
    }

    return (
        <div className='grid h-screen place-content-center'>
            <div>
                <input type="checkbox" onClick={changes} className='ml-12 mb-4'/>
                {
                    check ? <h1>you are clicked ! </h1> : <h1>you do't clicked </h1>
                }
            </div>
        </div>
    )
}

export default CheckBox
