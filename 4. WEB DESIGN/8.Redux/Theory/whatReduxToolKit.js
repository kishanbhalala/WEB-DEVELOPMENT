// What is Redux Toolkit ? :-

// A set of tools to simplify working with Redux, a state management library for JavaScript apps.
// Aims to reduce boilerplate code, make code more readable, and enforce best practices.
// Easier state management in React components, Recommended as the standard way to write Redux logic.

// જાવાસ્ક્રિપ્ટ એપ્લિકેશન્સ માટે સ્ટેટ મેનેજમેન્ટ લાઇબ્રેરી, Redux સાથે કામ કરવાનું સરળ બનાવવા માટેના સાધનોનો સમૂહ.
// બોઈલરપ્લેટ કોડ ઘટાડવાનો, કોડને વધુ વાંચવાયોગ્ય બનાવવાનો અને શ્રેષ્ઠ પ્રયાસોને લાગુ કરવાનો હેતુ છે.
// પ્રતિક્રિયા ઘટકોમાં સરળ રાજ્ય વ્યવસ્થાપન, Redux લોજિક લખવાની પ્રમાણભૂત રીત તરીકે ભલામણ કરેલ.


// RTK Functions & Utilities :-
// Most useful functions, components, and methods

// • configureStore()
// • < Provider />

// • useSelector()
// • useDispatch()

// • createSlice()
// • extraReducers

// • createAsyncThunk()


// 1. configureStore() :-

// • Creates the Redux store with recommended defaults.
// • Automatically includes middleware like Redux Thunk for async actions.

// -> example :-
// import { configureStore } from '@reduxjs/toolkit';
// const store = configureStore({
//     reducer: {
//         /* your reducers */
//     }
// });
// export default store;


// 2. <Provider> :-
// • Provides access to the Redux store throughout a React application.
// • Acts as a bridge between React components and the Redux store.
// • Eliminates the need for manual prop drilling to pass state down the component tree.

// -> example :-
// import { Provider } from 'react-redux';
// import store from './store'; // Your Redux store instance
// function App() {
//     return (
//         < Provider store={store}>
//             {/* Your app components here */}
//         </ Provider>
//     );
// }


// 3. createSlice( )  :-

// • Simplifies reducer creation for a specific slice of state. Generates action creators and action types automatically. Handles immutable updates with Immer

// -> example :-
// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: { value: 0 },
//     reducers: {
//         increment: (state) => {
//             state.value += 1;
//         },
//     },
// });
// // Export the action creator
// export const { increment } = counterSlice.actions;
// // Export the reducer
// export default counterSlice.reducer;


// 4. useDispatch :-
// • React hook for dispatching actions from components.

// const dispatch = useDispatch;
// dispatch (increment());


// 5. useSelector :-
// • React hook for accessing Redux state in components.

// const count = useSelector((state) =>
//     state.counter.value
// );


// 6. create AsyncThunk() :-

// 1. createAsyncThunk:
// • Part of Redux Toolkit.
// • Generates asynchronous action creators
// • Takes an action type string and an async function.

// • Action Type :
// • First argument to createAsynchunk.
// • String format: "posts/fetchPosts".
// • Represents action type during async operation stages.

// 3. Async Function :
// • Second argument to createAsyncThunk.
// • Contains asynchronous logic (e.g., fetching data).