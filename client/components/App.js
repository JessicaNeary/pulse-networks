import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render () {
    return (
      <div>
        <Header />
        <embed className='banner' src='/pulsenetworks_banner.swf' />
        <div className='pages'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
})
