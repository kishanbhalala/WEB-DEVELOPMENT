import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './Constant'

function* getProducts() {
    let data = yield fetch("https://jsonplaceholder.typicode.com/posts");
    data = yield data.json()
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* searchProducts(data) {
    let result = yield fetch(`https://jsonplaceholder.typicode.com/posts?q=${data.query}`);
    result = yield result.json();
    // console.warn(data);
    yield put({ type: SEARCH_PRODUCT, data:result })
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}

export default productSaga















// function*  = genrator function... aync opration ne handle krva mate use thay..
// jyare aapde async opration kriye ne tyre te complate thy jay pchi j result return kre che

