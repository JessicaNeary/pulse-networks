import React from 'react'
import { Link } from 'react-router'

import Main from './Main.js'

export default React.createClass({
  render() {
    return(
      <div className='services'>
        <Link to='/services'>
          <h1 className='title'>Services</h1>
        </Link>

        <Main />

        <div className='nav'>
          <Link to='/services/1'>Planning & Design</Link>
          <Link to='/services/2'>Construction</Link>
          <Link to='/services/3'>Installation</Link>
          <Link to='/services/4'>As Builds & Drafting</Link>
          <Link to='/services/5'>Project Management</Link>
        </div>

        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
})
