import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "title1", key: "h1" },
  "Hello from React Class"
);
const Title =() => {
  return <h1>My name is ... I forgot</h1>
}
const HeadingComponent = () => {
  return (
    <div>
      {heading}
      <Title/>
      {Title()}
      <h1>Hello</h1>
      <h2>Bye</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
root.render(<HeadingComponent/>);
