import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Orders from "./pages/orders/Orders";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";

import './app.scss'
import MyGigs from "./pages/MyGigs/MyGigs";


function App() {

  // const [projects, setProjects] = useState([])
  // const [item, setItem] = useState([])

  // const onChange = (arr) => {
  //    if(item.length === 0 ){
  //      useEffect( ()=>{
  //       getItem()
  //      },[])
  //   }
  //   return 
  // }
  // console.log(item)

  // const getItem = async() => {
  //   await fetch(`https://641c56281a68dc9e4606d9a3.mockapi.io/projects?id=${arr.id}`).then(res => res.json()).then(data => setItem(data))
  // }

  // useEffect(() => {
  //   fetch('https://641c56281a68dc9e4606d9a3.mockapi.io/projects').then(res => res.json()).then(data => setProjects(data))
  // },[])


  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/gigs", element: <Gigs/> },
        { path: "/mygigs", element: <MyGigs /> },
        { path: "/gig/:id", element: <Gig    /> },
        { path: "/orders", element: <Orders /> },
        { path: "/add", element: <Add /> },
        { path: "/messages", element: <Messages /> },
        { path: "/message/:id", element: <Message /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
