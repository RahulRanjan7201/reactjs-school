import React from "react";
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
        element:<About/>
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
      }
    ]
  },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
root.render(<RouterProvider router={appRouter} />);
