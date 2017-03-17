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
            <img src='/images/services/presentation.svg' />
            <div className='content'>
              {this.props.planning}
            </div>
          </div>
          <div className='subheading'>
            <Link className='link' to='/services/2'>Construction</Link>
            <img src='/images/services/tools.svg' />
            <div className='content'>
              {this.props.construct}
            </div>
          </div>
          <div className='subheading'>
            <Link className='link' to='/services/3'>Installation</Link>
            <img src='/images/services/cone.svg' className='small' />
            <div className='content'>
              {this.props.install}
            </div>
          </div>
          <div className='subheading'>
            <Link className='link' to='/services/4'>As Builds & Drafting</Link>
            <img src='/images/services/squares.svg' className='big' />
            <div className='content'>
              {this.props.build}
            </div>
          </div>
          <div className='subheading'>
            <Link className='link' to='/services/5'>Project Management</Link>
            <img src='/images/services/folder.svg' className='big' />
            <div className='content'>
              {this.props.project}
            </div>
          </div>
        </div>
      </div>
    )
  }
})
