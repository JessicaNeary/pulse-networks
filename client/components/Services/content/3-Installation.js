import React from "react";
import { Icon, Item } from "../Services.style";
import { Copy } from "../../SharedStyles.style";

const Installation = () => {
  return (
    <Item>
      <Icon src="/images/services/install.svg" width="13%" />
      <Copy>
        <p>
          Pulse Networks works to tight deadlines to 'lighten up' client
          customers; we know that time/ing is money and that the project doesn't
          start clawing back a return until the customer is connected. To this
          end our installers work hand in hand with our construction crews to
          provide a connection in the shortest possible time.
        </p>
        <p>
          Pulse Networks has invested in the very latest jetting equipment from
          Europe allowing us to go where no installers have been before - our
          blow cable distances are up to 2.5kms and we can install microducts in
          existing ducts even over resident cables significantly increasing duct
          capacity and deferring expensive overlays.
        </p>
        <p>
          Along with installing and commissioning our clients switches and
          routers we provide comprehensive test results , equipment audits and
          manage all building consents and approvals.
        </p>
      </Copy>
    </Item>
  );
};

export default Installation;
