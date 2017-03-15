import React from 'react'
import { Link } from 'react-router'

import Main from './Main.js'

export default React.createClass({
  render () {
    return (
      <div className='services'>
        <h1 className='title'>Services</h1>

        <Main />

        <div className='nav'>
          <Link className='link 1' to='/services/1'>Planning & Design</Link>
          <Link className='link 2' to='/services/3'>Installation</Link>
          <Link className='link 3' to='/services/2'>Construction</Link>
          <Link className='link 4' to='/services/4'>As Builds & Drafting</Link>
          <Link className='link 5' to='/services/5'>Project Management</Link>
        </div>

        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
})
