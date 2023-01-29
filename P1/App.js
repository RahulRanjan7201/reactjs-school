import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "title1" },
  "Hello from React Class"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Hello from React Class 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
root.render(container);
