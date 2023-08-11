import React from 'react'
import { Link } from 'react-router-dom'
import Homepage from '../pages/Homepage'

const Navbar = () => {
  return (
    <div>
      <Link to={'/'}>HomePage</Link>
      <Link to={'/login'}>LoginPage</Link>
      <Link to={'/cart'}>CartPage</Link>
    </div>
  )
}

export default Navbar
