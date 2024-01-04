// what is components :-

// React components are reusable building blocks in the React JS library.
// They encapsulate a piece of Ul and its associated logic, allowing you to compose complex user interfaces from smaller, self-contained parts.

// The Components can be divided into two types:
// • functional components
// • class components.

// • functional components
// Functional components are defined as JavaScript functions. 
// They receive input data as properties (props) and return React elements.

// example :-
// import React from 'react';
// function MyComponent(props) {
//     return <div>Hello, {props.name}!</div>;
// }
// export default MyComponent;

// • class components :-
// Class components are defined as JavaScript classes that extend the React.Component base class.
// They have more advanced features such as local component state and lifecycle methods.
// This is no longer necessary to learn as a React developer, but it can still benefit you to learn it

// example :-
// import React from "react";
// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//     handleClick() {
//         this.setState({ count: this.state.count + 1 });
//     }
//     render() {
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={() => this.handleClick()}>
//                     Increment</button>
//             </div>
//         );
//     }
// }
// export default MyComponent;
