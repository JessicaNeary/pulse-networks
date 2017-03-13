import React from 'react'

import Header from './Header'
import Home from './Home'
import Services from './Services'
import Projects from './Projects'
import Contact from './Contact'

export default React.createClass({
  render () {
    return (
      <div>
        <Header />
        <embed className='banner' src='/pulsenetworks_banner.swf' />
        <Home />
        <Services />
        <Projects />
        <Contact />
      </div>
    )
  }
})
