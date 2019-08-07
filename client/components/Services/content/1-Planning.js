import React from "react";
import styled from "styled-components";

import { Item, Icon, Title } from "../Services.style";
import { Copy } from "../../SharedStyles.style";

const PlanningTitle = styled(Title)`
  @media (max-width: 768px) {
    margin: 0 0 -25px;
    top: -25px;
  }
`;

const Planning = ({ mobile }) => {
  return (
    <Item>
      <Icon src="/images/services/planning.svg" alt="planning icon" />
      {mobile && <PlanningTitle>Planning</PlanningTitle>}
      <Copy center={mobile}>
        <p>
          Pulse Networks provides detailed planning and design so that there are
          no surprises.
        </p>
        <p>
          All aspects are documented so that contractors and staff know what to
          do and what is expected.
        </p>
        <p>
          Our services include feasibility studies, route surveys, consent
          applications and obstructions plans, as well as duct plans, network
          design, fibre schematics and equipment layouts.
        </p>
      </Copy>
    </Item>
  );
};

export default Planning;
