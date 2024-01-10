// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import productSaga from './ProductSaga'
import RootReducer from "./RootReducer";
import createSagaMiddleware from 'redux-saga'

// const store = createStore(RootReducer)

const SagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: RootReducer,
    middleware: () => [SagaMiddleware]
})

SagaMiddleware.run(productSaga);
export default store