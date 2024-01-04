//1. What is Prop Drilling?

// In React, "prop drilling" refers to the process of passing data from a high-level component down to a deep-level component through intermediate components that do not need the data themselves.
// This can happen when components in a component tree need access to shared data, but they are not direct descendants of each other.


// Prop Drilling | Process :-

// • App component has the data t GrandchildComponent needs.
// • App passes the data as a prop to ParentComponent.
// • ParentComponent passes the same data as a prop to ChildComponent.
// • ChildComponent finally passes the data as a prop to GrandchildComponent.



//2. Whats Is HOC? :-

// In React, a Higher-Order Component (HOC) is a function that takes a component as an input and returns a new enhanced component as output.
// It's like a special function that can make your components more powerful and add extra functionality to them.

// const EnhancedComponent = withExtraFunctionality(OriginalComponent);
// const IronMan = withSuit(TonyStark)