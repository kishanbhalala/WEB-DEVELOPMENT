import React from 'react'

const Recipe = ({drink}) => {
  return (
    <ol>
        <li>boil {drink}  cups of water.</li>
        <li>Add {drink} spoons of tea and {0.5 * drink} spoons of spice</li>
        <li>Add {0.5 * drink} cups of milk to boil and sugar to taste.</li>
    </ol>
  )
}

export default Recipe
