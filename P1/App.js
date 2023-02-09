import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => 
    (
    <a href="/">
  <img className="logo" src={require('./icon.png')} alt="Icon"/>
  </a>
)

const Header = () => {
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
const Body = () => {
  return (
    <div className="offer-list">
      <OffersCard offer={offerlist[0]}/>
      <OffersCard offer={offerlist[1]}/>
     
    </div>
  )
}
const Footer = () => {
  return (
    <h4>Footer</h4>
  )
}
const offerlist = [
  {
  name:"Burger Singh",
  cusines:["Indian Style", "My TEST"],
  rating:"4.2"
},
{
  name:"Burger Singh",
  cusines:["Indian Style", "My TEST"],
  rating:"4.2"
},
{
  name:"Burger Singh",
  cusines:["Indian Style", "My TEST"],
  rating:"4.2"
},
{
  name:"Burger Singh",
  cusines:["Indian Style", "My TEST"],
  rating:"4.2"
},
{
  name:"Burger Singh",
  cusines:["Indian Style", "My TEST"],
  rating:"4.2"
},
{
  name:"Burger Singh",
  cusines:["Indian Style", "My TEST"],
  rating:"4.2"
},
{
  name:"Burger Singh",
  cusines:["Indian Style", "My TEST"],
  rating:"4.2"
},
{
  name:"Burger Singh",
  cusines:["Indian Style", "My TEST"],
  rating:"4.2"
},
{
  name:"Burger Singh",
  cusines:["Indian Style", "My TEST"],
  rating:"4.2"
},
 ]
const OffersCard =({offer}) => {
  return (
    <div className="offers-cart">
      <img   src="https://moneyexcel.com/images/special_offers.png" alt="Icon"/>
      <h2>{offer?.name}</h2>
      <h3>{offer.cusines.join(" , ")}</h3>
      <h4>{offer?.rating} stars</h4>
    </div>
  )
}
const AppLayout = () => {
  return (
    <>
    <></>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
root.render(<AppLayout/>);
