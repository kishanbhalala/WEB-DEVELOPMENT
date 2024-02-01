import React from 'react'

const Cart = () => {
    return (
        <>
            <div>

                <div>
                    <h1 className='font-extrabold text-4xl text-center my-10'>cart page</h1>
                </div>

                <div className='border flex justify-between'>
                    <table className='w-full'>
                        <tr className='text-lg font-bold'>
                            <td className='border border-black'>name</td>
                            <td className='border border-black'>price</td>
                            <td className='border border-black'>type</td>
                        </tr>


                        <td className='border border-black'></td>
                        <td className='border border-black'></td>
                        <td className='border border-black'></td>

                    </table>
                    <div className='price-detail ml-10 w-96 '>
                        <div><span className='w-28 mb-5  inline-block'>Amount</span><span>0000</span></div>
                        <div><span className='w-28 mb-5  inline-block'>Discount</span><span>0000</span></div>
                        <div><span className='w-28 mb-5  inline-block'>Tax</span><span>0000</span></div>
                        <div><span className='w-28 mb-5  inline-block'>Total</span><span>0000</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
