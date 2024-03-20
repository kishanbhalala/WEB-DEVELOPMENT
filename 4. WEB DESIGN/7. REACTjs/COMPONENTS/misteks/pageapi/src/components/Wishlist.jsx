import React, { useEffect, useState } from 'react'
import { useWishContext } from '../Context/WishContext'
import { useCartContext } from '../Context/CartContext';
import { FaMinus, FaPlus } from "react-icons/fa";
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const Wishlist = () => {

  const { wish, wishRemoveItem, incrementWishQuantity, decrementWishQuantity } = useWishContext();
  console.log("www", wish);

  const { addtocart } = useCartContext()
  // console.log("aaa",addtocart);
  


  if (wish.length === 0) {
    return <div className='container mx-auto h-96 grid place-content-center'>
      <h1 className='text-6xl'>No Cart In Item</h1>
    </div>
  }


  return (

    <div className='container mx-auto mt-10'>
      <hr className='pt-5' />
      <div className='flex justify-between font-semibold text-xs sm:text-base pb-3 px-5'>
        <div className='flex'>
          <p>Image</p>
          <p>Name</p>
        </div>
        <p className=''>Price</p>
        <p className=''>Quantity</p>
        <div className='flex'>
          <p>AddCart/</p>
          <p>Remove</p>
        </div>
      </div>
      <hr className='pb-5' />


      <div>
        {
          wish?.map((item) => {
            console.log("wish item", item)

            return (
              <>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                    <img src={item?.image} alt="" className='w-16 rounded-full' />
                    <span> {item?.title?.en}</span>
                  </div>
                  <div>
                    {item?.prices?.price} 
                  </div>
                  <div className='flex space-x-2'>
                    <button onClick={() => decrementWishQuantity(item?.productId)}><FaMinus /></button>
                    <p className='w-10 text-center'>{item?.quantity}</p>
                    <button onClick={() => incrementWishQuantity(item?.productId)}><FaPlus /></button>
                  </div>

                  <div>
                    <NavLink to="/cart">
                      <button className='border p-2 bg-blue-300 hover:bg-blue-400' onClick={() => addtocart(item)}>Add to cart</button>
                    </NavLink>
                    <button className='border p-2 bg-blue-300 hover:bg-blue-400' onClick={() => wishRemoveItem(item?.productId)}>Remove</button>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>

  )
}

export default Wishlist
