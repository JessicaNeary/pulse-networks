import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render () {
    return (
      <div>
        <Header />
        <div className='banner'>
          <embed className='image' src='/pulsenetworks_banner.swf' />
        </div>
        <div className='pages'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
})
