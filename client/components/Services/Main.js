import React from "react";

import { Copy } from "../SharedStyles.style";

const Main = () => {
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
