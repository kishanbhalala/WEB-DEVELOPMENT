import React from 'react'
import { useState } from 'react'

const StatewithObject = () => {
    const [bike, setBike] = useState({
        brand: "ducati",
        model: "panigale",
        year: "2023",
        color: "red"
    });

    const updateColor = () => {
        setBike(previosState => {
            return {...previosState, color:"black"}
        })
    }
    return (
        <div>
            <h1>Bikes :- </h1>
            <p>my fav bike is {bike.brand} {bike.model} it is a {bike.color} from {bike.year}</p>

            <button style={{border:"2px solid gray"}} onClick={updateColor}>black color</button>
        </div>
    )
}

export default StatewithObject
