import React from "react";
import { Switch, Route } from "react-router-dom";

import Planning from "./content/1-Planning";
import Construction from "./content/2-Construction";
import Installation from "./content/3-Installation";
import Build from "./content/4-Build";
import ProjectManagement from "./content/5-ProjectManagement";
import { Container, SubHeading, Sections } from "./Services.style";
import Main from "./Main.js";

class Services extends React.Component {
  componentWillMount() {
    if (this.props.location.pathname !== "/services") {
      this.props.history.push("/services");
    }
  }
  render() {
    return (
      <Container>
        <Sections>
          <SubHeading to={`/services/build`}>Products</SubHeading>
          <SubHeading to={`/services/planning`}>Planning & Design</SubHeading>
          <SubHeading to={`/services/construct`}>Construction</SubHeading>
          <SubHeading to={`/services/install`}>Installation</SubHeading>
          <SubHeading to={`/services/project`}>Projects Management</SubHeading>
        </Sections>
        <div>
          <h1 className="title">Services</h1>
          <Switch>
            <Route exact path={`/services`} component={Main} />
            <Route path={`/services/build`} component={Build} />
            <Route path={`/services/planning`} component={Planning} />
            <Route path={`/services/construct`} component={Construction} />
            <Route path={`/services/install`} component={Installation} />
            <Route path={`/services/project`} component={ProjectManagement} />
          </Switch>
        </div>
      </Container>
    );
  }
}

export default Services;
