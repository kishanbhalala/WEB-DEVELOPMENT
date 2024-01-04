import { buyCake, buyFood } from "./Type"

const initialState = {
    numOfcake: 10,
    numOffood: 20,
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case buyCake: return {
            ...state,
            // numOfcake: state.numOfcake - 1,
            numOfcake: state.numOfcake > 0 ? state.numOfcake - 1 : 0,
        }
        case buyFood: return {
            ...state,
            // numOffood: state.numOffood - 2,
            numOffood: state.numOffood > 0 ? state.numOffood - 2 : alert("foods is empty"),
        }
        
        default: return state
    }
}