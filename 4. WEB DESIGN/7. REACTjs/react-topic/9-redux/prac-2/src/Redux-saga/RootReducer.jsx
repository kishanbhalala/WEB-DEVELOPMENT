import { combineReducers } from "redux";
import { cartData } from "./Reducer";
import { productData } from "./ProductReducer";

export default combineReducers({
    cartData,
    productData,
})


// => project ni ander ek thi vadhare pn reducer hoi ske...but store ek j reducer ne connect kre ...atle jetla reducer bne tene ek j rootReducer ma combin kri devu