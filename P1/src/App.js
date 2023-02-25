import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body'
import Footer from "./components/Footer";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Error from "./components/Error";
import Contact from "./components/Contact";
import Offermenu from "./components/Offermenu";
import { Login } from "./components/Login";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";


const InstaMart = lazy(()=> import("./components/InstaMart"))
const About = lazy(() => import("./components/About"))
const AppLayout = () => {
  const [user, setUser] = useState({
    name:'Rahul Ranjan', 
    email:"rahul.ranjan72@hotmail.com"
  }) 
  useEffect(() => {
   // For auth and setUser 
  })
  return (
   <UserContext.Provider value={{
    user:user
   }}>
    <Header/>
   <Outlet/>
    <Footer/>
    </UserContext.Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      { 
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<div>Loading ...</div>}><About/></Suspense>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"offer/:id",
        element:<Offermenu/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/instamart",
        element:<Suspense fallback= {<Shimmer/>}><InstaMart/></Suspense>
      }
    ]
  },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
root.render(<RouterProvider router={appRouter} />);
