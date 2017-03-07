import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return(
    <div className='header'>
      <Link to='/'>Home</Link>
      <Link to='/services'>Services</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Header
