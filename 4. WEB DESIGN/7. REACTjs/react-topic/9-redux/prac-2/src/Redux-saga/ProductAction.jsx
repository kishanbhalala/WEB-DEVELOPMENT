import { PRODUCT_LIST, SEARCH_PRODUCT } from "./Constant";

export const ProductList = () => {
    // let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    // data = await data.json()
    // console.warn("action is called", data)

    return {
        type: PRODUCT_LIST,
        // data: "apple"
    }
}

export const ProductSearch = (query) => {

    return {
        type: SEARCH_PRODUCT,
        query,
        
    }
}
// export const setProductList = () => {
//     console.warn("set action");
//     return {
//         type: SET_PRODUCT_LIST,
//         data
//     }
// }