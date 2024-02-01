import { addToCart, emptyCart, removeFromCart } from '../Redux-saga/Action';
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from '../Redux-saga/ProductAction';
import { useEffect } from 'react';


function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData);
    console.warn("data in main components...saga", data);
    const product = {
        name: 'i Phone',
        category: 'mobile',
        price: 10000,
        color: 'red'
    }

    useEffect(() => {
        dispatch(ProductList())
    }, [])

    return (
        <>
            <div className="App text-center">

            <button className='border border-black p-2' onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            <h1 className='text-2xl mb-10'>home page</h1>

                {/* <button className='border border-black' onClick={() => dispatch(addToCart(product))}>Add To Cart</button>

                <button className='border border-black' onClick={() => dispatch(removeFromCart(product))}>Remove Cart</button>

                <button className='border border-black' onClick={() => dispatch(emptyCart())}>Empty Cart</button>

                <button className='border border-black' onClick={() => dispatch(ProductList())}>Get a Produc List</button> */}

            </div>
            <div className='product-container grid grid-cols-5'>
                {
                    data.slice(0, 10).map((item) => <div key={item.id} className='border p-5'>

                        <div className='underline text-black-400 mb-4'>id : {item.id}</div>

                        <div className='underline text-blue-400 mb-4'>title : {item.title.slice(0,20)}</div>

                        <div className='underline text-pink-400  mb-4'>body : {item.body.slice(0,50)}</div>

                        <div>
                            <button onClick={() => dispatch(addToCart(item))} className='border p-2 mr-2'>Add</button>

                            <button onClick={() => dispatch(removeFromCart(item.id))}className='border p-2'>Remove</button>
                        </div>
                        
                    </div>)
                }
            </div>
        </>
    );
}

export default Main;

