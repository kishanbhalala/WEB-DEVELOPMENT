import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const result = useSelector((state) => state.reducer)
    console.log('call item' , result);

    return (
        <div>
            <div className='cart-div flex justify-between items-center mb-10 bg-yellow-400 p-10'>
                <Link to="/" className='text-2xl font-bold'>E-Commere</Link>
                <Link to="/Cart" className='border p-4 bg-pink-300'>
                    <span>order : {result.length} </span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
