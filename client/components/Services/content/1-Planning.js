import React from "react";

import { Item, Icon, Title } from "../Services.style";
import { Copy } from "../../SharedStyles.style";

const Planning = ({ mobile }) => {
  return (
    <Item mobile={mobile}>
      <Icon src="/images/services/planning.svg" />
      {mobile && <Title mobile={mobile}>Planning</Title>}
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
