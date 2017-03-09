import React from 'react'

import Header from './Header'

export default React.createClass({
  render () {
    return (
      <div>
        <Header />
        <embed className='banner' src='/pulsenetworks_banner.swf' />
        {this.props.children}
      </div>
    )
  }
})
