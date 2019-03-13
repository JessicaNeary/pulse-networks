import React from "react";
import { Switch, Route } from "react-router-dom";

import Planning from "./content/1-Planning";
import Construction from "./content/2-Construction";
import Installation from "./content/3-Installation";
import Build from "./content/4-Build";
import ProjectManagement from "./content/5-ProjectManagement";
import {
  Container,
  Title,
  Sections,
  LinkWrapper,
  SubHeading,
  Beam
} from "./Services.style";
import Main from "./Main.js";

class Services extends React.Component {
  render() {
    return (
      <Container>
        <Sections>
          <SectionLink to={`/services/build`}>Products</SectionLink>
          <SectionLink to={`/services/planning`}>Planning & Design</SectionLink>
          <SectionLink to={`/services/construct`}>Construction</SectionLink>
          <SectionLink to={`/services/install`}>Installation</SectionLink>
          <SectionLink to={`/services/project`}>
            Projects Management
          </SectionLink>
        </Sections>
        <div>
          <Title>Services</Title>
          <Body />
        </div>
      </Container>
    );
  }
}

const Body = () => (
  <Switch>
    <Route exact path={`/services`} component={Main} />
    <Route path={`/services/build`} component={Build} />
    <Route path={`/services/planning`} component={Planning} />
    <Route path={`/services/construct`} component={Construction} />
    <Route path={`/services/install`} component={Installation} />
    <Route path={`/services/project`} component={ProjectManagement} />
  </Switch>
);

export const SectionLink = ({ to, children }) => (
  <LinkWrapper>
    <SubHeading
      activeStyle={{
        boxShadow: " 6px 0 5px -4px white"
      }}
      to={to}
    >
      {children}
    </SubHeading>
    <Beam />
  </LinkWrapper>
);

export default Services;
