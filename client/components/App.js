import React from 'react'

import Header from './Header'

export default React.createClass({
  render () {
    return (
      <div>
        <Header />
        <h1>Pulse Networks</h1>
        {this.props.children}
      </div>
    )
  }
})
