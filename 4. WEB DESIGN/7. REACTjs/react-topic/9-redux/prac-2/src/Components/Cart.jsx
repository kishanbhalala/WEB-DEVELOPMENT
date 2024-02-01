import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Cart = () => {
    const cartData = useSelector((state) => state.cartData);

    let amount = cartData.length && cartData.map(item => item.id).reduce((prev,next) => prev + next)
    console.warn(amount);

    return (
        <>
            <div className='text-center'>
                <Link to="/" className='text-2xl font-bold'>Product List</Link>
                <h1 >cart page</h1>
            </div>
            <div className='border flex justify-between'>
                <table className='w-full'>
                    <tr className='text-lg font-bold'>
                        <td className='w-20 border border-black'>price</td>
                        <td className='border border-black'>title</td>
                        <td className='border border-black'>body</td>
                    </tr>
                    {
                        cartData.map((item) => <tr key={item.id} className='border'>
                                <td className='border border-black'>{item.id}</td>
                                <td className='border border-black'>{item.title}</td>
                                <td className='border border-black'>{item.body}</td>
                            </tr>
                        )
                    }
                </table>
                <div className='price-detail ml-10 w-96 '>
                    <div><span className='w-28 mb-5  inline-block'>Amount</span><span>{amount}</span></div>
                    <div><span className='w-28 mb-5  inline-block'>Discount</span><span>{amount/5}</span></div>
                    <div><span className='w-28 mb-5  inline-block'>Tax</span><span>0000</span></div>
                    <div><span className='w-28 mb-5  inline-block'>Total</span><span>{amount-(amount/5)}</span></div>
                </div>
            </div>
        </>
    )
}

export default Cart
