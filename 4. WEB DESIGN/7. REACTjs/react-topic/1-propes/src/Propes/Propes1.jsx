import React from 'react'

export const Propes1 = (p) => {

  return (
    <div>
      <h1 className='font-extrabold text-2xl grid place-items-center text-red-600'>{p.text.name}</h1>
      <h1 className='font-extrabold text-2xl grid place-items-center text-yellow-600'>{p.data}</h1>
    </div>
  )
}


