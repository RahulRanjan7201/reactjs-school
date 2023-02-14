import { useState } from 'react'
import {Link} from 'react-router-dom'
 const Title = () => 
    (
    <a href="/">
  <img className="logo" src={require('../assets/imgs/icon.png')} alt="Icon"/>
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
          <Link to="\">
          <li>Home</li>
          </Link>
          <Link to="/about">
          <li >About</li>
          </Link>
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