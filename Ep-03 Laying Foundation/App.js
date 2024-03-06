import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abcdfff" }, //this is called attribute
//   "Hello World with React!" //this is called children
// ); // It is an object

// console.log(heading); //// It will console like an object

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

const Heading = <h1 id="heading">Namaste React JSX Tutorial !!</h1>;

// If it's in multiple line, so we have to wrap it in "( )" brackets
// (
//   <h1 id="heading">
//     Namaste React JSX Tutorial !!
//     </h1>
// )

console.log(Heading); // It will console like an object

// React Component
// Class based Component - OLD
// Functional Component - NEW

const elem = <span>Irfan is here</span>;

// React Functional Component
const title = <h1>{elem} Namaste React using JSX Functional Component</h1>;

const number = 100;

const Title = () => (
  <h1>
    All the elements using JSX
  </h1>
);

// It is also same as up one.
// Component Composition
const Headingcomponent = () => (
  <div id="container">
    {title}
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent />);
