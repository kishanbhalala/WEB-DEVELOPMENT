
import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./type";


const reducer = (data = [], action) => {

    switch (action.type) {

        case ADD_TO_CART:
            console.log('reducer add called', data);
            return [action.data, ...data];

        case REMOVE_TO_CART:
            console.log('reducer remove called', data);
            data.length = data.length ? data.length - 1 : []
            return [...data];

        case EMPTY_CART:
            console.log('reducer remove called', data);
            data = []
            return [...data];

        default: return data
    }
}

export default reducer