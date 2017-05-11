import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render () {
    return (
      <div>
        <Header />
        <div className='banner'>
          <object type="image/svg+xml" data="PulseBanner_1_0.svg"></object>
        </div>
        <div className='pages'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
})
