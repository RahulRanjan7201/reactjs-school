import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import store from '../utils/store'
import useOnline from '../utils/useOnline'
import UserContext from '../utils/userContext'
 const Title = () => 
    (
    <a href="/">
  <img className="h-28 p-2" src={require('../assets/imgs/icon.png')} alt="Icon"/>
  </a>
)


const Header = () => {
  let [isloggedIn, setIsLoggedIn] = useState(false)
  const isOnline = useOnline();
  const {user} = useContext(UserContext); 
  const cartItems = useSelector(store => store.cart.items);
    return (
      <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
        <Title/>
       <div className="nav-items">
        <ul className='flex py-10 '>
          <Link to="/">
          <li className='px-10'>Home</li>
          </Link>
          <Link to="/about">
          <li  className='px-10'>About</li>
          </Link>
          <Link to="/contact">
          <li  className='px-10'>Contact</li>
          </Link>
          
          <Link to="/instamart">
          <li  className='px-10'>InstaMart</li>
          </Link>
          <Link to="/cart">
          <li  className='px-10'>Cart - {cartItems.length} items</li>
          </Link>
        </ul>
       </div>
       <h1 className='p-10'>{isOnline ? '🟢' : '🔴'}</h1>
       <h1 className='p-10 font-bold text-red-900'>{ user?.name}</h1>
       
       
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