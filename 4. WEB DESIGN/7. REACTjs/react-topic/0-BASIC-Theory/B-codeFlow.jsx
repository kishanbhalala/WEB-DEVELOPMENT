// reactJs code flow :-

// • Component Rendering :
// React is a component-based library, and everything starts with components.
// You create reusable components using React's Component or Functional Component syntax. 
// Components are responsible for rendering the Ul and managing their own state and props.


// • Component Hierarchy :
// Components can be nested within each other, forming a component hierarchy.
//  The parent component can pass data (props) to its child components.

// • State & Props :
// components can have two types of data: state and props. 
// State represents the internal data of a component, and it can be changed by the component itself using setState(). 
// Props are passed down from parent components to child components and are read-only.

// • Rendering :
// When a component's state or props change, React triggers a re-render of that component and its child components.
// The render method of each component is called, generating a virtual representation of the component's UI.

// • Virtual DOM :
// React uses a virtual representation of the actual DOM called the Virtual DOM.
// It's a lightweight copy of the real DOM.
// During the rendering process, React creates a new virtual DOM representation, compares it with the previous one, and identifies the differences (referred to as the "diffing" process).

// • Reconciliation :
// React efficiently updates only the necessary parts of the real DOM based on the differences found in the virtual DOM.
// This process is called reconciliation, and it helps optimize performance by minimizing unnecessary DOM manipulations.

// • Event Handling :
// React provides a synthetic event system that abstracts away the differences between browsers.
// You can attach event handlers to components and respond to user interactions, such as button clicks or form submissions.

// • Lifecycle Methods :
// React components have lifecycle methods that allow you to hook into different stages of a component's life, such as initialization, rendering, and unmounting.
// You can use these methods to perform actions like fetching data, subscribing to events, or cleaning up resources.

// • Updating State/Props :
// When a component's state or props need to be updated, you can use setState() to modify the state.
// React will then re-render the component and its children, reflecting the updated data in the Ul.

// • Comp Communiction :
// Components can communicate with each other through props. 
// Data can be passed from parent to child components, and child components can notify parent components of changes using callback functions.