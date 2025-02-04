import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const Error = () => {
    const errorPage=useRouteError()
  return (
    <div>
      <h1>Oops! Encountered</h1>
      {errorPage && <p>{errorPage.data}</p>}
      <button><NavLink to="/">Go Home</NavLink></button>
    </div>
  )
}

export default Error
