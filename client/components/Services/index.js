import React from "react";
import { PoseGroup } from "react-pose";

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
  Beam,
  BodyTransition,
  Content
} from "./Services.style";
import Main from "./Main.js";

class Services extends React.Component {
  state = {
    showSection: "0"
  };
  changeTo = index => () => {
    this.setState({ showSection: index });
  };
  render() {
    return (
      <Container>
        <Sections>
          <SectionLink onClick={this.changeTo("1")}>Products</SectionLink>
          <SectionLink onClick={this.changeTo("2")}>
            Planning & Design
          </SectionLink>
          <SectionLink onClick={this.changeTo("3")}>Construction</SectionLink>
          <SectionLink onClick={this.changeTo("4")}>Installation</SectionLink>
          <SectionLink onClick={this.changeTo("5")}>
            Projects Management
          </SectionLink>
        </Sections>
        <Content>
          <Title>Services</Title>
          <PoseGroup enterPose="center" exitPose="right" preEnterPose="left">
            <BodyTransition key={this.state.showSection}>
              {BodyContent[this.state.showSection]}
            </BodyTransition>
          </PoseGroup>
        </Content>
      </Container>
    );
  }
}

const BodyContent = [
  <Main />,
  <Build />,
  <Planning />,
  <Construction />,
  <Installation />,
  <ProjectManagement />
];

export const SectionLink = ({ onClick, children }) => (
  <LinkWrapper onClick={onClick}>
    <SubHeading>{children}</SubHeading>
    <Beam />
  </LinkWrapper>
);

export default Services;
