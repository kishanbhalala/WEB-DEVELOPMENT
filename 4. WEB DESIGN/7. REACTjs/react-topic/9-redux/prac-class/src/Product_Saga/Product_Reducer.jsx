import { PRODUCT_ADD, PRODUCT_EMPTY, PRODUCT_REMOVE } from "./Product_Type";

const Product_Reducer = (data = [], action) => {

    switch (action.type) {

        case PRODUCT_ADD:
            console.log('reducer add called', data);
            return [action.data, ...data];

        case PRODUCT_REMOVE:
            console.log('reducer remove called', data);
            data.length = data.length ? data.length - 1 : []
            return [...data];

        case PRODUCT_EMPTY:
            console.log('reducer remove called', data);
            data = []
            return [...data];

        default: return data
    }
}

export default Product_Reducer