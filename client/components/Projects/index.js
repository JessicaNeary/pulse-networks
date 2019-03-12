import React from "react";

import { Container, Title, Docs, Link, Main } from "./Projects.style";

const Projects = () => (
  <Container>
    <Main>
      <Title>Projects</Title>
      <p>
        {`Since our conception in 1995, Pulse Networks has completed a diverse
           range of projects. These have required an extensive knowledge of
           Telecommunications technologies and practices. In all instances, team work
           has been behind our success.`}
      </p>
      <p>
        {`We like to spend time with our clients developing a brief and formulating
          a scope of works that clearly defines project goals and outcomes. No two
          projects are the same, so it is important not to second guess the client
          and listen carefully while providing them with the benefit of
          our knowledge and experience.`}
      </p>
      <p>
        {`Pulse Networks works with other companies and external contractors, maintaining
          a close relationship that benefits all. This allows us to ramp up quickly for
          big projects and demobilise when the project comes to an end.`}
      </p>
    </Main>
    <div>
      <Docs>
        <Link target="_blank" href="docs/2Degrees-Cell-Site-Design.pdf">
          2Degrees Cell Site Planning and Design
        </Link>
        <Link target="_blank" href="docs/PD-CTL-FTTH-Design-Rev2.pdf">
          Citylink Auckland Fibre Network Design and Build
        </Link>
        <Link target="_blank" href="docs/PD-VCL-MD-Install.pdf">
          Vector Communications Microduct Installation
        </Link>
        <Link target="_blank" href="docs/PD-ENL-Material-Supply.pdf">
          Enable Networks Fibre Network Material Supply
        </Link>
        <Link target="_blank" href="docs/PD-TSL-Fibre-Design.pdf">
          Vodafone CBD Fibre Network Design
        </Link>
      </Docs>
    </div>
  </Container>
);

export default Projects;
