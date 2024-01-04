const redux = require("redux")
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_PASTRY = 'BUY_PASTRY'

function buyCake(){
    return{
         type:BUY_CAKE,
         info:'First redux action'
    }
}
function buyPastry(){
    return{
         type:BUY_PASTRY,
         info:'Second redux action'
    }
}

const initialState = {
    numOfCakes:10,
    numOfPastries:20,
}

const Cakereducer = (state = initialState  , action) => {
    switch(action.type){
         case BUY_CAKE:return{
              ...state,
              numOfCakes:state.numOfCakes - 1
         }
         default:return state
    }
}

const Pastrireducer = (state = initialState  , action) => {
    switch(action.type){
         case BUY_PASTRY:return{
              ...state,
              numOfPastries:state.numOfPastries - 1
         }
         default:return state
    }
}

const store1 = createStore(Cakereducer)
console.log('Initial State store1' , store1.getState());
const unsubscribe1 = store1.subscribe(() => console.log('Updated state store1' , store1.getState()))

store1.dispatch(buyCake())
store1.dispatch(buyCake())

unsubscribe1()


const store2 = createStore(Pastrireducer)
console.log('Initial State store2' , store2.getState());
const unsubscribe2 = store2.subscribe(() => console.log('Updated state store2' , store2.getState()))

store2.dispatch(buyPastry())
store2.dispatch(buyPastry())
unsubscribe2()