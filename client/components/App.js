import React, { Component } from "react";
import { PoseGroup } from "react-pose";
import { Route, Switch, withRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Home from "./Home";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import { Page, FadeTransition } from "./SharedStyles.style";

class App extends Component {
  render() {
    return (
      <Page>
        <div>
          <Header />
          <Banner />
          <PoseGroup>
            <FadeTransition key={this.props.location.pathname}>
              <Switch location={this.props.location}>
                <Route path="/services" key="/services" component={Services} />
                <Route path="/projects" key="/projects" component={Projects} />
                <Route path="/contact" key="/contact" component={Contact} />
                <Route path="/" key="/" component={Home} />
              </Switch>
            </FadeTransition>
          </PoseGroup>
        </div>
        <Footer />
      </Page>
    );
  }
}

export default withRouter(App);
