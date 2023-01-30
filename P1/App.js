import React from "react";
import ReactDOM from "react-dom/client";
const header = React.createElement(
  "div",
  {className:"title"},
  [React.createElement(
    "h1", 
    {},
    "Heading H1" ),
    React.createElement(
      "h2",
      {},
      "Heading h2"
    ),
    React.createElement(
      "h3",
      {},
      "Heading h3"
    )
  ] 

)
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
root.render(header);
