import React from "react";
import ReactDOM from "react-dom/client";
const header = () => {
 return  (
  <div className="main">
    <span>Icon</span>
    <span>Search Bar </span>
  </div>
)
  }
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
root.render(header());
