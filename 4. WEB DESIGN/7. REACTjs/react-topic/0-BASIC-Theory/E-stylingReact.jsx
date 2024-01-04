// Styling React JS :-

// In React.js, there are several ways to apply styling to components. Here are some common approaches:
// • Inline Styles
// • CSS Modules
// • CSS-in-JS Libraries
// • External CSS Files
// • CSS Preprocessors


// • Inline Styles :-
// You can apply inline styles directly to JSX elements using the style attribute.
// The style attribute takes a JavaScript object with camel-cased CSS property-value pairs.

// const styles = {
//     color: "red",
//     fontSize: "16px"
// };
// <div style={styles}>Hello World</div>;


// • CSS Modules :-
// CSS Modules allow you to write CSS stylesheets and import them as Javascript modules.
// CSS class names are scoped locally to the component, preventing style conflicts.
// You can import the CSS file and use the defined class names in your JSX code

// import styles from "./styles. module.css";
// <div className={styles.container}>Hello</div>;


// • CSS-in-JS Libraries :-
// CSS-in-JS libraries are a popular approach for styling in React.js that allows you to write CSS directly in your JavaScript code. such as styled-
// components, emotion, etc..

// import styled from "styled-components";
// const StyledDiv = styled.div`
// color: red;
// font-size: 16px;
// `;
// <StyledDiv>Hello World</StyledDiv>;


// • External CSS Files :-
// You can also use traditional external CSS files and import them into your components.
// In this case, you import the CSS file and add the corresponding class names to your JSX elements.
// The styles defined in the external CSS file will be applied globally

// import "./styles.css";
// <div className="container">Hello World</div>;


// • CSS Preprocessors :-
// eact supports the use of CSS preprocessors like Sass, Less, or Stylus.
// You can write your styles using the preprocessor syntax and compile them into regular CSS that can be imported and used in your React components.