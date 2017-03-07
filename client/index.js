import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Route>
      </Router>
    ),
    document.getElementById('app')
  )
})
