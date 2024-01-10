import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./Constant";

export const cartData = (data = [], action) => {

    switch (action.type) {

        case ADD_TO_CART:
            console.warn("Add to Cart condition", action);
            return [action.data, ...data];

        case REMOVE_TO_CART:
            console.warn("Remove to Cart condition", action);
            // data.length = data.length ? data.length - 1 : [];
            const remainingItem = data.filter((item) => item.id !== action.data);
            
            return [...remainingItem];

        case EMPTY_CART:
            console.warn("empty Cart condition", action);
            data = []
            return [...data];

        default:
            return data;
    }
}




// => action thi data lay ne store ma moklvanu kam kre che...
// => store ni ander na data ne pn handle kre che...(update)
// => reducer ni ander return statment and initial value hovi j joie...