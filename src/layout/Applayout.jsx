import React from 'react'

import { Outlet } from 'react-router-dom'
import Home from "../pages/HomePage/Home"
import AllSection from '../pages/AllSection'
import Footer from "./UI/Footer"

const Applayout = () => {
  return (
    <div>
      <AllSection/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Applayout
