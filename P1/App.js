import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => {
  return  (
  <h1 id="title" key="h1">
    Offers Villa 
  </h1>
)
}
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title/>
     <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
     </div>
    </div>
  )
}

const AppLayout = () => {
  return {}
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
root.render(<HeaderComponent/>);
