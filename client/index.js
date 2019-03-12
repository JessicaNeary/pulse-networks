import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/App";
import Home from "./components/Home";
import Services from "./components/Services";
import Planning from "./components/Services/content/1-Planning";
import Construction from "./components/Services/content/2-Construction";
import Installation from "./components/Services/content/3-Installation";
import Build from "./components/Services/content/4-Build";
import ProjectManagement from "./components/Services/content/5-ProjectManagement";
import Projects from "./components/Projects";
import Fibre from "./components/Projects/content/1-Fibre";
import Telephony from "./components/Projects/content/2-Telephony";
import CATV from "./components/Projects/content/3-CATV";
import Radio from "./components/Projects/content/4-Radio";
import Other from "./components/Projects/content/5-Other";
import Contact from "./components/Contact";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route c path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </App>
    </BrowserRouter>,
    document.getElementById("app")
  );
});
// <Route path='planning' component={{planning: Planning}} />
// <Route path='construct' component={{construct: Construction}} />
// <Route path='install' component={{install: Installation}} />
// <Route path='build' component={{build: Build}} />
// <Route path='project' component={{project: ProjectManagement}} />

// <Route path='1' component={Fibre} />
// <Route path='2' component={Telephony} />
// <Route path='3' component={CATV} />
// <Route path='4' component={Radio} />
// <Route path='5' component={Other} />
