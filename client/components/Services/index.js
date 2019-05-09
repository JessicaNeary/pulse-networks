import React from "react";
import { PoseGroup } from "react-pose";

import Planning from "./content/1-Planning";
import Construction from "./content/2-Construction";
import Installation from "./content/3-Installation";
import Products from "./content/4-Products";
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
    const current = this.state.showSection;
    return (
      <Container>
        <Sections>
          <SectionLink active={current === "1"} onClick={this.changeTo("1")}>
            Products
          </SectionLink>
          <SectionLink active={current === "2"} onClick={this.changeTo("2")}>
            Planning & Design
          </SectionLink>
          <SectionLink active={current === "3"} onClick={this.changeTo("3")}>
            Construction
          </SectionLink>
          <SectionLink active={current === "4"} onClick={this.changeTo("4")}>
            Installation
          </SectionLink>
          <SectionLink active={current === "5"} onClick={this.changeTo("5")}>
            Project Management
          </SectionLink>
        </Sections>
        <Content>
          <Title onClick={this.changeTo("0")}>Services</Title>
          <PoseGroup enterPose="center" exitPose="right" preEnterPose="left">
            <BodyTransition key={current}>
              {BodyContent[current]}
            </BodyTransition>
          </PoseGroup>
        </Content>
      </Container>
    );
  }
}

const BodyContent = [
  <Main />,
  <Products />,
  <Planning />,
  <Construction />,
  <Installation />,
  <ProjectManagement />
];

export const SectionLink = ({ onClick, active, children }) => (
  <LinkWrapper onClick={onClick}>
    <SubHeading>{children}</SubHeading>
    <Beam pose={active ? "show" : "hide"} />
  </LinkWrapper>
);

export default Services;
