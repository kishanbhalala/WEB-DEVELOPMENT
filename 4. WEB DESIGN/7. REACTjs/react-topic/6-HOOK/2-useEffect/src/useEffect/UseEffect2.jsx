import React from 'react'
import { useEffect } from 'react'

/* Mimic Lifecycle Methods Using UseEffect Hook */


/* componentDidMount */

// useEffect(()=>{
//     //You can add your code here for mounting phase of component
//     console.log("Mounting in Functional Component")
// },[])
// adding an empty array ensures that the useEffect is only triggered once 
// (when the component mounts)


/* componentDidUpdate */

// useEffect(()=>{
//     //You can add your code for updating phase of component
//     console.log("Updating in Functional Component")
// },[values])
//values triggers re render whenever they are updated in your program,
//you can add multiple values by separating them by commas


/*  componentWillUnmount */

// useEffect(()=>{
//     return()=>{
//     //You can add your code for unmounting phase of component
//     console.log("Functional Component Removed ")
//     }
// },[])

//Write all the code of unmounting phase only inside the callback function



// 1. To run useEffect on every render do not pass any dependency

// useEffect(()->{
//     // Example Code
// })

// 2. To run useEffect only once on the first render pass any empty array in the dependecy

// useEffect(()->{
//     // Example Code
// }, [] )

// 3. To run useEffect on change of a particular value. Pass the state and props in the dependency array

// useEffect(()->{
//     // Example Code
// }, [props, state] )


const UseEffect2 = ({names}) => {
    const message = `Hello, ${names}!`;

    useEffect(() => {
      document.title = `Greetings page ${names}`;
    });
  
    return <div>{message}</div>;
}

export default UseEffect2