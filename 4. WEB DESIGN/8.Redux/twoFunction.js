const redux = require("redux")
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_FOOD = 'BUY_FOOD'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}
function buyfood() {
    return {
        type: BUY_FOOD,
        info: 'second redux action'
    }
}

const initialState = {
    numOfCakes: 10,
    numOffood: 10,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes - 1
        }
        case BUY_FOOD:return{
            ...state,
            numOffood:state.numOffood - 1
        }
        default:return state
    }
}

const store = createStore(reducer)
console.log('Initial-State', store.getState());

const unsubscribe = store.subscribe(() => console.log('update-state',store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyfood())
store.dispatch(buyfood())

unsubscribe()