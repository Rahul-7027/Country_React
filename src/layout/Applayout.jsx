import React from 'react'

import { Outlet } from 'react-router-dom'
import HeaderPage from './UI/HeaderPage'

const Applayout = () => {
  return (
    <div>
      {/* <HeaderPage/> */}
      <Outlet/>
    </div>
  )
}

export default Applayout
