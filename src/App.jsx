import React from 'react'
import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'

export default function App() {

  let routes =  createBrowserRouter([{
    path:"", element:<Layout/>, children:[
      {index:true,element:<Home/>},
      {path:"about", element:<About/>},
      {path:"portfolio", element:<Portfolio/>},
      {path:"about", element:<About/>},
      {path:"contact", element:<Contact/>}
    ]
  }])
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
