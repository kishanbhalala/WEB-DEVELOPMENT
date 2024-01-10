
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../Store/Slices/CartSlices';

const ProductCard = (props) => {
    const { img, title, price } = props;
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const item = { ...props };
        dispatch(addItem(item));
        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 3000)
    };

    return (
        <div>
            <div className='product_card'>
                <figure>
                    <img src={img} alt="Product Image" />
                </figure>

                <h4>{title}</h4>

                <h3>${price.toLocalString()}</h3>

                <button type='button' className={`btn ${isAdded ? 'added' : ''}`} onClick={handleAddToCart}>
                    {!isAdded ? "Added" : "Added to Cart"}
                </button>
                
            </div>
        </div>
    )
}

export default ProductCard
