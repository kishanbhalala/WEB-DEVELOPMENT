import { configureStore } from '@reduxjs/toolkit';
import { Product_rootReducers } from './Product_RootReducer';


const store = configureStore(
    {
        reducer : Product_rootReducers,
    }
    );

export default store;