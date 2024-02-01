import { PRODUCT_ADD, PRODUCT_EMPTY, PRODUCT_REMOVE } from "./Product_Type";


export const Product_Add_Cart = (data) => {

    console.log('add product', data);
    return{
        type : PRODUCT_ADD,
        data : data
    }
}

export const Product_Remove_Cart = (data) =>{
    console.log('remove product', data);
    return{
        type : PRODUCT_REMOVE,
        data : data
    }
}

export const Product_Empty_Cart = () =>{
    console.log('Empty Cart');
    return{
        type : PRODUCT_EMPTY,
    }
}