import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./Constant";

export const productData = (data = [], action) => {

    switch (action.type) {
        // case PRODUCT_LIST:
        //     console.warn("PRODUCT_LIST called", action);
        //     return [action.data];
        case SET_PRODUCT_LIST:
            console.warn("SET_LIST called", action);
            return [...action.data];
        default:
            return data;
    }
}



