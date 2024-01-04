// what is useState :-

// this hook allows you to add state to functional components. it returns a state variable and a function to update that variable. 
// આ હૂક તમને કાર્યાત્મક ઘટકોમાં રાજ્ય ઉમેરવાની મંજૂરી આપે છે. તે ચલને અપડેટ કરવા માટે સ્ટેટ વેરીએબલ અને ફંક્શન પરત કરે છે.

// we initialize our state by calling useState in our function components.
// અમે અમારા ફંક્શન ઘટકોમાં useState કૉલ કરીને અમારી સ્થિતિ શરૂ કરીએ છીએ.

// useState accepts an initial state and returns two values:-
// -> The current state.
// -> A function that updates the state.


// syntax :- 
// import { useState } from "react";
// function Color() {
//     const [color, setColor] = useState("");
// }
// color is state variable
// setColor is state updater function 


// What can state hold?
// the useState Hook can be used to keep tract of

// -> strings
// -> numbers
// -> booleans
// -> arrays
// -> objects, and
// -> any combination of these!



// Read & updates State :-
//  Read State - after initialize we can include our State anywhere in our Component.
// રાજ્ય વાંચો - પ્રારંભ કર્યા પછી અમે અમારા ઘટકમાં ગમે ત્યાં અમારા રાજ્યનો સમાવેશ કરી શકીએ છીએ.

// update - to update our state, we use our state updater function.
// અપડેટ - અમારા રાજ્યને અપડેટ કરવા માટે, અમે અમારા સ્ટેટ અપડેટર ફંક્શનનો ઉપયોગ કરીએ છીએ.

    // note:- we should never directly update state.
// ex:-  color = "red" is not allowed