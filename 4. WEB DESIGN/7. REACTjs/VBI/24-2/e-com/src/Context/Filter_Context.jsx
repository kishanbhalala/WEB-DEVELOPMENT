import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../reducer/FilterReducer'

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "Lowest",
    filters: {
        text: "",
        category: "All",
        company: "All",
        color: "All",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
};

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();
    // console.log("filter-context-product", products);

    const [state, dispatch] = useReducer(reducer, initialState)

    //  set the grid view 
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }
    //  set the list view 
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }

    // sorting function
    const sorting = (e) => {
        let userValue = e.target.value;
        return dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }

    // update the filter value 
    const updateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
    }

    // All clear Filters 
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    }

    // To sort the filter 
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [products, state.sorting_value, state.filters])



    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>
        {children}
    </FilterContext.Provider>
}

export const useFiterContext = () => {
    return useContext(FilterContext);
}