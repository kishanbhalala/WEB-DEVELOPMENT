import { PRODUCT_LIST,  SET_PRODUCT_LIST } from ''
import { takeEvery, put } from 'redux-saga/effects'


function* getProducts() {
    let data = yield fetch("https://jsonplaceholder.typicode.com/posts");
    data = yield data.json()
    yield put({ type: SET_PRODUCT_LIST, data })
}


function* saga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
}

export default saga