import { ADD_TO_CART,EMPTY_CART,REMOVE_TO_CART } from "./type"

export const AddToCart = (data) => {
    console.log('add product', data);
    return{
        type : ADD_TO_CART,
        data : data
    }
}

export const RemoveToCart = (data) =>{
    console.log('remove product', data);
    return{
        type : REMOVE_TO_CART,
        data : data
    }
}

export const EmptyCart = () =>{
    console.log('Empty Cart');
    return{
        type : EMPTY_CART,
    }
}