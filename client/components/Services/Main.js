import React from "react";
import styled from "styled-components";

import { Copy } from "../SharedStyles.style";

const MobileCopy = styled(Copy)`
  font-size: 1.15em;
  text-align: right;
  padding: 0 20px 60px 30px;
`;

const Main = ({ mobile }) => {
  if (mobile) {
    return (
      <MobileCopy mobile>
        <p>
          {`Pulse Networks provides a suite of services aimed at proving a complete end to end
                solution for our clients, from planning and design through to installation
                and commissioning. The client has the option to choose a full turnkey solution or
                select individual services to augment their own resources.`}
        </p>
      </MobileCopy>
    );
  } else
    return (
      <Copy right>
        <p>
          {`Pulse Networks provides a suite of services aimed at proving a complete end to end
          solution for our clients, from planning and design through to installation
          and commissioning. The client has the option to choose a full turnkey solution or
          select individual services to augment their own resources.`}
        </p>
        <p>
          {`This may be a feasibility study to see how a project stacks up, stake holder consultation
          to reveal any potential conflicts or a FTTH design and BOM for construction. What ever
          your needs, Pulse Networks is here to make your project a success.`}
        </p>
        <p>
          {`Pulse Networks has successfully completed projects throughout New Zealand, with an
          extensive client list and wide experience that covers Telephony, CATV, Radio and
          Fibre Optic networks.`}
        </p>
      </Copy>
    );
};

export default Main;
