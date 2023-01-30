import React from "react";
import ReactDOM from "react-dom/client";
const header =(
  <div className="title">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
)
 
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
root.render(header);
