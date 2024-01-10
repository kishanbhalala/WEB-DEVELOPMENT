import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./Constant";

export const addToCart = (data) => {
    console.warn("action add called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) => {
    console.warn("action remove cart", data)
    return {
        type: REMOVE_TO_CART,
        data
    }
}

export const emptyCart = (data) => {
    console.warn("action empty cart", data)
    return {
        type: EMPTY_CART,
    }
}



// => action nu kam reactJs mathi data leva and reducer ne data pass krva..
// => action and reducer ni ander type define hovo j joie tyre j smji skse..bne same hova joye..