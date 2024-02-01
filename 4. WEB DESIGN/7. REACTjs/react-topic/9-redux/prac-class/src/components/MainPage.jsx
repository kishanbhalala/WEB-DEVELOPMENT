import React from 'react'
import { useDispatch } from "react-redux"
import { Product_Add_Cart, Product_Empty_Cart, Product_Remove_Cart } from '../Product_Saga/Product_action';
import { AddToCart, EmptyCart, RemoveToCart } from '../React_Redux/action';

const MainPage = () => {
    const dispatch = useDispatch();

    const product = {
        name: 'iPhone',
        price: 1099,
        type: "mobile",
    }
    return (
        <div>
            <div className='font-extrabold text-4xl text-center my-10'>
                <h1>home page</h1>
            </div>
            <div className='text-center'>
                <button className='border p-4 bg-red-400' onClick={() => dispatch(AddToCart(product))}>Add To Cart</button>
                <button className='border p-4 bg-red-400' onClick={() => dispatch(RemoveToCart(product))}>Remove To Cart</button>
                <button className='border p-4 bg-red-400' onClick={() => dispatch(EmptyCart(product))}>Empty To Cart</button>

                {/* <button className='border p-4 mx-2 bg-purple-600 text-white' onClick={() => dispatch(Product_Add_Cart(product))}>product_Add</button>
                <button className='border p-4 mx-2 bg-purple-600 text-white' onClick={() => dispatch(Product_Remove_Cart(product))}>product_Remove</button>
                <button className='border p-4 mx-2 bg-purple-600 text-white' onClick={() => dispatch(Product_Empty_Cart(product))}>product_Empty</button> */}
            </div>
        </div>
    )
}

export default MainPage
