import { useState } from 'react'

 const Title = () => 
    (
    <a href="/">
  <img className="logo" src={require('../../icon.png')} alt="Icon"/>
  </a>
)


const Header = () => {
  let [isloggedIn, setIsLoggedIn] = useState(false)
  const title ="Discount Villa"
    return (
      <div className="header">
        <Title/>
        <h1>{title}</h1>
       <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
       </div>
       {
        isloggedIn ?  <button  onClick={() =>{
          isloggedIn = !isloggedIn
          setIsLoggedIn(isloggedIn)
        }}>Logout</button> :  <button onClick={() =>{
          isloggedIn = !isloggedIn
          setIsLoggedIn(isloggedIn)
        }}>Login</button>
       }
      
      
      </div>
    )
  }

export default Header;