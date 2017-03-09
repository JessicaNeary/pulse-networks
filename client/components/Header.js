import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return(
    <div className='header'>
      <ul>
        <li className='title'><h2>Pulse Networks</h2></li>
        <li><Link className='tab' to='/'>Home</Link></li>
        <li><Link className='tab' to='/services'>Services</Link></li>
        <li><Link className='tab' to='/projects'>Projects</Link></li>
        <li><Link className='tab' to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header
