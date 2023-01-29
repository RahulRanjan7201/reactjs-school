import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "title1", key: "h1" },
  "Hello from React Class"
);
console.log(heading);
// JSX way
const heading1 = (
  <h1 id="heading" key="h2">
    Hello React
  </h1>
);
const HeadingComponent = () => {
  return <h1>React Functional Component </h1>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
root.render(heading);
