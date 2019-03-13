import React, { Component } from "react";
import { PoseGroup } from "react-pose";

import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import { FadeTransition } from "./SharedStyles.style";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <PoseGroup>
          <FadeTransition key={this.props.location.key}>
            <Switch location={this.props.location}>
              <Route exact path="/" key="home" component={Home} />
              <Route path="/services" key="services" component={Services} />
              <Route path="/projects" key="projects" component={Projects} />
              <Route path="/contact" key="contact" component={Contact} />
            </Switch>
          </FadeTransition>
        </PoseGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
