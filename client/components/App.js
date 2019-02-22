import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'

class App extends Component {
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
};

export default App;
