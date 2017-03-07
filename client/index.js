import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Services from './components/Services'
  import Planning from './components/Services/content/1-Planning'
  import Construction from './components/Services/content/2-Construction'
  import Installation from './components/Services/content/3-Installation'
  import Build from './components/Services/content/4-Build'
  import ProjectManagement from './components/Services/content/5-ProjectManagement'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='services' component={Services}>

            <Route path='1' component={Planning} />
            <Route path='2' component={Construction} />
            <Route path='3' component={Installation} />
            <Route path='4' component={Build} />
            <Route path='5' component={ProjectManagement} />
          </Route>
          <Route path='projects' component={Projects} />
          <Route path='contact' component={Contact} />
        </Route>
      </Router>
    ),
    document.getElementById('app')
  )
})
