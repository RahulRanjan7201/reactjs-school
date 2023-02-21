import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body'
import Footer from "./components/Footer";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Offermenu from "./components/Offermenu";
import { Login } from "./components/Login";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";


const InstaMart = lazy(()=> import("./components/InstaMart"))
const AppLayout = () => {
  return (
    <>
    <Header/>
   <Outlet/>
    <Footer/>
    </>
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
        element:<About/>,
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
