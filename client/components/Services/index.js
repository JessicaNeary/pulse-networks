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
          <div className='subheading'>
            <Link className='link' to='/services/1'>Planning & Design</Link>
            <div className='expanded'>
              <img src='/images/services/presentation.svg' className='icon' />
              {this.props.planning}
            </div>
          </div>
          <div className='subheading'>
            <Link className='link' to='/services/2'>Construction</Link>
            <div className='expanded'>
              <img src='/images/services/tools.svg' className='icon' />
              {this.props.construct}
            </div>
          </div>
          <div className='subheading'>
            <Link className='link' to='/services/3'>Installation</Link>
            <div className='expanded'>
              <img src='/images/services/cone.svg' className='icon small' />
              {this.props.install}
            </div>
          </div>
          <div className='subheading'>
            <Link className='link' to='/services/4'>As Builds & Drafting</Link>
            <div className='expanded'>
              <img src='/images/services/squares.svg' className='icon big' />
              {this.props.build}
            </div>
          </div>
          <div className='subheading'>
            <Link className='link' to='/services/5'>Project Management</Link>
            <div className='expanded'>
              <img src='/images/services/folder.svg' className='icon big' />
              {this.props.project}
            </div>
          </div>
        </div>
      </div>
    )
  }
})
