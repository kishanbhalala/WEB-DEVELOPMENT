import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { ProductSearch } from '../Redux-saga/ProductAction';

const Header = () => {
    const result = useSelector((state) => state.cartData)

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div className='cart-div flex justify-between items-center mb-10 bg-pink-400 p-5'>
                    <Link to="/" className='text-2xl font-bold'>E-Commere</Link>
                    <div>
                        <input onChange={(event) => dispatch(ProductSearch(event.target.value))} type="search" placeholder='search product' />
                    </div>
                    <Link to="/Cart" className='border p-4 mb-4 bg-yellow-300'>
                        <span>order : {result.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
